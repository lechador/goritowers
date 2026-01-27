'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaSave, FaTimes, FaGlobe } from "react-icons/fa";

export default function AdminMessagesClient({locale}) {
    const [messages, setMessages] = useState({});
    const [editing, setEditing] = useState({ key: null, subKey: null });
    const [newMessageValue, setNewMessageValue] = useState("");
    const [error, setError] = useState("");

    const getMessages = async () => {
        try {
            const { data } = await axios.get(`/api/messages?locale=${locale}`);
            if (data.messages && data.messages.length > 0) {
                 setMessages(data.messages[0].messages);
            }
        } catch (err) {
            console.error("Error fetching messages:", err);
            setError("Failed to fetch messages.");
        }
    };

    const updateMessage = async () => {
        try {
            const nestedKey = `${editing.key}.${editing.subKey}`;
            await axios.put(`/api/messages`, { nestedKey, newValue: newMessageValue, locale });
            getMessages();
            setEditing({ key: null, subKey: null });
            setNewMessageValue("");
            setError("");
        } catch (err) {
            console.error("Error updating message:", err);
            setError("Failed to update message.");
        }
    };
    

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <FaGlobe className="text-orange-500" />
                    კონტენტის მართვა ({locale.toUpperCase()})
                </h2>
                <p className="text-sm text-gray-500 mt-1">შეცვალეთ ვებ-გვერდის ტექსტები აქედან.</p>
            </div>

            {error && <div className="alert alert-error mb-4">{error}</div>}

            <div className="grid grid-cols-1 gap-6">
                {Object.keys(messages).map(key => (
                    <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <h3 className="font-bold text-lg text-gray-700 capitalize">{key} სექცია</h3>
                        </div>
                        
                        <div className="divide-y divide-gray-100">
                            {Object.keys(messages[key]).map(subKey => (
                                <div key={subKey} className="p-6 transition-colors hover:bg-gray-50">
                                    {editing.key === key && editing.subKey === subKey ? (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center text-sm mb-1">
                                                <span className="font-mono text-gray-500">{subKey}</span>
                                            </div>
                                            <textarea 
                                                className="textarea textarea-bordered w-full h-32 text-base"
                                                value={newMessageValue}
                                                onChange={(e) => setNewMessageValue(e.target.value)}
                                                autoFocus
                                            />
                                            <div className="flex justify-end gap-3">
                                                <button 
                                                    className="btn btn-ghost btn-sm"
                                                    onClick={() => { setEditing({ key: null, subKey: null }); setNewMessageValue(""); }}
                                                >
                                                    <FaTimes /> გაუქმება
                                                </button>
                                                <button 
                                                    className="btn btn-success text-white btn-sm"
                                                    onClick={() => updateMessage()}
                                                >
                                                    <FaSave /> შენახვა
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-start gap-4">
                                            <div className="flex-1">
                                                <div className="text-xs font-mono text-gray-400 mb-1">{subKey}</div>
                                                <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">{messages[key][subKey]}</div>
                                            </div>
                                            <button 
                                                className="btn btn-circle btn-ghost btn-sm opacity-50 hover:opacity-100 text-orange-500"
                                                onClick={() => { 
                                                    setEditing({ key, subKey }); 
                                                    setNewMessageValue(messages[key][subKey]);
                                                }}
                                            >
                                                <FaEdit />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
