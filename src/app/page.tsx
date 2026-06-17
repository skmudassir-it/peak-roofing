import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faStar,
  faArrowRight,
  faCheckCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    desc: "Expert installation and maintenance for your home. Asphalt shingles, metal, tile, and more.",
    image: "/images/services/residential-roofing.jpg",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    desc: "Durable flat and low-slope roofing systems for businesses, warehouses, and offices.",
    image: "/images/services/commercial-roofing.jpg",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    desc: "Fast, reliable leak detection and repair. Stop damage before it spreads.",
    image: "/images/services/roof-repair.jpg",
  },
];

const testimonials = [
  { name: "Sarah M.", text: "Peak Roofing replaced our entire roof in 3 days. Professional crew, clean worksite, and fair pricing. Highly recommend!", rating: 5 },
  { name: "Robert K.", text: "Called for an emergency leak at 8pm. They were at my door by 9pm and had it sealed within the hour. Incredible service.", rating: 5 },
  { name: "Linda T.", text: "Our commercial building needed a full reroof. Peak handled everything — permits, materials, and cleanup. Zero disruption to our business.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 text-xs">
              Serving Since 2005
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Your Roof,{" "}
              <span className="text-primary">Our Promise</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              From minor repairs to complete replacements, Peak Roofing delivers
              quality craftsmanship with honest pricing. Licensed, insured, and
              trusted by hundreds of homeowners and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />
                  Free Estimate
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Our Services
                  <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              {["Licensed & Insured", "Free Estimates", "5-Year Warranty"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-3">Our Services</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Complete Roofing Solutions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whatever your roofing needs, we have the expertise and equipment to get it done right.
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
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 sm:py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built on Trust, Proven by Results
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: faShieldHalved, title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your peace of mind." },
              { icon: faStar, title: "5-Star Rated", desc: "Consistently rated 5 stars by our satisfied customers." },
              { icon: faCheckCircle, title: "5-Year Warranty", desc: "Every installation backed by our comprehensive warranty." },
              { icon: faPhone, title: "24/7 Emergency", desc: "Round-the-clock emergency response when you need it most." },
            ].map((item) => (
              <Card key={item.title} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <FontAwesomeIcon icon={item.icon} className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-3">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="size-4 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-sm font-semibold">&mdash; {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Protect Your Home?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Get a free, no-obligation estimate. Our experts are standing by to help.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">
                <FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />
                Get Your Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
