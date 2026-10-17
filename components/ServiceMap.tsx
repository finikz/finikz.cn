import type { Locale } from "@/lib/i18n";
import { serviceMap } from "@/lib/services";

export default function ServiceMap({ locale = "zh" }: { locale?: Locale }) {
  const copy = serviceMap[locale];
  return (
    <section className="about-workstreams service-map" aria-labelledby={`${locale}-service-map-title`}>
      <div className="about-section-label"><p className="eyebrow">{copy.eyebrow}</p><h2 id={`${locale}-service-map-title`}>{copy.heading}</h2></div>
      <div>
        <p className="service-map-intro">{copy.intro}</p>
        <div className="about-stream-list">
          {copy.services.map((service) => (
            <article className="about-stream service-map-item" key={service.title}>
              <div>
                <p className="service-map-tags">{service.face ? <span className="service-map-face">{service.face}</span> : null}<span>{copy.byLabel} · {service.by}</span></p>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
