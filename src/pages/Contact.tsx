import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, CheckCircle, Star, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    service: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<null | 'sending' | 'success' | 'error'>(null);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    
    try {
      const formPayload = new FormData();
      formPayload.append("firstName", formData.firstName);
      formPayload.append("lastName", formData.lastName);
      formPayload.append("email", formData.email);
      formPayload.append("company", formData.company);
      formPayload.append("role", formData.role);
      formPayload.append("service", formData.service);
      formPayload.append("message", formData.message);
      formPayload.append("access_key", "165fd631-2a7b-4184-9623-f9a520ff3339"); // Replace with your actual key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus('success');
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your interest. Our team will be in touch within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          role: '',
          service: '',
          message: ''
        });
      } else {
        setSubmissionStatus('error');
        toast({
          title: "Error",
          description: "There was an error submitting your form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setSubmissionStatus('error');
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Projects Completed", value: "1,200+" },
    { icon: Star, label: "Client Satisfaction", value: "99%" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@ethicallogix.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 hours",
      description: "Average response time"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-lg text-blue-700 rounded-full text-sm font-semibold shadow-lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              Ready to Transform Your Business?
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Ethical Together
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business with responsible AI solutions. Our expert team is ready to discuss your project and help you achieve your goals.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-2xl bg-white/80 backdrop-blur-lg">
                <CardHeader className="px-0 pt-0 pb-8">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Start Your Project Today
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    Fill out the form below and our team will get back to you within 24 hours with a personalized consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-sm font-semibold text-gray-700">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="role" className="text-sm font-semibold text-gray-700">Your Role</Label>
                        <Select onValueChange={(value) => handleInputChange('role', value)}>
                          <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/Executive</SelectItem>
                            <SelectItem value="cto">CTO/Technical Lead</SelectItem>
                            <SelectItem value="data-scientist">Data Scientist</SelectItem>
                            <SelectItem value="product-manager">Product Manager</SelectItem>
                            <SelectItem value="consultant">Consultant</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700">Service of Interest</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="data-analytics">Data Analytics</SelectItem>
                          <SelectItem value="ai-ml-development">AI/ML Development</SelectItem>
                          <SelectItem value="ethical-consulting">Ethical AI Consulting</SelectItem>
                          <SelectItem value="data-governance">Data Governance</SelectItem>
                          <SelectItem value="custom-solution">Custom Solution</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Project Description</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="min-h-[140px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200"
                      disabled={submissionStatus === 'sending'}
                    >
                      {submissionStatus === 'sending' ? 'Sending...' : 'Send Message & Get Free Consultation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-lg">
                    <CardContent className="px-0 pb-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-lg font-medium text-blue-600 mb-1">{info.content}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Quick Actions */}
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-4">
                  <Button variant="outline" className="w-full justify-start h-12 border-blue-200 hover:bg-blue-50">
                    📅 Schedule a Free Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 border-blue-200 hover:bg-blue-50">
                    📊 Download AI Ethics Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 border-blue-200 hover:bg-blue-50">
                    📚 Access Resource Library
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Badge */}
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="px-0 pb-0">
                  <div className="text-center space-y-3">
                    <div className="text-3xl">🔒</div>
                    <h4 className="font-semibold text-gray-900">Trusted & Secure</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Your data is protected with enterprise-grade security. We're GDPR compliant and ISO 27001 certified.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>24hr response guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Got Questions?
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                We Have Answers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services, process, and approach to ethical AI development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical AI project take?",
                answer: "Project timelines vary based on complexity, but most projects range from 3-9 months from initial consultation to deployment. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you work with startups or only large enterprises?",
                answer: "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. Our solutions are tailored to your specific needs, budget, and growth stage."
              },
              {
                question: "What makes your AI solutions 'ethical'?",
                answer: "Our solutions prioritize transparency, fairness, accountability, and privacy. We conduct regular bias audits, maintain clear documentation of all decision-making processes, and ensure compliance with global AI ethics standards."
              },
              {
                question: "Can you help with regulatory compliance?",
                answer: "Absolutely! We specialize in ensuring AI systems comply with GDPR, CCPA, HIPAA, and emerging AI regulations like the EU AI Act. Compliance is built into our development process from day one."
              },
              {
                question: "What's included in your consultation?",
                answer: "Our free consultation includes a comprehensive assessment of your current data infrastructure, identification of AI opportunities, risk analysis, and a customized roadmap for implementation."
              },
              {
                question: "Do you provide ongoing support after deployment?",
                answer: "Yes! We offer comprehensive post-deployment support including monitoring, maintenance, updates, and continuous optimization to ensure your AI systems perform at their best."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="px-0 pb-0">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;