import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

/**
 * Google Reviews Section with Elfsight Widget
 * 
 * PARA REMOVER ESTA SEÇÃO:
 * 1. Abra src/pages/Index.tsx
 * 2. Remova a linha: import GoogleReviews from "@/components/GoogleReviews";
 * 3. Remova a linha: <GoogleReviews />
 * 
 * Isso removerá completamente a seção sem afetar o resto da página.
 */

// Set to false to disable the Google Reviews section entirely
const REVIEWS_ENABLED = true;

const GoogleReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!REVIEWS_ENABLED || scriptLoaded.current) return;

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

  // Return null if Reviews is disabled
  if (!REVIEWS_ENABLED) {
    return null;
  }

  return (
    <section ref={ref} id="avaliacoes" className="py-24 lg:py-32 gradient-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            O que nossos <span className="text-primary italic">clientes dizem</span>
          </h2>
        </motion.div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="elfsight-app-bcbb1608-8843-43b0-bdc1-d529ec231adf" 
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
