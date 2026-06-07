import { useEffect, useState } from "react";
import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import WhyChooseUs from "./components/WhyChooseUs";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Menu />
      <WhyChooseUs />
      <Offer />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
  