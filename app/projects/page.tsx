import type { Metadata } from "next";

export const metadata: Metadata = { title: "项目｜Finikz", description: "Finikz 的企业 AI、内容策略与个人品牌项目。" };

const projects = [
  { no: "01", title: "企业 AI 落地", text: "从销售获客与实际业务流程出发，帮助团队识别值得投入的 AI 场景，建立能被日常工作吸收的应用路径。" },
  { no: "02", title: "内容与个人品牌", text: "把经验、专业与长期判断组织为可以持续输出的内容系统，让个人品牌不止依赖单次表达。" },
  { no: "03", title: "项目档案", text: "具体合作项目、服务方式与案例正在整理中，后续将在此补充。" },
];

export default function ProjectsPage() {
  return <main className="projects-page"><nav className="nav" aria-label="主导航"><a className="brand" href="/">FINIK<span className="brand-dot">Z</span><small>张凤鸣 / PERSONAL STUDIO</small></a><div className="nav-links"><a href="/">首页</a><a href="/works">译作</a><a href="/projects">项目</a><a href="/articles">文章</a><a href="/about">关于</a></div></nav><header className="page-hero"><p className="eyebrow">PROJECTS / IN PRACTICE</p><h1>把想法<br /><em>放进现实。</em></h1><p>项目不是把概念说得更大，而是让技术、内容与人的判断，真正进入一段可持续的工作流程。</p></header><section className="project-list">{projects.map((project) => <article className="project-row" key={project.no}><span>{project.no}</span><h2>{project.title}</h2><p>{project.text}</p><b>{project.no === "03" ? "待补充" : "进行中"}</b></article>)}</section><footer><p>© FINIKZ</p><p>翻译 · AI · 内容系统</p><a href="mailto:hello@finikz.cn">HELLO@FINIKZ.CN ↗</a></footer></main>;
}
