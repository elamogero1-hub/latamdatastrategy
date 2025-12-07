import { MessageCircle, Mail } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Email Button */}
      <a
        href="mailto:contacto@example.com"
        className="p-4 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 shadow-lg hover:scale-110 hover:shadow-glow transition-all duration-300 group"
        aria-label="Enviar Email"
      >
        <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/51991155704"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>


    </div>
  );
};
