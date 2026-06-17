import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faShieldHalved, faClock, faFileContract } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ServiceData {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { icon: typeof faCheckCircle; text: string }[];
}

const services: Record<string, ServiceData> = {
  "residential-roofing": {
    title: "Residential Roofing",
    description: "Your home deserves the best protection. We specialize in residential roofing installation, repair, and maintenance using top-quality materials including asphalt shingles, metal roofing, clay tiles, and slate. Every project is completed with meticulous attention to detail and respect for your property.",
    image: "/images/services/residential-roofing.svg",
    features: [
      "Asphalt shingle installation and replacement",
      "Metal roofing — standing seam, corrugated, and stone-coated steel",
      "Clay and concrete tile roofing",
      "Slate roofing for historic homes",
      "Attic ventilation and insulation assessment",
      "Ice and water shield installation",
    ],
    benefits: [
      { icon: faShieldHalved, text: "30-year manufacturer warranty on all premium materials" },
      { icon: faClock, text: "Most residential jobs completed in 2-5 days" },
      { icon: faFileContract, text: "Free detailed estimate with no hidden costs" },
    ],
  },
  "commercial-roofing": {
    title: "Commercial Roofing",
    description: "We provide comprehensive commercial roofing solutions for businesses of all sizes. From retail storefronts to industrial warehouses, our team has the expertise to handle complex commercial roofing systems including TPO, EPDM, PVC, and built-up roofing.",
    image: "/images/services/commercial-roofing.svg",
    features: [
      "TPO (Thermoplastic Polyolefin) roofing systems",
      "EPDM (Ethylene Propylene Diene Monomer) rubber roofing",
      "PVC roofing for chemical-resistant applications",
      "Built-up roofing (BUR) for flat and low-slope roofs",
      "Commercial roof maintenance programs",
      "Roof coating and restoration",
    ],
    benefits: [
      { icon: faShieldHalved, text: "Energy-efficient cool roof options to reduce HVAC costs" },
      { icon: faClock, text: "Minimal business disruption — after-hours and weekend work available" },
      { icon: faFileContract, text: "Annual maintenance plans for long-term protection" },
    ],
  },
  "roof-repair": {
    title: "Roof Repair",
    description: "Don't let a small leak become a big problem. Our repair specialists quickly diagnose and fix roofing issues of all types. From missing shingles to storm damage, we provide fast, reliable repairs that extend the life of your roof.",
    image: "/images/services/roof-repair.svg",
    features: [
      "Leak detection and repair",
      "Missing or damaged shingle replacement",
      "Flashing repair and replacement",
      "Storm and hail damage repair",
      "Vent pipe boot replacement",
      "Chimney flashing and sealing",
    ],
    benefits: [
      { icon: faShieldHalved, text: "Same-day service for urgent repairs" },
      { icon: faClock, text: "Most repairs completed in under 4 hours" },
      { icon: faFileContract, text: "Detailed inspection report with photos included" },
    ],
  },
  "roof-replacement": {
    title: "Roof Replacement",
    description: "When repairs aren't enough, a full roof replacement restores your home's protection and curb appeal. We handle everything from tear-off to final cleanup, using premium materials and proven techniques for a roof that lasts decades.",
    image: "/images/services/roof-replacement.svg",
    features: [
      "Complete tear-off and disposal of old roofing",
      "Deck inspection and repair",
      "Premium underlayment and ice barrier installation",
      "Full shingle or metal roof installation",
      "Gutter and downspout replacement if needed",
      "Final inspection and cleanup with magnetic sweeper",
    ],
    benefits: [
      { icon: faShieldHalved, text: "5-year workmanship warranty on every replacement" },
      { icon: faClock, text: "Typical replacement completed in 3-7 days" },
      { icon: faFileContract, text: "Full permit handling and HOA coordination" },
    ],
  },
  "emergency-services": {
    title: "Emergency Services",
    description: "Roofing emergencies don't wait for business hours. Our 24/7 emergency response team is ready to protect your home or business from further damage. We provide rapid tarping, temporary repairs, and permanent solutions.",
    image: "/images/services/emergency-services.svg",
    features: [
      "24/7 emergency response — nights, weekends, and holidays",
      "Storm damage emergency tarping",
      "Fallen tree removal from roof structures",
      "Sudden leak containment and repair",
      "Temporary weatherproofing",
      "Insurance claim documentation assistance",
    ],
    benefits: [
      { icon: faShieldHalved, text: "Average response time under 90 minutes" },
      { icon: faClock, text: "Immediate temporary protection to prevent further damage" },
      { icon: faFileContract, text: "Direct insurance company coordination available" },
    ],
  },
  "gutter-services": {
    title: "Gutter Services",
    description: "Properly functioning gutters are essential for protecting your foundation, landscaping, and siding. We install, repair, and maintain seamless gutter systems that keep water flowing away from your property.",
    image: "/images/services/gutter-services.svg",
    features: [
      "Seamless aluminum gutter installation",
      "Gutter cleaning and maintenance",
      "Downspout installation and repair",
      "Gutter guard and leaf protection systems",
      "Fascia and soffit repair",
      "Underground drainage solutions",
    ],
    benefits: [
      { icon: faShieldHalved, text: "Seamless construction — no leaks at joints" },
      { icon: faClock, text: "Most installations completed in a single day" },
      { icon: faFileContract, text: "Free gutter inspection with every roofing service" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="text-muted-foreground mt-2">The service you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/services" className="mt-4 inline-block">
          <Button variant="outline">
            <FontAwesomeIcon icon={faArrowLeft} className="size-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
          All Services
        </Link>

        <Badge variant="secondary" className="mb-4">{service.title}</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          {service.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {service.description}
        </p>

        <img
          src={service.image}
          alt={service.title}
          className="w-full rounded-xl mb-10"
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
            <ul className="space-y-3">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
            <div className="space-y-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/40">
                  <FontAwesomeIcon icon={b.icon} className="size-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">Ready to get started?</h2>
          <p className="text-muted-foreground text-sm mb-5">Get a free, no-obligation estimate for your {service.title.toLowerCase()} project.</p>
          <Link href="/contact">
            <Button size="lg">Request Free Estimate</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
