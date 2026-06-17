import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/images/logo.svg" alt="Peak Roofing" className="h-8 w-auto mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional roofing services you can trust. Serving our community with quality craftsmanship since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Our Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { slug: "residential-roofing", label: "Residential Roofing" },
                { slug: "commercial-roofing", label: "Commercial Roofing" },
                { slug: "roof-repair", label: "Roof Repair" },
                { slug: "roof-replacement", label: "Roof Replacement" },
                { slug: "emergency-services", label: "Emergency Services" },
                { slug: "gutter-services", label: "Gutter Services" },
              ].map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact Us</h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 text-primary" />
                (555) 123-4567
              </span>
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 text-primary" />
                info@peakroofing.com
              </span>
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-3.5 text-primary" />
                123 Summit Ave, Portland, OR
              </span>
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="size-3.5 text-primary" />
                Mon-Fri: 7AM-6PM
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Peak Roofing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
