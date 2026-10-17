import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Work | Finikz",
  description: "Finikz's work across AI-native companies, marketing strategy and cross-cultural content.",
  alternates: {
    canonical: "/en/projects/",
    languages: { "zh-CN": "/projects/", en: "/en/projects/", fr: "/fr/projects/" },
  },
};

const work = [
  { no: "01", title: "AI-Native Companies & Marketing Strategy", text: "Co-founder of Pallas AI, helping companies become AI-native: not bolting AI onto old processes, but rebuilding work around it. Previously co-founded a content marketing company whose clients included Tencent Group Communications and the China International Fair for Investment & Trade; took a cross-border e-commerce product into Amazon’s top ten in its category; and managed accounts with more than one million followers." },
  { no: "02", title: "Cross-Cultural Content", text: "Translated exhibitions and catalogues for the West Bund Museum × Centre Pompidou project. Worked for several years at a French trading company, handling business communications across Chinese, English and French. Translated more than a dozen books and guided content development for brands.", link: "/en/works" },
  { no: "03", title: "Organizations & Communities", text: "Deputy Secretary-General of the Guangzhou Alumni Association of Sun Yat-sen University, overseeing communications; co-founder of Jumpwire Craft Beer and the Jumpwire Art Alliance; and founder of Jiǔwō live house, which presented performances by bands including Wutiaoren and Toy Captain." },
];

export default function EnglishProjectsPage() {
  return (
    <main className="projects-page english-page" lang="en">
      <SiteNav locale="en" path="/projects/" />
      <header className="page-hero"><p className="eyebrow">WORK / IN PRACTICE</p><h1>Turn Experience<br /><em>into Systems.</em></h1><p>AI-native companies, marketing strategy and content are not separate services. Together, they form a long-term capability that connects judgment with execution.</p></header>
      <section className="project-list">{work.map((item) => <article className="project-row" key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.text}{item.link && <> <Link className="work-link" href={item.link}>Translation Works ↗</Link></>}</p><b>WORKSTREAM</b></article>)}</section>
      <SiteFooter locale="en" />
    </main>
  );
}
