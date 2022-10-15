import './App.css'
import About from './includes/About'
import Header from './includes/Header'
import Pricing from './includes/Pricing'
import Works from './includes/Works'
import Faq from './includes/Faq'
import Footer from './includes/Footer'
import ReactGA from "react-ga4";

ReactGA.initialize('G-QTKJX1VC43')
ReactGA.send("pageview");

function App() {

  return (
    <div>
      <Header />
      <About />
      <Works />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
