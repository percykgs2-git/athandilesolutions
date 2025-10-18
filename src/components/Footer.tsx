import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TechConsult</h3>
            <p className="text-sm opacity-90 mb-4">
              Providing end-to-end technology solutions and digital presence for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">Services</Link></li>
              <li><Link to="/portfolio" className="hover:opacity-80 transition-opacity">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">IT Consulting</Link></li>
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">Web Development</Link></li>
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">SEO Services</Link></li>
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">Brand Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 555 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@techconsult.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} TechConsult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
