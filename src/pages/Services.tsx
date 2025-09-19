import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Heart, 
  Stethoscope, 
  Brain, 
  Eye, 
  Smile,
  Baby,
  Activity,
  Users,
  Phone,
  Clock,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const healthPlans = [
    {
      name: 'Bronze Plan',
      price: '₦89,000',
      period: 'per month',
      description: 'Perfect for individuals and young adults seeking basic coverage.',
      features: [
        'Primary care visits',
        'Preventive screenings',
        'Emergency care',
        'Basic prescription coverage',
        'Telehealth services',
      ],
      popular: false,
    },
    {
      name: 'Silver Plan',
      price: '₦149,000',
      period: 'per month',
      description: 'Comprehensive coverage for families with all essential benefits.',
      features: [
        'All Essential Care benefits',
        'Specialist consultations',
        'Mental health services',
        'Maternity & pediatric care',
        'Advanced diagnostics',
        'Wellness programs',
      ],
      popular: true,
    },
    {
      name: 'Gold Plan',
      price: '₦199,000',
      period: 'per month',
      description: 'Our most comprehensive plan with premium benefits and services.',
      features: [
        'All Complete Care benefits',
        'Concierge medicine services',
        'International coverage',
        'Advanced treatment options',
        'Priority scheduling',
        'Health coaching',
      ],
      popular: false,
    },
  ];

  const medicalServices = [
    {
      icon: Heart,
      title: 'Primary Care',
      description: 'Comprehensive primary care services including annual checkups, preventive screenings, and ongoing health management.',
    },
    {
      icon: Stethoscope,
      title: 'Specialist Care',
      description: 'Access to a network of board-certified specialists in cardiology, dermatology, orthopedics, and more.',
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Complete mental health services including therapy, counseling, and psychiatric care with licensed professionals.',
    },
    {
      icon: Eye,
      title: 'Vision Care',
      description: 'Comprehensive eye care including annual exams, prescription eyewear, and treatment for eye conditions.',
    },
    {
      icon: Smile,
      title: 'Dental Care',
      description: 'Full dental services from routine cleanings and fillings to major procedures and orthodontic care.',
    },
    {
      icon: Baby,
      title: 'Maternity & Pediatrics',
      description: 'Complete care for expecting mothers and children from birth through adolescence.',
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with direct access to our network of emergency departments nationwide.',
    },
    {
      icon: Users,
      title: 'Wellness Programs',
      description: 'Proactive wellness initiatives including fitness programs, nutrition counseling, and health coaching.',
    },
  ];

  const partnerships = [
    'Regional Medical Centers',
    'Community Health Networks',
    'Urgent Care Facilities',
    'Specialty Clinics',
    'Diagnostic Centers',
    'Rehabilitation Services',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Healthcare Services & Plans - Sterling Health HMO</title>
      <meta name="description" content="Explore Sterling Health's comprehensive healthcare services and plans. From primary care to specialist services, we offer complete coverage for individuals and families." />
      
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 fade-in-up">
              Healthcare Services & Plans
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 fade-in-up">
              Comprehensive healthcare solutions designed to meet your unique needs. 
              From preventive care to specialized treatments, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Health Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Choose Your Health Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the plan that best fits your healthcare needs and budget. 
              All plans include our core benefits with no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthPlans.map((plan, index) => (
              <Card key={index} className={`card-medical relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full ${plan.popular ? 'btn-hero' : 'btn-secondary'} focus-medical`}>
                  Select Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Comprehensive Medical Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our network provides complete healthcare services to keep you healthy and address any medical needs that arise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {medicalServices.map((service, index) => (
              <Card key={index} className="card-feature group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Network */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
                Extensive Provider Network
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Access to over 10,000 healthcare providers including top hospitals, 
                specialty clinics, and primary care physicians across the nation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {partnerships.map((partnership, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{partnership}</span>
                  </div>
                ))}
              </div>
              
              <Button className="btn-secondary focus-medical">
                <Users className="w-5 h-5 mr-2" />
                Find a Provider
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="card-medical">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Same-Day Appointments</h3>
                    <p className="text-muted-foreground text-sm">Available for urgent care needs</p>
                  </div>
                </div>
              </Card>
              
              <Card className="card-medical">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Telehealth Services</h3>
                    <p className="text-muted-foreground text-sm">Virtual consultations available 24/7</p>
                  </div>
                </div>
              </Card>
              
              <Card className="card-medical">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-light rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Coordinated Care</h3>
                    <p className="text-muted-foreground text-sm">Seamless referrals and care management</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Choose your plan today and start experiencing the Sterling Health difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90 focus-medical">
                <Heart className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button variant="outline" className="btn-hero-outline border-white text-white hover:bg-white hover:text-primary focus-medical">
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;