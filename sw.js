if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const f=e=>i(e,o),l={module:{uri:o},exports:t,require:f};s[o]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/en-B2B4o9cS.js",revision:null},{url:"assets/index-BBbWJFZk.css",revision:null},{url:"assets/index-QUtklCpt.js",revision:null},{url:"assets/ru-CTm3lYrk.js",revision:null},{url:"assets/test-8CIy5Jsa.js",revision:null},{url:"index.html",revision:"ce27deded1fef82ba6c017fc0b9b2fea"},{url:"registerSW.js",revision:"09198150e0c948c09cc226b68fe272c4"},{url:"favicons/favicon.svg",revision:"0bf8b60d991f8475dbedb48077a3669f"},{url:"favicons/safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"favicons/pwa-192x192.png",revision:"7416af5dc5cff110fb77b0593839a233"},{url:"favicons/pwa-512x512.png",revision:"5805a93810285b049d968f9cf81d8de2"},{url:"manifest.webmanifest",revision:"f32071e0f5af5a705c50c1982f019715"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
