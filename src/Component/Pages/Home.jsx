import AboutSection from "../Home/AboutSection"
import CottageDetails from "../Home/CottageDetails"
import FeatureBlocks from "../Home/FeatureBlocks"
import GallerySlider from "../Home/GallerySlider"
import Hero from "../Home/Hero"
import LocalExperiences from "../Home/LocalExperiences"
import Testimonials from "../Home/Testimonials"
import Welcome from "../Home/Welcome"
import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <CottageDetails />
            <Testimonials />
            <FeatureBlocks />
            <LocalExperiences />
            <GallerySlider />
            <Footer />
            {/* <Welcome /> */}
        </>
    )
}
export default Home