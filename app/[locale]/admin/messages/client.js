'use client';
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminMessagesClient({locale}) {
    const [messages, setMessages] = useState({});
    const [editing, setEditing] = useState({ key: null, subKey: null });
    const [newMessageValue, setNewMessageValue] = useState("");
    const [error, setError] = useState("");

    const getMessages = async () => {
        try {
            const { data } = await axios.get(`/api/messages?locale=${locale}`); // adjust locale as needed
            setMessages(data.messages[0].messages); // Assuming data.messages is an array with one element
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
        <div className="bg-white shadow-md rounded-lg p-6">
            {error && <div className="text-red-600 mb-4">{error}</div>}
            {Object.keys(messages).map(key => (
                <div key={key}>
                    <h2 className="text-xl font-bold">{key}</h2>
                    {Object.keys(messages[key]).map(subKey => (
                        <div key={subKey} className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50">
                            {editing.key === key && editing.subKey === subKey ? (
                                <div className="flex flex-col space-y-4">
                                    <textarea 
                                        type="text"
                                        className="border p-3 rounded w-full"
                                        value={newMessageValue}
                                        onChange={(e) => setNewMessageValue(e.target.value)}
                                    />
                                    <div className="flex space-x-2">
                                        <button 
                                            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                                            onClick={() => updateMessage(messages._id, key, subKey)}
                                        >
                                            Save
                                        </button>
                                        <button 
                                            className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
                                            onClick={() => { setEditing({ key: null, subKey: null }); setNewMessageValue(""); }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-lg font-semibold text-gray-700">{subKey}</div>
                                        <div className="text-gray-500">{messages[key][subKey]}</div>
                                    </div>
                                    <button 
                                        className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
                                        onClick={() => { 
                                            setEditing({ key, subKey }); 
                                            setNewMessageValue(messages[key][subKey]);
                                        }}
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
