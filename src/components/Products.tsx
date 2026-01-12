import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { productsContent } from "@/data/siteContent";

const Products = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="produtos" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ y: titleY }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            {productsContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {productsContent.title} <span className="text-primary italic">{productsContent.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsContent.items.map((product, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"],
            });
            const cardY = useTransform(cardProgress, [0, 1], [50, 0]);
            const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);

            return (
              <motion.div
                ref={cardRef}
                key={product.title}
                style={{ y: cardY, opacity: cardOpacity }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
