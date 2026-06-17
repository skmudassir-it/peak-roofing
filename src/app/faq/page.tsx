import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our roofing services, pricing, warranties, and process.",
};

const faqs = [
  {
    q: "How much does a new roof cost?",
    a: "Roof costs vary based on size, material, pitch, and complexity. Asphalt shingle roofs typically range from $8,000–$15,000 for an average home. Metal roofing runs $15,000–$30,000. We provide free, detailed estimates with no obligation so you know exactly what to expect.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in 2–5 days. Larger or more complex projects may take 5–7 days. Weather conditions can affect the timeline, and we'll keep you informed every step of the way.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes! We offer a 5-year workmanship warranty on all installations. Additionally, manufacturer warranties on materials range from 25 years to lifetime coverage depending on the product you choose.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Peak Roofing is fully licensed, bonded, and insured. We carry both general liability and workers' compensation insurance. Certificates are available upon request.",
  },
  {
    q: "Do you work with insurance claims?",
    a: "Yes, we have extensive experience working with insurance companies for storm damage and other covered claims. We can help document the damage, meet with adjusters, and ensure you get the coverage you deserve.",
  },
  {
    q: "What roofing materials do you work with?",
    a: "We work with all major roofing materials: asphalt shingles (architectural and 3-tab), metal roofing (standing seam, corrugated, stone-coated steel), clay and concrete tiles, slate, TPO, EPDM, PVC, and built-up roofing systems.",
  },
  {
    q: "How do I know if I need a repair or a full replacement?",
    a: "We offer free inspections to assess your roof's condition. Generally, if damage is isolated to a small area, repair is sufficient. If your roof is over 20 years old, has widespread issues, or shows signs of structural problems, replacement is often the better long-term investment.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes, we partner with several financing companies to offer flexible payment plans. Options include 0% interest for qualified buyers and terms up to 120 months. Ask your estimator for details.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">FAQ</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Answers to the most common questions about our roofing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group glass-card rounded-xl">
              <summary className="cursor-pointer list-none flex items-center justify-between p-5 font-medium text-sm">
                {faq.q}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="size-3.5 text-muted-foreground transition-transform group-open:rotate-180 shrink-0 ml-4"
                />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Still have questions? We&apos;re happy to help.
          </p>
          <Link href="/contact">
            <Button>
              <FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
