
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const blogPosts = [
    {
      title: "The Future of Ethical AI: Trends to Watch in 2024",
      excerpt: "Explore the latest developments in responsible AI and what they mean for your business.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Industry Insights"
    },
    {
      title: "Building Bias-Free Machine Learning Models",
      excerpt: "A comprehensive guide to detecting and mitigating bias in AI systems.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Technical Guide"
    },
    {
      title: "GDPR Compliance for AI Systems: What You Need to Know",
      excerpt: "Navigate the complex landscape of AI regulation and data protection.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Compliance"
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare AI: Improving Patient Outcomes While Protecting Privacy",
      description: "How we helped a major hospital system implement AI-powered diagnosis assistance while maintaining HIPAA compliance.",
      industry: "Healthcare",
      impact: "40% faster diagnosis, 99.9% privacy compliance"
    },
    {
      title: "Financial Services: Ethical Credit Scoring System",
      description: "Developing a transparent, bias-free credit scoring model for a leading financial institution.",
      industry: "Financial Services",
      impact: "15% reduction in bias, improved transparency"
    },
    {
      title: "Retail AI: Fair Recommendation Engine",
      description: "Creating personalized recommendations that avoid discrimination and promote diverse product discovery.",
      industry: "Retail",
      impact: "25% increase in customer satisfaction, verified fairness"
    }
  ];

  const whitepapers = [
    {
      title: "The Ethical AI Framework: A Practical Guide",
      description: "Comprehensive framework for implementing ethical AI practices in your organization.",
      pages: "24 pages",
      type: "Framework Guide"
    },
    {
      title: "AI Bias Detection and Mitigation Strategies",
      description: "Technical approaches to identifying and addressing bias in machine learning systems.",
      pages: "18 pages",
      type: "Technical Report"
    },
    {
      title: "ROI of Ethical AI: Business Benefits of Responsible Implementation",
      description: "Quantifying the business value of ethical AI practices and responsible development.",
      pages: "16 pages",
      type: "Business Report"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest trends, best practices, and insights 
              in ethical AI and responsible data science.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights on ethical AI, industry trends, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real-world examples of ethical AI implementations and their impact.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {study.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                      <p className="text-sm text-gray-600">{study.impact}</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Whitepapers & Guides
            </h2>
            <p className="text-xl text-gray-600">
              In-depth resources to help you implement ethical AI in your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {paper.type}
                    </span>
                    <span className="text-sm text-gray-500">{paper.pages}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                    {paper.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {paper.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights on ethical AI, 
              industry trends, and best practices.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
