import type { Locale } from "@/lib/i18n";

// One service map shared by finikz.cn and finikz.com (build.py SERVICE_MAP); keep the wording in sync.
type ServiceCopy = { title: string; face?: string; body: string; by: string };

type ServiceMapCopy = {
  eyebrow: string;
  heading: string;
  intro: string;
  byLabel: string;
  services: ServiceCopy[];
};

export const serviceMap: Record<Locale, ServiceMapCopy> = {
  zh: {
    eyebrow: "ALL SERVICES",
    heading: "业务全景",
    intro: "以 AI Native 为核心：对内，帮企业按 AI 的方式重建工作；对外，让 AI 认识并推荐你的品牌。",
    byLabel: "承接",
    services: [
      { title: "AI Native 企业构建", face: "对内", body: "不是给旧流程加 AI，而是按 AI 的方式重建工作：蓝图规划、经验沉淀、工作流与智能体搭建、组织与激励设计。", by: "智神AI" },
      { title: "AI 搜索可见度（GEO）", face: "对外", body: "让品牌在 ChatGPT、豆包、DeepSeek 等 AI 的回答里被找到、被准确引用。", by: "非你可思" },
      { title: "品牌策略与内容", body: "定位、内容创作与平台运营，用 AI 原生的流程交付，事实与品味由人把关。", by: "非你可思" },
      { title: "品牌出海与跨文化营销", body: "中英法市场研究、本地化内容与跨文化营销，连接中国品牌与海外市场。", by: "非你可思" },
      { title: "文化艺术翻译", body: "书籍、展览与画册的中英法翻译。", by: "张凤鸣本人" },
    ],
  },
  en: {
    eyebrow: "ALL SERVICES",
    heading: "The Full Picture",
    intro: "AI-native at the core: inside the company, we rebuild work around AI; outside, we make sure AI knows and recommends your brand.",
    byLabel: "Delivered by",
    services: [
      { title: "Building AI-Native Companies", face: "Inside", body: "Not bolting AI onto old processes, but rebuilding work around it: blueprint, captured expertise, workflows and agents, roles and incentives.", by: "Pallas AI" },
      { title: "AI Search Visibility (GEO)", face: "Outside", body: "Get your brand found and cited accurately in answers from ChatGPT, Perplexity, DeepSeek and other AI assistants.", by: "Finikz Culture & Technology" },
      { title: "Brand Strategy & Content", body: "Positioning, content and social channels, delivered through AI-native workflows, with people checking facts and taste.", by: "Finikz Culture & Technology" },
      { title: "Global Brand Expansion & Cross-Cultural Marketing", body: "Market research, localized content and cross-cultural marketing across Chinese, English and French.", by: "Finikz Culture & Technology" },
      { title: "Arts & Culture Translation", body: "Books, exhibitions and catalogues translated across Chinese, English and French.", by: "Zhang Fengming (Finikz)" },
    ],
  },
  fr: {
    eyebrow: "TOUS LES SERVICES",
    heading: "Vue d'ensemble",
    intro: "L'AI-native au cœur de tout : en interne, repenser le travail autour de l'IA ; à l'externe, faire en sorte que l'IA connaisse et recommande votre marque.",
    byLabel: "Assuré par",
    services: [
      { title: "Bâtir l'entreprise AI-native", face: "En interne", body: "Ne pas greffer l'IA sur d'anciens processus, mais reconstruire le travail autour d'elle : feuille de route, savoir-faire capitalisé, workflows et agents, rôles et incitations.", by: "Pallas AI" },
      { title: "Visibilité dans la recherche IA (GEO)", face: "À l'externe", body: "Faire en sorte que votre marque soit trouvée et citée avec justesse dans les réponses de ChatGPT, Perplexity, DeepSeek et d'autres assistants IA.", by: "Finikz Culture & Technology" },
      { title: "Stratégie de marque et contenus", body: "Positionnement, création de contenus et animation des plateformes, avec des processus AI-native et une vérification humaine des faits et du goût.", by: "Finikz Culture & Technology" },
      { title: "Développement international et marketing interculturel", body: "Études de marché, contenus localisés et marketing interculturel en chinois, anglais et français.", by: "Finikz Culture & Technology" },
      { title: "Traduction d'art et de culture", body: "Livres, expositions et catalogues traduits en chinois, anglais et français.", by: "Zhang Fengming (Finikz)" },
    ],
  },
};
