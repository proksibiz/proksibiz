import { CheckCircle, Building2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Partner Terbaik Untuk{" "}
              <span className="text-primary">Penyelenggaraan Rumah</span> Anda
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Proksi Biz Solution adalah syarikat berdaftar dalam bidang Building Maintenance 
              yang menawarkan pelbagai perkhidmatan penyelenggaraan lengkap untuk rumah anda. 
              Dengan pengalaman dan komitmen yang tinggi, kami sedia membantu menyelesaikan 
              setiap masalah rumah anda.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Perkhidmatan lengkap dari A hingga Z",
                "Tukang mahir & berpengalaman",
                "Harga berpatutan tanpa caj tersembunyi",
                "Kerja kemas dan berkualiti",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* SSM Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-6 py-4">
              <Building2 className="w-8 h-8 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">SSM Berdaftar</div>
                <div className="font-bold text-foreground">003725441-K</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Visual */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5+", label: "Tahun Pengalaman" },
                  { number: "500+", label: "Projek Siap" },
                  { number: "100%", label: "Pelanggan Berpuas Hati" },
                  { number: "5", label: "Perkhidmatan Utama" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
