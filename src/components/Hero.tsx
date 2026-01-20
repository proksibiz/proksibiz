import { Phone, CheckCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "60123456789"; // Tukar ke nombor sebenar
  const whatsappMessage = encodeURIComponent(
    "Assalamualaikum! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-glass backdrop-blur-md border border-glass-border rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              SSM Berdaftar: 003725441-K
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Masalah Rumah Buat Anda{" "}
            <span className="text-gradient-accent">Pening?</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span className="text-primary">Proksi Biz Solution</span> Adalah Penyelesaiannya!
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Syarikat berdaftar dalam bidang Building Maintenance yang menawarkan pelbagai perkhidmatan penyelenggaraan untuk kediaman anda. 
            <span className="text-foreground font-medium"> Tukang berpengalaman, kerja berkualiti dan harga telus.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
                Hubungi Kami Sekarang
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-border bg-transparent hover:bg-secondary text-foreground font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              <a href="#services">Lihat Perkhidmatan</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "5+", label: "Perkhidmatan" },
              { number: "500+", label: "Pelanggan Gembira" },
              { number: "5★", label: "Rating Tertinggi" },
              { number: "24/7", label: "Respons Pantas" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
