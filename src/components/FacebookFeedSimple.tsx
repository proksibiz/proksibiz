import { useEffect } from "react";
import { Facebook, ExternalLink } from "lucide-react";

const FacebookFeedSimple = () => {
  useEffect(() => {
    // Load Facebook SDK
    const script = document.createElement('script');
    script.src = "https://connect.facebook.net/ms_MY/sdk.js#xfbml=1&version=v18.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const fbPageUrl = "https://www.facebook.com/proksibizmy";

  return (
    <section id="facebook" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Projek Terkini
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lihat Hasil Kerja Kami Di{" "}
            <span className="text-primary">Facebook</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Update projek terkini, before & after, tips penyelenggaraan rumah & promosi istimewa!
          </p>
          
          {/* Facebook Page Link */}
          <a
            href={fbPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] hover:bg-[#0c63d4] text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Facebook className="w-5 h-5" fill="white" />
            <span>Ikuti Page Kami</span>
          </a>
        </div>

        <div id="fb-root"></div>

        {/* Grid Layout - 2 Large Feeds + Clickable Boxes */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-8">
          {/* Feed 1 */}
          <div className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
            <div 
              className="fb-page" 
              data-href={fbPageUrl}
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote cite={fbPageUrl} className="fb-xfbml-parse-ignore">
                <a href={fbPageUrl}>Proksi Biz Solution</a>
              </blockquote>
            </div>
          </div>

          {/* Feed 2 */}
          <div className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
            <div 
              className="fb-page" 
              data-href={fbPageUrl}
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote cite={fbPageUrl} className="fb-xfbml-parse-ignore">
                <a href={fbPageUrl}>Proksi Biz Solution</a>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom 4 Clickable Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { title: "Before & After", emoji: "🏠" },
            { title: "Tips Rumah", emoji: "💡" },
            { title: "Testimoni", emoji: "⭐" },
            { title: "Promosi", emoji: "🔥" }
          ].map((item, index) => (
            <a
              key={index}
              href={fbPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">Lihat di Facebook</p>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-transparent rounded-lg flex items-center justify-center border border-glass-border">
                <Facebook className="w-12 h-12 text-primary/20" />
              </div>
              <div className="flex items-center gap-2 text-xs text-primary font-semibold mt-3">
                <span>Buka Post</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Jangan terlepas update & promosi terkini! 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={fbPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-glass backdrop-blur-md border border-[#1877F2]/50 hover:bg-[#1877F2] text-foreground hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Facebook className="w-6 h-6" />
              <span>Lihat Semua Post Di Facebook</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/60199984399?text=Hi!%20Saya%20tertarik%20dengan%20hasil%20kerja%20di%20Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-amber-dark font-semibold transition-colors"
            >
              <span>💬 Dapatkan Quotation Percuma</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeedSimple;
