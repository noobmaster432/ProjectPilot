import styles from '../components/landing_pg/Landing.css';
import Navbar from '../components/landing_pg/Navbar/Navbar';
import Home from '../components/landing_pg/Sections/Home';
import About from '../components/landing_pg/Sections/About';
import Features from '../components/landing_pg/Sections/Features';
import FooterSec from '../components/landing_pg/Sections/Footer';
import pp from "../components/profile/images/pp.png";

function Landing() {

  return (
    <div className="App cover" style={styles.main}>
      <Navbar />
      <Home />
      <About />
      <Features />
      <FooterSec />
      <img
        src={pp}
        alt=""
        className="w-[98%] border border-zinc-700 rounded-lg my-4 mx-auto"
      />
    </div>
  );
}

export default Landing;
