import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Shield, 
  Globe, 
  Smartphone,
  Database,
  Zap,
  Microscope,
  Leaf,
  ShoppingCart,
  GraduationCap
} from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "Bacteria Detection System",
    description: "Revolutionary AI-powered system for rapid bacteria identification using advanced machine learning algorithms and computer vision. Deployed in healthcare facilities across Tanzania.",
    category: "AI & Healthcare",
    status: "Deployed",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "PostgreSQL"],
    features: [
      "Real-time bacteria identification",
      "99.2% accuracy rate",
      "Integration with lab equipment",
      "Comprehensive reporting dashboard",
      "Mobile app for field testing"
    ],
    impact: "Reduced diagnosis time from 24 hours to 30 minutes"
  };

  const projects = [
    {
      title: "Smart Agriculture Platform",
      description: "IoT-based monitoring system for crop management, soil analysis, and yield optimization for smallholder farmers.",
      category: "IoT & Agriculture",
      icon: <Leaf className="w-8 h-8" />,
      technologies: ["Arduino", "Raspberry Pi", "Python", "React", "MongoDB"],
      status: "In Progress",
      client: "Ministry of Agriculture"
    },
    {
      title: "E-Commerce Marketplace",
      description: "Full-stack marketplace solution connecting local vendors with customers, featuring payment integration and logistics management.",
      category: "Web Development",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
      status: "Deployed",
      client: "Local Business Network"
    },
    {
      title: "University Management System",
      description: "Comprehensive student information system with academic management, fee tracking, and online learning capabilities.",
      category: "Education Technology",
      icon: <GraduationCap className="w-8 h-8" />,
      technologies: ["Laravel", "Vue.js", "MySQL", "Docker"],
      status: "Deployed",
      client: "University of Dar es Salaam"
    },
    {
      title: "Cybersecurity Assessment Tool",
      description: "Automated security scanning and vulnerability assessment platform for small and medium enterprises.",
      category: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Python", "Nmap", "Docker", "React", "PostgreSQL"],
      status: "Beta Testing",
      client: "SME Security Initiative"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and offline transaction capabilities.",
      category: "Fintech",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      status: "In Development",
      client: "Community Bank"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Business intelligence platform providing real-time insights and predictive analytics for retail chains.",
      category: "Data Science",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Python", "Power BI", "SQL Server", "Apache Spark"],
      status: "Deployed",
      client: "Retail Chain Group"
    }
  ];

  const categories = [
    { name: "All Projects", count: 7 },
    { name: "AI & Machine Learning", count: 2 },
    { name: "Web Development", count: 2 },
    { name: "Mobile Apps", count: 1 },
    { name: "Cybersecurity", count: 1 },
    { name: "IoT & Hardware", count: 1 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Our Projects
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Innovative Solutions
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent"> in Action</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our portfolio of successful technology projects that have made a real 
              impact across various industries in Tanzania and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our flagship project making waves in the healthcare industry
            </p>
          </div>

          <Card className="shadow-elegant border-0 bg-gradient-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-xl text-white">
                      <Microscope className="w-8 h-8" />
                    </div>
                    <div>
                      <Badge variant="secondary">{featuredProject.category}</Badge>
                      <Badge variant="outline" className="ml-2">{featuredProject.status}</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{featuredProject.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{featuredProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {featuredProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <Zap className="w-4 h-4 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Impact:</h4>
                    <p className="text-foreground">{featuredProject.impact}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="default" asChild>
                      <Link to="/contact">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Request Demo
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white space-y-8">
                  <Brain className="w-32 h-32 mx-auto text-secondary" />
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">99.2%</div>
                    <div className="text-lg">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">30min</div>
                    <div className="text-lg">Diagnosis Time</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                    <div className="text-lg">Healthcare Facilities</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Project Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse solutions across multiple technology domains
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-primary rounded-xl text-white">
                      {project.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                      <br />
                      <Badge variant={project.status === 'Deployed' ? 'default' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground text-sm">Client:</h4>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link to="/contact">View Details</Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Have a Project in Mind?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;