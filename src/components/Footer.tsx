import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Proksi Biz Solution</h3>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Syarikat berdaftar (SSM: 003725441-K) dalam bidang Building Maintenance 
              yang menawarkan pelbagai perkhidmatan penyelenggaraan untuk kediaman anda.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Perkhidmatan</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Perkhidmatan Elektrik</li>
              <li>Repair Paip & Plumbing</li>
              <li>Repair Alatan Rumah</li>
              <li>Servis Air-Cond</li>
              <li>Perkhidmatan Mengecat</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                +60 12-345 6789
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                info@proksibiz.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>Selangor & Kuala Lumpur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {currentYear} Proksi Biz Solution. Hakcipta Terpelihara.</p>
            <p>SSM: 003725441-K</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
