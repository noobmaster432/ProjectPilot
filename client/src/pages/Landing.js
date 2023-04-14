import styles from '../components/landing_pg/Landing.css';
import Navbar from '../components/landing_pg/Navbar/Navbar';
import Home from '../components/landing_pg/Sections/Home';
import About from '../components/landing_pg/Sections/About';
import Features from '../components/landing_pg/Sections/Features';
import FooterSec from '../components/landing_pg/Sections/Footer';


function Landing() {

  return (
    <div className="App cover" style={styles.main}>
      <Navbar/>
      <Home/>
      <About/>
      <Features/>
      <FooterSec/>
    </div>
  );
}

export default Landing;
