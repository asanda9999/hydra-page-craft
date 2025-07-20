import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "3-Page Websites", href: "#pricing" },
    { label: "6-Page Websites", href: "#pricing" },
    { label: "Payment Integration", href: "#pricing" },
    { label: "Domain & Hosting", href: "#pricing" },
    { label: "Website Updates", href: "#contact" }
  ];

  return (
    <footer className="bg-tech-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Hydra Tech Solution</h3>
              <p className="text-white/80 leading-relaxed">
                Professional web development services for South African small businesses. 
                We create stunning websites that drive results.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tech-mint" />
                <a href="mailto:hello@hydratechsolution.co.za" className="text-white/90 hover:text-tech-mint transition-colors">
                  hello@hydratechsolution.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tech-mint" />
                <a href="tel:+27123456789" className="text-white/90 hover:text-tech-mint transition-colors">
                  +27 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-tech-mint" />
                <span className="text-white/90">Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-tech-mint transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-tech-mint transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ready to Get Started?</h4>
            <p className="text-white/80 mb-6 leading-relaxed">
              Get your business online with a professional website that converts visitors into customers.
            </p>
            <Button 
              variant="secondary" 
              className="bg-tech-mint hover:bg-tech-blue text-white border-none w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Globe className="w-4 h-4 mr-2" />
              Get Your Quote
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/70">
              © {currentYear} Hydra Tech Solution. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-tech-mint transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-tech-mint transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;