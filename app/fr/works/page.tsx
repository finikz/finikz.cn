import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { frenchWorks } from "@/lib/works";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/works/",
  title: "Traductions | Finikz",
  description: "Les traductions de Zhang Fengming (Finikz), de la littérature et de l'art à la culture du vin et des spiritueux.",
});

const groups = ["La trilogie dionysiaque", "Musée West Bund", "Autres traductions"] as const;

export default function FrenchWorksPage() {
  return (
    <main className="works-page french-page" lang="fr">
      <SiteNav active="works" locale="fr" path="/works/" />
      <header className="works-hero"><p className="eyebrow">TRADUCTION / SÉLECTION</p><h1>Œuvres<br /><em>traduites</em></h1><p>De la littérature et de l'art à la culture du vin et des spiritueux.<br />Préserver le rythme, la matière et la pensée d'une œuvre lorsqu'elle passe en chinois.</p></header>
      <section className="works-feature"><div><p className="eyebrow">PROJET À LA UNE · 2026</p><h2>La trilogie dionysiaque</h2><p>Trois ouvrages français consacrés au vin, à la bière et au rhum : des voyages culturels autour du terroir, du savoir-faire, du voyage et de la liberté, traduits pour le lectorat chinois.</p><Link href="/fr/works/dionysus-trilogy/">Découvrir la trilogie ↗</Link></div><span>III</span></section>
      <section className="works-grid" aria-label="Toutes les traductions"><div className="works-grid-heading"><p className="eyebrow">TOUTES LES TRADUCTIONS</p><p>Sélection d'éditions chinoises. Cliquez sur une couverture pour consulter sa notice Douban.</p></div>{groups.map((group) => <section className="work-group" key={group}><h2>{group}</h2><div className="work-cards">{frenchWorks.filter((work) => work.frenchGroup === group).map((work) => <article className="work-card" key={work.url}><a className="work-cover" href={work.url} target="_blank" rel="noreferrer"><Image src={work.cover} alt={`Couverture de l'édition chinoise : ${work.frenchTitle}`} fill sizes="(max-width: 720px) 42vw, 210px" /></a><div className="work-info"><p>{work.year} / traduction chinoise par Finikz</p><h3><a href={work.url} target="_blank" rel="noreferrer">{work.frenchTitle}</a></h3><span>{work.frenchAuthor}</span><span>{work.frenchPublisher}</span>{work.frenchGroup === "La trilogie dionysiaque" && <Link className="trilogy-tag" href="/fr/works/dionysus-trilogy/">La trilogie dionysiaque ↗</Link>}</div></article>)}</div></section>)}</section>
      <SiteFooter locale="fr" />
    </main>
  );
}
