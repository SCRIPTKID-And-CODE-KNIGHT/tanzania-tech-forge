import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Code, 
  Brain, 
  Shield, 
  Laptop, 
  Users, 
  BookOpen,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web & App Development",
      description: "Custom websites, web applications, and mobile apps built with modern technologies and best practices.",
      icon: <Code className="w-12 h-12" />,
      price: "Starting from $500",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Mobile App Development",
        "Progressive Web Apps",
        "API Development",
        "Database Design",
        "Performance Optimization",
        "SEO Implementation"
      ],
      technologies: ["React", "Node.js", "Flutter", "MongoDB", "PostgreSQL"]
    },
    {
      title: "IT Consultancy",
      description: "Strategic technology consulting to help your business leverage technology for growth and efficiency.",
      icon: <Laptop className="w-12 h-12" />,
      price: "Starting from $100/hour",
      features: [
        "Digital Strategy Planning",
        "System Architecture",
        "Cloud Migration",
        "Technology Assessment",
        "Process Automation",
        "Vendor Selection",
        "Project Management",
        "Technical Documentation"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"]
    },
    {
      title: "Cybersecurity Training",
      description: "Comprehensive cybersecurity training programs to protect your organization from digital threats.",
      icon: <Shield className="w-12 h-12" />,
      price: "Starting from $200/session",
      features: [
        "Security Awareness Training",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Policy Development",
        "Incident Response Planning",
        "Compliance Auditing",
        "Risk Assessment",
        "Security Certification Prep"
      ],
      technologies: ["CISSP", "CEH", "CompTIA Security+", "NIST Framework"]
    },
    {
      title: "Tech Workshops & Bootcamps",
      description: "Intensive training programs designed to upskill individuals and teams in cutting-edge technologies.",
      icon: <BookOpen className="w-12 h-12" />,
      price: "Starting from $50/person",
      features: [
        "Programming Bootcamps",
        "Data Science Training",
        "Digital Marketing",
        "Cloud Computing",
        "Mobile Development",
        "AI/ML Fundamentals",
        "Entrepreneurship",
        "Certification Programs"
      ],
      technologies: ["Python", "JavaScript", "Data Science", "Machine Learning"]
    },
    {
      title: "AI & Data Science Solutions",
      description: "Advanced AI and machine learning solutions to automate processes and derive insights from data.",
      icon: <Brain className="w-12 h-12" />,
      price: "Starting from $1000",
      features: [
        "Machine Learning Models",
        "Data Analytics",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Business Intelligence",
        "Data Visualization",
        "Automation Solutions"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "Power BI"]
    },
    {
      title: "Hardware & IoT Projects",
      description: "Internet of Things solutions and hardware projects using Arduino, Raspberry Pi, and custom sensors.",
      icon: <Zap className="w-12 h-12" />,
      price: "Starting from $300",
      features: [
        "Arduino Projects",
        "Raspberry Pi Solutions",
        "Sensor Integration",
        "Home Automation",
        "Agricultural Monitoring",
        "Industrial IoT",
        "Prototype Development",
        "PCB Design"
      ],
      technologies: ["Arduino", "Raspberry Pi", "ESP32", "C++", "MicroPython"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Technology Solutions for
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent"> Every Need</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From web development to AI solutions, we provide comprehensive technology services 
              to help your business thrive in the digital age.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-xl text-white">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">{service.price}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button variant="default" className="flex-1" asChild>
                      <Link to="/contact">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://wa.me/255756377013" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Tanzania Tech Forge?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine local expertise with global standards to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of the Tanzanian market and business environment, 
                  combined with international best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Zap className="w-8 h-8" />
                </div>
                <CardTitle>Cutting-Edge Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stay ahead of technology trends and use the latest tools and frameworks 
                  to deliver modern, scalable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track record of successful projects across various industries, 
                  with satisfied clients and measurable business impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a custom quote 
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book Your Service</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="mailto:technociphernet@gmail.com">
                  Email Us Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;