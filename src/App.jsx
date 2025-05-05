import Header from './components/Header/header.jsx';
import Hero from './components/Hero/hero.jsx';
import Footer from './components/Footer/footer.jsx';
import Partners from './components/Partners/partners.jsx';
import About from './components/About/about.jsx';
import Services from './components/Services/servicecards.jsx';
import Industries from './components/Industries/IndustriesWeServe.jsx';
import Techcapabilites from './components/Techcapabilites/TechCapabilities.jsx';
import Testimonials from './components/Testimonials/testimonials.jsx';
import Clientsection from './components/Clientsection/ClientSection.jsx';
import Contactcard from './components/Contactcard/contactcard.jsx';
import './index.css';
import ClientReviews from './components/Clientreviews/ClientReviews.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';


function App() {
  

  return (
    <>
      <Header/>
      <Hero/>
      <Partners/>
      <About/>
      <Services/>
      <Testimonials/>
      <Industries/>
      <Techcapabilites/>
      <ClientReviews/>
      <Portfolio/>
      <Clientsection/>
      <Contactcard/>
      <Footer/>
      
    </>
  )
}

export default App
