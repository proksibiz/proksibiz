import { Phone, Mail, MapPin, Star, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "60199984399";
  const whatsappMessage = encodeURIComponent(
    "Hi! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  return (
    <footer className="bg-gradient-to-b from-navy to-navy/95 border-t border-primary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4 py-16">
        {/* Top Section - CTA Banner */}
        <div className="bg-glass backdrop-blur-md border border-glass-border rounded-3xl p-8 mb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ada Masalah Rumah? <span className="text-primary">Hubungi Kami Sekarang!</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Dapatkan quotation percuma & konsultasi dari tukang berpengalaman kami
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-amber-dark text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-glow hover:shadow-glow-strong transition-all duration-300"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                WhatsApp: 01999 843 99
              </a>
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-glow">
                <img src="/favicon.png" alt="PROKSI BIZ SOLUTION" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">PROKSI BIZ</div>
                <div className="font-bold text-xl text-primary">SOLUTION</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Syarikat SSM berdaftar yang dipercayai oleh 500+ pelanggan di Perak untuk penyelenggaraan rumah berkualiti.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="text-sm font-semibold text-primary ml-2">5.0 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Perkhidmatan
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Perkhidmatan Elektrik
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Repair Paip & Plumbing
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Repair Alatan Rumah
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Servis Air-Cond
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Perkhidmatan Mengecat
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Telefon</div>
                  <div className="font-semibold text-foreground">01999 843 99</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground">hi@proksi.biz</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Kawasan</div>
                  <div className="font-semibold text-foreground">Ipoh & Sekitar</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Jaminan Kami
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>SSM Berdaftar & Sah</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>5+ Tahun Pengalaman</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Response {'<'}24 Jam</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Warranty Tersedia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Made with 🧡 in Ipoh by Proksi Biz Solution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
