import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAward, faUsers, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us",
  description: "Peak Roofing has been serving our community with quality roofing craftsmanship since 2005. Meet our team and learn about our values.",
};

const team = [
  { name: "James Carter", role: "Founder & CEO", image: "/images/about/team-1.svg", bio: "30+ years in roofing. Started Peak Roofing to bring honest, quality craftsmanship to every home." },
  { name: "Maria Santos", role: "Operations Manager", image: "/images/about/team-2.svg", bio: "Ensures every project runs smoothly from estimate to final inspection." },
  { name: "David Kim", role: "Lead Roofer", image: "/images/about/team-3.svg", bio: "Master roofer with 15 years of experience across all roofing systems." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">About Us</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Protecting Homes Since 2005
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Peak Roofing was founded on a simple principle: every family deserves a safe,
              dry home. For nearly two decades, we&apos;ve been the trusted name in roofing
              for homeowners and businesses across the region.
            </p>
          </div>

          <img
            src="/images/about/about-hero.svg"
            alt="Peak Roofing team"
            className="w-full rounded-xl mb-12"
          />

          {/* Values */}
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {[
              { icon: faAward, title: "Quality First", desc: "We never cut corners. Every roof is built to last with premium materials and proven techniques." },
              { icon: faUsers, title: "Customer Focused", desc: "Clear communication, honest pricing, and respect for your property — always." },
              { icon: faBullseye, title: "Community Rooted", desc: "We live and work here. Supporting our community is part of who we are." },
            ].map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Team</Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Meet the People Behind Peak Roofing
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-sm"
                />
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-xs text-primary font-medium mb-2">{m.role}</p>
                <p className="text-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Work Together?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Get in touch for a free estimate. We&apos;d love to discuss your roofing project.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">
                <FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
