import CakeCard from "./CakeCard";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeEggless from "@/assets/cake-eggless.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";

const cakes = [
  {
    image: cakeBirthday,
    name: "Birthday Cakes",
    description: "Celebrate with our custom birthday cakes, designed to make your special day unforgettable.",
    startingPrice: 499,
  },
  {
    image: cakeWedding,
    name: "Wedding Cakes",
    description: "Elegant multi-tier wedding cakes with intricate designs and premium flavors.",
    startingPrice: 2999,
  },
  {
    image: cakeCupcakes,
    name: "Cupcakes",
    description: "Delightful bite-sized treats perfect for parties, gifts, or sweet cravings.",
    startingPrice: 49,
  },
  {
    image: cakeChocolate,
    name: "Chocolate & Truffle Cakes",
    description: "Rich, indulgent chocolate cakes for the true chocolate lovers.",
    startingPrice: 699,
  },
  {
    image: cakeEggless,
    name: "Eggless Cakes",
    description: "Pure vegetarian cakes without compromising on taste or texture.",
    startingPrice: 449,
  },
  {
    image: cakeCustom,
    name: "Custom Photo & Theme Cakes",
    description: "Personalized cakes with your photos, themes, and unique designs.",
    startingPrice: 799,
  },
];

const OurCakes = () => {
  return (
    <section id="cakes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            Our Specialties
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-4">
            Explore Our Cakes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From classic flavors to custom creations, find the perfect cake for your celebration
          </p>
        </div>
        
        {/* Cakes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <CakeCard key={cake.name} {...cake} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCakes;
