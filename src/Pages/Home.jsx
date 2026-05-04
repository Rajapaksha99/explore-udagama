import Contact from "../Components/Contact"
import Experience from "../Components/Experience"
import FindUs from "../Components/Findus"
import Footer from "../Components/Footer"
import Gallery from "../Components/Gallery"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Nearby from "../Components/Nearby"
import Village from "../Components/Village"
import Waterfalls from "../Components/Waterfalls"


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Waterfalls/>
    <Village/>
    <Experience/>
    <Nearby/>
    <Gallery/>
    <FindUs/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default Home
