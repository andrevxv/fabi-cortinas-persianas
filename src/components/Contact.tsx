import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const products = [
  "Cortinas",
  "Persianas",
  "Toldos",
  "Cabeceiras",
  "Aromatização",
  "Placas em Aço",
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    hasProject: "",
    products: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nJá possui projeto? ${formData.hasProject}\nProdutos de interesse: ${formData.products.join(", ")}`;
    
    const whatsappUrl = `https://wa.me/5584941417576?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete seu orçamento pelo WhatsApp.",
    });
  };

  const toggleProduct = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Vamos conversar sobre seu{" "}
              <span className="text-primary italic">projeto?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Entre em contato e solicite seu orçamento personalizado. 
              Estamos prontos para transformar seu ambiente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">Nova Parnamirim, RN</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <a
                    href="mailto:adm.fabi.aromas@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    adm.fabi.aromas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <a
                    href="tel:+558441417576"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (84) 4141-7576
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-soft"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Solicite seu Orçamento
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome completo"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="(84) 99999-9999"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Já possui projeto?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasProject"
                        value="Sim"
                        onChange={(e) =>
                          setFormData({ ...formData, hasProject: e.target.value })
                        }
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm text-foreground">Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasProject"
                        value="Não"
                        onChange={(e) =>
                          setFormData({ ...formData, hasProject: e.target.value })
                        }
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm text-foreground">Não</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Produtos de interesse
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((product) => (
                      <label
                        key={product}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Checkbox
                          checked={formData.products.includes(product)}
                          onCheckedChange={() => toggleProduct(product)}
                        />
                        <span className="text-sm text-foreground">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-4 bg-primary hover:bg-olive-dark text-primary-foreground font-medium py-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
