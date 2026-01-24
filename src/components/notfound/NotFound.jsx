import React, {useState} from 'react'
import { Link } from 'react-router-dom'



export default function NotFound() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
    <div className="text-center max-w-md">
        <h1 className="text-9xl font-black text-[#109BE9] mb-4 opacity-90">404</h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-10 leading-relaxed">
            Oops! The page you are looking for might have been removed, 
            had its name changed, or is temporarily unavailable. 
            Please check the URL or return to the homepage.
        </p>

        <Link
            to="/"
            className="inline-block px-8 py-4 bg-[#109BE9] text-white font-bold rounded-full shadow-lg hover:bg-[#0d86ca] hover:-translate-y-1 transition duration-300 ease-in-out"
        >
            Back to Homepage
        </Link>
    </div>
</div>
    )
}
