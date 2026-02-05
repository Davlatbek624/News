import React, { useState } from 'react'
import bg from '../../assets/background.svg'
import { FaUser, FaPhone } from 'react-icons/fa'
import { useTranslation } from "react-i18next";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Boglanish() {
    const initialState = { Name: "", Number: "", Comment: "" }
    const [formData, setFormData] = useState(initialState);
    const { t, i18n } = useTranslation();

    const botToken = "8282944896:AAHXTyal5tAUSJJ_-QbQuDlRLu32rZrx0yE";
    const chatId = "5479060886";

    // formni yuborish funksiyasi (hozircha faqat defaultni to'xtatadi)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.Name || !formData.Number || !formData.Comment) {
            toast.warn('Iltimos, barcha maydonlarni to‘ldiring!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
            
        }
        const message = `👤Ism: ${formData.Name}\n 📞Telefon Raqami: ${formData.Number} \n  💬Izoh: ${formData.Comment}`;
        // Bu yerda telegramga yuborish yoki boshqa amallarni bajarishingiz mumkin
        toast.success(' Ish bajarildi.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <ToastContainer />
            <section className='w-full mt-28 mb-28'>
                <div style={{ backgroundImage: `url(${bg})` }} className="px-5 mb-10 bg-no-repeat bg-cover bg-center flex items-start max-w-7xl mx-auto bg-white rounded-2xl shadow-[0px_4px_32px_0px_rgba(0,16,61,0.16)] flex-col md:flex-rowpx-6 md:px-12 py-10 gap-8">
                    <div className="flex-1 min-[850px]:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-3">
                            {t('fourth-title')}
                        </h2>
                        <p className="mb-6 text-[#2C2D2E] font-montserrat">
                            {t('fourth-description')}
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EF7C00]">
                                        <FaUser />
                                    </span>
                                    <input
                                        name='Name'
                                        type="text"
                                        placeholder={t('ism')}
                                        className="w-full max-[850px]:bg-gray-50 focus:border-[#EF7C00] border-[#E0E2E7] pl-10 pr-3 py-2 duration-300 hover:shadow-lg border rounded-lg outline-none font-montserrat"
                                        value={formData.Name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EF7C00]">
                                        <FaPhone />
                                    </span>
                                    <input
                                        name='Number'
                                        type="text"
                                        placeholder="+375 (29) 0000000"
                                        className="w-full max-[850px]:bg-gray-50 focus:border-[#EF7C00] border-[#E0E2E7] pl-10 pr-3 py-2 duration-300 hover:shadow-lg border rounded-lg outline-none font-montserrat"
                                        value={formData.Number}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <textarea
                                name='Comment'
                                placeholder={t('izoh')}
                                className="w-full max-[850px]:bg-gray-50 focus:border-[#EF7C00] border-[#E0E2E7] pl-10 pr-3 py-2 duration-300 hover:shadow-lg border rounded-lg outline-none font-montserrat"
                                rows={3}
                                value={formData.Comment}
                                onChange={handleChange}
                            />
                            <button
                                className="bg-[#EF7C00] text-white font-montserrat font-medium px-6 py-2 rounded-lg hover:-translate-y-0.5 hover:bg-orange-600 duration-300"
                            >
                                {t('info')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
