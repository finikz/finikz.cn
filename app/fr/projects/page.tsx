import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Activités | Finikz",
  description: "Les activités de Zhang Fengming dans les domaines de l'entreprise AI-native, du marketing et du contenu interculturel.",
  alternates: {
    canonical: "/fr/projects/",
    languages: { "zh-CN": "/projects/", en: "/en/projects/", fr: "/fr/projects/" },
  },
};

const work = [
  { no: "01", title: "Entreprise AI-native et stratégie marketing", text: "Co-fondateur de Pallas AI, Zhang Fengming aide les entreprises à devenir AI-native : non pas greffer l'IA sur d'anciens processus, mais reconstruire le travail autour d'elle. Il a auparavant cofondé une agence de contenu dont les clients comptaient notamment Tencent Group Communications et la Foire internationale de l'investissement et du commerce de Chine. Il a également classé un produit de commerce transfrontalier parmi les dix premiers de sa catégorie sur Amazon et piloté des comptes suivis par plus d'un million de personnes." },
  { no: "02", title: "Contenu interculturel", text: "Traducteur pour les expositions et catalogues réalisés dans le cadre du partenariat entre le Musée West Bund et le Centre Pompidou, il a travaillé plusieurs années dans une entreprise française. Il y assurait la communication commerciale et institutionnelle en chinois, en anglais et en français. Il a traduit plus d'une dizaine de livres et accompagné la création de contenu de plusieurs marques.", link: "/fr/works/" },
  { no: "03", title: "Organisations et communautés", text: "Secrétaire général adjoint de l'Association des anciens élèves de l'Université Sun Yat-sen à Guangzhou, chargé de la communication ; co-fondateur de Jumpwire Craft Beer et de l'Alliance artistique Jumpwire. Il a également fondé la salle de concert Jiǔwō, qui a accueilli des groupes comme Wutiaoren et Toy Captain." },
];

export default function FrenchProjectsPage() {
  return (
    <main className="projects-page french-page" lang="fr">
      <SiteNav locale="fr" path="/projects/" />
      <header className="page-hero"><p className="eyebrow">ACTIVITÉS / SUR LE TERRAIN</p><h1>Faire de l'expérience<br /><em>un système.</em></h1><p>L'entreprise AI-native, le marketing et le contenu ne sont pas des services isolés : ils forment une capacité durable, du diagnostic à la mise en œuvre.</p></header>
      <section className="project-list">{work.map((item) => <article className="project-row" key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.text}{item.link && <> <a className="work-link" href={item.link}>Voir les traductions ↗</a></>}</p><b>DOMAINES D'ACTIVITÉ</b></article>)}</section>
      <SiteFooter locale="fr" />
    </main>
  );
}
