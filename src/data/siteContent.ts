// ============================================
// ARQUIVO DE CONTEÚDO CENTRALIZADO
// Edite este arquivo para alterar textos, imagens e informações do site
// ============================================

// ============================================
// COMO ADICIONAR IMAGENS:
// 1. Coloque a imagem na pasta src/assets/produtos/
// 2. Importe aqui usando: import nomeVariavel from "@/assets/produtos/nome-arquivo.jpg";
// 3. Use a variável no array de images: [nomeVariavel, outraImagem]
// ============================================

// Imagens principais
import cortinasImg from "@/assets/cortinas.jpg";
import cortinaRolo1 from "@/assets/produtos/rolo1.jpg";
import cortinaRolo2 from "@/assets/produtos/rolo2.jpg";
import cortinaRolo3 from "@/assets/produtos/rolo3.jpg";
import cortinaRolo4 from "@/assets/produtos/rolo4.jpg";
import cortinaRomana1 from "@/assets/produtos/romana1.jpg";
import cortinaRomana2 from "@/assets/produtos/romana2.jpg";
import cortinaRomana3 from "@/assets/produtos/romana3.jpg";
import cortinaPainel1 from "@/assets/produtos/painal1.jpg";
import cortinaPainel2 from "@/assets/produtos/painal2.jpg";
import cortinaPainel3 from "@/assets/produtos/painal3.jpg";
import cortinaPlissada1 from "@/assets/produtos/plissada1.jpg";
import cortinaPlissada2 from "@/assets/produtos/plissada2.jpg";
import cortinaElegance1 from "@/assets/produtos/elegance1.jpg";
import cortinaElegance2 from "@/assets/produtos/elegance2.jpg";
import cortinaElegance3 from "@/assets/produtos/elegance3.jpg";
import cortinaNuette1 from "@/assets/produtos/nuette1.jpeg";
import cortinaNuette2 from "@/assets/produtos/nuette2.png";
import cortinaNuette3 from "@/assets/produtos/nuette3.png";
import persianasImg from "@/assets/persianas.jpg";
import persianasVerticais1 from "@/assets/produtos/persianas/vertical1.jpg";
import persianasVerticais2 from "@/assets/produtos/persianas/vertical2.jpg";
import persianasVerticais3 from "@/assets/produtos/persianas/vertical3.jpg";
import persianasHorizontais1 from "@/assets/produtos/persianas/horizontal1.jpg";
import persianasHorizontais2 from "@/assets/produtos/persianas/horizontal2.jpg";
import persianasHorizontais3 from "@/assets/produtos/persianas/horizontal3.jpg";
import toldosImg from "@/assets/toldos.jpg";
import aromasImg from "@/assets/aromas.jpg";
import placasImg from "@/assets/placas.jpg";
import motorizedImg from "@/assets/motorized.jpg";
import projeto1 from "@/assets/projeto1.jpg";
import projeto2 from "@/assets/projeto2.jpg";
import projeto3 from "@/assets/projeto3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

// ============================================
// IMAGENS DOS SUBPRODUTOS
// Adicione seus imports aqui. Exemplo:
// import cortinaRolo1 from "@/assets/produtos/cortina-rolo-1.jpg";
// import cortinaRolo2 from "@/assets/produtos/cortina-rolo-2.jpg";
// ============================================
import cortinaCelular from "@/assets/produtos/cortina_celular.jpg";

// Placeholder para imagens ainda não adicionadas
const placeholder = "/placeholder.svg";

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

// Tipo para subproduto com múltiplas fotos
export interface SubProduct {
  name: string;
  description?: string; // Descrição opcional do subproduto
  images: string[]; // Array de imagens do subproduto
}

// Tipo para produto principal
export interface ProductItem {
  title: string;
  description: string;
  image: string;
  // Subprodutos (para Cortinas, Toldos, Persianas)
  subProducts?: SubProduct[];
  // Galeria de fotos adicionais (para Aromatização, Placas em Aço)
  gallery?: string[];
}

// Tipo para projeto com galeria
export interface ProjectItem {
  image: string;
  title: string;
  location: string;
  gallery?: string[]; // Galeria adicional de fotos do projeto
}

export const productsContent = {
  badge: "Nossos Produtos",
  title: "Soluções",
  titleHighlight: "Completas",
  items: [
    {
      title: "Cortinas",
      description: "Tecido, painel e rolô. Elegância e funcionalidade para cada ambiente.",
      image: cortinasImg,
      subProducts: [
        // Para adicionar fotos: importe a imagem no topo do arquivo e adicione aqui
        { name: "Rolo", description: "Cortinas de rolo com design moderno e funcional.", images: [cortinaRolo1, cortinaRolo2, cortinaRolo3, cortinaRolo4] },
        { name: "Romana", description: "Elegância clássica com dobras suaves e sofisticadas.", images: [cortinaRomana1, cortinaRomana2, cortinaRomana3] },
        { name: "Painel", description: "Ideal para ambientes amplos com estilo contemporâneo.", images: [cortinaPainel1, cortinaPainel2, cortinaPainel3] },
        { name: "Elegance", description: "Sofisticação e leveza para ambientes refinados.", images: [cortinaElegance1,cortinaElegance2, cortinaElegance3] },
        { name: "Nuette", description: "Controle de luz com isolamento térmico e acústico.", images: [cortinaNuette1, cortinaNuette2, cortinaNuette3] },
        { name: "Plissada", description: "Versatilidade e charme em dobras delicadas.", images: [cortinaPlissada1, cortinaPlissada2] },
        { name: "Celular", description: "Excelente isolamento térmico e acústico com design diferenciado.", images: [cortinaCelular] },
      ],
    },
    {
      title: "Toldos",
      description: "Proteção solar externa com design sofisticado.",
      image: toldosImg,
      subProducts: [
        { name: "M1 Premium (Articulado)", description: "Toldo articulado premium com alta resistência e design elegante.", images: [placeholder, placeholder] },
        { name: "Sax 955/950 (Toldo Vertical)", description: "Proteção solar vertical ideal para varandas e áreas externas.", images: [placeholder, placeholder] },
      ],
    },
    {
      title: "Persianas",
      description: "Vertical ou horizontal. Controle preciso de luz e privacidade.",
      image: persianasImg,
      subProducts: [
        { name: "Verticais", description: "Persianas verticais para grandes janelas e portas.", images: [persianasVerticais1, persianasVerticais2, persianasVerticais3] },
        { name: "Horizontais", description: "Controle preciso de luz com lâminas horizontais.", images: [persianasHorizontais1, persianasHorizontais2, persianasHorizontais3] },
      ],
    },
    {
      title: "Aromatização",
      description: "Fragrâncias exclusivas para ambientes únicos.",
      image: aromasImg,
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Placas em Aço",
      description: "Sinalização personalizada com acabamento premium.",
      image: placasImg,
      gallery: ["/placeholder.svg", "/placeholder.svg"],
    },
  ] as ProductItem[],
};

// ============================================
// SEÇÃO MOTORIZAÇÃO
// ============================================
export const motorizationContent = {
  badge: "Tecnologia",
  title: "Motorização Inteligente:",
  titleHighlight: "Comodidade ao Seu Alcance",
  description: "O futuro do conforto chegou. Controle suas cortinas e persianas por voz ou smartphone, integrando perfeitamente à automação residencial do seu lar.",
  // Pode ser imagem ou vídeo (para vídeo, use URL do YouTube ou arquivo .mp4)
  media: motorizedImg,
  mediaType: "image" as "image" | "video", // Altere para "video" quando quiser usar vídeo
  // Se mediaType = "video", use URL do vídeo aqui (YouTube embed ou arquivo .mp4)
  // Exemplo: media: "https://www.youtube.com/embed/VIDEO_ID" ou "/video.mp4"
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
      gallery: ["https://drive.google.com/file/d/127fyAD2BPtNCWDX0F3pvy-C9_ldXn1CC/preview", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      image: projeto2,
      title: "Sala de Jantar Contemporânea",
      location: "Natal, RN",
      gallery: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      image: projeto3,
      title: "Suíte Master Elegante",
      location: "Ponta Negra, RN",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ] as ProjectItem[],
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
    { image: aromasImg, alt: "Post Instagram 4" },
    { image: placasImg, alt: "Post Instagram 5" },
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
    "Aromatização",
    "Placas em Aço",
  ],
};
