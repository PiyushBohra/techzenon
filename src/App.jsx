import Header from './components/Header/header.jsx';
import Hero from './components/Hero/hero.jsx';
import Footer from './components/Footer/footer.jsx';
import Partners from './components/Partners/partners.jsx';
import About from './components/About/about.jsx';
import Services from './components/Services/servicecards.jsx';
import Digitalexpertise from './components/Digitalexpertise/digitalexpertise.jsx';
import Technologies from './components/Technologies/technology.jsx';
import Process from './components/Process/process.jsx';
import Faqs from './components/Faqs/faqs.jsx';
import Testimonials from './components/Testimonials/testimonials.jsx';
import Contactcard from './components/Contactcard/contactcard.jsx';
import './index.css';


function App() {
  

  return (
    <>
      <Header/>
      <Hero/>
      <Partners/>
      <About/>
      <Services/>
      <Digitalexpertise/>
      <Technologies/>
      <Process/>
      <Faqs/>
      <Testimonials/>
      <Contactcard/>
      <Footer/>
      
    </>
  )
}

export default App
