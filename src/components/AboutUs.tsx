import { Award, Heart, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: Heart, label: "Made with Love" },
  { icon: Shield, label: "100% Hygienic" },
  { icon: Sparkles, label: "Premium Quality" },
  { icon: Award, label: "Award-Winning" },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              About Sweet Bliss
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
              Creating Sweet Memories Since Day One
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Sweet Bliss</strong> is a premium cake studio based in 
                Bilaspur, Chhattisgarh. We don't just bake cakes—we create memories.
              </p>
              <p>
                Every cake is freshly baked using premium ingredients with complete hygiene 
                and artistic detail. Our passion lies in transforming your celebrations into 
                unforgettable experiences with cakes that taste as amazing as they look.
              </p>
              <p>
                From traditional flavors loved by generations to modern designer cakes that 
                wow your guests, we bring expertise and creativity to every order.
              </p>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className={`flex items-center gap-2 bg-blush-light rounded-full px-4 py-2 animate-fade-in stagger-${index + 1}`}
                >
                  <feature.icon className="w-4 h-4 text-blush" />
                  <span className="text-sm font-medium text-chocolate">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-fade-in stagger-2">
            <div className="relative bg-gradient-to-br from-blush-light to-peach rounded-3xl p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center shadow-card">
                  <span className="text-4xl">🎂</span>
                </div>
                <blockquote className="font-display text-2xl md:text-3xl text-chocolate italic">
                  "Every cake tells a story of love, joy, and celebration"
                </blockquote>
                <p className="text-chocolate-light font-medium">— Sweet Bliss Team</p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-gold">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-gold">50+</p>
                  <p className="text-sm text-muted-foreground">Cake Varieties</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-gold">4.9★</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blush/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
