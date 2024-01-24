'use client'
import { signOut } from "next-auth/react"
import Image from "next/image"

export default function AdminHeader() {
  return (
    <header className="bg-white shadow p-4">
        <div className="flex flex-row justify-between"> 
          <Image src='/logo.png' alt="logo" width={150} height={50} />
          <button className="text-red-400 font-bold" onClick={() => signOut()}>გამოსვლა</button>
        </div>
    </header>
  )
}
