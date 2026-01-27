import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blush/30 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-gold/20 blur-3xl animate-float stagger-2" />
      
      <div className="container mx-auto px-4 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <p className="text-gold font-medium tracking-wider uppercase text-sm">
              Har Celebration Ka Perfect Cake
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate leading-tight">
              Fresh, Beautifully Crafted{" "}
              <span className="text-gradient-gold">Cakes</span> in Bilaspur
            </h1>
            
            <p className="text-chocolate-light text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Custom designer cakes made with love for every celebration. 
              From birthdays to weddings, we create sweet memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl" className="group">
                Order Your Cake
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in stagger-2">
            <div className="relative z-10">
              <img 
                src={heroCake} 
                alt="Beautiful three-tier wedding cake with pink roses and gold accents" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card animate-float">
              <p className="font-display text-2xl font-bold text-gold">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card animate-float stagger-3">
              <p className="font-display text-2xl font-bold text-blush">★ 4.9</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
