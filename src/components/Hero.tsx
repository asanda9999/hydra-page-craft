import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tech-black/90 to-tech-blue/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Hydra Tech
              <span className="block text-tech-mint">Solution</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-mint mx-auto rounded-full"></div>
          </div>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-3xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
            Professional Landing Pages That Convert Visitors Into Customers
          </h2>
          
          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We build stunning, responsive websites for small businesses that drive results. 
            From simple landing pages to complex features like payment gateways - we've got you covered.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="tech" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Packages
            </Button>
            <Button 
              variant="gold" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tech-mint mb-2">R1500</div>
              <div className="text-white/80">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tech-mint mb-2">48hrs</div>
              <div className="text-white/80">Quick Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tech-mint mb-2">R100/hr</div>
              <div className="text-white/80">Update Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;