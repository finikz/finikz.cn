import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguagePreference";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "La trilogie dionysiaque | Traductions de Finikz",
  description: "Trois livres français sur le vin, la bière et le rhum, traduits en chinois par Zhang Fengming (Finikz) et publiés en 2026.",
  alternates: {
    canonical: "/fr/works/dionysus-trilogy/",
    languages: { "zh-CN": "/works/dionysus-trilogy/", en: "/en/works/dionysus-trilogy/", fr: "/fr/works/dionysus-trilogy/" },
  },
};

const books = [
  { no: "I", title: "Une autre histoire du vin", author: "Pierre Guigui et Sophie Brissaud", cover: "/works/covers/terroir.jpg", note: "Un voyage à travers les terroirs, les climats et le savoir-faire humain, pour comprendre comment un verre de vin acquiert son caractère." },
  { no: "II", title: "La bière dans tous ses états", author: "Guirec Aubert", cover: "/works/covers/malt.jpg", note: "Le malt, la levure et le temps ouvrent sur un univers sensoriel plus vaste et sur le renouveau contemporain de la culture brassicole." },
  { no: "III", title: "Rhum au long cours", author: "Christophe Guitard", cover: "/works/covers/rum.jpg", note: "Une traversée culturelle du rhum, des routes maritimes et de l'imaginaire durable de la liberté." },
];

export default function FrenchDionysusTrilogyPage() {
  return (
    <main className="trilogy-page french-page" lang="fr">
      <nav className="nav" aria-label="Navigation principale"><Link className="brand" href="/fr/">FINIKZ</Link><div className="nav-links"><Link className="back-link" href="/fr/works/">← Retour aux œuvres</Link><LanguageSwitch locale="fr" path="/works/dionysus-trilogy/" /></div></nav>
      <header className="trilogy-hero"><p className="eyebrow">PROJET DE TRADUCTION · 2026</p><p className="trilogy-kicker">Guangdong People's Publishing House</p><h1>La trilogie<br /><em>dionysiaque</em></h1><div className="trilogy-intro"><p>Trois livres traduits en chinois, où le vin et les spiritueux ouvrent une réflexion sur le terroir, le savoir-faire, le voyage et la liberté — et sur la façon dont les sens nous aident à comprendre le monde.</p><p>Traduction chinoise : Zhang Fengming / Finikz</p></div></header>
      <section className="book-shelf" aria-label="Les livres de la trilogie dionysiaque">{books.map((book) => <article className="book-entry" key={book.no}><div className="book-cover"><Image className="book-cover-image" src={book.cover} alt={`Couverture de l'édition chinoise : ${book.title}`} fill sizes="(max-width: 720px) 220px, 260px" /></div><div className="book-copy"><p className="book-index">VOLUME {book.no} / 2026</p><h2>{book.title}</h2><p className="book-author">{book.author}</p><p>{book.note}</p><p className="book-publisher">Guangdong People's Publishing House</p></div></article>)}</section>
      <section className="trilogy-statement"><p>Traduire, ce n'est pas remplacer une langue par une autre. C'est préserver la matière, le rythme et la vision du monde d'une œuvre, tout en ouvrant aux lecteurs chinois une nouvelle manière de la ressentir.</p><span>Zhang Fengming / Finikz</span></section>
      <SiteFooter locale="fr" />
    </main>
  );
}
