import { MessageCircle, Facebook, X } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "60199984399";
  const whatsappMessage = encodeURIComponent(
    "Hi! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );
  const facebookPage = "https://facebook.com/proksibizmy"; // Tukar ke link FB page sebenar

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Icons - Show when open */}
      {isOpen && (
        <>
          {/* WhatsApp - Top */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-20 right-0 w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group animate-slide-up"
            aria-label="Chat on WhatsApp"
            style={{
              boxShadow: "0 0 25px rgba(37, 211, 102, 0.5)",
              animationDelay: "0.1s",
            }}
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            {/* Tooltip */}
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700">
              WhatsApp Kami
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45 border-b border-r border-gray-700"></span>
            </span>
          </a>

          {/* Facebook - Left */}
          <a
            href={facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-20 w-14 h-14 bg-[#1877F2] hover:bg-[#0c63d4] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-x-1 group animate-slide-left"
            aria-label="Visit Facebook Page"
            style={{
              boxShadow: "0 0 25px rgba(24, 119, 242, 0.5)",
              animationDelay: "0.2s",
            }}
          >
            <Facebook className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" fill="white" />
            {/* Tooltip */}
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700">
              Facebook Page
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45 border-b border-r border-gray-700"></span>
            </span>
          </a>
        </>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group relative overflow-hidden ${
          isOpen 
            ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rotate-90 scale-95" 
            : "bg-gradient-to-br from-[#25D366] via-[#20c75a] to-[#1877F2] hover:scale-110 animate-pulse-glow"
        }`}
        aria-label="Toggle social links"
        style={{
          boxShadow: isOpen 
            ? "0 0 40px rgba(239, 68, 68, 0.6)" 
            : "0 0 40px rgba(37, 211, 102, 0.6)",
        }}
      >
        {/* Animated ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping-slow"></span>
        )}
        
        {isOpen ? (
          <X className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-500" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" strokeWidth={2} />
        )}
        
        {/* Notification badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce border-2 border-white shadow-lg">
            2
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;
