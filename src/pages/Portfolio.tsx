import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/portfolio/project-1.jpg";
import project2 from "@/assets/portfolio/project-2.jpg";
import project3 from "@/assets/portfolio/project-3.jpg";
import project4 from "@/assets/portfolio/project-4.jpg";
import project5 from "@/assets/portfolio/project-5.jpg";
import project6 from "@/assets/portfolio/project-6.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive online shopping platform with advanced features and seamless checkout experience.",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: project1,
    },
    {
      title: "Corporate Website Redesign",
      category: "Design & Development",
      description: "Complete redesign and development of a corporate website with modern UI/UX principles.",
      tags: ["Next.js", "Tailwind CSS", "CMS"],
      image: project2,
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and user-friendly mobile banking application for iOS and Android platforms.",
      tags: ["React Native", "Security", "API"],
      image: project3,
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard for a SaaS platform with real-time data visualization and reporting.",
      tags: ["TypeScript", "Charts", "Real-time"],
      image: project4,
    },
    {
      title: "Restaurant Management System",
      category: "Custom Software",
      description: "Complete management solution for restaurant operations including POS and inventory.",
      tags: ["Full Stack", "Cloud", "Integration"],
      image: project5,
    },
    {
      title: "Healthcare Portal",
      category: "Web Development",
      description: "Patient management portal with appointment scheduling and medical records management.",
      tags: ["HIPAA Compliant", "Security", "Database"],
      image: project6,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Portfolio</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto animate-fade-in">
            Showcasing our successful projects and client collaborations
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-semibold text-primary">{project.category}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-muted text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Let's work together to bring your vision to life
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
