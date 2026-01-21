import { useEffect, useState } from "react";
import { Facebook, ExternalLink, Heart, MessageCircle, Share2, Loader2 } from "lucide-react";

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
  likes?: {
    summary: {
      total_count: number;
    };
  };
  comments?: {
    summary: {
      total_count: number;
    };
  };
  shares?: {
    count: number;
  };
}

const FacebookFeed = () => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID;
  const accessToken = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
  const fbPageUrl = "https://www.facebook.com/proksibizmy";

  useEffect(() => {
    const fetchPosts = async () => {
      // If no credentials, show placeholder
      if (!pageId || !accessToken) {
        console.log("Facebook credentials not configured. Please setup .env file.");
        console.log("Page ID:", pageId);
        console.log("Access Token:", accessToken ? "Present" : "Missing");
        setLoading(false);
        return;
      }

      try {
        // Try different endpoints in order of preference
        const endpoints = [
          `https://graph.facebook.com/v18.0/${pageId}/published_posts?fields=id,message,full_picture,created_time,permalink_url&limit=6&access_token=${accessToken}`,
          `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,full_picture,created_time,permalink_url&limit=6&access_token=${accessToken}`,
          `https://graph.facebook.com/v18.0/${pageId}/feed?fields=id,message,full_picture,created_time,permalink_url&limit=6&access_token=${accessToken}`
        ];

        let data = null;
        let lastError = null;

        for (const url of endpoints) {
          try {
            console.log("Trying endpoint:", url);
            const response = await fetch(url);
            const responseData = await response.json();

            if (response.ok && responseData.data && responseData.data.length > 0) {
              data = responseData;
              console.log("Success! Got", responseData.data.length, "posts");
              break;
            } else {
              console.warn("Endpoint failed:", responseData.error?.message || "No data");
              lastError = responseData.error;
            }
          } catch (err) {
            console.warn("Endpoint error:", err);
            lastError = err;
          }
        }

        if (data && data.data) {
          setPosts(data.data);
          setLoading(false);
        } else {
          throw lastError || new Error("No posts available");
        }
      } catch (err: any) {
        console.error("Error fetching Facebook posts:", err);
        setError(err.message || "Unable to load posts. Please check configuration.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [pageId, accessToken]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Hari ini";
    if (diffDays === 1) return "Semalam";
    if (diffDays < 7) return `${diffDays} hari lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
    return `${Math.floor(diffDays / 30)} bulan lalu`;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
              <p className="text-red-500 font-semibold mb-4">{error}</p>
              <p className="text-sm text-muted-foreground mb-6">
                Check FACEBOOK_SETUP.md untuk setup instructions
              </p>
              <a
                href={fbPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-amber-dark font-semibold transition-colors"
              >
                <span>Visit Facebook Page Directly</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Posts Grid - 6 Columns */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <a
                key={post.id}
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-glow group cursor-pointer"
              >
                {/* Post Image */}
                {post.full_picture && (
                  <div className="aspect-video relative overflow-hidden bg-secondary">
                    <img
                      src={post.full_picture}
                      alt={`Post ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Post Content */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#1877F2]/10 rounded-full flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-[#1877F2]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-foreground">Proksi Biz Solution</h4>
                      <p className="text-xs text-muted-foreground">{formatDate(post.created_time)}</p>
                    </div>
                  </div>

                  {/* Message */}
                  {post.message && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {truncateText(post.message, 120)}
                    </p>
                  )}

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-xs border-t border-border/50 pt-3">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="w-3.5 h-3.5 text-red-500" fill="red" />
                      <span>{post.likes?.summary?.total_count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MessageCircle className="w-3.5 h-3.5 text-primary" />
                      <span>{post.comments?.summary?.total_count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Share2 className="w-3.5 h-3.5 text-primary" />
                      <span>{post.shares?.count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                      <span>Lihat</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Placeholder when no credentials */}
        {!loading && !error && posts.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <a
                key={index}
                href={fbPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-glass backdrop-blur-md border border-glass-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-[#1877F2]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Latest Update #{index}
                    </h4>
                    <p className="text-xs text-muted-foreground">Klik untuk lihat post</p>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-transparent rounded-lg flex items-center justify-center border border-glass-border mb-3">
                  <Facebook className="w-12 h-12 text-primary/20" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Setup Facebook Graph API untuk auto-load posts. Check FACEBOOK_SETUP.md
                </p>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                  <span>Lihat Di Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        )}

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

export default FacebookFeed;
