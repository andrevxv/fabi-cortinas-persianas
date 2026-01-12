import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import cortinasImg from "@/assets/cortinas.jpg";
import persianasImg from "@/assets/persianas.jpg";
import toldosImg from "@/assets/toldos.jpg";
import cabeceirasImg from "@/assets/cabeceiras.jpg";
import aromasImg from "@/assets/aromas.jpg";
import placasImg from "@/assets/placas.jpg";

const products = [
  {
    title: "Cortinas",
    description: "Tecido, painel e rolô. Elegância e funcionalidade para cada ambiente.",
    image: cortinasImg,
  },
  {
    title: "Persianas",
    description: "Vertical ou horizontal. Controle preciso de luz e privacidade.",
    image: persianasImg,
  },
  {
    title: "Toldos",
    description: "Proteção solar externa com design sofisticado.",
    image: toldosImg,
  },
  {
    title: "Cabeceiras Estofadas",
    description: "Conforto e design personalizado para seu quarto.",
    image: cabeceirasImg,
  },
  {
    title: "Aromatização",
    description: "Fragrâncias exclusivas para ambientes únicos.",
    image: aromasImg,
  },
  {
    title: "Placas em Aço",
    description: "Sinalização personalizada com acabamento premium.",
    image: placasImg,
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produtos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Soluções <span className="text-primary italic">Completas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {product.description}
                </p>
              </div>
              {/* Always visible title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-serif font-bold text-primary-foreground">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
