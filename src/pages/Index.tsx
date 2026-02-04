import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import OurCakes from "@/components/OurCakes";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustHighlights />
      <OurCakes />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
