import { useState, Suspense, lazy } from 'react' // Import Suspense and lazy
import { Routes, Route } from 'react-router-dom'
import './App.css'

// === STATIC IMPORTS ===
// Main layout elements should remain static so they appear immediately without flashing
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer'
import PTownLayout from './Component/Layout/PTownLayout' // <-- Aapka naya Layout import karein
import PetsLayout from './Component/Layout/PetsLayout'
import PetsPage from './Pages/PetsPage'

// === LAZY LOADED PAGES ===
// Pages are loaded dynamically only when the user clicks their route
const Home = lazy(() => import('./Pages/Home'))
const YourHost = lazy(() => import('./Pages/YourHost'))
const Property = lazy(() => import('./Pages/Property'))
const ProvincetownPage = lazy(() => import('./Pages/ProvincetownPage'))
const Gallery = lazy(() => import('./Pages/Gallery'))
const AttractionsPage = lazy(() => import('./Pages/AttractionsPage'))
const Restaurants = lazy(() => import('./Pages/RestaurantsPage'))
const ThingsToDoPage = lazy(() => import('./Pages/ThingsToDoPage'))

const WhatsProvided = lazy(() => import('./Pages/WhatsProvided'))
const MustDos = lazy(() => import('./Pages/MustDos'))
const TravelTips = lazy(() => import('./Pages/TravelTips'))
const EmergencyCare = lazy(() => import('./Pages/EmergencyCare'))
const DogParkServices = lazy(() => import('./Pages/DogParkServices'))
const PetFriendlyRestaurants = lazy(() => import('./Pages/PetFriendlyRestaurants'))

// Dummy pages for sub-links (Aap baad me inki real files bana kar import kar lena)
// const Attractionse = () => <div className="py-20 text-center text-2xl">Attractions Content Here</div>;
// const Restaurants = () => <div className="py-20 text-center text-2xl">Restaurants Content Here</div>;
// const ThingsToDo = () => <div className="py-20 text-center text-2xl">Things To Do Content Here</div>;

function App() {
  return (
    <>
      {/* Main Navbar jo har page par rahega */}
      <Navbar />

      {/* Suspense is required for lazy loading. Fallback shows while the page is downloading */}
      <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh] text-[#2D5D80] text-xl">Loading...</div>}>
        <Routes>
          {/* Normal Routes */}
          <Route path="/westville-v1/" element={<Home />} />
          <Route path="/westville-v1/your-hosts" element={<YourHost />} />
          <Route path="/westville-v1/the-cottage" element={<Property />} />
          <Route path="/westville-v1/gallery" element={<Gallery />} />

          {/* === NESTED ROUTES FOR P-TOWN === */}
          {/* Parent Route me PTownLayout lagaya */}
          <Route path="/westville-v1/provincetown" element={<PTownLayout />}>

            {/* 'index' ka matlab hai ki jab user /westville-v1/provincetown par jayega, to default ye dikhega */}
            <Route index element={<ProvincetownPage />} />

            {/* Sub-pages: Ye sab aapke PTownLayout ke <Outlet /> ke andar dikhenge */}
            <Route path="attractions" element={<AttractionsPage />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="things-to-do" element={<ThingsToDoPage />} />

          </Route>

          <Route path="/westville-v1/pets" element={<PetsLayout />}>
            {/* 'index' ka matlab hai ki jab user /westville-v1/pets par jayega, to default ye dikhega */}
            <Route index element={<PetsPage />} />

            {/* Sub-pages under /westville-v1/pets */}
            {/* <Route path="whats-provided" element={<WhatsProvided />} />
            <Route path="must-dos" element={<MustDos />} /> */}
            {/* <Route path="travel-tips" element={<TravelTips />} />
            <Route path="emergency-care" element={<EmergencyCare />} /> */}
            <Route path="dog-park-services" element={<DogParkServices />} />
            <Route path="pet-friendly-restaurants" element={<PetFriendlyRestaurants />} />
          </Route>

        </Routes>

      </Suspense >

      {/* Footer jo har page par rahega */}
      < Footer />
    </>
  )
}

export default App