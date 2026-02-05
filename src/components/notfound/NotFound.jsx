import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";



export default function NotFound() {
        const { t, i18n } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-[#FF7010]">404</h1>
                <p className="text-2xl md:text-3xl text-orange-600 mb-4">{t("not-found-p")}</p>
                <p className="text-orange-900 mb-8">{t("not-found")}</p>

                <Link
                    to="/"
                    className="px-6 py-3 bg-[#FF7010] text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}
