import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import projeto1 from "@/assets/projeto1.jpg";
import projeto2 from "@/assets/projeto2.jpg";
import projeto3 from "@/assets/projeto3.jpg";

const projects = [
  {
    image: projeto1,
    title: "Sala de Estar Clássica",
    location: "Nova Parnamirim, RN",
  },
  {
    image: projeto2,
    title: "Sala de Jantar Contemporânea",
    location: "Natal, RN",
  },
  {
    image: projeto3,
    title: "Suíte Master Elegante",
    location: "Ponta Negra, RN",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Projetos <span className="text-primary italic">Finalizados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acabamento impecável e materiais de alta qualidade em cada projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
