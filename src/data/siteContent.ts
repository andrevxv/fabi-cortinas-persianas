// ============================================
// ARQUIVO DE CONTEÚDO CENTRALIZADO
// Edite este arquivo para alterar textos, imagens e informações do site
// ============================================

import cortinasImg from "@/assets/cortinas.jpg";
import persianasImg from "@/assets/persianas.jpg";
import toldosImg from "@/assets/toldos.jpg";
import cabeceirasImg from "@/assets/cabeceiras.jpg";
import aromasImg from "@/assets/aromas.jpg";
import placasImg from "@/assets/placas.jpg";
import motorizedImg from "@/assets/motorized.jpg";
import projeto1 from "@/assets/projeto1.jpg";
import projeto2 from "@/assets/projeto2.jpg";
import projeto3 from "@/assets/projeto3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

// ============================================
// INFORMAÇÕES DA EMPRESA
// ============================================
export const companyInfo = {
  name: "Fabi Cortinas & Persianas",
  shortName: "Fabi",
  tagline: "Especialista em conforto térmico, proteção solar e controle de luz",
  phone: "(84) 4141-7576",
  phoneClean: "5584941417576", // Para link do WhatsApp
  email: "adm.fabi.aromas@gmail.com",
  address: "Nova Parnamirim, RN",
  instagram: "@fabicortinasepersianas",
  instagramUrl: "https://instagram.com/fabicortinasepersianas",
  facebookUrl: "https://facebook.com",
};

// ============================================
// NAVEGAÇÃO
// ============================================
export const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

// ============================================
// SEÇÃO HERO
// ============================================
export const heroContent = {
  badge: "Especialistas em Conforto",
  title: "Cortinas e Persianas",
  titleHighlight: "Sob Medida",
  titleEnd: "para seu Ambiente",
  subtitle: "Soluções Sob Medida para equilibrar controle de luz e proteção solar, otimizando o conforto térmico e garantindo a privacidade sem abrir mão do seu estilo.",
  ctaText: "Solicitar Orçamento Sob Medida",
  backgroundImage: heroBg,
};

// ============================================
// SEÇÃO SOBRE NÓS
// ============================================
export const aboutContent = {
  badge: "Sobre Nós",
  title: "Onde a Excelência Técnica encontra a",
  titleHighlight: "Visão Estratégica",
  paragraphs: [
    "Na Fabi Cortinas & Persianas, a excelência técnica encontra uma visão estratégica e humanizada.",
    "À frente, está Fabiana Barbosa, uma administradora com vasta experiência em gestão comercial e relacionamento, com um olhar estratégico, sensível e orientado a resultados, garantindo que cada solução entregue vá além da estética, focando no significado e no valor para o cliente. Fabiana lidera a empresa ao lado do engenheiro Bira Barros, unindo expertise em negócios, administração e precisão técnica.",
    "Somos mais que uma loja de cortinas. Somos a materialização de um compromisso: Transformar espaços em refúgios de aconchego, funcionalidade, identidade e bem-estar.",
    "Confie sua visão a quem entende de gestão, engenharia e, acima de tudo, de excelência em design. Sua próxima transformação começa aqui.",
  ],
  team: [
    { name: "Fabiana Barbosa", role: "Visão Estratégica" },
    { name: "Eng. Bira Barros", role: "Precisão Técnica" },
  ],
};

// ============================================
// SEÇÃO PRODUTOS
// ============================================
export const productsContent = {
  badge: "Nossos Produtos",
  title: "Soluções",
  titleHighlight: "Completas",
  items: [
    {
      title: "Cortinas",
      description: "Tecido, painel e rolô. Elegância e funcionalidade para cada ambiente.",
      image: cortinasImg,
    },
    {
      title: "Persianas",
      description: "Vertical ou horizontal. Controle preciso de luz e privacidade.",
      image: persianasImg,
    },
    {
      title: "Toldos",
      description: "Proteção solar externa com design sofisticado.",
      image: toldosImg,
    },
    {
      title: "Cabeceiras Estofadas",
      description: "Conforto e design personalizado para seu quarto.",
      image: cabeceirasImg,
    },
    {
      title: "Aromatização",
      description: "Fragrâncias exclusivas para ambientes únicos.",
      image: aromasImg,
    },
    {
      title: "Placas em Aço",
      description: "Sinalização personalizada com acabamento premium.",
      image: placasImg,
    },
  ],
};

// ============================================
// SEÇÃO MOTORIZAÇÃO
// ============================================
export const motorizationContent = {
  badge: "Tecnologia",
  title: "Motorização Inteligente:",
  titleHighlight: "Comodidade ao Seu Alcance",
  description: "O futuro do conforto chegou. Controle suas cortinas e persianas por voz ou smartphone, integrando perfeitamente à automação residencial do seu lar.",
  image: motorizedImg,
  floatingBadge: {
    title: "Smart",
    subtitle: "Home Ready",
  },
  benefits: [
    {
      icon: "Smartphone",
      title: "Controle por Smartphone",
      description: "Acione suas cortinas de qualquer lugar pelo celular.",
    },
    {
      icon: "Home",
      title: "Automação Residencial",
      description: "Integração perfeita com sistemas de automação.",
    },
    {
      icon: "Zap",
      title: "Cenários Inteligentes",
      description: "Crie rotinas personalizadas para cada momento.",
    },
    {
      icon: "Settings",
      title: "Praticidade Total",
      description: "Ideal para ambientes residenciais e comerciais.",
    },
  ],
};

// ============================================
// SEÇÃO PROJETOS
// ============================================
export const projectsContent = {
  badge: "Portfólio",
  title: "Projetos",
  titleHighlight: "Finalizados",
  subtitle: "Acabamento impecável e materiais de alta qualidade em cada projeto.",
  items: [
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
  ],
};

// ============================================
// SEÇÃO INSTAGRAM
// ============================================
export const instagramContent = {
  badge: "Redes Sociais",
  title: "Inspire-se no nosso",
  titleHighlight: "Instagram",
  // As imagens do feed do Instagram (use imagens reais do seu Instagram)
  posts: [
    { image: cortinasImg, alt: "Post Instagram 1" },
    { image: persianasImg, alt: "Post Instagram 2" },
    { image: toldosImg, alt: "Post Instagram 3" },
    { image: cabeceirasImg, alt: "Post Instagram 4" },
    { image: aromasImg, alt: "Post Instagram 5" },
    { image: projeto2, alt: "Post Instagram 6" },
  ],
};

// ============================================
// SEÇÃO CONTATO
// ============================================
export const contactContent = {
  badge: "Contato",
  title: "Vamos conversar sobre seu",
  titleHighlight: "projeto?",
  subtitle: "Entre em contato e solicite seu orçamento personalizado. Estamos prontos para transformar seu ambiente.",
  formTitle: "Solicite seu Orçamento",
  productOptions: [
    "Cortinas",
    "Persianas",
    "Toldos",
    "Cabeceiras",
    "Aromatização",
    "Placas em Aço",
  ],
};
