import { articles } from "@/lib/articles";
import SiteNav from "@/components/SiteNav";

const practices = [
  { label: "AI & STRATEGY", name: "企业 AI 与营销战略", description: "“智神AI”联合创办人，为企业提供从 AI 落地到营销战略的一体化顾问服务。", href: "/projects" },
  { label: "CROSS-CULTURAL", name: "跨文化内容创作", description: "在中、英、法三种语言与文化语境之间，处理翻译、品牌叙事与长期内容表达。", href: "/works" },
  { label: "COMMUNITY", name: "组织与社群", description: "通过校友会、文化空间与艺术社群，让知识、现场与人产生持续连接。", href: "/projects" },
];

export default function Home() {
  const latest = articles[0];
  return <main className="studio-home" id="top">
    <SiteNav home />
    <section className="studio-hero"><div><p className="kicker">AI, STRATEGY & CULTURE — 2026</p><h1>让判断<br /><em>产生复利</em></h1><p className="studio-intro">Finikz 张凤鸣<br />AI 与营销战略顾问 ｜ 跨文化内容创作者</p></div><aside className="hero-meta">企业 AI 战略咨询 / 营销战略咨询<br />跨文化内容创作 / 中英法三语翻译<br />中山大学广州校友会常务副秘书长<br />九维精酿-九维艺术联盟联合创办人</aside><i className="hero-rule" /></section>
    <section className="studio-work" id="work"><div className="studio-label">SELECTED WORK<strong>工作主线</strong></div><div className="practice-cards">{practices.map((item) => <a className="practice-card" href={item.href} key={item.label}><span>{item.label}</span><h2>{item.name}</h2><p>{item.description}<i className="card-arrow" aria-hidden="true"> ↗</i></p></a>)}</div></section>
    <section className="studio-bottom" id="notes"><div className="studio-label">LATEST NOTES<strong>最近文章</strong></div>{latest && <a className="latest-note" href={`/articles/${latest.slug}`}><span>ESSAY / {latest.date.slice(5).replace("-", ".")}</span><h2>{latest.title}</h2><b>↗</b></a>}<p className="studio-bio"><strong>FINIKZ / 张凤鸣</strong><br />在文化、商业与技术的交界处做判断，把文化判断、商业策略、内容表达和 AI 工具，组合成可以长期复利的系统。<br /><a href="/about">About Finikz ↗</a></p></section>
    <footer><p>© FINIKZ</p><p>AI · STRATEGY · CULTURE</p><a href="mailto:mail@finikz.com">MAIL@FINIKZ.COM ↗</a></footer>
  </main>;
}
