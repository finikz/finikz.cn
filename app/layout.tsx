import type { Metadata } from "next";
import "./globals.css";
import "./editorial.css";
import "./brand-black.css";
import "./work-link.css";
import "./consulting.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://finikz.github.io"),
  title: "Finikz｜张凤鸣",
  description: "张凤鸣 Finikz：“智神AI”联合创办人，企业 AI 落地与营销战略顾问、跨文化内容创作者。",
  openGraph: {
    title: "Finikz｜企业 AI 与营销战略顾问",
    description: "企业 AI 落地与营销战略顾问、跨文化内容创作者。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Finikz" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
