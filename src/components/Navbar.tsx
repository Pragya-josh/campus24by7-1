"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";
import { Menu, X, ChevronDown, Book, Info, MessageCircle, HelpCircle, Shield, CreditCard, Layout, Building2, GraduationCap, Sparkles, Search } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { APP_CONFIG } from "@/config/app.config";
import { Logo } from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { user, logout, token } = useAuth();

  const handleNavClick = () => {
    setIsOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileExpanded = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105 active:scale-95">
            <Logo size="lg" showText={true} textClassName="hidden sm:inline font-bold tracking-tight text-2xl" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              link.children ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary transition-all outline-none group px-3 py-2 rounded-xl hover:bg-muted/50">
                    {link.name}
                    <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-transform opacity-50" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className={cn(
                      "p-2 rounded-2xl shadow-card border-border/50 bg-background/95 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200",
                      link.name === "Company" ? "w-44" : "w-72"
                    )}
                  >
                    {link.children.map((child: any) => {
                      const Icon = child.name.includes("School") ? Building2 :
                        child.name.includes("College") ? GraduationCap :
                          child.name.includes("Institute") ? Layout :
                            child.name.includes("About") ? Info :
                              child.name.includes("Stories") ? Sparkles :
                                child.name.includes("FAQ") ? HelpCircle :
                                  child.name.includes("Contact") ? MessageCircle :
                                    child.name.includes("Features") ? Sparkles :
                                      child.name.includes("Explore") ? Search : Book;

                      return (
                        <DropdownMenuItem key={child.name} asChild className="rounded-xl focus:bg-primary/5 cursor-pointer">
                          <Link href={child.href} className="flex items-center gap-3 p-2.5 group/item">
                            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-bold text-sm text-foreground truncate">{child.name}</span>
                              {(child as any).description && (
                                <span className="text-[10px] leading-tight text-muted-foreground opacity-70 truncate">{(child as any).description}</span>
                              )}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {token ? (
              <>
                <Button
                  variant="ghost"
                  className="font-bold text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link href={user?.role === 'ADMIN' ? '/admin/leads' : '/profile/requests'}>Dashboard</Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full px-6 font-bold"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="font-bold text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link href="/login">Support Login</Link>
                </Button>
                <Button
                  variant="hero"
                  className="rounded-full px-8 shadow-soft hover:shadow-glow premium-shine"
                  onClick={() =>
                    window.open(APP_CONFIG.links.bookSlot, "_blank")
                  }
                >
                  Try for Free
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-2xl bg-muted/50 text-foreground transition-all hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-8 border-t border-border/50 animate-fade-up bg-background/95 backdrop-blur-2xl rounded-b-[2rem] shadow-card max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2 px-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileExpanded(link.name)}
                        className="flex items-center justify-between text-2xl font-bold py-3 text-foreground"
                      >
                        {link.name}
                        <ChevronDown className={cn("w-6 h-6 transition-transform", mobileExpanded === link.name && "rotate-180")} />
                      </button>
                      {mobileExpanded === link.name && (
                        <div className="flex flex-col gap-4 pl-4 pt-2 pb-4 border-l-2 border-primary/20 animate-in slide-in-from-left-2">
                          {link.children.map((child: any) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-lg font-medium text-muted-foreground hover:text-primary"
                              onClick={handleNavClick}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      className="text-2xl font-bold py-3 text-foreground hover:text-primary transition-colors"
                      onClick={handleNavClick}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 pt-8 mt-4 border-t border-border/50">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full rounded-2xl font-bold ring-offset-background premium-shine"
                  onClick={() => {
                    handleNavClick();
                    window.open(APP_CONFIG.links.bookSlot, "_blank");
                  }}
                >
                  Book a Demo
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
