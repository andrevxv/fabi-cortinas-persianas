import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Motorization from "@/components/Motorization";
import Projects from "@/components/Projects";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Motorization />
      <Projects />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
