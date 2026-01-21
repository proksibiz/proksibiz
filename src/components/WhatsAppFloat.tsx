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
      <div className={`absolute bottom-20 right-0 transition-all duration-500 ease-out ${
        isOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* WhatsApp - Top */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group mb-3"
          aria-label="Chat on WhatsApp"
          style={{
            boxShadow: "0 0 25px rgba(37, 211, 102, 0.5)",
            transitionDelay: isOpen ? '100ms' : '0ms',
          }}
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          {/* Tooltip */}
          <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700">
            WhatsApp Kami
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45 border-b border-r border-gray-700"></span>
          </span>
        </a>
      </div>

      {/* Facebook - Left */}
      <div className={`absolute bottom-0 right-20 transition-all duration-500 ease-out ${
        isOpen 
          ? 'opacity-100 translate-x-0 pointer-events-auto' 
          : 'opacity-0 translate-x-4 pointer-events-none'
      }`}>
        <a
          href={facebookPage}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-14 h-14 bg-[#1877F2] hover:bg-[#0c63d4] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-x-1 group"
          aria-label="Visit Facebook Page"
          style={{
            boxShadow: "0 0 25px rgba(24, 119, 242, 0.5)",
            transitionDelay: isOpen ? '150ms' : '0ms',
          }}
        >
          <Facebook className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" fill="white" />
          {/* Tooltip */}
          <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-700">
            Facebook Page
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45 border-b border-r border-gray-700"></span>
          </span>
        </a>
      </div>

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
      </button>
    </div>
  );
};

export default WhatsAppFloat;
