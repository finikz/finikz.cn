import type { Locale } from "@/lib/i18n";

export type ArticleTopic = "ai" | "film-music" | "language" | "culture";
export type ArticleFilterTopic = "all" | ArticleTopic;

export const ARTICLE_TOPICS: readonly ArticleFilterTopic[] = [
  "all",
  "ai",
  "film-music",
  "language",
  "culture",
] as const;

export const TOPIC_LABELS: Record<Locale, Record<ArticleFilterTopic, string>> = {
  zh: {
    all: "全部",
    ai: "AI 与商业",
    "film-music": "电影与音乐",
    language: "法语与语言",
    culture: "酒与文化",
  },
  en: {
    all: "All",
    ai: "AI & Strategy",
    "film-music": "Film & Music",
    language: "Language & French",
    culture: "Wine & Culture",
  },
  fr: {
    all: "Tous",
    ai: "IA & Stratégie",
    "film-music": "Cinéma & Musique",
    language: "Langue & Français",
    culture: "Vin & Culture",
  },
};

const SLUG_TOPIC_OVERRIDES: Partial<Record<string, ArticleTopic>> = {
  // AI & Strategy
  "36865ed81c6b": "ai",
  "c05f4c56beaa": "ai",
  "93a5a90409e6": "ai",
  "bbe907c0110f": "ai",
  "fd6865c8d80f": "ai",
  "8cd1d86a87d8": "ai",
  "091ae5f01ab1": "ai",
  "c4d002b4f31c": "ai",
  "b04991b1d0ca": "ai",
  "055b512d4736": "ai",
  "acd56934b91b": "ai",
  "27f0c8c6dae1": "ai",
  "978cdf3b6532": "ai",
  "33eca3548ecf": "ai",
  "6e6c3178cadf": "ai",
  "6f7035e3c266": "ai",
  "4f3d47f4c972": "ai",
  "be9acf41574b": "ai",
  "6189dd8628da": "ai",
  "e22921c95846": "ai",
  "7136f004bfaa": "ai",
  "6621dfc00c5f": "ai",
  // Language & French
  "5dfa149b2921": "language",
  "41e104038cfa": "language",
  "1400f7c50e6f": "language",
  "e842b210e731": "language",
  "80f9a6fbf456": "language",
  "2a2a1edc5d1c": "language",
  "445b6eafd6b6": "language",
  "8c6b9ea1a6a0": "language",
  "50ba88d77840": "language",
  "a932e3b5b35d": "language",
  "b74283432a27": "language",
  "1b2ad09d6eee": "language",
  "e577c6985fa9": "language",
  "680fb8e404e0": "language",
  // Film & Music
  "1f6948407a46": "film-music",
  "a6d558b95458": "film-music",
  "042f3ec80b38": "film-music",
  "4cacb0cbd471": "film-music",
  "e227821c7a6a": "film-music",
  "0810c1331e2d": "film-music",
  "95fcb7714cea": "film-music",
  "af80c447dfb6": "film-music",
  "8e9e664df994": "film-music",
  "65469c6aa000": "film-music",
  "c173412193df": "film-music",
  "5f1017093ba3": "film-music",
  "d00f5f75e8ff": "film-music",
  "7909a367f9d3": "film-music",
  "946f8271a9e2": "film-music",
  "5cb7c00e5968": "film-music",
  "e54487704840": "film-music",
  "137a85b05e93": "film-music",
  "9222f01ac1f3": "film-music",
  "9462cd622a80": "film-music",
  "be0dd07fdf0d": "film-music",
  "68e3bf1b8e80": "film-music",
  "d3fd90c3ddcf": "film-music",
  "1ac41a1213ca": "film-music",
  "c31c73b94e1e": "film-music",
  "b7ad4d534264": "film-music",
  "60ff05fce5d4": "film-music",
  "b3884ed867b8": "film-music",
  "1ec8fc4b0814": "film-music",
  "31bb98787a25": "film-music",
  "be621b7ddd8e": "film-music",
  "f4ecaea659d3": "film-music",
  "5f01ea7b7e6e": "film-music",
  "5ab3f862909b": "film-music",
  "544c9f6fabd0": "film-music",
  "365a2f73af99": "film-music",
  "dcb54384fd19": "film-music",
  "cf2567976376": "film-music",
  "794fd2c03048": "film-music",
  "172ac4d8e4c9": "film-music",
  "f8ef03b4559b": "film-music",
  "5da199e1a9aa": "film-music",
  // Wine & Culture
  "3f1534f47bff": "culture",
  "561ab84f9dbc": "culture",
  "e4de36488e6f": "culture",
  "0e74bb0c1fdd": "culture",
  "a1ef0edc7170": "culture",
  "a3ecbce90b1b": "culture",
  "0034daddd72b": "culture",
  "d0082581a9a4": "culture",
  "9455d4858822": "culture",
  "e9cc4e062892": "culture",
  "a688929e53fe": "culture",
  "09092067f2bc": "culture",
  "5ed758fecd49": "culture",
  "8d0bfa0f9711": "culture",
  "7e17333a4ec9": "culture",
  "5270675166c5": "culture",
  "edb7456daabf": "culture",
  "a43e38d06dc8": "culture",
  "de66c6464d8a": "culture",
  "9ca96bc76efd": "culture",
  "20aaea8e1002": "culture",
  "64ca27fd4739": "culture",
  "2705294f97e3": "culture",
  "8ed0c668c392": "culture",
};

const AI_PATTERN = /\b(ai|agent|llm|aidc|glm|gpt|claude|openclaw|wiki|saas)\b|人工智能|大模型|知识库|商业|营销|战略|老板|职场/i;
const LANGUAGE_PATTERN = /非法教学|法语|语言|翻译|词典|发音|读错|译错/i;
const FILM_MUSIC_PATTERN = /电影|影迷|音乐|乐队|歌单|专辑|演唱会|香颂|摇滚|蓝调|胶片|片场|票房|好莱坞|披头士|beatles|bowie|dylan|nolan|cinema|film|music/i;

export function classifyArticleTopic(slug: string, title = ""): ArticleTopic {
  const mapped = SLUG_TOPIC_OVERRIDES[slug];
  if (mapped) return mapped;
  if (LANGUAGE_PATTERN.test(title)) return "language";
  if (AI_PATTERN.test(title)) return "ai";
  if (FILM_MUSIC_PATTERN.test(title)) return "film-music";
  return "culture";
}
