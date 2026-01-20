import { Shield, Clock, BadgeCheck, Wallet } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Tukang Profesional",
    description: "Bukan part-timer! Pasukan kami terlatih, berpengalaman 5+ tahun dan handle lebih 500+ projek dengan jayanya.",
  },
  {
    icon: Shield,
    title: "Warranty & Jaminan",
    description: "Kami berdiri di sebalik kerja kami. Warranty tersedia dan customer support sentiasa bersedia membantu anda.",
  },
  {
    icon: Wallet,
    title: "Harga Paling Kompetitif",
    description: "Dapatkan quotation percuma! Harga telus, tiada caj tersembunyi. Compare dengan lain, pasti kami lebih berbaloi!",
  },
  {
    icon: Clock,
    title: "Response <24 Jam",
    description: "Emergency? Kami faham! Response dalam masa 24 jam atau kurang. Masalah rumah diselesaikan dengan segera.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Kenapa Pilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Bezakan Kami Dari{" "}<span className="text-primary">Tukang Biasa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bukan janji kosong - ini komitmen kami kepada setiap pelanggan
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-glass backdrop-blur-md border border-glass-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-500">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
