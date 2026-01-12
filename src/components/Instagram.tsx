import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram as InstagramIcon } from "lucide-react";
import { instagramContent, companyInfo } from "@/data/siteContent";

const Instagram = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 gradient-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ y: titleY }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            {instagramContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {instagramContent.title} <span className="text-primary italic">{instagramContent.titleHighlight}</span>
          </h2>
          <a
            href={companyInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-olive-dark transition-colors"
          >
            <InstagramIcon size={20} />
            <span className="font-medium">{companyInfo.instagram}</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramContent.posts.map((post, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"],
            });
            const cardScale = useTransform(cardProgress, [0, 1], [0.9, 1]);
            const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);

            return (
              <motion.a
                ref={cardRef}
                key={index}
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ scale: cardScale, opacity: cardOpacity }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon
                    size={32}
                    className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
