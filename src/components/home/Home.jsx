import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function NewsSection() {
    const [data, setData] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [viewDetail, setViewDetail] = useState(false);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=apple&from=2026-01-23&to=2026-01-23&sortBy=popularity&apiKey=ca5341aad4da4a4d8947d21b0c750a09")
            .then(res => res.json())
            .then(obj => {
                const articles = obj.articles || [];
                setData(articles);
            }).catch(err => console.log(err));
    }, []);

    const handleOpenDetail = (news) => {
        setSelectedNews(news);
        setViewDetail(true);
    };

    return (
        <div className="container max-w-7xl bg-white px-5 mx-auto min-h-screen flex items-center justify-center">
            
            {!viewDetail ? (
                <div className="w-full p-6">
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Searching..."
                            className="w-full p-2 border-2 border-gray-200 text-2xl outline-none focus:border-[#109BE9] font-light"
                        />
                    </div>

                    {data.length > 0 && (
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
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
                                        {data.slice(i * 8, (i + 1) * 8).map((news) => (
                                            <div
                                                key={news.url}
                                                onClick={() => handleOpenDetail(news)}
                                                className="cursor-pointer group flex flex-col"
                                            >
                                                <div className="aspect-square bg-gray-200 mb-3 overflow-hidden relative">
                                                    <img src={news.urlToImage} className="w-full h-full object-cover" alt="" />
                                                    <div className="absolute bottom-0 left-0 bg-white px-2 py-1 text-[10px] text-gray-400 font-bold border-t border-r border-gray-100 uppercase">
                                                        {news.source?.name?.split('.')[0] || "Science"}
                                                    </div>
                                                </div>
                                                <h3 className="font-bold text-[14px] leading-[1.2] mb-3 line-clamp-4 text-gray-800">
                                                    {news.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                                                    <span className="truncate max-w-17.5">{news.author || "Floyd Miles"}</span>
                                                    <span>3 Days Ago</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            ) : (
                <div className="w-full max-w-4xl flex flex-col border border-gray-100 shadow-2xl animate-in fade-in zoom-in duration-300">
                    <div className="bg-[#109BE9] p-12 text-white flex flex-col justify-center">
                        <p className="text-[11px] mb-6 font-bold opacity-90 tracking-widest uppercase">
                            Published at {new Date(selectedNews.publishedAt).toLocaleDateString('en-GB').replace(/\//g, '.')}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-10">
                            {selectedNews.title}
                        </h1>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-10 h-10 rounded-full bg-white/30 border border-white/20"></div>
                            <span className="text-[14px] font-semibold tracking-wide">
                                {selectedNews.author || "Cameron Williamson"}
                            </span>
                        </div>
                    </div>

                    <div className="p-12 bg-white text-gray-500 text-[15px] leading-[1.6]">
                        <p className="mb-8 text-gray-800 font-medium text-lg">{selectedNews.description}</p>
                        <div className="space-y-6 opacity-80">
                            <p>{selectedNews.content?.split("[+")[0]}</p>
                        </div>
                        
                        <button 
                            onClick={() => setViewDetail(false)}
                            className="mt-12 px-10 py-3 bg-[#109BE9] text-white font-bold rounded hover:bg-blue-600 transition-colors uppercase tracking-widest text-sm"
                        >
                            Back to News
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}