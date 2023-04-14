import './App.css'
import Navbar from './components/landing_pg/Navbar/Navbar';
import Home from './components/landing_pg/Sections/Home';
import About from './components/landing_pg/Sections/About';
import Features from './components/landing_pg/Sections/Features';
import Footer from '../components/Footer'
import Footer_sec from '../components/landing_pg/Sections copy/Footer';


function Landing() {

  return (
    <div className="App" style={styles.main}>
      <Navbar/>
      <Home/>
      <About/>
      <Features/>
      <Footer_sec/>
      <Footer/>
    </div>
  );
}

export default Landing;
