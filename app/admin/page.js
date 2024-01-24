'use client'
import { signOut } from "next-auth/react"

export default function Admin() {
  return (
    <div> 
      protected route
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
