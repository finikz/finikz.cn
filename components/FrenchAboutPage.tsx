import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import Workstreams from "@/components/Workstreams";
import { frenchArticles } from "@/lib/localized-articles";
import { frenchWorks } from "@/lib/works";

const latestArticles = [...frenchArticles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);


const trilogyWorks = frenchWorks.filter((work) => work.frenchGroup === "La trilogie dionysiaque");

export default function FrenchAboutPage({ path = "/about/" }: { path?: string }) {
  return (
    <main className="about-page french-page" lang="fr">
      <SiteNav active="about" locale="fr" path={path} />
      <header className="page-hero about-hero">
        <div className="about-hero-copy">
          <h1><em>Finikz</em></h1>
          <p><strong>Consultant en stratégie AI-native et marketing | Créateur de contenu interculturel</strong><br />Titulaire d'un diplôme en études françaises de l'Université Sun Yat-sen, je travaille en chinois, en anglais et en français. À la croisée de l'IA, de la compréhension culturelle, de la stratégie d'entreprise et du travail éditorial, je conçois des systèmes dont les effets se renforcent dans la durée.</p>
        </div>
        <aside className="hero-meta">AI-native et GEO<br />Marque et marketing interculturel<br />Culture, arts et communautés<br />Secrétaire général adjoint de l'Association des anciens élèves de l'Université Sun Yat-sen à Guangzhou<br />Cofondateur de Jumpwire Craft Beer et de l'Alliance artistique Jumpwire</aside>
      </header>

      <Workstreams locale="fr" />

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
        <div className="about-section-label"><p className="eyebrow">MES ÉCRITS</p><h2 id="fr-writing-title">Articles et idées</h2></div>
        <div className="about-showcase-content">
          <div className="about-writing-list">
            {latestArticles.map((article) => <Link className="about-writing-item" href={`/fr/articles/${article.slug}/`} key={article.slug}>
              <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
              <h3>{article.title}</h3>
              <span aria-hidden="true">↗</span>
            </Link>)}
          </div>
          <Link className="about-more-link" href="/fr/articles/">Voir plus ↗</Link>
        </div>
      </section>

      <section className="about-content" id="contact">
        <div className="about-contact">
          <p className="eyebrow">TRAVAILLONS ENSEMBLE</p>
          <h2>Parlons de votre projet</h2>
          <p className="placeholder-copy">AI-native et GEO · Marque et marketing interculturel · Culture, arts et communautés · Projets interdisciplinaires</p>
          <a href="mailto:mail@finikz.com">E-mail : mail@finikz.com</a>
          <a href="https://finikz.com/" target="_blank" rel="noreferrer">Site de l’entreprise ↗</a>
          <div className="social-links">
            <a href="https://mp.weixin.qq.com/mp/qrcode?scene=10000005&amp;size=102&amp;__biz=MjM5MzU0OTgyMw==&amp;mid=2652370389&amp;idx=1&amp;sn=f8a4a7adf5aee2d4d476fe52750ef66d&amp;send_time=" target="_blank" rel="noreferrer"><i className="social-icon wechat">W</i>Wechat Official Acount</a>
            <a href="https://www.douban.com/people/phoenixZ/" target="_blank" rel="noreferrer"><i className="social-icon douban">D</i>Douban</a>
            <a href="https://instagram.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon instagram">◎</i>Instagram</a>
            <a href="https://twitter.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon x">𝕏</i>X / Twitter</a>
            <a href="https://www.weibo.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon weibo">W</i>Weibo</a>
            <a href="https://www.linkedin.com/in/finikz" target="_blank" rel="noreferrer"><i className="social-icon linkedin">in</i>LinkedIn</a>
          </div>
        </div>
      </section>
      <SiteFooter locale="fr" />
    </main>
  );
}
