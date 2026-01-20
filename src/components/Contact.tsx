import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "60123456789"; // Tukar ke nombor sebenar
  const whatsappMessage = encodeURIComponent(
    "Assalamualaikum! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ada Masalah Rumah?{" "}
            <span className="text-secondary">Kami Sedia Membantu!</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Hubungi kami melalui WhatsApp untuk mendapatkan sebut harga percuma. 
            Kami akan respond secepat mungkin!
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-bold text-xl px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow mb-12"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Kami Sekarang
            </a>
          </Button>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-1">Telefon</h3>
              <p className="text-primary-foreground/70">+60 12-345 6789</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-1">Kawasan</h3>
              <p className="text-primary-foreground/70">Selangor & Kuala Lumpur</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-1">Waktu Operasi</h3>
              <p className="text-primary-foreground/70">Isnin - Ahad, 8am - 8pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
