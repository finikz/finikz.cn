import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import Workstreams from "@/components/Workstreams";
import { articles } from "@/lib/articles";
import { works } from "@/lib/works";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/",
  title: "关于张凤鸣｜AI Native 与营销战略顾问",
  description: "张凤鸣 Finikz：帮企业建立 AI Native 的战略顾问、跨文化内容创作者。",
});


const trilogyWorks = works.filter((work) => work.group === "酒神三部曲");

type AboutPageContentProps = {
  path?: string;
};

export function AboutPageContent({ path = "/about/" }: AboutPageContentProps) {
  return (
    <main className="about-page" lang="zh-CN">
      <SiteNav active="about" path={path} />

      <header className="page-hero about-hero">
        <div className="about-hero-copy">
          <h1><em>Finikz</em></h1>
          <p><strong>AI Native 与营销战略顾问 ｜ 跨文化内容创作者</strong><br />张凤鸣，中山大学法语系毕业，以中英法三种语言工作，擅长用 AI 把文化洞察、商业策略与内容表达，整合成一套长期复利的系统。</p>
        </div>
        <aside className="hero-meta">AI Native 与 GEO<br />品牌与跨文化营销<br />文化艺术与组织社群<br />中山大学广州校友会常务副秘书长<br />九维精酿-九维艺术联盟联合创办人</aside>
      </header>

      <Workstreams locale="zh" />

      <section className="about-showcase about-translations" aria-labelledby="translations-title">
        <div className="about-section-label"><p className="eyebrow">MY WORKS</p><h2 id="translations-title">我的译作</h2></div>
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
        <div className="about-section-label"><p className="eyebrow">MY WRITING</p><h2 id="writing-title">我的写作</h2></div>
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

      <section className="about-content" id="contact">
        <div className="about-contact">
          <p className="eyebrow">WORK WITH ME</p>
          <h2>欢迎合作</h2>
          <p className="placeholder-copy">AI Native 与 GEO ／ 品牌与跨文化营销 ／ 文化艺术与组织社群 ／ 有意思的跨界项目</p>
          <a href="mailto:mail@finikz.com">邮箱　mail@finikz.com</a>
          <a href="https://finikz.com/" target="_blank" rel="noreferrer">公司网站 ↗</a>
          <div className="social-links">
            <a href="https://mp.weixin.qq.com/mp/qrcode?scene=10000005&amp;size=102&amp;__biz=MjM5MzU0OTgyMw==&amp;mid=2652370389&amp;idx=1&amp;sn=f8a4a7adf5aee2d4d476fe52750ef66d&amp;send_time=" target="_blank" rel="noreferrer"><i className="social-icon wechat">微</i>微信公众号</a>
            <a href="https://www.douban.com/people/phoenixZ/" target="_blank" rel="noreferrer"><i className="social-icon douban">豆</i>豆瓣</a>
            <a href="https://instagram.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon instagram">◎</i>Instagram</a>
            <a href="https://twitter.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon x">𝕏</i>X / Twitter</a>
            <a href="https://www.weibo.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon weibo">博</i>微博</a>
            <a href="https://www.linkedin.com/in/finikz" target="_blank" rel="noreferrer"><i className="social-icon linkedin">in</i>LinkedIn</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export default function AboutPage() {
  return <AboutPageContent />;
}
