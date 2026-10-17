import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { workstreams } from "@/lib/workstreams";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/projects/",
  title: "Activités | Finikz",
  description: "Les activités de Zhang Fengming dans les domaines de l'entreprise AI-native, du marketing et du contenu interculturel.",
});

// Same three pillars and experience as the homepage "Workstreams & Experience" section.
const work = workstreams.fr.pillars.map((pillar, index) => ({
  no: `0${index + 1}`,
  title: pillar.title,
  text: `${pillar.services}. ${pillar.points.join(" ")}`,
  link: index === 2 ? "/fr/works/" : undefined,
}));

export default function FrenchProjectsPage() {
  return (
    <main className="projects-page french-page" lang="fr">
      <SiteNav locale="fr" path="/projects/" />
      <header className="page-hero"><p className="eyebrow">ACTIVITÉS / SUR LE TERRAIN</p><h1>Faire de l'expérience<br /><em>un système.</em></h1><p>L’AI-native et le GEO, la marque et le marketing interculturel, la culture, les arts et les communautés ne sont pas des services isolés : ils forment une capacité durable, du diagnostic à la mise en œuvre.</p></header>
      <section className="project-list">{work.map((item) => <article className="project-row" key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.text}{item.link && <> <a className="work-link" href={item.link}>Voir les traductions ↗</a></>}</p><b>DOMAINES D'ACTIVITÉ</b></article>)}</section>
      <SiteFooter locale="fr" />
    </main>
  );
}
