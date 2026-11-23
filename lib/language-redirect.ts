// Runs inline in <head> before the page paints. Keeps <html lang> aligned with the current URL,
// and on the root entry ("/") sends visitors to the language version matching their saved choice
// or browser language (Chinese, English, French; anything else gets English). Direct visits to
// explicit localized URLs (/en/..., /fr/...) or deep links are respected and never hijacked.
// Crawlers are never redirected so every language stays indexable.
export const languageRedirectScript = `(function(){try{
var tags={zh:"zh-CN",en:"en",fr:"fr"},key="finikz-language";
var seg=location.pathname.split("/")[1],current=seg==="en"||seg==="fr"?seg:"zh";
document.documentElement.lang=tags[current];
var ua=navigator.userAgent;if(/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|whatsapp|telegram|lighthouse|headless/i.test(ua)||navigator.webdriver)return;
var internal=false;try{internal=!!document.referrer&&new URL(document.referrer).host===location.host;}catch(e){}
if(internal){localStorage.setItem(key,current);return;}
if(location.pathname!=="/"&&location.pathname!=="")return;
var stored=localStorage.getItem(key),lang=(navigator.languages&&navigator.languages[0]||navigator.language||"").toLowerCase();
var preferred=tags[stored]?stored:lang.indexOf("zh")===0?"zh":lang.indexOf("fr")===0?"fr":"en";
if(!stored)localStorage.setItem(key,preferred);
if(preferred===current)return;
function go(){var link=document.querySelector('link[rel="alternate"][hreflang="'+tags[preferred]+'"]');
if(!link)return false;var target=new URL(link.href,location.href);location.replace(target.pathname+location.search+location.hash);return true;}
if(!go())document.addEventListener("DOMContentLoaded",go);
}catch(e){}})();`;
