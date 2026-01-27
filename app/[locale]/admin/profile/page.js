
import ProfileClient from './client';

export default function ProfilePage() {
    return (
        <div className="container mx-auto p-4 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">ადმინისტრატორის პროფილი</h1>
            <ProfileClient />
        </div>
    );
}
