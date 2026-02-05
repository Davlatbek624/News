import React from 'react'
import { useTranslation } from 'react-i18next'
import logo2 from '../../assets/logo 2.svg'
import fb from '../../assets/fb.svg'
import vk from '../../assets/vk.svg'
import ln from '../../assets/linkedin.svg'

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <footer className="w-full bg-[#f5f6fa] pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-5">
        <div className="w-full flex justify-between items-center mb-2.5 gap-4">
          <img src={logo2} alt="Логотип" className="h-10" />
          <div className="flex items-center space-x-6">
            <img className='w-8 h-5' src={vk} alt="VK" />
            <img className='w-5 h-8' src={fb} alt="Facebook" />
            <img className='w-6 h-6' src={ln} alt="LinkedIn" />
          </div>
        </div>
        <hr className='w-full border-[#919399] mb-4' />
        <div className="flex flex-wrap justify-between gap-y-8 text-[#2C2D2E] font-montserrat mb-6">
          <div className="min-w-30 flex-1">
            <h3 className="font-bold text-xl mb-2">{t('footer-mahsulot')}</h3>
            <ul className="space-y-1">
              <li><a href="#">{t('p-laminattub')}</a></li>
              <li><a href="#">{t('p-ekstruziontub')}</a></li>
              <li><a href="#">{t('p-drugaiaupakovka')}</a></li>
            </ul>
          </div>
          <div className="min-w-30 flex-1">
            <h3 className="font-bold text-xl mb-2">{t('footer-kompaniya')}</h3>
            <ul className="space-y-1">
              <li><a href="#">{t('p-haqimizda')}</a></li>
              <li><a href="#">{t('p-jamoamiz')}</a></li>
              <li><a href="#">{t('p-sertifikat')}</a></li>
            </ul>
          </div>
          <div className="min-w-30 flex-1">
            <h3 className="font-bold text-xl mb-2">{t('footer-bolimi')}</h3>
            <ul className="space-y-1">
              <li><a href="#">{t('p-kontakt')}</a></li>
              <li><a href="#">{t('p-yangiliklar')}</a></li>
              <li><a href="#">{t('p-boshorinlar')}</a></li>
            </ul>
          </div>
          <div className="min-w-30 flex-1">
            <div className="mb-2 text-[#EF7C00] font-semibold">{t('belorus')}</div>
            <div className="text-sm leading-5 mb-3">
              +375 (17) 270 53 77<br />
              +375 (17) 270 53 78
            </div>
            <div className="mb-2 text-[#EF7C00] font-semibold">{t('moskva')}</div>
            <div className="text-sm leading-5">
              +7 (495) 280 73 44<br />
              +7 (495) 280 73 44
            </div>
          </div>
          <div className="min-w-30 flex-1">
            <div className="mb-2 text-[#EF7C00] font-semibold">{t('evropa')}</div>
            <div className="text-sm leading-5 mb-3">
              +48 73 1111 044
            </div>
            <div className="mb-2 text-[#EF7C00] font-semibold">{t('ekaterinburg')}</div>
            <div className="text-sm leading-5">
              +7 (343) 346 82 06
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#919399] font-montserrat mt-6 gap-2">
          <div>
            {t('manzil')}
          </div>
          <button onClick={scrollToTop} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-[#EF7C00] text-[#EF7C00] text-xl mt-2 md:mt-0 hover:bg-[#EF7C00] hover:text-white transition">
            <span style={{ display: 'inline-block'}}>^</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer