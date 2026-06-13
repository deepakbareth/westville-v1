import AboutSection from "../Component/Home/AboutSection"
import CottageDetails from "../Component/Home/CottageDetails"
import FeatureBlocks from "../Component/Home/FeatureBlocks"
import GallerySlider from "../Component/Home/GallerySlider"
import Hero from "../Component/Home/Hero"
import LocalExperiences from "../Component/Home/LocalExperiences"
import Testimonials from "../Component/Home/Testimonials"
import Welcome from "../Component/Home/Welcome"
import Footer from "../Component/Layout/Footer"
import Navbar from "../Component/Layout/Navbar"

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <AboutSection />
            <CottageDetails />
            <Testimonials />
            <FeatureBlocks />
            <LocalExperiences />
            <GallerySlider />
            {/* <Footer /> */}
            {/* <Welcome /> */}
        </>
    )
}
export default Home