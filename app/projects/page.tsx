import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = { title: "Work｜Finikz", description: "张凤鸣的企业 AI、营销战略与跨文化内容工作。" };

const work = [
  { no: "01", title: "企业 AI 与营销战略", text: "“智神AI”（Pallas AI）联合创办人，面向企业提供 AI 落地与营销战略顾问服务。此前联合创办的内容营销公司服务过腾讯集团公关、中国国际投洽会等客户；跨境电商操盘出过亚马逊品类前 10 爆品；运营过百万粉丝账号，曾三个月为新媒体矩阵净增 30 万粉丝。" },
  { no: "02", title: "跨文化内容创作", text: "上海西岸美术馆 × 法国蓬皮杜中心合作项目翻译，经手《康定斯基》《万物的声音》《巴黎建筑》等大展及画册。曾在法资贸易企业工作多年，长期处理中、英、法三种语言之间的商业传播与机构文本，翻译过十几本书，指导多个品牌（包括潮玩和个人品牌）的内容输出。此前任「奇遇电影」主笔期间写过多篇 10万+，为南都《风尚周报》撰过专栏。", link: "/works" },
  { no: "03", title: "组织与社群", text: "中山大学广州校友会常务副秘书长（主管宣传工作）；精酿文化空间「九维精酿」和艺术团体「九维艺术联盟」的联合创始人。曾创办「酒窝」live house，举办过五条人、玩具船长等乐队的演出。" },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <SiteNav />
      <header className="page-hero"><p className="eyebrow">WORK / IN PRACTICE</p><h1>让经验<br /><em>成为系统。</em></h1><p>企业 AI、营销战略与内容工作，不是彼此割裂的服务，而是从判断到执行的一套长期能力。</p></header>
      <section className="project-list">{work.map((item) => <article className="project-row" key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.text}{item.link && <> <a className="work-link" href={item.link}>我的译作 ↗</a></>}</p><b>WORKSTREAM</b></article>)}</section>
      <SiteFooter />
    </main>
  );
}
