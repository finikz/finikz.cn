import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "About｜Finikz",
  description: "张凤鸣 Finikz：企业 AI 与营销战略顾问、跨文化内容创作者。",
};

const workstreams = [
  {
    number: "01",
    title: "企业 AI 与营销战略",
    text: "「智神AI」（Pallas AI）联合创办人，面向企业提供 AI 落地与营销战略顾问服务。此前联合创办的内容营销公司服务过腾讯集团公关、中国国际投洽会等客户；跨境电商操盘出过亚马逊品类前 10 爆品；运营过百万粉丝账号，曾三个月为新媒体矩阵净增 30 万粉丝。",
  },
  {
    number: "02",
    title: "跨文化内容创作",
    text: "上海西岸美术馆 × 法国蓬皮杜中心合作项目翻译，经手《康定斯基》《万物的声音》《巴黎建筑》等大展及画册。曾在法资贸易企业工作多年，长期处理中、英、法三种语言之间的商业传播与机构文本，翻译过十几本书，指导多个品牌（包括潮玩和个人品牌）的内容输出。此前任「奇遇电影」主笔期间写过多篇 10万+，为南都《风尚周报》撰过专栏。",
    href: "/works",
  },
  {
    number: "03",
    title: "组织与社群",
    text: "中山大学广州校友会常务副秘书长（主管宣传工作）；精酿文化空间「九维精酿」和艺术团体「九维艺术联盟」的联合创始人。曾创办「酒窝」live house，举办过五条人、玩具船长等乐队的演出。",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteNav active="about" />

      <header className="page-hero about-hero">
        <p className="eyebrow">ABOUT / FINIKZ</p>
        <h1>张凤鸣<br /><em>Finikz</em></h1>
        <p><strong>AI 与营销战略顾问 ｜ 跨文化内容创作者</strong><br />中山大学法语系毕业，用中英法三种语言工作，在文化、商业与技术的交界处做判断。</p>
      </header>

      <section className="about-workstreams" aria-labelledby="workstreams-title">
        <div className="about-section-label"><p className="eyebrow">WORKSTREAMS</p><h2 id="workstreams-title">工作主线</h2></div>
        <div className="about-stream-list">
          {workstreams.map((item) => (
            <article className="about-stream" key={item.number}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p>{item.href && <a className="work-link" href={item.href}>我的译作 ↗</a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-content">
        <div>
          <p className="eyebrow">STRENGTH</p>
          <h2>我的擅长</h2>
          <p className="placeholder-copy">把文化判断、商业策略、内容表达和 AI 工具，组合成可以长期复利的系统。</p>
        </div>
        <div className="about-contact">
          <p className="eyebrow">WORK WITH ME</p>
          <h2>欢迎合作</h2>
          <p className="placeholder-copy">企业 AI 与营销战略咨询 ／ 品牌出海与跨文化内容 ／ 文化艺术类翻译 ／ 有意思的跨界项目</p>
          <a href="mailto:mail@finikz.com">邮箱　mail@finikz.com ↗</a>
          <div className="social-links">
            <a href="https://mp.weixin.qq.com/mp/qrcode?scene=10000005&amp;size=102&amp;__biz=MjM5MzU0OTgyMw==&amp;mid=2652370389&amp;idx=1&amp;sn=f8a4a7adf5aee2d4d476fe52750ef66d&amp;send_time=" target="_blank" rel="noreferrer"><i className="social-icon wechat">微</i>微信公众号：非你可思 ↗</a>
            <a href="https://www.douban.com/people/phoenixZ/" target="_blank" rel="noreferrer"><i className="social-icon douban">豆</i>豆瓣 ↗</a>
            <a href="https://instagram.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon instagram">◎</i>Instagram ↗</a>
            <a href="https://twitter.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon x">𝕏</i>X / Twitter ↗</a>
            <a href="http://www.weibo.com/finikz" target="_blank" rel="noreferrer"><i className="social-icon weibo">博</i>微博 ↗</a>
            <a href="https://www.linkedin.com/in/finikz" target="_blank" rel="noreferrer"><i className="social-icon linkedin">in</i>LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer><p>© FINIKZ</p><p>AI · STRATEGY · CULTURE</p></footer>
    </main>
  );
}
