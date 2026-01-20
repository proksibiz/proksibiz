import { Zap, Droplets, Wrench, Wind, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Perkhidmatan Elektrik",
    price: "Dari RM50",
    description: "Pemasangan & penyelenggaraan elektrik yang selamat dan berkualiti.",
    items: [
      "Pemasangan kipas siling & water heater",
      "Kerja looping & tambah point elektrik",
      "Pemasangan & upgrade Distribution Board (DB)",
      "Troubleshoot masalah trip & short circuit",
      "Tukar & repair aksesori elektrik",
      "Pembaikan wiring rosak atau terbakar",
    ],
  },
  {
    icon: Droplets,
    title: "Repair Paip & Plumbing",
    price: "Dari RM50",
    description: "Handle semua jenis paip - PVC, ABS, Poly, PEX & PPR pipe.",
    items: [
      "Pembaikan paip bocor & merembes",
      "Penggantian paip pecah atau rosak",
      "Pemasangan laluan paip baru",
      "Penggantian & pembaikan tap/faucet",
      "Troubleshoot masalah tekanan air rendah",
      "Pemasangan & penyelenggaraan water heater",
    ],
  },
  {
    icon: Wrench,
    title: "Repair Alatan Rumah",
    price: "Dari RM40",
    description: "Alatan rosak? Jangan beli baru dulu! Kami repair dengan harga berpatutan.",
    items: [
      "Pembaikan mesin basuh",
      "Repair peti ais & troubleshoot",
      "Pembaikan kipas rosak",
      "Repair water heater",
      "Pembaikan rice cooker & peralatan dapur",
      "Troubleshoot & ganti komponen elektronik",
    ],
  },
  {
    icon: Wind,
    title: "Servis Air-Cond",
    price: "Dari RM60",
    description: "Aircond tak sejuk? Ada bunyi pelik? Kami troubleshoot dan servis dengan cepat.",
    items: [
      "Troubleshoot masalah aircond tak sejuk",
      "Servis & chemical wash aircond",
      "Top up & repair kebocoran gas",
      "Penggantian komponen rosak (PCB, capacitor)",
      "Repair masalah air bocor/menitis",
      "Overhaul & deep cleaning aircond",
    ],
  },
  {
    icon: Paintbrush,
    title: "Perkhidmatan Mengecat",
    price: "Dari RM8/kaki²",
    description: "Bagi rumah anda penampilan baru dengan hasil kemas dan tahan lama!",
    items: [
      "Mengecat dinding dalaman rumah",
      "Mengecat bahagian luar/exterior rumah",
      "Mengecat pagar, grill & pintu pagar",
      "Repair & preparation sebelum cat",
      "Mengecat plaster ceiling & partition",
      "Mengecat pintu, tingkap & woodwork",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Perkhidmatan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Satu Destinasi Untuk Semua{" "}
            <span className="text-primary">Keperluan Rumah</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari elektrik, plumbing, repair alatan rumah, servis aircond hingga mengecat - kami settlekan!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="inline-block bg-primary/10 text-primary font-bold text-sm px-4 py-1.5 rounded-full border border-primary/20">
                    {service.price}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {service.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2.5">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
