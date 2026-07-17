import type { Metadata } from "next";

export const metadata: Metadata = { title: "关于｜Finikz", description: "关于译者、企业 AI 落地顾问与个人品牌操盘者 Finikz（张凤鸣）。" };

export default function AboutPage() {
  return <main className="about-page"><nav className="nav" aria-label="主导航"><a className="brand" href="/">FINIK<span className="brand-dot">Z</span><small>张凤鸣 / PERSONAL STUDIO</small></a><div className="nav-links"><a href="/">首页</a><a href="/works">译作</a><a href="/projects">项目</a><a href="/articles">文章</a><a href="/about">关于</a></div></nav><header className="page-hero"><p className="eyebrow">ABOUT / FINIKZ</p><h1>张凤鸣<br /><em>Finikz</em></h1><p>译者、企业 AI 落地顾问与个人品牌操盘者。关注语言、技术与内容如何共同服务于更清晰、更有生命力的表达。</p></header><section className="about-content"><div><p className="eyebrow">PROFILE</p><h2>个人简历</h2><p className="placeholder-copy">完整的职业经历、教育背景、合作项目与服务方式，将在你补充资料后整理于此。</p></div><div className="about-contact"><p className="eyebrow">CONTACT</p><h2>保持联系</h2><a href="mailto:hello@finikz.cn">邮箱　hello@finikz.cn ↗</a><span>微信公众号、微信、LinkedIn 与其他社交平台链接待补充。</span></div></section><footer><p>© FINIKZ / SHANGHAI</p><p>翻译 · AI · 内容系统</p><a href="/works">查看译作 ↗</a></footer></main>;
}
