import { Zap, Droplets, Wrench, Wind, Paintbrush } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
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
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <span className="inline-block bg-secondary/10 text-secondary font-bold text-sm px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative pt-0">
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
