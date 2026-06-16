import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import YourHost from './Pages/YourHost'
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer'
import Property from './Pages/Property'

// Layouts and Pages import karein (path apne hisaab se adjust kar lena)
import ProvincetownPage from './Pages/ProvincetownPage'
import PTownLayout from './Component/Layout/PTownLayout' // <-- Aapka naya Layout import karein
import Gallery from './Pages/Gallery'

// Dummy pages for sub-links (Aap baad me inki real files bana kar import kar lena)
const Attractions = () => <div className="py-20 text-center text-2xl">Attractions Content Here</div>;
const Restaurants = () => <div className="py-20 text-center text-2xl">Restaurants Content Here</div>;
const ThingsToDo = () => <div className="py-20 text-center text-2xl">Things To Do Content Here</div>;

function App() {
  return (
    <>
      {/* Main Navbar jo har page par rahega */}
      <Navbar />

      <Routes>
        {/* Normal Routes */}
        <Route path="/westville-v1/" element={<Home />} />
        <Route path="/westville-v1/your-hosts" element={<YourHost />} />
        <Route path="/westville-v1/the-cottage" element={<Property />} />
        <Route path="/westville-v1/gallery" element={<Gallery />} />

        {/* === NESTED ROUTES FOR P-TOWN === */}
        {/* Parent Route me PTownLayout lagaya */}
        {/* <Route path="/westville-v1/provincetown" element={<PTownLayout />}> */}

        {/* 'index' ka matlab hai ki jab user /westville-v1/provincetown par jayega, to default ye dikhega */}
        {/* <Route index element={<ProvincetownPage />} /> */}

        {/* Sub-pages: Ye sab aapke PTownLayout ke <Outlet /> ke andar dikhenge */}
        {/* <Route path="attractions" element={<Attractions />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="things-to-do" element={<ThingsToDo />} /> */}

        {/* </Route> */}
      </Routes>

      {/* Footer jo har page par rahega */}
      <Footer />
    </>
  )
}

export default App