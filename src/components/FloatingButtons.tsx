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


    </div>
  );
};
