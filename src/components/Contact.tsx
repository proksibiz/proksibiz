import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "60199984399"; // Tukar ke nombor sebenar
  const whatsappMessage = encodeURIComponent(
    "Hi! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ada Masalah Rumah?{" "}
            <span className="text-primary">Kami Sedia Membantu!</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Hubungi kami melalui WhatsApp untuk mendapatkan sebut harga percuma. 
            Kami akan respond secepat mungkin!
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-amber-dark text-primary-foreground font-bold text-xl px-12 py-8 rounded-2xl shadow-glow hover:shadow-glow-strong transition-all duration-300 mb-16"
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
            {[
              { icon: Phone, title: "Telefon", info: "01999 843 99" },
              { icon: MapPin, title: "Kawasan", info: "Ipoh & Sekitar" },
              { icon: Clock, title: "Waktu Operasi", info: "Isnin - Ahad, 9am - 6pm" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
