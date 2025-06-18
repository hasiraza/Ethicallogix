import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const About = () => {
  const [imageErrors, setImageErrors] = useState({});
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About EthicalLogix
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're pioneering the future of responsible AI, where innovation meets ethics 
              to create solutions that benefit everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize ethical AI by making responsible artificial intelligence accessible, 
                understandable, and beneficial for organizations of all sizes. We believe that AI should 
                augment human capabilities while respecting human values, privacy, and dignity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every solution we create is built on the foundation of transparency, fairness, and 
                accountability, ensuring that AI serves humanity's best interests.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where AI systems are trusted, transparent, and beneficial for all stakeholders. 
                We envision organizations confidently leveraging AI to solve complex problems while 
                maintaining the highest ethical standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our work, we aim to set new industry standards for responsible AI development 
                and deployment, leading by example in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in open, explainable AI systems that users can understand and trust.",
                icon: "🔍"
              },
              {
                title: "Fairness",
                description: "Our AI solutions are designed to be unbiased and equitable for all users and stakeholders.",
                icon: "⚖️"
              },
              {
                title: "Accountability",
                description: "We take responsibility for the outcomes of our AI systems and their impact on society.",
                icon: "🎯"
              },
              {
                title: "Privacy",
                description: "Data protection and user privacy are fundamental to every solution we develop.",
                icon: "🔒"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, ethics, 
              and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Muhammad Haseeb Raza",
                role: "CEO & Founder",
                bio: "Former AI Ethics researcher at Stanford with 3+ years in responsible AI development.",
                image: "images/haseeb.webp "// Add your actual image path
              },
              {
                name: "Umer Aslam",
                role: "CTO & Co-Founder",
                bio: "Ex-Google AI engineer specializing in scalable machine learning systems and governance.",
                image: "images/6.jpg" // Add your actual image path
              },
              {
                name: "Dr. Aisha Patel",
                role: "Chief Ethics Officer",
                bio: "Leading expert in AI bias detection and mitigation with a PhD in Computer Ethics.",
                image: "/images/team/aisha-patel.jpg" // Add your actual image path
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                  {!imageErrors[index] ? (
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => {
                        setImageErrors(prev => ({...prev, [index]: true}));
                      }}
                    />
                  ) : (
                    // Fallback initials circle
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-800">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;