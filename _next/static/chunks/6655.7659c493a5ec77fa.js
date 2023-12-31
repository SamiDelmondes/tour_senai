"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6655],
  {
    33603: function (e, t, n) {
      n.d(t, {
        mL: function () {
          return l;
        },
        q0: function () {
          return c;
        },
      });
      var a = n(93355),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        o = function (e) {
          return { height: e.scrollHeight, opacity: 1 };
        },
        i = function (e, t) {
          return (
            (null == t ? void 0 : t.deadline) === !0 ||
            "height" === t.propertyName
          );
        };
      (0, a.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var c = function (e) {
          return void 0 !== e && ("topLeft" === e || "topRight" === e)
            ? "slide-down"
            : "slide-up";
        },
        l = function (e, t, n) {
          return void 0 !== n ? n : "".concat(e, "-").concat(t);
        };
      t.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: r,
        onEnterStart: r,
        onAppearActive: o,
        onEnterActive: o,
        onLeaveStart: function (e) {
          return { height: e ? e.offsetHeight : 0 };
        },
        onLeaveActive: r,
        onAppearEnd: i,
        onEnterEnd: i,
        onLeaveEnd: i,
        motionDeadline: 500,
      };
    },
    93355: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
        b: function () {
          return a;
        },
      });
      var a = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        },
        r = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        };
    },
    44526: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ei;
        },
      });
      var a = n(4942),
        r = n(87462),
        o = n(97937),
        i = n(89705),
        c = n(1413),
        l = n(67294),
        u = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "defs",
                attrs: {},
                children: [{ tag: "style", attrs: {} }],
              },
              {
                tag: "path",
                attrs: {
                  d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z",
                },
              },
            ],
          },
          name: "plus",
          theme: "outlined",
        },
        s = n(42135),
        f = function (e, t) {
          return l.createElement(
            s.Z,
            (0, c.Z)((0, c.Z)({}, e), {}, { ref: t, icon: u }),
          );
        };
      f.displayName = "PlusOutlined";
      var d = l.forwardRef(f),
        v = n(94184),
        m = n.n(v),
        b = n(97685),
        p = n(71002),
        h = n(45987),
        y = n(31131),
        Z = n(21770),
        g = n(62874),
        E = (0, l.createContext)(null),
        k = l.forwardRef(function (e, t) {
          var n = e.prefixCls,
            a = e.className,
            r = e.style,
            o = e.id,
            i = e.active,
            c = e.tabKey,
            u = e.children;
          return l.createElement(
            "div",
            {
              id: o && "".concat(o, "-panel-").concat(c),
              role: "tabpanel",
              tabIndex: i ? 0 : -1,
              "aria-labelledby": o && "".concat(o, "-tab-").concat(c),
              "aria-hidden": !i,
              style: r,
              className: m()(n, i && "".concat(n, "-active"), a),
              ref: t,
            },
            u,
          );
        }),
        x = ["key", "forceRender", "style", "className"];
      function C(e) {
        var t = e.id,
          n = e.activeKey,
          o = e.animated,
          i = e.tabPosition,
          u = e.destroyInactiveTabPane,
          s = l.useContext(E),
          f = s.prefixCls,
          d = s.tabs,
          v = o.tabPane,
          b = "".concat(f, "-tabpane");
        return l.createElement(
          "div",
          { className: m()("".concat(f, "-content-holder")) },
          l.createElement(
            "div",
            {
              className: m()(
                "".concat(f, "-content"),
                "".concat(f, "-content-").concat(i),
                (0, a.Z)({}, "".concat(f, "-content-animated"), v),
              ),
            },
            d.map(function (e) {
              var a = e.key,
                i = e.forceRender,
                s = e.style,
                f = e.className,
                d = (0, h.Z)(e, x),
                p = a === n;
              return l.createElement(
                g.Z,
                (0, r.Z)(
                  {
                    key: a,
                    visible: p,
                    forceRender: i,
                    removeOnLeave: !!u,
                    leavedClassName: "".concat(b, "-hidden"),
                  },
                  o.tabPaneMotion,
                ),
                function (e, n) {
                  var o = e.style,
                    i = e.className;
                  return l.createElement(
                    k,
                    (0, r.Z)({}, d, {
                      prefixCls: b,
                      id: t,
                      tabKey: a,
                      animated: v,
                      active: p,
                      style: (0, c.Z)((0, c.Z)({}, s), o),
                      className: m()(f, i),
                      ref: n,
                    }),
                  );
                },
              );
            }),
          ),
        );
      }
      var w = n(74902),
        N = n(48555),
        P = n(66680),
        S = n(75164),
        R = n(42550),
        T = { width: 0, height: 0, left: 0, top: 0 };
      function I(e, t) {
        var n = l.useRef(e),
          a = l.useState({}),
          r = (0, b.Z)(a, 2)[1];
        return [
          n.current,
          function (e) {
            var a = "function" == typeof e ? e(n.current) : e;
            a !== n.current && t(a, n.current), (n.current = a), r({});
          },
        ];
      }
      var L = n(8410);
      function M(e) {
        var t = (0, l.useState)(0),
          n = (0, b.Z)(t, 2),
          a = n[0],
          r = n[1],
          o = (0, l.useRef)(0),
          i = (0, l.useRef)();
        return (
          (i.current = e),
          (0, L.o)(
            function () {
              var e;
              null === (e = i.current) || void 0 === e || e.call(i);
            },
            [a],
          ),
          function () {
            o.current === a && ((o.current += 1), r(o.current));
          }
        );
      }
      var A = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function B(e) {
        var t;
        return (
          e instanceof Map
            ? ((t = {}),
              e.forEach(function (e, n) {
                t[n] = e;
              }))
            : (t = e),
          JSON.stringify(t)
        );
      }
      var O = l.forwardRef(function (e, t) {
          var n = e.prefixCls,
            a = e.editable,
            r = e.locale,
            o = e.style;
          return a && !1 !== a.showAdd
            ? l.createElement(
                "button",
                {
                  ref: t,
                  type: "button",
                  className: "".concat(n, "-nav-add"),
                  style: o,
                  "aria-label":
                    (null == r ? void 0 : r.addAriaLabel) || "Add tab",
                  onClick: function (e) {
                    a.onEdit("add", { event: e });
                  },
                },
                a.addIcon || "+",
              )
            : null;
        }),
        D = l.forwardRef(function (e, t) {
          var n,
            a = e.position,
            r = e.prefixCls,
            o = e.extra;
          if (!o) return null;
          var i = {};
          return (
            "object" !== (0, p.Z)(o) || l.isValidElement(o)
              ? (i.right = o)
              : (i = o),
            "right" === a && (n = i.right),
            "left" === a && (n = i.left),
            n
              ? l.createElement(
                  "div",
                  { className: "".concat(r, "-extra-content"), ref: t },
                  n,
                )
              : null
          );
        }),
        j = n(60057),
        K = n(97868),
        q = n(15105),
        _ = l.memo(
          l.forwardRef(function (e, t) {
            var n = e.prefixCls,
              r = e.id,
              o = e.tabs,
              i = e.locale,
              c = e.mobile,
              u = e.moreIcon,
              s = e.moreTransitionName,
              f = e.style,
              d = e.className,
              v = e.editable,
              p = e.tabBarGutter,
              h = e.rtl,
              y = e.removeAriaLabel,
              Z = e.onTabClick,
              g = e.getPopupContainer,
              E = e.popupClassName,
              k = (0, l.useState)(!1),
              x = (0, b.Z)(k, 2),
              C = x[0],
              w = x[1],
              N = (0, l.useState)(null),
              P = (0, b.Z)(N, 2),
              S = P[0],
              R = P[1],
              T = "".concat(r, "-more-popup"),
              I = "".concat(n, "-dropdown"),
              L = null !== S ? "".concat(T, "-").concat(S) : null,
              M = null == i ? void 0 : i.dropdownAriaLabel,
              A = l.createElement(
                K.ZP,
                {
                  onClick: function (e) {
                    Z(e.key, e.domEvent), w(!1);
                  },
                  prefixCls: "".concat(I, "-menu"),
                  id: T,
                  tabIndex: -1,
                  role: "listbox",
                  "aria-activedescendant": L,
                  selectedKeys: [S],
                  "aria-label": void 0 !== M ? M : "expanded dropdown",
                },
                o.map(function (e) {
                  var t = v && !1 !== e.closable && !e.disabled;
                  return l.createElement(
                    K.sN,
                    {
                      key: e.key,
                      id: "".concat(T, "-").concat(e.key),
                      role: "option",
                      "aria-controls":
                        r && "".concat(r, "-panel-").concat(e.key),
                      disabled: e.disabled,
                    },
                    l.createElement("span", null, e.label),
                    t &&
                      l.createElement(
                        "button",
                        {
                          type: "button",
                          "aria-label": y || "remove",
                          tabIndex: 0,
                          className: "".concat(I, "-menu-item-remove"),
                          onClick: function (t) {
                            var n;
                            t.stopPropagation(),
                              (n = e.key),
                              t.preventDefault(),
                              t.stopPropagation(),
                              v.onEdit("remove", { key: n, event: t });
                          },
                        },
                        e.closeIcon || v.removeIcon || "\xd7",
                      ),
                  );
                }),
              );
            function B(e) {
              for (
                var t = o.filter(function (e) {
                    return !e.disabled;
                  }),
                  n =
                    t.findIndex(function (e) {
                      return e.key === S;
                    }) || 0,
                  a = t.length,
                  r = 0;
                r < a;
                r += 1
              ) {
                var i = t[(n = (n + e + a) % a)];
                if (!i.disabled) {
                  R(i.key);
                  return;
                }
              }
            }
            (0, l.useEffect)(
              function () {
                var e = document.getElementById(L);
                e && e.scrollIntoView && e.scrollIntoView(!1);
              },
              [S],
            ),
              (0, l.useEffect)(
                function () {
                  C || R(null);
                },
                [C],
              );
            var D = (0, a.Z)({}, h ? "marginRight" : "marginLeft", p);
            o.length || ((D.visibility = "hidden"), (D.order = 1));
            var _ = m()((0, a.Z)({}, "".concat(I, "-rtl"), h)),
              W = c
                ? null
                : l.createElement(
                    j.Z,
                    {
                      prefixCls: I,
                      overlay: A,
                      trigger: ["hover"],
                      visible: !!o.length && C,
                      transitionName: s,
                      onVisibleChange: w,
                      overlayClassName: m()(_, E),
                      mouseEnterDelay: 0.1,
                      mouseLeaveDelay: 0.1,
                      getPopupContainer: g,
                    },
                    l.createElement(
                      "button",
                      {
                        type: "button",
                        className: "".concat(n, "-nav-more"),
                        style: D,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        "aria-haspopup": "listbox",
                        "aria-controls": T,
                        id: "".concat(r, "-more"),
                        "aria-expanded": C,
                        onKeyDown: function (e) {
                          var t = e.which;
                          if (!C) {
                            [q.Z.DOWN, q.Z.SPACE, q.Z.ENTER].includes(t) &&
                              (w(!0), e.preventDefault());
                            return;
                          }
                          switch (t) {
                            case q.Z.UP:
                              B(-1), e.preventDefault();
                              break;
                            case q.Z.DOWN:
                              B(1), e.preventDefault();
                              break;
                            case q.Z.ESC:
                              w(!1);
                              break;
                            case q.Z.SPACE:
                            case q.Z.ENTER:
                              null !== S && Z(S, e);
                          }
                        },
                      },
                      void 0 === u ? "More" : u,
                    ),
                  );
            return l.createElement(
              "div",
              {
                className: m()("".concat(n, "-nav-operations"), d),
                style: f,
                ref: t,
              },
              W,
              l.createElement(O, { prefixCls: n, locale: i, editable: v }),
            );
          }),
          function (e, t) {
            return t.tabMoving;
          },
        ),
        W = function (e) {
          var t,
            n = e.prefixCls,
            r = e.id,
            o = e.active,
            i = e.tab,
            c = i.key,
            u = i.label,
            s = i.disabled,
            f = i.closeIcon,
            d = e.closable,
            v = e.renderWrapper,
            b = e.removeAriaLabel,
            p = e.editable,
            h = e.onClick,
            y = e.onFocus,
            Z = e.style,
            g = "".concat(n, "-tab"),
            E = p && !1 !== d && !s;
          function k(e) {
            s || h(e);
          }
          var x = l.createElement(
            "div",
            {
              key: c,
              "data-node-key": c,
              className: m()(
                g,
                ((t = {}),
                (0, a.Z)(t, "".concat(g, "-with-remove"), E),
                (0, a.Z)(t, "".concat(g, "-active"), o),
                (0, a.Z)(t, "".concat(g, "-disabled"), s),
                t),
              ),
              style: Z,
              onClick: k,
            },
            l.createElement(
              "div",
              {
                role: "tab",
                "aria-selected": o,
                id: r && "".concat(r, "-tab-").concat(c),
                className: "".concat(g, "-btn"),
                "aria-controls": r && "".concat(r, "-panel-").concat(c),
                "aria-disabled": s,
                tabIndex: s ? null : 0,
                onClick: function (e) {
                  e.stopPropagation(), k(e);
                },
                onKeyDown: function (e) {
                  [q.Z.SPACE, q.Z.ENTER].includes(e.which) &&
                    (e.preventDefault(), k(e));
                },
                onFocus: y,
              },
              u,
            ),
            E &&
              l.createElement(
                "button",
                {
                  type: "button",
                  "aria-label": b || "remove",
                  tabIndex: 0,
                  className: "".concat(g, "-remove"),
                  onClick: function (e) {
                    e.stopPropagation(),
                      e.preventDefault(),
                      e.stopPropagation(),
                      p.onEdit("remove", { key: c, event: e });
                  },
                },
                f || p.removeIcon || "\xd7",
              ),
          );
          return v ? v(x) : x;
        },
        V = function (e) {
          var t = e.current || {},
            n = t.offsetWidth,
            a = t.offsetHeight;
          return [void 0 === n ? 0 : n, void 0 === a ? 0 : a];
        },
        z = function (e, t) {
          return e[t ? 0 : 1];
        },
        G = l.forwardRef(function (e, t) {
          var n,
            o,
            i,
            u,
            s,
            f,
            d,
            v,
            p,
            h,
            y,
            Z,
            g,
            k,
            x,
            C,
            L,
            j,
            K,
            q,
            G,
            H,
            F,
            X,
            Y,
            J,
            U,
            Q,
            $,
            ee,
            et,
            en,
            ea,
            er,
            eo,
            ei,
            ec,
            el,
            eu,
            es,
            ef = l.useContext(E),
            ed = ef.prefixCls,
            ev = ef.tabs,
            em = e.className,
            eb = e.style,
            ep = e.id,
            eh = e.animated,
            ey = e.activeKey,
            eZ = e.rtl,
            eg = e.extra,
            eE = e.editable,
            ek = e.locale,
            ex = e.tabPosition,
            eC = e.tabBarGutter,
            ew = e.children,
            eN = e.onTabClick,
            eP = e.onTabScroll,
            eS = (0, l.useRef)(),
            eR = (0, l.useRef)(),
            eT = (0, l.useRef)(),
            eI = (0, l.useRef)(),
            eL = (0, l.useRef)(),
            eM = (0, l.useRef)(),
            eA = (0, l.useRef)(),
            eB = "top" === ex || "bottom" === ex,
            eO = I(0, function (e, t) {
              eB && eP && eP({ direction: e > t ? "left" : "right" });
            }),
            eD = (0, b.Z)(eO, 2),
            ej = eD[0],
            eK = eD[1],
            eq = I(0, function (e, t) {
              !eB && eP && eP({ direction: e > t ? "top" : "bottom" });
            }),
            e_ = (0, b.Z)(eq, 2),
            eW = e_[0],
            eV = e_[1],
            ez = (0, l.useState)([0, 0]),
            eG = (0, b.Z)(ez, 2),
            eH = eG[0],
            eF = eG[1],
            eX = (0, l.useState)([0, 0]),
            eY = (0, b.Z)(eX, 2),
            eJ = eY[0],
            eU = eY[1],
            eQ = (0, l.useState)([0, 0]),
            e$ = (0, b.Z)(eQ, 2),
            e0 = e$[0],
            e1 = e$[1],
            e2 = (0, l.useState)([0, 0]),
            e8 = (0, b.Z)(e2, 2),
            e4 = e8[0],
            e6 = e8[1],
            e7 =
              ((n = new Map()),
              (o = (0, l.useRef)([])),
              (i = (0, l.useState)({})),
              (u = (0, b.Z)(i, 2)[1]),
              (s = (0, l.useRef)("function" == typeof n ? n() : n)),
              (f = M(function () {
                var e = s.current;
                o.current.forEach(function (t) {
                  e = t(e);
                }),
                  (o.current = []),
                  (s.current = e),
                  u({});
              })),
              [
                s.current,
                function (e) {
                  o.current.push(e), f();
                },
              ]),
            e5 = (0, b.Z)(e7, 2),
            e3 = e5[0],
            e9 = e5[1],
            te =
              ((d = eJ[0]),
              (0, l.useMemo)(
                function () {
                  for (
                    var e = new Map(),
                      t =
                        e3.get(
                          null === (r = ev[0]) || void 0 === r ? void 0 : r.key,
                        ) || T,
                      n = t.left + t.width,
                      a = 0;
                    a < ev.length;
                    a += 1
                  ) {
                    var r,
                      o,
                      i = ev[a].key,
                      l = e3.get(i);
                    l ||
                      (l =
                        e3.get(
                          null === (o = ev[a - 1]) || void 0 === o
                            ? void 0
                            : o.key,
                        ) || T);
                    var u = e.get(i) || (0, c.Z)({}, l);
                    (u.right = n - u.left - u.width), e.set(i, u);
                  }
                  return e;
                },
                [
                  ev
                    .map(function (e) {
                      return e.key;
                    })
                    .join("_"),
                  e3,
                  d,
                ],
              )),
            tt = z(eH, eB),
            tn = z(eJ, eB),
            ta = z(e0, eB),
            tr = z(e4, eB),
            to = tt < tn + ta,
            ti = to ? tt - tr : tt - ta,
            tc = 0,
            tl = 0;
          function tu(e) {
            return e < tc ? tc : e > tl ? tl : e;
          }
          eB && eZ
            ? ((tc = 0), (tl = Math.max(0, tn - ti)))
            : ((tc = Math.min(0, ti - tn)), (tl = 0));
          var ts = (0, l.useRef)(),
            tf = (0, l.useState)(),
            td = (0, b.Z)(tf, 2),
            tv = td[0],
            tm = td[1];
          function tb() {
            tm(Date.now());
          }
          function tp() {
            window.clearTimeout(ts.current);
          }
          (v = function (e, t) {
            function n(e, t) {
              e(function (e) {
                return tu(e + t);
              });
            }
            return !!to && (eB ? n(eK, e) : n(eV, t), tp(), tb(), !0);
          }),
            (p = (0, l.useState)()),
            (y = (h = (0, b.Z)(p, 2))[0]),
            (Z = h[1]),
            (g = (0, l.useState)(0)),
            (x = (k = (0, b.Z)(g, 2))[0]),
            (C = k[1]),
            (L = (0, l.useState)(0)),
            (K = (j = (0, b.Z)(L, 2))[0]),
            (q = j[1]),
            (G = (0, l.useState)()),
            (F = (H = (0, b.Z)(G, 2))[0]),
            (X = H[1]),
            (Y = (0, l.useRef)()),
            (J = (0, l.useRef)()),
            ((U = (0, l.useRef)(null)).current = {
              onTouchStart: function (e) {
                var t = e.touches[0];
                Z({ x: t.screenX, y: t.screenY }),
                  window.clearInterval(Y.current);
              },
              onTouchMove: function (e) {
                if (y) {
                  e.preventDefault();
                  var t = e.touches[0],
                    n = t.screenX,
                    a = t.screenY;
                  Z({ x: n, y: a });
                  var r = n - y.x,
                    o = a - y.y;
                  v(r, o);
                  var i = Date.now();
                  C(i), q(i - x), X({ x: r, y: o });
                }
              },
              onTouchEnd: function () {
                if (y && (Z(null), X(null), F)) {
                  var e = F.x / K,
                    t = F.y / K;
                  if (!(0.1 > Math.max(Math.abs(e), Math.abs(t)))) {
                    var n = e,
                      a = t;
                    Y.current = window.setInterval(function () {
                      if (0.01 > Math.abs(n) && 0.01 > Math.abs(a)) {
                        window.clearInterval(Y.current);
                        return;
                      }
                      v(
                        20 * (n *= 0.9046104802746175),
                        20 * (a *= 0.9046104802746175),
                      );
                    }, 20);
                  }
                }
              },
              onWheel: function (e) {
                var t = e.deltaX,
                  n = e.deltaY,
                  a = 0,
                  r = Math.abs(t),
                  o = Math.abs(n);
                r === o
                  ? (a = "x" === J.current ? t : n)
                  : r > o
                    ? ((a = t), (J.current = "x"))
                    : ((a = n), (J.current = "y")),
                  v(-a, -a) && e.preventDefault();
              },
            }),
            l.useEffect(function () {
              function e(e) {
                U.current.onTouchMove(e);
              }
              function t(e) {
                U.current.onTouchEnd(e);
              }
              return (
                document.addEventListener("touchmove", e, { passive: !1 }),
                document.addEventListener("touchend", t, { passive: !1 }),
                eI.current.addEventListener(
                  "touchstart",
                  function (e) {
                    U.current.onTouchStart(e);
                  },
                  { passive: !1 },
                ),
                eI.current.addEventListener("wheel", function (e) {
                  U.current.onWheel(e);
                }),
                function () {
                  document.removeEventListener("touchmove", e),
                    document.removeEventListener("touchend", t);
                }
              );
            }, []),
            (0, l.useEffect)(
              function () {
                return (
                  tp(),
                  tv &&
                    (ts.current = window.setTimeout(function () {
                      tm(0);
                    }, 100)),
                  tp
                );
              },
              [tv],
            );
          var th =
              ((Q = eB ? ej : eW),
              (ea = ($ = (0, c.Z)((0, c.Z)({}, e), {}, { tabs: ev })).tabs),
              (er = $.tabPosition),
              (eo = $.rtl),
              ["top", "bottom"].includes(er)
                ? ((ee = "width"),
                  (et = eo ? "right" : "left"),
                  (en = Math.abs(Q)))
                : ((ee = "height"), (et = "top"), (en = -Q)),
              (0, l.useMemo)(
                function () {
                  if (!ea.length) return [0, 0];
                  for (var e = ea.length, t = e, n = 0; n < e; n += 1) {
                    var a = te.get(ea[n].key) || A;
                    if (a[et] + a[ee] > en + ti) {
                      t = n - 1;
                      break;
                    }
                  }
                  for (var r = 0, o = e - 1; o >= 0; o -= 1)
                    if ((te.get(ea[o].key) || A)[et] < en) {
                      r = o + 1;
                      break;
                    }
                  return [r, t];
                },
                [
                  te,
                  ti,
                  tn,
                  ta,
                  tr,
                  en,
                  er,
                  ea
                    .map(function (e) {
                      return e.key;
                    })
                    .join("_"),
                  eo,
                ],
              )),
            ty = (0, b.Z)(th, 2),
            tZ = ty[0],
            tg = ty[1],
            tE = (0, P.Z)(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : ey,
                t = te.get(e) || {
                  width: 0,
                  height: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                };
              if (eB) {
                var n = ej;
                eZ
                  ? t.right < ej
                    ? (n = t.right)
                    : t.right + t.width > ej + ti &&
                      (n = t.right + t.width - ti)
                  : t.left < -ej
                    ? (n = -t.left)
                    : t.left + t.width > -ej + ti &&
                      (n = -(t.left + t.width - ti)),
                  eV(0),
                  eK(tu(n));
              } else {
                var a = eW;
                t.top < -eW
                  ? (a = -t.top)
                  : t.top + t.height > -eW + ti &&
                    (a = -(t.top + t.height - ti)),
                  eK(0),
                  eV(tu(a));
              }
            }),
            tk = {};
          "top" === ex || "bottom" === ex
            ? (tk[eZ ? "marginRight" : "marginLeft"] = eC)
            : (tk.marginTop = eC);
          var tx = ev.map(function (e, t) {
              var n = e.key;
              return l.createElement(W, {
                id: ep,
                prefixCls: ed,
                key: n,
                tab: e,
                style: 0 === t ? void 0 : tk,
                closable: e.closable,
                editable: eE,
                active: n === ey,
                renderWrapper: ew,
                removeAriaLabel: null == ek ? void 0 : ek.removeAriaLabel,
                onClick: function (e) {
                  eN(n, e);
                },
                onFocus: function () {
                  tE(n),
                    tb(),
                    eI.current &&
                      (eZ || (eI.current.scrollLeft = 0),
                      (eI.current.scrollTop = 0));
                },
              });
            }),
            tC = function () {
              return e9(function () {
                var e = new Map();
                return (
                  ev.forEach(function (t) {
                    var n,
                      a = t.key,
                      r =
                        null === (n = eL.current) || void 0 === n
                          ? void 0
                          : n.querySelector('[data-node-key="'.concat(a, '"]'));
                    r &&
                      e.set(a, {
                        width: r.offsetWidth,
                        height: r.offsetHeight,
                        left: r.offsetLeft,
                        top: r.offsetTop,
                      });
                  }),
                  e
                );
              });
            };
          (0, l.useEffect)(
            function () {
              tC();
            },
            [
              ev
                .map(function (e) {
                  return e.key;
                })
                .join("_"),
            ],
          );
          var tw = M(function () {
              var e = V(eS),
                t = V(eR),
                n = V(eT);
              eF([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
              var a = V(eA);
              e1(a), e6(V(eM));
              var r = V(eL);
              eU([r[0] - a[0], r[1] - a[1]]), tC();
            }),
            tN = ev.slice(0, tZ),
            tP = ev.slice(tg + 1),
            tS = [].concat((0, w.Z)(tN), (0, w.Z)(tP)),
            tR = (0, l.useState)(),
            tT = (0, b.Z)(tR, 2),
            tI = tT[0],
            tL = tT[1],
            tM = te.get(ey),
            tA = (0, l.useRef)();
          function tB() {
            S.Z.cancel(tA.current);
          }
          (0, l.useEffect)(
            function () {
              var e = {};
              return (
                tM &&
                  (eB
                    ? (eZ ? (e.right = tM.right) : (e.left = tM.left),
                      (e.width = tM.width))
                    : ((e.top = tM.top), (e.height = tM.height))),
                tB(),
                (tA.current = (0, S.Z)(function () {
                  tL(e);
                })),
                tB
              );
            },
            [tM, eB, eZ],
          ),
            (0, l.useEffect)(
              function () {
                tE();
              },
              [ey, tc, tl, B(tM), B(te), eB],
            ),
            (0, l.useEffect)(
              function () {
                tw();
              },
              [eZ],
            );
          var tO = !!tS.length,
            tD = "".concat(ed, "-nav-wrap");
          return (
            eB
              ? eZ
                ? ((el = ej > 0), (ec = ej !== tl))
                : ((ec = ej < 0), (el = ej !== tc))
              : ((eu = eW < 0), (es = eW !== tc)),
            l.createElement(
              N.Z,
              { onResize: tw },
              l.createElement(
                "div",
                {
                  ref: (0, R.x1)(t, eS),
                  role: "tablist",
                  className: m()("".concat(ed, "-nav"), em),
                  style: eb,
                  onKeyDown: function () {
                    tb();
                  },
                },
                l.createElement(D, {
                  ref: eR,
                  position: "left",
                  extra: eg,
                  prefixCls: ed,
                }),
                l.createElement(
                  "div",
                  {
                    className: m()(
                      tD,
                      ((ei = {}),
                      (0, a.Z)(ei, "".concat(tD, "-ping-left"), ec),
                      (0, a.Z)(ei, "".concat(tD, "-ping-right"), el),
                      (0, a.Z)(ei, "".concat(tD, "-ping-top"), eu),
                      (0, a.Z)(ei, "".concat(tD, "-ping-bottom"), es),
                      ei),
                    ),
                    ref: eI,
                  },
                  l.createElement(
                    N.Z,
                    { onResize: tw },
                    l.createElement(
                      "div",
                      {
                        ref: eL,
                        className: "".concat(ed, "-nav-list"),
                        style: {
                          transform: "translate("
                            .concat(ej, "px, ")
                            .concat(eW, "px)"),
                          transition: tv ? "none" : void 0,
                        },
                      },
                      tx,
                      l.createElement(O, {
                        ref: eA,
                        prefixCls: ed,
                        locale: ek,
                        editable: eE,
                        style: (0, c.Z)(
                          (0, c.Z)({}, 0 === tx.length ? void 0 : tk),
                          {},
                          { visibility: tO ? "hidden" : null },
                        ),
                      }),
                      l.createElement("div", {
                        className: m()(
                          "".concat(ed, "-ink-bar"),
                          (0, a.Z)(
                            {},
                            "".concat(ed, "-ink-bar-animated"),
                            eh.inkBar,
                          ),
                        ),
                        style: tI,
                      }),
                    ),
                  ),
                ),
                l.createElement(
                  _,
                  (0, r.Z)({}, e, {
                    removeAriaLabel: null == ek ? void 0 : ek.removeAriaLabel,
                    ref: eM,
                    prefixCls: ed,
                    tabs: tS,
                    className: !tO && "".concat(ed, "-nav-operations-hidden"),
                    tabMoving: !!tv,
                  }),
                ),
                l.createElement(D, {
                  ref: eT,
                  position: "right",
                  extra: eg,
                  prefixCls: ed,
                }),
              ),
            )
          );
        }),
        H = ["renderTabBar"],
        F = ["label", "key"];
      function X(e) {
        var t = e.renderTabBar,
          n = (0, h.Z)(e, H),
          a = l.useContext(E).tabs;
        return t
          ? t(
              (0, c.Z)(
                (0, c.Z)({}, n),
                {},
                {
                  panes: a.map(function (e) {
                    var t = e.label,
                      n = e.key,
                      a = (0, h.Z)(e, F);
                    return l.createElement(
                      k,
                      (0, r.Z)({ tab: t, key: n, tabKey: n }, a),
                    );
                  }),
                },
              ),
              G,
            )
          : l.createElement(G, n);
      }
      n(80334);
      var Y = [
          "id",
          "prefixCls",
          "className",
          "items",
          "direction",
          "activeKey",
          "defaultActiveKey",
          "editable",
          "animated",
          "tabPosition",
          "tabBarGutter",
          "tabBarStyle",
          "tabBarExtraContent",
          "locale",
          "moreIcon",
          "moreTransitionName",
          "destroyInactiveTabPane",
          "renderTabBar",
          "onChange",
          "onTabClick",
          "onTabScroll",
          "getPopupContainer",
          "popupClassName",
        ],
        J = 0,
        U = l.forwardRef(function (e, t) {
          var n,
            o,
            i = e.id,
            u = e.prefixCls,
            s = void 0 === u ? "rc-tabs" : u,
            f = e.className,
            d = e.items,
            v = e.direction,
            g = e.activeKey,
            k = e.defaultActiveKey,
            x = e.editable,
            w = e.animated,
            N = e.tabPosition,
            P = void 0 === N ? "top" : N,
            S = e.tabBarGutter,
            R = e.tabBarStyle,
            T = e.tabBarExtraContent,
            I = e.locale,
            L = e.moreIcon,
            M = e.moreTransitionName,
            A = e.destroyInactiveTabPane,
            B = e.renderTabBar,
            O = e.onChange,
            D = e.onTabClick,
            j = e.onTabScroll,
            K = e.getPopupContainer,
            q = e.popupClassName,
            _ = (0, h.Z)(e, Y),
            W = l.useMemo(
              function () {
                return (d || []).filter(function (e) {
                  return e && "object" === (0, p.Z)(e) && "key" in e;
                });
              },
              [d],
            ),
            V = "rtl" === v,
            z = (function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { inkBar: !0, tabPane: !1 };
              return (
                (e =
                  !1 === t
                    ? { inkBar: !1, tabPane: !1 }
                    : !0 === t
                      ? { inkBar: !0, tabPane: !1 }
                      : (0, c.Z)(
                          { inkBar: !0 },
                          "object" === (0, p.Z)(t) ? t : {},
                        )).tabPaneMotion &&
                  void 0 === e.tabPane &&
                  (e.tabPane = !0),
                !e.tabPaneMotion && e.tabPane && (e.tabPane = !1),
                e
              );
            })(w),
            G = (0, l.useState)(!1),
            H = (0, b.Z)(G, 2),
            F = H[0],
            U = H[1];
          (0, l.useEffect)(function () {
            U((0, y.Z)());
          }, []);
          var Q = (0, Z.Z)(
              function () {
                var e;
                return null === (e = W[0]) || void 0 === e ? void 0 : e.key;
              },
              { value: g, defaultValue: k },
            ),
            $ = (0, b.Z)(Q, 2),
            ee = $[0],
            et = $[1],
            en = (0, l.useState)(function () {
              return W.findIndex(function (e) {
                return e.key === ee;
              });
            }),
            ea = (0, b.Z)(en, 2),
            er = ea[0],
            eo = ea[1];
          (0, l.useEffect)(
            function () {
              var e,
                t = W.findIndex(function (e) {
                  return e.key === ee;
                });
              -1 === t &&
                ((t = Math.max(0, Math.min(er, W.length - 1))),
                et(null === (e = W[t]) || void 0 === e ? void 0 : e.key)),
                eo(t);
            },
            [
              W.map(function (e) {
                return e.key;
              }).join("_"),
              ee,
              er,
            ],
          );
          var ei = (0, Z.Z)(null, { value: i }),
            ec = (0, b.Z)(ei, 2),
            el = ec[0],
            eu = ec[1];
          (0, l.useEffect)(function () {
            i || (eu("rc-tabs-".concat(J)), (J += 1));
          }, []);
          var es = {
              id: el,
              activeKey: ee,
              animated: z,
              tabPosition: P,
              rtl: V,
              mobile: F,
            },
            ef = (0, c.Z)(
              (0, c.Z)({}, es),
              {},
              {
                editable: x,
                locale: I,
                moreIcon: L,
                moreTransitionName: M,
                tabBarGutter: S,
                onTabClick: function (e, t) {
                  null == D || D(e, t), et(e), e !== ee && (null == O || O(e));
                },
                onTabScroll: j,
                extra: T,
                style: R,
                panes: null,
                getPopupContainer: K,
                popupClassName: q,
              },
            );
          return l.createElement(
            E.Provider,
            { value: { tabs: W, prefixCls: s } },
            l.createElement(
              "div",
              (0, r.Z)(
                {
                  ref: t,
                  id: i,
                  className: m()(
                    s,
                    "".concat(s, "-").concat(P),
                    ((n = {}),
                    (0, a.Z)(n, "".concat(s, "-mobile"), F),
                    (0, a.Z)(n, "".concat(s, "-editable"), x),
                    (0, a.Z)(n, "".concat(s, "-rtl"), V),
                    n),
                    f,
                  ),
                },
                _,
              ),
              o,
              l.createElement(X, (0, r.Z)({}, ef, { renderTabBar: B })),
              l.createElement(
                C,
                (0, r.Z)({ destroyInactiveTabPane: A }, es, { animated: z }),
              ),
            ),
          );
        }),
        Q = n(53124),
        $ = n(97647),
        ee = n(33603),
        et = { motionAppear: !1, motionEnter: !0, motionLeave: !0 },
        en = n(50344),
        ea = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, a = Object.getOwnPropertySymbols(e);
              r < a.length;
              r++
            )
              0 > t.indexOf(a[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          return n;
        },
        er = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > t.indexOf(a) &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, a = Object.getOwnPropertySymbols(e);
              r < a.length;
              r++
            )
              0 > t.indexOf(a[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          return n;
        };
      function eo(e) {
        var t,
          n = e.type,
          c = e.className,
          u = e.size,
          s = e.onEdit,
          f = e.hideAdd,
          v = e.centered,
          b = e.addIcon,
          h = e.children,
          y = e.items,
          Z = e.animated,
          g = er(e, [
            "type",
            "className",
            "size",
            "onEdit",
            "hideAdd",
            "centered",
            "addIcon",
            "children",
            "items",
            "animated",
          ]),
          E = g.prefixCls,
          k = g.moreIcon,
          x = void 0 === k ? l.createElement(i.Z, null) : k,
          C = l.useContext(Q.E_),
          w = C.getPrefixCls,
          N = C.direction,
          P = C.getPopupContainer,
          S = w("tabs", E);
        "editable-card" === n &&
          (t = {
            onEdit: function (e, t) {
              var n = t.key,
                a = t.event;
              null == s || s("add" === e ? a : n, e);
            },
            removeIcon: l.createElement(o.Z, null),
            addIcon: b || l.createElement(d, null),
            showAdd: !0 !== f,
          });
        var R = w(),
          T =
            y ||
            (0, en.Z)(h)
              .map(function (e) {
                if (l.isValidElement(e)) {
                  var t = e.key,
                    n = e.props || {},
                    a = n.tab,
                    o = ea(n, ["tab"]);
                  return (0, r.Z)((0, r.Z)({ key: String(t) }, o), {
                    label: a,
                  });
                }
                return null;
              })
              .filter(function (e) {
                return e;
              }),
          I = (function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { inkBar: !0, tabPane: !1 };
            return (
              (t =
                !1 === n
                  ? { inkBar: !1, tabPane: !1 }
                  : !0 === n
                    ? { inkBar: !0, tabPane: !0 }
                    : (0, r.Z)(
                        { inkBar: !0 },
                        "object" === (0, p.Z)(n) ? n : {},
                      )).tabPane &&
                (t.tabPaneMotion = (0, r.Z)((0, r.Z)({}, et), {
                  motionName: (0, ee.mL)(e, "switch"),
                })),
              t
            );
          })(S, Z);
        return l.createElement($.Z.Consumer, null, function (e) {
          var o,
            i = void 0 !== u ? u : e;
          return l.createElement(
            U,
            (0, r.Z)(
              {
                direction: N,
                getPopupContainer: P,
                moreTransitionName: "".concat(R, "-slide-up"),
              },
              g,
              {
                items: T,
                className: m()(
                  ((o = {}),
                  (0, a.Z)(o, "".concat(S, "-").concat(i), i),
                  (0, a.Z)(
                    o,
                    "".concat(S, "-card"),
                    ["card", "editable-card"].includes(n),
                  ),
                  (0, a.Z)(
                    o,
                    "".concat(S, "-editable-card"),
                    "editable-card" === n,
                  ),
                  (0, a.Z)(o, "".concat(S, "-centered"), v),
                  o),
                  c,
                ),
                editable: t,
                moreIcon: x,
                prefixCls: S,
                animated: I,
              },
            ),
          );
        });
      }
      eo.TabPane = function () {
        return null;
      };
      var ei = eo;
    },
    8410: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var a = n(67294),
        r = (0, n(98924).Z)() ? a.useLayoutEffect : a.useEffect;
      t.Z = r;
      var o = function (e, t) {
        var n = a.useRef(!0);
        r(function () {
          if (!n.current) return e();
        }, t),
          r(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []);
      };
    },
    98423: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(1413);
      function r(e, t) {
        var n = (0, a.Z)({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=6655.7659c493a5ec77fa.js.map
