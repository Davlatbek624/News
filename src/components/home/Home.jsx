import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Home() {
    const [data, setData] = useState(null)
    const apikey = "ca5341aad4da4a4d8947d21b0c750a09"
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`
    const getData = () => {
        axios.get(apiUrl).then(res => {
            setData(res.data.articles)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {data && data.map((item, index) => (
                <div key={item.url || index} className="max-w-4xl mx-auto my-8 p-6 border border-gray-300 rounded-lg shadow-md">
                    <div className="w-full">            
                        {item.urlToImage && <img src={item.urlToImage} alt={item.title} className="w-full h-64 object-cover rounded mb-4" />}
                        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <span className="text-sm text-gray-500">{item.author} | {new Date(item.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
