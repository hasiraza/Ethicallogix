
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Industries", 
      content: "EthicalLogix transformed our AI strategy. Their ethical approach doesn't compromise on performance - we've seen 40% improvement in model accuracy while ensuring complete compliance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Data Science",
      company: "FinanceCore",
      content: "The transparency and explainability of their AI models gave us the confidence to deploy at scale. Outstanding work on bias detection and mitigation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      position: "Director of AI Ethics",
      company: "HealthTech Solutions",
      content: "Their governance framework helped us navigate complex regulatory requirements. The team's expertise in ethical AI is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M20 20L0 0h40z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped organizations implement ethical AI solutions that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">Join 150+ companies that trust EthicalLogix for their AI solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['TechFlow', 'FinanceCore', 'HealthTech', 'DataCorp', 'AIVentures'].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xs">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
