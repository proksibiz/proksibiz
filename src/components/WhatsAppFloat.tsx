import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "60146678836"; // Tukar ke nombor sebenar
  const whatsappMessage = encodeURIComponent(
    "Assalamualaikum! Saya berminat untuk mendapatkan khidmat dari Proksi Biz Solution."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
      style={{
        boxShadow: "0 0 30px rgba(37, 211, 102, 0.4)",
      }}
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppFloat;
