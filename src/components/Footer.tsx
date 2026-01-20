import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">Proksi Biz</span>
                <span className="font-bold text-lg text-primary"> Solution</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Syarikat berdaftar (SSM: 003725441-K) dalam bidang Building Maintenance 
              yang menawarkan pelbagai perkhidmatan penyelenggaraan untuk kediaman anda.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-4">Perkhidmatan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Perkhidmatan Elektrik</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Repair Paip & Plumbing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Repair Alatan Rumah</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Servis Air-Cond</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Perkhidmatan Mengecat</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +60 12-345 6789
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@proksibiz.com
              </li>
              <li className="flex items-start gap-3 hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Selangor & Kuala Lumpur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Proksi Biz Solution. Hakcipta Terpelihara.</p>
            <p className="text-primary font-medium">SSM: 003725441-K</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
