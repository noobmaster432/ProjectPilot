import './App.css'
import Navbar from './components/landing_pg/Navbar/Navbar';
import Home from './components/landing_pg/Sections/Home';
import About from './components/landing_pg/Sections/About';
import Features from './components/landing_pg/Sections/Features';
import Footer from './components/landing_pg/Sections/Footer';
import '../components/landing_pg/Landing.css'


function Landing() {

  return (
    <div className="App" style={styles.main}>
      <Navbar/>
      <Home/>
      <About/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Landing;
