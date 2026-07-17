import type { Metadata } from "next";
import "./globals.css";
import "./editorial.css";

export const metadata: Metadata = {
  title: "Finikz｜张凤鸣",
  description: "Finikz 张凤鸣的个人品牌主页：翻译、企业 AI 落地咨询与内容工作流。",
  openGraph: {
    title: "Finikz｜把判断沉淀成可复利的数字资产",
    description: "翻译、企业 AI 落地咨询与内容工作流。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Finikz" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
