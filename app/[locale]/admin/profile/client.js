'use client';

import React, { useState } from 'react';
import { FaLock, FaSave } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';

export default function ProfileClient() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            toast.error('ახალი პაროლები არ ემთხვევა');
            return;
        }

        if (newPassword.length < 6) {
            toast.error('პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'შეცდომა პაროლის შეცვლისას');
            }

            toast.success('პაროლი წარმატებით შეიცვალა');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <Toaster position="top-right" />
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <FaLock className="text-xl" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">პაროლის შეცვლა</h2>
                    <p className="text-sm text-gray-500">შეიყვანეთ მიმდინარე და ახალი პაროლი მონაცემების გასანახლებლად</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-700">მიმდინარე პაროლი</span>
                    </label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="input input-bordered w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-700">ახალი პაროლი</span>
                    </label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="input input-bordered w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-700">გაიმეორეთ ახალი პაროლი</span>
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input input-bordered w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                        required
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`btn btn-primary w-full bg-gradient-to-r from-orange-500 to-orange-600 border-none text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all text-lg capitalize ${loading ? 'loading' : ''}`}
                    >
                        {loading ? 'მიმდინარეობს განახლება...' : (
                            <span className="flex items-center gap-2">
                                <FaSave />
                                პაროლის განახლება
                            </span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
