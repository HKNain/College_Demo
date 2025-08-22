
import About from "../components/About"
import Contact from "../components/Contact"
import Events from "../components/Events"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Mentors from "../components/Mentors"
import Navbar from "../components/Navbar"
import Technical from "../components/Technical"

const MainPage = () => {
  return (
    <div className='min-h-screen w-full bg-white overflow-x-hidden '>
      <Navbar/>
      <Hero/>
      <About/>
      <Mentors/>
      <Events/>
      <Gallery/>
      <Technical/>
      <FAQ/>
      <Info/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default MainPage
