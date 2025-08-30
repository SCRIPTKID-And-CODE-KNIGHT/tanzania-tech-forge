import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    contactMethod: "email"
  });

  const services = [
    "Web & App Development",
    "IT Consultancy", 
    "Cybersecurity Training",
    "Tech Workshops & Bootcamps",
    "AI & Data Science Solutions",
    "Hardware & IoT Projects",
    "General Inquiry"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, we'll redirect to WhatsApp or email based on preference
      if (formData.contactMethod === 'whatsapp') {
        const whatsappMessage = `Hi! I'd like to inquire about ${formData.service}.%0A%0AName: ${formData.fullName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/255756377013?text=${whatsappMessage}`, '_blank');
      } else {
        // Create mailto link
        const subject = `Service Inquiry: ${formData.service}`;
        const body = `Name: ${formData.fullName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage:%0A${formData.message}`;
        window.open(`mailto:technociphernet@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }

      toast({
        title: "Redirecting to contact method!",
        description: formData.contactMethod === 'whatsapp' 
          ? "Opening WhatsApp with your message..." 
          : "Opening your email client with the message...",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        contactMethod: "email"
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Let's Build Something
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent"> Amazing Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center shadow-soft border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+255756377013" 
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  +255 756 377 013
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Mon-Fri: 8AM-6PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/255756377013" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Chat with us
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Quick responses
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:technociphernet@gmail.com" 
                  className="text-primary hover:text-primary/80 font-medium text-sm"
                >
                  technociphernet@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  24/7 support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium">Dar es Salaam</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Tanzania
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Book a Service</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+255 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => handleInputChange('service', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Description *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or requirements..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup 
                        value={formData.contactMethod} 
                        onValueChange={(value) => handleInputChange('contactMethod', value)}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                          <Label htmlFor="whatsapp-contact">WhatsApp</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="cta" className="w-full" asChild>
                    <a 
                      href="https://wa.me/255756377013?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20tech%20services" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+255756377013">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Direct
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg mt-4">
                    <p className="text-sm text-accent font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Emergency support available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest projects and tech insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="icon">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you start my project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most projects can start within 1-2 weeks after requirements discussion and agreement. 
                  Rush projects may be accommodated based on availability.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer maintenance and support packages for all our solutions. 
                  This includes updates, bug fixes, and technical assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">What are your payment terms?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We typically work with 50% upfront and 50% on completion for smaller projects. 
                  Larger projects can be broken into milestones.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you work with international clients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! We work with clients across East Africa and internationally. 
                  Remote collaboration is one of our strengths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;