import type { Locale } from "@/lib/i18n";

// The three business pillars are shared with finikz.com (build.py PILLARS); keep titles and service lines in sync.
type Pillar = { title: string; services: string; points: string[] };

type WorkstreamsCopy = {
  eyebrow: string;
  heading: string;
  intro: string;
  companyLink: string;
  companyHref: string;
  pillars: Pillar[];
};

export const workstreams: Record<Locale, WorkstreamsCopy> = {
  zh: {
    eyebrow: "WORKSTREAMS & EXPERIENCE",
    heading: "工作主线与项目经验",
    intro: "以 AI Native 为核心：对内，帮企业按 AI 的方式重建工作；对外，让 AI 认识并推荐你的品牌。",
    companyLink: "公司网站 ↗",
    companyHref: "https://finikz.com/",
    pillars: [
      {
        title: "AI Native 与 GEO",
        services: "AI 原生企业构建 · AI 搜索可见度（GEO）",
        points: [
          "「智神AI」（Pallas AI）联合创办人，帮企业建立 AI Native：不是给旧流程加 AI，而是按 AI 的方式重建工作。",
          "从蓝图规划、经验沉淀，到工作流与智能体搭建、组织与激励设计，把团队经验变成 AI 能用的系统。",
          "通过非你可思提供 AI 搜索可见度（GEO）服务，让品牌在 ChatGPT、豆包、DeepSeek 等 AI 的回答里被找到、被准确引用。",
        ],
      },
      {
        title: "品牌与跨文化营销",
        services: "品牌策略 · 内容运营 · 品牌出海与跨文化市场营销",
        points: [
          "联合创办的内容营销公司服务过腾讯集团公关、中国国际投洽会等客户。",
          "跨境电商操盘出过亚马逊品类前 10 爆品。",
          "运营过百万粉丝账号，曾三个月为新媒体矩阵净增 30 万粉丝。",
          "曾在法资贸易企业工作多年，长期处理中、英、法三种语言之间的商业传播与机构文本。",
          "指导多个品牌（包括潮玩和个人品牌）的内容输出；任「奇遇电影」主笔期间写过多篇 10万+，为南都《风尚周报》撰过专栏。",
        ],
      },
      {
        title: "文化艺术与组织社群",
        services: "中英法翻译项目 · 商业空间运营",
        points: [
          "上海西岸美术馆 × 法国蓬皮杜中心合作项目翻译，经手《康定斯基》《万物的声音》《巴黎建筑》等大展及画册。",
          "翻译过十几本书，包括《风土之诗》《麦芽之歌》《自由之水》酒神三部曲。",
          "精酿文化空间「九维精酿」和艺术团体「九维艺术联盟」的联合创始人；曾创办「酒窝」live house，举办过五条人、玩具船长等乐队的演出。",
          "中山大学广州校友会常务副秘书长，主管宣传工作。",
          "中山大学首届英文歌大赛冠军，20届维纳斯校园歌手大赛十强。",
        ],
      },
    ],
  },
  en: {
    eyebrow: "WORKSTREAMS & EXPERIENCE",
    heading: "Workstreams & Experience",
    intro: "AI-native at the core: inside the company, we rebuild work around AI; outside, we make sure AI knows and recommends your brand.",
    companyLink: "Company website ↗",
    companyHref: "https://finikz.com/en/",
    pillars: [
      {
        title: "AI-Native & GEO",
        services: "Building AI-native companies · AI search visibility (GEO)",
        points: [
          "Co-founded Pallas AI, helping companies become AI-native: not bolting AI onto old processes, but rebuilding work around it.",
          "From blueprint and captured expertise to workflows, agents, roles and incentives, turning a team’s know-how into systems AI can use.",
          "Through Finikz Culture & Technology, helps brands get found and cited accurately in answers from ChatGPT, Perplexity, DeepSeek and other AI assistants.",
        ],
      },
      {
        title: "Brand & Cross-Cultural Marketing",
        services: "Brand strategy · Content operations · Global expansion & cross-cultural marketing",
        points: [
          "Co-founded a content marketing company whose clients included Tencent Group Communications and the China International Fair for Investment & Trade.",
          "Brought a cross-border e-commerce product into the top ten in its Amazon category.",
          "Managed accounts with more than one million followers; helped a new-media network gain 300,000 followers in three months.",
          "Several years at a French trading company, handling business communications and institutional writing across Chinese, English and French.",
          "Shaped editorial content for brands, including designer-toy and personal brands; as lead writer at Qiyu Film, wrote several articles with more than 100,000 views, and was a columnist for Fengshang Weekly.",
        ],
      },
      {
        title: "Arts, Culture & Communities",
        services: "Chinese-English-French translation · Running cultural venues",
        points: [
          "Translated exhibitions and catalogues for the West Bund Museum × Centre Pompidou project, including Kandinsky, The Voice of Things and Paris Architecture.",
          "Translated more than a dozen books, including the Dionysian Trilogy on wine, beer and rum.",
          "Co-founded Jumpwire Craft Beer and the Jumpwire Art Alliance; founded Jiǔwō, a live-music venue that hosted bands including Wutiaoren and Toy Captain.",
          "Deputy Secretary-General of the Guangzhou Alumni Association of Sun Yat-sen University, overseeing communications.",
          "Winner of Sun Yat-sen University’s inaugural English Singing Competition; top-ten finalist in the 20th Venus Campus Singing Competition.",
        ],
      },
    ],
  },
  fr: {
    eyebrow: "ACTIVITÉS ET EXPÉRIENCE",
    heading: "Activités et expérience",
    intro: "L’AI-native au cœur de tout : en interne, repenser le travail autour de l’IA ; à l’externe, faire en sorte que l’IA connaisse et recommande votre marque.",
    companyLink: "Site de l’entreprise ↗",
    companyHref: "https://finikz.com/fr/",
    pillars: [
      {
        title: "AI-native et GEO",
        services: "Bâtir l’entreprise AI-native · Visibilité dans la recherche IA (GEO)",
        points: [
          "Cofondateur de Pallas AI ; j’aide les entreprises à devenir AI-native : non pas greffer l’IA sur d’anciens processus, mais reconstruire le travail autour d’elle.",
          "De la feuille de route au savoir-faire capitalisé, des workflows et agents aux rôles et incitations : transformer l’expérience d’une équipe en systèmes exploitables par l’IA.",
          "Avec Finikz Culture & Technology, faire en sorte que les marques soient trouvées et citées avec justesse dans les réponses de ChatGPT, Perplexity, DeepSeek et d’autres assistants IA.",
        ],
      },
      {
        title: "Marque et marketing interculturel",
        services: "Stratégie de marque · Animation de contenus · Développement international et marketing interculturel",
        points: [
          "Cofondateur d’une agence de marketing de contenu, qui comptait parmi ses clients Tencent Group Communications et la Foire internationale de l’investissement et du commerce de Chine.",
          "Produit de commerce transfrontalier classé dans le top 10 de sa catégorie sur Amazon.",
          "Pilotage de comptes suivis par plus d’un million d’abonnés ; contribution à la croissance d’un réseau de médias (+300 000 abonnés en trois mois).",
          "Plusieurs années au sein d’une société de négoce française, en charge de la communication commerciale et de la rédaction institutionnelle en chinois, anglais et français.",
          "Accompagnement éditorial de marques, notamment dans l’univers du jouet de créateur et des marques personnelles ; rédacteur en chef chez Qiyu Film, avec plusieurs articles au-delà de 100 000 vues, et chroniqueur pour Fengshang Weekly.",
        ],
      },
      {
        title: "Culture, arts et communautés",
        services: "Traduction chinois-anglais-français · Gestion de lieux culturels",
        points: [
          "Traduction d’expositions et de catalogues pour le projet du West Bund Museum × Centre Pompidou, notamment autour de Kandinsky, de La Voix des choses et de l’architecture parisienne.",
          "Plus d’une dizaine de livres traduits, dont la trilogie dionysiaque consacrée au vin, à la bière et au rhum.",
          "Cofondateur de Jumpwire Craft Beer et de l’Alliance artistique Jumpwire ; fondateur de la salle de concert Jiǔwō, qui a accueilli des groupes comme Wutiaoren et Toy Captain.",
          "Secrétaire général adjoint de l’Association des anciens élèves de l’Université Sun Yat-sen à Guangzhou, chargé de la communication.",
          "Lauréat du premier concours de chant en anglais de l’Université Sun Yat-sen ; classé parmi les dix premiers du 20e concours de chant Venus du campus.",
        ],
      },
    ],
  },
};
