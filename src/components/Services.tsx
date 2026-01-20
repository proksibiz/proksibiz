import { Zap, Droplets, Wrench, Wind, Paintbrush, AlertCircle } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Perkhidmatan Elektrik",
    price: "Dari RM50",
    description: "Jangan ambil risiko dengan elektrik! Tukang berlesen kami pastikan rumah anda selamat & cekap tenaga.",
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
    description: "Paip bocor buang masa & duit! Kami selesaikan masalah plumbing anda cepat & berkekalan.",
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
    description: "JIMAT hingga 80%! Repair dahulu sebelum beli baru. Kebanyakan masalah boleh diselesaikan.",
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
    title: "Repair Air-Cond",
    price: "Dari RM60",
    description: "Aircond tak sejuk = bil elektrik naik! Kami restore prestasi aircond seperti baru dengan harga terbaik.",
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
    price: "Dari RM4/kaki²",
    description: "Transform rumah anda! Cat berkualiti + finishing profesional = Rumah nampak RM50k lebih mahal!",
    items: [
      "Mengecat dinding dalaman rumah",
      "Mengecat bahagian luar/exterior rumah",
      "Mengecat pagar, grill & pintu pagar",
      "Repair & preparation sebelum cat",
      "Mengecat plaster ceiling & partition",
      "Mengecat pintu, tingkap & woodwork",
    ],
  },
  {
    icon: AlertCircle,
    title: "Perkhidmatan Kecemasan 24 Jam",
    price: "Call Untuk Quote",
    description: "EMERGENCY? Kami sedia membantu 24/7! Elektrik terbakar, paip pecah, aircond rosak - panggil kami SEKARANG!",
    items: [
      "Emergency elektrik - trip, short circuit, terbakar",
      "Emergency plumbing - paip pecah, banjir air",
      "Aircond rosak teruk & perlu segera",
      "Masalah elektrik berbahaya (percikan api)",
      "Water heater rosak & perlu ganti segera",
      "Servis cepat dalam masa 1-2 jam*",
    ],
    isEmergency: true,
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
            One-Stop Solution{" "}
            <span className="text-primary">Untuk Rumah Impian Anda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tidak kira masalah besar atau kecil - kami ada penyelesaiannya! Lebih 500+ pelanggan percaya kepada kami.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-glass backdrop-blur-md border rounded-2xl p-6 transition-all duration-500 hover:shadow-glow ${
                service.isEmergency 
                  ? "border-red-500/50 hover:border-red-500 bg-gradient-to-br from-red-500/5 to-transparent" 
                  : "border-glass-border hover:border-primary/50"
              }`}
            >
              {/* Emergency Badge */}
              {service.isEmergency && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse border-2 border-red-400">
                  🚨 24/7 AVAILABLE
                </div>
              )}

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.isEmergency 
                  ? "bg-gradient-to-br from-red-500/10 to-transparent" 
                  : "bg-gradient-to-br from-primary/10 to-transparent"
              }`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    service.isEmergency 
                      ? "bg-red-500/20 group-hover:bg-red-500/30" 
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <service.icon className={`w-7 h-7 ${service.isEmergency ? "text-red-500" : "text-primary"}`} />
                  </div>
                  <span className={`inline-block font-bold text-sm px-4 py-1.5 rounded-full border ${
                    service.isEmergency 
                      ? "bg-red-500/10 text-red-500 border-red-500/20" 
                      : "bg-primary/10 text-primary border-primary/20"
                  }`}>
                    {service.price}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  service.isEmergency 
                    ? "text-red-500 group-hover:text-red-600" 
                    : "text-foreground group-hover:text-primary"
                }`}>
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
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        service.isEmergency ? "bg-red-500" : "bg-primary"
                      }`} />
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
