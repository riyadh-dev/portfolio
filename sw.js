if(!self.define){let e,s={};const i=(i,o)=>(i=new URL(i+".js",o).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const n=e=>i(e,a),l={module:{uri:a},exports:c,require:n};s[a]=Promise.all(o.map((e=>l[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-118fddf1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/favicon-dd277e41.ico",revision:null},{url:"assets/index-62fd0e71.js",revision:null},{url:"assets/index-69c81c14.css",revision:null},{url:"docs/baatchia_resume.pdf",revision:"331d11af1a9f790c3e35a686a0be3ecc"},{url:"images/logos/bootstrap.png",revision:"38eea5799e9c9dae718e84c13d79f909"},{url:"images/logos/chakra-ui.png",revision:"6679faed07a0490f62652b1748555332"},{url:"images/logos/csharp.png",revision:"7633117ee5a6edba4ce790511dbbcb9a"},{url:"images/logos/css.png",revision:"0d10c6221c282e24508f94b186d8f6cf"},{url:"images/logos/dotnet.svg",revision:"afe88915b28caa9b114736d3ef5603fe"},{url:"images/logos/express.png",revision:"191dc5e93bbdb90d5ce0371b2a05295b"},{url:"images/logos/graphql.png",revision:"e7f32a3e1c538ef387b2abf5a55d5468"},{url:"images/logos/html.png",revision:"4dae5fc2d70783be85a3107a529852bc"},{url:"images/logos/jotai.png",revision:"0718f09809a675cc3e9e82e2a496526c"},{url:"images/logos/js.png",revision:"449aa4b8db1afc2f00b9c9dad3d47588"},{url:"images/logos/mongodb.svg",revision:"ebf723d47dc4203868088d005452543b"},{url:"images/logos/mui.svg",revision:"d1bac72851df070b337e2d318cb7be0e"},{url:"images/logos/next.png",revision:"c9f422139f078a71f14f125f4a011dbb"},{url:"images/logos/node.png",revision:"270f55fffea36219b66a63fbe03ff497"},{url:"images/logos/parcel.png",revision:"514266020c7c1d39c7e8390bb0695716"},{url:"images/logos/postgres.png",revision:"4782b5f3f66dd8251bcf129955c89342"},{url:"images/logos/react-query.svg",revision:"1e5dcbd62421c177f74fe56f5dd3f997"},{url:"images/logos/react.png",revision:"de303a4b45071fde56699d2ccb5eb60e"},{url:"images/logos/recoil.ico",revision:"2c6beab71777d0762f8a85d697030869"},{url:"images/logos/sass.png",revision:"711d8e0c04872376843b4f44de36b746"},{url:"images/logos/solid.svg",revision:"2be7a61a1b41e2d88c3130948efad4a3"},{url:"images/logos/tailwind.svg",revision:"3b576cb1e20dbcf8dc41c0516066b746"},{url:"images/logos/ts.png",revision:"314e6b70b8c0257eda5f6b5052e71a3c"},{url:"images/logos/turborepo.svg",revision:"3d86b98e3d7c252c00dad343f37e6191"},{url:"images/logos/vite.png",revision:"acee37c25f1f47dd56cc29c49190fb9e"},{url:"images/logos/ws.png",revision:"5302a9811647ecd54397cb388822ca9e"},{url:"images/logos/ws2.png",revision:"8ad9080185c4473bf4f8600595dcf894"},{url:"images/logos/xaml.png",revision:"c3d94716487b57e5ae6f9616bcecf046"},{url:"index.html",revision:"3097d3051e43368e675f05f6fcbc1db1"},{url:"registerSW.js",revision:"11fb09e2df0c29b877b6a1496072618c"},{url:"manifest.webmanifest",revision:"cb9a84117b7c9d3c5406dfdd0f65a511"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/riyadh-demo-cloud\/image\/upload\/f_webp\/q_auto:best\/portfolio\/.*/i,new e.CacheFirst({cacheName:"cloudinary-images",plugins:[new e.ExpirationPlugin({maxEntries:55,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
