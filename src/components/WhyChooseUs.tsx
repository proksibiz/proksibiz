import { Shield, Clock, BadgeCheck, Wallet } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Tukang Berpengalaman",
    description: "Pasukan kami terlatih dan berpengalaman dalam pelbagai jenis kerja penyelenggaraan rumah.",
  },
  {
    icon: Shield,
    title: "Kerja Berkualiti",
    description: "Kami menggunakan bahan dan peralatan berkualiti untuk memastikan hasil kerja yang tahan lama.",
  },
  {
    icon: Wallet,
    title: "Harga Telus",
    description: "Tiada caj tersembunyi. Kami berikan sebut harga yang jelas sebelum memulakan kerja.",
  },
  {
    icon: Clock,
    title: "Respons Pantas",
    description: "Kami komited untuk respond kepada pertanyaan anda secepat mungkin.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Kenapa Pilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Jaminan <span className="text-primary">Proksi Biz Solution</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kepuasan anda adalah keutamaan kami
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
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
