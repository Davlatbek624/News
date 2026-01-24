import React, { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <nav className='py-6 bg-[#109BE9] shadow'>
                <div className="container max-w-7xl flex items-center justify-between px-5 mx-auto">
                    <div className="flex gap-7.5 items-center justify-center">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-600  " : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[]:hidden text-gray-50 text-[18px]`}>Home</NavLink>
                        <NavLink to="/Business" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[250px]:hidden text-gray-50 text-[18px]`}>Business</NavLink>
                        <NavLink to="/Entertainment" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[400px]:hidden text-gray-50 text-[18px]`}>Entertainment</NavLink>
                        <NavLink to="/General" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[450px]:hidden text-gray-50 text-[18px]`}>General</NavLink>
                        <NavLink to="/Health" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[550px]:hidden text-gray-50 text-[18px]`}>Health</NavLink>
                        <NavLink to="/Science" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[650px]:hidden text-gray-50 text-[18px]`}>Science</NavLink>
                        <NavLink to="/Sports" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[720px]:hidden text-gray-50 text-[18px]`}>Sports</NavLink>
                        <NavLink to="/Technology" className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-200 "}  duration-300  max-[800px]:hidden text-gray-50 text-[18px]`}>Technology</NavLink>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-white text-3xl md:hidden"
                    >
                        <LuMenu />
                    </button>

                    {mobileMenuOpen && (
                        <>
                            <div
                                className="fixed inset-0 bg-black/70 z-40"
                                onClick={() => setMobileMenuOpen(false)}
                            ></div>

                            <div className="fixed left-0 top-0 h-full w-64 bg-blue-400 z-50 p-6 flex flex-col gap-5 shadow-2xl">
                                <h2 className="font-bold text-xl border-b pb-2">Menu</h2>

                                <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Home</NavLink>
                                <NavLink to="/Entertainment"  onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Entertainment</NavLink>
                                <NavLink to="/Business" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Business</NavLink>
                                <NavLink to="/General" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>General</NavLink>
                                <NavLink to="/Health" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Health</NavLink>
                                <NavLink to="/Science" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Science</NavLink>
                                <NavLink to="/Sports" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Sports</NavLink>
                                <NavLink to="/Technology" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-red-600" : " hover:scale-105 hover:text-gray-700 "}  duration-300 text-black text-[18px]`}>Technology</NavLink>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-auto bg-red-500 text-white p-2 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}