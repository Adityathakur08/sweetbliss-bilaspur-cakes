import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hi! I'd like to order a cake from Sweet Bliss.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Order on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-elevated hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold hidden sm:block">Order Now</span>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-chocolate text-cream text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-card">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 border-4 border-transparent border-t-chocolate" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
