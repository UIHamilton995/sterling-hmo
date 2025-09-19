import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, HousePlusIcon, Shield, Users, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: '/', label: 'Home', icon: HousePlusIcon },
    { href: '/about', label: 'About Us', icon: Users },
    { href: '/services', label: 'Services', icon: Shield },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 focus-medical">
            <img
              className='h-14 w-14'
              src="/src/assets/SterlingHMO.jpeg"
              alt="Sterling HMO Logo"
            />
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">Sterling HMO</h1>
              <p className="text-xs text-muted-foreground">Put your Health in our Hands.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 focus-medical ${
                  isActive(href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-card-hover'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="btn-hero focus-medical">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-card-hover focus-medical"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 focus-medical ${
                    isActive(href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-card-hover'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="justify-start focus-medical">
                  Sign In
                </Button>
                <Button className="btn-hero justify-start focus-medical">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;