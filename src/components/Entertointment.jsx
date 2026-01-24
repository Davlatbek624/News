import React from 'react'
import { Link } from 'react-router-dom'

export default function Entertointment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
            <div className="text-center max-w-md">

                <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
                    Entertoinment Page
                </h2>



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
