import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Eye, Heart, Sparkles } from "lucide-react";
import { aboutContent } from "@/data/siteContent";

const features = [
  {
    icon: Eye,
    title: "Visão Estratégica",
    description: "Fabiana Barbosa traz uma abordagem humanizada e estratégica para cada projeto.",
  },
  {
    icon: Award,
    title: "Precisão Técnica",
    description: "Engenheiro Bira Barros garante excelência e precisão em cada instalação.",
  },
  {
    icon: Heart,
    title: "Conforto & Bem-estar",
    description: "Transformamos espaços em refúgios de aconchego e funcionalidade.",
  },
  {
    icon: Sparkles,
    title: "Identidade & Estilo",
    description: "Cada ambiente reflete a personalidade única de nossos clientes.",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <section ref={containerRef} id="sobre" className="py-24 lg:py-32 gradient-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ y: textY }}
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
              {aboutContent.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              {aboutContent.title}{" "}
              <span className="text-primary italic">{aboutContent.titleHighlight}</span>
            </h2>
            
            <div className="space-y-4">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {aboutContent.team.map((member, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{member.name} – {member.role}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Grid with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: cardsY }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
