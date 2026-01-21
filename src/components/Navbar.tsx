import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappNumber = "60199984399";
  const whatsappMessage = encodeURIComponent(
    "Hi! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Utama", href: "#" },
    { label: "Perkhidmatan", href: "#services" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Facebook", href: "#facebook" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Hubungi", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
              <img src="/proksibiz/favicon.png" alt="PROKSI BIZ SOLUTION" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-xl text-foreground">PROKSI BIZ</span>
                <span className="font-bold text-xl text-primary">SOLUTION</span>
              </div>
              <div className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                Building Maintenance Expert
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-semibold transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-amber-dark rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-amber-dark hover:from-amber-dark hover:to-primary text-primary-foreground font-bold shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp Kami</span>
                <span className="lg:hidden">Call</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/98 backdrop-blur-xl animate-fade-in shadow-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary hover:bg-secondary/70 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:translate-x-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 px-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-amber-dark hover:from-amber-dark hover:to-primary text-primary-foreground font-bold w-full shadow-glow"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp: 01999 843 99
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
