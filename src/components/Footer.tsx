import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Shield, Users, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-primary">Sterling Health</h3>
                <p className="text-xs text-muted-foreground">Your Health, Our Priority</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Providing comprehensive healthcare solutions with a focus on preventive care, 
              accessibility, and patient satisfaction.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>HIPAA Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us', icon: Users },
                { href: '/services', label: 'Our Services', icon: Shield },
                { href: '/contact', label: 'Contact Us', icon: Phone },
                { href: '/privacy', label: 'Privacy Policy', icon: FileText },
              ].map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link 
                    to={href} 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-medical"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">24/7 Member Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground">info@sterlinghealth.com</p>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground">123 Healthcare Plaza</p>
                  <p className="text-foreground">Sterling City, SC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Member Services</span>
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mon - Fri:</span>
                  <span className="text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="text-foreground">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-3 p-3 bg-secondary/10 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Emergency services available 24/7 through our partner network
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Sterling Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-medical">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-medical">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-medical">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;