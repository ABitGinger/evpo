/* =========================================================
   电动汽车及性能优化 · 开卷速查  —  UI 引擎（零依赖）
   ========================================================= */
(function () {
  "use strict";

  var DATA = window.EV || { mods: [], items: [], cards: [] };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var STORE = {
    get: function (k, d) {
      try {
        var v = localStorage.getItem("evq_" + k);
        return v === null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem("evq_" + k, JSON.stringify(v)); } catch (e) {}
    }
  };

  var state = {
    tab: "idx",
    mod: "all",
    q: "",
    open: STORE.get("open", {}),
    fs: STORE.get("fs", "m"),
    theme: STORE.get("theme", "auto"),
    known: STORE.get("known", {}),
    fcList: [],
    fcIdx: 0,
    fcShown: false
  };

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function plain(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent.replace(/\s+/g, " ");
  }
  function words(q) {
    return q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  }
  function snippet(text, ws) {
    if (!text) return "";
    if (!ws.length) return text.slice(0, 90);
    var idx = -1;
    for (var i = 0; i < ws.length; i++) {
      var p = text.toLowerCase().indexOf(ws[i]);
      if (p >= 0 && (idx < 0 || p < idx)) idx = p;
    }
    if (idx < 0) return text.slice(0, 90);
    var a = Math.max(0, idx - 26);
    return (a > 0 ? "…" : "") + text.slice(a, a + 100) + (text.length > a + 100 ? "…" : "");
  }
  function markWords(txt, ws) {
    var out = esc(txt);
    ws.forEach(function (w) {
      if (!w) return;
      var re = new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }
  /* 把 F_t / u_a 之类的写法转成下标，避免闪卡里出现下划线 */
  function fmt(s) {
    return String(s).replace(/([A-Za-z\u0391-\u03c9])_([A-Za-z0-9]+)/g, "$1<sub>$2</sub>");
  }

  var toastTm;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("on");
    clearTimeout(toastTm);
    toastTm = setTimeout(function () { t.classList.remove("on"); }, 1500);
  }
  function modName(id) {
    for (var i = 0; i < DATA.mods.length; i++) if (DATA.mods[i].id === id) return DATA.mods[i].name;
    return "";
  }

  /* ---------- 索引 ---------- */
  var BYID = {};
  var IDX = [];
  DATA.items.forEach(function (it) {
    BYID[it.id] = it;
    var body = plain(it.b);
    IDX.push({
      id: it.id, m: it.m, t: it.t, star: it.s || 2,
      body: body,
      hay: (it.t + " " + (it.tag || "") + " " + body).toLowerCase()
    });
  });

  function search(q) {
    var ws = words(q);
    if (!ws.length) return [];
    return IDX.filter(function (r) {
      for (var i = 0; i < ws.length; i++) if (r.hay.indexOf(ws[i]) < 0) return false;
      return true;
    }).sort(function (a, b) {
      var at = ws.some(function (w) { return a.t.toLowerCase().indexOf(w) >= 0; }) ? 0 : 1;
      var bt = ws.some(function (w) { return b.t.toLowerCase().indexOf(w) >= 0; }) ? 0 : 1;
      if (at !== bt) return at - bt;
      return (b.star - a.star) || (a.t.length - b.t.length);
    });
  }

  /* ---------- 卡片 ---------- */
  function dotsHtml(n) {
    var lv = n >= 3 ? "" : n === 2 ? "l2" : "l1";
    return '<span class="dots ' + lv + '" title="重要度">' +
      '<i class="' + (n >= 1 ? "on" : "") + '"></i>' +
      '<i class="' + (n >= 2 ? "on" : "") + '"></i>' +
      '<i class="' + (n >= 3 ? "on" : "") + '"></i></span>';
  }

  function cardHtml(it, ws) {
    var isOpen = !!state.open[it.id];
    var title = ws && ws.length ? markWords(it.t, ws) : esc(it.t);
    return '<article class="card' + (isOpen ? " open" : "") + '" id="c_' + it.id + '" data-id="' + it.id + '">' +
      '<button class="card-h" data-toggle="' + it.id + '">' +
      dotsHtml(it.s || 2) +
      '<span class="ttl">' + title + '</span>' +
      '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>' +
      "</button>" +
      '<div class="card-b">' + it.b + (it.src ? '<span class="src">' + esc(it.src) + "</span>" : "") + "</div>" +
      "</article>";
  }

  /* ---------- 视图：目录 ---------- */
  function renderIdx() {
    var view = $("#view");
    var q = state.q;

    if (q.trim()) {
      var res = search(q);
      var ws = words(q);
      if (!res.length) {
        view.innerHTML = '<div class="empty">没有匹配「' + esc(q) + '」的内容<br><br>' +
          "试试更短的关键词，或英文缩写：ABS / SOC / SR / ESP</div>";
        return;
      }
      var h = '<div class="sec-h"><h2>搜索结果</h2><span class="cnt">' + res.length + " 条 · 按重要度排序</span></div>";
      res.slice(0, 100).forEach(function (r) {
        h += '<article class="card" id="c_' + r.id + '" data-id="' + r.id + '">' +
          '<button class="card-h" data-toggle="' + r.id + '">' +
          '<span class="ttl" style="display:block">' + markWords(r.t, ws) +
          '<span class="h-m">' + esc(modName(r.m)) + "</span>" +
          '<span class="h-s">' + markWords(snippet(r.body, ws), ws) + "</span></span>" +
          "</button>" +
          '<div class="card-b">' + BYID[r.id].b +
          (BYID[r.id].src ? '<span class="src">' + esc(BYID[r.id].src) + "</span>" : "") +
          "</div></article>";
      });
      view.innerHTML = h;
      return;
    }

    var list = DATA.items.filter(function (it) {
      return state.mod === "all" || it.m === state.mod;
    });

    var h2 = "";
    if (state.mod === "all") {
      DATA.mods.forEach(function (m) {
        var sub = list.filter(function (it) { return it.m === m.id; });
        if (!sub.length) return;
        h2 += '<div class="sec-h"><h2>' + esc(m.name) + '</h2><span class="cnt">' + sub.length + "</span></div>";
        sub.forEach(function (it) { h2 += cardHtml(it); });
      });
    } else {
      var m = null;
      DATA.mods.forEach(function (x) { if (x.id === state.mod) m = x; });
      h2 += '<div class="sec-h"><h2>' + esc(m ? m.desc || m.name : "") + '</h2><span class="cnt">' + list.length + " 条</span></div>";
      list.forEach(function (it) { h2 += cardHtml(it); });
    }
    view.innerHTML = h2 || '<div class="empty">暂无内容</div>';
  }

  /* ---------- 视图：公式 / 对比表 ---------- */
  function renderBlocks(sel) {
    var view = $("#view");
    var groups = [];
    DATA.mods.forEach(function (m) {
      if (state.mod !== "all" && state.mod !== m.id) return;
      var rows = [];
      DATA.items.forEach(function (it) {
        if (it.m !== m.id) return;
        var d = document.createElement("div");
        d.innerHTML = it.b;
        var nodes = $$(sel, d);
        if (!nodes.length) return;
        rows.push({ it: it, nodes: nodes });
      });
      if (rows.length) groups.push({ mod: m, rows: rows });
    });

    if (!groups.length) { view.innerHTML = '<div class="empty">暂无内容</div>'; return; }

    var h = "";
    groups.forEach(function (g) {
      h += '<div class="sec-h"><h2>' + esc(g.mod.name) + '</h2><span class="cnt">' + g.rows.length + " 项</span></div>";
      g.rows.forEach(function (r) {
        h += '<article class="card" data-id="' + r.it.id + '" id="c_' + r.it.id + '">' +
          '<div class="blk-h">' + esc(r.it.t) +
          '<span class="blk-src">' + esc(r.it.src || "") + "</span></div>" +
          r.nodes.map(function (n) { return n.outerHTML; }).join("") +
          "</article>";
      });
    });
    view.innerHTML = h;
  }

  /* ---------- 视图：闪卡 ---------- */
  function buildFc() {
    state.fcList = DATA.cards.filter(function (c) {
      return (state.mod === "all" || c.m === state.mod) && !state.known[c.id];
    });
    if (state.fcIdx >= state.fcList.length) state.fcIdx = 0;
  }

  function renderFc() {
    var view = $("#view");
    var total = DATA.cards.filter(function (c) {
      return state.mod === "all" || c.m === state.mod;
    }).length;

    if (!state.fcList.length) {
      view.innerHTML = '<div class="fcwrap"><div class="empty">本轮 ' + total +
        ' 张卡片已全部标记「会了」。<br><br><button class="chip on" id="fcReset" style="padding:9px 20px">重新开始一轮</button></div></div>';
      var rb = $("#fcReset");
      if (rb) rb.onclick = function () {
        DATA.cards.forEach(function (c) { delete state.known[c.id]; });
        state.known = {};
        STORE.set("known", {});
        buildFc(); renderFc();
      };
      return;
    }

    var c = state.fcList[state.fcIdx];
    var done = total - state.fcList.length;
    var pct = total ? (done / total) * 100 : 0;

    view.innerHTML = '<div class="fcwrap">' +
      '<div class="fcbar"><span class="tnum">' + (state.fcIdx + 1) + "/" + state.fcList.length + "</span>" +
      '<span class="prog"><i style="width:' + pct + '%"></i></span>' +
      '<span>' + esc(modName(c.m)) + "</span></div>" +
      '<div class="fc' + (state.fcShown ? " show" : "") + '" id="fcCard">' +
      '<div class="q">' + fmt(c.q) + "</div>" +
      '<div class="a">' + fmt(c.a) + "</div>" +
      '<div class="tap">轻点卡片看答案</div></div>' +
      '<div class="fcbtns"><button data-fc="prev">上一张</button>' +
      '<button data-fc="next">跳过</button>' +
      '<button class="ok" data-fc="ok">会了</button></div>' +
      '<div class="fchint">键盘：空格翻面 · ← → 切换 · Enter 记会</div>' +
      "</div>";

    var card = $("#fcCard");
    card.onclick = function () {
      state.fcShown = !state.fcShown;
      card.classList.toggle("show", state.fcShown);
    };
    $$("[data-fc]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var act = b.getAttribute("data-fc");
        if (act === "prev") {
          state.fcIdx = (state.fcIdx - 1 + state.fcList.length) % state.fcList.length;
          state.fcShown = false;
          renderFc();
        } else if (act === "next") {
          state.fcIdx = (state.fcIdx + 1) % state.fcList.length;
          state.fcShown = false;
          renderFc();
        } else {
          state.known[c.id] = 1;
          STORE.set("known", state.known);
          buildFc();
          renderFc();
        }
      };
    });
  }

  /* ---------- 渲染入口 ---------- */
  function render() {
    if (state.tab === "idx") renderIdx();
    else if (state.tab === "fm") renderBlocks(".fm");
    else if (state.tab === "tb") renderBlocks(".tw");
    else { buildFc(); renderFc(); }

    var crumb = { idx: "速查", fm: "公式", tb: "对比表", fc: "闪卡" };
    $("#crumb").textContent = state.q ? "搜索" : (crumb[state.tab] || "");
    $("#chips").style.display = state.q ? "none" : "flex";

    $$("#nav button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-tab") === state.tab);
    });
    syncHdr();
  }

  /* ---------- 交互 ---------- */
  document.addEventListener("click", function (e) {
    var tg = e.target.closest ? e.target.closest("[data-toggle]") : null;
    if (!tg) return;
    var id = tg.getAttribute("data-toggle");
    var card = tg.closest(".card");
    if (!card) return;
    if (card.classList.contains("open")) {
      card.classList.remove("open");
      delete state.open[id];
    } else {
      card.classList.add("open");
      state.open[id] = 1;
    }
    STORE.set("open", state.open);
  });

  $("#nav").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-tab]");
    if (!b) return;
    state.tab = b.getAttribute("data-tab");
    state.fcShown = false;
    render();
    window.scrollTo({ top: 0 });
  });

  var qEl = $("#q");
  var inputTm;
  qEl.addEventListener("input", function () {
    var v = qEl.value;
    $("#sbox").classList.toggle("has", !!v);
    clearTimeout(inputTm);
    inputTm = setTimeout(function () {
      state.q = v;
      state.tab = "idx";
      state.fcShown = false;
      render();
    }, 80);
  });
  $("#clr").onclick = function () {
    qEl.value = "";
    $("#sbox").classList.remove("has");
    state.q = "";
    render();
    qEl.focus();
  };
  qEl.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { $("#clr").click(); qEl.blur(); }
    if (e.key === "Enter") qEl.blur();
  });

  /* 字号 */
  var fsOrder = ["s", "m", "l"];
  function applyFs() {
    document.documentElement.setAttribute("data-fs", state.fs);
    $("#fsLabel").textContent = state.fs === "s" ? "A-" : state.fs === "m" ? "A" : "A+";
  }
  $("#btnFs").onclick = function () {
    state.fs = fsOrder[(fsOrder.indexOf(state.fs) + 1) % 3];
    STORE.set("fs", state.fs);
    applyFs();
    toast("字号：" + (state.fs === "s" ? "小" : state.fs === "m" ? "标准" : "大"));
  };

  /* 主题 */
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function applyTheme() {
    var dark = state.theme === "dark" || (state.theme === "auto" && mq && mq.matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0e1013" : "#f6f7f8");
    $("#btnTheme").style.opacity = state.theme === "auto" ? 0.5 : 1;
  }
  $("#btnTheme").onclick = function () {
    state.theme = state.theme === "auto" ? "light" : state.theme === "light" ? "dark" : "auto";
    STORE.set("theme", state.theme);
    applyTheme();
    toast(state.theme === "auto" ? "跟随系统" : state.theme === "light" ? "浅色" : "深色");
  };
  if (mq && mq.addEventListener) mq.addEventListener("change", applyTheme);

  /* 键盘 */
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "/") { e.preventDefault(); qEl.focus(); return; }
    if (state.tab === "fc") {
      if (e.key === " ") {
        e.preventDefault();
        state.fcShown = !state.fcShown;
        var fc = $("#fcCard");
        if (fc) fc.classList.toggle("show", state.fcShown);
      }
      if (e.key === "ArrowRight") { var n = $('[data-fc="next"]'); if (n) n.click(); }
      if (e.key === "ArrowLeft") { var p = $('[data-fc="prev"]'); if (p) p.click(); }
      if (e.key === "Enter") { var o = $('[data-fc="ok"]'); if (o) o.click(); }
    }
    if (e.key === "Escape" && state.q) $("#clr").click();
  });

  /* 模块条 */
  function renderChips() {
    var all = [{ id: "all", short: "全部" }].concat(DATA.mods.map(function (m) {
      return { id: m.id, short: m.short || m.name };
    }));
    $("#chips").innerHTML = all.map(function (m) {
      return '<button class="chip' + (state.mod === m.id ? " on" : "") + '" data-mod="' + m.id + '">' + esc(m.short) + "</button>";
    }).join("");
    $$("#chips .chip").forEach(function (b) {
      b.onclick = function () {
        state.mod = b.getAttribute("data-mod");
        state.fcIdx = 0;
        state.fcShown = false;
        renderChips();
        render();
        window.scrollTo({ top: 0 });
      };
    });
  }

  /* header 高度 → sticky 基准 */
  function syncHdr() {
    var h = $("#hdr").offsetHeight || 100;
    document.documentElement.style.setProperty("--hdr-h", h + "px");
  }
  window.addEventListener("resize", syncHdr);
  if (window.ResizeObserver) { try { new ResizeObserver(syncHdr).observe($("#hdr")); } catch (e) {} }

  /* 启动 */
  applyFs();
  applyTheme();
  renderChips();
  render();
  syncHdr();

  var ft = $("#ft");
  if (ft) {
    ft.onclick = function () { toast("姜sir制造 · 电动汽车备考速查"); };
  }

  var seen = STORE.get("seen", false);
  if (!seen) {
    setTimeout(function () { toast("点卡片展开 · 顶部可直接搜"); }, 600);
    STORE.set("seen", true);
  }

  window.__EVQ = { state: state, render: render, IDX: IDX };
})();
