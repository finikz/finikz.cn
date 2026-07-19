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
