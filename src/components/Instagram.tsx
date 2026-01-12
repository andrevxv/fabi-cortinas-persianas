import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram as InstagramIcon } from "lucide-react";
import cortinasImg from "@/assets/cortinas.jpg";
import persianasImg from "@/assets/persianas.jpg";
import toldosImg from "@/assets/toldos.jpg";
import cabeceirasImg from "@/assets/cabeceiras.jpg";
import aromasImg from "@/assets/aromas.jpg";
import projeto2 from "@/assets/projeto2.jpg";

const posts = [
  { image: cortinasImg },
  { image: persianasImg },
  { image: toldosImg },
  { image: cabeceirasImg },
  { image: aromasImg },
  { image: projeto2 },
];

const Instagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 gradient-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
            Redes Sociais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Inspire-se no nosso <span className="text-primary italic">Instagram</span>
          </h2>
          <a
            href="https://instagram.com/fabicortinasepersianas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-olive-dark transition-colors"
          >
            <InstagramIcon size={20} />
            <span className="font-medium">@fabicortinasepersianas</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/fabicortinasepersianas"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt="Post do Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon
                  size={32}
                  className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
