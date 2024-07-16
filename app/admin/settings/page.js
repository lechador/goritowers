'use client'
import { useState, useEffect } from "react"
import axios from "axios"


export default function Settings() {
    const [settings, setSettings] = useState([])
    const [editing, setEditing] = useState(null)
    const [newSettingValue, setNewSettingValue] = useState("")

    const getSettings = async () => {
        const { data } = await axios.get('/api/settings')
        setSettings(data.settings)
    }

    const updateSetting = async (id) => {
        await axios.put(`/api/settings`, { id, newValue: newSettingValue })
        getSettings()
        setEditing(null)
        setNewSettingValue("")
    }

    useEffect(() => {
        getSettings()
    }, [])

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">პარამეტრები</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                {settings && settings.map(setting => (
                    <div key={setting._id} className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50">
                        {editing === setting._id ? (
                            <div className="flex flex-col space-y-4">
                                <textarea 
                                    type="text"
                                    className="border p-3 rounded w-full"
                                    value={newSettingValue}
                                    onChange={(e) => setNewSettingValue(e.target.value)}
                                />
                                <div className="flex space-x-2">
                                    <button 
                                        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                                        onClick={() => updateSetting(setting._id)}
                                    >
                                        შენახვა
                                    </button>
                                    <button 
                                        className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700"
                                        onClick={() => { setEditing(null); setNewSettingValue("") }}
                                    >
                                        გაუქმება
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-lg font-semibold text-gray-700">{setting.setting_name}</div>
                                    <div className="text-gray-500">{setting.setting_value}</div>
                                </div>
                                <button 
                                    className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
                                    onClick={() => { setEditing(setting._id); setNewSettingValue(setting.setting_value) }}
                                >
                                    რედაქტირება
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
