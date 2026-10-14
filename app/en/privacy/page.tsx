import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy | Finikz",
  description: "Privacy Policy and Cookie information for finikz.cn.",
  alternates: {
    canonical: "/en/privacy/",
    languages: { "zh-CN": "/privacy/", en: "/en/privacy/", fr: "/fr/privacy/" },
  },
};

export default function EnglishPrivacyPage() {
  return (
    <main className="legal-page english-page" lang="en">
      <SiteNav locale="en" path="/privacy/" />
      <article className="legal-content">
        <header><p className="eyebrow">PRIVACY POLICY</p><h1>Privacy Policy</h1><p>Last updated: August 24, 2026</p></header>
        <p>finikz.cn (the “Site”) is operated by Zhang Fengming (Finikz). This policy explains what visitor data may be processed, why it is processed and what choices you have.</p>

        <h2>1. Information We Process</h2>
        <p>When you browse the Site, hosting, security and analytics services may process technical information such as browser and device type, access time, referring page, pages visited, interaction events, IP address and an approximate location inferred from it. If you contact us by email, we receive the email address and message content you provide.</p>

        <h2>2. Google Analytics</h2>
        <p>The Site uses Google Analytics 4 (measurement ID: G-WWPWFYB8TE) to understand visits and usage. The analytics script loads after a page is opened, and Google processes the relevant data under its own policies. We use aggregated information to improve the Site and its content, not to identify you in the real world.</p>

        <h2>3. Cookies and Local Storage</h2>
        <p>Google Analytics may use Cookies or similar technologies to distinguish visits and measure interactions. The Site also uses browser local storage to remember your language choice. You can restrict or clear Cookies and local site data through your browser settings.</p>

        <h2>4. Advertising Services</h2>
        <p>The Site is currently applying for Google AdSense. If advertising is enabled in the future, Google and its partners may use Cookies or similar technologies to display, measure and improve advertising based on visits. Where required, we will provide an appropriate consent choice before enabling such advertising technologies.</p>

        <h2>5. Third-Party Services and Links</h2>
        <p>The Site is hosted on GitHub Pages and uses Cloudflare for DNS, delivery and security. Articles may link to third-party websites. Once you leave the Site, the third party’s own privacy policy governs its handling of information.</p>

        <h2>6. Retention, Security and Your Rights</h2>
        <p>We retain information under our control only for as long as needed for the purposes described above and take reasonable measures to protect it. Subject to the law that applies where you live, you may request access to, correction of or deletion of information about you, withdraw consent or object to certain processing.</p>

        <h2>7. Contact</h2>
        <p>Questions about this policy or the handling of personal information may be sent to <a href="mailto:mail@finikz.com">mail@finikz.com</a>.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy as the Site’s features or legal requirements change. Material changes will be described on this page, and the date above will be updated.</p>
      </article>
      <SiteFooter locale="en" />
    </main>
  );
}
