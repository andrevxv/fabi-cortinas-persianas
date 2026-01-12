import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5584941417576";
  const message = "Olá! Gostaria de solicitar um orçamento para cortinas e persianas.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;
