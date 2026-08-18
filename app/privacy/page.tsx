import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "隐私政策｜Finikz",
  description: "finikz.cn 的隐私政策与 Cookie 使用说明。",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <SiteNav />
      <article className="legal-content">
        <header><p className="eyebrow">PRIVACY POLICY</p><h1>隐私政策</h1><p>更新日期：2026 年 8 月 18 日</p></header>
        <p>finikz.cn（以下简称“本网站”）由张凤鸣（Finikz）运营。本政策说明本网站会处理哪些访问数据、为何处理，以及你可以如何作出选择。</p>

        <h2>一、我们处理的信息</h2>
        <p>当你浏览本网站时，托管、网络安全及分析服务可能处理浏览器类型、设备类型、访问时间、来源页面、所访问页面、互动事件、IP 地址及由其推断的大致地区等技术信息。你通过电子邮件主动联系我们时，我们会收到你提供的邮箱地址和邮件内容。</p>

        <h2>二、Google Analytics</h2>
        <p>本网站使用 Google Analytics 4（衡量 ID：G-WWPWFYB8TE）了解页面访问和使用情况。分析脚本只会在你选择“同意分析”后加载。相关数据由 Google 按其政策处理，我们用汇总信息改善内容与网站体验，不用它识别你的现实身份。</p>

        <h2>三、Cookie 与本地存储</h2>
        <p>本网站使用浏览器本地存储保存你的 Cookie 选择。你可以选择“仅必要”，也可以通过浏览器设置清除本网站的数据，重新作出选择。禁用非必要 Cookie 不影响文章和主要页面的浏览。</p>

        <h2>四、广告服务</h2>
        <p>本网站目前正在申请 Google AdSense。若日后启用广告，Google 及其合作伙伴可能使用 Cookie 或类似技术，根据你的访问情况展示、衡量和改进广告。对于适用地区，我们会在启用相关广告技术前提供符合当地要求的同意选择。</p>

        <h2>五、第三方服务与链接</h2>
        <p>本网站由 GitHub Pages 托管，并使用 Cloudflare 提供域名解析、传输和安全服务。文章可能包含指向第三方网站的链接；离开本网站后，相关信息处理受第三方自己的隐私政策约束。</p>

        <h2>六、保存、安全与权利</h2>
        <p>我们仅在实现上述用途所需的期限内保留可由我们控制的信息，并采取合理措施保护数据。根据你所在地适用的法律，你可以请求查询、更正或删除与自己有关的信息，也可以撤回同意或提出异议。</p>

        <h2>七、联系我们</h2>
        <p>如对本政策或个人信息处理有疑问，请发送邮件至 <a href="mailto:mail@finikz.com">mail@finikz.com</a>。</p>

        <h2>八、政策更新</h2>
        <p>本政策可能因网站功能或法律要求变化而更新。重要变化会在本页面说明，并更新页面顶部的日期。</p>
      </article>
      <SiteFooter />
    </main>
  );
}
