import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Our Cakes", href: "#cakes" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-chocolate text-cream/90">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-3">
              Sweet Bliss
            </h3>
            <p className="text-gold text-sm mb-4">Har Celebration Ka Perfect Cake</p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Premium cake studio creating sweet memories for every celebration in Bilaspur, Chhattisgarh.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Connect With Us</h4>
            <p className="text-cream/70 text-sm mb-2">Bilaspur, Chhattisgarh - 495001</p>
            <p className="text-cream/70 text-sm mb-2">+91 98765 43210</p>
            <p className="text-cream/70 text-sm mb-4">hello@sweetbliss.in</p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm text-center md:text-left">
            © {currentYear} Sweet Bliss. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-blush fill-blush" /> in Bilaspur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
