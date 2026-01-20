import { CheckCircle, Building2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Partner Terbaik Untuk{" "}
              <span className="text-primary">Penyelenggaraan Rumah</span> Anda
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Proksi Biz Solution adalah syarikat berdaftar dalam bidang Building Maintenance 
              yang menawarkan pelbagai perkhidmatan penyelenggaraan lengkap untuk rumah anda. 
              Dengan pengalaman dan komitmen yang tinggi, kami sedia membantu menyelesaikan 
              setiap masalah rumah anda.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Perkhidmatan lengkap dari A hingga Z",
                "Tukang mahir & berpengalaman",
                "Harga berpatutan tanpa caj tersembunyi",
                "Kerja kemas dan berkualiti",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* SSM Badge */}
            <div className="inline-flex items-center gap-4 bg-glass backdrop-blur-md border border-glass-border rounded-2xl px-6 py-4 hover:border-primary/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">SSM Berdaftar</div>
                <div className="font-bold text-foreground text-lg">003725441-K</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="bg-glass backdrop-blur-md border border-glass-border rounded-3xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5+", label: "Tahun Pengalaman" },
                  { number: "500+", label: "Projek Siap" },
                  { number: "100%", label: "Pelanggan Berpuas Hati" },
                  { number: "5", label: "Perkhidmatan Utama" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 rounded-2xl p-6 text-center group hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/15 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
