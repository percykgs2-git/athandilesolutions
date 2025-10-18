import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Code, Globe, Search, Share2, Palette, Headphones, Smartphone, Database, Shield, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "IT Consulting",
      description: "Whether it be a simple document sharing app or a comprehensive automation system, we work to deliver UX-optimised mobile and web-based applications that fit your requirement to a tee.",
    },
    {
      icon: Globe,
      title: "Web Development & Design",
      description: "Get 100% professional web development services from the best digital agency in town. Our Web Developments not only attract right visitors, but properly guide them leading to desired results.",
    },
    {
      icon: Palette,
      title: "Brand Design & Corporate Identity",
      description: "Decades of design experience mean that whatever your branding requirements, we have the expertise to deliver creative and practical solutions that work for you and your business.",
    },
    {
      icon: Search,
      title: "SEO",
      description: "The benefits that SEO will be able to generate for a company have been found to be immense. In fact, it can really help your company to reach the next level and compete with bigger enterprises.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media marketing campaigns designed to amplify your brand presence and engage your target audience across all major platforms with data-driven results.",
    },
    {
      icon: Headphones,
      title: "ICT Solutions",
      description: "We've developed a unique methodology to manage and optimize your technology infrastructure, ensuring seamless business operations and maximizing efficiency.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create stunning native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth on iOS and Android.",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions. Make informed decisions based on comprehensive data analysis and visualization.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions. From vulnerability assessments to complete security implementations.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate and manage your infrastructure in the cloud with confidence. We provide end-to-end cloud solutions that scale with your business needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Services</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto animate-fade-in">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss how we can create a tailored solution for your specific needs.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
