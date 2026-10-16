import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { englishWorks } from "@/lib/works";

const workstreams = [
  {
    title: "Enterprise AI & Marketing Strategy",
    points: [
      "Co-founded Pallas AI, advising businesses on practical AI adoption and marketing strategy.",
      "Co-founded a content marketing company whose clients included Tencent Group Communications and the China International Fair for Investment & Trade.",
      "Brought a cross-border e-commerce product into the top ten in its Amazon category.",
      "Managed accounts with more than one million followers; helped a new-media network gain 300,000 followers in three months.",
    ],
  },
  {
    title: "Cross-Cultural Content",
    points: [
      "Translated exhibitions and catalogues for the West Bund Museum × Centre Pompidou project, including Kandinsky, The Voice of Things and Paris Architecture.",
      "Several years at a French trading company, handling business communications and institutional writing across Chinese, English and French.",
      "Translated more than a dozen books and shaped editorial content for brands, including designer-toy and personal brands.",
      "Lead writer at Qiyu Film, where several articles drew more than 100,000 views; also a columnist for Fengshang Weekly.",
    ],
  },
  {
    title: "Organizations & Communities",
    points: [
      "Deputy Secretary-General of the Guangzhou Alumni Association of Sun Yat-sen University, overseeing communications.",
      "Winner of Sun Yat-sen University’s inaugural English Singing Competition; top-ten finalist in the 20th Venus Campus Singing Competition.",
      "Co-founded Jumpwire Craft Beer and the Jumpwire Art Alliance.",
      "Founded Jiǔwō, a live-music venue that hosted bands including Wutiaoren and Toy Captain.",
    ],
  },
];

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
          <p><strong>AI &amp; Marketing Strategy Consultant | Cross-Cultural Content Creator</strong><br />With a degree in French from Sun Yat-sen University, I work across Chinese, English and French, bringing together AI, cultural insight, business strategy and editorial craft to build systems that compound over time.</p>
        </div>
        <aside className="hero-meta">Enterprise AI &amp; Marketing Strategy<br />Cross-Cultural Content &amp; Chinese-English-French Translation<br />Deputy Secretary-General, SYSU Guangzhou Alumni Association<br />Co-founder, Jumpwire Craft Beer &amp; Jumpwire Art Alliance</aside>
      </header>

      <section className="about-workstreams" aria-labelledby="en-workstreams-title">
        <div className="about-section-label"><p className="eyebrow">FOCUS AREAS</p><h2 id="en-workstreams-title">What I Do</h2></div>
        <div className="about-stream-list">
          {workstreams.map((item) => (
            <article className="about-stream" key={item.title}>
              <div><h3>{item.title}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-showcase about-translations" aria-labelledby="en-translations-title">
        <div className="about-section-label"><p className="eyebrow">BOOK TRANSLATIONS</p><h2 id="en-translations-title">Selected Translations</h2></div>
        <div className="about-showcase-content">
          <div className="about-work-cards">
            {trilogyWorks.map((work) => <article className="about-work-card" key={work.url}>
              <a className="about-work-cover" href={work.url} target="_blank" rel="noreferrer">
                <Image src={work.cover} alt={`${work.englishTitle} Chinese edition cover`} fill sizes="(max-width: 720px) 30vw, 220px" />
              </a>
              <h3><a href={work.url} target="_blank" rel="noreferrer">{work.englishTitle}</a></h3>
              {work.originalTitle && <p className="work-original-title">{work.originalTitle}</p>}
            </article>)}
          </div>
          <Link className="about-more-link" href="/en/works">View all translations ↗</Link>
        </div>
      </section>

      <section className="about-showcase about-writing" aria-labelledby="en-writing-title">
        <div className="about-section-label"><p className="eyebrow">CHINESE-LANGUAGE WRITING</p><h2 id="en-writing-title">Selected Writing</h2></div>
        <div className="about-showcase-content">
          <div className="about-writing-list"><div className="about-writing-note"><p>Essays on AI adoption, culture and translation—and on the systems that connect them. A selection of pieces in English.</p></div></div>
          <Link className="about-more-link" href="/en/articles/">Read the articles ↗</Link>
        </div>
      </section>

      <section className="about-content" id="contact">
        <div className="about-contact">
          <p className="eyebrow">WORK WITH ME</p>
          <h2>Let’s Talk</h2>
          <p className="placeholder-copy">Enterprise AI and marketing strategy · Global brand development and cross-cultural content · Arts and cultural translation · Interdisciplinary projects</p>
          <a href="mailto:mail@finikz.com">Email: mail@finikz.com</a>
          <a href="https://finikz.com/" target="_blank" rel="noreferrer">Company website ↗</a>
          <div className="social-links">
            <a href="https://mp.weixin.qq.com/mp/qrcode?scene=10000005&amp;size=102&amp;__biz=MjM5MzU0OTgyMw==&amp;mid=2652370389&amp;idx=1&amp;sn=f8a4a7adf5aee2d4d476fe52750ef66d&amp;send_time=" target="_blank" rel="noreferrer"><i className="social-icon wechat">W</i>Wechat Official Acount</a>
            <a href="https://www.douban.com/people/phoenixZ/" target="_blank" rel="noreferrer"><i className="social-icon douban">D</i>Douban</a>
            <a href="https://instagram.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon instagram">◎</i>Instagram</a>
            <a href="https://twitter.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon x">𝕏</i>X / Twitter</a>
            <a href="http://www.weibo.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon weibo">W</i>Weibo</a>
            <a href="https://www.linkedin.com/in/finikz" target="_blank" rel="noreferrer"><i className="social-icon linkedin">in</i>LinkedIn</a>
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
