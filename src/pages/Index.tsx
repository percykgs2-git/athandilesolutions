import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Code, Globe, Search, Share2, Palette, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design & Corporate Identity",
      description: "Decades of design experience mean that whatever your branding requirements, we have the expertise to deliver creative and practical solutions that work.",
    },
    {
      icon: Globe,
      title: "Website Development & Design",
      description: "Get 100% professional web development services from the best digital agency. Our developments not only attract visitors, but guide them to desired results.",
    },
    {
      icon: Headphones,
      title: "ICT Solutions",
      description: "We've developed a unique methodology to manage and optimize technology infrastructure, ensuring seamless business operations.",
    },
    {
      icon: Code,
      title: "IT Consulting",
      description: "Whether a simple app or comprehensive automation system, we deliver UX-optimised mobile and web-based applications that fit your requirements.",
    },
    {
      icon: Search,
      title: "SEO",
      description: "The benefits that SEO generates for companies are immense. It helps your company reach the next level and compete with bigger enterprises.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media marketing that amplifies your brand presence and engages your target audience across all major platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            See IT with US
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95 animate-fade-in">
            Athandile Solutions is a pioneer in providing end-to-end web solutions and digital presence for businesses worldwide.
          </p>
          <Link to="/about">
            <Button size="lg" variant="secondary" className="animate-fade-in">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital goals
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
