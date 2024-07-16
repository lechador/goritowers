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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">პარამეტრები</h1>
            <div className="grid grid-cols-1 gap-4">
                {settings && settings.map(setting => (
                    <div key={setting._id} className="p-4 border rounded shadow">
                        {editing === setting._id ? (
                            <>
                                <input 
                                    type="text"
                                    className="border p-2 rounded w-full"
                                    value={newSettingValue}
                                    onChange={(e) => setNewSettingValue(e.target.value)}
                                />
                                <button 
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => updateSetting(setting._id)}
                                >
                                    შენახვა
                                </button>
                                <button 
                                    className="mt-2 bg-gray-500 text-white px-4 py-2 rounded ml-2"
                                    onClick={() => { setEditing(null); setNewSettingValue("") }}
                                >
                                    გაუქმება
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="font-medium">{setting.setting_name}</div>
                                <div className="text-gray-600">{setting.setting_value}</div>
                                <button 
                                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                                    onClick={() => { setEditing(setting._id); setNewSettingValue(setting.setting_value) }}
                                >
                                    რედაქტირება
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
