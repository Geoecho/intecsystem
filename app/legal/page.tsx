"use client";

import { useState } from "react";
import { Navbar14 } from "@/components/navbar14";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Service" },
];

export default function LegalPage() {
  const [active, setActive] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="flex flex-col min-h-screen pt-[65px]">
      <Navbar14 />
      <main className="flex-1">
        <FadeIn>
          <section className="py-20 md:py-32">
            <div className="container mx-auto max-w-6xl">
              {/* Tab switcher */}
              <div className="mb-12 flex gap-2 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id as "privacy" | "terms")}
                    className={cn(
                      "pb-3 px-1 text-sm font-medium transition-colors border-b-2 -mb-px",
                      active === tab.id
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {active === "privacy" && (
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-li:text-muted-foreground">
                  <h1>Privacy Policy</h1>
                  <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

                  <p>
                    InTec System (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal
                    information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website or use our services.
                  </p>

                  <h2>1. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul>
                    <li><strong>Personal identification information</strong> — name, email address, phone number, company name, and other details you provide when contacting us.</li>
                    <li><strong>Usage data</strong> — information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                    <li><strong>Technical data</strong> — IP address, browser type and version, device identifiers, and operating system.</li>
                    <li><strong>Cookies</strong> — small data files stored on your device to improve your experience and analyze site usage.</li>
                  </ul>

                  <h2>2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Respond to your inquiries and provide requested services</li>
                    <li>Send relevant communications about our services and updates</li>
                    <li>Improve our website, products, and services</li>
                    <li>Comply with legal obligations and enforce our agreements</li>
                    <li>Protect against fraudulent or unauthorized activity</li>
                  </ul>

                  <h2>3. Sharing Your Information</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share
                    your information with:
                  </p>
                  <ul>
                    <li>Trusted service providers who assist in operating our website or conducting our business</li>
                    <li>Legal authorities when required by law or to protect our rights</li>
                    <li>Business partners with your explicit consent</li>
                  </ul>

                  <h2>4. Data Retention</h2>
                  <p>
                    We retain your personal data only for as long as necessary to fulfil the purposes outlined
                    in this policy, or as required by applicable law. Contact form submissions are retained for
                    up to 24 months.
                  </p>

                  <h2>5. Your Rights</h2>
                  <p>Depending on your location, you may have the right to:</p>
                  <ul>
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to or restrict the processing of your data</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>

                  <h2>6. Cookies</h2>
                  <p>
                    Our website uses cookies to enhance your browsing experience. You can control cookie
                    settings through your browser preferences. Disabling cookies may affect some functionality
                    of our website.
                  </p>

                  <h2>7. Security</h2>
                  <p>
                    We implement appropriate technical and organisational measures to protect your information
                    against unauthorised access, alteration, disclosure, or destruction. However, no method of
                    transmission over the internet is 100% secure.
                  </p>

                  <h2>8. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please
                    contact us at:{" "}
                    <a href="mailto:info@intecsystem.mk" className="text-primary hover:underline">
                      info@intecsystem.mk
                    </a>
                    {" "}or write to us at Bul. Jane Sandanski 113, 1000 Skopje, North Macedonia.
                  </p>
                </div>
              )}

              {active === "terms" && (
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-li:text-muted-foreground">
                  <h1>Terms of Service</h1>
                  <p className="text-sm text-muted-foreground">Last updated: January 2025</p>

                  <p>
                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of the InTec System
                    website and services. By accessing our website, you agree to be bound by these Terms.
                  </p>

                  <h2>1. Use of the Website</h2>
                  <p>
                    You agree to use our website only for lawful purposes and in a manner that does not infringe
                    the rights of others. You must not:
                  </p>
                  <ul>
                    <li>Use the website in any way that violates applicable local, national, or international laws</li>
                    <li>Transmit unsolicited or unauthorised advertising or promotional material</li>
                    <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
                    <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
                  </ul>

                  <h2>2. Intellectual Property</h2>
                  <p>
                    All content on this website — including text, graphics, logos, images, and software — is
                    the property of InTec System and is protected by applicable intellectual property laws.
                    You may not reproduce, distribute, or create derivative works without our express written
                    permission.
                  </p>

                  <h2>3. Services and Engagements</h2>
                  <p>
                    The information on this website is for general informational purposes only. Specific terms
                    for service engagements will be governed by separate agreements entered into between InTec
                    System and the client. Nothing on this website constitutes a binding offer or contract.
                  </p>

                  <h2>4. Disclaimer of Warranties</h2>
                  <p>
                    Our website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties
                    of any kind, either express or implied. We do not warrant that the website will be
                    uninterrupted, error-free, or free of viruses or other harmful components.
                  </p>

                  <h2>5. Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, InTec System shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages arising out of your use of, or
                    inability to use, the website or its content.
                  </p>

                  <h2>6. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. These links are provided for your
                    convenience only. We have no control over the content of those sites and accept no
                    responsibility for them or for any loss or damage that may arise from your use of them.
                  </p>

                  <h2>7. Changes to These Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective
                    immediately upon posting to the website. Your continued use of the website following any
                    changes constitutes your acceptance of the revised Terms.
                  </p>

                  <h2>8. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the Republic
                    of North Macedonia. Any disputes shall be subject to the exclusive jurisdiction of the courts
                    of Skopje.
                  </p>

                  <h2>9. Contact Us</h2>
                  <p>
                    For any questions regarding these Terms, please contact us at:{" "}
                    <a href="mailto:info@intecsystem.mk" className="text-primary hover:underline">
                      info@intecsystem.mk
                    </a>
                  </p>
                </div>
              )}
            </div>
          </section>
        </FadeIn>
      </main>
    </div>
  );
}
