import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguagePreference";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/works/dionysus-trilogy/",
  title: "The Dionysian Trilogy: Wine, Beer & Rum | Translated by Finikz",
  description: "Three French books on wine, beer and rum, translated into Chinese by Finikz and published by Guangdong People's Publishing House in 2026.",
});

const books = [
  { no: "I", title: "Another History of Wine", original: "Une autre histoire du vin", author: "Pierre Guigui & Sophie Brissaud", cover: "/works/covers/terroir.jpg", note: "A journey through land, climate and human craft—and through the many ways a glass of wine acquires a sense of place." },
  { no: "II", title: "Beer in All Its Forms", original: "La bière dans tous ses états", author: "Guirec Aubert", cover: "/works/covers/malt.jpg", note: "Malt, yeast and time open onto a wider sensory world and the contemporary revival of beer culture." },
  { no: "III", title: "Rum: The Long Voyage", original: "Rhum au long cours", author: "Christophe Guitard", cover: "/works/covers/rum.jpg", note: "A cultural voyage through rum, maritime routes and the enduring imagination of freedom." },
];

export default function EnglishDionysusTrilogyPage() {
  return (
    <main className="trilogy-page english-page" lang="en">
      <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/en/">FINIKZ</Link><div className="nav-links"><Link className="back-link" href="/en/works/">← Back to Works</Link><LanguageSwitch locale="en" path="/works/dionysus-trilogy/" /></div></nav>
      <header className="trilogy-hero"><p className="eyebrow"><span /> TRANSLATION PROJECT · 2026</p><p className="trilogy-kicker">Guangdong People’s Publishing House</p><h1>The Dionysian<br /><em>Trilogy</em></h1><div className="trilogy-intro"><p>Three books translated from French, using wine and spirits as a path into terroir, craft, travel and freedom—and into the ways we understand the world through the senses.</p><p>Chinese translation by Zhang Fengming / Finikz</p></div></header>
      <section className="book-shelf" aria-label="Books in The Dionysian Trilogy">{books.map((book) => <article className="book-entry" key={book.no}><div className="book-cover"><Image className="book-cover-image" src={book.cover} alt={`Cover of the Chinese edition of ${book.title}`} fill sizes="(max-width: 720px) 220px, 260px" /></div><div className="book-copy"><p className="book-index">VOLUME {book.no} / 2026</p><h2>{book.title}</h2><p className="book-author">{book.author}</p><p>{book.note}</p><p className="book-publisher">Guangdong People’s Publishing House</p></div></article>)}</section>
      <section className="trilogy-statement"><p>Translation is more than replacing one language with another. It preserves texture, rhythm and worldview while opening a new way of feeling for Chinese readers.</p><span>Zhang Fengming / Finikz</span></section>
      <SiteFooter locale="en" />
    </main>
  );
}
