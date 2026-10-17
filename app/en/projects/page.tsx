import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { workstreams } from "@/lib/workstreams";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/projects/",
  title: "Workstreams | Finikz",
  description: "Finikz's work across AI-native companies, marketing strategy and cross-cultural content.",
});

// Same three pillars and experience as the homepage "Workstreams & Experience" section.
const work = workstreams.en.pillars.map((pillar, index) => ({
  no: `0${index + 1}`,
  title: pillar.title,
  text: `${pillar.services}. ${pillar.points.join(" ")}`,
  link: index === 2 ? "/en/works/" : undefined,
}));

export default function EnglishProjectsPage() {
  return (
    <main className="projects-page english-page" lang="en">
      <SiteNav locale="en" path="/projects/" />
      <header className="page-hero"><p className="eyebrow">WORK / IN PRACTICE</p><h1>Turn Experience<br /><em>into Systems.</em></h1><p>AI-native &amp; GEO, brand &amp; cross-cultural marketing, and arts, culture &amp; communities are not separate services. Together, they form a long-term capability that connects judgment with execution.</p></header>
      <section className="project-list">{work.map((item) => <article className="project-row" key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.text}{item.link && <> <Link className="work-link" href={item.link}>Translation Works ↗</Link></>}</p><b>WORKSTREAM</b></article>)}</section>
      <SiteFooter locale="en" />
    </main>
  );
}
