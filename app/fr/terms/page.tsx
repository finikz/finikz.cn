import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/terms/",
  title: "Conditions d’utilisation | Finikz",
  description: "Conditions applicables à l'accès et à l'utilisation de finikz.cn.",
});

export default function FrenchTermsPage() {
  return (
    <main className="legal-page french-page" lang="fr">
      <SiteNav locale="fr" path="/terms/" />
      <article className="legal-content">
        <header><p className="eyebrow">CONDITIONS D'UTILISATION</p><h1>Conditions d'utilisation</h1><p>Dernière mise à jour : 18 août 2026</p></header>
        <p>Bienvenue sur finikz.cn. En poursuivant votre navigation ou votre utilisation du Site, vous acceptez les conditions suivantes.</p>

        <h2>1. Objet du Site</h2>
        <p>Le Site publie des articles, des traductions, des projets et des informations sur Finikz. Son contenu est fourni à titre d'information générale, d'échange culturel et de référence ; il ne constitue pas un conseil juridique, financier, médical ou tout autre conseil professionnel.</p>

        <h2>2. Propriété intellectuelle</h2>
        <p>Sauf indication contraire, les textes originaux, la mise en page et les créations visuelles originales du Site appartiennent à leur auteur ou à leurs ayants droit. Toute reproduction massive, republication, adaptation ou utilisation commerciale sans autorisation est interdite. Toute citation raisonnable doit mentionner l'auteur et renvoyer vers le Site.</p>

        <h2>3. Contenus de tiers</h2>
        <p>Les droits sur les images, couvertures de livres, documents cinématographiques, marques et autres contenus de tiers cités appartiennent à leurs titulaires respectifs. Ces éléments sont utilisés à des fins de commentaire, de recherche ou d'information. Les ayants droit estimant qu'un contenu est utilisé de manière inappropriée peuvent nous contacter afin que nous l'examinions.</p>

        <h2>4. Liens externes</h2>
        <p>Le Site peut renvoyer vers des sites tiers. Nous ne contrôlons ni leur contenu, ni leur disponibilité, ni leurs pratiques en matière de confidentialité, et ne sommes pas responsables des préjudices causés par ces sites. Veuillez évaluer les risques avant de suivre un lien externe.</p>

        <h2>5. Disponibilité et limitation de responsabilité</h2>
        <p>Nous faisons des efforts raisonnables pour assurer l'exactitude des contenus et la disponibilité du Site, sans garantir que les informations soient toujours complètes, à jour ou exemptes d'erreurs, ni que le service soit ininterrompu. Dans les limites autorisées par la loi applicable, vous assumez la responsabilité des pertes indirectes résultant de votre utilisation du Site ou de l'impossibilité de l'utiliser.</p>

        <h2>6. Modifications des conditions</h2>
        <p>Nous pouvons mettre à jour ces conditions en fonction de l'évolution du Site ou de la réglementation. Toute version révisée entre en vigueur dès sa publication sur cette page.</p>

        <h2>7. Contact</h2>
        <p>Pour toute demande de republication, réclamation relative aux droits ou question sur ces conditions, écrivez-nous à <a href="mailto:mail@finikz.com">mail@finikz.com</a>.</p>
      </article>
      <SiteFooter locale="fr" />
    </main>
  );
}
