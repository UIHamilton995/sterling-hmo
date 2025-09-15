import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Heart, 
  Users, 
  CheckCircle, 
  Phone, 
  Calendar,
  Award,
  Clock,
  DollarSign,
  Stethoscope
} from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Complete healthcare protection with preventive care, emergency services, and specialist consultations.',
    },
    {
      icon: Heart,
      title: 'Preventive Care Focus',
      description: 'Proactive health management with regular screenings, wellness programs, and health education.',
    },
    {
      icon: Users,
      title: 'Network of Providers',
      description: 'Access to over 10,000 healthcare providers including specialists, hospitals, and clinics.',
    },
    {
      icon: Calendar,
      title: '24/7 Support',
      description: 'Round-the-clock member support and emergency care coordination when you need it most.',
    },
  ];

  const benefits = [
    'No referrals needed for most specialists',
    'Prescription drug coverage included',
    'Telehealth services available',
    'Wellness programs and health coaching',
    'Mental health support included',
    'Emergency care coverage nationwide',
  ];

  const stats = [
    { icon: Users, number: '250,000+', label: 'Active Members' },
    { icon: Stethoscope, number: '10,000+', label: 'Healthcare Providers' },
    { icon: Award, number: '4.8/5', label: 'Member Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Member Support' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Sterling Health - Comprehensive HMO Healthcare Solutions</title>
      <meta name="description" content="Sterling Health provides comprehensive HMO healthcare solutions with preventive care focus, extensive provider network, and 24/7 member support. Join 250,000+ satisfied members." />
      <meta name="keywords" content="HMO, health insurance, healthcare, preventive care, medical coverage, Sterling Health" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional healthcare team at Sterling Health medical facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="space-y-8 fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">Rated #1 HMO in Customer Satisfaction</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Your Health,
                <span className="text-gradient block">Our Priority</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Experience comprehensive healthcare coverage with Sterling Health. 
                Join over 250,000 members who trust us for affordable, accessible, and quality healthcare.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-hero text-lg px-8 py-4 focus-medical">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Your Quote
                </Button>
                <Button variant="outline" className="btn-hero-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary focus-medical">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, number, label }, index) => (
              <div key={index} className="text-center fade-in-scale">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary">{number}</div>
                <div className="text-muted-foreground font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Why Choose Sterling Health?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing exceptional healthcare experiences through innovative solutions, 
              comprehensive coverage, and personalized care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-feature group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
                Complete Healthcare Benefits
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive HMO plans are designed to keep you healthy while providing financial protection 
                for your family's healthcare needs.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="btn-secondary focus-medical">
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Plan Options
                </Button>
              </div>
            </div>
            
            <div className="card-medical">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Start Your Health Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                  <span className="text-foreground">Choose your plan</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary/5 rounded-lg">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">2</div>
                  <span className="text-foreground">Find your doctor</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-lg">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">3</div>
                  <span className="text-foreground">Start your care</span>
                </div>
              </div>
              <Button className="w-full btn-hero mt-6 focus-medical">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of satisfied members who have made Sterling Health their trusted healthcare partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90 focus-medical">
                <Heart className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button variant="outline" className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary focus-medical">
                <Phone className="w-5 h-5 mr-2" />
                Speak with an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;