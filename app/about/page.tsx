import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { articles } from "@/lib/articles";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Finikz｜非你可思",
  description: "张凤鸣 Finikz：企业 AI 与营销战略顾问、跨文化内容创作者。",
};

const workstreams = [
  {
    number: "01",
    title: "企业 AI 与营销战略",
    points: [
      "「智神AI」（Pallas AI）联合创办人，面向企业提供 AI 落地与营销战略顾问服务。",
      "联合创办的内容营销公司服务过腾讯集团公关、中国国际投洽会等客户；",
      "跨境电商操盘出过亚马逊品类前 10 爆品；",
      "运营过百万粉丝账号，曾三个月为新媒体矩阵净增 30 万粉丝。",
    ],
  },
  {
    number: "02",
    title: "跨文化内容创作",
    points: [
      "上海西岸美术馆 × 法国蓬皮杜中心合作项目翻译，经手《康定斯基》《万物的声音》《巴黎建筑》等大展及画册。",
      "曾在法资贸易企业工作多年，长期处理中、英、法三种语言之间的商业传播与机构文本。",
      "翻译过十几本书，指导多个品牌（包括潮玩和个人品牌）的内容输出。",
      "此前任「奇遇电影」主笔期间写过多篇 10万+，为南都《风尚周报》撰过专栏。",
    ],
    href: "/works",
  },
  {
    number: "03",
    title: "组织与社群",
    points: [
      "中山大学广州校友会常务副秘书长，主管宣传工作。",
      "精酿文化空间「九维精酿」和艺术团体「九维艺术联盟」的联合创始人。",
      "曾创办「酒窝」live house，举办过五条人、玩具船长等乐队的演出。",
    ],
  },
];

const trilogyWorks = works.filter((work) => work.group === "酒神三部曲");

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteNav active="about" />

      <header className="page-hero about-hero">
        <div className="about-hero-copy">
          <h1><em>Finikz</em></h1>
          <p><strong>AI 与营销战略顾问 ｜ 跨文化内容创作者</strong><br />张凤鸣，中山大学法语系毕业，以中英法三种语言工作，擅长用 AI 把文化洞察、商业策略与内容表达，整合成一套长期复利的系统。</p>
        </div>
        <aside className="hero-meta">企业 AI 战略咨询 / 营销战略咨询<br />跨文化内容创作 / 中英法三语翻译<br />中山大学广州校友会常务副秘书长<br />九维精酿-九维艺术联盟联合创办人</aside>
      </header>

      <section className="about-workstreams" aria-labelledby="workstreams-title">
        <div className="about-section-label"><p className="eyebrow">WORKSTREAMS</p><h2 id="workstreams-title">工作主线</h2></div>
        <div className="about-stream-list">
          {workstreams.map((item) => (
            <article className="about-stream" key={item.number}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>{item.href && <Link className="work-link" href={item.href}>我的译作 ↗</Link>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-showcase about-translations" aria-labelledby="translations-title">
        <div className="about-section-label"><p className="eyebrow">SELECTED TRANSLATIONS</p><h2 id="translations-title">我的译作</h2></div>
        <div className="about-showcase-content">
          <div className="about-work-cards">
            {trilogyWorks.map((work) => <article className="about-work-card" key={work.url}>
              <a className="about-work-cover" href={work.url} target="_blank" rel="noreferrer">
                <Image src={work.cover} alt={`《${work.title}${work.subtitle ? `：${work.subtitle}` : ""}》封面`} fill sizes="(max-width: 720px) 42vw, 220px" />
              </a>
              <h3><a href={work.url} target="_blank" rel="noreferrer">《{work.title}{work.subtitle ? `：${work.subtitle}` : ""}》</a></h3>
            </article>)}
          </div>
          <Link className="about-more-link" href="/works">查看更多 ↗</Link>
        </div>
      </section>

      <section className="about-showcase about-writing" aria-labelledby="writing-title">
        <div className="about-section-label"><p className="eyebrow">SELECTED WRITING</p><h2 id="writing-title">我的写作</h2></div>
        <div className="about-showcase-content">
          <div className="about-writing-list">
            {articles.slice(0, 3).map((article) => <Link className="about-writing-item" href={`/articles/${article.slug}`} key={article.slug}>
              <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
              <h3>{article.title}</h3>
              <span aria-hidden="true">↗</span>
            </Link>)}
          </div>
          <Link className="about-more-link" href="/articles">查看更多 ↗</Link>
        </div>
      </section>

      <section className="about-content">
        <div className="about-contact">
          <p className="eyebrow">WORK WITH ME</p>
          <h2>欢迎合作</h2>
          <p className="placeholder-copy">企业 AI 与营销战略咨询 ／ 品牌出海与跨文化内容 ／ 文化艺术类翻译 ／ 有意思的跨界项目</p>
          <a href="mailto:mail@finikz.com">邮箱　mail@finikz.com</a>
          <div className="social-links">
            <a href="https://mp.weixin.qq.com/mp/qrcode?scene=10000005&amp;size=102&amp;__biz=MjM5MzU0OTgyMw==&amp;mid=2652370389&amp;idx=1&amp;sn=f8a4a7adf5aee2d4d476fe52750ef66d&amp;send_time=" target="_blank" rel="noreferrer"><i className="social-icon wechat">微</i>微信公众号：非你可思</a>
            <a href="https://www.douban.com/people/phoenixZ/" target="_blank" rel="noreferrer"><i className="social-icon douban">豆</i>豆瓣</a>
            <a href="https://instagram.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon instagram">◎</i>Instagram</a>
            <a href="https://twitter.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon x">𝕏</i>X / Twitter</a>
            <a href="http://www.weibo.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon weibo">博</i>微博</a>
            <a href="https://www.linkedin.com/in/finikz" target="_blank" rel="noreferrer"><i className="social-icon linkedin">in</i>LinkedIn</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
