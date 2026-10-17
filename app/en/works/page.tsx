import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { englishWorks } from "@/lib/works";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/works/",
  title: "Translation Works | Finikz",
  description: "Selected Chinese translations by Finikz, spanning literature, art, wine and sensory culture.",
});

const groups = ["The Dionysian Trilogy", "West Bund Museum", "Other Translations"] as const;

export default function EnglishWorksPage() {
  return (
    <main className="works-page english-page" lang="en">
      <SiteNav active="works" locale="en" path="/works/" />
      <header className="works-hero"><p className="eyebrow">TRANSLATION / SELECTED WORKS</p><h1>Translation<br /><em>Works</em></h1><p>From literature and art to wine and sensory culture.<br />Preserving a work’s texture, rhythm and thought as it moves into Chinese.</p></header>
      <section className="works-feature"><div><p className="eyebrow">FEATURED PROJECT · 2026</p><h2>The Dionysian Trilogy</h2><p>Three French works on wine, beer and rum—cultural journeys through terroir, craft, travel and freedom, now available to Chinese readers.</p><Link href="/en/works/dionysus-trilogy">Explore the Trilogy ↗</Link></div><span>III</span></section>
      <section className="works-grid" aria-label="All translations"><div className="works-grid-heading"><p className="eyebrow">ALL TRANSLATIONS</p><p>Selected Chinese editions. Click a cover to view its Douban book page.</p></div>{groups.map((group) => <section className="work-group" key={group}><h2>{group}</h2><div className="work-cards">{englishWorks.filter((work) => work.englishGroup === group).map((work) => <article className="work-card" key={work.url}><a className="work-cover" href={work.url} target="_blank" rel="noreferrer"><Image src={work.cover} alt={`${work.englishTitle} Chinese edition cover`} fill sizes="(max-width: 720px) 42vw, 210px" /></a><div className="work-info"><p>{work.year} / Chinese translation by Finikz</p><h3><a href={work.url} target="_blank" rel="noreferrer">{work.englishTitle}</a></h3>{work.originalTitle && <span>{work.originalTitle}</span>}<span>{work.englishAuthor}</span><span>{work.englishPublisher}</span>{work.englishGroup === "The Dionysian Trilogy" && <Link className="trilogy-tag" href="/en/works/dionysus-trilogy">The Dionysian Trilogy ↗</Link>}</div></article>)}</div></section>)}</section>
      <SiteFooter locale="en" />
    </main>
  );
}
