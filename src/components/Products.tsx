import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { productsContent, ProductItem, SubProduct } from "@/data/siteContent";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Products = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedSubProduct, setSelectedSubProduct] = useState<SubProduct | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleProductClick = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedSubProduct(null);
    setSheetOpen(true);
  };

  const handleSubProductClick = (subProduct: SubProduct) => {
    setSelectedSubProduct(subProduct);
  };

  const handleBack = () => {
    setSelectedSubProduct(null);
  };

  return (
    <>
      <section ref={containerRef} id="produtos" className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ y: titleY }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-wider text-primary uppercase">
              {productsContent.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              {productsContent.title} <span className="text-primary italic">{productsContent.titleHighlight}</span>
            </h2>
          </motion.div>

          {/* Layout criativo: Cortinas em destaque + grid para os demais */}
          <div className="space-y-8">
            {/* Cortinas - Card em destaque ocupando linha inteira */}
            {productsContent.items.slice(0, 1).map((product) => {
              const cardRef = useRef(null);
              const { scrollYProgress: cardProgress } = useScroll({
                target: cardRef,
                offset: ["start end", "center center"],
              });
              const cardY = useTransform(cardProgress, [0, 1], [50, 0]);
              const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);

              return (
                <motion.div
                  ref={cardRef}
                  key={product.title}
                  style={{ y: cardY, opacity: cardOpacity }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => handleProductClick(product)}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="p-8 md:p-12 max-w-xl">
                        <span className="inline-block mb-3 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground uppercase tracking-wider">
                          Produto em Destaque
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-3">
                          {product.title}
                        </h3>
                        <p className="text-primary-foreground/80 mb-4 max-w-md">
                          {product.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary-foreground transition-colors">
                          Explorar variedades
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Grid para os demais produtos (2x2) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsContent.items.slice(1).map((product, index) => {
                const cardRef = useRef(null);
                const { scrollYProgress: cardProgress } = useScroll({
                  target: cardRef,
                  offset: ["start end", "center center"],
                });
                const cardY = useTransform(cardProgress, [0, 1], [50, 0]);
                const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);

                return (
                  <motion.div
                    ref={cardRef}
                    key={product.title}
                    style={{ y: cardY, opacity: cardOpacity }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => handleProductClick(product)}
                    className="group relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg font-serif font-bold text-primary-foreground mb-1">
                        {product.title}
                      </h3>
                      <p className="text-xs text-primary-foreground/80 line-clamp-2">
                        {product.description}
                      </p>
                      <span className="inline-block mt-2 text-xs font-medium text-primary-foreground/60 uppercase tracking-wider">
                        Ver mais →
                      </span>
                    </div>
                    {/* Always visible title */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                      <h3 className="text-lg font-serif font-bold text-primary-foreground">
                        {product.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader className="mb-6">
            <div className="flex items-center gap-2">
              {selectedSubProduct && (
                <button
                  onClick={handleBack}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <SheetTitle className="font-serif text-2xl">
                {selectedSubProduct ? selectedSubProduct.name : selectedProduct?.title}
              </SheetTitle>
            </div>
          </SheetHeader>

          {selectedProduct && !selectedSubProduct && (
            <div className="space-y-6">
              {/* Product main image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <p className="text-muted-foreground">{selectedProduct.description}</p>

              {/* SubProducts Grid */}
              {selectedProduct.subProducts && selectedProduct.subProducts.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Tipos disponíveis:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.subProducts.map((sub) => (
                      <motion.button
                        key={sub.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSubProductClick(sub)}
                        className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
                      >
                        <div className="aspect-video rounded overflow-hidden mb-2 bg-muted">
                          <img
                            src={sub.images[0]}
                            alt={sub.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {sub.name}
                        </span>
                        {sub.description && (
                          <span className="block text-xs text-muted-foreground mt-1 line-clamp-2">
                            {sub.description}
                          </span>
                        )}
                        <span className="block text-xs text-muted-foreground/70 mt-1">
                          {sub.images.length} {sub.images.length === 1 ? 'foto' : 'fotos'}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery for products without subProducts */}
              {selectedProduct.gallery && selectedProduct.gallery.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Galeria:</h4>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProduct.gallery.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                            <img
                              src={img}
                              alt={`${selectedProduct.title} - Foto ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  <p className="text-xs text-muted-foreground text-center">
                    {selectedProduct.gallery.length} {selectedProduct.gallery.length === 1 ? 'foto' : 'fotos'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* SubProduct Gallery View */}
          {selectedSubProduct && (
            <div className="space-y-6">
              {selectedSubProduct.description && (
                <p className="text-muted-foreground">{selectedSubProduct.description}</p>
              )}
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedSubProduct.images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex items-center justify-center min-h-[60vh]">
                        <img
                          src={img}
                          alt={`${selectedSubProduct.name} - Foto ${idx + 1}`}
                          className="max-w-full max-h-[65vh] w-auto h-auto object-contain rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              <p className="text-center text-muted-foreground">
                {selectedSubProduct.images.length} {selectedSubProduct.images.length === 1 ? 'foto' : 'fotos'} disponíveis
              </p>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Products;
