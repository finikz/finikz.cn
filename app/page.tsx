const projects = [
  {
    index: "01",
    name: "非你可思",
    type: "PERSONAL SIGNAL",
    description: "从文化、商业与技术的交叉处，记录值得被重新理解的日常信号。",
  },
  {
    index: "02",
    name: "智神AI",
    type: "AI STRATEGY",
    description: "为已经意识到 AI 重要的团队，先筛选真正值得开始的业务问题。",
  },
  {
    index: "03",
    name: "译作与项目",
    type: "CROSS-CULTURAL WORK",
    description: "连接语言、审美与现场经验，把复杂内容带到准确而自然的另一种语境。",
  },
];

const notes = [
  ["01", "先判断，再动手：AI 落地不该从工具开始"],
  ["02", "当内容成为一种可复利的工作流"],
  ["03", "翻译不只是换一种语言，而是重建理解"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Finikz 首页">
          FINIKZ<span className="brand-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">作品</a>
          <a href="#about">经历</a>
          <a href="#notes">文章</a>
        </div>
        <span className="nav-index">CN / 01</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> INDEPENDENT PRACTICE · 2026</p>
          <h1>
            把判断沉淀成<br />
            <em>可复利的</em>数字资产。
          </h1>
          <p className="intro">
            我是张凤鸣，Finikz。做翻译、企业 AI 落地咨询与个人品牌运营；也持续搭建一套让内容、经验和方法能够彼此连接的工作系统。
          </p>
          <a className="text-link" href="#work">查看正在发生的实践 <b>↘</b></a>
        </div>
        <div className="signal-field" aria-hidden="true">
          <div className="grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <i className="node node-a" /><i className="node node-b" /><i className="node node-c" />
          <p className="field-label">SIGNAL / JUDGEMENT / SYSTEM</p>
          <p className="field-number">01—03</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="核心能力">
        <p>语言与跨文化表达</p><i />
        <p>AI 业务判断</p><i />
        <p>内容与工作流系统</p>
      </section>

      <section className="work section" id="work">
        <div className="section-heading"><p>SELECTED PRACTICE</p><span>01 / 作品</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.index}>
              <span className="project-index">{project.index}</span>
              <div><p className="project-type">{project.type}</p><h2>{project.name}</h2></div>
              <p className="project-description">{project.description}</p>
              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading"><p>ABOUT THE PRACTICE</p><span>02 / 经历</span></div>
        <div className="about-grid">
          <h2>不把复杂性<br /><em>伪装成简单。</em></h2>
          <div className="about-copy">
            <p>我的优势在信息与判断：三语能力、审美、写作、AI 工具应用，以及一线项目中的观察。它们不是彼此分散的技能，而是一套用来理解问题、设计方案、沉淀方法的工作方式。</p>
            <p>目前，我把重心放在数字产品、跨文化内容和能够长期生长的内容资产上。</p>
            <dl><div><dt>ROLE</dt><dd>翻译者 / AI 顾问 / 内容创作者</dd></div><div><dt>FOCUS</dt><dd>方案、框架、工作流与方法论</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="notes section" id="notes">
        <div className="section-heading"><p>RECENT NOTES</p><span>03 / 文章</span></div>
        <div className="note-list">
          {notes.map(([number, title]) => <a href="#notes" className="note" key={number}><span>{number}</span><h2>{title}</h2><b>READ ↗</b></a>)}
        </div>
      </section>

      <footer>
        <p>FINIKZ / 张凤鸣</p>
        <p>持续接收新的信号。</p>
        <a href="mailto:hello@finikz.cn">HELLO@FINIKZ.CN ↗</a>
      </footer>
    </main>
  );
}
