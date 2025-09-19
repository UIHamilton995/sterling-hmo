import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Target, Shield, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We believe healthcare should be delivered with empathy, understanding, and genuine concern for each member\'s wellbeing.',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We maintain the highest ethical standards in all our operations, ensuring transparency and honesty in every interaction.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously seek innovative solutions to improve healthcare delivery and member experience.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We are committed to strengthening communities by making quality healthcare accessible to everyone.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Simi Fasehun',
      role: 'Executive Vice Chairman (EVC)',
      experience: '20+ years in healthcare administration',
      description: 'Former VP of Operations at major health systems, passionate about accessible healthcare.',
    },
    {
      name: 'Dr. Busola Fasehun',
      role: 'Managing Director (MD)',
      experience: '25+ years in family medicine',
      description: 'Board-certified physician with extensive experience in preventive care and population health.',
    },
    {
      name: 'Mr. Segun',
      role: 'Administrations Officer',
      experience: '15+ years in healthcare operations',
      description: 'Expert in healthcare technology and member experience optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>About Sterling Health - Our Mission, Vision & Leadership</title>
      <meta name="description" content="Learn about Sterling Health's mission to provide accessible, quality healthcare. Meet our leadership team and discover our commitment to community health." />
      
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 fade-in-up">
              About Sterling Health
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 fade-in-up">
              For over a decades, Sterling Health has been a trusted partner in healthcare, 
              dedicated to making quality medical care accessible, affordable, and convenient for families across Nigeria.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">2013</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">250,000+</div>
                <div className="text-muted-foreground">Members Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Member Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="card-medical">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are committed to being the leading HMO of choice,
                with tailor mode equitable, comprehensive and qualitative
                healthcare risk solutions, supported by our health provides
                to the delight of our clients and others stakeholders through
                excellent process and administrative services with a healthy
                dose of innovation. 
              </p>
            </Card>

            <Card className="card-medical">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading Health Maintenance
                Organization in terms of customer
                Satisfaction, Enrollment, Product
                Innovation and Financial
                Performance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-feature group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of healthcare expertise and a shared commitment 
              to improving health outcomes for our members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-medical text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{leader.name}</h3>
                <p className="text-primary font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{leader.experience}</p>
                <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              Join Our Healthcare Community
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Experience the difference that compassionate, comprehensive healthcare can make in your life.
            </p>
            <Button className="btn-hero bg-white text-primary hover:bg-white/90 focus-medical">
              <Heart className="w-5 h-5 mr-2" />
              Become a Member
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;