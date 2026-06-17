import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Complete roofing solutions — residential, commercial, repairs, replacements, emergency services, and gutter systems.",
};

const services = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    desc: "Expert installation and maintenance for your home. Asphalt shingles, metal roofing, clay tiles, and slate — we work with all materials to match your home's style and budget.",
    image: "/images/services/residential-roofing.jpg",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    desc: "Durable flat and low-slope roofing systems for businesses, warehouses, and office buildings. TPO, EPDM, PVC, and built-up roofing solutions.",
    image: "/images/services/commercial-roofing.jpg",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    desc: "Fast, reliable leak detection and repair. From missing shingles to storm damage, we diagnose and fix issues before they become costly problems.",
    image: "/images/services/roof-repair.jpg",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    desc: "Complete roof tear-off and replacement using premium materials. We handle permits, disposal, and installation with minimal disruption to your daily life.",
    image: "/images/services/roof-replacement.jpg",
  },
  {
    slug: "emergency-services",
    title: "Emergency Services",
    desc: "24/7 emergency response for storm damage, fallen trees, and sudden leaks. Our rapid-response team is always on call to protect your property.",
    image: "/images/services/emergency-services.jpg",
  },
  {
    slug: "gutter-services",
    title: "Gutter Services",
    desc: "Seamless gutter installation, cleaning, and repair. Protect your foundation and landscaping with a properly functioning drainage system.",
    image: "/images/services/gutter-services.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-3">Our Services</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Complete Roofing Solutions
            </h1>
            <p className="mt-3 text-muted-foreground">
              From minor repairs to full replacements, we deliver quality workmanship on every project.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Card className="glass-card overflow-hidden transition-shadow hover:shadow-lg h-full">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-44 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Learn more
                      <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Not sure what you need?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Schedule a free consultation and our experts will assess your roof and recommend the best solution.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">Get Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
