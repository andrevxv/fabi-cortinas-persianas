import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Eye, Heart, Sparkles } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 gradient-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Onde a Excelência Técnica encontra a{" "}
              <span className="text-primary italic">Visão Estratégica</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Acreditamos que cada ambiente merece equilíbrio perfeito entre conforto, 
              beleza e funcionalidade. Somos especialistas em conforto térmico, 
              proteção solar e controle de luz.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa missão é <strong className="text-foreground">transformar espaços 
              em refúgios de aconchego, funcionalidade, identidade e bem-estar</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Fabiana Barbosa – Visão Estratégica</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Eng. Bira Barros – Precisão Técnica</span>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
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
