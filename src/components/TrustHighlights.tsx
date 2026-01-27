import { Leaf, Palette, Truck, Egg } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Fresh Ingredients",
    description: "Premium quality butter, cream & flavors",
  },
  {
    icon: Palette,
    title: "Customised Designer Cakes",
    description: "Unique designs for your special moments",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Fast delivery across Bilaspur city",
  },
  {
    icon: Egg,
    title: "Eggless Options Available",
    description: "Pure vegetarian cakes for everyone",
  },
];

const TrustHighlights = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="w-14 h-14 rounded-xl bg-blush-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-blush" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
