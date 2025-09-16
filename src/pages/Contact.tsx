import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Shield,
  Heart,
  Users
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: '24/7 Member Support',
      info: '(555) 123-4567',
      description: 'Speak directly with our customer service team',
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'General Inquiries',
      info: 'info@sterlinghealth.com',
      description: 'Send us a message and we\'ll respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      subtitle: 'Main Office',
      info: '99 Valley View Plaza, Opebi Road, Ikeja Lagos',
      description: 'Drop by our office during business hours',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      subtitle: 'Instant Support',
      info: 'Available 9 AM - 6 PM',
      description: 'Chat with our support team in real-time',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Contact Sterling Health - Get in Touch with Our Team</title>
      <meta name="description" content="Contact Sterling Health for questions about our HMO plans, member services, or healthcare needs. Multiple ways to reach us including phone, email, and live chat." />
      
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 fade-in-up">
              Contact Sterling Health
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 fade-in-up">
              We're here to help with all your healthcare questions and needs. 
              Reach out to us through any of the convenient methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-feature group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{method.subtitle}</p>
                <p className="text-foreground font-medium mb-3">{method.info}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              
              <Card className="card-medical">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="focus-medical"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="focus-medical"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="focus-medical"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="focus-medical">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enrollment">Plan Enrollment</SelectItem>
                        <SelectItem value="billing">Billing Questions</SelectItem>
                        <SelectItem value="claims">Claims Support</SelectItem>
                        <SelectItem value="provider">Provider Network</SelectItem>
                        <SelectItem value="benefits">Benefits Information</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                      className="focus-medical"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-hero focus-medical">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our dedicated team is ready to assist you with any questions about our healthcare plans, 
                  benefits, or services. We're committed to providing exceptional customer support.
                </p>
              </div>

              {/* Office Hours */}
              <Card className="card-medical">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}:</span>
                      <span className="text-foreground font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Emergency support available 24/7 for current members
                  </p>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start h-auto p-4 focus-medical">
                    <Shield className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Find a Provider</div>
                      <div className="text-sm text-muted-foreground">Search our network directory</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4 focus-medical">
                    <Heart className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">View Benefits</div>
                      <div className="text-sm text-muted-foreground">Explore our health plans</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4 focus-medical">
                    <Users className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Member Portal</div>
                      <div className="text-sm text-muted-foreground">Access your account</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Sterling City's medical district
            </p>
          </div>
          
          <Card className="card-medical">
            <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">123 Healthcare Plaza</p>
                <p className="text-muted-foreground">Sterling City, SC 12345</p>
                <Button className="btn-secondary mt-4 focus-medical">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;