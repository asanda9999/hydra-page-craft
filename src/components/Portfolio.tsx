import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, ShoppingCart, CreditCard, Globe } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bella Vista Restaurant",
      category: "restaurant",
      description: "Modern restaurant website with online menu, reservations, and location info",
      image: "/api/placeholder/800/600",
      tech: ["Responsive Design", "Contact Forms", "Gallery"],
      features: ["Online Menu", "Reservation System", "Location Map"],
      type: "3-Page Website",
      link: "#"
    },
    {
      id: 2,
      title: "FitZone Gym",
      category: "fitness",
      description: "Professional fitness center website with class schedules and membership info",
      image: "/api/placeholder/800/600",
      tech: ["Modern Design", "Mobile Responsive", "SEO"],
      features: ["Class Schedules", "Trainer Profiles", "Membership Plans"],
      type: "6-Page Website",
      link: "#"
    },
    {
      id: 3,
      title: "Trendy Boutique",
      category: "ecommerce",
      description: "Elegant fashion store with payment gateway integration and product showcase",
      image: "/api/placeholder/800/600",
      tech: ["Payment Gateway", "Product Gallery", "Mobile Responsive"],
      features: ["Online Shopping", "Payment Integration", "Product Catalog"],
      type: "6-Page Website + E-commerce",
      link: "#"
    },
    {
      id: 4,
      title: "SmileCare Dental",
      category: "healthcare",
      description: "Professional dental practice website with appointment booking functionality",
      image: "/api/placeholder/800/600",
      tech: ["Appointment System", "Responsive Design", "Contact Forms"],
      features: ["Online Booking", "Service Information", "Patient Portal"],
      type: "6-Page Website",
      link: "#"
    },
    {
      id: 5,
      title: "BuildRight Contractors",
      category: "construction",
      description: "Construction company website showcasing projects and services",
      image: "/api/placeholder/800/600",
      tech: ["Project Gallery", "Quote Forms", "Mobile Responsive"],
      features: ["Project Showcase", "Quote Calculator", "Service Areas"],
      type: "3-Page Website",
      link: "#"
    },
    {
      id: 6,
      title: "Luxe Beauty Salon",
      category: "beauty",
      description: "Elegant beauty salon website with service bookings and staff profiles",
      image: "/api/placeholder/800/600",
      tech: ["Booking System", "Staff Profiles", "Service Menu"],
      features: ["Online Booking", "Service Catalog", "Gallery"],
      type: "6-Page Website",
      link: "#"
    }
  ];

  const categories = [
    { value: "all", label: "All Projects", count: projects.length },
    { value: "restaurant", label: "Restaurants", count: projects.filter(p => p.category === "restaurant").length },
    { value: "fitness", label: "Fitness", count: projects.filter(p => p.category === "fitness").length },
    { value: "ecommerce", label: "E-commerce", count: projects.filter(p => p.category === "ecommerce").length },
    { value: "healthcare", label: "Healthcare", count: projects.filter(p => p.category === "healthcare").length },
    { value: "construction", label: "Construction", count: projects.filter(p => p.category === "construction").length },
    { value: "beauty", label: "Beauty", count: projects.filter(p => p.category === "beauty").length }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ecommerce": return <ShoppingCart className="w-4 h-4" />;
      case "healthcare": return <Users className="w-4 h-4" />;
      case "restaurant": return <Calendar className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-tech-mint/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Recent <span className="text-tech-blue">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped South African businesses establish their online presence with beautiful, functional websites
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "tech" : "techOutline"}
              size="sm"
              onClick={() => setFilter(category.value)}
              className="flex items-center space-x-2"
            >
              {getCategoryIcon(category.value)}
              <span>{category.label}</span>
              <Badge variant="secondary" className="ml-1 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-tech-mint/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="bg-white/90 text-tech-black hover:bg-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Site
                    </Button>
                  </div>
                </div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-tech-blue text-white">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-tech-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs bg-tech-mint/20 text-tech-blue"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-tech-blue/30 text-tech-blue"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-muted-foreground">
              Let us create a stunning website that represents your business and drives real results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="tech" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              <Button 
                variant="techOutline" 
                size="lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;