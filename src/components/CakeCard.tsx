import { Button } from "@/components/ui/button";

interface CakeCardProps {
  image: string;
  name: string;
  description: string;
  startingPrice: number;
  index?: number;
}

const CakeCard = ({ image, name, description, startingPrice, index = 0 }: CakeCardProps) => {
  return (
    <div 
      className={`group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 animate-fade-in-up stagger-${(index % 6) + 1}`}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-soft">
          <p className="text-sm font-semibold text-gold">₹{startingPrice}+</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-blush transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Starting from <span className="font-semibold text-foreground">₹{startingPrice}</span>
          </p>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
