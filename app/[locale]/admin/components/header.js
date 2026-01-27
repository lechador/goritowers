'use client'
import { signOut } from "next-auth/react"
import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa"

export default function AdminHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <div>
            <h2 className="text-xl font-bold text-gray-800">ადმინ პანელი</h2>
            <p className="text-sm text-gray-500">მოგესალმებით, ადმინ</p>
        </div>

        <div className="flex items-center gap-6">
            <button className="btn btn-circle btn-ghost btn-sm">
                <FaBell className="text-gray-600 text-lg" />
            </button>
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-700">ადმინისტრატორი</p>
                        <p className="text-xs text-gray-400">მთავარი მომხმარებელი</p>
                    </div>
                    <div className="avatar placeholder">
                        <div className="bg-orange-500 text-neutral-content rounded-full w-10">
                            <span className="text-lg">A</span>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={() => signOut({ callbackUrl: '/login' })} 
                    className="btn btn-ghost btn-circle text-red-500 hover:bg-red-50 hover:text-red-600 tooltip tooltip-bottom"
                    data-tip="გასვლა"
                >
                    <FaSignOutAlt className="text-xl" />
                </button>
            </div>
        </div>
    </header>
  )
}
