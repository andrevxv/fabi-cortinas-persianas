import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projectsContent } from "@/data/siteContent";

const Projects = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="projetos" className="py-24 lg:py-32 bg-background overflow-hidden">
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
            {projectsContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {projectsContent.title} <span className="text-primary italic">{projectsContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projectsContent.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsContent.items.map((project, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"],
            });
            const cardY = useTransform(cardProgress, [0, 1], [80, 0]);
            const imageY = useTransform(cardProgress, [0, 1], [20, -20]);

            return (
              <motion.div
                ref={cardRef}
                key={project.title}
                style={{ y: cardY }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ y: imageY }}
                    className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-xl font-serif font-bold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {project.location}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
