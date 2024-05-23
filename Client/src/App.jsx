import { useState } from 'react'
import './App.css'
import Header from './Layouts/Header'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/DetailsPage'
import FavoritePage from './Pages/FavoritePage'
import Footer from './Layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Favcontext from './Context/favorites'

function App() {
  const [favs, setFavs] = useState([])

  return (
    <>
    <Favcontext.Provider value={{favs,setFavs}}>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details-page" element={<DetailsPage />} />
        <Route path="/favorite-page" element={<FavoritePage />} />

      </Routes>
      <Footer/>
    </Favcontext.Provider>
    </>
  )
}

export default App
