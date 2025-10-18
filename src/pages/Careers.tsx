import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced full stack developer to join our growing team and work on exciting client projects.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our creative team to design beautiful and intuitive user experiences for web and mobile applications.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Help us build and maintain scalable infrastructure for our client applications and internal systems.",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "On-site",
      type: "Full-time",
      description: "Lead and coordinate multiple client projects ensuring timely delivery and excellent client satisfaction.",
    },
  ];

  const benefits = [
    "Competitive salary and benefits package",
    "Flexible working hours",
    "Remote work options",
    "Professional development opportunities",
    "Health insurance coverage",
    "Annual team retreats",
    "Latest technology and tools",
    "Collaborative work environment",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Join Our Team</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto animate-fade-in">
            Build your career with a dynamic team of passionate professionals
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where talented individuals can thrive and grow their careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-muted/30 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              Explore our current job openings and find the perfect role for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
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

export default Careers;
