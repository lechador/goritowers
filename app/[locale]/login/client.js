'use client'
import React, { useState } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { FaBuilding, FaLock, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function LoginClient() {
    const t = useTranslations('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });

            if (res?.error) {
                setError(t('invalidCredentials'));
                console.log('Login failed', res.error);
            } else {
                router.push('/admin');
                router.refresh(); 
            }
        } catch (err) {
            setError(t('unexpectedError'));
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-50">
                 <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                 <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                 <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-md w-full space-y-8 bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 relative z-10 transition-all hover:shadow-orange-500/10 hover:shadow-3xl">
                <div className="text-center">
                    <div className="mx-auto h-16 w-16 bg-gradient-to-tr from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg text-white mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                        <FaBuilding className="text-3xl" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        {t('welcomeBack')}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {t('signInText')}
                    </p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <div className="form-control w-full group">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">{t('email')}</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                                    <FaEnvelope />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="input input-bordered w-full pl-10 bg-white/50 focus:bg-white transition-all border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                    placeholder="admin@goritowers.ge"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>
                        
                        <div className="form-control w-full group">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">{t('password')}</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                                    <FaLock />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="input input-bordered w-full pl-10 bg-white/50 focus:bg-white transition-all border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="alert alert-error text-sm py-2 shadow-sm rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{error}</span>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-primary w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-none text-white shadow-lg shadow-orange-500/30 rounded-xl h-12 text-lg capitalize font-bold tracking-wide transition-all active:scale-95 ${loading ? 'loading' : ''}`}
                        >
                            {loading ? t('signingIn') : (
                                <span className="flex items-center gap-2">
                                    {t('signInBtn')} <FaSignInAlt />
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

