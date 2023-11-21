"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2932],
  {
    98082: function (e, t, n) {
      var r = n(97685),
        o = n(67294),
        l = n(31808);
      t.Z = function () {
        var e = o.useState(!1),
          t = (0, r.Z)(e, 2),
          n = t[0],
          a = t[1];
        return (
          o.useEffect(function () {
            a((0, l.fk)());
          }, []),
          n
        );
      };
    },
    31808: function (e, t, n) {
      n.d(t, {
        fk: function () {
          return a;
        },
        jD: function () {
          return l;
        },
      });
      var r,
        o = n(98924),
        l = function () {
          return (0, o.Z)() && window.document.documentElement;
        },
        a = function () {
          if (!l()) return !1;
          if (void 0 !== r) return r;
          var e = document.createElement("div");
          return (
            (e.style.display = "flex"),
            (e.style.flexDirection = "column"),
            (e.style.rowGap = "1px"),
            e.appendChild(document.createElement("div")),
            e.appendChild(document.createElement("div")),
            document.body.appendChild(e),
            (r = 1 === e.scrollHeight),
            document.body.removeChild(e),
            r
          );
        };
    },
    12932: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eo;
        },
      });
      var r = n(87462),
        o = n(71002),
        l = n(4942),
        a = n(97685),
        i = n(1413),
        c = n(67294),
        s = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
                },
              },
            ],
          },
          name: "right",
          theme: "outlined",
        },
        u = n(42135),
        p = function (e, t) {
          return c.createElement(
            u.Z,
            (0, i.Z)((0, i.Z)({}, e), {}, { ref: t, icon: s }),
          );
        };
      p.displayName = "RightOutlined";
      var m = c.forwardRef(p),
        d = n(94184),
        f = n.n(d),
        v = n(60057),
        y = n(66680),
        b = n(21770),
        C = n(15671),
        g = n(43144),
        h = n(32531),
        x = n(73568),
        O = n(89705),
        Z = n(97868),
        E = n(98423),
        P = n(53124),
        w = c.createContext({}),
        N = n(33603),
        j = n(96159),
        I = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        k = function (e) {
          var t = e.prefixCls,
            n = e.className,
            o = e.dashed,
            a = I(e, ["prefixCls", "className", "dashed"]),
            i = (0, c.useContext(P.E_).getPrefixCls)("menu", t),
            s = f()((0, l.Z)({}, "".concat(i, "-item-divider-dashed"), !!o), n);
          return c.createElement(Z.iz, (0, r.Z)({ className: s }, a));
        },
        S = n(50344),
        z = n(77939),
        D = (0, c.createContext)({
          prefixCls: "",
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        T = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        L = (function (e) {
          (0, h.Z)(n, e);
          var t = (0, x.Z)(n);
          function n() {
            var e;
            return (
              (0, C.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.renderItem = function (t) {
                var n,
                  o,
                  a = t.siderCollapsed,
                  i = e.context,
                  s = i.prefixCls,
                  u = i.firstLevel,
                  p = i.inlineCollapsed,
                  m = i.direction,
                  d = i.disableMenuItemTitleTooltip,
                  v = e.props,
                  y = v.className,
                  b = v.children,
                  C = e.props,
                  g = C.title,
                  h = C.icon,
                  x = C.danger,
                  O = T(C, ["title", "icon", "danger"]),
                  E = g;
                void 0 === g ? (E = u ? b : "") : !1 === g && (E = "");
                var P = { title: E };
                a || p || ((P.title = null), (P.open = !1));
                var w = (0, S.Z)(b).length,
                  N = c.createElement(
                    Z.ck,
                    (0, r.Z)({}, O, {
                      className: f()(
                        ((n = {}),
                        (0, l.Z)(n, "".concat(s, "-item-danger"), x),
                        (0, l.Z)(
                          n,
                          "".concat(s, "-item-only-child"),
                          (h ? w + 1 : w) === 1,
                        ),
                        n),
                        y,
                      ),
                      title: "string" == typeof g ? g : void 0,
                    }),
                    (0, j.Tm)(h, {
                      className: f()(
                        (0, j.l$)(h)
                          ? null === (o = h.props) || void 0 === o
                            ? void 0
                            : o.className
                          : "",
                        "".concat(s, "-item-icon"),
                      ),
                    }),
                    e.renderItemChildren(p),
                  );
                return (
                  d ||
                    (N = c.createElement(
                      z.Z,
                      (0, r.Z)({}, P, {
                        placement: "rtl" === m ? "left" : "right",
                        overlayClassName: "".concat(
                          s,
                          "-inline-collapsed-tooltip",
                        ),
                      }),
                      N,
                    )),
                  N
                );
              }),
              e
            );
          }
          return (
            (0, g.Z)(n, [
              {
                key: "renderItemChildren",
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    r = t.firstLevel,
                    o = this.props,
                    l = o.icon,
                    a = o.children,
                    i = c.createElement(
                      "span",
                      { className: "".concat(n, "-title-content") },
                      a,
                    );
                  return (!l || ((0, j.l$)(a) && "span" === a.type)) &&
                    a &&
                    e &&
                    r &&
                    "string" == typeof a
                    ? c.createElement(
                        "div",
                        { className: "".concat(n, "-inline-collapsed-noicon") },
                        a.charAt(0),
                      )
                    : i;
                },
              },
              {
                key: "render",
                value: function () {
                  return c.createElement(w.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(c.Component);
      L.contextType = D;
      var M = function (e) {
          var t,
            n,
            o = e.popupClassName,
            l = e.icon,
            a = e.title,
            i = e.theme,
            s = c.useContext(D),
            u = s.prefixCls,
            p = s.inlineCollapsed,
            m = s.antdMenuTheme,
            d = (0, Z.Xl)();
          if (l) {
            var v = (0, j.l$)(a) && "span" === a.type;
            n = c.createElement(
              c.Fragment,
              null,
              (0, j.Tm)(l, {
                className: f()(
                  (0, j.l$)(l)
                    ? null === (t = l.props) || void 0 === t
                      ? void 0
                      : t.className
                    : "",
                  "".concat(u, "-item-icon"),
                ),
              }),
              v
                ? a
                : c.createElement(
                    "span",
                    { className: "".concat(u, "-title-content") },
                    a,
                  ),
            );
          } else
            n =
              p && !d.length && a && "string" == typeof a
                ? c.createElement(
                    "div",
                    { className: "".concat(u, "-inline-collapsed-noicon") },
                    a.charAt(0),
                  )
                : c.createElement(
                    "span",
                    { className: "".concat(u, "-title-content") },
                    a,
                  );
          var y = c.useMemo(
            function () {
              return (0, r.Z)((0, r.Z)({}, s), { firstLevel: !1 });
            },
            [s],
          );
          return c.createElement(
            D.Provider,
            { value: y },
            c.createElement(
              Z.Wd,
              (0, r.Z)({}, (0, E.Z)(e, ["icon"]), {
                title: n,
                popupClassName: f()(u, "".concat(u, "-").concat(i || m), o),
              }),
            ),
          );
        },
        _ = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        R = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        F = c.createContext(null),
        A = function (e) {
          var t = e.children,
            n = R(e, ["children"]),
            o = c.useContext(F),
            l = c.useMemo(
              function () {
                return (0, r.Z)((0, r.Z)({}, o), n);
              },
              [o, n.prefixCls, n.mode, n.selectable],
            );
          return c.createElement(F.Provider, { value: l }, t);
        },
        B = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        G = (0, c.forwardRef)(function (e, t) {
          var n,
            l,
            a = c.useContext(F) || {},
            i = c.useContext(P.E_),
            s = i.getPrefixCls,
            u = i.getPopupContainer,
            p = i.direction,
            m = s(),
            d = e.prefixCls,
            v = e.className,
            b = e.theme,
            C = void 0 === b ? "light" : b,
            g = e.expandIcon,
            h = e._internalDisableMenuItemTitleTooltip,
            x = e.inlineCollapsed,
            w = e.siderCollapsed,
            I = e.items,
            S = e.children,
            z = e.mode,
            T = e.selectable,
            R = e.onClick,
            A = B(e, [
              "prefixCls",
              "className",
              "theme",
              "expandIcon",
              "_internalDisableMenuItemTitleTooltip",
              "inlineCollapsed",
              "siderCollapsed",
              "items",
              "children",
              "mode",
              "selectable",
              "onClick",
            ]),
            G = (0, E.Z)(A, ["collapsedWidth"]),
            V =
              c.useMemo(
                function () {
                  return I
                    ? (function e(t) {
                        return (t || [])
                          .map(function (t, n) {
                            if (t && "object" === (0, o.Z)(t)) {
                              var l = t.label,
                                a = t.children,
                                i = t.key,
                                s = t.type,
                                u = _(t, ["label", "children", "key", "type"]),
                                p = null != i ? i : "tmp-".concat(n);
                              return a || "group" === s
                                ? "group" === s
                                  ? c.createElement(
                                      Z.BW,
                                      (0, r.Z)({ key: p }, u, { title: l }),
                                      e(a),
                                    )
                                  : c.createElement(
                                      M,
                                      (0, r.Z)({ key: p }, u, { title: l }),
                                      e(a),
                                    )
                                : "divider" === s
                                  ? c.createElement(k, (0, r.Z)({ key: p }, u))
                                  : c.createElement(
                                      L,
                                      (0, r.Z)({ key: p }, u),
                                      l,
                                    );
                            }
                            return null;
                          })
                          .filter(function (e) {
                            return e;
                          });
                      })(I)
                    : I;
                },
                [I],
              ) || S;
          null === (n = a.validator) || void 0 === n || n.call(a, { mode: z });
          var W = (0, y.Z)(function () {
              var e;
              null == R || R.apply(void 0, arguments),
                null === (e = null == a ? void 0 : a.onClick) ||
                  void 0 === e ||
                  e.call(a);
            }),
            H = a.mode || z,
            $ = null != T ? T : a.selectable,
            U = c.useMemo(
              function () {
                return void 0 !== w ? w : x;
              },
              [x, w],
            ),
            X = {
              horizontal: { motionName: "".concat(m, "-slide-up") },
              inline: N.ZP,
              other: { motionName: "".concat(m, "-zoom-big") },
            },
            q = s("menu", d || a.prefixCls),
            J = f()("".concat(q, "-").concat(C), v);
          l =
            "function" == typeof g
              ? g
              : (0, j.Tm)(g || a.expandIcon, {
                  className: "".concat(q, "-submenu-expand-icon"),
                });
          var K = c.useMemo(
            function () {
              return {
                prefixCls: q,
                inlineCollapsed: U || !1,
                antdMenuTheme: C,
                direction: p,
                firstLevel: !0,
                disableMenuItemTitleTooltip: h,
              };
            },
            [q, U, C, p, h],
          );
          return c.createElement(
            F.Provider,
            { value: null },
            c.createElement(
              D.Provider,
              { value: K },
              c.createElement(
                Z.ZP,
                (0, r.Z)(
                  {
                    getPopupContainer: u,
                    overflowedIndicator: c.createElement(O.Z, null),
                    overflowedIndicatorPopupClassName: ""
                      .concat(q, "-")
                      .concat(C),
                    mode: H,
                    selectable: $,
                    onClick: W,
                  },
                  G,
                  {
                    inlineCollapsed: U,
                    className: J,
                    prefixCls: q,
                    direction: p,
                    defaultMotions: X,
                    expandIcon: l,
                    ref: t,
                  },
                ),
                V,
              ),
            ),
          );
        }),
        V = (function (e) {
          (0, h.Z)(n, e);
          var t = (0, x.Z)(n);
          function n() {
            var e;
            return (
              (0, C.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.focus = function (t) {
                var n;
                null === (n = e.menu) || void 0 === n || n.focus(t);
              }),
              e
            );
          }
          return (
            (0, g.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return c.createElement(w.Consumer, null, function (t) {
                    return c.createElement(
                      G,
                      (0, r.Z)(
                        {
                          ref: function (t) {
                            e.menu = t;
                          },
                        },
                        e.props,
                        t,
                      ),
                    );
                  });
                },
              },
            ]),
            n
          );
        })(c.Component);
      (V.Divider = k), (V.Item = L), (V.SubMenu = M), (V.ItemGroup = Z.BW);
      var W = n(80636),
        H = n(93355),
        $ = n(71577),
        U = n(4173),
        X = n(98082);
      function q(e) {
        var t = e.className,
          n = e.direction,
          o = e.index,
          a = e.marginDirection,
          i = e.children,
          s = e.split,
          u = e.wrap,
          p = c.useContext(K),
          m = p.horizontalSize,
          d = p.verticalSize,
          f = p.latestIndex,
          v = p.supportFlexGap,
          y = {};
        return (!v &&
          ("vertical" === n
            ? o < f && (y = { marginBottom: m / (s ? 2 : 1) })
            : (y = (0, r.Z)(
                (0, r.Z)({}, o < f && (0, l.Z)({}, a, m / (s ? 2 : 1))),
                u && { paddingBottom: d },
              ))),
        null == i)
          ? null
          : c.createElement(
              c.Fragment,
              null,
              c.createElement("div", { className: t, style: y }, i),
              o < f &&
                s &&
                c.createElement(
                  "span",
                  { className: "".concat(t, "-split"), style: y },
                  s,
                ),
            );
      }
      var J = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        K = c.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        Q = { small: 8, middle: 16, large: 24 },
        Y = function (e) {
          var t,
            n = c.useContext(P.E_),
            o = n.getPrefixCls,
            i = n.space,
            s = n.direction,
            u = e.size,
            p = void 0 === u ? (null == i ? void 0 : i.size) || "small" : u,
            m = e.align,
            d = e.className,
            v = e.children,
            y = e.direction,
            b = void 0 === y ? "horizontal" : y,
            C = e.prefixCls,
            g = e.split,
            h = e.style,
            x = e.wrap,
            O = void 0 !== x && x,
            Z = J(e, [
              "size",
              "align",
              "className",
              "children",
              "direction",
              "prefixCls",
              "split",
              "style",
              "wrap",
            ]),
            E = (0, X.Z)(),
            w = c.useMemo(
              function () {
                return (Array.isArray(p) ? p : [p, p]).map(function (e) {
                  return "string" == typeof e ? Q[e] : e || 0;
                });
              },
              [p],
            ),
            N = (0, a.Z)(w, 2),
            j = N[0],
            I = N[1],
            k = (0, S.Z)(v, { keepEmpty: !0 }),
            z = void 0 === m && "horizontal" === b ? "center" : m,
            D = o("space", C),
            T = f()(
              D,
              "".concat(D, "-").concat(b),
              ((t = {}),
              (0, l.Z)(t, "".concat(D, "-rtl"), "rtl" === s),
              (0, l.Z)(t, "".concat(D, "-align-").concat(z), z),
              t),
              d,
            ),
            L = "".concat(D, "-item"),
            M = "rtl" === s ? "marginLeft" : "marginRight",
            _ = 0,
            R = k.map(function (e, t) {
              null != e && (_ = t);
              var n = (e && e.key) || "".concat(L, "-").concat(t);
              return c.createElement(
                q,
                {
                  className: L,
                  key: n,
                  direction: b,
                  index: t,
                  marginDirection: M,
                  split: g,
                  wrap: O,
                },
                e,
              );
            }),
            F = c.useMemo(
              function () {
                return {
                  horizontalSize: j,
                  verticalSize: I,
                  latestIndex: _,
                  supportFlexGap: E,
                };
              },
              [j, I, _, E],
            );
          if (0 === k.length) return null;
          var A = {};
          return (
            O && ((A.flexWrap = "wrap"), E || (A.marginBottom = -I)),
            E && ((A.columnGap = j), (A.rowGap = I)),
            c.createElement(
              "div",
              (0, r.Z)(
                { className: T, style: (0, r.Z)((0, r.Z)({}, A), h) },
                Z,
              ),
              c.createElement(K.Provider, { value: F }, R),
            )
          );
        };
      Y.Compact = U.ZP;
      var ee = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        et = function (e) {
          var t = c.useContext(P.E_),
            n = t.getPopupContainer,
            o = t.getPrefixCls,
            l = t.direction,
            i = e.prefixCls,
            s = e.type,
            u = void 0 === s ? "default" : s,
            p = e.danger,
            m = e.disabled,
            d = e.loading,
            v = e.onClick,
            y = e.htmlType,
            b = e.children,
            C = e.className,
            g = e.menu,
            h = e.arrow,
            x = e.autoFocus,
            Z = e.overlay,
            E = e.trigger,
            w = e.align,
            N = e.visible,
            j = e.open,
            I = e.onVisibleChange,
            k = e.onOpenChange,
            S = e.placement,
            z = e.getPopupContainer,
            D = e.href,
            T = e.icon,
            L = void 0 === T ? c.createElement(O.Z, null) : T,
            M = e.title,
            _ = e.buttonsRender,
            R = e.mouseEnterDelay,
            F = e.mouseLeaveDelay,
            A = e.overlayClassName,
            B = e.overlayStyle,
            G = e.destroyPopupOnHide,
            V = ee(e, [
              "prefixCls",
              "type",
              "danger",
              "disabled",
              "loading",
              "onClick",
              "htmlType",
              "children",
              "className",
              "menu",
              "arrow",
              "autoFocus",
              "overlay",
              "trigger",
              "align",
              "visible",
              "open",
              "onVisibleChange",
              "onOpenChange",
              "placement",
              "getPopupContainer",
              "href",
              "icon",
              "title",
              "buttonsRender",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayClassName",
              "overlayStyle",
              "destroyPopupOnHide",
            ]),
            W = o("dropdown-button", i),
            H = {
              menu: g,
              arrow: h,
              autoFocus: x,
              align: w,
              disabled: m,
              trigger: m ? [] : E,
              onOpenChange: k || I,
              getPopupContainer: z || n,
              mouseEnterDelay: R,
              mouseLeaveDelay: F,
              overlayClassName: A,
              overlayStyle: B,
              destroyPopupOnHide: G,
            },
            X = (0, U.ri)(W, l),
            q = X.compactSize,
            J = X.compactItemClassnames,
            K = f()(W, J, C);
          "overlay" in e && (H.overlay = Z),
            "open" in e ? (H.open = j) : "visible" in e && (H.open = N),
            "placement" in e
              ? (H.placement = S)
              : (H.placement = "rtl" === l ? "bottomLeft" : "bottomRight");
          var Q = (
              void 0 === _
                ? function (e) {
                    return e;
                  }
                : _
            )([
              c.createElement(
                $.Z,
                {
                  type: u,
                  danger: p,
                  disabled: m,
                  loading: d,
                  onClick: v,
                  htmlType: y,
                  href: D,
                  title: M,
                },
                b,
              ),
              c.createElement($.Z, { type: u, danger: p, icon: L }),
            ]),
            et = (0, a.Z)(Q, 2),
            en = et[0],
            eo = et[1];
          return c.createElement(
            Y.Compact,
            (0, r.Z)({ className: K, size: q, block: !0 }, V),
            en,
            c.createElement(er, (0, r.Z)({}, H), eo),
          );
        };
      (et.__ANT_BUTTON = !0),
        (0, H.b)(
          "topLeft",
          "topCenter",
          "topRight",
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
          "top",
          "bottom",
        );
      var en = function (e) {
        var t,
          n,
          i,
          s,
          u,
          p = c.useContext(P.E_),
          d = p.getPopupContainer,
          C = p.getPrefixCls,
          g = p.direction,
          h = e.menu,
          x = e.arrow,
          O = e.prefixCls,
          Z = e.children,
          E = e.trigger,
          w = e.disabled,
          N = e.dropdownRender,
          I = e.getPopupContainer,
          k = e.overlayClassName,
          S = e.visible,
          z = e.open,
          D = e.onVisibleChange,
          T = e.onOpenChange,
          L = e.mouseEnterDelay,
          M = e.mouseLeaveDelay,
          _ = e.autoAdjustOverflow,
          R = C("dropdown", O),
          F = c.Children.only(Z),
          B = (0, j.Tm)(F, {
            className: f()(
              "".concat(R, "-trigger"),
              (0, l.Z)({}, "".concat(R, "-rtl"), "rtl" === g),
              F.props.className,
            ),
            disabled: w,
          }),
          G = w ? [] : E;
        G && G.includes("contextMenu") && (u = !0);
        var H = (0, b.Z)(!1, { value: void 0 !== z ? z : S }),
          $ = (0, a.Z)(H, 2),
          X = $[0],
          q = $[1],
          J = (0, y.Z)(function (e) {
            null == D || D(e), null == T || T(e), q(e);
          }),
          K = f()(k, (0, l.Z)({}, "".concat(R, "-rtl"), "rtl" === g)),
          Q = (0, W.Z)({
            arrowPointAtCenter: "object" === (0, o.Z)(x) && x.pointAtCenter,
            autoAdjustOverflow: void 0 === _ || _,
          }),
          Y = c.useCallback(function () {
            q(!1);
          }, []);
        return c.createElement(
          v.Z,
          (0, r.Z)({ alignPoint: u }, e, {
            mouseEnterDelay: void 0 === L ? 0.15 : L,
            mouseLeaveDelay: void 0 === M ? 0.1 : M,
            visible: X,
            builtinPlacements: Q,
            arrow: !!x,
            overlayClassName: K,
            prefixCls: R,
            getPopupContainer: I || d,
            transitionName:
              ((t = C()),
              (n = e.placement),
              void 0 !== (i = e.transitionName)
                ? i
                : (void 0 === n ? "" : n).includes("top")
                  ? "".concat(t, "-slide-down")
                  : "".concat(t, "-slide-up")),
            trigger: G,
            overlay: function () {
              var t,
                n = e.overlay;
              return (
                (t = (null == h ? void 0 : h.items)
                  ? c.createElement(V, (0, r.Z)({}, h))
                  : "function" == typeof n
                    ? n()
                    : n),
                N && (t = N(t)),
                (t = c.Children.only(
                  "string" == typeof t ? c.createElement("span", null, t) : t,
                )),
                c.createElement(
                  A,
                  {
                    prefixCls: "".concat(R, "-menu"),
                    expandIcon: c.createElement(
                      "span",
                      { className: "".concat(R, "-menu-submenu-arrow") },
                      c.createElement(m, {
                        className: "".concat(R, "-menu-submenu-arrow-icon"),
                      }),
                    ),
                    mode: "vertical",
                    selectable: !1,
                    onClick: Y,
                    validator: function (e) {
                      e.mode;
                    },
                  },
                  c.createElement(U.BR, null, t),
                )
              );
            },
            placement: (s = e.placement)
              ? s.includes("Center")
                ? s.slice(0, s.indexOf("Center"))
                : s
              : "rtl" === g
                ? "bottomRight"
                : "bottomLeft",
            onVisibleChange: J,
          }),
          B,
        );
      };
      en.Button = et;
      var er = en,
        eo = er;
    },
    4173: function (e, t, n) {
      n.d(t, {
        BR: function () {
          return d;
        },
        ri: function () {
          return m;
        },
      });
      var r = n(87462),
        o = n(4942),
        l = n(94184),
        a = n.n(l),
        i = n(50344),
        c = n(67294),
        s = n(53124),
        u = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > t.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          return n;
        },
        p = c.createContext(null),
        m = function (e, t) {
          var n = c.useContext(p),
            r = c.useMemo(
              function () {
                if (!n) return "";
                var r,
                  l = n.compactDirection,
                  i = n.isFirstItem,
                  c = n.isLastItem,
                  s = "vertical" === l ? "-vertical-" : "-";
                return a()(
                  ((r = {}),
                  (0, o.Z)(r, "".concat(e, "-compact").concat(s, "item"), !0),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(s, "first-item"),
                    i,
                  ),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(s, "last-item"),
                    c,
                  ),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(s, "item-rtl"),
                    "rtl" === t,
                  ),
                  r),
                );
              },
              [e, t, n],
            );
          return {
            compactSize: null == n ? void 0 : n.compactSize,
            compactDirection: null == n ? void 0 : n.compactDirection,
            compactItemClassnames: r,
          };
        },
        d = function (e) {
          var t = e.children;
          return c.createElement(p.Provider, { value: null }, t);
        },
        f = function (e) {
          var t = e.children,
            n = u(e, ["children"]);
          return c.createElement(p.Provider, { value: n }, t);
        };
      t.ZP = function (e) {
        var t,
          n = c.useContext(s.E_),
          l = n.getPrefixCls,
          m = n.direction,
          d = e.size,
          v = void 0 === d ? "middle" : d,
          y = e.direction,
          b = e.block,
          C = e.prefixCls,
          g = e.className,
          h = e.children,
          x = u(e, [
            "size",
            "direction",
            "block",
            "prefixCls",
            "className",
            "children",
          ]),
          O = l("space-compact", C),
          Z = a()(
            O,
            ((t = {}),
            (0, o.Z)(t, "".concat(O, "-rtl"), "rtl" === m),
            (0, o.Z)(t, "".concat(O, "-block"), b),
            (0, o.Z)(t, "".concat(O, "-vertical"), "vertical" === y),
            t),
            g,
          ),
          E = c.useContext(p),
          P = (0, i.Z)(h),
          w = c.useMemo(
            function () {
              return P.map(function (e, t) {
                var n = (e && e.key) || "".concat(O, "-item-").concat(t);
                return c.createElement(
                  f,
                  {
                    key: n,
                    compactSize: v,
                    compactDirection: y,
                    isFirstItem:
                      0 === t && (!E || (null == E ? void 0 : E.isFirstItem)),
                    isLastItem:
                      t === P.length - 1 &&
                      (!E || (null == E ? void 0 : E.isLastItem)),
                  },
                  e,
                );
              });
            },
            [v, P, E],
          );
        return 0 === P.length
          ? null
          : c.createElement("div", (0, r.Z)({ className: Z }, x), w);
      };
    },
  },
]);
//# sourceMappingURL=2932.6baf9c37c25fc8ff.js.map
