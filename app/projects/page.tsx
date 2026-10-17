import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { workstreams } from "@/lib/workstreams";

export const metadata: Metadata = pageMetadata({
  locale: "zh",
  path: "/projects/",
  title: "工作主线｜Finikz 张凤鸣",
  description: "张凤鸣的 AI Native 企业构建、营销战略与跨文化内容工作。",
});

// Same three pillars and experience as the homepage "Workstreams & Experience" section.
const work = workstreams.zh.pillars.map((pillar, index) => ({
  no: `0${index + 1}`,
  title: pillar.title,
  text: `${pillar.services}。${pillar.points.join(" ")}`,
  link: index === 2 ? "/works/" : undefined,
}));

export default function ProjectsPage() {
  return (
    <main className="projects-page" lang="zh-CN">
      <SiteNav path="/projects/" />
      <header className="page-hero"><p className="eyebrow">WORK / IN PRACTICE</p><h1>让经验<br /><em>成为系统。</em></h1><p>AI Native 与 GEO、品牌与跨文化营销、文化艺术与组织社群，不是彼此割裂的服务，而是从判断到执行的一套长期能力。</p></header>
      <section className="project-list">{work.map((item) => <article className="project-row" key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.text}{item.link && <> <a className="work-link" href={item.link}>我的译作 ↗</a></>}</p><b>WORKSTREAM</b></article>)}</section>
      <SiteFooter />
    </main>
  );
}
