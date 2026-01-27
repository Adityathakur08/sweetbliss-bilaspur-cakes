import { MapPin, Clock, Truck } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="rounded-2xl overflow-hidden shadow-elevated h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59272.73574756992!2d82.11892566261716!3d22.07639447909746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0cb5c91e85%3A0x3f3c5e33d74f9a0f!2sBilaspur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1706012345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sweet Bliss Bilaspur Location"
              />
            </div>
          </div>
          
          {/* Info */}
          <div className="order-1 lg:order-2 animate-fade-in-up stagger-2">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              Find Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
              Visit Our Studio
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blush-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blush" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                  <p className="text-muted-foreground">
                    Sweet Bliss Premium Cake Studio<br />
                    Bilaspur, Chhattisgarh - 495001<br />
                    India
                  </p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Open Daily: 10:00 AM – 10:00 PM<br />
                    Advance orders recommended
                  </p>
                </div>
              </div>
              
              {/* Delivery */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-peach flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-chocolate" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Delivery Area</h3>
                  <p className="text-muted-foreground">
                    Same-day delivery available across Bilaspur city<br />
                    Free delivery on orders above ₹999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
