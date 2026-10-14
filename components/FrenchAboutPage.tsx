import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { frenchWorks } from "@/lib/works";

const workstreams = [
  {
    title: "Stratégie d'entreprise, IA et marketing",
    points: [
      "Co-fondateur de Pallas AI, où il accompagne les entreprises dans l'adoption concrète de l'IA et leur stratégie marketing.",
      "A cofondé une agence de contenu dont les clients comptaient notamment Tencent Group Communications et la Foire internationale de l'investissement et du commerce de Chine.",
      "A porté un produit de commerce transfrontalier parmi les dix premiers de sa catégorie sur Amazon.",
      "A piloté des comptes suivis par plus d'un million de personnes et aidé un réseau de médias à gagner 300 000 abonnés en trois mois.",
    ],
  },
  {
    title: "Création de contenu interculturel",
    points: [
      "A traduit des expositions et des catalogues pour le projet commun du Musée West Bund et du Centre Pompidou, notamment autour de Kandinsky, de la voix des choses et de l'architecture parisienne.",
      "A travaillé plusieurs années dans une entreprise française, en assurant la communication commerciale et institutionnelle en chinois, en anglais et en français.",
      "A traduit plus d'une dizaine de livres et accompagné la production éditoriale de marques, notamment dans le jouet de créateur et les marques personnelles.",
      "Ancien rédacteur en chef chez Qiyu Film, il y a signé plusieurs articles dépassant les 100 000 vues et a également tenu une chronique pour Fengshang Weekly.",
    ],
  },
  {
    title: "Organisations et communautés",
    points: [
      "Secrétaire général adjoint de l'Association des anciens élèves de l'Université Sun Yat-sen à Guangzhou, chargé de la communication.",
      "Lauréat du premier concours de chant en anglais de l'Université Sun Yat-sen et finaliste parmi les dix premiers du 20e concours musical Venus du campus.",
      "Co-fondateur de Jiuwei Craft Beer et de l'Alliance artistique Jiuwei.",
      "A fondé la salle de concert Jiǔwō, où se sont produits des groupes comme Wutiaoren et Toy Captain.",
    ],
  },
];

const trilogyWorks = frenchWorks.filter((work) => work.frenchGroup === "La trilogie dionysiaque");

export default function FrenchAboutPage({ path = "/about/" }: { path?: string }) {
  return (
    <main className="about-page french-page" lang="fr">
      <SiteNav active="about" locale="fr" path={path} />
      <header className="page-hero about-hero">
        <div className="about-hero-copy">
          <h1><em>Finikz</em></h1>
          <p><strong>Conseil en stratégie IA et marketing | Création de contenu interculturel</strong><br />Zhang Fengming (Finikz), diplômé en français de l'Université Sun Yat-sen, travaille en chinois, en anglais et en français. Il associe l'IA, la compréhension culturelle, la stratégie d'entreprise et l'écriture pour bâtir des systèmes dont les effets se renforcent dans la durée.</p>
        </div>
        <aside className="hero-meta">Stratégie IA / Stratégie marketing<br />Contenu interculturel / Traduction trilingue<br />Secrétaire général adjoint, Association des anciens de l'Université Sun Yat-sen à Guangzhou<br />Co-fondateur de Jiuwei Craft Beer et de l'Alliance artistique Jiuwei</aside>
      </header>

      <section className="about-workstreams" aria-labelledby="fr-workstreams-title">
        <div className="about-section-label"><p className="eyebrow">DOMAINES D'ACTIVITÉ</p><h2 id="fr-workstreams-title">Ce que je fais</h2></div>
        <div className="about-stream-list">
          {workstreams.map((item) => (
            <article className="about-stream" key={item.title}>
              <div><h3>{item.title}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-showcase about-translations" aria-labelledby="fr-translations-title">
        <div className="about-section-label"><p className="eyebrow">MES TRADUCTIONS</p><h2 id="fr-translations-title">Quelques livres</h2></div>
        <div className="about-showcase-content">
          <div className="about-work-cards">
            {trilogyWorks.map((work) => <article className="about-work-card" key={work.url}>
              <a className="about-work-cover" href={work.url} target="_blank" rel="noreferrer">
                <Image src={work.cover} alt={`Couverture de l'édition chinoise : ${work.frenchTitle}`} fill sizes="(max-width: 720px) 30vw, 220px" />
              </a>
              <h3><a href={work.url} target="_blank" rel="noreferrer">{work.frenchTitle}</a></h3>
            </article>)}
          </div>
          <Link className="about-more-link" href="/fr/works/">Voir toutes les traductions ↗</Link>
        </div>
      </section>

      <section className="about-showcase about-writing" aria-labelledby="fr-writing-title">
        <div className="about-section-label"><p className="eyebrow">ÉCRITURE</p><h2 id="fr-writing-title">Articles et idées</h2></div>
        <div className="about-showcase-content">
          <p className="about-writing-note">Des textes sur l'IA, la culture, la traduction et les systèmes qui les relient, désormais disponibles en anglais et en français.</p>
          <Link className="about-more-link" href="/fr/articles/">Lire les articles ↗</Link>
        </div>
      </section>

      <section className="about-content" id="contact">
        <div className="about-contact">
          <p className="eyebrow">TRAVAILLONS ENSEMBLE</p>
          <h2>Parlons de votre projet</h2>
          <p className="placeholder-copy">Stratégie IA et marketing / Développement international des marques et contenu interculturel / Traduction dans les domaines de l'art et de la culture / Projets transversaux</p>
          <a href="mailto:mail@finikz.com">E-mail　mail@finikz.com</a>
          <div className="social-links">
            <a href="https://mp.weixin.qq.com/mp/qrcode?scene=10000005&amp;size=102&amp;__biz=MjM5MzU0OTgyMw==&amp;mid=2652370389&amp;idx=1&amp;sn=f8a4a7adf5aee2d4d476fe52750ef66d&amp;send_time=" target="_blank" rel="noreferrer"><i className="social-icon wechat">W</i>WeChat : Fei Ni Ke Si</a>
            <a href="https://www.douban.com/people/phoenixZ/" target="_blank" rel="noreferrer"><i className="social-icon douban">D</i>Douban</a>
            <a href="https://instagram.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon instagram">◎</i>Instagram</a>
            <a href="https://twitter.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon x">𝕏</i>X / Twitter</a>
            <a href="http://www.weibo.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon weibo">W</i>Weibo</a>
            <a href="https://www.linkedin.com/in/finikz" target="_blank" rel="noreferrer"><i className="social-icon linkedin">in</i>LinkedIn</a>
          </div>
        </div>
      </section>
      <SiteFooter locale="fr" />
    </main>
  );
}
