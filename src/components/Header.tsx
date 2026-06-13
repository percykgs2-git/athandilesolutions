import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/careers", label: "Careers" },
    { path: "/clients", label: "Clients" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex flex-col gap-1 min-[670px]:flex-row min-[670px]:gap-4">
            <a
              href="mailto:info@athandilesolutions.com"
              className="hover:opacity-80 transition-opacity"
            >
              info@athandilesolutions.com
            </a>
            <span>+27 72 615 3036</span>
          </div>
        </div>
      </div>

      <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">
                <img
                  src="/src/assets/logo.png"
                  alt="Logo"
                  className="h-11 w-auto"
                />
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button>Get Started</Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4">Get Started</Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
