
import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import i18n from '../../../i18n.js'
import { changeLanguage } from 'i18next';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-3">
        <img className="w-28" src={logo} alt="logo" />

        <div className="hidden md:flex gap-4">
          <NavLink to="/home" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('mahsulot')}</NavLink>
          <div className="w-px h-7 border border-[#00103D1F] lg:block hidden"></div>
          <NavLink to="/sertifikat" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('sertifikat')}</NavLink>
          <div className="w-px h-7 border border-[#00103D1F] lg:block hidden"></div>
          <NavLink to="/jamoa" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('jamoa')}</NavLink>
          <div className="w-px h-7 border border-[#00103D1F] lg:block hidden"></div>
          <NavLink to="/haqimizda" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('haqimizda')}</NavLink>
          <div className="w-px h-7 border border-[#00103D1F] lg:block hidden"></div>
          <NavLink to="/yangiliklar" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('yangilik')}</NavLink>
          <div className="w-px h-7 border border-[#00103D1F] lg:block hidden"></div>
          <NavLink to="/bosh-orinlar" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('bosh-orinlar')}</NavLink>
          <div className="w-px h-7 border border-[#00103D1F] lg:block hidden"></div>
          <NavLink to="/" className={({ isActive }) => `${isActive ? "text-[#EF7C00] underline! " : ""} text-[#2C2D2E] max-[850px]:hidden duration-300 font-medium text-[16px] font-montserrat no-underline`}>{t('boglanish')}</NavLink>
        </div>

        <select
          className="border border-gray-300 rounded-md px-2 py-1"
          onChange={changeLanguage}
        >
          <option onClick={() => changeLanguage('uz')} className="language-item" value="uz">UZ</option>
          <option onClick={() => changeLanguage('ru')} className="language-item" value="ru">RU</option>
          <option onClick={() => changeLanguage('en')} className="language-item" value="en">EN</option>
        </select>

        <button
          className="md:hidden text-3xl font-bold ml-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ≡
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed left-0 top-0 h-full w-64 bg-orange-400 z-50 p-6 flex flex-col gap-5 shadow-2xl">
            <NavLink className='text-white bg-orange-400 duration-300 px-6 py-2 hover:bg-orange-500 hover:text-white ' to="/home" onClick={() => setMobileMenuOpen(false)}>{t('mahsulot')}</NavLink>
            <NavLink className='text-white bg-orange-400 duration-300 px-6 py-2 hover:bg-orange-500 hover:text-white ' to="/sertifikat" onClick={() => setMobileMenuOpen(false)}>{t('sertifikat')}</NavLink>
            <NavLink className='text-white bg-orange-400 duration-300 px-6 py-2 hover:bg-orange-500 hover:text-white ' to="/jamoa" onClick={() => setMobileMenuOpen(false)}>{t('jamoa')}</NavLink>
            <NavLink className='text-white bg-orange-400 duration-300 px-6 py-2 hover:bg-orange-500 hover:text-white ' to="/haqimizda" onClick={() => setMobileMenuOpen(false)}>{t('haqimizda')}</NavLink>
            <NavLink className='text-white bg-orange-400 duration-300 px-6 py-2 hover:bg-orange-500 hover:text-white ' to="/yangiliklar" onClick={() => setMobileMenuOpen(false)}>{t('yangilik')}</NavLink>
            <NavLink className='text-white bg-orange-400 duration-300 px-6 py-2 hover:bg-orange-500 hover:text-white ' to="/bosh-orinlar" onClick={() => setMobileMenuOpen(false)}>{t('bosh-orinlar')}</NavLink>
            <NavLink className='text-white bg-orange-400 duration-300 px-6 pt-2 hover:bg-orange-500 hover:text-white pb-4 ' to="/" onClick={() => setMobileMenuOpen(false)}>{t('boglanish')}</NavLink>
          </div>
        </>
      )}
    </nav>
  );
}

