"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { APP_CONFIG } from "@/config/app.config";
import { Logo } from "@/components/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo size="md" showText={true} textClassName="hidden sm:inline" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() =>
                window.open(APP_CONFIG.links.contactWhatsApp, "_blank")
              }
            >
              Contact Sales
            </Button>
            <Button
              variant="hero"
              onClick={() =>
                window.open(APP_CONFIG.links.bookSlot, "_blank")
              }
            >
              Book a Demo
            </Button>
            <Button
              variant="hero"
              onClick={() =>
                window.open(APP_CONFIG.links.login, "_blank")
              }
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    handleNavClick();
                    window.open(APP_CONFIG.links.contactWhatsApp, "_blank");
                  }}
                >
                  Contact Sales
                </Button>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    handleNavClick();
                    window.open(APP_CONFIG.links.bookSlot, "_blank");
                  }}
                >
                  Book a Demo
                </Button>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => {
                    handleNavClick();
                    window.open(APP_CONFIG.links.login, "_blank");
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
