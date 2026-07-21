type SiteNavProps = {
  active?: "about" | "works" | "notes";
  home?: boolean;
};

export default function SiteNav({ active, home = false }: SiteNavProps) {
  return (
    <nav className="nav" aria-label="主导航">
      <a className="brand" href={home ? "#top" : "/"}>FINIKZ</a>
      <div className="nav-links">
        <a className={active === "about" ? "active" : undefined} href="/about">About</a>
        <a className={active === "works" ? "active" : undefined} href="/works">Works</a>
        <a className={active === "notes" ? "active" : undefined} href="/articles">Notes</a>
      </div>
    </nav>
  );
}
