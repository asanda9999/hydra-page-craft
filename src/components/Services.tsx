import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, CreditCard, Smartphone, Zap, Headphones } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "R1,500",
      pages: "3 Pages",
      description: "Perfect for new businesses getting started online",
      features: [
        "3 Professional Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
        "Social Media Links",
        "1 Round of Revisions"
      ],
      popular: false
    },
    {
      name: "Business Package",
      price: "R3,000",
      pages: "6 Pages",
      description: "Complete solution with advanced features",
      features: [
        "6 Professional Pages",
        "Mobile Responsive Design",
        "Payment Gateway Integration",
        "Domain Setup & Hosting",
        "Advanced SEO Optimization",
        "Contact Forms & Analytics",
        "Social Media Integration",
        "2 Rounds of Revisions",
        "1 Month Free Support"
      ],
      popular: true
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Domain & Hosting",
      description: "We handle domain registration and reliable hosting setup"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Gateways",
      description: "Secure payment processing with popular South African gateways"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimized",
      description: "Every site is fully responsive and mobile-friendly"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "R100/hour for updates and maintenance after launch"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-hydra-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-hydra-blue">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with everything you need to get your business online
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-hydra-blue border-2 shadow-lg transform scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-hydra-blue to-hydra-teal text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-hydra-blue">{pkg.price}</span>
                  <span className="text-lg text-muted-foreground ml-2">/ {pkg.pages}</span>
                </div>
                <CardDescription className="text-lg">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-hydra-teal flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Button 
                    variant={pkg.popular ? "hydra" : "hydraOutline"} 
                    className="w-full py-3 text-lg font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What's <span className="text-hydra-blue">Included</span>
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-hydra-blue to-hydra-teal rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Update Pricing */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-hydra-light/30 to-accent/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">Need Updates Later?</h3>
          <p className="text-lg text-muted-foreground mb-4">
            We provide ongoing support and updates at a competitive hourly rate
          </p>
          <div className="text-3xl font-bold text-hydra-blue">R100 per hour</div>
          <p className="text-muted-foreground mt-2">For any changes or additions after your site is live</p>
        </div>
      </div>
    </section>
  );
};

export default Services;