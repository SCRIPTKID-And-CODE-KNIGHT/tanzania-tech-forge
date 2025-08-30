import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TTF</span>
              </div>
              <span className="font-bold text-lg">Tanzania Tech Forge</span>
            </div>
            <p className="text-white/80 text-sm">
              Innovating technology solutions for Tanzania and beyond. 
              We forge the future through cutting-edge tech services.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/events" className="text-white/80 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Web & App Development</li>
              <li className="text-white/80">IT Consultancy</li>
              <li className="text-white/80">Cybersecurity Training</li>
              <li className="text-white/80">AI & Data Science</li>
              <li className="text-white/80">Tech Workshops</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+255756377013" 
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+255 756 377 013</span>
              </a>
              <a 
                href="mailto:technociphernet@gmail.com" 
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>technociphernet@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
            <Button variant="cta" asChild>
              <a 
                href="https://wa.me/255756377013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 text-center text-sm text-white/60">
          <p>&copy; 2024 Tanzania Tech Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;