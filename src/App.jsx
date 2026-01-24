import React, { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
import Footer from './components/footer/Footer'
// import NotFoundPage from './pages/NotFoundPage'
import PageTitle from './components/pagetitle/PageTitle'
// import BusinessPage from './pages/BusinessPage'
// import EntoirentmentPage from './pages/EntoirentmentPage'
// import BusinessPage from './pages/BusinessPage'
// import EntoirentmentPage from './pages/EntoirentmentPage'
// import EntoirentmentPage from './pages/EntoirentmentPage'
// import GeneralPage from './pages/GeneralPage'
// import HealthPage from './pages/HealthPage'
const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const EntoirenmentPage = lazy(() => import('./pages/EntoirentmentPage'))
const GeneralPage = lazy(() => import('./pages/GeneralPage'))
const HealthPage = lazy(() => import('./pages/HealthPage'))
const BusinessPage = lazy(() => import('./pages/BusinessPage'))

export default function App() {

  return (
    <>
      <Navbar />
      <Suspense fallback={<> <div class="flex flex-col items-center justify-center mt-28 mb-28 ">
        <div class="h-12 w-12 animate-spin rounded-full mb-7 border-4 border-solid border-blue-500 border-t-transparent">
        </div>
        <span class="text-2xl  text-blue-600 ">Loading...</span>
      </div>
      </>}>

        <Routes>
          <Route path='/' element={<>
            <PageTitle title='Home' />
            <HomePage />
          </>} />
          <Route path="/Business" element={<><PageTitle title="Business" /> <BusinessPage /> </>} > </Route>
          <Route path="/Entertainment" element={<><PageTitle title="Entertainment" />  <EntoirenmentPage /></>} > </Route>
          <Route path="/General" element={<><PageTitle title="General" /><GeneralPage /></>} >  </Route>
          <Route path="/Health" element={<><PageTitle title="Health" /> <HealthPage /> </>} ></Route>
          <Route path="/about" element={<><PageTitle title="About" /></>} > </Route>
          <Route path="/about" element={<><PageTitle title="About" /></>} > </Route>
          <Route path="/about" element={<><PageTitle title="About" /></>} > </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

{/* <div className="max-w-7xl mx-auto p-6">
<div className="mb-10">
<input 
type="text" 
placeholder="Searching..." 
className="w-full p-4 border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
{data && data.map((item) => (
<div key={item.url} className="flex flex-col group cursor-pointer">
  <div className="relative aspect-square overflow-hidden mb-4 bg-gray-100">
    <img 
      src={item.urlToImage} 
      alt={item.title} 
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="flex flex-col flex-1">
    <span className="text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-wider">
      {item.source.name || "General"}
    </span>

    <h3 className="text-lg font-bold leading-tight mb-4 line-clamp-4 text-gray-900 group-hover:text-blue-600 transition-colors">
      {item.title}
    </h3>

    <div className="mt-auto flex items-center gap-2 text-[11px] text-gray-500 font-medium">
      <span className="truncate max-w-25">{item.author || "Staff"}</span>
      <span>•</span>
      <span>{new Date(item.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
    </div>
  </div>
</div>
))}
</div>
</div> */}