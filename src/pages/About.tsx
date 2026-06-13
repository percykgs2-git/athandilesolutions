import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/hero-section/person-laptop.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto animate-fade-in">
            Pioneering digital transformation for businesses worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Athandile Solutions is a leading technology consulting firm
                specializing in delivering innovative digital solutions. With
                over a decade of experience, we've helped hundreds of businesses
                transform their operations through cutting-edge technology.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our team of expert developers, designers, and strategists work
                collaboratively to understand your unique challenges and create
                tailored solutions that drive real business results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building long-term partnerships with our clients,
                providing ongoing support and innovation to ensure sustained
                growth and success.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Our team at work"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Client-Focused</h3>
              <p className="text-muted-foreground text-sm">
                Your success is our priority
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Goal-Oriented</h3>
              <p className="text-muted-foreground text-sm">
                Delivering measurable results
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                Excellence in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Staying ahead of the curve
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-muted/30 rounded-lg p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
