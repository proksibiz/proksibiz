import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "60123456789"; // Tukar ke nombor sebenar
  const whatsappMessage = encodeURIComponent(
    "Assalamualaikum! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              SSM Berdaftar: 003725441-K
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Masalah Rumah Buat Anda{" "}
            <span className="text-secondary">Pening?</span>
            <br />
            <span className="text-secondary">Proksi Biz Solution</span> Adalah Penyelesaiannya!
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Syarikat berdaftar dalam bidang Building Maintenance yang menawarkan pelbagai perkhidmatan penyelenggaraan untuk kediaman anda. 
            <span className="font-semibold text-primary-foreground"> Tukang berpengalaman, kerja berkualiti dan harga telus</span> - itulah jaminan kami!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-amber-dark text-secondary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
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
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              <a href="#services">Lihat Perkhidmatan</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "5+", label: "Perkhidmatan" },
              { number: "500+", label: "Pelanggan Gembira" },
              { number: "5★", label: "Rating Tertinggi" },
              { number: "24/7", label: "Servis Pantas" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0, 0%, 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
