import {
  a as _e,
  k as A,
  r as z,
  j as V,
  w as C,
  A as g,
  B,
  C as T,
  D as u,
  q as ge,
  E as b,
  G as d,
  x as p,
  H as ee,
  v as l,
  I as te,
  n as ve,
  z as q,
  l as be,
  J as j,
  F as h,
  i as G,
  K as E,
  L as P,
  M as $,
  N as k,
  O as we,
  P as Se,
} from "./@vue-BTR0I7Fj.js";
import { d as $e, c as xe } from "./pinia-Yt-tHp7L.js";
import { c as ke, u as Ie } from "./vue-i18n-DidUZ75k.js";
import { c as Ee, a as Ce } from "./vue-router-Bx16IfWh.js";
import { m as Ve } from "./mdi-vue-8pJpkj4D.js";
import {
  a as Ae,
  b as Pe,
  c as ze,
  d as Te,
  e as We,
  f as Ne,
  g as Re,
  h as Le,
  i as Oe,
  j as De,
  k as He,
  l as je,
  n as Be,
  o as Me,
  p as qe,
  q as Ge,
} from "./@mdi-DrwBYt5V.js";
import "./vue-demi-Dq6ymT-8.js";
import "./@intlify-DCihH9S3.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = t(r);
    fetch(r.href, o);
  }
})();
const Ue = "modulepreload",
  Fe = function (n) {
    return "/" + n;
  },
  le = {},
  y = function (e, t, a) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        i =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      r = Promise.all(
        t.map((c) => {
          if (((c = Fe(c)), c in le)) return;
          le[c] = !0;
          const m = c.endsWith(".css"),
            f = m ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const s = document.createElement("link");
          if (
            ((s.rel = m ? "stylesheet" : Ue),
            m || ((s.as = "script"), (s.crossOrigin = "")),
            (s.href = c),
            i && s.setAttribute("nonce", i),
            document.head.appendChild(s),
            m)
          )
            return new Promise((W, I) => {
              s.addEventListener("load", W),
                s.addEventListener("error", () =>
                  I(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    return r
      .then(() => e())
      .catch((o) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o;
      });
  },
  Ye = (n, e, t) => {
    const a = n[e];
    return a
      ? typeof a == "function"
        ? a()
        : Promise.resolve(a)
      : new Promise((r, o) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            o.bind(
              null,
              new Error(
                "Unknown variable dynamic import: " +
                  e +
                  (e.split("/").length !== t
                    ? ". Note that variables only represent file names one level deep."
                    : "")
              )
            )
          );
        });
  },
  Ke = [
    "en",
    "id",
    "jv",
    "zh",
    "ja",
    "ko",
    "ru",
    "it",
    "fr",
    "de",
    "pt",
    "es",
    "th",
    "vi",
    "el",
    "tr",
  ],
  Je = "Aji Priyanto",
  Xe = Je.toLowerCase().replaceAll(" ", "-"),
  X = _e({}),
  H = ke({ locale: "en", fallbackLocale: "en", legacy: !1, messages: {} }),
  Ze = Ke.map((n) =>
    Ye(
      Object.assign({
        "../locales/aji-priyanto/en.ts": () =>
          y(() => import("./en-CLUZln76.js"), []),
        "../locales/aji-priyanto/id.ts": () =>
          y(() => import("./id-CTcujn-4.js"), []),
        "../locales/aji-priyanto/ko.ts": () =>
          y(() => import("./ko-CM_yJQe7.js"), []),
      }),
      `../locales/${Xe}/${n}.ts`,
      4
    )
      .then((e) => {
        X[n] = e.default;
      })
      .catch((e) => {
        e.message.includes("Unknown variable dynamic import") || console.log(e);
      })
  );
Promise.all(Ze)
  .then(() => {
    Object.keys(X).forEach((n) => {
      H.global.setLocaleMessage(n, X[n]);
    });
  })
  .catch((n) => {
    console.error(n);
  });
const L = $e("app-store", {
    state: () => ({
      display: { width: window.innerWidth, height: window.innerHeight },
      settings: {
        theme: "light",
        color: "blue",
        lang: "en",
        font: "sans-serif",
      },
      en: { settingItems: null, headerItem: null, bodyItems: null },
      active: !1,
    }),
    actions: {},
    getters: {
      isWidthBelow491(n) {
        return n.display.width < 491;
      },
      isWidthBelow809(n) {
        return n.display.width < 809;
      },
      getRoleName() {
        return "Aji Priyanto";
      },
    },
  }),
  U = x("--var-spacing-gap"),
  Qe = x("--var-typography-font-size"),
  et = Number(x("--var-typography-line-height"));
x("--var-typography-font-family");
const Z = x("--var-transition-duration");
function x(n) {
  const e = document.documentElement;
  return getComputedStyle(e).getPropertyValue(n).trim();
}
function Q(n) {
  const e = n.replace(/[^\d+|.]+/, "");
  return n.endsWith("ms") ? Number(e) : n.endsWith("s") ? Number(e) * 1e3 : NaN;
}
function tt(n) {
  const e = n.split(", ");
  let t = e[e.length - 1];
  return (t = t.slice(0, t.length - 1)), Number(t);
}
function O(n, e) {
  const t = n.split(", ");
  return (t[t.length - 1] = `${String(e)})`), t.join(", ");
}
function ne(n) {
  if (
    ((n = n.replace("#", "")),
    n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]),
    n.length === 6 && (n += "ff"),
    n.length !== 8)
  )
    return null;
  const e = parseInt(n.substring(0, 2), 16),
    t = parseInt(n.substring(2, 4), 16),
    a = parseInt(n.substring(4, 6), 16),
    r = parseInt(n.substring(6, 8), 16) / 255;
  return isNaN(e) || isNaN(t) || isNaN(a) || isNaN(r)
    ? null
    : `rgba(${e}, ${t}, ${a}, ${r.toFixed(2)})`;
}
function he(n, e, t) {
  if (!e) return;
  const a = e.getBoundingClientRect(),
    r = Math.max(a.width, a.height),
    o = document.createElement("span");
  (o.style.position = "absolute"),
    (o.style.overflow = "hidden"),
    (o.style.pointerEvents = "none"),
    (o.style.contain = "strict"),
    (o.style.width = "100%"),
    (o.style.height = "100%"),
    (o.style.left = "0"),
    (o.style.top = "0"),
    (o.style.zIndex = "0");
  const i = document.createElement("span");
  (i.style.borderRadius = "50%"),
    (i.style.position = "absolute"),
    (i.style.pointerEvents = "none"),
    (i.style.overflow = "hidden"),
    (i.style.transform = "scale(0)"),
    (i.style.opacity = "0"),
    (i.style.animationName = "ripple"),
    (i.style.animationDuration = "500ms"),
    (i.style.animationTimingFunction = x("--var-transition-timing-function")),
    (i.style.animationDelay = "0ms"),
    (i.style.backgroundColor = t
      ? x(`--var-color-${t}`)
      : O(e.style.backgroundColor, tt(e.style.backgroundColor) + 0.25)),
    (i.style.width = `${r}px`),
    (i.style.height = `${r}px`),
    (i.style.left = `${n.clientX - a.left - r / 2}px`),
    (i.style.top = `${n.clientY - a.top - r / 2}px`),
    o.appendChild(i),
    e.appendChild(o),
    window.setTimeout(() => {
      o.remove();
    }, Q(Z) * 2);
}
function se(n, e = !1) {
  window.open(n, e ? "_blank" : void 0);
}
const nt = A({
    __name: "CardComponent",
    props: {
      variant: { type: String, default: "flat" },
      radius: { type: String, default: "rounded" },
      width: { type: String, default: "unset" },
      minWidth: { type: String, default: "unset" },
      maxWidth: { type: String, default: "unset" },
      height: { type: String, default: "unset" },
      minHeight: { type: String, default: "unset" },
      maxHeight: { type: String, default: "unset" },
      color: { type: String, default: "transparent" },
      borderStyle: { type: String, default: "unset" },
      clickable: { type: Boolean, default: !1 },
      overflow: { type: String, default: "auto" },
      margin: { type: String, default: "unset" },
      padding: { type: String, default: "unset" },
      opacity: { type: Number, default: 1 },
      justifySelf: { type: String, default: "unset" },
    },
    emits: ["click"],
    setup(n, { emit: e }) {
      const t = n,
        a = e,
        r = L(),
        o = z(!1),
        i = z(null),
        c = z(x(`--var-color-${t.color}`)),
        m = V(() => {
          const w = ne(c.value) || "rgba(0, 0, 0, 0)";
          let N = w,
            M = "unset",
            oe = "unset",
            ae = "unset",
            re = "unset";
          switch (t.variant) {
            case "elevated":
              (M = "0px 0px 4px 1px var(--var-color-shadow)"),
                o.value &&
                  ((N = O(w, 0.75)),
                  (M += ", 1.5px 1.5px 4px 0px var(--var-color-shadow)"));
              break;
            case "depressed":
              (N = "rgba(0, 0, 0, 0)"),
                (M = "inset 0px 0px 8px 0px var(--var-color-shadow)"),
                o.value &&
                  ((N = O(w, 0.15)),
                  (M += ", inset 0px 0px 16px -2px var(--var-color-shadow)"));
              break;
            case "tonal":
              N = o.value ? O(w, 0.25) : O(w, 0.15);
              break;
            case "outlined":
              (N = o.value ? O(w, 0.15) : "rgba(0, 0, 0, 0)"),
                (oe = "2px"),
                (ae = t.borderStyle === "unset" ? "solid" : t.borderStyle),
                (re = w);
              break;
            default:
              o.value && (N = O(w, 0.75));
          }
          let J = "8px";
          switch (t.radius) {
            case "square":
              J = "0px";
              break;
            case "circle":
              J = "50%";
              break;
          }
          return {
            backgroundColor: N,
            boxShadow: M,
            borderWidth: oe,
            borderStyle: ae,
            borderColor: re,
            borderRadius: J,
            width: t.width,
            minWidth: t.minWidth,
            maxWidth: t.maxWidth,
            height: t.height,
            minHeight: t.minHeight,
            maxHeight: t.maxHeight,
            cursor: o.value ? "pointer" : "unset",
            overflow: t.overflow,
            margin: t.margin,
            padding: t.padding,
            opacity: t.opacity,
            justifySelf: t.justifySelf,
          };
        }),
        f = () => {
          t.clickable && (o.value = !0);
        },
        s = () => {
          t.clickable && (o.value = !1);
        },
        W = (w) => {
          t.clickable && he(w, i.value);
        },
        I = () => {
          t.clickable && a("click");
        };
      return (
        C(
          () => [r.settings.theme, r.settings.color],
          () => {
            c.value = x(`--var-color-${t.color}`);
          }
        ),
        (w, N) => (
          u(),
          g(
            "div",
            {
              ref_key: "card",
              ref: i,
              style: T(m.value),
              onMouseover: f,
              onMouseleave: s,
              onPointerdown: W,
              onClick: I,
            },
            [B(w.$slots, "default", {}, void 0)],
            36
          )
        )
      );
    },
  }),
  R = (n, e) => {
    const t = n.__vccOpts || n;
    for (const [a, r] of e) t[a] = r;
    return t;
  },
  K = R(nt, [["__scopeId", "data-v-5b8d4ad7"]]),
  it = A({
    __name: "App",
    setup(n) {
      const e = L();
      return (
        window.addEventListener("resize", () => {
          (e.display.width = window.innerWidth),
            (e.display.height = window.innerHeight);
        }),
        C(
          () => e.settings.theme,
          () => {
            document.documentElement.setAttribute(
              "data-theme",
              e.settings.theme
            ),
              localStorage.setItem("theme", e.settings.theme);
          }
        ),
        C(
          () => e.settings.color,
          () => {
            document.documentElement.setAttribute(
              "data-color",
              e.settings.color
            ),
              localStorage.setItem("color", e.settings.color);
          }
        ),
        C(
          () => e.settings.lang,
          () => {
            document.documentElement.setAttribute("lang", e.settings.lang),
              localStorage.setItem("lang", e.settings.lang);
          }
        ),
        C(
          () => e.settings.font,
          () => {
            document.documentElement.setAttribute("data-font", e.settings.font),
              localStorage.setItem("font", e.settings.font);
          }
        ),
        C(H.global.messages.value, () => {
          (e.en = H.global.messages.value.en),
            window.setTimeout(() => {
              e.active = !0;
            }, 40);
        }),
        ge(() => {
          const t = localStorage.getItem("theme") || "light";
          e.settings.theme = t;
          const a = localStorage.getItem("color") || "blue";
          e.settings.color = a;
          const r = localStorage.getItem("lang") || "en";
          (e.settings.lang = r), (H.global.locale.value = e.settings.lang);
          const o = localStorage.getItem("font") || "sans-serif";
          e.settings.font = o;
        }),
        (t, a) => {
          const r = ee("RouterView");
          return (
            u(),
            b(
              K,
              {
                radius: "square",
                color: "background",
                width: "100vw",
                height: "100vh",
                padding: p(U),
              },
              { default: d(() => [l(r)]), _: 1 },
              8,
              ["padding"]
            )
          );
        }
      );
    },
  }),
  ot = A({
    __name: "FlexComponent",
    props: {
      direction: { type: String, default: "row" },
      wrap: { type: String, default: "nowrap" },
      justify: { type: String, default: "flex-start" },
      align: { type: String, default: "normal" },
      width: { type: String, default: "unset" },
      minWidth: { type: String, default: "unset" },
      maxWidth: { type: String, default: "unset" },
      height: { type: String, default: "unset" },
      minHeight: { type: String, default: "unset" },
      maxHeight: { type: String, default: "unset" },
      overflow: { type: String, default: "unset" },
      margin: { type: String, default: "unset" },
      padding: { type: String, default: "unset" },
    },
    setup(n) {
      const e = n,
        t = V(() => ({
          flexDirection: e.direction,
          flexWrap: e.wrap,
          justifyContent: e.justify,
          alignItems: e.align,
          width: e.width,
          minWidth: e.minWidth,
          maxWidth: e.maxWidth,
          height: e.height,
          minHeight: e.minHeight,
          maxHeight: e.maxHeight,
          overflow: e.overflow,
          margin: e.margin,
          padding: e.padding,
        }));
      return (a, r) => (
        u(),
        g("div", { style: T(t.value) }, [B(a.$slots, "default", {}, void 0)], 4)
      );
    },
  }),
  v = R(ot, [["__scopeId", "data-v-22b3744d"]]),
  at = A({
    __name: "GapComponent",
    props: {
      gap: { type: String, default: U },
      direction: { type: String, default: "vertical" },
      color: { type: String, default: "transparent" },
      spacer: { type: Boolean, default: !1 },
      divider: { type: Boolean, default: !1 },
      dividerPosition: { type: String, default: "center" },
    },
    setup(n) {
      const e = n,
        t = L(),
        a = V(() =>
          e.direction === "vertical"
            ? { minHeight: e.gap, maxHeight: e.gap, flexGrow: Number(e.spacer) }
            : { minWidth: e.gap, maxWith: e.gap, flexGrow: Number(e.spacer) }
        );
      return (
        C(
          () => [t.settings.theme, t.settings.color],
          () => {
            if (e.divider) {
              const r = x(`--var-color-${e.color}`);
              document.documentElement.style.setProperty(
                "--dynamic-divider-color",
                r
              );
            }
          },
          { immediate: !0 }
        ),
        (r, o) => (
          u(),
          g(
            "div",
            {
              class: te([n.divider ? n.direction : void 0, n.dividerPosition]),
              style: T(a.value),
            },
            null,
            6
          )
        )
      );
    },
  }),
  _ = R(at, [["__scopeId", "data-v-d36a0142"]]),
  rt = A({
    __name: "TextComponent",
    props: {
      fontSize: { type: String, default: Qe },
      fontWeight: { type: String, default: "normal" },
      textAlign: { type: String, default: "unset" },
      lineHeight: { type: Number, default: et },
      color: { type: String, default: "text" },
      multilingual: { type: Boolean, default: !1 },
      whiteSpace: { type: String, default: "normal" },
      clickable: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup(n, { emit: e }) {
      const t = n,
        a = e,
        r = L(),
        o = z(!1),
        i = z(null),
        c = z(x(`--var-color-${t.color}`)),
        m = V(() => {
          const I = ne(c.value) || "rgba(0, 0, 0, 0)";
          return {
            fontSize: t.fontSize,
            fontWeight: t.fontWeight,
            textAlign: t.textAlign,
            lineHeight: t.lineHeight,
            color: I,
            whiteSpace: t.whiteSpace,
            cursor: o.value ? "pointer" : "unset",
          };
        }),
        f = () => {
          t.clickable && (o.value = !0);
        },
        s = () => {
          t.clickable && (o.value = !1);
        },
        W = () => {
          t.clickable && a("click");
        };
      return (
        C(
          () => [r.settings.theme, r.settings.color],
          () => {
            c.value = x(`--var-color-${t.color}`);
          }
        ),
        C(
          () => r.settings.lang,
          () => {
            t.multilingual &&
              i.value &&
              ((i.value.style.opacity = "0"),
              window.setTimeout(() => {
                (H.global.locale.value = r.settings.lang),
                  i.value && (i.value.style.opacity = "1");
              }, Q(Z)));
          }
        ),
        C(
          () => r.settings.font,
          () => {
            i.value &&
              ((i.value.style.opacity = "0"),
              window.setTimeout(() => {
                i.value &&
                  ((i.value.style.fontFamily = x(
                    "--var-typography-font-family"
                  )),
                  (i.value.style.opacity = "1"));
              }, Q(Z)));
          }
        ),
        ge(() => {
          ve(() => {
            i.value &&
              (i.value.style.fontFamily = x("--var-typography-font-family"));
          });
        }),
        (I, w) => (
          u(),
          g(
            "span",
            {
              ref_key: "text",
              ref: i,
              style: T(m.value),
              onMouseover: f,
              onMouseleave: s,
              onClick: W,
            },
            [B(I.$slots, "default", {}, void 0)],
            36
          )
        )
      );
    },
  }),
  S = R(rt, [["__scopeId", "data-v-3e0330d1"]]),
  lt = A({
    __name: "RadioGroupComponent",
    props: {
      modelValue: { type: [String, Number], required: !0 },
      size: { type: String, default: "24px" },
      gap: { type: String, default: U },
      color: { type: String, default: "background" },
    },
    emits: ["update:modelValue"],
    setup(n, { emit: e }) {
      const t = n,
        a = e,
        r = L(),
        o = z(t.modelValue),
        i = z(0);
      q("selectedValue", o),
        q("updateValue", (s) => {
          (o.value = s), a("update:modelValue", s);
        }),
        q("updatePosition", (s) => {
          i.value = s;
        }),
        q("size", t.size),
        q("gap", t.gap),
        V({ get: () => t.modelValue, set: (s) => a("update:modelValue", s) });
      const c = V(() => {
          const s = Number(t.size.replace(/[^\d]+/, ""));
          return {
            top: `calc(${s * 2 * Number(i.value) - s}px / 2 + calc(${t.gap} * ${
              Number(i.value) - 1
            }))`,
            left: `calc(${t.size} / 2)`,
            minWidth: `calc(${t.size} / 4 )`,
            maxWidth: `calc(${t.size} / 4 )`,
            minHeight: `calc(${t.size} / 4)`,
            maxHeight: `calc(${t.size} / 4)`,
          };
        }),
        m = (s) => {
          s.propertyName === "top" &&
            s.target &&
            (s.target.style.boxShadow =
              "1.5px 1.5px 6px rgba(0, 0, 0, 0.5), -0.5px -0.5px 4px rgba(255, 255, 255, 0.5), inset 3px 3px 6px rgba(0, 0, 0, 0.5), inset -1px -1px 4px rgba(255, 255, 255, 0.5)");
        },
        f = (s) => {
          s.propertyName === "top" &&
            s.target &&
            (s.target.style.boxShadow =
              "1.5px 1.5px 6px rgba(0, 0, 0, 0.5), -0.5px -0.5px 4px rgba(255, 255, 255, 0.5)");
        };
      return (
        C(
          () => [r.settings.theme, r.settings.color],
          () => {
            const s = x(`--var-color-${t.color}`);
            document.documentElement.style.setProperty(
              "--dynamic-radio-color",
              s
            );
          },
          { immediate: !0 }
        ),
        be(async () => {}),
        (s, W) => (
          u(),
          g(
            h,
            null,
            [
              j(
                "div",
                {
                  class: "dots",
                  style: T(c.value),
                  onTransitionstart: m,
                  onTransitionend: f,
                },
                null,
                36
              ),
              l(
                v,
                { direction: "column" },
                {
                  default: d(() => [B(s.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                }
              ),
            ],
            64
          )
        )
      );
    },
  }),
  ue = R(lt, [["__scopeId", "data-v-661249de"]]),
  st = ["value", "checked"],
  ut = A({
    __name: "RadioComponent",
    props: {
      position: { type: Number, required: !0 },
      label: { type: String, default: void 0 },
      value: { type: [String, Number], default: void 0 },
    },
    setup(n) {
      const e = n,
        t = G("selectedValue"),
        a = G("updateValue"),
        r = G("updatePosition"),
        o = G("size"),
        i = G("gap"),
        c = z(null),
        m = V(() => ({
          minWidth: `${o}`,
          maxWidth: `${o}`,
          minHeight: `${o}`,
          maxHeight: `${o}`,
        })),
        f = V(() => t.value === e.value),
        s = () => {
          e.value && a(e.value);
        };
      return (
        C(
          () => f.value,
          () => {
            f.value && r(e.position);
          },
          { immediate: !0 }
        ),
        (W, I) => (
          u(),
          g(
            h,
            null,
            [
              l(
                v,
                { align: "center" },
                {
                  default: d(() => [
                    j(
                      "input",
                      {
                        class: te({ checked: f.value }),
                        style: T(m.value),
                        ref_key: "radio",
                        ref: c,
                        type: "radio",
                        value: n.value,
                        checked: f.value,
                        onChange: s,
                      },
                      null,
                      46,
                      st
                    ),
                    l(_, { direction: "horizontal" }),
                    B(W.$slots, "default", {}, void 0, !0),
                  ]),
                  _: 3,
                }
              ),
              l(_, { gap: p(i) }, null, 8, ["gap"]),
            ],
            64
          )
        )
      );
    },
  }),
  de = R(ut, [["__scopeId", "data-v-41857c94"]]),
  dt = A({
    __name: "GridComponent",
    props: {
      repeatPattern: { type: String, default: void 0 },
      minWidth: { type: Array, default: () => ["auto"] },
      maxWidth: { type: Array, default: () => ["auto"] },
      gap: { type: String, default: U },
      justify: { type: String, default: "flex-start" },
      align: { type: String, default: "normal" },
      overflow: { type: String, default: "unset" },
      margin: { type: String, default: "unset" },
      padding: { type: String, default: "unset" },
    },
    setup(n) {
      const e = n,
        t = V(() => {
          const a = e.minWidth.length,
            r = e.minWidth,
            o =
              e.maxWidth.length !== a
                ? Array(a).fill(e.maxWidth[0])
                : e.maxWidth;
          let i = r.map((c, m) => `minmax(${c}, ${o[m]})`).join(" ");
          return (
            e.repeatPattern &&
              (i = `repeat(${e.repeatPattern}, minmax(${e.minWidth[0]}, ${e.maxWidth[0]}))`),
            {
              gridTemplateColumns: i,
              gap: e.gap,
              justifyContent: e.justify,
              alignItems: e.align,
              overflow: e.overflow,
              margin: e.margin,
              padding: e.padding,
            }
          );
        });
      return (a, r) => (
        u(),
        g("div", { style: T(t.value) }, [B(a.$slots, "default", {}, void 0)], 4)
      );
    },
  }),
  ye = R(dt, [["__scopeId", "data-v-dbffeaf9"]]);
var ie = ((n) => (
  (n.YolifSyebathanim = "Yolif Syebathanim"),
  (n.NiWayanTagelMiartini = "Ni Wayan Tagel Miartini"),
  (n.AjiPriyanto = "Aji Priyanto"),
  n
))(ie || {});
const ct = A({
    __name: "AppView",
    setup(n) {
      const e = L(),
        t = (a) => {
          if (e.en.settingItems) {
            const r = e.en.settingItems.length;
            return {
              gridColumnStart: a < r - 1 ? 1 : 2,
              gridRowStart: a < r - 1 ? a + 1 : `span ${r - 1}`,
            };
          }
          return {};
        };
      return (a, r) => {
        const o = ee("RouterView");
        return p(e).en.settingItems
          ? (u(),
            b(
              v,
              {
                key: 0,
                direction: "column",
                "min-width": "100%",
                "max-width": "100%",
              },
              {
                default: d(() => [
                  l(
                    K,
                    {
                      variant: "tonal",
                      color: "primary",
                      width: "100%",
                      "max-width": "21cm",
                      margin: "auto",
                      opacity: Number(p(e).active),
                    },
                    {
                      default: d(() => [
                        p(e).getRoleName === p(ie).YolifSyebathanim
                          ? (u(),
                            b(
                              ye,
                              {
                                key: 0,
                                "min-width": ["auto", "auto"],
                                "max-width": ["1fr", "1fr"],
                                gap: "0px 16pt",
                                padding: "24pt",
                              },
                              {
                                default: d(() => [
                                  (u(!0),
                                  g(
                                    h,
                                    null,
                                    P(
                                      p(e).en.settingItems,
                                      (i, c) => (
                                        u(),
                                        g(
                                          "div",
                                          { key: c, style: T(t(c)) },
                                          [
                                            j("div", null, [
                                              l(
                                                S,
                                                {
                                                  "font-size": "16pt",
                                                  "font-weight": "bold",
                                                  color: "primary",
                                                  "white-space": "nowrap",
                                                  multilingual: "",
                                                },
                                                {
                                                  default: d(() => [
                                                    $(
                                                      k(
                                                        a.$t(
                                                          `settingItems[${c}].title`
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                              l(_, { gap: "4pt" }),
                                              l(
                                                v,
                                                { width: "100%" },
                                                {
                                                  default: d(() => [
                                                    l(
                                                      ue,
                                                      {
                                                        modelValue:
                                                          p(e).settings[
                                                            i.model
                                                          ],
                                                        "onUpdate:modelValue": (
                                                          m
                                                        ) =>
                                                          (p(e).settings[
                                                            i.model
                                                          ] = m),
                                                        color: "primary",
                                                      },
                                                      {
                                                        default: d(() => [
                                                          (u(!0),
                                                          g(
                                                            h,
                                                            null,
                                                            P(
                                                              i.items,
                                                              (m, f) => (
                                                                u(),
                                                                b(
                                                                  de,
                                                                  {
                                                                    key: f,
                                                                    position:
                                                                      f + 1,
                                                                    value:
                                                                      m.value,
                                                                  },
                                                                  {
                                                                    default: d(
                                                                      () => [
                                                                        l(
                                                                          S,
                                                                          {
                                                                            "font-size":
                                                                              "11pt",
                                                                            "white-space":
                                                                              "nowrap",
                                                                            multilingual:
                                                                              "",
                                                                          },
                                                                          {
                                                                            default:
                                                                              d(
                                                                                () => [
                                                                                  $(
                                                                                    k(
                                                                                      a.$t(
                                                                                        `settingItems[${c}].items[${f}].title`
                                                                                      )
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1032,
                                                                  [
                                                                    "position",
                                                                    "value",
                                                                  ]
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      [
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                      ]
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                          ],
                                          4
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              }
                            ))
                          : (u(),
                            b(
                              v,
                              { key: 1, padding: "16px", overflow: "auto" },
                              {
                                default: d(() => [
                                  (u(!0),
                                  g(
                                    h,
                                    null,
                                    P(
                                      p(e).en.settingItems,
                                      (i, c) => (
                                        u(),
                                        g(
                                          h,
                                          { key: c },
                                          [
                                            c > 0
                                              ? (u(),
                                                b(_, {
                                                  key: 0,
                                                  direction: "horizontal",
                                                  gap: "16pt",
                                                  color: "primary",
                                                  spacer: "",
                                                  divider: "",
                                                }))
                                              : E("", !0),
                                            j("div", null, [
                                              l(
                                                S,
                                                {
                                                  "font-size": "16pt",
                                                  "font-weight": "bold",
                                                  color: "primary",
                                                  "white-space": "nowrap",
                                                  multilingual: "",
                                                },
                                                {
                                                  default: d(() => [
                                                    $(
                                                      k(
                                                        a.$t(
                                                          `settingItems[${c}].title`
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                              l(_, { gap: "4pt" }),
                                              l(
                                                v,
                                                { width: "100%" },
                                                {
                                                  default: d(() => [
                                                    l(
                                                      ue,
                                                      {
                                                        modelValue:
                                                          p(e).settings[
                                                            i.model
                                                          ],
                                                        "onUpdate:modelValue": (
                                                          m
                                                        ) =>
                                                          (p(e).settings[
                                                            i.model
                                                          ] = m),
                                                        color: "primary",
                                                      },
                                                      {
                                                        default: d(() => [
                                                          (u(!0),
                                                          g(
                                                            h,
                                                            null,
                                                            P(
                                                              i.items,
                                                              (m, f) => (
                                                                u(),
                                                                b(
                                                                  de,
                                                                  {
                                                                    key: f,
                                                                    position:
                                                                      f + 1,
                                                                    value:
                                                                      m.value,
                                                                  },
                                                                  {
                                                                    default: d(
                                                                      () => [
                                                                        l(
                                                                          S,
                                                                          {
                                                                            "font-size":
                                                                              "11pt",
                                                                            "white-space":
                                                                              "nowrap",
                                                                            multilingual:
                                                                              "",
                                                                          },
                                                                          {
                                                                            default:
                                                                              d(
                                                                                () => [
                                                                                  $(
                                                                                    k(
                                                                                      a.$t(
                                                                                        `settingItems[${c}].items[${f}].title`
                                                                                      )
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1032,
                                                                  [
                                                                    "position",
                                                                    "value",
                                                                  ]
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      [
                                                        "modelValue",
                                                        "onUpdate:modelValue",
                                                      ]
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                          ],
                                          64
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              }
                            )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["opacity"]
                  ),
                  l(_),
                  l(
                    K,
                    {
                      variant: "elevated",
                      color: "background",
                      width: "100%",
                      "max-width": "21cm",
                      height: p(e).active ? "100%" : "0px",
                      "max-height": p(e).active ? "10000px" : "0px",
                      overflow: "hidden",
                      margin: "auto",
                      padding: p(e).active
                        ? p(e).isWidthBelow809
                          ? p(U)
                          : "1.5cm"
                        : "0px 1.5cm 0px",
                      opacity: Number(p(e).active),
                    },
                    { default: d(() => [l(o)]), _: 1 },
                    8,
                    ["height", "max-height", "padding", "opacity"]
                  ),
                ]),
                _: 1,
              }
            ))
          : E("", !0);
      };
    },
  }),
  pt = ["src", "alt"],
  mt = A({
    __name: "ImageComponent",
    props: {
      src: { type: String, required: !0 },
      width: { type: String, default: "unset" },
      minWidth: { type: String, default: "unset" },
      maxWidth: { type: String, default: "unset" },
      aspectRatio: { type: String, default: "1:1" },
      clickable: { type: Boolean, default: !1 },
      hoverTransform: { type: String, default: "scale(1.2)" },
    },
    emits: ["click"],
    setup(n, { emit: e }) {
      const t = n,
        a = e,
        r = z(!1),
        o = z(null),
        i = V(() => ({
          width: t.width,
          minWidth: t.minWidth,
          maxWidth: t.maxWidth,
        })),
        c = V(() => {
          const w = t.aspectRatio.split(":").map((N) => Number(N));
          return {
            paddingTop: `${(w[1] / w[0]) * 100}%`,
            cursor: r.value ? "pointer" : "unset",
          };
        }),
        m = V(() => (r.value ? `transform: ${t.hoverTransform}` : "")),
        f = () => {
          t.clickable && (r.value = !0);
        },
        s = () => {
          t.clickable && (r.value = !1);
        },
        W = (w) => {
          t.clickable && he(w, o.value, "primary");
        },
        I = () => {
          t.clickable && a("click");
        };
      return (w, N) => (
        u(),
        g(
          "div",
          { style: T(i.value) },
          [
            j(
              "div",
              {
                ref_key: "image",
                ref: o,
                style: T(c.value),
                onMouseover: f,
                onMouseleave: s,
                onPointerdown: W,
                onClick: I,
              },
              [
                j(
                  "img",
                  {
                    class: te({ hover: r.value }),
                    style: T(m.value),
                    src: n.src,
                    alt: n.src,
                  },
                  null,
                  14,
                  pt
                ),
              ],
              36
            ),
          ],
          4
        )
      );
    },
  }),
  ft = R(mt, [["__scopeId", "data-v-ce2057ea"]]),
  gt = A({
    __name: "IconComponent",
    props: {
      name: { type: String, required: !0 },
      size: { type: String, default: "24px" },
      spin: { type: Boolean, default: !1 },
      color: { type: String, default: "transparent" },
    },
    setup(n) {
      const e = n,
        t = L(),
        a = z(x(`--var-color-${e.color}`)),
        r = V(() => ({ color: ne(a.value) || "rgba(0, 0, 0, 0)" }));
      return (
        C(
          () => [t.settings.theme, t.settings.color],
          () => {
            a.value = x(`--var-color-${e.color}`);
          }
        ),
        (o, i) => {
          const c = ee("mdicon");
          return (
            u(),
            b(
              c,
              {
                class: "icon",
                style: T(r.value),
                name: n.name.slice(4),
                size: n.size,
                spin: n.spin,
              },
              null,
              8,
              ["style", "name", "size", "spin"]
            )
          );
        }
      );
    },
  }),
  Y = R(gt, [["__scopeId", "data-v-2830d9c6"]]);
function ht(n) {
  return (
    typeof n == "function" ||
    (Object.prototype.toString.call(n) === "[object Object]" && !we(n))
  );
}
const yt = A({
  __name: "CurriculumVitaeView",
  setup(n) {
    const e = L(),
      t = A({
        props: {
          i: { type: Number, required: !0 },
          j: { type: Number, required: !0 },
          k: { type: Number, required: !0 },
          addon: { type: Object, required: !0 },
        },
        setup(a) {
          return () =>
            l("div", null, [
              a.addon.descriptions.map((r, o) => {
                let i;
                return l("div", { key: o, style: "display: inline" }, [
                  l(
                    S,
                    {
                      "font-size": "10pt",
                      color: a.addon.href ? "primary" : void 0,
                      clickable: !!a.addon.href,
                      multilingual: !0,
                      onClick: () => {
                        a.addon.href && se(a.addon.href[o], !0);
                      },
                    },
                    ht(
                      (i = Ie().t(
                        `bodyItems[${a.i}].details[${a.j}].addons[${a.k}].descriptions[${o}]`
                      ))
                    )
                      ? i
                      : { default: () => [i] }
                  ),
                  l(S, null, {
                    default: () => [
                      o < a.addon.descriptions.length - 1
                        ? ["zh", "ja"].includes(e.settings.lang)
                          ? "、 "
                          : ", "
                        : ["zh", "ja"].includes(e.settings.lang)
                        ? "。"
                        : ".",
                    ],
                  }),
                ]);
              }),
            ]);
        },
      });
    return (a, r) =>
      p(e).en.headerItem && p(e).en.bodyItems
        ? (u(),
          b(
            v,
            { key: 0, direction: "column" },
            {
              default: d(() => [
                l(
                  v,
                  { wrap: "wrap", align: "center", margin: "-14pt 0px 0px" },
                  {
                    default: d(() => [
                      l(
                        v,
                        {
                          width: p(e).isWidthBelow491 ? "100%" : "unset",
                          justify: "center",
                          margin: "14pt 0px 0px",
                        },
                        {
                          default: d(() => [
                            l(
                              K,
                              { color: "primary" },
                              {
                                default: d(() => [
                                  l(
                                    ft,
                                    {
                                      src: p(e).en.headerItem.image,
                                      "min-width": p(e).isWidthBelow491
                                        ? "164px"
                                        : "2cm",
                                      "max-width": p(e).isWidthBelow491
                                        ? "164px"
                                        : "2cm",
                                    },
                                    null,
                                    8,
                                    ["src", "min-width", "max-width"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["width"]
                      ),
                      p(e).isWidthBelow491
                        ? E("", !0)
                        : (u(),
                          b(_, {
                            key: 0,
                            direction: "horizontal",
                            gap: "0.5cm",
                          })),
                      l(
                        v,
                        {
                          direction: "column",
                          align: p(e).isWidthBelow491 ? "center" : "normal",
                          width: p(e).isWidthBelow491 ? "100%" : "unset",
                          margin: "14pt 0px 0px",
                        },
                        {
                          default: d(() => [
                            l(
                              S,
                              {
                                "font-size":
                                  p(e).getRoleName ===
                                  p(ie).NiWayanTagelMiartini
                                    ? "19pt"
                                    : "24pt",
                                "font-weight": "bold",
                                "text-align": "center",
                                color: "primary",
                                multilingual: "",
                              },
                              {
                                default: d(() => [
                                  $(k(a.$t("headerItem.title")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["font-size"]
                            ),
                            l(_, { gap: "2pt" }),
                            l(
                              S,
                              {
                                "font-size": "10pt",
                                "font-weight": "bold",
                                color: "shadow",
                                multilingual: "",
                              },
                              {
                                default: d(() => [
                                  $(k(a.$t("headerItem.subTitle")), 1),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["align", "width"]
                      ),
                      p(e).isWidthBelow491
                        ? E("", !0)
                        : (u(),
                          b(_, {
                            key: 1,
                            direction: "horizontal",
                            gap: "0.5cm",
                            spacer: "",
                          })),
                      l(
                        v,
                        { direction: "column", margin: "14pt 0px 0px" },
                        {
                          default: d(() => [
                            (u(!0),
                            g(
                              h,
                              null,
                              P(
                                p(e).en.headerItem.details,
                                (o, i) => (
                                  u(),
                                  g(
                                    h,
                                    { key: i },
                                    [
                                      i > 0
                                        ? (u(), b(_, { key: 0, gap: "4pt" }))
                                        : E("", !0),
                                      l(
                                        v,
                                        { align: "center" },
                                        {
                                          default: d(() => [
                                            l(
                                              Y,
                                              {
                                                name: o.icon,
                                                size: "10pt",
                                                color: "primary",
                                              },
                                              null,
                                              8,
                                              ["name"]
                                            ),
                                            l(_, {
                                              direction: "horizontal",
                                              gap: "0.1cm",
                                            }),
                                            l(
                                              S,
                                              {
                                                "font-size": "10pt",
                                                "white-space": "nowrap",
                                                color: "primary",
                                                clickable: "",
                                                multilingual: "",
                                                onClick: (c) =>
                                                  p(se)(o.href, !0),
                                              },
                                              {
                                                default: d(() => [
                                                  $(
                                                    k(
                                                      a.$t(
                                                        `headerItem.details[${i}].text`
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["onClick"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                    ],
                                    64
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                (u(!0),
                g(
                  h,
                  null,
                  P(
                    p(e).en.bodyItems,
                    (o, i) => (
                      u(),
                      g(
                        h,
                        { key: i },
                        [
                          l(_, { gap: "14pt" }),
                          l(
                            v,
                            { width: "100%" },
                            {
                              default: d(() => [
                                l(
                                  Y,
                                  {
                                    name: o.icon,
                                    size: "14pt",
                                    color: "primary",
                                  },
                                  null,
                                  8,
                                  ["name"]
                                ),
                                l(_, { direction: "horizontal", gap: "0.1cm" }),
                                l(
                                  v,
                                  { direction: "column", width: "100%" },
                                  {
                                    default: d(() => [
                                      l(
                                        S,
                                        {
                                          "font-size": "14pt",
                                          "font-weight": "bold",
                                          color: "primary",
                                          multilingual: "",
                                        },
                                        {
                                          default: d(() => [
                                            $(
                                              k(a.$t(`bodyItems[${i}].title`)),
                                              1
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      l(_, { color: "primary", divider: "" }),
                                      (u(!0),
                                      g(
                                        h,
                                        null,
                                        P(
                                          o.details,
                                          (c, m) => (
                                            u(),
                                            g(
                                              h,
                                              { key: m },
                                              [
                                                m > 0
                                                  ? (u(),
                                                    b(_, {
                                                      key: 0,
                                                      gap: "8pt",
                                                    }))
                                                  : E("", !0),
                                                c.title || c.duration
                                                  ? (u(),
                                                    g(
                                                      h,
                                                      { key: 1 },
                                                      [
                                                        l(
                                                          v,
                                                          {
                                                            direction: "column",
                                                          },
                                                          {
                                                            default: d(() => [
                                                              c.title
                                                                ? (u(),
                                                                  b(
                                                                    S,
                                                                    {
                                                                      key: 0,
                                                                      "font-size":
                                                                        "11pt",
                                                                      "font-weight":
                                                                        "bold",
                                                                      "text-align":
                                                                        "left",
                                                                      multilingual:
                                                                        "",
                                                                    },
                                                                    {
                                                                      default:
                                                                        d(
                                                                          () => [
                                                                            $(
                                                                              k(
                                                                                a.$t(
                                                                                  `bodyItems[${i}].details[${m}].title`
                                                                                )
                                                                              ),
                                                                              1
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1024
                                                                  ))
                                                                : E("", !0),
                                                              l(_, {
                                                                direction:
                                                                  "vertical",
                                                                gap: "2pt",
                                                              }),
                                                              c.duration
                                                                ? (u(),
                                                                  b(
                                                                    S,
                                                                    {
                                                                      key: 1,
                                                                      "font-size":
                                                                        "9pt",
                                                                      color:
                                                                        "shadow",
                                                                      "white-space":
                                                                        "nowrap",
                                                                      multilingual:
                                                                        "",
                                                                    },
                                                                    {
                                                                      default:
                                                                        d(
                                                                          () => [
                                                                            $(
                                                                              k(
                                                                                a.$t(
                                                                                  `bodyItems[${i}].details[${m}].duration`
                                                                                )
                                                                              ),
                                                                              1
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1024
                                                                  ))
                                                                : E("", !0),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        l(_, { gap: "2pt" }),
                                                      ],
                                                      64
                                                    ))
                                                  : E("", !0),
                                                (u(!0),
                                                g(
                                                  h,
                                                  null,
                                                  P(
                                                    c.descriptions,
                                                    (f, s) => (
                                                      u(),
                                                      g(
                                                        h,
                                                        { key: s },
                                                        [
                                                          s > 0
                                                            ? (u(),
                                                              b(_, {
                                                                key: 0,
                                                                gap: "2pt",
                                                              }))
                                                            : E("", !0),
                                                          l(
                                                            S,
                                                            {
                                                              "font-size":
                                                                "10pt",
                                                              multilingual: "",
                                                            },
                                                            {
                                                              default: d(() => [
                                                                $(
                                                                  k(
                                                                    a.$t(
                                                                      `bodyItems[${i}].details[${m}].descriptions[${s}]`
                                                                    )
                                                                  ),
                                                                  1
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                        ],
                                                        64
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                                (u(!0),
                                                g(
                                                  h,
                                                  null,
                                                  P(
                                                    c.lists,
                                                    (f, s) => (
                                                      u(),
                                                      g(
                                                        h,
                                                        { key: s },
                                                        [
                                                          l(
                                                            _,
                                                            {
                                                              gap:
                                                                s === 0
                                                                  ? "2pt"
                                                                  : "4pt",
                                                            },
                                                            null,
                                                            8,
                                                            ["gap"]
                                                          ),
                                                          l(
                                                            v,
                                                            null,
                                                            {
                                                              default: d(() => [
                                                                l(
                                                                  S,
                                                                  {
                                                                    "font-size":
                                                                      "10pt",
                                                                  },
                                                                  {
                                                                    default: d(
                                                                      () => [
                                                                        $(
                                                                          " •  "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                                l(
                                                                  v,
                                                                  {
                                                                    direction:
                                                                      "column",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                  {
                                                                    default: d(
                                                                      () => [
                                                                        l(
                                                                          S,
                                                                          {
                                                                            "font-size":
                                                                              "10pt",
                                                                            multilingual:
                                                                              "",
                                                                          },
                                                                          {
                                                                            default:
                                                                              d(
                                                                                () => [
                                                                                  $(
                                                                                    k(
                                                                                      a.$t(
                                                                                        `bodyItems[${i}].details[${m}].lists[${s}].title`
                                                                                      )
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024
                                                                        ),
                                                                        (u(!0),
                                                                        g(
                                                                          h,
                                                                          null,
                                                                          P(
                                                                            f.descriptions,
                                                                            (
                                                                              W,
                                                                              I
                                                                            ) => (
                                                                              u(),
                                                                              g(
                                                                                h,
                                                                                {
                                                                                  key: I,
                                                                                },
                                                                                [
                                                                                  I >
                                                                                  0
                                                                                    ? (u(),
                                                                                      b(
                                                                                        _,
                                                                                        {
                                                                                          key: 0,
                                                                                          gap: "2pt",
                                                                                        }
                                                                                      ))
                                                                                    : E(
                                                                                        "",
                                                                                        !0
                                                                                      ),
                                                                                  l(
                                                                                    S,
                                                                                    {
                                                                                      "font-size":
                                                                                        "10pt",
                                                                                      multilingual:
                                                                                        "",
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        d(
                                                                                          () => [
                                                                                            $(
                                                                                              k(
                                                                                                a.$t(
                                                                                                  `bodyItems[${i}].details[${m}].lists[${s}].descriptions[${I}]`
                                                                                                )
                                                                                              ),
                                                                                              1
                                                                                            ),
                                                                                          ]
                                                                                        ),
                                                                                      _: 2,
                                                                                    },
                                                                                    1024
                                                                                  ),
                                                                                ],
                                                                                64
                                                                              )
                                                                            )
                                                                          ),
                                                                          128
                                                                        )),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                        ],
                                                        64
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                                !p(e).isWidthBelow491 &&
                                                c.addons
                                                  ? (u(),
                                                    b(
                                                      ye,
                                                      {
                                                        key: 2,
                                                        "repeat-pattern": "5",
                                                        gap: "4pt 0px",
                                                        align: "flex-start",
                                                      },
                                                      {
                                                        default: d(() => [
                                                          (u(!0),
                                                          g(
                                                            h,
                                                            null,
                                                            P(
                                                              c.addons,
                                                              (f, s) => (
                                                                u(),
                                                                g(
                                                                  h,
                                                                  { key: s },
                                                                  [
                                                                    l(
                                                                      Y,
                                                                      {
                                                                        name: f.icon,
                                                                        size: "10pt",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ["name"]
                                                                    ),
                                                                    l(_, {
                                                                      direction:
                                                                        "horizontal",
                                                                      gap: "0.1cm",
                                                                    }),
                                                                    l(
                                                                      S,
                                                                      {
                                                                        "font-size":
                                                                          "10pt",
                                                                        "font-weight":
                                                                          "bold",
                                                                        multilingual:
                                                                          "",
                                                                      },
                                                                      {
                                                                        default:
                                                                          d(
                                                                            () => [
                                                                              $(
                                                                                k(
                                                                                  a.$t(
                                                                                    `bodyItems[${i}].details[${m}].addons[${s}].title`
                                                                                  )
                                                                                ),
                                                                                1
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1024
                                                                    ),
                                                                    l(
                                                                      S,
                                                                      {
                                                                        "font-size":
                                                                          "10pt",
                                                                      },
                                                                      {
                                                                        default:
                                                                          d(
                                                                            () => [
                                                                              $(
                                                                                "  " +
                                                                                  k(
                                                                                    [
                                                                                      "zh",
                                                                                      "ja",
                                                                                    ].includes(
                                                                                      p(
                                                                                        e
                                                                                      )
                                                                                        .settings
                                                                                        .lang
                                                                                    )
                                                                                      ? "："
                                                                                      : ":"
                                                                                  ) +
                                                                                  "  ",
                                                                                1
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 1,
                                                                      }
                                                                    ),
                                                                    l(
                                                                      p(t),
                                                                      {
                                                                        i,
                                                                        j: m,
                                                                        k: s,
                                                                        addon:
                                                                          f,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      [
                                                                        "i",
                                                                        "j",
                                                                        "k",
                                                                        "addon",
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  64
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ))
                                                  : p(e).isWidthBelow491 &&
                                                    c.addons
                                                  ? (u(),
                                                    b(
                                                      v,
                                                      {
                                                        key: 3,
                                                        direction: "column",
                                                      },
                                                      {
                                                        default: d(() => [
                                                          (u(!0),
                                                          g(
                                                            h,
                                                            null,
                                                            P(
                                                              c.addons,
                                                              (f, s) => (
                                                                u(),
                                                                g(
                                                                  h,
                                                                  { key: s },
                                                                  [
                                                                    s > 0
                                                                      ? (u(),
                                                                        b(_, {
                                                                          key: 0,
                                                                          gap: "4pt",
                                                                        }))
                                                                      : E(
                                                                          "",
                                                                          !0
                                                                        ),
                                                                    l(
                                                                      v,
                                                                      null,
                                                                      {
                                                                        default:
                                                                          d(
                                                                            () => [
                                                                              l(
                                                                                Y,
                                                                                {
                                                                                  name: f.icon,
                                                                                  size: "10pt",
                                                                                  color:
                                                                                    "primary",
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                  "name",
                                                                                ]
                                                                              ),
                                                                              l(
                                                                                _,
                                                                                {
                                                                                  direction:
                                                                                    "horizontal",
                                                                                  gap: "0.1cm",
                                                                                }
                                                                              ),
                                                                              l(
                                                                                v,
                                                                                {
                                                                                  direction:
                                                                                    "column",
                                                                                },
                                                                                {
                                                                                  default:
                                                                                    d(
                                                                                      () => [
                                                                                        l(
                                                                                          S,
                                                                                          {
                                                                                            "font-size":
                                                                                              "10pt",
                                                                                            "font-weight":
                                                                                              "bold",
                                                                                            multilingual:
                                                                                              "",
                                                                                          },
                                                                                          {
                                                                                            default:
                                                                                              d(
                                                                                                () => [
                                                                                                  $(
                                                                                                    k(
                                                                                                      a.$t(
                                                                                                        `bodyItems[${i}].details[${m}].addons[${s}].title`
                                                                                                      )
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ]
                                                                                              ),
                                                                                            _: 2,
                                                                                          },
                                                                                          1024
                                                                                        ),
                                                                                        l(
                                                                                          p(
                                                                                            t
                                                                                          ),
                                                                                          {
                                                                                            i,
                                                                                            j: m,
                                                                                            k: s,
                                                                                            addon:
                                                                                              f,
                                                                                          },
                                                                                          null,
                                                                                          8,
                                                                                          [
                                                                                            "i",
                                                                                            "j",
                                                                                            "k",
                                                                                            "addon",
                                                                                          ]
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  _: 2,
                                                                                },
                                                                                1024
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1024
                                                                    ),
                                                                  ],
                                                                  64
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ))
                                                  : E("", !0),
                                              ],
                                              64
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                              _: 2,
                            },
                            1024
                          ),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            }
          ))
        : E("", !0);
  },
});
var _t = {
  VITE_ENVIRONMENT: "production",
  VITE_ROLE_NAME: "Aji Priyanto",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
const vt = Ee({
    history: Ce(_t.VITE_BASE_URL),
    routes: [
      {
        path: "/",
        name: "App",
        component: ct,
        children: [{ path: "/", name: "Curriculum Vitae", component: yt }],
      },
      { path: "/:catchAll(.*)", redirect: "/" },
    ],
  }),
  D = "Aji Priyanto",
  bt = D.toLowerCase().replaceAll(" ", "-");
var ce;
(ce = document.querySelector("meta[name=application-name]")) == null ||
  ce.setAttribute("content", D);
var pe;
(pe = document.querySelector("meta[name=description]")) == null ||
  pe.setAttribute("content", `${D}’s Curriculum Vitae`);
var me;
(me = document.querySelector("meta[name=keywords]")) == null ||
  me.setAttribute("content", `${D},Curriculum Vitae,${D} CV,CV ${D}`);
var fe;
(fe = document.querySelector("link[rel=icon]")) == null ||
  fe.setAttribute("href", `/${bt}/favicon.ico`);
document.title = D;
const wt = {
    mdiPhone: Ae,
    mdiEmail: Pe,
    mdiWeb: ze,
    mdiAccountTie: Te,
    mdiSchool: We,
    mdiAccountGroup: Ne,
    mdiTrophyAward: Re,
    mdiClipboardTextClock: Le,
    mdiBriefcase: Oe,
    mdiInformationVariantCircle: De,
    mdiHomeMapMarker: He,
    mdiHeadLightbulb: je,
    mdiLinkVariant: Be,
    mdiTranslateVariant: Me,
    mdiTrophy: qe,
    mdiController: Ge,
  },
  F = Se(it);
F.use(xe());
F.use(vt);
F.use(H);
F.use(Ve, { icons: wt });
F.mount("#app");
