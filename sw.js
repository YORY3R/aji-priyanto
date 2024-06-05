if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const l =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[l]) return;
    let u = {};
    const o = (e) => i(e, l),
      t = { module: { uri: l }, exports: u, require: o };
    s[l] = Promise.all(n.map((e) => t[e] || o(e))).then((e) => (r(...e), u));
  };
}
define(["./workbox-3e911b1d"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/@intlify-DCihH9S3.js", revision: null },
        { url: "assets/@mdi-DrwBYt5V.js", revision: null },
        { url: "assets/@vue-BTR0I7Fj.js", revision: null },
        { url: "assets/en-CLUZln76.js", revision: null },
        { url: "assets/id-CTcujn-4.js", revision: null },
        { url: "assets/index-BFwhzyN3.css", revision: null },
        { url: "assets/index-CrZm8lks.js", revision: null },
        { url: "assets/ko-CM_yJQe7.js", revision: null },
        { url: "assets/mdi-vue-8pJpkj4D.js", revision: null },
        { url: "assets/mdi-vue-B7rj0kwx.css", revision: null },
        { url: "assets/pinia-Yt-tHp7L.js", revision: null },
        { url: "assets/vue-demi-Dq6ymT-8.js", revision: null },
        { url: "assets/vue-i18n-DidUZ75k.js", revision: null },
        { url: "assets/vue-l0sNRNKZ.js", revision: null },
        { url: "assets/vue-router-Bx16IfWh.js", revision: null },
        { url: "index.html", revision: "60dfebcc5f7b580f8249d877acbbdeae" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "aji-priyanto/android-chrome-192x192.png",
          revision: "c155c7c2f25f107c0968085cc31de5f0",
        },
        {
          url: "aji-priyanto/android-chrome-512x512.png",
          revision: "1bfbc41ed8544bb88cb79489147eb8e1",
        },
        {
          url: "aji-priyanto/apple-touch-icon.png",
          revision: "aa2420224b511852ab15afc9fbd3e518",
        },
        {
          url: "aji-priyanto/favicon-16x16.png",
          revision: "1d157aaabc853a1af7e1fb5f8e2b5d50",
        },
        {
          url: "aji-priyanto/favicon-32x32.png",
          revision: "d7dbfc1c09433d9e5f5cd19e7ead7b89",
        },
        {
          url: "manifest.webmanifest",
          revision: "f125e0cddc970cfb9e613d52ecd2c968",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
