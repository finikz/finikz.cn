import type { Metadata } from "next";
import Image from "next/image";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "作品｜Finikz 张凤鸣",
  description: "张凤鸣（Finikz）的翻译作品：酒神三部曲及艺术、文学译作。",
};

export default function WorksPage() {
  const groups = ["酒神三部曲", "西岸美术馆", "其他译作"] as const;
  return <main className="works-page">
    <nav className="nav" aria-label="主导航"><a className="brand" href="/">FINIK<span className="brand-dot">Z</span><small>张凤鸣 / PERSONAL STUDIO</small></a><div className="nav-links"><a href="/">首页</a><a href="/works">译作</a><a href="/projects">项目</a><a href="/articles">文章</a><a href="/about">关于</a></div></nav>
    <header className="works-hero"><p className="eyebrow">TRANSLATION / SELECTED WORKS</p><h1>翻译<br /><em>作品</em></h1><p>从文学与艺术，到酒与感官文化。译者的工作，是在另一种语言中保存作品的质地、节奏与思想。</p></header>
    <section className="works-feature"><div><p className="eyebrow">FEATURED PROJECT · 2026</p><h2>酒神三部曲</h2><p>《风土之诗》《麦芽之歌》《自由之水》以葡萄酒、啤酒与朗姆酒为入口，展开关于风土、工艺、旅行与自由的文化漫游。</p><a href="/works/dionysus-trilogy">阅读专题页 ↗</a></div><span>III</span></section>
    <section className="works-grid" aria-label="全部译作"><div className="works-grid-heading"><p className="eyebrow">ALL TRANSLATIONS</p><p>以下作品均由张凤鸣担任译者。点击封面或书名可前往豆瓣书目。</p></div>{groups.map((group) => <section className="work-group" key={group}><h2>{group}</h2><div className="work-cards">{works.filter((work) => work.group === group).map((work) => <article className="work-card" key={work.url}><a className="work-cover" href={work.url} target="_blank" rel="noreferrer"><Image src={work.cover} alt={`《${work.title}》封面`} fill sizes="(max-width: 720px) 42vw, 210px" /></a><div className="work-info"><p>{work.year} / 译者</p><h3><a href={work.url} target="_blank" rel="noreferrer">《{work.title}{work.subtitle ? `：${work.subtitle}` : ""}》</a></h3><span>{work.author}</span><span>{work.publisher}</span>{work.group === "酒神三部曲" && <a className="trilogy-tag" href="/works/dionysus-trilogy">酒神三部曲 ↗</a>}</div></article>)}</div></section>)}</section>
    <footer><p>© FINIKZ</p><p>翻译 · AI · 内容系统</p><a href="https://www.douban.com/people/phoenixZ/works" target="_blank" rel="noreferrer">豆瓣作品页 ↗</a></footer>
  </main>;
}
