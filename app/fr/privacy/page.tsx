import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = pageMetadata({
  locale: "fr",
  path: "/privacy/",
  title: "Politique de confidentialité | Finikz",
  description: "Politique de confidentialité et informations sur les cookies de finikz.cn.",
});

export default function FrenchPrivacyPage() {
  return (
    <main className="legal-page french-page" lang="fr">
      <SiteNav locale="fr" path="/privacy/" />
      <article className="legal-content">
        <header><p className="eyebrow">POLITIQUE DE CONFIDENTIALITÉ</p><h1>Confidentialité</h1><p>Dernière mise à jour : 24 août 2026</p></header>
        <p>finikz.cn (le « Site ») est exploité par Zhang Fengming (Finikz). Cette politique précise quelles données de visite peuvent être traitées, dans quel but et quels choix s'offrent à vous.</p>

        <h2>1. Informations traitées</h2>
        <p>Lorsque vous consultez le Site, les services d'hébergement, de sécurité et d'analyse peuvent traiter des données techniques : type de navigateur et d'appareil, heure de visite, page d'origine, pages consultées, événements d'interaction, adresse IP et localisation approximative qui peut en être déduite. Si vous nous contactez par e-mail, nous recevons l'adresse et le contenu du message que vous nous transmettez.</p>

        <h2>2. Google Analytics</h2>
        <p>Le Site utilise Google Analytics 4 (identifiant de mesure : G-WWPWFYB8TE) pour comprendre sa fréquentation et son utilisation. Le script d'analyse se charge à l'ouverture d'une page ; Google traite les données concernées conformément à ses propres règles. Nous utilisons des informations agrégées pour améliorer le Site et ses contenus, sans chercher à vous identifier dans la vie réelle.</p>

        <h2>3. Cookies et stockage local</h2>
        <p>Google Analytics peut utiliser des cookies ou des technologies similaires pour distinguer les visites et mesurer les interactions. Le Site utilise également le stockage local du navigateur pour mémoriser votre choix de langue. Vous pouvez limiter ou supprimer les cookies et les données locales du Site dans les paramètres de votre navigateur.</p>

        <h2>4. Publicité</h2>
        <p>Le Site a actuellement soumis une demande à Google AdSense. Si des publicités sont activées ultérieurement, Google et ses partenaires pourront utiliser des cookies ou des technologies similaires pour afficher, mesurer et améliorer les annonces en fonction des visites. Lorsque la réglementation l'exige, un choix de consentement adapté sera proposé avant l'activation de ces technologies publicitaires.</p>

        <h2>5. Services tiers et liens</h2>
        <p>Le Site est hébergé par GitHub Pages et utilise Cloudflare pour la résolution du nom de domaine, la transmission et la sécurité. Les articles peuvent contenir des liens vers des sites tiers. Dès que vous quittez le Site, le traitement de vos données relève de la politique de confidentialité du service concerné.</p>

        <h2>6. Conservation, sécurité et droits</h2>
        <p>Nous conservons les informations placées sous notre contrôle pendant la durée nécessaire aux finalités décrites ci-dessus et prenons des mesures raisonnables pour les protéger. Sous réserve du droit applicable dans votre lieu de résidence, vous pouvez demander l'accès aux informations qui vous concernent, leur rectification ou leur suppression, retirer votre consentement ou vous opposer à certains traitements.</p>

        <h2>7. Contact</h2>
        <p>Pour toute question sur cette politique ou le traitement des données personnelles, écrivez-nous à <a href="mailto:mail@finikz.com">mail@finikz.com</a>.</p>

        <h2>8. Modifications</h2>
        <p>Cette politique peut être mise à jour en fonction de l'évolution du Site ou de la réglementation. Les changements importants seront décrits sur cette page et la date de mise à jour sera modifiée.</p>
      </article>
      <SiteFooter locale="fr" />
    </main>
  );
}
