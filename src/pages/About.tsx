import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients and communities to create meaningful impact."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from code to customer service."
    }
  ];

  const team = [
    {
      name: "Dr. Amina Hassan",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      description: "PhD in Computer Science with 10+ years in AI research and development."
    },
    {
      name: "James Mwalimu",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      description: "Expert in modern web technologies and mobile app development."
    },
    {
      name: "Sarah Kimaro",
      role: "Cybersecurity Specialist",
      expertise: "Information Security",
      description: "Certified ethical hacker with extensive experience in enterprise security."
    },
    {
      name: "David Mpenda",
      role: "Project Manager",
      expertise: "Tech Strategy",
      description: "MBA in Technology Management, specializing in digital transformation."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              About Tanzania Tech Forge
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Forging Tanzania's
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent"> Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We are a passionate team of technologists dedicated to bringing world-class 
              technology solutions to Tanzania and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2022, Tanzania Tech Forge emerged from a vision to bridge the technology 
                  gap in East Africa. Our founders, a group of passionate technologists and entrepreneurs, 
                  recognized the immense potential for technology to transform businesses and communities 
                  across Tanzania.
                </p>
                <p>
                  Starting with a small team of dedicated professionals, we've grown into a comprehensive 
                  technology services company, serving clients from startups to established enterprises. 
                  Our projects span across various industries, from healthcare and agriculture to 
                  finance and education.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, always staying true to our 
                  mission of making advanced technology accessible and impactful for Tanzanian businesses.
                </p>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">50+</div>
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">30+</div>
                  <div className="text-lg">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">15+</div>
                  <div className="text-lg">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-elegant border-0 bg-gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Eye className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center">
                  To be East Africa's leading technology innovation hub, empowering businesses 
                  and communities through accessible, cutting-edge technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-gradient-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center">
                  To deliver world-class technology services that drive digital transformation, 
                  foster innovation, and create sustainable value for our clients and society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals passionate about technology and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">{member.expertise}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{member.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
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

export default About;