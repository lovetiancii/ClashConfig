if (!self.define) {
    let e, s = {};
    const n = (n,i)=>(n = new URL(n + ".js",i).href,
    s[n] || new Promise((s=>{
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = n,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = n,
            importScripts(n),
            s()
    }
    )).then((()=>{
        let e = s[n];
        if (!e)
            throw new Error(`Module ${n} didn’t register its module`);
        return e
    }
    )));
    self.define = (i,t)=>{
        const r = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[r])
            return;
        let o = {};
        const l = e=>n(e, r)
          , u = {
            module: {
                uri: r
            },
            exports: o,
            require: l
        };
        s[r] = Promise.all(i.map((e=>u[e] || l(e)))).then((e=>(t(...e),
        o)))
    }
}
define(["./workbox-e0782b83"], (function(e) {
    "use strict";
    self.addEventListener("message", (e=>{
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }
    )),
    e.precacheAndRoute([{
        url: "assets/index-5e90ca00.js",
        revision: null
    }, {
        url: "assets/index-6d88662b.css",
        revision: null
    }, {
        url: "assets/vendor-827b5617.js",
        revision: null
    }, {
        url: "index.html",
        revision: "8a88884cb5c5c813a9c93f716b87206a"
    }, {
        url: "manifest.webmanifest",
        revision: "d3dd1da0aa7614180924343e65244285"
    }], {}),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))
}
));
