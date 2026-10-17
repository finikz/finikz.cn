// Runs inline in <head> before the page paints. Sends visitors to the language version that matches their
// saved choice or browser language (Chinese, English, French; anything else gets English). Only follows
// hreflang alternates the page declares, and never redirects crawlers so every language stays indexable.
// finikz.com/build.py carries the same script; keep them in sync.
export const languageRedirectScript = `(function(){try{
var ua=navigator.userAgent;if(/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|whatsapp|telegram|lighthouse|headless/i.test(ua)||navigator.webdriver)return;
var tags={zh:"zh-CN",en:"en",fr:"fr"},key="finikz-language";
var seg=location.pathname.split("/")[1],current=seg==="en"||seg==="fr"?seg:"zh";
var stored=localStorage.getItem(key),lang=(navigator.languages&&navigator.languages[0]||navigator.language||"").toLowerCase();
var preferred=tags[stored]?stored:lang.indexOf("zh")===0?"zh":lang.indexOf("fr")===0?"fr":"en";
if(!stored)localStorage.setItem(key,preferred);
if(preferred===current)return;
function go(){var link=document.querySelector('link[rel="alternate"][hreflang="'+tags[preferred]+'"]');
if(!link)return false;var target=new URL(link.href,location.href);location.replace(target.pathname+location.search+location.hash);return true;}
if(!go())document.addEventListener("DOMContentLoaded",go);
}catch(e){}})();`;
