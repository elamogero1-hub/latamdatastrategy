import { useState } from "react";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderé lo antes posible. Gracias por contactarme.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const whatsappNumber = "34600000000"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría ponerme en contacto contigo para hablar sobre un proyecto."
  );

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Listo para{" "}
              <span className="gradient-text">transformar tus datos</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cuéntame sobre tu proyecto y exploremos cómo puedo ayudarte a
              alcanzar tus objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card p-6 rounded-2xl hover:bg-muted/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-green-400 transition-colors">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Respuesta en menos de 24h
                    </p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      contacto@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Ubicación</h3>
                    <p className="text-sm text-muted-foreground">
                      Madrid, España (Remoto Global)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 md:p-8 rounded-2xl space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    rows={5}
                    className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar mensaje
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
