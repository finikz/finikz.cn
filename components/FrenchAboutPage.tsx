import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { frenchWorks } from "@/lib/works";

const workstreams = [
  {
    title: "Stratégie IA et marketing d'entreprise",
    points: [
      "Cofondateur de Pallas AI ; conseil aux entreprises sur l'adoption concrète de l'IA et la définition de leur stratégie marketing.",
      "Cofondateur d'une agence de marketing de contenu, qui comptait parmi ses clients Tencent Group Communications et la Foire internationale de l'investissement et du commerce de Chine.",
      "Produit de commerce transfrontalier classé dans le top 10 de sa catégorie sur Amazon.",
      "Pilotage de comptes suivis par plus d'un million d'abonnés ; contribution à la croissance d'un réseau de médias (+300 000 abonnés en trois mois).",
    ],
  },
  {
    title: "Création de contenu interculturel",
    points: [
      "Traduction d'expositions et de catalogues pour le projet du West Bund Museum × Centre Pompidou, notamment autour de Kandinsky, de La Voix des choses et de l'architecture parisienne.",
      "Plusieurs années au sein d'une société de négoce française, en charge de la communication commerciale et de la rédaction institutionnelle en chinois, anglais et français.",
      "Plus d'une dizaine de livres traduits ; accompagnement éditorial de marques, notamment dans l'univers du jouet de créateur et des marques personnelles.",
      "Rédacteur en chef chez Qiyu Film, où plusieurs articles ont dépassé les 100 000 vues ; chroniqueur pour Fengshang Weekly.",
    ],
  },
  {
    title: "Organisations et communautés",
    points: [
      "Secrétaire général adjoint de l'Association des anciens élèves de l'Université Sun Yat-sen à Guangzhou, chargé de la communication.",
      "Lauréat du premier concours de chant en anglais de l'Université Sun Yat-sen ; classé parmi les dix premiers du 20e concours de chant Venus du campus.",
      "Cofondateur de Jiuwei Craft Beer et de l'Alliance artistique Jiuwei.",
      "Fondateur de la salle de concert Jiǔwō, qui a accueilli des groupes comme Wutiaoren et Toy Captain.",
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
          <p><strong>Consultant en stratégie IA et marketing | Créateur de contenu interculturel</strong><br />Titulaire d'un diplôme en études françaises de l'Université Sun Yat-sen, je travaille en chinois, en anglais et en français. À la croisée de l'IA, de la compréhension culturelle, de la stratégie d'entreprise et du travail éditorial, je conçois des systèmes dont les effets se renforcent dans la durée.</p>
        </div>
        <aside className="hero-meta">Stratégie IA et marketing<br />Contenu interculturel et traduction en chinois, anglais et français<br />Secrétaire général adjoint de l'Association des anciens élèves de l'Université Sun Yat-sen à Guangzhou<br />Cofondateur de Jiuwei Craft Beer et de l'Alliance artistique Jiuwei</aside>
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
        <div className="about-section-label"><p className="eyebrow">MES TRADUCTIONS</p><h2 id="fr-translations-title">Quelques ouvrages traduits</h2></div>
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
          <p className="about-writing-note">Des articles sur l'IA, la culture et la traduction — ainsi que sur les systèmes qui les relient. Sélection disponible en anglais et en français.</p>
          <Link className="about-more-link" href="/fr/articles/">Lire les articles ↗</Link>
        </div>
      </section>

      <section className="about-content" id="contact">
        <div className="about-contact">
          <p className="eyebrow">TRAVAILLONS ENSEMBLE</p>
          <h2>Parlons de votre projet</h2>
          <p className="placeholder-copy">Stratégie IA et marketing · Développement international des marques et contenu interculturel · Traduction dans les domaines artistiques et culturels · Projets interdisciplinaires</p>
          <a href="mailto:mail@finikz.com">E-mail : mail@finikz.com</a>
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
