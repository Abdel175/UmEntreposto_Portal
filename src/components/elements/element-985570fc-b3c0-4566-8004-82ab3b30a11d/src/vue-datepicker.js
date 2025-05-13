import { openBlock as g, createElementBlock as R, createElementVNode as te, reactive as Dt, computed as V, unref as i, ref as F, watch as ct, onMounted as He, nextTick as yt, toRef as Ot, defineComponent as We, renderSlot as H, createCommentVNode as M, normalizeClass as ve, withKeys as ie, createBlock as fe, withModifiers as Je, normalizeStyle as ot, normalizeProps as Ne, mergeProps as Se, Fragment as ue, createTextVNode as Ke, toDisplayString as Pe, renderList as Me, createVNode as tt, Transition as gt, withCtx as oe, onBeforeUpdate as Jn, onUnmounted as sn, withDirectives as Ct, vShow as Pt, createSlots as Ee, isRef as rt, guardReactiveProps as Ue, resolveDynamicComponent as Yn, useSlots as un, getCurrentScope as Qn, onScopeDispose as ea, Teleport as ta } from "vue";
import { isBefore as cn, isEqual as Vn, isAfter as dn, setHours as En, setMinutes as Ln, setSeconds as Fn, setMilliseconds as fn, parse as ln, isValid as Nt, isDate as na, format as wt, getMonth as ge, getDay as aa, getYear as pe, getHours as Xe, getMinutes as qe, getSeconds as ht, parseISO as la, startOfWeek as pn, endOfWeek as ra, setMonth as Rt, setYear as ut, addDays as mt, set as Be, add as Un, addMonths as st, subMonths as bt, getWeek as oa, getISOWeek as sa, differenceInCalendarDays as ia, eachDayOfInterval as kn, addYears as ua, subYears as ca, sub as da } from "date-fns";
const dt = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, o] of n)
    a[t] = o;
  return a;
}, fa = {}, va = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ma = /* @__PURE__ */ te("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), ya = /* @__PURE__ */ te("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ha = /* @__PURE__ */ te("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ga = /* @__PURE__ */ te("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), pa = [
  ma,
  ya,
  ha,
  ga
];
function ka(e, n) {
  return g(), R("svg", va, pa);
}
const Ft = /* @__PURE__ */ dt(fa, [["render", ka]]), wa = {}, ba = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, $a = /* @__PURE__ */ te("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), Da = /* @__PURE__ */ te("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Ma = [
  $a,
  Da
];
function _a(e, n) {
  return g(), R("svg", ba, Ma);
}
const Ta = /* @__PURE__ */ dt(wa, [["render", _a]]), Aa = {}, Sa = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ca = /* @__PURE__ */ te("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Pa = [
  Ca
];
function Na(e, n) {
  return g(), R("svg", Sa, Pa);
}
const wn = /* @__PURE__ */ dt(Aa, [["render", Na]]), Ra = {}, Ia = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Oa = /* @__PURE__ */ te("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), Ba = [
  Oa
];
function Ya(e, n) {
  return g(), R("svg", Ia, Ba);
}
const bn = /* @__PURE__ */ dt(Ra, [["render", Ya]]), Va = {}, Ea = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, La = /* @__PURE__ */ te("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), Fa = /* @__PURE__ */ te("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Ua = [
  La,
  Fa
];
function Ha(e, n) {
  return g(), R("svg", Ea, Ua);
}
const Hn = /* @__PURE__ */ dt(Va, [["render", Ha]]), Wa = {}, za = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, xa = /* @__PURE__ */ te("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Ka = [
  xa
];
function ja(e, n) {
  return g(), R("svg", za, Ka);
}
const Wn = /* @__PURE__ */ dt(Wa, [["render", ja]]), Ga = {}, Za = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Xa = /* @__PURE__ */ te("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), qa = [
  Xa
];
function Ja(e, n) {
  return g(), R("svg", Za, qa);
}
const zn = /* @__PURE__ */ dt(Ga, [["render", Ja]]), $n = (e, n) => {
  const a = ln(e, n.slice(0, e.length), new Date());
  return Nt(a) && na(a) ? a : null;
}, Qa = (e, n) => {
  if (typeof n == "string")
    return $n(e, n);
  if (Array.isArray(n)) {
    let a = null;
    for (const t of n)
      if (a = $n(e, t), a)
        break;
    return a;
  }
  return typeof n == "function" ? n(e) : null;
}, $ = (e) => e ? new Date(e) : new Date(), el = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), d = e.getHours().toString().padStart(2, "0"), p = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${o}T${d}:${p}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, je = (e) => {
  let n = $(JSON.parse(JSON.stringify(e)));
  return n = En(n, 0), n = Ln(n, 0), n = Fn(n, 0), n = fn(n, 0), n;
}, Fe = (e, n, a, t) => {
  let o = e ? $(e) : $();
  return (n || n === 0) && (o = En(o, +n)), (a || a === 0) && (o = Ln(o, +a)), (t || t === 0) && (o = Fn(o, +t)), fn(o, 0);
}, Re = (e, n) => !e || !n ? !1 : cn(je(e), je(n)), ke = (e, n) => !e || !n ? !1 : Vn(je(e), je(n)), Ve = (e, n) => !e || !n ? !1 : dn(je(e), je(n)), xn = (e, n, a) => e && e[0] && e[1] ? Ve(a, e[0]) && Re(a, e[1]) : e && e[0] && n ? Ve(a, e[0]) && Re(a, n) || Re(a, e[0]) && Ve(a, n) : !1, kt = Dt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Kn = () => {
  const e = (t) => {
    kt.menuFocused = t;
  }, n = (t) => {
    kt.shiftKeyInMenu !== t && (kt.shiftKeyInMenu = t);
  };
  return {
    control: V(() => ({ shiftKeyInMenu: kt.shiftKeyInMenu, menuFocused: kt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = {}, tl = {
  get exports() {
    return Bt;
  },
  set exports(e) {
    Bt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(tl, Bt);
const nl = /* @__PURE__ */ vn(Bt);
var Yt = {}, al = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(al, Yt);
const Dn = /* @__PURE__ */ vn(Yt);
function ll(e, n) {
  var a = il(n);
  return a.formatToParts ? ol(a, e) : sl(a, e);
}
var rl = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ol(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var d = rl[a[o].type];
      d >= 0 && (t[d] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (p) {
    if (p instanceof RangeError)
      return [NaN];
    throw p;
  }
}
function sl(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Gt = {};
function il(e) {
  if (!Gt[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Gt[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Gt[e];
}
function mn(e, n, a, t, o, d, p) {
  var D = new Date(0);
  return D.setUTCFullYear(e, n, a), D.setUTCHours(t, o, d, p), D;
}
var Mn = 36e5, ul = 6e4, Zt = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function yn(e, n, a) {
  var t, o;
  if (!e || (t = Zt.timezoneZ.exec(e), t))
    return 0;
  var d;
  if (t = Zt.timezoneHH.exec(e), t)
    return d = parseInt(t[1], 10), _n(d) ? -(d * Mn) : NaN;
  if (t = Zt.timezoneHHMM.exec(e), t) {
    d = parseInt(t[1], 10);
    var p = parseInt(t[2], 10);
    return _n(d, p) ? (o = Math.abs(d) * Mn + p * ul, d > 0 ? -o : o) : NaN;
  }
  if (fl(e)) {
    n = new Date(n || Date.now());
    var D = a ? n : cl(n), O = rn(D, e), I = a ? O : dl(n, O, e);
    return -I;
  }
  return NaN;
}
function cl(e) {
  return mn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function rn(e, n) {
  var a = ll(e, n), t = mn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), o = e.getTime(), d = o % 1e3;
  return o -= d >= 0 ? d : 1e3 + d, t - o;
}
function dl(e, n, a) {
  var t = e.getTime(), o = t - n, d = rn(new Date(o), a);
  if (n === d)
    return n;
  o -= d - n;
  var p = rn(new Date(o), a);
  return d === p ? d : Math.max(d, p);
}
function _n(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var Tn = {};
function fl(e) {
  if (Tn[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Tn[e] = !0, !0;
  } catch {
    return !1;
  }
}
var vl = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const jn = vl;
var Xt = 36e5, An = 6e4, ml = 2, Ye = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: jn
};
function on(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? ml : nl(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var o = yl(e), d = hl(o.date, t), p = d.year, D = d.restDateString, O = gl(D, p);
  if (isNaN(O))
    return new Date(NaN);
  if (O) {
    var I = O.getTime(), L = 0, A;
    if (o.time && (L = pl(o.time), isNaN(L)))
      return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (A = yn(o.timeZone || a.timeZone, new Date(I + L)), isNaN(A))
        return new Date(NaN);
    } else
      A = Dn(new Date(I + L)), A = Dn(new Date(I + L + A));
    return new Date(I + L + A);
  } else
    return new Date(NaN);
}
function yl(e) {
  var n = {}, a = Ye.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ye.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var o = Ye.timeZone.exec(t);
    o ? (n.time = t.replace(o[1], ""), n.timeZone = o[1].trim()) : n.time = t;
  }
  return n;
}
function hl(e, n) {
  var a = Ye.YYY[n], t = Ye.YYYYY[n], o;
  if (o = Ye.YYYY.exec(e) || t.exec(e), o) {
    var d = o[1];
    return {
      year: parseInt(d, 10),
      restDateString: e.slice(d.length)
    };
  }
  if (o = Ye.YY.exec(e) || a.exec(e), o) {
    var p = o[1];
    return {
      year: parseInt(p, 10) * 100,
      restDateString: e.slice(p.length)
    };
  }
  return {
    year: null
  };
}
function gl(e, n) {
  if (n === null)
    return null;
  var a, t, o, d;
  if (e.length === 0)
    return t = new Date(0), t.setUTCFullYear(n), t;
  if (a = Ye.MM.exec(e), a)
    return t = new Date(0), o = parseInt(a[1], 10) - 1, Cn(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN);
  if (a = Ye.DDD.exec(e), a) {
    t = new Date(0);
    var p = parseInt(a[1], 10);
    return bl(n, p) ? (t.setUTCFullYear(n, 0, p), t) : new Date(NaN);
  }
  if (a = Ye.MMDD.exec(e), a) {
    t = new Date(0), o = parseInt(a[1], 10) - 1;
    var D = parseInt(a[2], 10);
    return Cn(n, o, D) ? (t.setUTCFullYear(n, o, D), t) : new Date(NaN);
  }
  if (a = Ye.Www.exec(e), a)
    return d = parseInt(a[1], 10) - 1, Pn(n, d) ? Sn(n, d) : new Date(NaN);
  if (a = Ye.WwwD.exec(e), a) {
    d = parseInt(a[1], 10) - 1;
    var O = parseInt(a[2], 10) - 1;
    return Pn(n, d, O) ? Sn(n, d, O) : new Date(NaN);
  }
  return null;
}
function pl(e) {
  var n, a, t;
  if (n = Ye.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), qt(a) ? a % 24 * Xt : NaN;
  if (n = Ye.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), qt(a, t) ? a % 24 * Xt + t * An : NaN;
  if (n = Ye.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var o = parseFloat(n[3].replace(",", "."));
    return qt(a, t, o) ? a % 24 * Xt + t * An + o * 1e3 : NaN;
  }
  return null;
}
function Sn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7, d = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + d), t;
}
var kl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], wl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Gn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Cn(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = Gn(e);
    if (t && a > wl[n] || !t && a > kl[n])
      return !1;
  }
  return !0;
}
function bl(e, n) {
  if (n < 1)
    return !1;
  var a = Gn(e);
  return !(a && n > 366 || !a && n > 365);
}
function Pn(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function qt(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Vt = {}, $l = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
}, Et = {}, Dl = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, o) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var d in o)
      Object.prototype.hasOwnProperty.call(o, d) && (t[d] = o[d]);
    return t;
  }
  e.exports = n.default;
})(Dl, Et);
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = o;
  var a = t(Et);
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function o(d) {
    return (0, a.default)({}, d);
  }
  e.exports = n.default;
})($l, Vt);
const Ml = /* @__PURE__ */ vn(Vt);
function _l(e, n, a) {
  var t = on(e, a), o = yn(n, t, !0), d = new Date(t.getTime() - o), p = new Date(0);
  return p.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), p.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), p;
}
function Tl(e, n, a) {
  if (typeof e == "string" && !e.match(jn)) {
    var t = Ml(a);
    return t.timeZone = n, on(e, t);
  }
  var o = on(e, a), d = mn(
    o.getFullYear(),
    o.getMonth(),
    o.getDate(),
    o.getHours(),
    o.getMinutes(),
    o.getSeconds(),
    o.getMilliseconds()
  ).getTime(), p = yn(n, new Date(d));
  return new Date(d + p);
}
const Al = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, Sl = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((d) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${d}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), o = a.slice(n + 1, a.length);
  return [a[n]].concat(...o).concat(...t);
}, Cl = (e) => {
  const n = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    n.push({ value: +a, text: `${a}` });
  return n;
}, Pl = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const d = o < 10 ? `0${o}` : o;
    return new Date(`2017-${d}-01T00:00:00+00:00`);
  }).map((o, d) => ({
    text: a.format(o),
    value: d
  }));
}, Nl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], _e = (e) => {
  const n = i(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, Rl = (e) => Object.assign({ type: "dot" }, e), Zn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Lt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ae = (e) => e, Nn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Rn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), Il = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Ol = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Bl = (e, n, a) => e || (typeof a == "string" ? a : n), Yl = (e) => typeof e == "boolean" ? e ? Rn({}) : !1 : Rn(e), Vl = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), El = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), Le = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Lt.prop("partial-range"));
  }, a = V(() => ({
    ariaLabels: Il(e.ariaLabels),
    textInputOptions: Object.assign(Vl(), e.textInputOptions),
    multiCalendars: Ol(e.multiCalendars),
    previewFormat: Bl(e.previewFormat, e.format, d()),
    filters: El(e.filters),
    transitions: Yl(e.transitions),
    startTime: c()
  })), t = (l) => {
    if (e.range)
      return l();
    throw new Error(Lt.prop("range"));
  }, o = () => {
    const l = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${l}` : `hh:mm${l} aa`;
  }, d = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy", p = (l, v) => {
    if (typeof e.format == "function")
      return e.format(l);
    const m = v || d(), k = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${wt(l[0], m, k)} ${e.modelAuto && !l[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? wt(l[1], m, k) : ""}` : wt(l, m, k);
  }, D = (l) => e.timezone ? _l(l, e.timezone) : l, O = (l) => e.timezone ? Tl(l, e.timezone) : l, I = V(() => (l) => {
    var v;
    return (v = e.hideNavigation) == null ? void 0 : v.includes(l);
  }), L = (l) => {
    const v = e.maxDate ? Ve(D(l), D($(e.maxDate))) : !1, m = e.minDate ? Re(D(l), D($(e.minDate))) : !1, k = B(l, e.disabledDates), Z = a.value.filters.months.map((be) => +be).includes(ge(l)), de = e.disabledWeekDays.length ? e.disabledWeekDays.some((be) => +be === aa(l)) : !1, f = e.allowedDates.length ? !e.allowedDates.some((be) => ke(D($(be)), D(l))) : !1, r = pe(l), G = r < +e.yearRange[0] || r > +e.yearRange[1];
    return !(v || m || k || Z || G || de || f);
  }, A = (l) => {
    const v = {
      hours: Xe($()),
      minutes: qe($()),
      seconds: ht($())
    };
    return Object.assign(v, l);
  }, c = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [A(e.startTime[0]), A(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? A(e.startTime) : null, T = (l) => !L(l), z = (l) => Array.isArray(l) ? Nt(l[0]) && (l[1] ? Nt(l[1]) : !0) : l ? Nt(l) : !1, Y = (l) => l instanceof Date ? l : la(l), Q = (l) => {
    const v = pn(D(l), { weekStartsOn: +e.weekStart }), m = ra(D(l), { weekStartsOn: +e.weekStart });
    return [v, m];
  }, B = (l, v) => Array.isArray(v) ? v.some((m) => ke(D($(m)), D(l))) : v(l), E = (l, v, m) => {
    let k = l ? $(l) : $();
    return (v || v === 0) && (k = Rt(k, v)), m && (k = ut(k, m)), k;
  }, N = (l) => Be($(), { hours: Xe(l), minutes: qe(l), seconds: ht(l) }), j = (l) => Be($(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), ne = (l, v, m, k) => {
    if (!l)
      return !0;
    if (k) {
      const x = m === "max" ? cn(l, v) : dn(l, v), Z = { seconds: 0, milliseconds: 0 };
      return x || Vn(Be(l, Z), Be(v, Z));
    }
    return m === "max" ? l.getTime() <= v.getTime() : l.getTime() >= v.getTime();
  }, re = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, ce = (l) => Array.isArray(l) ? [l[0] ? N(l[0]) : null, l[1] ? N(l[1]) : null] : N(l), P = (l) => {
    const v = e.maxTime ? j(e.maxTime) : $(e.maxDate);
    return Array.isArray(l) ? ne(l[0], v, "max", !!e.maxDate) && ne(l[1], v, "max", !!e.maxDate) : ne(l, v, "max", !!e.maxDate);
  }, y = (l, v) => {
    const m = e.minTime ? j(e.minTime) : $(e.minDate);
    return Array.isArray(l) ? ne(l[0], m, "min", !!e.minDate) && ne(l[1], m, "min", !!e.minDate) && v : ne(l, m, "min", !!e.minDate) && v;
  }, S = (l) => {
    let v = !0;
    if (!l || re())
      return !0;
    const m = !e.minDate && !e.maxDate ? ce(l) : l;
    return (e.maxTime || e.maxDate) && (v = P(Ae(m))), (e.minTime || e.minDate) && (v = y(Ae(m), v)), v;
  }, b = (l, v) => {
    const m = $(JSON.parse(JSON.stringify(l))), k = [];
    for (let x = 0; x < 7; x++) {
      const Z = mt(m, x), de = ge(Z) !== v;
      k.push({
        text: e.hideOffsetDates && de ? "" : Z.getDate(),
        value: Z,
        current: !de,
        classData: {}
      });
    }
    return k;
  }, U = (l, v) => {
    const m = [], k = $(D(new Date(v, l))), x = $(D(new Date(v, l + 1, 0))), Z = pn(k, { weekStartsOn: e.weekStart }), de = (f) => {
      const r = b(f, l);
      if (m.push({ days: r }), !m[m.length - 1].days.some(
        (G) => ke(je(G.value), je(x))
      )) {
        const G = mt(f, 7);
        de(G);
      }
    };
    if (de(Z), e.sixWeeks && m.length < 6) {
      const f = 6 - m.length;
      for (let r = 1; r <= f; r++) {
        const G = m[m.length - 1], be = G.days[G.days.length - 1], $e = b(mt(be.value, 1), ge(k));
        m.push({ days: $e });
      }
    }
    return m;
  }, X = (l, v, m) => [Be($(l), { date: 1 }), Be($(), { month: v, year: m, date: 1 })], q = (l, v) => Re(...X(e.minDate, l, v)) || ke(...X(e.minDate, l, v)), _ = (l, v) => Ve(...X(e.maxDate, l, v)) || ke(...X(e.maxDate, l, v)), C = (l, v, m) => {
    let k = !1;
    return e.maxDate && m && _(l, v) && (k = !0), e.minDate && !m && q(l, v) && (k = !0), k;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: D,
    getZonedToUtc: O,
    formatDate: p,
    getDefaultPattern: d,
    validateDate: L,
    getDefaultStartTime: c,
    isDisabled: T,
    isValidDate: z,
    sanitizeDate: Y,
    getWeekFromDate: Q,
    matchDate: B,
    setDateMonthOrYear: E,
    isValidTime: S,
    getCalendarDays: U,
    validateMonthYearInRange: (l, v, m, k) => {
      let x = !1;
      return k ? e.minDate && e.maxDate ? x = C(l, v, m) : (e.minDate && q(l, v) || e.maxDate && _(l, v)) && (x = !0) : x = !0, x;
    },
    validateMaxDate: _,
    validateMinDate: q,
    defaults: a,
    hideNavigationButtons: I
  };
}, he = Dt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Jt = F(null), St = F(!1), Qt = F(!1), en = F(!1), tn = F(!1), Oe = F(0), Ce = F(0), nt = () => {
  const e = V(() => St.value ? [...he.selectionGrid, he.actionRow].filter((B) => B.length) : Qt.value ? [
    ...he.timePicker[0],
    ...he.timePicker[1],
    tn.value ? [] : [Jt.value],
    he.actionRow
  ].filter((B) => B.length) : en.value ? [...he.monthPicker, he.actionRow] : [he.monthYear, ...he.calendar, he.time, he.actionRow].filter((B) => B.length)), n = (B) => {
    Oe.value = B ? Oe.value + 1 : Oe.value - 1;
    let E = null;
    e.value[Ce.value] && (E = e.value[Ce.value][Oe.value]), E || (Oe.value = B ? Oe.value - 1 : Oe.value + 1);
  }, a = (B) => {
    if (Ce.value === 0 && !B || Ce.value === e.value.length && B)
      return;
    Ce.value = B ? Ce.value + 1 : Ce.value - 1, e.value[Ce.value] ? e.value[Ce.value] && !e.value[Ce.value][Oe.value] && Oe.value !== 0 && (Oe.value = e.value[Ce.value].length - 1) : Ce.value = B ? Ce.value - 1 : Ce.value + 1;
  }, t = (B) => {
    let E = null;
    e.value[Ce.value] && (E = e.value[Ce.value][Oe.value]), E ? E.focus({ preventScroll: !St.value }) : Oe.value = B ? Oe.value - 1 : Oe.value + 1;
  }, o = () => {
    n(!0), t(!0);
  }, d = () => {
    n(!1), t(!1);
  }, p = () => {
    a(!1), t(!0);
  }, D = () => {
    a(!0), t(!0);
  }, O = (B, E) => {
    he[E] = B;
  }, I = (B, E) => {
    he[E] = B;
  }, L = () => {
    Oe.value = 0, Ce.value = 0;
  };
  return {
    buildMatrix: O,
    buildMultiLevelMatrix: I,
    setTimePickerBackRef: (B) => {
      Jt.value = B;
    },
    setSelectionGrid: (B) => {
      St.value = B, L(), B || (he.selectionGrid = []);
    },
    setTimePicker: (B, E = !1) => {
      Qt.value = B, tn.value = E, L(), B || (he.timePicker[0] = [], he.timePicker[1] = []);
    },
    setTimePickerElements: (B, E = 0) => {
      he.timePicker[E] = B;
    },
    arrowRight: o,
    arrowLeft: d,
    arrowUp: p,
    arrowDown: D,
    clearArrowNav: () => {
      he.monthYear = [], he.calendar = [], he.time = [], he.actionRow = [], he.selectionGrid = [], he.timePicker[0] = [], he.timePicker[1] = [], St.value = !1, Qt.value = !1, tn.value = !1, en.value = !1, L(), Jt.value = null;
    },
    setMonthPicker: (B) => {
      en.value = B, L();
    },
    refSets: he
    // exposed for testing
  };
}, In = (e) => Array.isArray(e), lt = (e) => Array.isArray(e), On = (e) => Array.isArray(e) && e.length === 2, Ll = (e, n, a, t, o) => {
  const {
    getDefaultStartTime: d,
    isDisabled: p,
    sanitizeDate: D,
    getWeekFromDate: O,
    setDateMonthOrYear: I,
    validateMonthYearInRange: L,
    defaults: A
  } = Le(e), c = V({
    get: () => e.internalModelValue,
    set: (s) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", s);
    }
  }), T = F([]);
  ct(c, () => {
    e.multiCalendars || ne();
  });
  const z = F([{ month: ge($()), year: pe($()) }]), Y = Dt({
    hours: e.range ? [Xe($()), Xe($())] : Xe($()),
    minutes: e.range ? [qe($()), qe($())] : qe($()),
    seconds: e.range ? [0, 0] : 0
  }), Q = V(
    () => (s) => z.value[s] ? z.value[s].month : 0
  ), B = V(
    () => (s) => z.value[s] ? z.value[s].year : 0
  ), E = V(() => e.flow && e.flow.length ? o.value === e.flow.length : !0), N = (s, w, K) => {
    var ee, we;
    z.value[s] || (z.value[s] = { month: 0, year: 0 }), z.value[s].month = w === null ? (ee = z.value[s]) == null ? void 0 : ee.month : w, z.value[s].year = K === null ? (we = z.value[s]) == null ? void 0 : we.year : K;
  }, j = (s, w) => {
    Y[s] = w;
  };
  He(() => {
    c.value || (e.startDate && (N(0, ge($(e.startDate)), pe($(e.startDate))), A.value.multiCalendars && me(0)), A.value.startTime && _()), ne(!0);
  });
  const ne = (s = !1) => {
    if (c.value)
      return Array.isArray(c.value) ? (T.value = c.value, S(s)) : ce(c.value);
    if (e.timePicker)
      return b();
    if (e.monthPicker && !e.range)
      return U();
    if (e.yearPicker && !e.range)
      return X();
    if (A.value.multiCalendars && s && !e.startDate)
      return re($(), s);
  }, re = (s, w = !1) => {
    if ((!A.value.multiCalendars || !e.multiStatic || w) && N(0, ge(s), pe(s)), A.value.multiCalendars)
      for (let K = 1; K < A.value.multiCalendars; K++) {
        const ee = Be($(), { month: Q.value(K - 1), year: B.value(K - 1) }), we = Un(ee, { months: 1 });
        z.value[K] = { month: ge(we), year: pe(we) };
      }
  }, ce = (s) => {
    re(s), j("hours", Xe(s)), j("minutes", qe(s)), j("seconds", ht(s));
  }, P = (s, w) => {
    re(s[0], w);
    const K = (ee, we) => [
      ee(s[0]),
      s[1] ? ee(s[1]) : Y[we][1]
    ];
    j("hours", K(Xe, "hours")), j("minutes", K(qe, "minutes")), j("seconds", K(ht, "seconds"));
  }, y = (s, w) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return P(s, w);
    if (e.multiDates) {
      const K = s[s.length - 1];
      return ce(K);
    }
  }, S = (s) => {
    const w = c.value;
    y(w, s), A.value.multiCalendars && e.multiCalendarsSolo && u();
  }, b = () => {
    if (_(), !e.range)
      c.value = Fe($(), Y.hours, Y.minutes, q());
    else {
      const s = Y.hours, w = Y.minutes;
      c.value = [
        Fe($(), s[0], w[0], q()),
        Fe($(), s[1], w[1], q(!1))
      ];
    }
  }, U = () => {
    c.value = I($(), Q.value(0), B.value(0));
  }, X = () => {
    c.value = $();
  }, q = (s = !0) => e.enableSeconds ? Array.isArray(Y.seconds) ? s ? Y.seconds[0] : Y.seconds[1] : Y.seconds : 0, _ = () => {
    const s = d();
    if (s) {
      const w = Array.isArray(s), K = w ? [+s[0].hours, +s[1].hours] : +s.hours, ee = w ? [+s[0].minutes, +s[1].minutes] : +s.minutes, we = w ? [+s[0].seconds, +s[1].seconds] : +s.seconds;
      j("hours", K), j("minutes", ee), e.enableSeconds && j("seconds", we);
    }
  }, C = () => Array.isArray(c.value) && c.value.length ? c.value[c.value.length - 1] : null, u = () => {
    if (Array.isArray(c.value) && c.value.length === 2) {
      const s = $(
        $(c.value[1] ? c.value[1] : st(c.value[0], 1))
      ), [w, K] = [ge(c.value[0]), pe(c.value[0])], [ee, we] = [ge(c.value[1]), pe(c.value[1])];
      (w !== ee || w === ee && K !== we) && e.multiCalendarsSolo && N(1, ge(s), pe(s));
    }
  }, l = (s) => {
    const w = st(s, 1);
    return { month: ge(w), year: pe(w) };
  }, v = (s) => {
    const w = ge($(s)), K = pe($(s));
    if (N(0, w, K), A.value.multiCalendars > 0)
      for (let ee = 1; ee < A.value.multiCalendars; ee++) {
        const we = l(
          Be($(s), { year: Q.value(ee - 1), month: B.value(ee - 1) })
        );
        N(ee, we.month, we.year);
      }
  }, m = (s) => {
    if (c.value && Array.isArray(c.value))
      if (c.value.some((w) => ke(s, w))) {
        const w = c.value.filter((K) => !ke(K, s));
        c.value = w.length ? w : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > c.value.length || !e.multiDatesLimit) && c.value.push(s);
    else
      c.value = [s];
  }, k = (s, w) => {
    const K = Ve(s, w) ? w : s, ee = Ve(w, s) ? w : s;
    return kn({ start: K, end: ee });
  }, x = (s, w = 0) => {
    if (Array.isArray(c.value) && c.value[w]) {
      const K = ia(s, c.value[w]), ee = k(c.value[w], s), we = ee.length === 1 ? 0 : ee.filter((W) => p(W)).length, h = Math.abs(K) - we;
      if (e.minRange && e.maxRange)
        return h >= +e.minRange && h <= +e.maxRange;
      if (e.minRange)
        return h >= +e.minRange;
      if (e.maxRange)
        return h <= +e.maxRange;
    }
    return !0;
  }, Z = (s) => Array.isArray(c.value) && c.value.length === 2 ? e.fixedStart && (Ve(s, c.value[0]) || ke(s, c.value[0])) ? [c.value[0], s] : e.fixedEnd && (Re(s, c.value[1]) || ke(s, c.value[1])) ? [s, c.value[1]] : (n("invalid-fixed-range", s), c.value) : [], de = () => {
    e.autoApply && E.value && n("auto-apply");
  }, f = () => {
    e.autoApply && n("select-date");
  }, r = (s) => !kn({ start: s[0], end: s[1] }).some((K) => p(K)), G = (s) => (c.value = O($(s.value)), de()), be = (s) => {
    const w = Fe($(s.value), Y.hours, Y.minutes, q());
    e.multiDates ? m(w) : c.value = w, a(), de();
  }, $e = () => {
    T.value = c.value ? c.value.slice() : [], T.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (T.value = []);
  }, ze = (s, w) => {
    const K = [$(s.value), mt($(s.value), +e.autoRange)];
    r(K) && (w && v(s.value), T.value = K);
  }, Qe = (s) => {
    ae(s.value) || !x(s.value, e.fixedStart ? 0 : 1) || (T.value = Z($(s.value)));
  }, ae = (s) => e.noDisabledRange ? k(T.value[0], s).some((K) => p(K)) : !1, et = (s, w) => {
    if ($e(), e.autoRange)
      return ze(s, w);
    if (e.fixedStart || e.fixedEnd)
      return Qe(s);
    T.value[0] ? x($(s.value)) && !ae(s.value) && (Re($(s.value), $(T.value[0])) ? T.value.unshift($(s.value)) : T.value[1] = $(s.value)) : T.value[0] = $(s.value);
  }, xe = (s) => {
    T.value[s] = Fe(
      T.value[s],
      Y.hours[s],
      Y.minutes[s],
      q(s !== 1)
    );
  }, Ie = () => {
    T.value.length && (T.value[0] && !T.value[1] ? xe(0) : (xe(0), xe(1), a()), c.value = T.value.slice(), T.value[0] && T.value[1] && e.autoApply && n("auto-apply"), T.value[0] && !T.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, le = (s, w = !1) => {
    if (!(p(s.value) || !s.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return G(s);
      if (!e.range)
        return be(s);
      lt(Y.hours) && lt(Y.minutes) && !e.multiDates && (et(s, w), Ie());
    }
  }, ye = (s) => {
    const w = s[0];
    return e.weekNumbers === "local" ? oa(w.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? sa(w.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(w.value) : "";
  }, me = (s) => {
    for (let w = s - 1; w >= 0; w--) {
      const K = bt(Be($(), { month: Q.value(w + 1), year: B.value(w + 1) }), 1);
      N(w, ge(K), pe(K));
    }
    for (let w = s + 1; w <= A.value.multiCalendars - 1; w++) {
      const K = st(Be($(), { month: Q.value(w - 1), year: B.value(w - 1) }), 1);
      N(w, ge(K), pe(K));
    }
  }, Ge = (s) => I($(), Q.value(s), B.value(s)), Ze = (s) => Fe(s, Y.hours, Y.minutes, q()), Ht = (s, w) => {
    const K = e.monthPicker ? Q.value(s) !== w.month || !w.fromNav : B.value(s) !== w.year;
    if (N(s, w.month, w.year), A.value.multiCalendars && !e.multiCalendarsSolo && me(s), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (K) {
          let ee = c.value ? c.value.slice() : [];
          ee.length === 2 && ee[1] !== null && (ee = []), ee.length ? Re(Ge(s), ee[0]) ? ee.unshift(Ge(s)) : ee[1] = Ge(s) : ee = [Ge(s)], c.value = ee;
        }
      } else
        c.value = Ge(s);
    n("update-month-year", { instance: s, month: w.month, year: w.year }), t(e.multiCalendarsSolo ? s : void 0);
  }, Wt = async (s = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await yt();
      const w = e.monthPicker ? s : !1;
      e.range ? n("auto-apply", w || !c.value || c.value.length === 1) : n("auto-apply", w);
    }
    a();
  }, Mt = (s, w) => {
    const K = Be($(), { month: Q.value(w), year: B.value(w) }), ee = s < 0 ? st(K, 1) : bt(K, 1);
    L(ge(ee), pe(ee), s < 0, e.preventMinMaxNavigation) && (N(w, ge(ee), pe(ee)), A.value.multiCalendars && !e.multiCalendarsSolo && me(w), n("update-month-year", { instance: w, month: ge(ee), year: pe(ee) }), t());
  }, pt = (s) => {
    In(s) && In(c.value) && lt(Y.hours) && lt(Y.minutes) ? (s[0] && c.value[0] && (c.value[0] = Fe(s[0], Y.hours[0], Y.minutes[0], q())), s[1] && c.value[1] && (c.value[1] = Fe(s[1], Y.hours[1], Y.minutes[1], q(!1)))) : e.multiDates && Array.isArray(c.value) ? c.value[c.value.length - 1] = Ze(s) : !e.range && !On(s) && (c.value = Ze(s)), n("time-update");
  }, zt = (s, w = !0, K = !1) => {
    const ee = w ? s : Y.hours, we = !w && !K ? s : Y.minutes, h = K ? s : Y.seconds;
    if (e.range && On(c.value) && lt(ee) && lt(we) && lt(h) && !e.disableTimeRangeValidation) {
      const W = (De) => Fe(c.value[De], ee[De], we[De], h[De]), Te = (De) => fn(c.value[De], 0);
      if (ke(c.value[0], c.value[1]) && (dn(W(0), Te(1)) || cn(W(1), Te(0))))
        return;
    }
    if (j("hours", ee), j("minutes", we), j("seconds", h), c.value)
      if (e.multiDates) {
        const W = C();
        W && pt(W);
      } else
        pt(c.value);
    else
      e.timePicker && pt(e.range ? [$(), $()] : $());
    a();
  }, xt = (s, w) => {
    e.monthChangeOnScroll && Mt(e.monthChangeOnScroll !== "inverse" ? -s.deltaY : s.deltaY, w);
  }, Kt = (s, w, K = !1) => {
    e.monthChangeOnArrows && e.vertical === K && _t(s, w);
  }, _t = (s, w) => {
    Mt(s === "right" ? -1 : 1, w);
  };
  return {
    time: Y,
    month: Q,
    year: B,
    modelValue: c,
    calendars: z,
    monthYearSelect: Wt,
    isDisabled: p,
    updateTime: zt,
    getWeekNum: ye,
    selectDate: le,
    updateMonthYear: Ht,
    handleScroll: xt,
    getMarker: (s) => e.markers.find((w) => ke(D(s.value), D(w.date))),
    handleArrow: Kt,
    handleSwipe: _t,
    selectCurrentDate: () => {
      e.range ? c.value && Array.isArray(c.value) && c.value[0] ? c.value = Re($(), c.value[0]) ? [$(), c.value[0]] : [c.value[0], $()] : c.value = [$()] : c.value = $(), f();
    },
    presetDateRange: (s, w) => {
      w || s.length && s.length <= 2 && e.range && (c.value = s.map((K) => $(K)), f(), e.multiCalendars && yt().then(() => ne(!0)));
    }
  };
}, Fl = (e, n, a) => {
  const t = F(), {
    getZonedToUtc: o,
    getZonedDate: d,
    formatDate: p,
    getDefaultPattern: D,
    checkRangeEnabled: O,
    checkPartialRangeValue: I,
    isValidDate: L,
    setDateMonthOrYear: A,
    defaults: c
  } = Le(n), T = F(""), z = Ot(n, "format");
  ct(t, () => {
    e("internal-model-change", t.value);
  }), ct(z, () => {
    l();
  });
  const Y = (r) => {
    const G = r || $();
    return n.modelType ? m(G) : {
      hours: Xe(G),
      minutes: qe(G),
      seconds: n.enableSeconds ? ht(G) : 0
    };
  }, Q = (r) => n.modelType ? m(r) : { month: ge(r), year: pe(r) }, B = (r) => Array.isArray(r) ? O(() => [
    ut($(), r[0]),
    r[1] ? ut($(), r[1]) : I()
  ]) : ut($(), +r), E = (r, G) => (typeof r == "string" || typeof r == "number") && n.modelType ? v(r) : G, N = (r) => Array.isArray(r) ? [
    E(
      r[0],
      Fe(null, +r[0].hours, +r[0].minutes, r[0].seconds)
    ),
    E(
      r[1],
      Fe(null, +r[1].hours, +r[1].minutes, r[1].seconds)
    )
  ] : E(r, Fe(null, r.hours, r.minutes, r.seconds)), j = (r) => Array.isArray(r) ? O(() => [
    E(r[0], A(null, +r[0].month, +r[0].year)),
    E(
      r[1],
      r[1] ? A(null, +r[1].month, +r[1].year) : I()
    )
  ]) : E(r, A(null, +r.month, +r.year)), ne = (r) => {
    if (Array.isArray(r))
      return r.map((G) => v(G));
    throw new Error(Lt.dateArr("multi-dates"));
  }, re = (r) => {
    if (Array.isArray(r))
      return [$(r[0]), $(r[1])];
    throw new Error(Lt.dateArr("week-picker"));
  }, ce = (r) => n.modelAuto ? Array.isArray(r) ? [v(r[0]), v(r[1])] : n.autoApply ? [v(r)] : [v(r), null] : Array.isArray(r) ? O(() => [
    v(r[0]),
    r[1] ? v(r[1]) : I()
  ]) : v(r), P = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(I());
  }, y = () => {
    const r = t.value;
    return [
      m(r[0]),
      r[1] ? m(r[1]) : I()
    ];
  }, S = () => t.value[1] ? y() : m(Ae(t.value[0])), b = () => (t.value || []).map((r) => m(r)), U = () => (P(), n.modelAuto ? S() : n.multiDates ? b() : Array.isArray(t.value) ? O(() => y()) : m(Ae(t.value))), X = (r) => r ? n.timePicker ? N(Ae(r)) : n.monthPicker ? j(Ae(r)) : n.yearPicker ? B(Ae(r)) : n.multiDates ? ne(Ae(r)) : n.weekPicker ? re(Ae(r)) : ce(Ae(r)) : null, q = (r) => {
    const G = X(r);
    L(Ae(G)) ? (t.value = Ae(G), l()) : (t.value = null, T.value = "");
  }, _ = () => {
    var G;
    const r = (be) => {
      var $e;
      return wt(be, ($e = c.value.textInputOptions) == null ? void 0 : $e.format);
    };
    return `${r(t.value[0])} ${(G = c.value.textInputOptions) == null ? void 0 : G.rangeSeparator} ${t.value[1] ? r(t.value[1]) : ""}`;
  }, C = () => {
    var r;
    return a.value && t.value ? Array.isArray(t.value) ? _() : wt(t.value, (r = c.value.textInputOptions) == null ? void 0 : r.format) : p(t.value);
  }, u = () => {
    var r;
    return t.value ? n.multiDates ? t.value.map((G) => p(G)).join("; ") : n.textInput && typeof ((r = c.value.textInputOptions) == null ? void 0 : r.format) == "string" ? C() : p(t.value) : "";
  }, l = () => {
    !n.format || typeof n.format == "string" ? T.value = u() : T.value = n.format(t.value);
  }, v = (r) => {
    if (n.utc) {
      const G = new Date(r);
      return n.utc === "preserve" ? new Date(G.getTime() + G.getTimezoneOffset() * 6e4) : G;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? d(new Date(r)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? ln(r, D(), new Date()) : d(ln(r, n.modelType, new Date())) : d(new Date(r));
  }, m = (r) => r ? n.utc ? el(r, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +o(r) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? p(o(r)) : p(o(r), n.modelType) : o(r) : "", k = (r) => {
    e("update:model-value", r);
  }, x = (r) => Array.isArray(t.value) ? [
    r(t.value[0]),
    t.value[1] ? r(t.value[1]) : I()
  ] : r(Ae(t.value)), Z = (r) => k(Ae(x(r)));
  return {
    inputValue: T,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: q,
    formatInputValue: l,
    emitModelValue: () => (l(), n.monthPicker ? Z(Q) : n.timePicker ? Z(Y) : n.yearPicker ? Z(pe) : n.weekPicker ? k(t.value) : k(U()))
  };
}, Ul = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: o, defaults: d } = Le(e), p = (A, c) => {
    let T = A;
    return d.value.filters.months.includes(ge(T)) ? (T = c ? st(A, 1) : bt(A, 1), p(T, c)) : T;
  }, D = (A, c) => {
    let T = A;
    return d.value.filters.years.includes(pe(T)) ? (T = c ? ua(A, 1) : ca(A, 1), D(T, c)) : T;
  }, O = (A) => {
    const c = Be(new Date(), { month: e.month, year: e.year });
    let T = A ? st(c, 1) : bt(c, 1), z = ge(T), Y = pe(T);
    d.value.filters.months.includes(z) && (T = p(T, A), z = ge(T), Y = pe(T)), d.value.filters.years.includes(Y) && (T = D(T, A), Y = pe(T)), a(z, Y, A, e.preventMinMaxNavigation) && I(z, Y);
  }, I = (A, c) => {
    n("update-month-year", { month: A, year: c });
  }, L = V(() => (A) => {
    if (!e.preventMinMaxNavigation || A && !e.maxDate || !A && !e.minDate)
      return !1;
    const c = Be(new Date(), { month: e.month, year: e.year }), T = A ? st(c, 1) : bt(c, 1), z = [ge(T), pe(T)];
    return A ? !t(...z) : !o(...z);
  });
  return { handleMonthYearChange: O, isDisabled: L, updateMonthYear: I };
};
var It = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(It || {});
const Hl = (e, n, a, t) => {
  const o = F({
    top: "0",
    left: "0",
    transform: "none"
  }), d = F(!1), p = Ot(t, "teleportCenter");
  ct(p, () => {
    Y();
  });
  const D = (P) => {
    if (t.teleport) {
      const y = P.getBoundingClientRect();
      return {
        left: y.left + window.scrollX,
        top: y.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, O = (P, y) => {
    o.value.left = `${P + y}px`, o.value.transform = "translateX(-100%)";
  }, I = (P) => {
    o.value.left = `${P}px`, o.value.transform = "translateX(0)";
  }, L = (P, y, S = !1) => {
    t.position === It.left && I(P), t.position === It.right && O(P, y), t.position === It.center && (o.value.left = `${P + y / 2}px`, o.value.transform = S ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, A = (P) => {
    const { width: y, height: S } = P.getBoundingClientRect(), { top: b, left: U } = t.altPosition ? t.altPosition(P) : D(P);
    return { top: +b, left: +U, width: y, height: S };
  }, c = () => {
    const P = _e(n);
    if (P) {
      const { top: y, left: S, width: b, height: U } = A(P);
      o.value.top = `${y + U / 2}px`, o.value.transform = "translateY(-50%)", L(S, b, !0);
    }
  }, T = () => {
    o.value.left = "50%", o.value.top = "50%", o.value.transform = "translate(-50%, -50%)", o.value.position = "fixed";
  }, z = () => {
    const P = _e(n), { top: y, left: S, transform: b } = t.altPosition(P);
    o.value = { top: `${y}px`, left: `${S}px`, transform: b || "" };
  }, Y = (P = !0) => {
    if (!t.inline)
      return p.value ? T() : t.altPosition !== null ? z() : (P && a("recalculate-position"), ne());
  }, Q = ({
    inputEl: P,
    menuEl: y,
    left: S,
    width: b
  }) => {
    window.screen.width > 768 && L(S, b), N(P, y);
  }, B = (P, y) => {
    const { top: S, left: b, height: U, width: X } = A(P);
    o.value.top = `${U + S + +t.offset}px`, Q({ inputEl: P, menuEl: y, left: b, width: X }), d.value = !1;
  }, E = (P, y) => {
    const { top: S, left: b, width: U } = A(P), { height: X } = y.getBoundingClientRect();
    o.value.top = `${S - X - +t.offset}px`, Q({ inputEl: P, menuEl: y, left: b, width: U }), d.value = !0;
  }, N = (P, y) => {
    if (t.autoPosition) {
      const { left: S, width: b } = A(P), { left: U, right: X } = y.getBoundingClientRect();
      if(U < 0){
        return I(S)
      }
      if(X > wwLib.getFrontDocument().documentElement.clientWidth) {
        return O(S, b)
      }
    }
  }, j = (P, y) => {
    const { height: S } = y.getBoundingClientRect(), { top: b, height: U } = P.getBoundingClientRect(), q = window.innerHeight - b - U, _ = b;
    return S <= q ? B(P, y) : S > q && S <= _ ? E(P, y) : q >= _ ? B(P, y) : E(P, y);
  }, ne = () => {
    const P = _e(n), y = _e(e);
    if (P && y)
      return t.autoPosition ? j(P, y) : B(P, y);
  }, re = function(P) {
    if (P) {
      const y = P.scrollHeight > P.clientHeight, b = window.getComputedStyle(P).overflowY.indexOf("hidden") !== -1;
      return y && !b;
    }
    return !0;
  }, ce = function(P) {
    return !P || P === wwLib.getFrontDocument().body ? window : re(P) ? P : ce(P.parentNode);
  };
  return { openOnTop: d, menuPosition: o, setMenuPosition: Y, setInitialPosition: c, getScrollableParent: ce };
}, vt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], Wl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], zl = {
  all: () => vt,
  monthYear: () => vt.filter((e) => e.use.includes("month-year")),
  input: () => Wl,
  timePicker: () => vt.filter((e) => e.use.includes("time")),
  action: () => vt.filter((e) => e.use.includes("action")),
  calendar: () => vt.filter((e) => e.use.includes("calendar")),
  menu: () => vt.filter((e) => e.use.includes("menu"))
}, it = (e, n, a) => {
  const t = [];
  return zl[n]().forEach((o) => {
    e[o.name] && t.push(o.name);
  }), a && a.length && a.forEach((o) => {
    o.slot && t.push(o.slot);
  }), t;
}, Ut = (e) => ({ transitionName: V(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), at = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 },
  dpStyle: { type: Object, default: null }
}, xl = ["aria-label", "aria-disabled", "aria-readonly"], Kl = {
  key: 1,
  class: "dp__input_wrap"
}, jl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Gl = {
  key: 2,
  class: "dp__input_icon"
}, Zl = {
  key: 4,
  class: "dp__clear_icon"
}, Xl = /* @__PURE__ */ We({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...at
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: o, isValidDate: d, defaults: p } = Le(t), D = F(), O = F(null), I = F(!1), L = V(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: I.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), A = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), D.value = null);
    }, c = (y) => {
      var S;
      return Qa(y, ((S = p.value.textInputOptions) == null ? void 0 : S.format) || o());
    }, T = (y) => {
      const { rangeSeparator: S } = p.value.textInputOptions, [b, U] = y.split(`${S}`);
      if (b) {
        const X = c(b.trim()), q = U ? c(U.trim()) : null, _ = X && q ? [X, q] : [X];
        D.value = X ? _ : null;
      }
    }, z = (y) => {
      if (t.range)
        T(y);
      else if (t.multiDates) {
        const S = y.split(";");
        D.value = S.map((b) => c(b.trim())).filter((b) => b);
      } else
        D.value = c(y);
    }, Y = (y) => {
      var b;
      const { value: S } = y.target;
      S !== "" ? ((b = p.value.textInputOptions) != null && b.openMenu && !t.isMenuOpen && a("open"), z(S), a("set-input-date", D.value)) : A(), a("update:input-value", S);
    }, Q = () => {
      var y, S;
      (y = p.value.textInputOptions) != null && y.enterSubmit && d(D.value) && t.inputValue !== "" ? (a("set-input-date", D.value, !0), D.value = null) : (S = p.value.textInputOptions) != null && S.enterSubmit && t.inputValue === "" && (D.value = null, a("clear"));
    }, B = () => {
      var y, S;
      (y = p.value.textInputOptions) != null && y.tabSubmit && d(D.value) && t.inputValue !== "" ? (a("set-input-date", D.value, !0), D.value = null) : (S = p.value.textInputOptions) != null && S.tabSubmit && t.inputValue === "" && (D.value = null, a("clear"));
    }, E = () => {
      I.value = !0, a("focus");
    }, N = (y) => {
      var S;
      y.preventDefault(), y.stopImmediatePropagation(), y.stopPropagation(), t.textInput && ((S = p.value.textInputOptions) != null && S.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? p.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, j = () => {
      I.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && D.value && (a("set-input-date", D.value), a("select-date"), D.value = null);
    }, ne = () => {
      a("clear");
    }, re = (y) => {
      t.textInput || y.preventDefault();
    };
    return n({
      focusInput: () => {
        O.value && O.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (y) => {
        D.value = y;
      }
    }), (y, S) => {
      var b;
      return g(), R("div", {
        onClick: N,
        "aria-label": (b = i(p).ariaLabels) == null ? void 0 : b.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": y.disabled,
        "aria-readonly": y.readonly
      }, [
        y.$slots.trigger && !y.$slots["dp-input"] && !y.inline ? H(y.$slots, "trigger", { key: 0 }) : M("", !0),
        !y.$slots.trigger && (!y.inline || y.inlineWithInput) ? (g(), R("div", Kl, [
          y.$slots["dp-input"] && !y.$slots.trigger && !y.inline ? H(y.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: Y,
            onEnter: Q,
            onTab: B,
            onClear: ne
          }) : M("", !0),
          y.$slots["dp-input"] ? M("", !0) : (g(), R("input", {
            key: 1,
            ref_key: "inputRef",
            ref: O,
            id: y.uid ? `dp-input-${y.uid}` : void 0,
            name: y.name,
            class: ve(i(L)),
            inputmode: y.textInput ? "text" : "none",
            placeholder: y.placeholder,
            disabled: y.disabled,
            readonly: y.readonly,
            required: y.required,
            value: e.inputValue,
            autocomplete: y.autocomplete,
            onInput: Y,
            onKeydown: [
              ie(N, ["enter"]),
              ie(B, ["tab"])
            ],
            onBlur: j,
            onFocus: E,
            onKeypress: re
          }, null, 42, jl)),
          y.$slots["input-icon"] && !y.hideInputIcon ? (g(), R("span", Gl, [
            H(y.$slots, "input-icon")
          ])) : M("", !0),
          !y.$slots["input-icon"] && !y.hideInputIcon && !y.$slots["dp-input"] ? (g(), fe(i(Ft), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : M("", !0),
          y.$slots["clear-icon"] && e.inputValue && y.clearable && !y.disabled && !y.readonly ? (g(), R("span", Zl, [
            H(y.$slots, "clear-icon", { clear: ne })
          ])) : M("", !0),
          y.clearable && !y.$slots["clear-icon"] && e.inputValue && !y.disabled && !y.readonly ? (g(), fe(i(Ta), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Je(ne, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : M("", !0)
        ])) : M("", !0)
      ], 8, xl);
    };
  }
}), ql = { class: "dp__selection_preview" }, Jl = { class: "dp__action_buttons" }, Ql = ["onKeydown"], er = /* @__PURE__ */ We({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...at
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: o, defaults: d } = Le(a), { buildMatrix: p } = nt(), D = F(null), O = F(null);
    He(() => {
      a.arrowNavigation && p([_e(D), _e(O)], "actionRow");
    });
    const I = V(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), L = V(() => !c.value || !T.value || !I.value), A = V(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: L.value
    })), c = V(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : o(a.internalModelValue)), T = V(() => a.monthPicker ? B(a.internalModelValue) : !0), z = () => {
      const N = d.value.previewFormat;
      return a.timePicker || a.monthPicker, N(Ae(a.internalModelValue));
    }, Y = () => {
      const N = a.internalModelValue;
      return d.value.multiCalendars > 0 ? `${t(N[0])} - ${t(N[1])}` : [t(N[0]), t(N[1])];
    }, Q = V(() => !a.internalModelValue || !a.menuMount ? "" : typeof d.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? Y() : a.multiDates ? a.internalModelValue.map((N) => `${t(N)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : z()), B = (N) => {
      if (!a.monthPicker)
        return !0;
      let j = !0;
      return a.minDate && a.maxDate ? Ve($(N), $(a.minDate)) && Re($(N), $(a.maxDate)) : (a.minDate && (j = Ve($(N), $(a.minDate))), a.maxDate && (j = Re($(N), $(a.maxDate))), j);
    }, E = () => {
      c.value && T.value && I.value ? n("select-date") : n("invalid-select");
    };
    return (N, j) => (g(), R("div", {
      class: "dp__action_row",
      style: ot(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      N.$slots["action-row"] ? H(N.$slots, "action-row", Ne(Se({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: i(L),
        selectDate: () => N.$emit("select-date"),
        closePicker: () => N.$emit("close-picker")
      }))) : (g(), R(ue, { key: 1 }, [
        te("div", ql, [
          N.$slots["action-preview"] ? H(N.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : M("", !0),
          N.$slots["action-preview"] ? M("", !0) : (g(), R(ue, { key: 1 }, [
            Array.isArray(i(Q)) ? M("", !0) : (g(), R(ue, { key: 0 }, [
              Ke(Pe(i(Q)), 1)
            ], 64)),
            Array.isArray(i(Q)) ? (g(!0), R(ue, { key: 1 }, Me(i(Q), (ne, re) => (g(), R("div", { key: re }, Pe(ne), 1))), 128)) : M("", !0)
          ], 64))
        ]),
        te("div", Jl, [
          N.$slots["action-select"] ? H(N.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : M("", !0),
          N.$slots["action-select"] ? M("", !0) : (g(), R(ue, { key: 1 }, [
            N.inline ? M("", !0) : (g(), R("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: D,
              tabindex: "0",
              onClick: j[0] || (j[0] = (ne) => N.$emit("close-picker")),
              onKeydown: [
                j[1] || (j[1] = ie((ne) => N.$emit("close-picker"), ["enter"])),
                j[2] || (j[2] = ie((ne) => N.$emit("close-picker"), ["space"]))
              ]
            }, Pe(N.cancelText), 545)),
            te("span", {
              class: ve(i(A)),
              tabindex: "0",
              onKeydown: [
                ie(E, ["enter"]),
                ie(E, ["space"])
              ],
              onClick: E,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: O
            }, Pe(N.selectText), 43, Ql)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), tr = ["aria-label"], nr = {
  class: "dp__calendar_header",
  role: "row"
}, ar = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, lr = /* @__PURE__ */ te("div", { class: "dp__calendar_header_separator" }, null, -1), rr = ["aria-label"], or = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, sr = { class: "dp__cell_inner" }, ir = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], ur = /* @__PURE__ */ te("div", { class: "dp__arrow_bottom_tp" }, null, -1), cr = /* @__PURE__ */ We({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...at
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: o } = nt(), { setDateMonthOrYear: d, defaults: p } = Le(t), D = F(null), O = F({ bottom: "", left: "", transform: "" }), I = F([]), L = F(null), A = F(!0), c = F(""), T = F({ startX: 0, endX: 0, startY: 0, endY: 0 }), z = V(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Sl(t.locale, +t.weekStart));
    He(() => {
      a("mount", { cmp: "calendar", refs: I }), t.noSwipe || L.value && (L.value.addEventListener("touchstart", y, { passive: !1 }), L.value.addEventListener("touchend", S, { passive: !1 }), L.value.addEventListener("touchmove", b, { passive: !1 })), t.monthChangeOnScroll && L.value && L.value.addEventListener("wheel", q, { passive: !1 });
    });
    const Y = (_) => _ ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", Q = (_, C) => {
      if (t.transitions) {
        const u = je(d($(), t.month, t.year));
        c.value = Ve(je(d($(), _, C)), u) ? p.value.transitions[Y(!0)] : p.value.transitions[Y(!1)], A.value = !1, yt(() => {
          A.value = !0;
        });
      }
    }, B = V(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), E = V(() => (_) => {
      const C = Rl(_);
      return {
        dp__marker_dot: C.type === "dot",
        dp__marker_line: C.type === "line"
      };
    }), N = V(() => (_) => ke(_, D.value)), j = V(() => ({
      dp__calendar: !0,
      dp__calendar_next: p.value.multiCalendars > 0 && t.instance !== 0
    })), ne = V(() => (_) => t.hideOffsetDates ? _.current : !0), re = V(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), ce = (_, C, u) => {
      var l, v;
      if (a("set-hover-date", _), (v = (l = _.marker) == null ? void 0 : l.tooltip) != null && v.length) {
        const m = _e(I.value[C][u]);
        if (m) {
          const { width: k, height: x } = m.getBoundingClientRect();
          O.value = {
            bottom: `${x}px`,
            left: `${k / 2}px`,
            transform: "translateX(-50%)"
          }, D.value = _.value, a("tooltip-open", _.marker);
        }
      }
    }, P = (_) => {
      D.value && (D.value = null, a("tooltip-close", _.marker));
    }, y = (_) => {
      T.value.startX = _.changedTouches[0].screenX, T.value.startY = _.changedTouches[0].screenY;
    }, S = (_) => {
      T.value.endX = _.changedTouches[0].screenX, T.value.endY = _.changedTouches[0].screenY, U();
    }, b = (_) => {
      t.vertical && !t.inline && _.preventDefault();
    }, U = () => {
      const _ = t.vertical ? "Y" : "X";
      Math.abs(T.value[`start${_}`] - T.value[`end${_}`]) > 10 && a("handle-swipe", T.value[`start${_}`] > T.value[`end${_}`] ? "right" : "left");
    }, X = (_, C, u) => {
      _ && (Array.isArray(I.value[C]) ? I.value[C][u] = _ : I.value[C] = [_]), t.arrowNavigation && o(I.value, "calendar");
    }, q = (_) => {
      t.monthChangeOnScroll && (_.preventDefault(), a("handle-scroll", _));
    };
    return n({ triggerTransition: Q }), (_, C) => {
      var u;
      return g(), R("div", {
        class: ve(i(j))
      }, [
        te("div", {
          style: ot(i(re))
        }, [
          e.specificMode ? M("", !0) : (g(), R("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: L,
            class: ve(i(B)),
            role: "grid",
            "aria-label": (u = i(p).ariaLabels) == null ? void 0 : u.calendarWrap
          }, [
            te("div", nr, [
              _.weekNumbers ? (g(), R("div", ar, Pe(_.weekNumName), 1)) : M("", !0),
              (g(!0), R(ue, null, Me(i(z), (l, v) => (g(), R("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: v,
                "data-test": "calendar-header"
              }, [
                _.$slots["calendar-header"] ? H(_.$slots, "calendar-header", {
                  key: 0,
                  day: l,
                  index: v
                }) : M("", !0),
                _.$slots["calendar-header"] ? M("", !0) : (g(), R(ue, { key: 1 }, [
                  Ke(Pe(l), 1)
                ], 64))
              ]))), 128))
            ]),
            lr,
            tt(gt, {
              name: c.value,
              css: !!_.transitions
            }, {
              default: oe(() => {
                var l;
                return [
                  A.value ? (g(), R("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (l = i(p).ariaLabels) == null ? void 0 : l.calendarDays
                  }, [
                    (g(!0), R(ue, null, Me(e.mappedDates, (v, m) => (g(), R("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: m
                    }, [
                      _.weekNumbers ? (g(), R("div", or, [
                        te("div", sr, Pe(e.getWeekNum(v.days)), 1)
                      ])) : M("", !0),
                      (g(!0), R(ue, null, Me(v.days, (k, x) => {
                        var Z, de, f;
                        return g(), R("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (r) => X(r, m, x),
                          key: x + m,
                          "aria-selected": k.classData.dp__active_date || k.classData.dp__range_start || k.classData.dp__range_start,
                          "aria-disabled": k.classData.dp__cell_disabled,
                          "aria-label": (de = (Z = i(p).ariaLabels) == null ? void 0 : Z.day) == null ? void 0 : de.call(Z, k),
                          tabindex: "0",
                          "data-test": k.value,
                          onClick: Je((r) => _.$emit("select-date", k), ["stop", "prevent"]),
                          onKeydown: [
                            ie((r) => _.$emit("select-date", k), ["enter"]),
                            ie((r) => _.$emit("handle-space", k), ["space"])
                          ],
                          onMouseenter: (r) => ce(k, m, x),
                          onMouseleave: (r) => P(k)
                        }, [
                          te("div", {
                            class: ve(["dp__cell_inner", k.classData])
                          }, [
                            _.$slots.day && i(ne)(k) ? H(_.$slots, "day", {
                              key: 0,
                              day: +k.text,
                              date: k.value
                            }) : M("", !0),
                            _.$slots.day ? M("", !0) : (g(), R(ue, { key: 1 }, [
                              Ke(Pe(k.text), 1)
                            ], 64)),
                            k.marker && i(ne)(k) ? (g(), R("div", {
                              key: 2,
                              class: ve(i(E)(k.marker)),
                              style: ot(k.marker.color ? { backgroundColor: k.marker.color } : {})
                            }, null, 6)) : M("", !0),
                            i(N)(k.value) ? (g(), R("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: ot(O.value)
                            }, [
                              (f = k.marker) != null && f.tooltip ? (g(), R("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: C[0] || (C[0] = Je(() => {
                                }, ["stop"]))
                              }, [
                                (g(!0), R(ue, null, Me(k.marker.tooltip, (r, G) => (g(), R("div", {
                                  key: G,
                                  class: "dp__tooltip_text"
                                }, [
                                  _.$slots["marker-tooltip"] ? H(_.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: r,
                                    day: k.value
                                  }) : M("", !0),
                                  _.$slots["marker-tooltip"] ? M("", !0) : (g(), R(ue, { key: 1 }, [
                                    te("div", {
                                      class: "dp__tooltip_mark",
                                      style: ot(r.color ? { backgroundColor: r.color } : {})
                                    }, null, 4),
                                    te("div", null, Pe(r.text), 1)
                                  ], 64))
                                ]))), 128)),
                                ur
                              ])) : M("", !0)
                            ], 4)) : M("", !0)
                          ], 2)
                        ], 40, ir);
                      }), 128))
                    ]))), 128))
                  ], 8, rr)) : M("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, tr))
        ], 4)
      ], 2);
    };
  }
}), dr = ["aria-label", "aria-disabled"], nn = /* @__PURE__ */ We({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = F(null);
    return He(() => n("set-ref", a)), (t, o) => (g(), R("div", {
      class: "dp__month_year_col_nav",
      onClick: o[0] || (o[0] = (d) => t.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = ie((d) => t.$emit("activate"), ["enter"])),
        o[2] || (o[2] = ie((d) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      te("div", {
        class: ve(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        H(t.$slots, "default")
      ], 2)
    ], 40, dr));
  }
}), fr = ["onKeydown"], vr = { class: "dp__selection_grid_header" }, mr = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], yr = ["aria-label", "onKeydown"], $t = /* @__PURE__ */ We({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: o, buildMultiLevelMatrix: d, setMonthPicker: p } = nt(), { hideNavigationButtons: D } = Le(t), O = F(!1), I = F(null), L = F(null), A = F([]), c = F(), T = F(null), z = F(0), Y = F(null);
    Jn(() => {
      I.value = null;
    }), He(() => {
      yt().then(() => y()), B(), Q(!0);
    }), sn(() => Q(!1));
    const Q = (C) => {
      var u;
      t.arrowNavigation && ((u = t.headerRefs) != null && u.length ? p(C) : o(C));
    }, B = () => {
      const C = _e(L);
      C && (t.textInput || C.focus({ preventScroll: !0 }), O.value = C.clientHeight < C.scrollHeight);
    }, E = V(
      () => ({
        dp__overlay: !0
      })
    ), N = V(() => ({
      dp__overlay_col: !0
    })), j = (C) => t.skipActive ? !1 : C.value === t.modelValue, ne = V(() => t.items.map((C) => C.filter((u) => u).map((u) => {
      var m, k, x;
      const l = t.disabledValues.some((Z) => Z === u.value) || P(u.value), v = (m = t.multiModelValue) != null && m.length ? (k = t.multiModelValue) == null ? void 0 : k.some(
        (Z) => ke(
          Z,
          ut(
            t.monthPicker ? Rt(new Date(), u.value) : new Date(),
            t.monthPicker ? t.year : u.value
          )
        )
      ) : j(u);
      return {
        ...u,
        className: {
          dp__overlay_cell_active: v,
          dp__overlay_cell: !v,
          dp__overlay_cell_disabled: l,
          dp__overlay_cell_active_disabled: l && v,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (x = t.multiModelValue) != null && x.length ? b(u.value) : !1
        }
      };
    }))), re = V(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: O.value,
        dp__button_bottom: t.autoApply
      })
    ), ce = V(() => {
      var C, u;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((C = t.items) == null ? void 0 : C.length) <= 6,
        dp__container_block: ((u = t.items) == null ? void 0 : u.length) > 6
      };
    }), P = (C) => {
      const u = t.maxValue || t.maxValue === 0, l = t.minValue || t.minValue === 0;
      return !u && !l ? !1 : u && l ? +C > +t.maxValue || +C < +t.minValue : u ? +C > +t.maxValue : l ? +C < +t.minValue : !1;
    }, y = () => {
      const C = _e(I), u = _e(L), l = _e(T), v = _e(Y), m = l ? l.getBoundingClientRect().height : 0;
      u && (z.value = u.getBoundingClientRect().height - m), C && v && (v.scrollTop = C.offsetTop - v.offsetTop - (z.value / 2 - C.getBoundingClientRect().height) - m);
    }, S = (C) => {
      !t.disabledValues.some((u) => u === C) && !P(C) && (a("update:model-value", C), a("selected"));
    }, b = (C) => {
      const u = t.monthPicker ? t.year : C;
      return xn(
        t.multiModelValue,
        ut(
          t.monthPicker ? Rt(new Date(), c.value || 0) : new Date(),
          t.monthPicker ? u : c.value || u
        ),
        ut(t.monthPicker ? Rt(new Date(), C) : new Date(), u)
      );
    }, U = () => {
      a("toggle"), a("reset-flow");
    }, X = () => {
      t.escClose && U();
    }, q = (C, u, l, v) => {
      C && (u.value === +t.modelValue && !t.disabledValues.includes(u.value) && (I.value = C), t.arrowNavigation && (Array.isArray(A.value[l]) ? A.value[l][v] = C : A.value[l] = [C], _()));
    }, _ = () => {
      var u, l;
      const C = (u = t.headerRefs) != null && u.length ? [t.headerRefs].concat(A.value) : A.value.concat([t.skipButtonRef ? [] : [T.value]]);
      d(Ae(C), (l = t.headerRefs) != null && l.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: B }), (C, u) => {
      var l;
      return g(), R("div", {
        ref_key: "gridWrapRef",
        ref: L,
        class: ve(i(E)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ie(X, ["esc"])
      }, [
        te("div", {
          class: ve(i(ce)),
          ref_key: "containerRef",
          ref: Y,
          role: "grid",
          style: ot({ height: `${z.value}px` })
        }, [
          te("div", vr, [
            H(C.$slots, "header")
          ]),
          C.$slots.overlay ? H(C.$slots, "overlay", { key: 0 }) : (g(!0), R(ue, { key: 1 }, Me(i(ne), (v, m) => (g(), R("div", {
            class: "dp__overlay_row",
            key: m,
            role: "row"
          }, [
            (g(!0), R(ue, null, Me(v, (k, x) => (g(), R("div", {
              role: "gridcell",
              class: ve(i(N)),
              key: k.value,
              "aria-selected": k.value === e.modelValue && !e.disabledValues.includes(k.value),
              "aria-disabled": k.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (Z) => q(Z, k, m, x),
              tabindex: "0",
              "data-test": k.text,
              onClick: (Z) => S(k.value),
              onKeydown: [
                ie((Z) => S(k.value), ["enter"]),
                ie((Z) => S(k.value), ["space"])
              ],
              onMouseover: (Z) => c.value = k.value
            }, [
              te("div", {
                class: ve(k.className)
              }, [
                C.$slots.item ? H(C.$slots, "item", {
                  key: 0,
                  item: k
                }) : M("", !0),
                C.$slots.item ? M("", !0) : (g(), R(ue, { key: 1 }, [
                  Ke(Pe(k.text), 1)
                ], 64))
              ], 2)
            ], 42, mr))), 128))
          ]))), 128))
        ], 6),
        C.$slots["button-icon"] ? Ct((g(), R("div", {
          key: 0,
          role: "button",
          "aria-label": (l = e.ariaLabels) == null ? void 0 : l.toggleOverlay,
          class: ve(i(re)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: T,
          onClick: U,
          onKeydown: ie(U, ["enter"])
        }, [
          H(C.$slots, "button-icon")
        ], 42, yr)), [
          [Pt, !i(D)(e.type)]
        ]) : M("", !0)
      ], 42, fr);
    };
  }
}), hr = ["aria-label"], Bn = /* @__PURE__ */ We({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: o } = Ut(a.transitions), d = F(null);
    return He(() => n("set-ref", d)), (p, D) => (g(), R(ue, null, [
      te("div", {
        class: "dp__month_year_select",
        onClick: D[0] || (D[0] = (O) => p.$emit("toggle")),
        onKeydown: [
          D[1] || (D[1] = ie((O) => p.$emit("toggle"), ["enter"])),
          D[2] || (D[2] = ie((O) => p.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: d
      }, [
        H(p.$slots, "default")
      ], 40, hr),
      tt(gt, {
        name: i(t)(e.showSelectionGrid),
        css: i(o)
      }, {
        default: oe(() => [
          e.showSelectionGrid ? (g(), fe($t, Se({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": D[3] || (D[3] = (O) => p.$emit("update:model-value", O)),
            onToggle: D[4] || (D[4] = (O) => p.$emit("toggle"))
          }), Ee({
            "button-icon": oe(() => [
              p.$slots["calendar-icon"] ? H(p.$slots, "calendar-icon", { key: 0 }) : M("", !0),
              p.$slots["calendar-icon"] ? M("", !0) : (g(), fe(i(Ft), { key: 1 }))
            ]),
            _: 2
          }, [
            p.$slots[e.slotName] ? {
              name: "item",
              fn: oe(({ item: O }) => [
                H(p.$slots, e.slotName, { item: O })
              ]),
              key: "0"
            } : void 0,
            p.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: oe(() => [
                H(p.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            p.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: oe(() => [
                H(p.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : M("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), gr = { class: "dp__month_year_row" }, pr = { class: "dp__month_year_wrap" }, kr = { class: "dp__month_picker_header" }, wr = ["aria-label"], br = ["aria-label"], $r = ["aria-label"], Dr = /* @__PURE__ */ We({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...at
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: o } = Le(t), { transitionName: d, showTransition: p } = Ut(o.value.transitions), { buildMatrix: D } = nt(), { handleMonthYearChange: O, isDisabled: I, updateMonthYear: L } = Ul(t, a), A = F(!1), c = F(!1), T = F([null, null, null, null]), z = F(null), Y = F(null), Q = F(null);
    He(() => {
      a("mount");
    });
    const B = (f) => ({
      get: () => t[f],
      set: (r) => {
        const G = f === "month" ? "year" : "month";
        a("update-month-year", { [f]: r, [G]: t[G] }), a("month-year-select", f === "year"), f === "month" ? m(!0) : k(!0);
      }
    }), E = V(B("month")), N = V(B("year")), j = (f) => {
      const r = pe($(f));
      return t.year === r;
    }, ne = V(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((f) => $(f)).filter((f) => j(f)).map((f) => ge(f)) : [] : []), re = V(() => (f) => {
      const r = f === "month";
      return {
        showSelectionGrid: (r ? A : c).value,
        items: (r ? C : u).value,
        disabledValues: o.value.filters[r ? "months" : "years"].concat(ne.value),
        minValue: (r ? S : P).value,
        maxValue: (r ? b : y).value,
        headerRefs: r && t.monthPicker ? [z.value, Y.value, Q.value] : [],
        escClose: t.escClose,
        transitions: o.value.transitions,
        ariaLabels: o.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), ce = V(() => (f) => ({
      month: t.month,
      year: t.year,
      items: f === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: L,
      toggle: f === "month" ? m : k
    })), P = V(() => t.minDate ? pe($(t.minDate)) : null), y = V(() => t.maxDate ? pe($(t.maxDate)) : null), S = V(() => {
      if (t.minDate && P.value) {
        if (P.value > t.year)
          return 12;
        if (P.value === t.year)
          return ge($(t.minDate));
      }
      return null;
    }), b = V(() => t.maxDate && y.value ? y.value < t.year ? -1 : y.value === t.year ? ge($(t.maxDate)) : null : null), U = V(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), X = (f) => f.reverse(), q = (f, r = !1) => {
      const G = [], be = ($e) => r ? X($e) : $e;
      for (let $e = 0; $e < f.length; $e += 3) {
        const ze = [f[$e], f[$e + 1], f[$e + 2]];
        G.push(be(ze));
      }
      return r ? G.reverse() : G;
    }, _ = V(() => {
      const f = t.months.find((r) => r.value === t.month);
      return f || { text: "", value: 0 };
    }), C = V(() => q(t.months)), u = V(() => q(t.years, t.reverseYears)), l = V(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), v = V(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === o.value.multiCalendars - 1 : !0), m = (f = !1) => {
      x(f), A.value = !A.value, A.value || a("overlay-closed");
    }, k = (f = !1) => {
      x(f), c.value = !c.value, c.value || a("overlay-closed");
    }, x = (f) => {
      f || a("reset-flow");
    }, Z = (f = !1) => {
      I.value(f) || a("update-month-year", {
        year: f ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, de = (f, r) => {
      t.arrowNavigation && (T.value[r] = _e(f), D(T.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: m,
      toggleYearPicker: k,
      handleMonthYearChange: O
    }), (f, r) => {
      var G, be, $e, ze, Qe;
      return g(), R("div", gr, [
        f.$slots["month-year"] ? H(f.$slots, "month-year", Ne(Se({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: i(L), handleMonthYearChange: i(O), instance: e.instance }))) : (g(), R(ue, { key: 1 }, [
          !f.monthPicker && !f.yearPicker ? (g(), R(ue, { key: 0 }, [
            i(l) && !f.vertical ? (g(), fe(nn, {
              key: 0,
              "aria-label": (G = i(o).ariaLabels) == null ? void 0 : G.prevMonth,
              disabled: i(I)(!1),
              onActivate: r[0] || (r[0] = (ae) => i(O)(!1)),
              onSetRef: r[1] || (r[1] = (ae) => de(ae, 0))
            }, {
              default: oe(() => [
                f.$slots["arrow-left"] ? H(f.$slots, "arrow-left", { key: 0 }) : M("", !0),
                f.$slots["arrow-left"] ? M("", !0) : (g(), fe(i(wn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : M("", !0),
            te("div", pr, [
              tt(Bn, Se({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (be = i(o).ariaLabels) == null ? void 0 : be.openMonthsOverlay,
                modelValue: i(E),
                "onUpdate:modelValue": r[2] || (r[2] = (ae) => rt(E) ? E.value = ae : null)
              }, i(re)("month"), {
                onToggle: m,
                onSetRef: r[3] || (r[3] = (ae) => de(ae, 1))
              }), Ee({
                default: oe(() => [
                  f.$slots.month ? H(f.$slots, "month", Ne(Se({ key: 0 }, i(_)))) : M("", !0),
                  f.$slots.month ? M("", !0) : (g(), R(ue, { key: 1 }, [
                    Ke(Pe(i(_).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                f.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: oe(() => [
                    H(f.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                f.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: oe(({ item: ae }) => [
                    H(f.$slots, "month-overlay-value", {
                      text: ae.text,
                      value: ae.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                f.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: oe(() => [
                    H(f.$slots, "month-overlay", Ne(Ue(i(ce)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                f.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: oe(() => [
                    H(f.$slots, "month-overlay-header", { toggle: m })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              tt(Bn, Se({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": ($e = i(o).ariaLabels) == null ? void 0 : $e.openYearsOverlay,
                modelValue: i(N),
                "onUpdate:modelValue": r[4] || (r[4] = (ae) => rt(N) ? N.value = ae : null)
              }, i(re)("year"), {
                onToggle: k,
                onSetRef: r[5] || (r[5] = (ae) => de(ae, 2))
              }), Ee({
                default: oe(() => [
                  f.$slots.year ? H(f.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : M("", !0),
                  f.$slots.year ? M("", !0) : (g(), R(ue, { key: 1 }, [
                    Ke(Pe(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                f.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: oe(() => [
                    H(f.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                f.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: oe(({ item: ae }) => [
                    H(f.$slots, "year-overlay-value", {
                      text: ae.text,
                      value: ae.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                f.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: oe(() => [
                    H(f.$slots, "year-overlay", Ne(Ue(i(ce)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                f.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: oe(() => [
                    H(f.$slots, "year-overlay-header", { toggle: k })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            i(l) && f.vertical ? (g(), fe(nn, {
              key: 1,
              "aria-label": (ze = i(o).ariaLabels) == null ? void 0 : ze.prevMonth,
              disabled: i(I)(!1),
              onActivate: r[6] || (r[6] = (ae) => i(O)(!1))
            }, {
              default: oe(() => [
                f.$slots["arrow-up"] ? H(f.$slots, "arrow-up", { key: 0 }) : M("", !0),
                f.$slots["arrow-up"] ? M("", !0) : (g(), fe(i(Wn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : M("", !0),
            i(v) ? (g(), fe(nn, {
              key: 2,
              ref: "rightIcon",
              disabled: i(I)(!0),
              "aria-label": (Qe = i(o).ariaLabels) == null ? void 0 : Qe.nextMonth,
              onActivate: r[7] || (r[7] = (ae) => i(O)(!0)),
              onSetRef: r[8] || (r[8] = (ae) => de(ae, 3))
            }, {
              default: oe(() => [
                f.$slots[f.vertical ? "arrow-down" : "arrow-right"] ? H(f.$slots, f.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : M("", !0),
                f.$slots[f.vertical ? "arrow-down" : "arrow-right"] ? M("", !0) : (g(), fe(Yn(f.vertical ? i(zn) : i(bn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : M("", !0)
          ], 64)) : M("", !0),
          f.monthPicker ? (g(), fe($t, Se({ key: 1 }, i(re)("month"), {
            "skip-active": f.range,
            year: e.year,
            "multi-model-value": i(U),
            "month-picker": "",
            modelValue: i(E),
            "onUpdate:modelValue": r[17] || (r[17] = (ae) => rt(E) ? E.value = ae : null),
            onToggle: m,
            onSelected: r[18] || (r[18] = (ae) => f.$emit("overlay-closed"))
          }), Ee({
            header: oe(() => {
              var ae, et, xe;
              return [
                te("div", kr, [
                  te("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: z,
                    onClick: r[9] || (r[9] = (Ie) => Z(!1)),
                    onKeydown: r[10] || (r[10] = ie((Ie) => Z(!1), ["enter"]))
                  }, [
                    te("div", {
                      class: ve(["dp__inner_nav", { dp__inner_nav_disabled: i(I)(!1) }]),
                      role: "button",
                      "aria-label": (ae = i(o).ariaLabels) == null ? void 0 : ae.prevMonth
                    }, [
                      f.$slots["arrow-left"] ? H(f.$slots, "arrow-left", { key: 0 }) : M("", !0),
                      f.$slots["arrow-left"] ? M("", !0) : (g(), fe(i(wn), { key: 1 }))
                    ], 10, wr)
                  ], 544),
                  te("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: Y,
                    "aria-label": (et = i(o).ariaLabels) == null ? void 0 : et.openYearsOverlay,
                    tabindex: "0",
                    onClick: r[11] || (r[11] = () => k(!1)),
                    onKeydown: r[12] || (r[12] = ie(() => k(!1), ["enter"]))
                  }, [
                    f.$slots.year ? H(f.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : M("", !0),
                    f.$slots.year ? M("", !0) : (g(), R(ue, { key: 1 }, [
                      Ke(Pe(e.year), 1)
                    ], 64))
                  ], 40, br),
                  te("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: Q,
                    onClick: r[13] || (r[13] = (Ie) => Z(!0)),
                    onKeydown: r[14] || (r[14] = ie((Ie) => Z(!0), ["enter"]))
                  }, [
                    te("div", {
                      class: ve(["dp__inner_nav", { dp__inner_nav_disabled: i(I)(!0) }]),
                      role: "button",
                      "aria-label": (xe = i(o).ariaLabels) == null ? void 0 : xe.nextMonth
                    }, [
                      f.$slots["arrow-right"] ? H(f.$slots, "arrow-right", { key: 0 }) : M("", !0),
                      f.$slots["arrow-right"] ? M("", !0) : (g(), fe(i(bn), { key: 1 }))
                    ], 10, $r)
                  ], 544)
                ]),
                tt(gt, {
                  name: i(d)(c.value),
                  css: i(p)
                }, {
                  default: oe(() => [
                    c.value ? (g(), fe($t, Se({ key: 0 }, i(re)("year"), {
                      modelValue: i(N),
                      "onUpdate:modelValue": r[15] || (r[15] = (Ie) => rt(N) ? N.value = Ie : null),
                      onToggle: k,
                      onSelected: r[16] || (r[16] = (Ie) => f.$emit("overlay-closed"))
                    }), Ee({
                      "button-icon": oe(() => [
                        f.$slots["calendar-icon"] ? H(f.$slots, "calendar-icon", { key: 0 }) : M("", !0),
                        f.$slots["calendar-icon"] ? M("", !0) : (g(), fe(i(Ft), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      f.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: oe(({ item: Ie }) => [
                          H(f.$slots, "year-overlay-value", {
                            text: Ie.text,
                            value: Ie.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : M("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            f.$slots["month-overlay-value"] ? {
              name: "item",
              fn: oe(({ item: ae }) => [
                H(f.$slots, "month-overlay-value", {
                  text: ae.text,
                  value: ae.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : M("", !0),
          f.yearPicker ? (g(), fe($t, Se({ key: 2 }, i(re)("year"), {
            modelValue: i(N),
            "onUpdate:modelValue": r[19] || (r[19] = (ae) => rt(N) ? N.value = ae : null),
            "multi-model-value": i(U),
            "skip-active": f.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: k,
            onSelected: r[20] || (r[20] = (ae) => f.$emit("overlay-closed"))
          }), Ee({ _: 2 }, [
            f.$slots["year-overlay-value"] ? {
              name: "item",
              fn: oe(({ item: ae }) => [
                H(f.$slots, "year-overlay-value", {
                  text: ae.text,
                  value: ae.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : M("", !0)
        ], 64))
      ]);
    };
  }
}), Mr = {
  key: 0,
  class: "dp__time_input"
}, _r = ["aria-label", "onKeydown", "onClick"], Tr = ["aria-label", "data-test", "onKeydown", "onClick"], Ar = ["aria-label", "onKeydown", "onClick"], Sr = { key: 0 }, Cr = ["aria-label", "onKeydown"], Pr = /* @__PURE__ */ We({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...at
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: o, setTimePickerBackRef: d } = nt(), { defaults: p } = Le(t), { transitionName: D, showTransition: O } = Ut(p.value.transitions), I = Dt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), L = F("AM"), A = F(null), c = F([]);
    He(() => {
      a("mounted");
    });
    const T = V(() => (u) => !!(t.maxTime && t.maxTime[u] && t.maxTime[u] < t[u] + +t[`${u}Increment`])), z = V(() => (u) => !!(t.minTime && t.minTime[u] && t.minTime[u] > t[u] - +t[`${u}Increment`])), Y = (u, l) => Un(Be($(), u), l), Q = (u, l) => da(Be($(), u), l), B = V(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), E = V(() => {
      const u = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? u.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : u;
    }), N = V(() => E.value.filter((u) => !u.separator)), j = V(() => (u) => {
      if (u === "hours") {
        const l = U(t.hours);
        return { text: l < 10 ? `0${l}` : `${l}`, value: l };
      }
      return { text: t[u] < 10 ? `0${t[u]}` : `${t[u]}`, value: t[u] };
    }), ne = (u) => {
      const l = t.is24 ? 24 : 12, v = u === "hours" ? l : 60, m = +t[`${u}GridIncrement`], k = u === "hours" && !t.is24 ? m : 0, x = [];
      for (let Z = k; Z < v; Z += m)
        x.push({ value: Z, text: Z < 10 ? `0${Z}` : `${Z}` });
      return u === "hours" && !t.is24 && x.push({ value: 0, text: "12" }), Al(x);
    }, re = (u, l) => {
      const v = t.minTime && t.minTime[l], m = t.maxTime && t.maxTime[l];
      return v && m ? u < v || u > m : v ? u < v : m ? u > m : !1;
    }, ce = V(() => (u) => ne(u).flat().filter((v) => v).map((v) => v.value).filter((v) => re(v, u))), P = (u) => t[`no${u[0].toUpperCase() + u.slice(1)}Overlay`], y = (u) => {
      P(u) || (I[u] = !I[u], I[u] || a("overlay-closed"));
    }, S = (u) => u === "hours" ? Xe : u === "minutes" ? qe : ht, b = (u, l = !0) => {
      const v = l ? Y : Q;
      (l ? T.value(u) : z.value(u)) || a(
        `update:${u}`,
        S(u)(v({ [u]: +t[u] }, { [u]: +t[`${u}Increment`] }))
      );
    }, U = (u) => t.is24 ? u : (u >= 12 ? L.value = "PM" : L.value = "AM", Nl(u)), X = () => {
      L.value === "PM" ? (L.value = "AM", a("update:hours", t.hours - 12)) : (L.value = "PM", a("update:hours", t.hours + 12));
    }, q = (u) => {
      I[u] = !0;
    }, _ = (u, l, v) => {
      if (u && t.arrowNavigation) {
        Array.isArray(c.value[l]) ? c.value[l][v] = u : c.value[l] = [u];
        const m = c.value.reduce(
          (k, x) => x.map((Z, de) => [...k[de] || [], x[de]]),
          []
        );
        d(t.closeTimePickerBtn), A.value && (m[1] = m[1].concat(A.value)), o(m, t.order);
      }
    }, C = (u, l) => u === "hours" && !t.is24 ? a(`update:${u}`, L.value === "PM" ? l + 12 : l) : a(`update:${u}`, l);
    return n({ openChildCmp: q }), (u, l) => {
      var v;
      return u.disabled ? M("", !0) : (g(), R("div", Mr, [
        (g(!0), R(ue, null, Me(i(E), (m, k) => {
          var x, Z, de;
          return g(), R("div", {
            key: k,
            class: ve(i(B))
          }, [
            m.separator ? (g(), R(ue, { key: 0 }, [
              Ke(" : ")
            ], 64)) : (g(), R(ue, { key: 1 }, [
              te("div", {
                class: ve({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(T)(m.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (x = i(p).ariaLabels) == null ? void 0 : x.incrementValue(m.type),
                tabindex: "0",
                onKeydown: [
                  ie((f) => b(m.type), ["enter"]),
                  ie((f) => b(m.type), ["space"])
                ],
                onClick: (f) => b(m.type),
                ref_for: !0,
                ref: (f) => _(f, k, 0)
              }, [
                u.$slots["arrow-up"] ? H(u.$slots, "arrow-up", { key: 0 }) : M("", !0),
                u.$slots["arrow-up"] ? M("", !0) : (g(), fe(i(Wn), { key: 1 }))
              ], 42, _r),
              te("div", {
                role: "button",
                "aria-label": (Z = i(p).ariaLabels) == null ? void 0 : Z.openTpOverlay(m.type),
                class: ve(P(m.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${m.type}-toggle-overlay-btn`,
                onKeydown: [
                  ie((f) => y(m.type), ["enter"]),
                  ie((f) => y(m.type), ["space"])
                ],
                onClick: (f) => y(m.type),
                ref_for: !0,
                ref: (f) => _(f, k, 1)
              }, [
                u.$slots[m.type] ? H(u.$slots, m.type, {
                  key: 0,
                  text: i(j)(m.type).text,
                  value: i(j)(m.type).value
                }) : M("", !0),
                u.$slots[m.type] ? M("", !0) : (g(), R(ue, { key: 1 }, [
                  Ke(Pe(i(j)(m.type).text), 1)
                ], 64))
              ], 42, Tr),
              te("div", {
                class: ve({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(z)(m.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (de = i(p).ariaLabels) == null ? void 0 : de.decrementValue(m.type),
                tabindex: "0",
                onKeydown: [
                  ie((f) => b(m.type, !1), ["enter"]),
                  ie((f) => b(m.type, !1), ["space"])
                ],
                onClick: (f) => b(m.type, !1),
                ref_for: !0,
                ref: (f) => _(f, k, 2)
              }, [
                u.$slots["arrow-down"] ? H(u.$slots, "arrow-down", { key: 0 }) : M("", !0),
                u.$slots["arrow-down"] ? M("", !0) : (g(), fe(i(zn), { key: 1 }))
              ], 42, Ar)
            ], 64))
          ], 2);
        }), 128)),
        u.is24 ? M("", !0) : (g(), R("div", Sr, [
          u.$slots["am-pm-button"] ? H(u.$slots, "am-pm-button", {
            key: 0,
            toggle: X,
            value: L.value
          }) : M("", !0),
          u.$slots["am-pm-button"] ? M("", !0) : (g(), R("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: A,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (v = i(p).ariaLabels) == null ? void 0 : v.amPmButton,
            tabindex: "0",
            onClick: X,
            onKeydown: [
              ie(Je(X, ["prevent"]), ["enter"]),
              ie(Je(X, ["prevent"]), ["space"])
            ]
          }, Pe(L.value), 41, Cr))
        ])),
        (g(!0), R(ue, null, Me(i(N), (m, k) => (g(), fe(gt, {
          key: k,
          name: i(D)(I[m.type]),
          css: i(O)
        }, {
          default: oe(() => [
            I[m.type] ? (g(), fe($t, {
              key: 0,
              items: ne(m.type),
              "disabled-values": i(p).filters.times[m.type].concat(i(ce)(m.type)),
              "esc-close": u.escClose,
              "aria-labels": i(p).ariaLabels,
              "hide-navigation": u.hideNavigation,
              "onUpdate:modelValue": (x) => C(m.type, x),
              onSelected: (x) => y(m.type),
              onToggle: (x) => y(m.type),
              onResetFlow: l[0] || (l[0] = (x) => u.$emit("reset-flow")),
              type: m.type
            }, Ee({
              "button-icon": oe(() => [
                u.$slots["clock-icon"] ? H(u.$slots, "clock-icon", { key: 0 }) : M("", !0),
                u.$slots["clock-icon"] ? M("", !0) : (g(), fe(i(Hn), { key: 1 }))
              ]),
              _: 2
            }, [
              u.$slots[`${m.type}-overlay-value`] ? {
                name: "item",
                fn: oe(({ item: x }) => [
                  H(u.$slots, `${m.type}-overlay-value`, {
                    text: x.text,
                    value: x.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : M("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Nr = ["aria-label"], Rr = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Ir = {
  key: 1,
  class: "dp__overlay_row"
}, Or = ["aria-label"], Br = /* @__PURE__ */ We({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...at
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: o, setTimePicker: d } = nt(), p = un(), { hideNavigationButtons: D, defaults: O } = Le(t), { transitionName: I, showTransition: L } = Ut(O.value.transitions), A = F(null), c = F(null), T = F([]), z = F(null);
    He(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? o([_e(A.value)], "time") : d(!0, t.timePicker);
    });
    const Y = V(() => t.range && t.modelAuto ? Zn(t.internalModelValue) : !0), Q = F(!1), B = (b) => ({
      hours: Array.isArray(t.hours) ? t.hours[b] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[b] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[b] : t.seconds
    }), E = V(() => {
      const b = [];
      if (t.range)
        for (let U = 0; U < 2; U++)
          b.push(B(U));
      else
        b.push(B(0));
      return b;
    }), N = (b, U = !1, X = "") => {
      U || a("reset-flow"), Q.value = b, t.arrowNavigation && (d(b), b || a("overlay-closed")), yt(() => {
        X !== "" && T.value[0] && T.value[0].openChildCmp(X);
      });
    }, j = V(() => ({
      dp__button: !0,
      dp__button_bottom: t.autoApply
    })), ne = it(p, "timePicker"), re = (b, U, X) => t.range ? U === 0 ? [b, E.value[1][X]] : [E.value[0][X], b] : b, ce = (b) => {
      a("update:hours", b);
    }, P = (b) => {
      a("update:minutes", b);
    }, y = (b) => {
      a("update:seconds", b);
    }, S = () => {
      z.value && t.arrowNavigation && z.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: N }), (b, U) => {
      var X;
      return g(), R("div", null, [
        b.timePicker ? M("", !0) : Ct((g(), R("div", {
          key: 0,
          class: ve(i(j)),
          role: "button",
          "aria-label": (X = i(O).ariaLabels) == null ? void 0 : X.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: A,
          onKeydown: [
            U[0] || (U[0] = ie((q) => N(!0), ["enter"])),
            U[1] || (U[1] = ie((q) => N(!0), ["space"]))
          ],
          onClick: U[2] || (U[2] = (q) => N(!0))
        }, [
          b.$slots["clock-icon"] ? H(b.$slots, "clock-icon", { key: 0 }) : M("", !0),
          b.$slots["clock-icon"] ? M("", !0) : (g(), fe(i(Hn), { key: 1 }))
        ], 42, Nr)), [
          [Pt, !i(D)("time")]
        ]),
        tt(gt, {
          name: i(I)(Q.value),
          css: i(L)
        }, {
          default: oe(() => {
            var q;
            return [
              Q.value || b.timePicker ? (g(), R("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: z,
                tabindex: "0"
              }, [
                te("div", Rr, [
                  b.$slots["time-picker-overlay"] ? H(b.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ce,
                    setMinutes: P,
                    setSeconds: y
                  }) : M("", !0),
                  b.$slots["time-picker-overlay"] ? M("", !0) : (g(), R("div", Ir, [
                    (g(!0), R(ue, null, Me(i(E), (_, C) => Ct((g(), fe(Pr, Se({ key: C }, {
                      ...b.$props,
                      order: C,
                      hours: _.hours,
                      minutes: _.minutes,
                      seconds: _.seconds,
                      closeTimePickerBtn: c.value,
                      disabled: C === 0 ? b.fixedStart : b.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: T,
                      "onUpdate:hours": (u) => ce(re(u, C, "hours")),
                      "onUpdate:minutes": (u) => P(re(u, C, "minutes")),
                      "onUpdate:seconds": (u) => y(re(u, C, "seconds")),
                      onMounted: S,
                      onOverlayClosed: S
                    }), Ee({ _: 2 }, [
                      Me(i(ne), (u, l) => ({
                        name: u,
                        fn: oe((v) => [
                          H(b.$slots, u, Ne(Ue(v)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Pt, C === 0 ? !0 : i(Y)]
                    ])), 128))
                  ])),
                  b.timePicker ? M("", !0) : Ct((g(), R("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: c,
                    class: ve(i(j)),
                    role: "button",
                    "aria-label": (q = i(O).ariaLabels) == null ? void 0 : q.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      U[3] || (U[3] = ie((_) => N(!1), ["enter"])),
                      U[4] || (U[4] = ie((_) => N(!1), ["space"]))
                    ],
                    onClick: U[5] || (U[5] = (_) => N(!1))
                  }, [
                    b.$slots["calendar-icon"] ? H(b.$slots, "calendar-icon", { key: 0 }) : M("", !0),
                    b.$slots["calendar-icon"] ? M("", !0) : (g(), fe(i(Ft), { key: 1 }))
                  ], 42, Or)), [
                    [Pt, !i(D)("time")]
                  ])
                ])
              ], 512)) : M("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Yr = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: o } = Le(n), d = F(null), p = F($()), D = (l) => {
    !l.current && n.hideOffsetDates || (d.value = l.value);
  }, O = () => {
    d.value = null;
  }, I = (l) => Array.isArray(e.value) && n.range && e.value[0] && d.value ? l ? Ve(d.value, e.value[0]) : Re(d.value, e.value[0]) : !0, L = (l, v) => {
    const m = () => e.value ? v ? e.value[0] || null : e.value[1] : null, k = e.value && Array.isArray(e.value) ? m() : null;
    return ke($(l.value), k);
  }, A = (l) => {
    const v = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Re(d.value || null, v) : !0;
  }, c = (l, v = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) ? n.hideOffsetDates && !l.current ? !1 : ke($(l.value), e.value[v ? 0 : 1]) : n.range ? L(l, v) && A(v) || ke(l.value, Array.isArray(e.value) ? e.value[0] : null) && I(v) : !1, T = (l, v, m) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : m ? Ve(e.value[0], v.value) : Re(e.value[0], v.value) : !1, z = (l) => !e.value || n.hideOffsetDates && !l.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ke(l.value, e.value[0] ? e.value[0] : p.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((v) => ke(v, l.value)) : ke(l.value, e.value ? e.value : p.value), Y = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const v = mt(d.value, +n.autoRange), m = o($(d.value));
        return n.weekPicker ? ke(m[1], $(l.value)) : ke(v, $(l.value));
      }
      return !1;
    }
    return !1;
  }, Q = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        const v = mt(d.value, +n.autoRange);
        if (n.hideOffsetDates && !l.current)
          return !1;
        const m = o($(d.value));
        return n.weekPicker ? Ve(l.value, m[0]) && Re(l.value, m[1]) : Ve(l.value, d.value) && Re(l.value, v);
      }
      return !1;
    }
    return !1;
  }, B = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const v = o($(d.value));
        return n.weekPicker ? ke(v[0], l.value) : ke(d.value, l.value);
      }
      return !1;
    }
    return !1;
  }, E = (l) => xn(e.value, d.value, l.value), N = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, j = () => n.modelAuto ? Zn(n.internalModelValue) : !0, ne = (l) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const v = n.range ? !c(l) && !c(l, !1) : !0;
    return !a(l.value) && !z(l) && !(!l.current && n.hideOffsetDates) && v;
  }, re = (l) => n.range ? n.modelAuto ? N() && z(l) : !1 : z(l), ce = (l) => n.highlight ? t(l.value, n.highlight) : !1, P = (l) => a(l.value) && n.highlightDisabledDays === !1, y = (l) => n.highlightWeekDays && n.highlightWeekDays.includes(l.value.getDay()), S = (l) => (n.range || n.weekPicker) && (!(n.multiCalendars > 0) || l.current) && j() && !(!l.current && n.hideOffsetDates) && !z(l) ? E(l) : !1, b = (l) => ({
    dp__cell_offset: !l.current,
    dp__pointer: !n.disabled && !(!l.current && n.hideOffsetDates) && !a(l.value),
    dp__cell_disabled: a(l.value),
    dp__cell_highlight: !P(l) && (ce(l) || y(l)) && !re(l),
    dp__cell_highlight_active: !P(l) && (ce(l) || y(l)) && re(l),
    dp__today: !n.noToday && ke(l.value, p.value) && l.current
  }), U = (l) => ({
    dp__active_date: re(l),
    dp__date_hover: ne(l)
  }), X = (l) => ({
    ...q(l),
    ..._(l),
    dp__range_between_week: S(l) && n.weekPicker
  }), q = (l) => ({
    dp__range_start: n.multiCalendars > 0 ? l.current && c(l) && j() : c(l) && j(),
    dp__range_end: n.multiCalendars > 0 ? l.current && c(l, !1) && j() : c(l, !1) && j(),
    dp__range_between: S(l) && !n.weekPicker,
    dp__date_hover_start: T(ne(l), l, !0),
    dp__date_hover_end: T(ne(l), l, !1)
  }), _ = (l) => ({
    ...q(l),
    dp__cell_auto_range: Q(l),
    dp__cell_auto_range_start: B(l),
    dp__cell_auto_range_end: Y(l)
  }), C = (l) => n.range ? n.autoRange ? _(l) : n.modelAuto ? { ...U(l), ...q(l) } : q(l) : n.weekPicker ? X(l) : U(l);
  return {
    setHoverDate: D,
    clearHoverDate: O,
    getDayClassData: (l) => ({
      ...b(l),
      ...C(l),
      [n.dayClass ? n.dayClass(l.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Vr = ["id", "onKeydown"], Er = {
  key: 0,
  class: "dp__sidebar_left"
}, Lr = {
  key: 1,
  class: "dp__preset_ranges"
}, Fr = ["onClick"], Ur = {
  key: 2,
  class: "dp__sidebar_right"
}, Hr = {
  key: 3,
  class: "dp__now_wrap"
}, Wr = /* @__PURE__ */ We({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...at
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setMenuFocused: o, setShiftKey: d, control: p } = Kn(), { getCalendarDays: D, defaults: O } = Le(t), I = un(), L = F(null), A = Dt({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), c = F([]), T = F([]), z = F(null), Y = F(null), Q = F(0), B = F(!1), E = F(0);
    He(() => {
      var W;
      B.value = !0, !((W = t.presetRanges) != null && W.length) && !I["left-sidebar"] && !I["right-sidebar"] && ye();
      const h = _e(Y);
      if (h && !t.textInput && !t.inline && (o(!0), P()), h) {
        const Te = (De) => {
          Object.keys(I).length || De.preventDefault(), De.stopImmediatePropagation(), De.stopPropagation();
        };
        h.addEventListener("pointerdown", Te), h.addEventListener("mousedown", Te);
      }
      window.addEventListener("resize", ye);
    }), sn(() => {
      window.removeEventListener("resize", ye);
    });
    const { arrowRight: N, arrowLeft: j, arrowDown: ne, arrowUp: re } = nt(), ce = (h) => {
      h || h === 0 ? T.value[h].triggerTransition(
        X.value(h),
        q.value(h)
      ) : T.value.forEach(
        (W, Te) => W.triggerTransition(X.value(Te), q.value(Te))
      );
    }, P = () => {
      const h = _e(Y);
      h && h.focus({ preventScroll: !0 });
    }, y = () => {
      var h;
      (h = t.flow) != null && h.length && E.value !== -1 && (E.value += 1, a("flow-step", E.value), w());
    }, S = () => {
      E.value = -1;
    }, {
      calendars: b,
      modelValue: U,
      month: X,
      year: q,
      time: _,
      updateTime: C,
      updateMonthYear: u,
      selectDate: l,
      getWeekNum: v,
      monthYearSelect: m,
      handleScroll: k,
      handleArrow: x,
      handleSwipe: Z,
      getMarker: de,
      selectCurrentDate: f,
      presetDateRange: r
    } = Ll(t, a, y, ce, E), { setHoverDate: G, clearHoverDate: be, getDayClassData: $e } = Yr(U, t);
    ct(
      b,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const ze = it(I, "calendar"), Qe = it(I, "action"), ae = it(I, "timePicker"), et = it(I, "monthYear"), xe = V(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Ie = V(() => Cl(t.yearRange)), le = V(() => Pl(t.locale, t.monthNameFormat)), ye = () => {
      const h = _e(L);
      h && (Q.value = h.getBoundingClientRect().width);
    }, me = V(() => (h) => D(X.value(h), q.value(h))), Ge = V(
      () => O.value.multiCalendars > 0 && t.range ? [...Array(O.value.multiCalendars).keys()] : [0]
    ), Ze = V(
      () => (h) => h === 1
    ), Ht = V(() => t.monthPicker || t.timePicker || t.yearPicker), Wt = V(
      () => ({
        dp__flex_display: O.value.multiCalendars > 0
      })
    ), Mt = V(() => ({
      dp__instance_calendar: O.value.multiCalendars > 0
    })), pt = V(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), zt = V(
      () => (h) => Kt(me, h)
    ), xt = V(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), Kt = (h, W) => h.value(W).map((Te) => ({
      ...Te,
      days: Te.days.map((De) => (De.marker = de(De), De.classData = $e(De), De))
    })), _t = (h) => {
      h.stopPropagation(), h.stopImmediatePropagation();
    }, hn = () => {
      t.escClose && a("close-picker");
    }, gn = (h, W = !1) => {
      l(h, W), t.spaceConfirm && a("select-date");
    }, Tt = (h) => {
      var W;
      (W = t.flow) != null && W.length && (A[h] = !0, Object.keys(A).filter((Te) => !A[Te]).length || w());
    }, s = (h, W, Te, De, ...At) => {
      if (t.flow[E.value] === h) {
        const J = De ? W.value[0] : W.value;
        J && J[Te](...At);
      }
    }, w = () => {
      s("month", c, "toggleMonthPicker", !0, !0), s("year", c, "toggleYearPicker", !0, !0), s("calendar", z, "toggleTimePicker", !1, !1, !0), s("time", z, "toggleTimePicker", !1, !0, !0);
      const h = t.flow[E.value];
      (h === "hours" || h === "minutes" || h === "seconds") && s(h, z, "toggleTimePicker", !1, !0, !0, h);
    }, K = (h) => {
      if (t.arrowNavigation) {
        if (h === "up")
          return re();
        if (h === "down")
          return ne();
        if (h === "left")
          return j();
        if (h === "right")
          return N();
      } else
        h === "left" || h === "up" ? x("left", 0, h === "up") : x("right", 0, h === "down");
    }, ee = (h) => {
      d(h.shiftKey), !t.disableMonthYearSelect && h.code === "Tab" && h.target.classList.contains("dp__menu") && p.value.shiftKeyInMenu && (h.preventDefault(), h.stopImmediatePropagation(), a("close-picker"));
    }, we = (h) => {
      c.value[0] && c.value[0].handleMonthYearChange(h);
    };
    return n({
      updateMonthYear: u
    }), (h, W) => {
      var Te;
      return g(), fe(gt, {
        appear: "",
        name: (Te = i(O).transitions) == null ? void 0 : Te.menuAppear,
        mode: "out-in",
        css: !!h.transitions
      }, {
        default: oe(() => {
          var De, At;
          return [
            te("div", {
              id: h.uid ? `dp-menu-${h.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: Y,
              role: "dialog",
              class: ve(i(xt)),
              onMouseleave: W[14] || (W[14] = //@ts-ignore
              (...J) => i(be) && i(be)(...J)),
              onClick: _t,
              onKeydown: [
                ie(hn, ["esc"]),
                W[15] || (W[15] = ie(Je((J) => K("left"), ["prevent"]), ["left"])),
                W[16] || (W[16] = ie(Je((J) => K("up"), ["prevent"]), ["up"])),
                W[17] || (W[17] = ie(Je((J) => K("down"), ["prevent"]), ["down"])),
                W[18] || (W[18] = ie(Je((J) => K("right"), ["prevent"]), ["right"])),
                ee
              ]
            }, [
              (h.disabled || h.readonly) && h.inline ? (g(), R("div", {
                key: 0,
                class: ve(i(pt))
              }, null, 2)) : M("", !0),
              !h.inline && !h.teleportCenter ? (g(), R("div", {
                key: 1,
                class: ve(i(xe))
              }, null, 2)) : M("", !0),
              te("div", {
                class: ve({
                  dp__menu_content_wrapper: ((De = h.presetRanges) == null ? void 0 : De.length) || !!h.$slots["left-sidebar"] || !!h.$slots["right-sidebar"]
                })
              }, [
                h.$slots["left-sidebar"] ? (g(), R("div", Er, [
                  H(h.$slots, "left-sidebar", Ne(Ue({ handleMonthYearChange: we })))
                ])) : M("", !0),
                (At = h.presetRanges) != null && At.length ? (g(), R("div", Lr, [
                  (g(!0), R(ue, null, Me(h.presetRanges, (J, ft) => (g(), R("div", {
                    key: ft,
                    style: ot(J.style || {}),
                    class: "dp__preset_range",
                    onClick: (se) => i(r)(J.range, !!J.slot)
                  }, [
                    J.slot ? H(h.$slots, J.slot, {
                      key: 0,
                      presetDateRange: i(r),
                      label: J.label,
                      range: J.range
                    }) : (g(), R(ue, { key: 1 }, [
                      Ke(Pe(J.label), 1)
                    ], 64))
                  ], 12, Fr))), 128))
                ])) : M("", !0),
                te("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: L,
                  role: "document"
                }, [
                  te("div", {
                    class: ve(i(Wt))
                  }, [
                    (g(!0), R(ue, null, Me(i(Ge), (J, ft) => (g(), R("div", {
                      key: J,
                      class: ve(i(Mt))
                    }, [
                      !h.disableMonthYearSelect && !h.timePicker ? (g(), fe(Dr, Se({
                        key: 0,
                        ref_for: !0,
                        ref: (se) => {
                          se && (c.value[ft] = se);
                        },
                        months: i(le),
                        years: i(Ie),
                        month: i(X)(J),
                        year: i(q)(J),
                        instance: J,
                        "internal-model-value": e.internalModelValue
                      }, h.$props, {
                        onMount: W[0] || (W[0] = (se) => Tt("monthYearInput")),
                        onResetFlow: S,
                        onUpdateMonthYear: (se) => i(u)(J, se),
                        onMonthYearSelect: i(m),
                        onOverlayClosed: P
                      }), Ee({ _: 2 }, [
                        Me(i(et), (se, qn) => ({
                          name: se,
                          fn: oe((jt) => [
                            H(h.$slots, se, Ne(Ue(jt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : M("", !0),
                      tt(cr, Se({
                        ref_for: !0,
                        ref: (se) => {
                          se && (T.value[ft] = se);
                        },
                        "specific-mode": i(Ht),
                        "get-week-num": i(v),
                        instance: J,
                        "mapped-dates": i(zt)(J),
                        month: i(X)(J),
                        year: i(q)(J)
                      }, h.$props, {
                        "flow-step": E.value,
                        "onUpdate:flowStep": W[1] || (W[1] = (se) => E.value = se),
                        onSelectDate: (se) => i(l)(se, !i(Ze)(J)),
                        onHandleSpace: (se) => gn(se, !i(Ze)(J)),
                        onSetHoverDate: W[2] || (W[2] = (se) => i(G)(se)),
                        onHandleScroll: (se) => i(k)(se, J),
                        onHandleSwipe: (se) => i(Z)(se, J),
                        onMount: W[3] || (W[3] = (se) => Tt("calendar")),
                        onResetFlow: S,
                        onTooltipOpen: W[4] || (W[4] = (se) => h.$emit("tooltip-open", se)),
                        onTooltipClose: W[5] || (W[5] = (se) => h.$emit("tooltip-close", se))
                      }), Ee({ _: 2 }, [
                        Me(i(ze), (se, qn) => ({
                          name: se,
                          fn: oe((jt) => [
                            H(h.$slots, se, Ne(Ue({ ...jt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  te("div", null, [
                    h.$slots["time-picker"] ? H(h.$slots, "time-picker", Ne(Se({ key: 0 }, { time: i(_), updateTime: i(C) }))) : (g(), R(ue, { key: 1 }, [
                      h.enableTimePicker && !h.monthPicker && !h.weekPicker ? (g(), fe(Br, Se({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: z,
                        hours: i(_).hours,
                        minutes: i(_).minutes,
                        seconds: i(_).seconds,
                        "internal-model-value": e.internalModelValue
                      }, h.$props, {
                        onMount: W[6] || (W[6] = (J) => Tt("timePicker")),
                        "onUpdate:hours": W[7] || (W[7] = (J) => i(C)(J)),
                        "onUpdate:minutes": W[8] || (W[8] = (J) => i(C)(J, !1)),
                        "onUpdate:seconds": W[9] || (W[9] = (J) => i(C)(J, !1, !0)),
                        onResetFlow: S,
                        onOverlayClosed: P
                      }), Ee({ _: 2 }, [
                        Me(i(ae), (J, ft) => ({
                          name: J,
                          fn: oe((se) => [
                            H(h.$slots, J, Ne(Ue(se)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : M("", !0)
                    ], 64))
                  ])
                ], 512),
                h.$slots["right-sidebar"] ? (g(), R("div", Ur, [
                  H(h.$slots, "right-sidebar", Ne(Ue({ handleMonthYearChange: we })))
                ])) : M("", !0),
                h.showNowButton ? (g(), R("div", Hr, [
                  h.$slots["now-button"] ? H(h.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: i(f)
                  }) : M("", !0),
                  h.$slots["now-button"] ? M("", !0) : (g(), R("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: W[10] || (W[10] = //@ts-ignore
                    (...J) => i(f) && i(f)(...J))
                  }, Pe(h.nowButtonLabel), 1))
                ])) : M("", !0)
              ], 2),
              !h.autoApply || h.keepActionRow ? (g(), fe(er, Se({
                key: 2,
                "menu-mount": B.value,
                "calendar-width": Q.value,
                "internal-model-value": e.internalModelValue
              }, h.$props, {
                onClosePicker: W[11] || (W[11] = (J) => h.$emit("close-picker")),
                onSelectDate: W[12] || (W[12] = (J) => h.$emit("select-date")),
                onInvalidSelect: W[13] || (W[13] = (J) => h.$emit("invalid-select"))
              }), Ee({ _: 2 }, [
                Me(i(Qe), (J, ft) => ({
                  name: J,
                  fn: oe((se) => [
                    H(h.$slots, J, Ne(Ue({ ...se })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : M("", !0)
            ], 42, Vr)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), zr = typeof window < "u" ? window : void 0, an = () => {
}, xr = (e) => Qn() ? (ea(e), !0) : !1, Kr = (e, n, a, t) => {
  if (!e)
    return an;
  let o = an;
  const d = ct(
    () => i(e),
    (D) => {
      o(), D && (D.addEventListener(n, a, t), o = () => {
        D.removeEventListener(n, a, t), o = an;
      });
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    d(), o();
  };
  return xr(p), p;
}, jr = (e, n, a, t = {}) => {
  const { window: o = zr, event: d = "pointerdown" } = t;
  return o ? Kr(o, d, (D) => {
    const O = _e(e), I = _e(n);
    !O || !I || O === D.target || D.composedPath().includes(O) || D.composedPath().includes(I) || a(D);
  }, { passive: !0 }) : void 0;
}, Gr = /* @__PURE__ */ We({
  __name: "VueDatePicker",
  props: {
    ...at
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, o = un(), d = F(!1), p = Ot(t, "modelValue"), D = Ot(t, "timezone"), O = F(null), I = F(null), L = F(!1), A = F(null), { setMenuFocused: c, setShiftKey: T } = Kn(), { clearArrowNav: z } = nt(), { validateDate: Y, isValidTime: Q, defaults: B } = Le(t);
    He(() => {
      b(t.modelValue), t.inline || (P(A.value).addEventListener("scroll", l), window.addEventListener("resize", v)), t.inline && (d.value = !0);
    }), sn(() => {
      if (!t.inline) {
        const le = P(A.value);
        le && le.removeEventListener("scroll", l), window.removeEventListener("resize", v);
      }
    });
    const E = it(o, "all", t.presetRanges), N = it(o, "input");
    ct(
      [p, D],
      () => {
        b(p.value);
      },
      { deep: !0 }
    );
    const { openOnTop: j, menuPosition: ne, setMenuPosition: re, setInitialPosition: ce, getScrollableParent: P } = Hl(
      O,
      I,
      a,
      t
    ), {
      inputValue: y,
      internalModelValue: S,
      parseExternalModelValue: b,
      emitModelValue: U,
      formatInputValue: X,
      checkBeforeEmit: q
    } = Fl(a, t, L), _ = V(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), C = V(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), u = V(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: t.inline
    } : { class: "dp__outer_menu_wrap" }), l = () => {
      d.value && (t.closeOnScroll ? G() : re());
    }, v = () => {
      d.value && re();
    }, m = () => {
      !t.disabled && !t.readonly && (ce(), d.value = !0, yt().then(() => {
        re(), d.value && a("open");
      }), d.value || r(), b(t.modelValue));
    }, k = () => {
      y.value = "", r(), a("update:model-value", null), a("cleared"), G();
    }, x = () => {
      const le = S.value;
      return !le || !Array.isArray(le) && Y(le) ? !0 : Array.isArray(le) ? le.length === 2 && Y(le[0]) && Y(le[1]) ? !0 : Y(le[0]) : !1;
    }, Z = () => {
      q() && x() ? (U(), G()) : a("invalid-select", S.value);
    }, de = (le) => {
      I.value && t.textInput && I.value.setParsedDate(S.value), U(), t.closeOnAutoApply && !le && G();
    }, f = (le = !1) => {
      t.autoApply && Q(S.value) && x() && (t.range && Array.isArray(S.value) ? (t.partialRange || S.value.length === 2) && de(le) : de(le));
    }, r = () => {
      t.textInput || (S.value = null);
    }, G = () => {
      t.inline || (d.value && (d.value = !1, c(!1), T(!1), z(), a("closed"), ce(), y.value && b(p.value)), r(), I.value && I.value.focusInput());
    }, be = (le, ye) => {
      if (!le) {
        S.value = null;
        return;
      }
      S.value = le, ye && (Z(), a("text-submit"));
    }, $e = () => {
      t.autoApply && Q(S.value) && U();
    }, ze = () => d.value ? G() : m(), Qe = (le) => {
      S.value = le;
    }, ae = V(() => t.textInput && B.value.textInputOptions.format), et = () => {
      ae.value && (L.value = !0, X()), a("focus");
    }, xe = () => {
      ae.value && (L.value = !1, X()), a("blur");
    }, Ie = (le) => {
      O.value && O.value.updateMonthYear(0, {
        month: Nn(le.month),
        year: Nn(le.year)
      });
    };
    return jr(
      O,
      I,
      t.onClickOutside ? () => t.onClickOutside(x) : G
    ), n({
      closeMenu: G,
      selectDate: Z,
      clearValue: k,
      openMenu: m,
      onScroll: l,
      formatInputValue: X,
      // exposed for testing purposes
      updateInternalModelValue: Qe,
      // modify internal modelValue
      setMonthYear: Ie
    }), (le, ye) => (g(), R("div", {
      class: ve(i(_)),
      ref_key: "pickerWrapperRef",
      ref: A
    }, [
      tt(Xl, Se({
        ref_key: "inputRef",
        ref: I,
        "is-menu-open": d.value,
        "internal-model-value": i(S),
        "input-value": i(y),
        "onUpdate:inputValue": ye[0] || (ye[0] = (me) => rt(y) ? y.value = me : null)
      }, le.$props, {
        onClear: k,
        onOpen: m,
        onSetInputDate: be,
        onSetEmptyDate: i(U),
        onSelectDate: Z,
        onToggle: ze,
        onClose: G,
        onFocus: et,
        onBlur: xe
      }), Ee({ _: 2 }, [
        Me(i(N), (me, Ge) => ({
          name: me,
          fn: oe((Ze) => [
            H(le.$slots, me, Ne(Ue(Ze)))
          ])
        }))
      ]), 1040, ["is-menu-open", "internal-model-value", "input-value", "onSetEmptyDate"]),
      d.value ? (g(), fe(Yn(le.teleport ? ta : "div"), Ne(Se({ key: 0 }, i(u))), {
        default: oe(() => [
          d.value ? (g(), fe(Wr, Se({
            key: 0,
            ref_key: "dpMenuRef",
            ref: O,
            class: i(C),
            style: { ...i(ne), ...le.dpStyle },
            "open-on-top": i(j)
          }, le.$props, {
            "internal-model-value": i(S),
            "onUpdate:internalModelValue": ye[1] || (ye[1] = (me) => rt(S) ? S.value = me : null),
            onClosePicker: G,
            onSelectDate: Z,
            onAutoApply: f,
            onTimeUpdate: $e,
            onFlowStep: ye[2] || (ye[2] = (me) => le.$emit("flow-step", me)),
            onUpdateMonthYear: ye[3] || (ye[3] = (me) => le.$emit("update-month-year", me)),
            onInvalidSelect: ye[4] || (ye[4] = (me) => le.$emit("invalid-select", i(S))),
            onInvalidFixedRange: ye[5] || (ye[5] = (me) => le.$emit("invalid-fixed-range", me)),
            onRecalculatePosition: i(re),
            onTooltipOpen: ye[6] || (ye[6] = (me) => le.$emit("tooltip-open", me)),
            onTooltipClose: ye[7] || (ye[7] = (me) => le.$emit("tooltip-close", me))
          }), Ee({ _: 2 }, [
            Me(i(E), (me, Ge) => ({
              name: me,
              fn: oe((Ze) => [
                H(le.$slots, me, Ne(Ue({ ...Ze })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : M("", !0)
        ]),
        _: 3
      }, 16)) : M("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ (() => {
  const e = Gr;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Zr).forEach(([e, n]) => {
  e !== "default" && (Xn[e] = n);
});
export {
  Xn as default
};
