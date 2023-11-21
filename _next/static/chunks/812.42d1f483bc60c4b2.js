"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [812],
  {
    68795: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(1413),
        o = n(67294),
        c = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
                },
              },
            ],
          },
          name: "search",
          theme: "outlined",
        },
        i = n(42135),
        a = function (e, t) {
          return o.createElement(
            i.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: t, icon: c }),
          );
        };
      a.displayName = "SearchOutlined";
      var u = o.forwardRef(a);
    },
    93355: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
        b: function () {
          return r;
        },
      });
      var r = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        },
        o = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        };
    },
    65223: function (e, t, n) {
      n.d(t, {
        RV: function () {
          return l;
        },
        Rk: function () {
          return s;
        },
        Ux: function () {
          return d;
        },
        aM: function () {
          return f;
        },
        q3: function () {
          return a;
        },
        qI: function () {
          return u;
        },
      });
      var r = n(87462),
        o = n(71990),
        c = n(98423),
        i = n(67294),
        a = i.createContext({
          labelAlign: "right",
          vertical: !1,
          itemRef: function () {},
        }),
        u = i.createContext(null),
        l = function (e) {
          var t = (0, c.Z)(e, ["prefixCls"]);
          return i.createElement(o.RV, (0, r.Z)({}, t));
        },
        s = i.createContext({ prefixCls: "" }),
        f = i.createContext({}),
        d = function (e) {
          var t = e.children,
            n = e.status,
            o = e.override,
            c = (0, i.useContext)(f),
            a = (0, i.useMemo)(
              function () {
                var e = (0, r.Z)({}, c);
                return (
                  o && delete e.isFormItemInput,
                  n &&
                    (delete e.status,
                    delete e.hasFeedback,
                    delete e.feedbackIcon),
                  e
                );
              },
              [n, o, c],
            );
          return i.createElement(f.Provider, { value: a }, t);
        };
    },
    68863: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var r = n(87462),
        o = n(4942),
        c = n(94184),
        i = n.n(c),
        a = n(67294),
        u = n(53124),
        l = n(65223),
        s = n(16591),
        f = n(97685),
        d = n(71002),
        v = n(1413),
        p = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z",
                },
              },
            ],
          },
          name: "eye-invisible",
          theme: "outlined",
        },
        m = n(42135),
        h = function (e, t) {
          return a.createElement(
            m.Z,
            (0, v.Z)((0, v.Z)({}, e), {}, { ref: t, icon: p }),
          );
        };
      h.displayName = "EyeInvisibleOutlined";
      var y = a.forwardRef(h),
        C = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",
                },
              },
            ],
          },
          name: "eye",
          theme: "outlined",
        },
        Z = function (e, t) {
          return a.createElement(
            m.Z,
            (0, v.Z)((0, v.Z)({}, e), {}, { ref: t, icon: C }),
          );
        };
      Z.displayName = "EyeOutlined";
      var b = a.forwardRef(Z),
        g = n(98423),
        E = n(42550),
        x = n(72922),
        w = function (e, t) {
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
        O = function (e) {
          return e ? a.createElement(b, null) : a.createElement(y, null);
        },
        P = { click: "onClick", hover: "onMouseOver" },
        k = a.forwardRef(function (e, t) {
          var n = e.visibilityToggle,
            c = void 0 === n || n,
            l = "object" === (0, d.Z)(c) && void 0 !== c.visible,
            v = (0, a.useState)(function () {
              return !!l && c.visible;
            }),
            p = (0, f.Z)(v, 2),
            m = p[0],
            h = p[1],
            y = (0, a.useRef)(null);
          a.useEffect(
            function () {
              l && h(c.visible);
            },
            [l, c],
          );
          var C = (0, x.Z)(y),
            Z = function () {
              e.disabled ||
                (m && C(),
                h(function (e) {
                  var t,
                    n = !e;
                  return (
                    "object" === (0, d.Z)(c) &&
                      (null === (t = c.onVisibleChange) ||
                        void 0 === t ||
                        t.call(c, n)),
                    n
                  );
                }));
            },
            b = function (t) {
              var n,
                r = e.action,
                c = e.iconRender,
                i = P[void 0 === r ? "click" : r] || "",
                u = (void 0 === c ? O : c)(m),
                l =
                  ((n = {}),
                  (0, o.Z)(n, i, Z),
                  (0, o.Z)(n, "className", "".concat(t, "-icon")),
                  (0, o.Z)(n, "key", "passwordIcon"),
                  (0, o.Z)(n, "onMouseDown", function (e) {
                    e.preventDefault();
                  }),
                  (0, o.Z)(n, "onMouseUp", function (e) {
                    e.preventDefault();
                  }),
                  n);
              return a.cloneElement(
                a.isValidElement(u) ? u : a.createElement("span", null, u),
                l,
              );
            };
          return a.createElement(u.C, null, function (n) {
            var u = n.getPrefixCls,
              l = e.className,
              f = e.prefixCls,
              d = e.inputPrefixCls,
              v = e.size,
              p = w(e, ["className", "prefixCls", "inputPrefixCls", "size"]),
              h = u("input", d),
              C = u("input-password", f),
              Z = c && b(C),
              x = i()(C, l, (0, o.Z)({}, "".concat(C, "-").concat(v), !!v)),
              O = (0, r.Z)(
                (0, r.Z)(
                  {},
                  (0, g.Z)(p, ["suffix", "iconRender", "visibilityToggle"]),
                ),
                {
                  type: m ? "text" : "password",
                  className: x,
                  prefixCls: h,
                  suffix: Z,
                },
              );
            return (
              v && (O.size = v),
              a.createElement(s.ZP, (0, r.Z)({ ref: (0, E.sQ)(t, y) }, O))
            );
          });
        }),
        z = n(68795),
        M = n(71577),
        R = n(97647),
        S = n(4173),
        N = n(96159),
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
        j = a.forwardRef(function (e, t) {
          var n,
            c,
            l = e.prefixCls,
            f = e.inputPrefixCls,
            d = e.className,
            v = e.size,
            p = e.suffix,
            m = e.enterButton,
            h = void 0 !== m && m,
            y = e.addonAfter,
            C = e.loading,
            Z = e.disabled,
            b = e.onSearch,
            g = e.onChange,
            x = e.onCompositionStart,
            w = e.onCompositionEnd,
            O = I(e, [
              "prefixCls",
              "inputPrefixCls",
              "className",
              "size",
              "suffix",
              "enterButton",
              "addonAfter",
              "loading",
              "disabled",
              "onSearch",
              "onChange",
              "onCompositionStart",
              "onCompositionEnd",
            ]),
            P = a.useContext(u.E_),
            k = P.getPrefixCls,
            j = P.direction,
            B = a.useContext(R.Z),
            L = a.useRef(!1),
            A = k("input-search", l),
            D = k("input", f),
            _ = (0, S.ri)(A, j).compactSize || v || B,
            F = a.useRef(null),
            T = function (e) {
              var t;
              document.activeElement ===
                (null === (t = F.current) || void 0 === t ? void 0 : t.input) &&
                e.preventDefault();
            },
            q = function (e) {
              var t, n;
              b &&
                b(
                  null ===
                    (n =
                      null === (t = F.current) || void 0 === t
                        ? void 0
                        : t.input) || void 0 === n
                    ? void 0
                    : n.value,
                  e,
                );
            },
            H = "boolean" == typeof h ? a.createElement(z.Z, null) : null,
            Q = "".concat(A, "-button"),
            G = h || {},
            V = G.type && !0 === G.type.__ANT_BUTTON;
          (c =
            V || "button" === G.type
              ? (0, N.Tm)(
                  G,
                  (0, r.Z)(
                    {
                      onMouseDown: T,
                      onClick: function (e) {
                        var t, n;
                        null ===
                          (n =
                            null === (t = null == G ? void 0 : G.props) ||
                            void 0 === t
                              ? void 0
                              : t.onClick) ||
                          void 0 === n ||
                          n.call(t, e),
                          q(e);
                      },
                      key: "enterButton",
                    },
                    V ? { className: Q, size: _ } : {},
                  ),
                )
              : a.createElement(
                  M.Z,
                  {
                    className: Q,
                    type: h ? "primary" : void 0,
                    size: _,
                    disabled: Z,
                    key: "enterButton",
                    onMouseDown: T,
                    onClick: q,
                    loading: C,
                    icon: H,
                  },
                  h,
                )),
            y && (c = [c, (0, N.Tm)(y, { key: "addonAfter" })]);
          var W = i()(
            A,
            ((n = {}),
            (0, o.Z)(n, "".concat(A, "-rtl"), "rtl" === j),
            (0, o.Z)(n, "".concat(A, "-").concat(_), !!_),
            (0, o.Z)(n, "".concat(A, "-with-button"), !!h),
            n),
            d,
          );
          return a.createElement(
            s.ZP,
            (0, r.Z)(
              {
                ref: (0, E.sQ)(F, t),
                onPressEnter: function (e) {
                  L.current || C || q(e);
                },
              },
              O,
              {
                size: _,
                onCompositionStart: function (e) {
                  (L.current = !0), null == x || x(e);
                },
                onCompositionEnd: function (e) {
                  (L.current = !1), null == w || w(e);
                },
                prefixCls: D,
                addonAfter: c,
                suffix: p,
                onChange: function (e) {
                  e &&
                    e.target &&
                    "click" === e.type &&
                    b &&
                    b(e.target.value, e),
                    g && g(e);
                },
                className: W,
                disabled: Z,
              },
            ),
          );
        }),
        B = n(56994),
        L = s.ZP;
      (L.Group = function (e) {
        var t,
          n = (0, a.useContext)(u.E_),
          c = n.getPrefixCls,
          s = n.direction,
          f = e.prefixCls,
          d = e.className,
          v = c("input-group", f),
          p = i()(
            v,
            ((t = {}),
            (0, o.Z)(t, "".concat(v, "-lg"), "large" === e.size),
            (0, o.Z)(t, "".concat(v, "-sm"), "small" === e.size),
            (0, o.Z)(t, "".concat(v, "-compact"), e.compact),
            (0, o.Z)(t, "".concat(v, "-rtl"), "rtl" === s),
            t),
            void 0 === d ? "" : d,
          ),
          m = (0, a.useContext)(l.aM),
          h = (0, a.useMemo)(
            function () {
              return (0, r.Z)((0, r.Z)({}, m), { isFormItemInput: !1 });
            },
            [m],
          );
        return a.createElement(
          "span",
          {
            className: p,
            style: e.style,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            onFocus: e.onFocus,
            onBlur: e.onBlur,
          },
          a.createElement(l.aM.Provider, { value: h }, e.children),
        );
      }),
        (L.Search = j),
        (L.TextArea = B.Z),
        (L.Password = k);
      var A = L;
    },
    4173: function (e, t, n) {
      n.d(t, {
        BR: function () {
          return v;
        },
        ri: function () {
          return d;
        },
      });
      var r = n(87462),
        o = n(4942),
        c = n(94184),
        i = n.n(c),
        a = n(50344),
        u = n(67294),
        l = n(53124),
        s = function (e, t) {
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
        f = u.createContext(null),
        d = function (e, t) {
          var n = u.useContext(f),
            r = u.useMemo(
              function () {
                if (!n) return "";
                var r,
                  c = n.compactDirection,
                  a = n.isFirstItem,
                  u = n.isLastItem,
                  l = "vertical" === c ? "-vertical-" : "-";
                return i()(
                  ((r = {}),
                  (0, o.Z)(r, "".concat(e, "-compact").concat(l, "item"), !0),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(l, "first-item"),
                    a,
                  ),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(l, "last-item"),
                    u,
                  ),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(l, "item-rtl"),
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
        v = function (e) {
          var t = e.children;
          return u.createElement(f.Provider, { value: null }, t);
        },
        p = function (e) {
          var t = e.children,
            n = s(e, ["children"]);
          return u.createElement(f.Provider, { value: n }, t);
        };
      t.ZP = function (e) {
        var t,
          n = u.useContext(l.E_),
          c = n.getPrefixCls,
          d = n.direction,
          v = e.size,
          m = void 0 === v ? "middle" : v,
          h = e.direction,
          y = e.block,
          C = e.prefixCls,
          Z = e.className,
          b = e.children,
          g = s(e, [
            "size",
            "direction",
            "block",
            "prefixCls",
            "className",
            "children",
          ]),
          E = c("space-compact", C),
          x = i()(
            E,
            ((t = {}),
            (0, o.Z)(t, "".concat(E, "-rtl"), "rtl" === d),
            (0, o.Z)(t, "".concat(E, "-block"), y),
            (0, o.Z)(t, "".concat(E, "-vertical"), "vertical" === h),
            t),
            Z,
          ),
          w = u.useContext(f),
          O = (0, a.Z)(b),
          P = u.useMemo(
            function () {
              return O.map(function (e, t) {
                var n = (e && e.key) || "".concat(E, "-item-").concat(t);
                return u.createElement(
                  p,
                  {
                    key: n,
                    compactSize: m,
                    compactDirection: h,
                    isFirstItem:
                      0 === t && (!w || (null == w ? void 0 : w.isFirstItem)),
                    isLastItem:
                      t === O.length - 1 &&
                      (!w || (null == w ? void 0 : w.isLastItem)),
                  },
                  e,
                );
              });
            },
            [m, O, w],
          );
        return 0 === O.length
          ? null
          : u.createElement("div", (0, r.Z)({ className: x }, g), P);
      };
    },
    48555: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r = n(87462),
        o = n(67294),
        c = n(50344);
      n(80334);
      var i = n(1413),
        a = n(42550),
        u = n(34203),
        l = n(91033),
        s = new Map(),
        f = new l.Z(function (e) {
          e.forEach(function (e) {
            var t,
              n = e.target;
            null === (t = s.get(n)) ||
              void 0 === t ||
              t.forEach(function (e) {
                return e(n);
              });
          });
        }),
        d = n(15671),
        v = n(43144),
        p = n(32531),
        m = n(73568),
        h = (function (e) {
          (0, p.Z)(n, e);
          var t = (0, m.Z)(n);
          function n() {
            return (0, d.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, v.Z)(n, [
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(o.Component),
        y = o.createContext(null),
        C = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.disabled,
            c = o.useRef(null),
            l = o.useRef(null),
            d = o.useContext(y),
            v = "function" == typeof n,
            p = v ? n(c) : n,
            m = o.useRef({
              width: -1,
              height: -1,
              offsetWidth: -1,
              offsetHeight: -1,
            }),
            C = !v && o.isValidElement(p) && (0, a.Yr)(p),
            Z = C ? p.ref : null,
            b = o.useMemo(
              function () {
                return (0, a.sQ)(Z, c);
              },
              [Z, c],
            ),
            g = function () {
              return (0, u.Z)(c.current) || (0, u.Z)(l.current);
            };
          o.useImperativeHandle(t, function () {
            return g();
          });
          var E = o.useRef(e);
          E.current = e;
          var x = o.useCallback(function (e) {
            var t = E.current,
              n = t.onResize,
              r = t.data,
              o = e.getBoundingClientRect(),
              c = o.width,
              a = o.height,
              u = e.offsetWidth,
              l = e.offsetHeight,
              s = Math.floor(c),
              f = Math.floor(a);
            if (
              m.current.width !== s ||
              m.current.height !== f ||
              m.current.offsetWidth !== u ||
              m.current.offsetHeight !== l
            ) {
              var v = { width: s, height: f, offsetWidth: u, offsetHeight: l };
              m.current = v;
              var p = (0, i.Z)(
                (0, i.Z)({}, v),
                {},
                {
                  offsetWidth: u === Math.round(c) ? c : u,
                  offsetHeight: l === Math.round(a) ? a : l,
                },
              );
              null == d || d(p, e, r),
                n &&
                  Promise.resolve().then(function () {
                    n(p, e);
                  });
            }
          }, []);
          return (
            o.useEffect(
              function () {
                var e = g();
                return (
                  e &&
                    !r &&
                    (s.has(e) || (s.set(e, new Set()), f.observe(e)),
                    s.get(e).add(x)),
                  function () {
                    s.has(e) &&
                      (s.get(e).delete(x),
                      s.get(e).size || (f.unobserve(e), s.delete(e)));
                  }
                );
              },
              [c.current, r],
            ),
            o.createElement(
              h,
              { ref: l },
              C ? o.cloneElement(p, { ref: b }) : p,
            )
          );
        }),
        Z = o.forwardRef(function (e, t) {
          var n = e.children;
          return ("function" == typeof n ? [n] : (0, c.Z)(n)).map(
            function (n, c) {
              var i =
                (null == n ? void 0 : n.key) ||
                "".concat("rc-observer-key", "-").concat(c);
              return o.createElement(
                C,
                (0, r.Z)({}, e, { key: i, ref: 0 === c ? t : void 0 }),
                n,
              );
            },
          );
        });
      Z.Collection = function (e) {
        var t = e.children,
          n = e.onBatchResize,
          r = o.useRef(0),
          c = o.useRef([]),
          i = o.useContext(y),
          a = o.useCallback(
            function (e, t, o) {
              r.current += 1;
              var a = r.current;
              c.current.push({ size: e, element: t, data: o }),
                Promise.resolve().then(function () {
                  a === r.current &&
                    (null == n || n(c.current), (c.current = []));
                }),
                null == i || i(e, t, o);
            },
            [n, i],
          );
        return o.createElement(y.Provider, { value: a }, t);
      };
      var b = Z;
    },
    8410: function (e, t, n) {
      n.d(t, {
        o: function () {
          return c;
        },
      });
      var r = n(67294),
        o = (0, n(98924).Z)() ? r.useLayoutEffect : r.useEffect;
      t.Z = o;
      var c = function (e, t) {
        var n = r.useRef(!0);
        o(function () {
          if (!n.current) return e();
        }, t),
          o(function () {
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
          return o;
        },
      });
      var r = n(1413);
      function o(e, t) {
        var n = (0, r.Z)({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return a;
        },
      });
      var r = n(67294);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      let c = Symbol(),
        i = (e, t) => {
          let n = Object.keys(t),
            i = t,
            a = null,
            u = {};
          n.forEach((e) => {
            u[e] = new Set();
          });
          let l = (t, n) => (n.type === c ? (n.r ? n.r(t) : n.e) : e(t, n)),
            s = (e, t) => {
              let n = (n) => {
                var r;
                return o({}, n, {
                  [e]: ((r = n[e]), "function" == typeof t ? t(r) : t),
                });
              };
              if (a) a({ type: c, r: n });
              else {
                i = n(i);
                let t = i[e];
                u[e].forEach((e) => e(t));
              }
            },
            f = (e, t) => {
              n.forEach((n) => {
                let r = t[n];
                e[n] !== r && u[n].forEach((e) => e(r));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, r.useReducer)(l, i);
              (0, r.useEffect)(() => {
                if (a) throw Error("Only one global state provider is allowed");
                return (
                  (a = t),
                  t({ type: c, e: i }),
                  () => {
                    a = null;
                  }
                );
              }, []);
              let n = (0, r.useRef)(e);
              f(n.current, e),
                (n.current = e),
                (0, r.useEffect)(() => {
                  i = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, n] = (0, r.useState)(i[e]);
              return (
                (0, r.useEffect)(
                  () => (
                    u[e].add(n),
                    n(i[e]),
                    () => {
                      u[e].delete(n);
                    }
                  ),
                  [e],
                ),
                [t, (0, r.useCallback)((t) => s(e, t), [e])]
              );
            },
            getGlobalState: (e) => i[e],
            setGlobalState: s,
            getState: () => i,
            setState: (e) => {
              if (a) a({ type: c, e: e });
              else {
                let t = i;
                f(t, (i = e));
              }
            },
            dispatch: (t) => {
              if (a) a(t);
              else {
                let n = i;
                f(n, (i = e(i, t)));
              }
              return t;
            },
          };
        },
        a = (e) => i((e, t) => e, e),
        u = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(u)(e, t) : i(e, t);
    },
  },
]);
//# sourceMappingURL=812.42d1f483bc60c4b2.js.map
