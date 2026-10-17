import type { Locale } from "@/lib/i18n";
import { workstreams } from "@/lib/workstreams";

export default function Workstreams({ locale = "zh" }: { locale?: Locale }) {
  const copy = workstreams[locale];
  return (
    <section className="about-workstreams" aria-labelledby={`${locale}-workstreams-title`}>
      <div className="about-section-label"><p className="eyebrow">{copy.eyebrow}</p><h2 id={`${locale}-workstreams-title`}>{copy.heading}</h2></div>
      <div className="about-showcase-content">
        <p className="workstreams-intro">{copy.intro}</p>
        <div className="about-stream-list">
          {copy.pillars.map((pillar) => (
            <article className="about-stream" key={pillar.title}>
              <div>
                <h3>{pillar.title}</h3>
                <p className="workstreams-services">{pillar.services}</p>
                <ul>{pillar.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <a className="about-more-link" href={copy.companyHref} target="_blank" rel="noreferrer">{copy.companyLink}</a>
      </div>
    </section>
  );
}
