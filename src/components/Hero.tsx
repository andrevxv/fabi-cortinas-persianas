import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Interior elegante com cortinas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 text-sm font-medium tracking-wider text-primary-foreground/80 uppercase"
          >
            Especialistas em Conforto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6"
          >
            Cortinas e Persianas{" "}
            <span className="italic">Sob Medida</span> para seu Ambiente
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl"
          >
            Soluções Sob Medida para equilibrar controle de luz e proteção solar, 
            otimizando o conforto térmico e garantindo a privacidade sem abrir mão do seu estilo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-olive-dark text-primary-foreground font-medium px-8 py-6 text-lg shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento Sob Medida
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => {
          const element = document.querySelector("#sobre");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
