import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

/**
 * Instagram Section with Elfsight Widget
 * 
 * PARA REMOVER ESTA SEÇÃO:
 * 1. Abra src/pages/Index.tsx
 * 2. Remova a linha: import Instagram from "@/components/Instagram";
 * 3. Remova a linha: <Instagram />
 * 
 * Isso removerá completamente a seção sem afetar o resto da página.
 */

// Set to false to disable the Instagram section entirely
const INSTAGRAM_ENABLED = true;

const Instagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!INSTAGRAM_ENABLED || scriptLoaded.current) return;

    // Load Elfsight script dynamically
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
    
    scriptLoaded.current = true;
  }, []);

  // Return null if Instagram is disabled
  if (!INSTAGRAM_ENABLED) {
    return null;
  }

  return (
    <section ref={ref} id="instagram" className="py-24 lg:py-32 gradient-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            Redes Sociais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Siga-nos no <span className="text-primary italic">Instagram</span>
          </h2>
        </motion.div>

        {/* Elfsight Instagram Feed Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="elfsight-app-e97dd7bf-f4be-41b9-8b6d-0bf43f053393" 
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
