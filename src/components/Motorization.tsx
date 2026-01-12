import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Home, Zap, Settings } from "lucide-react";
import motorizedImg from "@/assets/motorized.jpg";

const benefits = [
  {
    icon: Smartphone,
    title: "Controle por Smartphone",
    description: "Acione suas cortinas de qualquer lugar pelo celular.",
  },
  {
    icon: Home,
    title: "Automação Residencial",
    description: "Integração perfeita com sistemas de automação.",
  },
  {
    icon: Zap,
    title: "Cenários Inteligentes",
    description: "Crie rotinas personalizadas para cada momento.",
  },
  {
    icon: Settings,
    title: "Praticidade Total",
    description: "Ideal para ambientes residenciais e comerciais.",
  },
];

const Motorization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={motorizedImg}
                alt="Cortinas motorizadas inteligentes"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-medium"
            >
              <span className="text-2xl font-serif font-bold">Smart</span>
              <span className="block text-sm">Home Ready</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
              Tecnologia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Motorização Inteligente:{" "}
              <span className="text-primary italic">Comodidade ao Seu Alcance</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O futuro do conforto chegou. Controle suas cortinas e persianas 
              por voz ou smartphone, integrando perfeitamente à automação 
              residencial do seu lar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Motorization;
