import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Code, Globe, Search, Share2, Palette, Headphones, Smartphone, Database, Shield, Cloud, House, Sprout } from "lucide-react";
import itConsultingImg from "@/assets/services/it-consulting.jpg";
import brandDesignImg from "@/assets/services/brand-design.jpg";
import webDevImg from "@/assets/services/web-development.jpg";
import seoImg from "@/assets/services/seo.jpg";
import socialMediaImg from "@/assets/services/social-media.jpg";
import photographyImg from "@/assets/services/photography.jpg";

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
    {
      icon: House,
      title: "Hosting Solutions",
      description: "Secure, high-performance hosting built for reliability and speed. We ensure your applications stay online, fast, and scalable—so you can focus on growing your business.",
    },
    {
      icon: Sprout,
      title: "Business Growth Through Leveraging IT",
      description: "Empowering your business to grow and thrive in a digital-first world. We provide the tools and strategies you need to succeed.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/hero-section/devices.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto animate-fade-in">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </div>
      </section>

      {/* Featured Services with Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { img: itConsultingImg, title: "IT Consulting", desc: "A company's website is often the first branded touchpoint experienced by consumers, which means its design and usability has never been more important." },
              { img: brandDesignImg, title: "Brand Design", desc: "A successful brand or corporate identity will have a clear vision and be designed to speak a certain visual language, persuading and creating influence in market." },
              { img: webDevImg, title: "Website Development", desc: "A company's website is often the first branded touchpoint experienced by consumers, which means its design and usability has never been more important." },
              { img: seoImg, title: "SEO", desc: "Attention to your website's Search Engine Optimisation (SEO) ensures that potential clients will quickly and easily find you online." },
              { img: socialMediaImg, title: "Social Media Marketing", desc: "The ubiquitous nature of social media means that companies need to acknowledge the significant role it plays for brand conversations had by many consumers online." },
              { img: photographyImg, title: "Photography", desc: "Photographing company assets and operations plays an important role in corporate and stakeholder communication. It also requires considerable planning and logistic skills." },
            ].map((item, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.desc}</p>
                <a href="/services" className="text-primary font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Our Services</h2>
          </div>
          
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
