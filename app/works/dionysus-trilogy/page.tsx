import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "酒神三部曲｜Finikz 翻译作品", description: "Finikz 译《风土之诗》《麦芽之歌》《自由之水》，广东人民出版社，2026。" };

const books = [
  { no: "I", title: "风土之诗", original: "Une autre histoire du vin", author: "皮埃尔·吉吉 / 索菲·布里索", color: "wine", note: "从土地、气候与人的手艺出发，重读一杯酒如何拥有自己的来处。" },
  { no: "II", title: "麦芽之歌", original: "La bière dans tous ses états", author: "吉雷克·奥贝尔", color: "malt", note: "沿着麦芽、酵母与时间，进入啤酒背后更辽阔的感官世界。" },
  { no: "III", title: "自由之水", original: "Rhum au long cours", author: "克里斯托夫·吉塔尔", color: "water", note: "一部关于朗姆酒、航路与自由想象的文化漫游。" },
];

export default function DionysusTrilogyPage() {
  return <main className="trilogy-page"><nav className="nav"><Link className="brand" href="/">FINIKZ</Link><Link className="back-link" href="/works">← 返回作品</Link></nav><header className="trilogy-hero"><p className="eyebrow"><span /> TRANSLATION PROJECT · 2026</p><p className="trilogy-kicker">广东人民出版社</p><h1>酒神<br /><em>三部曲</em></h1><div className="trilogy-intro"><p>三册法语译作，以酒为线索，却不止于酒：它们谈风土、工艺、旅行与自由，也谈人如何在感官中重新理解世界。</p><p>译者：张凤鸣 / Finikz</p></div></header><section className="book-shelf" aria-label="酒神三部曲书目">{books.map((book) => <article className="book-entry" key={book.no}><div className={`book-cover ${book.color}`}><span>{book.no}</span><p>{book.original}</p><h2>{book.title}</h2><i>FINIKZ 译</i></div><div className="book-copy"><p className="book-index">VOLUME {book.no} / 2026</p><h2>{book.title}</h2><p className="book-author">[法] {book.author}</p><p>{book.note}</p><p className="book-publisher">广东人民出版社</p></div></article>)}</section><section className="trilogy-statement"><p>译者的工作，不只是把一门语言换成另一门语言；更是在保留质地、节奏与世界观的同时，为中文读者重新打开一种感受的方式。</p><span>张凤鸣 / Finikz</span></section><SiteFooter /></main>;
}
