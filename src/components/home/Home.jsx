import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("apple"); 

    const fetchNews = (query) => {
        const today = new Date().toISOString().split('T')[0];
        
        fetch(`https://newsapi.org/v2/everything?q=${query}&from=${today}&sortBy=popularity&apiKey=ca5341aad4da4a4d8947d21b0c750a09`)
            .then(res => res.json())
            .then(obj => {
                setData(obj.articles || []);
            })
            .catch(err => console.log("Xato yuz berdi:", err));
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchNews(searchTerm);
        }, 500); 

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-6">
            <div className="w-full max-w-7xl">
                
                <input
                    type="text"
                    placeholder="Xohlagan mavzuni yozing (masalan: Tesla)..."
                    value={searchTerm === "apple" ? "" : searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value || "apple")}
                    className="w-full p-3 border-2 border-gray-200 mb-8 outline-none focus:border-[#109BE9] text-xl font-light"
                />

                {data.length > 0 ? (
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="pb-12"
                    >
                        {Array.from({ length: Math.ceil(data.length / 8) }).map((_, i) => (
                            <SwiperSlide key={i}>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {data.slice(i * 8, (i + 1) * 8).map((news, idx) => (
                                        <div key={idx} className="cursor-pointer group flex flex-col">
                                            <div className="aspect-square bg-gray-100 mb-3 overflow-hidden relative">
                                                <img 
                                                    src={news.urlToImage || "https://via.placeholder.com/400x400?text=No+Image"} 
                                                    className="w-full h-full object-cover group-hover:scale-105 duration-500" 
                                                    alt="" 
                                                />
                                                <span className="absolute bottom-0 left-0 bg-white px-2 py-1 text-[9px] font-bold uppercase text-gray-400 border-t border-r border-gray-100">
                                                    {news.source?.name?.split('.')[0]}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-sm leading-tight line-clamp-3 mb-2 group-hover:text-[#109BE9]">
                                                {news.title}
                                            </h3>
                                            <div className="mt-auto flex items-center gap-2 text-[10px] text-gray-400">
                                                <span className="truncate">{news.author || "Staff"}</span>
                                                <span>•</span>
                                                <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="text-center py-20 text-gray-400 italic">
                        Ma'lumot topilmadi yoki yuklanmoqda...
                    </div>
                )}
            </div>
        </div>
    );
}