import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Features />
        <Achievements />
        <Gallery />
        <Schedule />
        <Pricing />
        <Events />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
