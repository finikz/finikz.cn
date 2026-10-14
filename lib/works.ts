export type Work = {
  title: string;
  subtitle?: string;
  year: string;
  author: string;
  publisher: string;
  url: string;
  cover: string;
  group: "酒神三部曲" | "西岸美术馆" | "其他译作";
};

export type EnglishWork = Work & {
  englishTitle: string;
  originalTitle?: string;
  englishAuthor: string;
  englishPublisher: string;
  englishGroup: "The Dionysian Trilogy" | "West Bund Museum" | "Other Translations";
};

export type FrenchWork = Work & {
  frenchTitle: string;
  frenchAuthor: string;
  frenchPublisher: string;
  frenchGroup: "La trilogie dionysiaque" | "Musée West Bund" | "Autres traductions";
};

export const works: Work[] = [
  { title: "风土之诗", subtitle: "葡萄酒简史", year: "2026", author: "[法] 皮埃尔·吉吉、[法] 索菲·布里索", publisher: "广东人民出版社", url: "https://book.douban.com/subject/37661903/", cover: "/works/covers/terroir.jpg", group: "酒神三部曲" },
  { title: "麦芽之歌", subtitle: "啤酒简史", year: "2026", author: "[法] 吉雷克·奥贝尔", publisher: "广东人民出版社", url: "https://book.douban.com/subject/38182735/", cover: "/works/covers/malt.jpg", group: "酒神三部曲" },
  { title: "自由之水", subtitle: "朗姆酒简史", year: "2026", author: "[法] 克里斯托夫·吉塔尔", publisher: "广东人民出版社", url: "https://book.douban.com/subject/38182736/", cover: "/works/covers/rum.jpg", group: "酒神三部曲" },
  { title: "抽象艺术先驱", subtitle: "康定斯基", year: "2021", author: "西岸美术馆、蓬皮杜中心 编", publisher: "上海人民美术出版社", url: "https://book.douban.com/subject/35477045/", cover: "/works/covers/kandinsky.jpg", group: "西岸美术馆" },
  { title: "万物的声音", year: "2021", author: "西岸美术馆、蓬皮杜中心 编", publisher: "上海人民美术出版社", url: "https://book.douban.com/subject/35618278/", cover: "/works/covers/voice-of-things.jpg", group: "西岸美术馆" },
  { title: "本源之画", subtitle: "超现实主义与东方", year: "2023", author: "张凤鸣", publisher: "上海人民出版社", url: "https://book.douban.com/subject/36552511/", cover: "/works/covers/origin.jpg", group: "西岸美术馆" },
  { title: "她们与抽象", year: "2022", author: "张凤鸣", publisher: "上海人民美术出版社", url: "https://book.douban.com/subject/36552512/", cover: "/works/covers/women-abstraction.jpg", group: "西岸美术馆" },
  { title: "旅行者", year: "2012", author: "[法] 阿兰·罗伯-格里耶", publisher: "湖南美术出版社", url: "https://book.douban.com/subject/6831049/", cover: "/works/covers/traveler.jpg", group: "其他译作" },
];

const englishDetails: Record<string, Omit<EnglishWork, keyof Work>> = {
  风土之诗: {
    englishTitle: "Another History of Wine",
    originalTitle: "Une autre histoire du vin",
    englishAuthor: "Pierre Guigui & Sophie Brissaud",
    englishPublisher: "Guangdong People's Publishing House",
    englishGroup: "The Dionysian Trilogy",
  },
  麦芽之歌: {
    englishTitle: "Beer in All Its Forms",
    originalTitle: "La bière dans tous ses états",
    englishAuthor: "Guirec Aubert",
    englishPublisher: "Guangdong People's Publishing House",
    englishGroup: "The Dionysian Trilogy",
  },
  自由之水: {
    englishTitle: "Rum: The Long Voyage",
    originalTitle: "Rhum au long cours",
    englishAuthor: "Christophe Guitard",
    englishPublisher: "Guangdong People's Publishing House",
    englishGroup: "The Dionysian Trilogy",
  },
  抽象艺术先驱: {
    englishTitle: "Kandinsky: The Pioneer of Abstract Art",
    englishAuthor: "West Bund Museum & Centre Pompidou",
    englishPublisher: "Shanghai People's Fine Arts Publishing House",
    englishGroup: "West Bund Museum",
  },
  万物的声音: {
    englishTitle: "The Voice of Things",
    englishAuthor: "West Bund Museum & Centre Pompidou",
    englishPublisher: "Shanghai People's Fine Arts Publishing House",
    englishGroup: "West Bund Museum",
  },
  本源之画: {
    englishTitle: "Painting as Origin: Surrealism and the East",
    englishAuthor: "West Bund Museum & Centre Pompidou",
    englishPublisher: "Shanghai People's Publishing House",
    englishGroup: "West Bund Museum",
  },
  她们与抽象: {
    englishTitle: "Women in Abstraction",
    englishAuthor: "West Bund Museum & Centre Pompidou",
    englishPublisher: "Shanghai People's Fine Arts Publishing House",
    englishGroup: "West Bund Museum",
  },
  旅行者: {
    englishTitle: "Voyageur",
    englishAuthor: "Alain Robbe-Grillet",
    englishPublisher: "Hunan Fine Arts Publishing House",
    englishGroup: "Other Translations",
  },
};

const frenchDetails: Record<string, Omit<FrenchWork, keyof Work>> = {
  风土之诗: {
    frenchTitle: "Une autre histoire du vin",
    frenchAuthor: "Pierre Guigui et Sophie Brissaud",
    frenchPublisher: "Guangdong People's Publishing House",
    frenchGroup: "La trilogie dionysiaque",
  },
  麦芽之歌: {
    frenchTitle: "La bière dans tous ses états",
    frenchAuthor: "Guirec Aubert",
    frenchPublisher: "Guangdong People's Publishing House",
    frenchGroup: "La trilogie dionysiaque",
  },
  自由之水: {
    frenchTitle: "Rhum au long cours",
    frenchAuthor: "Christophe Guitard",
    frenchPublisher: "Guangdong People's Publishing House",
    frenchGroup: "La trilogie dionysiaque",
  },
  抽象艺术先驱: {
    frenchTitle: "Kandinsky, pionnier de l'art abstrait",
    frenchAuthor: "Musée West Bund et Centre Pompidou",
    frenchPublisher: "Shanghai People's Fine Arts Publishing House",
    frenchGroup: "Musée West Bund",
  },
  万物的声音: {
    frenchTitle: "La voix des choses",
    frenchAuthor: "Musée West Bund et Centre Pompidou",
    frenchPublisher: "Shanghai People's Fine Arts Publishing House",
    frenchGroup: "Musée West Bund",
  },
  本源之画: {
    frenchTitle: "Peindre à l'origine : le surréalisme et l'Orient",
    frenchAuthor: "Zhang Fengming",
    frenchPublisher: "Shanghai People's Publishing House",
    frenchGroup: "Musée West Bund",
  },
  她们与抽象: {
    frenchTitle: "Les femmes dans l'abstraction",
    frenchAuthor: "Zhang Fengming",
    frenchPublisher: "Shanghai People's Fine Arts Publishing House",
    frenchGroup: "Musée West Bund",
  },
  旅行者: {
    frenchTitle: "Voyageur",
    frenchAuthor: "Alain Robbe-Grillet",
    frenchPublisher: "Hunan Fine Arts Publishing House",
    frenchGroup: "Autres traductions",
  },
};

export const englishWorks: EnglishWork[] = works.map((work) => ({
  ...work,
  ...englishDetails[work.title],
}));

export const frenchWorks: FrenchWork[] = works.map((work) => ({
  ...work,
  ...frenchDetails[work.title],
}));
