import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Laptop, 
  Shield, 
  Brain, 
  Users, 
  Phone, 
  MessageCircle,
  Code,
  Database,
  Globe,
  Zap
} from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Web & App Development",
      description: "Modern, responsive websites and mobile applications built with cutting-edge technologies.",
      icon: <Code className="w-8 h-8" />,
      features: ["React & Node.js", "Mobile Apps", "E-commerce", "Custom Solutions"]
    },
    {
      title: "AI & Data Science",
      description: "Intelligent solutions powered by machine learning and advanced analytics.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Machine Learning", "Data Analytics", "Automation", "Predictive Models"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Security Audits", "Threat Analysis", "Training", "Compliance"]
    },
    {
      title: "IT Consultancy",
      description: "Strategic technology guidance to optimize your business operations.",
      icon: <Laptop className="w-8 h-8" />,
      features: ["Digital Strategy", "System Integration", "Cloud Migration", "Tech Support"]
    }
  ];

  const featuredProjects = [
    {
      title: "Bacteria Detection System",
      description: "AI-powered system for rapid bacteria identification using advanced machine learning algorithms.",
      category: "AI & Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Smart Agriculture Platform",
      description: "IoT-based monitoring system for crop management and yield optimization.",
      category: "IoT & Agriculture",
      image: "/placeholder.svg"
    },
    {
      title: "E-Commerce Marketplace",
      description: "Full-stack marketplace solution connecting local vendors with customers.",
      category: "Web Development",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              🚀 Innovating Technology for Tanzania
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Building the Future with
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent"> Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From AI solutions to cybersecurity training, we forge cutting-edge technology services 
              that empower businesses and communities across Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book a Service</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="https://wa.me/255756377013" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <Zap className="w-4 h-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our innovative solutions across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-primary relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/projects">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch with our experts and let's discuss how we can help transform your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="tel:+255756377013">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;