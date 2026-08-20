import Link from "next/link";

type SiteNavProps = {
  active?: "about" | "works" | "notes";
  home?: boolean;
};

export default function SiteNav({ active, home = false }: SiteNavProps) {
  return (
    <nav className="nav" aria-label="主导航">
      <Link className="brand" href={home ? "#top" : "/"}>
        FINIKZ
        <span className="brand-subtitle">AI, CULTURE &amp; STRATEGY</span>
      </Link>
      <div className="nav-links">
        <Link className={active === "works" ? "active" : undefined} href="/works">Works</Link>
        <Link className={active === "notes" ? "active" : undefined} href="/articles">Notes</Link>
      </div>
    </nav>
  );
}
