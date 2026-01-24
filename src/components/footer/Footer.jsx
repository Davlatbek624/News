import React from 'react';
import { FaTelegramPlane, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#109BE9] text-white mt-auto">
            <div className="container max-w-7xl mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">DAVLATBEK</h2>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            Professional web developer focused on creating clean and user-friendly experiences.
                            Available for new projects and collaborations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold border-b border-white/20 pb-2 w-max">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <NavLink to="/" className="hover:translate-x-2 duration-300 text-blue-50">Home</NavLink>
                            <NavLink to="/Business" className="hover:translate-x-2 duration-300 text-blue-50">Business</NavLink>
                            <NavLink to="/Technology" className="hover:translate-x-2 duration-300 text-blue-50">Technology</NavLink>
                            <NavLink to="/Science" className="hover:translate-x-2 duration-300 text-blue-50">Science</NavLink>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold border-b border-white/20 pb-2 w-max">Contact Me</h3>
                        <div className="flex flex-col gap-4 text-blue-50">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-200" />
                                <a href="tel:+998919102160" className="hover:text-white duration-300">+998 91 910 21 60</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-blue-200" />
                                <span>Termez City, Uzbekistan</span>
                            </div>
                        <div className="flex gap-4 mt-2">
                            <a href="https://t.me/davlatbek_624" target="_blank" className="hover:scale-110 duration-300 bg-white/20 p-2 rounded-full"><FaTelegramPlane size={20} /></a>
                            <a href="https://instagram.com/Dastro_pm" target="_blank" className="hover:scale-110 duration-300 bg-white/20 p-2 rounded-full"><FaInstagram size={20} /></a>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-blue-100">
                    <p>© {new Date().getFullYear()} Davlatbek. All rights reserved. Created with ❤️ in Termez.</p>
                </div>
            </div>
        </footer>
    );
}