import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeEggless from "@/assets/cake-eggless.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";

const galleryImages = [
  { src: cakeWedding, alt: "Elegant wedding cake with gold details", size: "large" },
  { src: cakeBirthday, alt: "Pink birthday cake with candles", size: "small" },
  { src: cakeCupcakes, alt: "Colorful cupcake collection", size: "small" },
  { src: cakeChocolate, alt: "Rich chocolate truffle cake", size: "small" },
  { src: cakeEggless, alt: "Fresh strawberry eggless cake", size: "small" },
  { src: cakeCustom, alt: "Custom themed kids cake", size: "large" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            Our Creations
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of our most beautiful cake creations
          </p>
        </div>
        
        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in-up stagger-${(index % 6) + 1} ${
                image.size === "large" ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
