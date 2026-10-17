import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/terms/",
  title: "Terms of Use | Finikz",
  description: "Terms that apply when accessing and using finikz.cn.",
});

export default function EnglishTermsPage() {
  return (
    <main className="legal-page english-page" lang="en">
      <SiteNav locale="en" path="/terms/" />
      <article className="legal-content">
        <header><p className="eyebrow">TERMS OF USE</p><h1>Terms of Use</h1><p>Last updated: August 18, 2026</p></header>
        <p>Welcome to finikz.cn. By continuing to browse or use the Site, you agree to the following terms.</p>

        <h2>1. Purpose of the Site</h2>
        <p>The Site publishes articles, translation works, projects and information about Finikz. Its content is provided for general information, cultural exchange and reference. It does not constitute legal, financial, medical or other professional advice.</p>

        <h2>2. Intellectual Property</h2>
        <p>Unless otherwise stated, original writing, page layouts and original visual content on the Site belong to the author or the relevant rights holder. They may not be copied in bulk, republished, adapted or used commercially without permission. Reasonable quotation should identify the author and link to the Site.</p>

        <h2>3. Third-Party Content</h2>
        <p>Rights in quoted images, book and film materials, trademarks and other third-party content belong to their respective owners. Such materials are used for commentary, research or informational purposes. Rights holders who believe material has been used improperly may contact us for review.</p>

        <h2>4. External Links</h2>
        <p>The Site may link to third-party websites. We do not control their content, availability or privacy practices and are not responsible for losses caused by third-party websites. Please assess the risks before following external links.</p>

        <h2>5. Availability and Limitation of Liability</h2>
        <p>We make reasonable efforts to keep the content accurate and the Site available, but do not guarantee that information will always be complete, current or error-free, or that service will be uninterrupted. To the extent permitted by applicable law, you are responsible for indirect losses arising from your use of, or inability to use, the Site.</p>

        <h2>6. Changes to These Terms</h2>
        <p>We may update these terms as the Site’s features or legal requirements change. An updated version takes effect when it is published on this page.</p>

        <h2>7. Contact</h2>
        <p>Requests to republish material, rights claims and questions about these terms may be sent to <a href="mailto:mail@finikz.com">mail@finikz.com</a>.</p>
      </article>
      <SiteFooter locale="en" />
    </main>
  );
}
