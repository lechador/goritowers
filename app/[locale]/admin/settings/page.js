import {unstable_setRequestLocale} from 'next-intl/server';
import AdminSettingsClient from './client';

export default function Settings({params: {locale}}) {
    unstable_setRequestLocale(locale);
    
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">პარამეტრები</h1>
            <AdminSettingsClient />
        </div>
    )
}
