import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users, Award, Clock } from "lucide-react";

const About = () => {
  const skills = [
    "React", "HTML5", "CSS3", "JavaScript", "Responsive Design", 
    "SEO", "Payment Integration", "Domain Management", "Web Hosting"
  ];

  const benefits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Well-structured, maintainable code that follows best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Contemporary designs that reflect your brand and engage visitors"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Optimized websites that load quickly and perform excellently"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Focused",
      description: "Designed with your customers in mind for maximum conversions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Thorough testing across devices and browsers before delivery"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Projects completed on schedule without compromising quality"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-[#024b31]">Hydra Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web development services tailored for small businesses in South Africa
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Bringing Your Business Online with Professional Excellence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Hydra Tech Solution, we specialize in creating stunning, functional websites 
              that help small businesses establish their online presence. Our expertise covers 
              everything from simple landing pages to complex e-commerce solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the unique challenges faced by South African small businesses, 
              and our affordable pricing structure makes professional web development accessible to everyone.
            </p>
            
            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Technical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 bg-green-100 text-[#024b31] hover:bg-[#024b31] hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-green-100 to-green-50 border-green-200">
              <CardContent className="space-y-2">
                <div className="text-4xl font-bold text-[#024b31]">50+</div>
                <div className="text-foreground font-medium">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="space-y-2">
                <div className="text-4xl font-bold text-[#024b31]">98%</div>
                <div className="text-foreground font-medium">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-100 to-green-50 border-green-200">
              <CardContent className="space-y-2">
                <div className="text-4xl font-bold text-[#024b31]">48hrs</div>
                <div className="text-foreground font-medium">Average Delivery</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="space-y-2">
                <div className="text-4xl font-bold text-[#024b31]">24/7</div>
                <div className="text-foreground font-medium">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#024b31] to-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;