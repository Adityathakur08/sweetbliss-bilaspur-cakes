import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bilaspur",
    rating: 5,
    text: "Best cake shop in Bilaspur! The chocolate truffle cake was absolutely delicious. Amazing taste and beautiful designs. Will definitely order again!",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    location: "Bilaspur",
    rating: 5,
    text: "Ordered a custom photo cake for my daughter's birthday. The quality exceeded our expectations. Thank you Sweet Bliss for making her day special!",
    avatar: "RV",
  },
  {
    name: "Anita Patel",
    location: "Bilaspur",
    rating: 5,
    text: "The eggless cakes here are the best in the city. Fresh, soft, and full of flavor. Highly recommended for pure vegetarian options!",
    avatar: "AP",
  },
  {
    name: "Vikram Singh",
    location: "Bilaspur",
    rating: 5,
    text: "We ordered our wedding cake from Sweet Bliss and it was perfect! The 4-tier cake was stunning and tasted incredible. All guests loved it!",
    avatar: "VS",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            Customer Love
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from our happy customers
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center">
                  <span className="font-semibold text-blush">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
