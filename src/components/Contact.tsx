import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    cakeType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Sent! 🎂",
      description: "We'll get back to you shortly with cake options.",
    });
    
    setFormData({
      name: "",
      mobile: "",
      cakeType: "",
      eventDate: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
              Order Your Dream Cake
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a special celebration coming up? Let us create the perfect cake for you. 
              Fill out the form or contact us directly.
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+919876543210" 
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blush-light flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-blush" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </a>
              
              <a 
                href="mailto:hello@sweetbliss.in" 
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="font-semibold text-foreground">hello@sweetbliss.in</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up stagger-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 lg:p-8 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send Enquiry
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="mobile" className="text-sm font-medium text-foreground mb-2 block">
                    Mobile Number *
                  </label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cakeType" className="text-sm font-medium text-foreground mb-2 block">
                      Cake Type *
                    </label>
                    <Input
                      id="cakeType"
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      placeholder="e.g., Birthday"
                      required
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="text-sm font-medium text-foreground mb-2 block">
                      Event Date *
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cake requirements..."
                    rows={4}
                    className="rounded-xl border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
