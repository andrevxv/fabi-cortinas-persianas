import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-3xl font-serif font-bold">Fabi</span>
            <span className="block text-sm text-primary-foreground/70 mt-1">
              Cortinas & Persianas
            </span>
          </div>

          {/* Tagline */}
          <p className="text-center text-primary-foreground/80 italic font-serif max-w-md">
            "Especialista em conforto térmico, proteção solar e controle de luz"
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/fabicortinasepersianas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="mailto:adm.fabi.aromas@gmail.com"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Fabi Cortinas & Persianas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
