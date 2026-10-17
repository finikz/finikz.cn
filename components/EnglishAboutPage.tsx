import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import Workstreams from "@/components/Workstreams";
import { englishArticles } from "@/lib/localized-articles";
import { englishWorks } from "@/lib/works";

const latestArticles = [...englishArticles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);


const trilogyWorks = englishWorks.filter((work) => work.englishGroup === "The Dionysian Trilogy");

type EnglishAboutPageProps = {
  path: string;
};

export default function EnglishAboutPage({ path }: EnglishAboutPageProps) {
  return (
    <main className="about-page english-page" lang="en">
      <SiteNav active="about" locale="en" path={path} />

      <header className="page-hero about-hero">
        <div className="about-hero-copy">
          <h1><em>Finikz</em></h1>
          <p><strong>AI-Native &amp; Marketing Strategy Consultant | Cross-Cultural Content Creator</strong><br />With a degree in French from Sun Yat-sen University, I work across Chinese, English and French, bringing together AI, cultural insight, business strategy and editorial craft to build systems that compound over time.</p>
        </div>
        <aside className="hero-meta">AI-Native &amp; GEO<br />Brand &amp; Cross-Cultural Marketing<br />Arts, Culture &amp; Communities<br />Deputy Secretary-General, SYSU Guangzhou Alumni Association<br />Co-founder, Jumpwire Craft Beer &amp; Jumpwire Art Alliance</aside>
      </header>

      <Workstreams locale="en" />

      <section className="about-showcase about-translations" aria-labelledby="en-translations-title">
        <div className="about-section-label"><p className="eyebrow">BOOK TRANSLATIONS</p><h2 id="en-translations-title">Selected Translations</h2></div>
        <div className="about-showcase-content">
          <div className="about-work-cards">
            {trilogyWorks.map((work) => <article className="about-work-card" key={work.url}>
              <a className="about-work-cover" href={work.url} target="_blank" rel="noreferrer">
                <Image src={work.cover} alt={`${work.englishTitle} Chinese edition cover`} fill sizes="(max-width: 720px) 30vw, 220px" />
              </a>
              <h3><a href={work.url} target="_blank" rel="noreferrer">{work.englishTitle}</a></h3>
            </article>)}
          </div>
          <Link className="about-more-link" href="/en/works">View all translations ↗</Link>
        </div>
      </section>

      <section className="about-showcase about-writing" aria-labelledby="en-writing-title">
        <div className="about-section-label"><p className="eyebrow">MY WRITING</p><h2 id="en-writing-title">Selected Writing</h2></div>
        <div className="about-showcase-content">
          <div className="about-writing-list">
            {latestArticles.map((article) => <Link className="about-writing-item" href={`/en/articles/${article.slug}/`} key={article.slug}>
              <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
              <h3>{article.title}</h3>
              <span aria-hidden="true">↗</span>
            </Link>)}
          </div>
          <Link className="about-more-link" href="/en/articles/">View more ↗</Link>
        </div>
      </section>

      <section className="about-content" id="contact">
        <div className="about-contact">
          <p className="eyebrow">WORK WITH ME</p>
          <h2>Let’s Talk</h2>
          <p className="placeholder-copy">AI-native &amp; GEO · Brand &amp; cross-cultural marketing · Arts, culture &amp; communities · Interdisciplinary projects</p>
          <a href="mailto:mail@finikz.com">Email: mail@finikz.com</a>
          <a href="https://finikz.com/" target="_blank" rel="noreferrer">Company website ↗</a>
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

      <SiteFooter locale="en" />
    </main>
  );
}
