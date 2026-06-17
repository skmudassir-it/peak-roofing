"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWrench,
  faUsers,
  faFolderOpen,
  faEnvelope,
  faQuestionCircle,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home", icon: faHouse },
  { href: "/services", label: "Services", icon: faWrench },
  { href: "/projects", label: "Projects", icon: faFolderOpen },
  { href: "/about", label: "About", icon: faUsers },
  { href: "/faq", label: "FAQ", icon: faQuestionCircle },
  { href: "/contact", label: "Contact", icon: faEnvelope },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/images/logo.svg" alt="Peak Roofing" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="size-3.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA + menu */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button size="sm">Free Estimate</Button>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <FontAwesomeIcon icon={link.icon} className="size-4" />
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link href="/contact" onClick={() => setOpen(false)} className="mt-3">
                    <Button className="w-full">Free Estimate</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
