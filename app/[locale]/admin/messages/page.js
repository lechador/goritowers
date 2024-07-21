import {unstable_setRequestLocale} from 'next-intl/server';
import AdminMessagesClient from './client';

export default function Messages({params: {locale}}) {
    unstable_setRequestLocale(locale);
    
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">ტექსტები</h1>
            <AdminMessagesClient locale={locale} />
        </div>
    )
}
