"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Contact Us</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Get Your Free Estimate
          </h1>
          <p className="text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you within 24 hours. For emergencies, call us directly.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <Card className="glass-card">
                <CardContent className="pt-6 text-center py-12">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <FontAwesomeIcon icon={faPaperPlane} className="size-7" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Thank You!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your message has been received. One of our roofing experts will get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                        <Input placeholder="John Smith" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email</label>
                        <Input type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <Input type="tel" placeholder="(555) 000-0000" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Service Needed</label>
                        <Select value={service} onValueChange={(v) => setService(v ?? "")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Roofing</SelectItem>
                            <SelectItem value="commercial">Commercial Roofing</SelectItem>
                            <SelectItem value="repair">Roof Repair</SelectItem>
                            <SelectItem value="replacement">Roof Replacement</SelectItem>
                            <SelectItem value="emergency">Emergency Services</SelectItem>
                            <SelectItem value="gutter">Gutter Services</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message</label>
                      <Textarea
                        placeholder="Tell us about your project or roofing issue..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <Card className="glass-card">
              <CardContent className="pt-5 space-y-4">
                <h3 className="font-semibold">Contact Info</h3>
                {[
                  { icon: faPhone, label: "Phone", value: "(555) 123-4567" },
                  { icon: faEnvelope, label: "Email", value: "info@peakroofing.com" },
                  { icon: faLocationDot, label: "Address", value: "123 Summit Ave, Portland, OR 97201" },
                  { icon: faClock, label: "Hours", value: "Mon–Fri: 7AM–6PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={item.icon} className="size-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="glass-card bg-primary/5 border-primary/20">
              <CardContent className="pt-5">
                <h3 className="font-semibold mb-1">Emergency?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Don&apos;t wait — call our 24/7 emergency line for immediate assistance.
                </p>
                <p className="text-lg font-bold text-primary">(555) 999-ROOF</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
