'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaBuilding, FaComments, FaSignOutAlt, FaUserCog } from 'react-icons/fa';
import Image from 'next/image';

const AdminSidebar = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    const linkBaseClass = "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium my-1";
    const activeClass = "bg-orange-500 text-white shadow-lg shadow-orange-500/30";
    const inactiveClass = "text-gray-400 hover:bg-gray-800 hover:text-white";

    return (
        <aside className="w-full md:w-72 bg-gray-900 border-r border-gray-800 text-white flex flex-col h-screen sticky top-0 md:relative z-20">
            {/* Logo Area */}
            <div className="p-6 flex items-center justify-center border-b border-gray-800/50 mb-4">
               <Image src="/logo.png" alt="Gori Towers" width={140} height={50} className="object-contain brightness-0 invert opacity-90" />
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">მენიუ</p>
                
                <Link 
                    href="/ka/admin" 
                    className={`${linkBaseClass} ${pathname.endsWith('/admin') ? activeClass : inactiveClass}`}
                >
                    <FaHome className="text-xl" />
                    <span>მთავარი</span>
                </Link>

                <Link 
                    href="/ka/admin/apartments" 
                    className={`${linkBaseClass} ${pathname.includes('/apartments') ? activeClass : inactiveClass}`}
                >
                    <FaBuilding className="text-xl" />
                    <span>ბინები</span>
                </Link>

                <Link 
                    href="/ka/admin/messages" 
                    className={`${linkBaseClass} ${pathname.includes('/messages') ? activeClass : inactiveClass}`}
                >
                    <FaComments className="text-xl" />
                    <span>შეტყობინებები</span>
                </Link>

                <Link 
                    href="/ka/admin/profile" 
                    className={`${linkBaseClass} ${pathname.includes('/profile') ? activeClass : inactiveClass}`}
                >
                    <FaUserCog className="text-xl" />
                    <span>პროფილი</span>
                </Link>
            </nav>

            {/* Footer / User Info could go here */}
            <div className="p-4 border-t border-gray-800 text-center text-gray-500 text-xs">
                Gori Towers Admin v2.0
            </div>
        </aside>
    );
};

export default AdminSidebar;
