import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Puan Siti Aminah",
    location: "Ipoh, Perak",
    service: "Servis Elektrik",
    rating: 5,
    comment: "Sangat puas hati! Masalah DB rumah saya yang selalu trip telah diselesaikan dengan cepat. Tukang berpengalaman dan harga berpatutan. Highly recommended!",
    image: "https://ui-avatars.com/api/?name=Siti+Aminah&background=F59E0B&color=fff&size=128",
  },
  {
    name: "Encik Ahmad Razali",
    location: "Sitiawan, Perak",
    service: "Repair Air-Cond",
    rating: 5,
    comment: "Aircond rumah dah 3 tahun tak sejuk. Lepas team Proksi Biz datang servis, macam beli aircond baru! Kerja kemas dan profesional. Terima kasih banyak!",
    image: "https://ui-avatars.com/api/?name=Ahmad+Razali&background=F59E0B&color=fff&size=128",
  },
  {
    name: "Puan Noraini",
    location: "Menglembu, Perak",
    service: "Plumbing & Mengecat",
    rating: 5,
    comment: "Repair paip bocor dan cat rumah sekali gus. Kerja siap dalam masa yang dijanjikan. Hasil sangat memuaskan dan harga transparent. Akan guna servis lagi!",
    image: "https://ui-avatars.com/api/?name=Noraini&background=F59E0B&color=fff&size=128",
  },
  {
    name: "Encik Harith",
    location: "Batu Gajah, Perak",
    service: "Repair Mesin Basuh",
    rating: 5,
    comment: "Mesin basuh rosak masa weekend. Call Proksi Biz, dalam masa sejam dah datang check. Repair dengan segera, jimat kos berbanding beli baru. Superb service!",
    image: "https://ui-avatars.com/api/?name=Harith&background=F59E0B&color=fff&size=128",
  },
  {
    name: "Puan Farah",
    location: "Kampar, Perak",
    service: "Perkhidmatan Elektrik",
    rating: 5,
    comment: "Nak tambah point elektrik untuk rumah, dapat response cepat dan kerja siap dalam sehari. Tukang sangat detail dan explain semua proses. Memang terbaik!",
    image: "https://ui-avatars.com/api/?name=Farah&background=F59E0B&color=fff&size=128",
  },
  {
    name: "Encik Zul",
    location: "Taiping, Perak",
    service: "Mengecat Rumah",
    rating: 5,
    comment: "Cat rumah dengan hasil finishing yang sangat kemas. Preparation kerja pun detail. Harga RM4/kaki persegi memang berbaloi. Rumah nampak macam baru renovate!",
    image: "https://ui-avatars.com/api/?name=Zul&background=F59E0B&color=fff&size=128",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-primary">Pelanggan Kami?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kepuasan pelanggan adalah bukti komitmen kami terhadap kualiti dan perkhidmatan terbaik
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-glow transition-all duration-500 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Quote className="w-7 h-7 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary font-semibold mt-0.5">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-glass backdrop-blur-md border border-glass-border rounded-2xl px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-3xl font-bold text-primary">5.0</span>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">Rating Purata Pelanggan</div>
              <div className="text-sm text-muted-foreground">Berdasarkan 500+ ulasan pelanggan yang berpuas hati</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
