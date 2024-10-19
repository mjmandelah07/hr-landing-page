import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Services from "../sections/Services";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}
