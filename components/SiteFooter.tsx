import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© FINIKZ</p>
      <nav aria-label="页脚导航">
        <Link href="/about">关于</Link>
        <a href="mailto:mail@finikz.com">联系方式</a>
        <Link href="/privacy">隐私政策</Link>
        <Link href="/terms">服务条款</Link>
      </nav>
    </footer>
  );
}
