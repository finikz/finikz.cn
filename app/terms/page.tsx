import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "服务条款｜Finikz",
  description: "访问和使用 finikz.cn 时适用的条款。",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <SiteNav />
      <article className="legal-content">
        <header><p className="eyebrow">TERMS OF USE</p><h1>服务条款</h1><p>更新日期：2026 年 8 月 18 日</p></header>
        <p>欢迎访问 finikz.cn。继续浏览或使用本网站，即表示你同意以下条款。</p>

        <h2>一、网站用途</h2>
        <p>本网站用于发布 Finikz 的文章、作品、项目和个人介绍。网站内容仅供一般信息、文化交流与参考，不构成法律、财务、医疗或其他专业意见。</p>

        <h2>二、知识产权</h2>
        <p>除另有说明外，本网站原创文字、页面编排和原创视觉内容的权利归作者或相应权利人所有。未经许可，请勿批量复制、转载、改编或用于商业用途。合理引用时，请注明作者与本网站链接。</p>

        <h2>三、第三方内容</h2>
        <p>文章中引用的图片、书影、电影资料、商标及其他第三方内容，其权利归原权利人所有，相关引用用于评论、研究或信息说明。如权利人认为内容使用不当，请联系我们核实处理。</p>

        <h2>四、外部链接</h2>
        <p>本网站可能链接到第三方网站。我们无法控制其内容、可用性或隐私做法，也不对第三方网站造成的损失承担责任。访问外部链接时，请自行判断风险。</p>

        <h2>五、可用性与责任限制</h2>
        <p>我们会尽力维护内容准确和网站可用，但不保证信息始终完整、最新或无误，也不保证服务不会中断。在适用法律允许的范围内，你因使用或无法使用本网站而产生的间接损失由你自行承担。</p>

        <h2>六、条款变更</h2>
        <p>我们可能根据网站功能或法律要求更新本条款。更新后的版本自发布于本页面之日起生效。</p>

        <h2>七、联系我们</h2>
        <p>如需申请转载、提出权利主张或咨询本条款，请发送邮件至 <a href="mailto:mail@finikz.com">mail@finikz.com</a>。</p>
      </article>
      <SiteFooter />
    </main>
  );
}
