import { articles } from "@/lib/articles";

const practices = [
  { no: "01 / TRANSLATION", name: "译作", description: "从文学与艺术，到酒与感官文化；让另一种语言里的作品，在中文中保有它的质地与节奏。", href: "/works" },
  { no: "02 / PROJECT", name: "项目", description: "围绕企业 AI 落地、内容策略与个人品牌，寻找能在真实工作中持续生长的路径。", href: "/projects" },
  { no: "03 / WRITING", name: "文章", description: "从文化、小知识与日常观察出发，为习以为常的事物多留下一个值得讨论的角度。", href: "/articles" },
];

export default function Home() {
  const latest = articles[0];
  return <main className="studio-home" id="top">
    <nav className="nav" aria-label="主导航"><a className="brand" href="#top">FINIK<span className="brand-dot">Z</span><small>张凤鸣 / PERSONAL STUDIO</small></a><div className="nav-links"><a href="#top">首页</a><a href="/works">译作</a><a href="/projects">项目</a><a href="/articles">文章</a><a href="/about">关于</a></div></nav>
    <section className="studio-hero">
      <div><p className="kicker">THINKING, MADE USEFUL — 2026</p><h1>把判断沉淀成<br /><em>可复利的</em>数字资产</h1><p className="studio-intro">Finikz，张凤鸣。译者、企业 AI 落地顾问与个人品牌操盘者。关注技术如何进入真实的工作与生活，也持续把复杂经验整理成可理解、可使用、可传递的内容系统。</p></div>
      <aside className="hero-meta">翻译 / 企业 AI 落地<br />内容策略 / 知识系统<br />个人品牌 / 长期主义</aside>
      <div className="seal"><span>EST.<br />2016</span><b>凤鸣</b><span>FINIKZ<br />STUDIO</span></div><i className="hero-rule" />
    </section>
    <section className="studio-work" id="work"><div className="studio-label">SELECTED PRACTICE<strong>正在做的事</strong></div><div className="practice-cards">{practices.map((item) => <a className="practice-card" href={item.href} key={item.no}><span>{item.no}</span><h2>{item.name}</h2><p>{item.description}</p><b>↗</b></a>)}</div></section>
    <section className="studio-bottom" id="about"><div className="studio-label">LATEST NOTES<strong>最近文章</strong></div>{latest && <a className="latest-note" href={`/articles/${latest.slug}`}><span>ESSAY / {latest.date.slice(5).replace("-", ".")}</span><h2>{latest.title}</h2><b>↗</b></a>}<p className="studio-bio"><strong>FINIKZ / 张凤鸣</strong><br />译者、企业 AI 落地顾问与个人品牌操盘者。关注知识如何被组织、经验如何被表达，以及一个人如何用长期的作品建立自己的坐标。<br /><a href="/about">认识 Finikz ↗</a></p></section>
    <footer><p>© FINIKZ / SHANGHAI</p><p>翻译 · AI · 内容系统</p><a href="mailto:hello@finikz.cn">HELLO@FINIKZ.CN ↗</a></footer>
  </main>;
}
