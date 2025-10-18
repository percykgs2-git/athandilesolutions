import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import client1 from "@/assets/clients/client-1.jpg";
import client2 from "@/assets/clients/client-2.jpg";
import client3 from "@/assets/clients/client-3.jpg";

const Clients = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "TechConsult transformed our digital presence completely. Their expertise in web development and attention to detail exceeded our expectations. Highly recommended!",
    },
    {
      name: "Michael Chen",
      company: "Global Solutions Ltd",
      role: "CTO",
      content: "Working with TechConsult was a game-changer for our business. They delivered a robust solution on time and within budget. Their team is professional and highly skilled.",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency Co",
      role: "Marketing Director",
      content: "The SEO and social media marketing services from TechConsult helped us increase our online visibility by 300%. Their strategic approach is remarkable.",
    },
    {
      name: "David Park",
      company: "Finance Pro",
      role: "Managing Director",
      content: "Security and reliability were our top priorities, and TechConsult delivered perfectly. Their cybersecurity solutions gave us complete peace of mind.",
    },
    {
      name: "Lisa Anderson",
      company: "Retail Innovations",
      role: "Founder",
      content: "From concept to launch, TechConsult guided us through every step. Their e-commerce platform development was flawless and our sales have doubled.",
    },
    {
      name: "James Wilson",
      company: "Health Plus",
      role: "Operations Manager",
      content: "The custom software solution developed by TechConsult streamlined our operations significantly. Their support team is always responsive and helpful.",
    },
  ];

  const clientLogos = [
    "TechStart Inc.",
    "Global Solutions",
    "Creative Agency",
    "Finance Pro",
    "Retail Innovations",
    "Health Plus",
    "Digital Ventures",
    "Smart Systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Clients</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto animate-fade-in">
            Trusted by leading companies worldwide
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            {[client1, client2, client3, client1, client2, client3].map((clientImg, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img src={clientImg} alt={`Client ${index + 1}`} className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
