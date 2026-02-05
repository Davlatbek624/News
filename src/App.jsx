import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import NotFoundPage from './pages/NotFoundPage'
import PageTitle from './components/pagetitle/PageTitle'
import { useTranslation } from 'react-i18next'
import BoglanishPage from './pages/BoglanishPage'

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <PageTitle title={t("boglanish")} />
          <BoglanishPage />
        </>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App