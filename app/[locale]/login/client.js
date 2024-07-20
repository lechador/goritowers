'use client'
import React, { useState } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function LoginClient() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const router = useRouter()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        const res = await signIn("credentials", {
            email, 
            password, 
            redirect: false
        })
        res.error ? console.log('arasworia') : router.replace('/admin')
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </form>
  )
}
