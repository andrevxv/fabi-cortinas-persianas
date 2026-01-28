import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Home, Zap, Settings, LucideIcon } from "lucide-react";
import { motorizationContent } from "@/data/siteContent";
import alexaBadge from "@/assets/badges/alexa.jpg";
import googleHomeBadge from "@/assets/badges/google-home.jpg";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Home,
  Zap,
  Settings,
};

const Motorization = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image or Video with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{ y: imageY, scale: imageScale }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              {motorizationContent.mediaType === "video" ? (
                // Suporta YouTube embed ou arquivo de vídeo local
                motorizationContent.media.includes("youtube") || motorizationContent.media.includes("youtu.be") ? (
                  <iframe
                    src={motorizationContent.media}
                    title="Vídeo de motorização"
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={motorizationContent.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                )
              ) : (
                <img
                  src={motorizationContent.media}
                  alt="Cortinas motorizadas inteligentes"
                  className="w-full h-auto"
                />
              )}
              {motorizationContent.mediaType !== "video" && (
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              )}
            </div>
            
            {/* Compatibility Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center gap-4 mt-6"
            >
              <img 
                src={alexaBadge} 
                alt="Compatível com Alexa" 
                className="h-10 rounded-md shadow-sm"
              />
              <img 
                src={googleHomeBadge} 
                alt="Funciona com Google Home" 
                className="h-10 rounded-md shadow-sm"
              />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-medium"
            >
              <span className="text-2xl font-serif font-bold">{motorizationContent.floatingBadge.title}</span>
              <span className="block text-sm">{motorizationContent.floatingBadge.subtitle}</span>
            </motion.div>
          </motion.div>

          {/* Content with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: contentY }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
              {motorizationContent.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              {motorizationContent.title}{" "}
              <span className="text-primary italic">{motorizationContent.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {motorizationContent.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {motorizationContent.benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon] || Settings;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
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
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Motorization;
