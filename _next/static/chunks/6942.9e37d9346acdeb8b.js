(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6942],
  {
    63606: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(1413),
        r = n(67294),
        a = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
                },
              },
            ],
          },
          name: "check",
          theme: "outlined",
        },
        i = n(42135),
        l = function (e, t) {
          return r.createElement(
            i.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: a }),
          );
        };
      l.displayName = "CheckOutlined";
      var c = r.forwardRef(l);
    },
    80636: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o = n(87462),
        r = n(43159),
        a = { adjustX: 1, adjustY: 1 },
        i = { adjustX: 0, adjustY: 0 },
        l = [0, 0];
      function c(e) {
        return "boolean" == typeof e
          ? e
            ? a
            : i
          : (0, o.Z)((0, o.Z)({}, i), e);
      }
      function s(e) {
        var t = e.arrowWidth,
          n = void 0 === t ? 4 : t,
          a = e.horizontalArrowShift,
          i = void 0 === a ? 16 : a,
          s = e.verticalArrowShift,
          u = void 0 === s ? 8 : s,
          f = e.autoAdjustOverflow,
          p = e.arrowPointAtCenter,
          d = {
            left: { points: ["cr", "cl"], offset: [-4, 0] },
            right: { points: ["cl", "cr"], offset: [4, 0] },
            top: { points: ["bc", "tc"], offset: [0, -4] },
            bottom: { points: ["tc", "bc"], offset: [0, 4] },
            topLeft: { points: ["bl", "tc"], offset: [-(i + n), -4] },
            leftTop: { points: ["tr", "cl"], offset: [-4, -(u + n)] },
            topRight: { points: ["br", "tc"], offset: [i + n, -4] },
            rightTop: { points: ["tl", "cr"], offset: [4, -(u + n)] },
            bottomRight: { points: ["tr", "bc"], offset: [i + n, 4] },
            rightBottom: { points: ["bl", "cr"], offset: [4, u + n] },
            bottomLeft: { points: ["tl", "bc"], offset: [-(i + n), 4] },
            leftBottom: { points: ["br", "cl"], offset: [-4, u + n] },
          };
        return (
          Object.keys(d).forEach(function (e) {
            (d[e] = p
              ? (0, o.Z)((0, o.Z)({}, d[e]), {
                  overflow: c(f),
                  targetOffset: l,
                })
              : (0, o.Z)((0, o.Z)({}, r.C[e]), { overflow: c(f) })),
              (d[e].ignoreShake = !0);
          }),
          d
        );
      }
    },
    65223: function (e, t, n) {
      "use strict";
      n.d(t, {
        RV: function () {
          return s;
        },
        Rk: function () {
          return u;
        },
        Ux: function () {
          return p;
        },
        aM: function () {
          return f;
        },
        q3: function () {
          return l;
        },
        qI: function () {
          return c;
        },
      });
      var o = n(87462),
        r = n(71990),
        a = n(98423),
        i = n(67294),
        l = i.createContext({
          labelAlign: "right",
          vertical: !1,
          itemRef: function () {},
        }),
        c = i.createContext(null),
        s = function (e) {
          var t = (0, a.Z)(e, ["prefixCls"]);
          return i.createElement(r.RV, (0, o.Z)({}, t));
        },
        u = i.createContext({ prefixCls: "" }),
        f = i.createContext({}),
        p = function (e) {
          var t = e.children,
            n = e.status,
            r = e.override,
            a = (0, i.useContext)(f),
            l = (0, i.useMemo)(
              function () {
                var e = (0, o.Z)({}, a);
                return (
                  r && delete e.isFormItemInput,
                  n &&
                    (delete e.status,
                    delete e.hasFeedback,
                    delete e.feedbackIcon),
                  e
                );
              },
              [n, r, a],
            );
          return i.createElement(f.Provider, { value: l }, t);
        };
    },
    4173: function (e, t, n) {
      "use strict";
      n.d(t, {
        BR: function () {
          return d;
        },
        ri: function () {
          return p;
        },
      });
      var o = n(87462),
        r = n(4942),
        a = n(94184),
        i = n.n(a),
        l = n(50344),
        c = n(67294),
        s = n(53124),
        u = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        f = c.createContext(null),
        p = function (e, t) {
          var n = c.useContext(f),
            o = c.useMemo(
              function () {
                if (!n) return "";
                var o,
                  a = n.compactDirection,
                  l = n.isFirstItem,
                  c = n.isLastItem,
                  s = "vertical" === a ? "-vertical-" : "-";
                return i()(
                  ((o = {}),
                  (0, r.Z)(o, "".concat(e, "-compact").concat(s, "item"), !0),
                  (0, r.Z)(
                    o,
                    "".concat(e, "-compact").concat(s, "first-item"),
                    l,
                  ),
                  (0, r.Z)(
                    o,
                    "".concat(e, "-compact").concat(s, "last-item"),
                    c,
                  ),
                  (0, r.Z)(
                    o,
                    "".concat(e, "-compact").concat(s, "item-rtl"),
                    "rtl" === t,
                  ),
                  o),
                );
              },
              [e, t, n],
            );
          return {
            compactSize: null == n ? void 0 : n.compactSize,
            compactDirection: null == n ? void 0 : n.compactDirection,
            compactItemClassnames: o,
          };
        },
        d = function (e) {
          var t = e.children;
          return c.createElement(f.Provider, { value: null }, t);
        },
        v = function (e) {
          var t = e.children,
            n = u(e, ["children"]);
          return c.createElement(f.Provider, { value: n }, t);
        };
      t.ZP = function (e) {
        var t,
          n = c.useContext(s.E_),
          a = n.getPrefixCls,
          p = n.direction,
          d = e.size,
          m = void 0 === d ? "middle" : d,
          y = e.direction,
          b = e.block,
          g = e.prefixCls,
          h = e.className,
          w = e.children,
          Z = u(e, [
            "size",
            "direction",
            "block",
            "prefixCls",
            "className",
            "children",
          ]),
          E = a("space-compact", g),
          C = i()(
            E,
            ((t = {}),
            (0, r.Z)(t, "".concat(E, "-rtl"), "rtl" === p),
            (0, r.Z)(t, "".concat(E, "-block"), b),
            (0, r.Z)(t, "".concat(E, "-vertical"), "vertical" === y),
            t),
            h,
          ),
          x = c.useContext(f),
          O = (0, l.Z)(w),
          S = c.useMemo(
            function () {
              return O.map(function (e, t) {
                var n = (e && e.key) || "".concat(E, "-item-").concat(t);
                return c.createElement(
                  v,
                  {
                    key: n,
                    compactSize: m,
                    compactDirection: y,
                    isFirstItem:
                      0 === t && (!x || (null == x ? void 0 : x.isFirstItem)),
                    isLastItem:
                      t === O.length - 1 &&
                      (!x || (null == x ? void 0 : x.isLastItem)),
                  },
                  e,
                );
              });
            },
            [m, O, x],
          );
        return 0 === O.length
          ? null
          : c.createElement("div", (0, o.Z)({ className: C }, Z), S);
      };
    },
    77939: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = n(4942),
        r = n(97685),
        a = n(87462),
        i = n(94184),
        l = n.n(i),
        c = n(71002),
        s = n(1413),
        u = n(45987),
        f = n(67294),
        p = n(11276),
        d = n(43159);
      function v(e) {
        var t = e.showArrow,
          n = e.arrowContent,
          o = e.children,
          r = e.prefixCls,
          a = e.id,
          i = e.overlayInnerStyle,
          c = e.className,
          s = e.style;
        return f.createElement(
          "div",
          { className: l()("".concat(r, "-content"), c), style: s },
          !1 !== t &&
            f.createElement(
              "div",
              { className: "".concat(r, "-arrow"), key: "arrow" },
              n,
            ),
          f.createElement(
            "div",
            {
              className: "".concat(r, "-inner"),
              id: a,
              role: "tooltip",
              style: i,
            },
            "function" == typeof o ? o() : o,
          ),
        );
      }
      var m = (0, f.forwardRef)(function (e, t) {
          var n = e.overlayClassName,
            o = e.trigger,
            r = e.mouseEnterDelay,
            i = e.mouseLeaveDelay,
            l = e.overlayStyle,
            m = e.prefixCls,
            y = void 0 === m ? "rc-tooltip" : m,
            b = e.children,
            g = e.onVisibleChange,
            h = e.afterVisibleChange,
            w = e.transitionName,
            Z = e.animation,
            E = e.motion,
            C = e.placement,
            x = e.align,
            O = e.destroyTooltipOnHide,
            S = void 0 !== O && O,
            k = e.defaultVisible,
            N = e.getTooltipContainer,
            P = e.overlayInnerStyle,
            R = e.arrowContent,
            j = e.overlay,
            D = e.id,
            I = e.showArrow,
            T = (0, u.Z)(e, [
              "overlayClassName",
              "trigger",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayStyle",
              "prefixCls",
              "children",
              "onVisibleChange",
              "afterVisibleChange",
              "transitionName",
              "animation",
              "motion",
              "placement",
              "align",
              "destroyTooltipOnHide",
              "defaultVisible",
              "getTooltipContainer",
              "overlayInnerStyle",
              "arrowContent",
              "overlay",
              "id",
              "showArrow",
            ]),
            A = (0, f.useRef)(null);
          (0, f.useImperativeHandle)(t, function () {
            return A.current;
          });
          var z = (0, s.Z)({}, T);
          "visible" in e && (z.popupVisible = e.visible);
          var L = !1,
            M = !1;
          if ("boolean" == typeof S) L = S;
          else if (S && "object" === (0, c.Z)(S)) {
            var V = S.keepParent;
            (L = !0 === V), (M = !1 === V);
          }
          return f.createElement(
            p.Z,
            (0, a.Z)(
              {
                popupClassName: n,
                prefixCls: y,
                popup: function () {
                  return f.createElement(
                    v,
                    {
                      showArrow: I,
                      arrowContent: R,
                      key: "content",
                      prefixCls: y,
                      id: D,
                      overlayInnerStyle: P,
                    },
                    j,
                  );
                },
                action: void 0 === o ? ["hover"] : o,
                builtinPlacements: d.C,
                popupPlacement: void 0 === C ? "right" : C,
                ref: A,
                popupAlign: void 0 === x ? {} : x,
                getPopupContainer: N,
                onPopupVisibleChange: g,
                afterPopupVisibleChange: h,
                popupTransitionName: w,
                popupAnimation: Z,
                popupMotion: E,
                defaultPopupVisible: k,
                destroyPopupOnHide: L,
                autoDestroy: M,
                mouseLeaveDelay: void 0 === i ? 0.1 : i,
                popupStyle: l,
                mouseEnterDelay: void 0 === r ? 0 : r,
              },
              z,
            ),
            b,
          );
        }),
        y = n(21770),
        b = n(53124),
        g = n(93355);
      (0, g.b)("success", "processing", "error", "default", "warning");
      var h = (0, g.b)(
          "pink",
          "red",
          "yellow",
          "orange",
          "cyan",
          "green",
          "blue",
          "purple",
          "geekblue",
          "magenta",
          "volcano",
          "gold",
          "lime",
        ),
        w = n(33603),
        Z = n(80636),
        E = n(96159),
        C = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        x = function (e, t) {
          var n = {},
            o = (0, a.Z)({}, e);
          return (
            t.forEach(function (t) {
              e && t in e && ((n[t] = e[t]), delete o[t]);
            }),
            { picked: n, omitted: o }
          );
        },
        O = RegExp("^(".concat(h.join("|"), ")(-inverse)?$")),
        S = f.forwardRef(function (e, t) {
          var n,
            i,
            c,
            s = f.useContext(b.E_),
            u = s.getPopupContainer,
            p = s.getPrefixCls,
            d = s.direction,
            v = (0, y.Z)(!1, {
              value: void 0 !== e.open ? e.open : e.visible,
              defaultValue:
                void 0 !== e.defaultOpen ? e.defaultOpen : e.defaultVisible,
            }),
            g = (0, r.Z)(v, 2),
            h = g[0],
            S = g[1],
            k = function () {
              var t = e.title,
                n = e.overlay;
              return !t && !n && 0 !== t;
            },
            N = function () {
              var t = e.builtinPlacements,
                n = e.arrowPointAtCenter,
                o = e.autoAdjustOverflow;
              return (
                t ||
                (0, Z.Z)({
                  arrowPointAtCenter: void 0 !== n && n,
                  autoAdjustOverflow: void 0 === o || o,
                })
              );
            },
            P = e.getPopupContainer,
            R = e.placement,
            j = e.mouseEnterDelay,
            D = e.mouseLeaveDelay,
            I = C(e, [
              "getPopupContainer",
              "placement",
              "mouseEnterDelay",
              "mouseLeaveDelay",
            ]),
            T = e.prefixCls,
            A = e.openClassName,
            z = e.getTooltipContainer,
            L = e.overlayClassName,
            M = e.color,
            V = e.overlayInnerStyle,
            H = e.children,
            _ = p("tooltip", T),
            B = p(),
            U = h;
          !("open" in e) && !("visible" in e) && k() && (U = !1);
          var F = (function (e, t) {
              var n = e.type;
              if (
                ((!0 === n.__ANT_BUTTON || "button" === e.type) &&
                  e.props.disabled) ||
                (!0 === n.__ANT_SWITCH &&
                  (e.props.disabled || e.props.loading)) ||
                (!0 === n.__ANT_RADIO && e.props.disabled)
              ) {
                var o = x(e.props.style, [
                    "position",
                    "left",
                    "right",
                    "top",
                    "bottom",
                    "float",
                    "display",
                    "zIndex",
                  ]),
                  r = o.picked,
                  i = o.omitted,
                  c = (0, a.Z)((0, a.Z)({ display: "inline-block" }, r), {
                    cursor: "not-allowed",
                    width: e.props.block ? "100%" : void 0,
                  }),
                  s = (0, a.Z)((0, a.Z)({}, i), { pointerEvents: "none" }),
                  u = (0, E.Tm)(e, { style: s, className: null });
                return f.createElement(
                  "span",
                  {
                    style: c,
                    className: l()(
                      e.props.className,
                      "".concat(t, "-disabled-compatible-wrapper"),
                    ),
                  },
                  u,
                );
              }
              return e;
            })(
              (0, E.l$)(H) && !(0, E.M2)(H)
                ? H
                : f.createElement("span", null, H),
              _,
            ),
            K = F.props,
            W =
              K.className && "string" != typeof K.className
                ? K.className
                : l()(
                    K.className,
                    (0, o.Z)({}, A || "".concat(_, "-open"), !0),
                  ),
            X = l()(
              L,
              ((c = {}),
              (0, o.Z)(c, "".concat(_, "-rtl"), "rtl" === d),
              (0, o.Z)(c, "".concat(_, "-").concat(M), M && O.test(M)),
              c),
            ),
            Y = V,
            q = {};
          return (
            M &&
              !O.test(M) &&
              ((Y = (0, a.Z)((0, a.Z)({}, V), { background: M })),
              (q = { "--antd-arrow-background-color": M })),
            f.createElement(
              m,
              (0, a.Z)({}, I, {
                placement: void 0 === R ? "top" : R,
                mouseEnterDelay: void 0 === j ? 0.1 : j,
                mouseLeaveDelay: void 0 === D ? 0.1 : D,
                prefixCls: _,
                overlayClassName: X,
                getTooltipContainer: P || z || u,
                ref: t,
                builtinPlacements: N(),
                overlay:
                  ((n = e.title), (i = e.overlay), 0 === n ? n : i || n || ""),
                visible: U,
                onVisibleChange: function (t) {
                  var n, o;
                  S(!k() && t),
                    k() ||
                      (null === (n = e.onOpenChange) ||
                        void 0 === n ||
                        n.call(e, t),
                      null === (o = e.onVisibleChange) ||
                        void 0 === o ||
                        o.call(e, t));
                },
                onPopupAlign: function (e, t) {
                  var n = N(),
                    o = Object.keys(n).find(function (e) {
                      var o, r;
                      return (
                        n[e].points[0] ===
                          (null === (o = t.points) || void 0 === o
                            ? void 0
                            : o[0]) &&
                        n[e].points[1] ===
                          (null === (r = t.points) || void 0 === r
                            ? void 0
                            : r[1])
                      );
                    });
                  if (o) {
                    var r = e.getBoundingClientRect(),
                      a = { top: "50%", left: "50%" };
                    /top|Bottom/.test(o)
                      ? (a.top = "".concat(r.height - t.offset[1], "px"))
                      : /Top|bottom/.test(o) &&
                        (a.top = "".concat(-t.offset[1], "px")),
                      /left|Right/.test(o)
                        ? (a.left = "".concat(r.width - t.offset[0], "px"))
                        : /right|Left/.test(o) &&
                          (a.left = "".concat(-t.offset[0], "px")),
                      (e.style.transformOrigin = ""
                        .concat(a.left, " ")
                        .concat(a.top));
                  }
                },
                overlayInnerStyle: Y,
                arrowContent: f.createElement("span", {
                  className: "".concat(_, "-arrow-content"),
                  style: q,
                }),
                motion: {
                  motionName: (0, w.mL)(B, "zoom-big-fast", e.transitionName),
                  motionDeadline: 1e3,
                },
              }),
              U ? (0, E.Tm)(F, { className: W }) : F,
            )
          );
        });
    },
    56075: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ep;
        },
      });
      var o = n(87462),
        r = n(67294),
        a = n(4942),
        i = n(71002),
        l = n(97685),
        c = n(63606),
        s = n(1413),
        u = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",
                },
              },
            ],
          },
          name: "copy",
          theme: "outlined",
        },
        f = n(42135),
        p = function (e, t) {
          return r.createElement(
            f.Z,
            (0, s.Z)((0, s.Z)({}, e), {}, { ref: t, icon: u }),
          );
        };
      p.displayName = "CopyOutlined";
      var d = r.forwardRef(p),
        v = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z",
                },
              },
            ],
          },
          name: "edit",
          theme: "outlined",
        },
        m = function (e, t) {
          return r.createElement(
            f.Z,
            (0, s.Z)((0, s.Z)({}, e), {}, { ref: t, icon: v }),
          );
        };
      m.displayName = "EditOutlined";
      var y = r.forwardRef(m),
        b = n(94184),
        g = n.n(b),
        h = n(20640),
        w = n.n(h),
        Z = n(48555),
        E = n(50344),
        C = n(8410),
        x = n(21770),
        O = n(98423),
        S = n(42550),
        k = n(53124),
        N = n(23715),
        P = n(15105),
        R = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        j = {
          border: 0,
          background: "transparent",
          padding: 0,
          lineHeight: "inherit",
          display: "inline-block",
        },
        D = r.forwardRef(function (e, t) {
          var n = e.style,
            a = e.noStyle,
            i = e.disabled,
            l = R(e, ["style", "noStyle", "disabled"]),
            c = {};
          return (
            a || (c = (0, o.Z)({}, j)),
            i && (c.pointerEvents = "none"),
            (c = (0, o.Z)((0, o.Z)({}, c), n)),
            r.createElement(
              "div",
              (0, o.Z)({ role: "button", tabIndex: 0, ref: t }, l, {
                onKeyDown: function (e) {
                  e.keyCode === P.Z.ENTER && e.preventDefault();
                },
                onKeyUp: function (t) {
                  var n = t.keyCode,
                    o = e.onClick;
                  n === P.Z.ENTER && o && o();
                },
                style: c,
              }),
            )
          );
        }),
        I = n(98924),
        T = function (e) {
          if ((0, I.Z)() && window.document.documentElement) {
            var t = Array.isArray(e) ? e : [e],
              n = window.document.documentElement;
            return t.some(function (e) {
              return e in n.style;
            });
          }
          return !1;
        },
        A = function (e, t) {
          if (!T(e)) return !1;
          var n = document.createElement("div"),
            o = n.style[e];
          return (n.style[e] = t), n.style[e] !== o;
        };
      function z(e, t) {
        return Array.isArray(e) || void 0 === t ? T(e) : A(e, t);
      }
      var L = n(77939),
        M = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z",
                },
              },
            ],
          },
          name: "enter",
          theme: "outlined",
        },
        V = function (e, t) {
          return r.createElement(
            f.Z,
            (0, s.Z)((0, s.Z)({}, e), {}, { ref: t, icon: M }),
          );
        };
      V.displayName = "EnterOutlined";
      var H = r.forwardRef(V),
        _ = n(56994),
        B = n(96159),
        U = function (e) {
          var t = e.prefixCls,
            n = e["aria-label"],
            o = e.className,
            i = e.style,
            c = e.direction,
            s = e.maxLength,
            u = e.autoSize,
            f = e.value,
            p = e.onSave,
            d = e.onCancel,
            v = e.onEnd,
            m = e.component,
            y = e.enterIcon,
            b = void 0 === y ? r.createElement(H, null) : y,
            h = r.useRef(null),
            w = r.useRef(!1),
            Z = r.useRef(),
            E = r.useState(f),
            C = (0, l.Z)(E, 2),
            x = C[0],
            O = C[1];
          r.useEffect(
            function () {
              O(f);
            },
            [f],
          ),
            r.useEffect(function () {
              if (h.current && h.current.resizableTextArea) {
                var e = h.current.resizableTextArea.textArea;
                e.focus();
                var t = e.value.length;
                e.setSelectionRange(t, t);
              }
            }, []);
          var S = function () {
              p(x.trim());
            },
            k = m ? "".concat(t, "-").concat(m) : "",
            N = g()(
              t,
              "".concat(t, "-edit-content"),
              (0, a.Z)({}, "".concat(t, "-rtl"), "rtl" === c),
              o,
              k,
            );
          return r.createElement(
            "div",
            { className: N, style: i },
            r.createElement(_.Z, {
              ref: h,
              maxLength: s,
              value: x,
              onChange: function (e) {
                O(e.target.value.replace(/[\n\r]/g, ""));
              },
              onKeyDown: function (e) {
                var t = e.keyCode;
                w.current || (Z.current = t);
              },
              onKeyUp: function (e) {
                var t = e.keyCode,
                  n = e.ctrlKey,
                  o = e.altKey,
                  r = e.metaKey,
                  a = e.shiftKey;
                Z.current !== t ||
                  w.current ||
                  n ||
                  o ||
                  r ||
                  a ||
                  (t === P.Z.ENTER
                    ? (S(), null == v || v())
                    : t === P.Z.ESC && d());
              },
              onCompositionStart: function () {
                w.current = !0;
              },
              onCompositionEnd: function () {
                w.current = !1;
              },
              onBlur: function () {
                S();
              },
              "aria-label": n,
              rows: 1,
              autoSize: void 0 === u || u,
            }),
            null !== b
              ? (0, B.Tm)(b, {
                  className: "".concat(t, "-edit-content-confirm"),
                })
              : null,
          );
        };
      function F(e, t) {
        return r.useMemo(
          function () {
            var n = !!e;
            return [
              n,
              (0, o.Z)(
                (0, o.Z)({}, t),
                n && "object" === (0, i.Z)(e) ? e : null,
              ),
            ];
          },
          [e],
        );
      }
      var K = function (e, t) {
          var n = r.useRef(!1);
          r.useEffect(function () {
            n.current ? e() : (n.current = !0);
          }, t);
        },
        W = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        X = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            i = e.component,
            l = e.className,
            c = e.setContentRef,
            s = e.children,
            u = e.direction,
            f = W(e, [
              "prefixCls",
              "component",
              "className",
              "setContentRef",
              "children",
              "direction",
            ]),
            p = r.useContext(k.E_),
            d = p.getPrefixCls,
            v = p.direction,
            m = t;
          c && (m = (0, S.sQ)(t, c));
          var y = d("typography", n),
            b = g()(
              y,
              (0, a.Z)({}, "".concat(y, "-rtl"), "rtl" === (null != u ? u : v)),
              l,
            );
          return r.createElement(
            void 0 === i ? "article" : i,
            (0, o.Z)({ className: b, ref: m }, f),
            s,
          );
        });
      function Y(e) {
        var t = (0, i.Z)(e);
        return "string" === t || "number" === t;
      }
      function q(e, t) {
        for (var n = 0, o = [], r = 0; r < e.length; r += 1) {
          if (n === t) return o;
          var a = e[r],
            i = n + (Y(a) ? String(a).length : 1);
          if (i > t) {
            var l = t - n;
            return o.push(String(a).slice(0, l)), o;
          }
          o.push(a), (n = i);
        }
        return e;
      }
      var Q = function (e) {
          var t = e.enabledMeasure,
            n = e.children,
            a = e.text,
            i = e.width,
            c = e.fontSize,
            s = e.rows,
            u = e.onEllipsis,
            f = r.useState([0, 0, 0]),
            p = (0, l.Z)(f, 2),
            d = (0, l.Z)(p[0], 3),
            v = d[0],
            m = d[1],
            y = d[2],
            b = p[1],
            g = r.useState(0),
            h = (0, l.Z)(g, 2),
            w = h[0],
            Z = h[1],
            x = r.useState(0),
            O = (0, l.Z)(x, 2),
            S = O[0],
            k = O[1],
            N = r.useRef(null),
            P = r.useRef(null),
            R = r.useMemo(
              function () {
                return (0, E.Z)(a);
              },
              [a],
            ),
            j = r.useMemo(
              function () {
                var e;
                return (
                  (e = 0),
                  R.forEach(function (t) {
                    Y(t) ? (e += String(t).length) : (e += 1);
                  }),
                  e
                );
              },
              [R],
            ),
            D = r.useMemo(
              function () {
                return t && 3 === w ? n(q(R, m), m < j) : n(R, !1);
              },
              [t, w, n, R, m, j],
            );
          (0, C.Z)(
            function () {
              t && i && c && j && (Z(1), b([0, Math.ceil(j / 2), j]));
            },
            [t, i, c, a, j, s],
          ),
            (0, C.Z)(
              function () {
                var e;
                1 === w &&
                  k(
                    (null === (e = N.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) || 0,
                  );
              },
              [w],
            ),
            (0, C.Z)(
              function () {
                var e, t;
                if (S) {
                  if (1 === w)
                    ((null === (e = P.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) || 0) <=
                    s * S
                      ? (Z(4), u(!1))
                      : Z(2);
                  else if (2 === w) {
                    if (v !== y) {
                      var n =
                          (null === (t = P.current) || void 0 === t
                            ? void 0
                            : t.offsetHeight) || 0,
                        o = v,
                        r = y;
                      v === y - 1 ? (r = v) : n <= s * S ? (o = m) : (r = m);
                      var a = Math.ceil((o + r) / 2);
                      b([o, a, r]);
                    } else Z(3), u(!0);
                  }
                }
              },
              [w, v, y, s, S],
            );
          var I = function (e, t, n) {
            return r.createElement(
              "span",
              {
                "aria-hidden": !0,
                ref: t,
                style: (0, o.Z)(
                  {
                    position: "fixed",
                    display: "block",
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: "hidden",
                    pointerEvents: "none",
                    fontSize: 2 * Math.floor(c / 2),
                  },
                  n,
                ),
              },
              e,
            );
          };
          return r.createElement(
            r.Fragment,
            null,
            D,
            t &&
              3 !== w &&
              4 !== w &&
              r.createElement(
                r.Fragment,
                null,
                I("lg", N, { wordBreak: "keep-all", whiteSpace: "nowrap" }),
                I(1 === w ? n(R, !1) : n(q(R, m), !0), P, {
                  width: i,
                  whiteSpace: "normal",
                  margin: 0,
                  padding: 0,
                }),
              ),
          );
        },
        $ = function (e) {
          var t = e.enabledEllipsis,
            n = e.isEllipsis,
            a = e.children,
            i = e.tooltipProps;
          return (null == i ? void 0 : i.title) && t
            ? r.createElement(L.Z, (0, o.Z)({ open: !!n && void 0 }, i), a)
            : a;
        },
        G = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        };
      function J(e, t, n) {
        return !0 === e || void 0 === e ? t : e || (n && t);
      }
      function ee(e) {
        return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e];
      }
      var et = r.forwardRef(function (e, t) {
          var n,
            s,
            u,
            f = e.prefixCls,
            p = e.className,
            v = e.style,
            m = e.type,
            b = e.disabled,
            h = e.children,
            P = e.ellipsis,
            R = e.editable,
            j = e.copyable,
            I = e.component,
            T = e.title,
            A = G(e, [
              "prefixCls",
              "className",
              "style",
              "type",
              "disabled",
              "children",
              "ellipsis",
              "editable",
              "copyable",
              "component",
              "title",
            ]),
            M = r.useContext(k.E_),
            V = M.getPrefixCls,
            H = M.direction,
            _ = (0, N.E)("Text")[0],
            B = r.useRef(null),
            W = r.useRef(null),
            Y = V("typography", f),
            q = (0, O.Z)(A, [
              "mark",
              "code",
              "delete",
              "underline",
              "strong",
              "keyboard",
              "italic",
            ]),
            et = F(R),
            en = (0, l.Z)(et, 2),
            eo = en[0],
            er = en[1],
            ea = (0, x.Z)(!1, { value: er.editing }),
            ei = (0, l.Z)(ea, 2),
            el = ei[0],
            ec = ei[1],
            es = er.triggerType,
            eu = void 0 === es ? ["icon"] : es,
            ef = function (e) {
              var t;
              e && (null === (t = er.onStart) || void 0 === t || t.call(er)),
                ec(e);
            };
          K(
            function () {
              var e;
              el || null === (e = W.current) || void 0 === e || e.focus();
            },
            [el],
          );
          var ep = function (e) {
              null == e || e.preventDefault(), ef(!0);
            },
            ed = F(j),
            ev = (0, l.Z)(ed, 2),
            em = ev[0],
            ey = ev[1],
            eb = r.useState(!1),
            eg = (0, l.Z)(eb, 2),
            eh = eg[0],
            ew = eg[1],
            eZ = r.useRef(),
            eE = {};
          ey.format && (eE.format = ey.format);
          var eC = function () {
              window.clearTimeout(eZ.current);
            },
            ex = function (e) {
              var t;
              null == e || e.preventDefault(),
                null == e || e.stopPropagation(),
                w()(ey.text || String(h) || "", eE),
                ew(!0),
                eC(),
                (eZ.current = window.setTimeout(function () {
                  ew(!1);
                }, 3e3)),
                null === (t = ey.onCopy) || void 0 === t || t.call(ey, e);
            };
          r.useEffect(function () {
            return eC;
          }, []);
          var eO = r.useState(!1),
            eS = (0, l.Z)(eO, 2),
            ek = eS[0],
            eN = eS[1],
            eP = r.useState(!1),
            eR = (0, l.Z)(eP, 2),
            ej = eR[0],
            eD = eR[1],
            eI = r.useState(!1),
            eT = (0, l.Z)(eI, 2),
            eA = eT[0],
            ez = eT[1],
            eL = r.useState(!1),
            eM = (0, l.Z)(eL, 2),
            eV = eM[0],
            eH = eM[1],
            e_ = r.useState(!1),
            eB = (0, l.Z)(e_, 2),
            eU = eB[0],
            eF = eB[1],
            eK = r.useState(!0),
            eW = (0, l.Z)(eK, 2),
            eX = eW[0],
            eY = eW[1],
            eq = F(P, { expandable: !1 }),
            eQ = (0, l.Z)(eq, 2),
            e$ = eQ[0],
            eG = eQ[1],
            eJ = e$ && !eA,
            e0 = eG.rows,
            e1 = void 0 === e0 ? 1 : e0,
            e4 = r.useMemo(
              function () {
                return (
                  !eJ ||
                  void 0 !== eG.suffix ||
                  eG.onEllipsis ||
                  eG.expandable ||
                  eo ||
                  em
                );
              },
              [eJ, eG, eo, em],
            );
          (0, C.Z)(
            function () {
              e$ && !e4 && (eN(z("webkitLineClamp")), eD(z("textOverflow")));
            },
            [e4, e$],
          );
          var e2 = r.useMemo(
              function () {
                return !e4 && (1 === e1 ? ej : ek);
              },
              [e4, ej, ek],
            ),
            e3 = eJ && (e2 ? eU : eV),
            e6 = eJ && 1 === e1 && e2,
            e9 = eJ && e1 > 1 && e2,
            e8 = function (e) {
              var t;
              ez(!0),
                null === (t = eG.onExpand) || void 0 === t || t.call(eG, e);
            },
            e7 = r.useState(0),
            e5 = (0, l.Z)(e7, 2),
            te = e5[0],
            tt = e5[1],
            tn = r.useState(0),
            to = (0, l.Z)(tn, 2),
            tr = to[0],
            ta = to[1],
            ti = function (e) {
              var t;
              eH(e),
                eV !== e &&
                  (null === (t = eG.onEllipsis) ||
                    void 0 === t ||
                    t.call(eG, e));
            };
          r.useEffect(
            function () {
              var e = B.current;
              if (e$ && e2 && e) {
                var t = e9
                  ? e.offsetHeight < e.scrollHeight
                  : e.offsetWidth < e.scrollWidth;
                eU !== t && eF(t);
              }
            },
            [e$, e2, h, e9, eX],
          ),
            r.useEffect(
              function () {
                var e = B.current;
                if (
                  "undefined" != typeof IntersectionObserver &&
                  e &&
                  e2 &&
                  eJ
                ) {
                  var t = new IntersectionObserver(function () {
                    eY(!!e.offsetParent);
                  });
                  return (
                    t.observe(e),
                    function () {
                      t.disconnect();
                    }
                  );
                }
              },
              [e2, eJ],
            );
          var tl = {};
          tl =
            !0 === eG.tooltip
              ? { title: null !== (n = er.text) && void 0 !== n ? n : h }
              : r.isValidElement(eG.tooltip)
                ? { title: eG.tooltip }
                : "object" === (0, i.Z)(eG.tooltip)
                  ? (0, o.Z)(
                      { title: null !== (s = er.text) && void 0 !== s ? s : h },
                      eG.tooltip,
                    )
                  : { title: eG.tooltip };
          var tc = r.useMemo(
            function () {
              var e = function (e) {
                return ["string", "number"].includes((0, i.Z)(e));
              };
              return !e$ || e2
                ? void 0
                : e(er.text)
                  ? er.text
                  : e(h)
                    ? h
                    : e(T)
                      ? T
                      : e(tl.title)
                        ? tl.title
                        : void 0;
            },
            [e$, e2, T, tl.title, e3],
          );
          if (el)
            return r.createElement(U, {
              value:
                null !== (u = er.text) && void 0 !== u
                  ? u
                  : "string" == typeof h
                    ? h
                    : "",
              onSave: function (e) {
                var t;
                null === (t = er.onChange) || void 0 === t || t.call(er, e),
                  ef(!1);
              },
              onCancel: function () {
                var e;
                null === (e = er.onCancel) || void 0 === e || e.call(er),
                  ef(!1);
              },
              onEnd: er.onEnd,
              prefixCls: Y,
              className: p,
              style: v,
              direction: H,
              component: I,
              maxLength: er.maxLength,
              autoSize: er.autoSize,
              enterIcon: er.enterIcon,
            });
          var ts = function () {
              var e,
                t = eG.expandable,
                n = eG.symbol;
              return t
                ? ((e = n || _.expand),
                  r.createElement(
                    "a",
                    {
                      key: "expand",
                      className: "".concat(Y, "-expand"),
                      onClick: e8,
                      "aria-label": _.expand,
                    },
                    e,
                  ))
                : null;
            },
            tu = function () {
              if (eo) {
                var e = er.icon,
                  t = er.tooltip,
                  n = (0, E.Z)(t)[0] || _.edit;
                return eu.includes("icon")
                  ? r.createElement(
                      L.Z,
                      { key: "edit", title: !1 === t ? "" : n },
                      r.createElement(
                        D,
                        {
                          ref: W,
                          className: "".concat(Y, "-edit"),
                          onClick: ep,
                          "aria-label": "string" == typeof n ? n : "",
                        },
                        e || r.createElement(y, { role: "button" }),
                      ),
                    )
                  : null;
              }
            },
            tf = function () {
              if (em) {
                var e = ey.tooltips,
                  t = ey.icon,
                  n = ee(e),
                  o = ee(t),
                  a = eh ? J(n[1], _.copied) : J(n[0], _.copy),
                  i = eh ? _.copied : _.copy;
                return r.createElement(
                  L.Z,
                  { key: "copy", title: a },
                  r.createElement(
                    D,
                    {
                      className: g()(
                        "".concat(Y, "-copy"),
                        eh && "".concat(Y, "-copy-success"),
                      ),
                      onClick: ex,
                      "aria-label": "string" == typeof a ? a : i,
                    },
                    eh
                      ? J(o[1], r.createElement(c.Z, null), !0)
                      : J(o[0], r.createElement(d, null), !0),
                  ),
                );
              }
            };
          return r.createElement(
            Z.Z,
            {
              onResize: function (e, t) {
                var n;
                tt(e.offsetWidth),
                  ta(
                    parseInt(
                      null === (n = window.getComputedStyle) || void 0 === n
                        ? void 0
                        : n.call(window, t).fontSize,
                      10,
                    ) || 0,
                  );
              },
              disabled: !eJ || e2,
            },
            function (n) {
              var i;
              return r.createElement(
                $,
                { tooltipProps: tl, enabledEllipsis: eJ, isEllipsis: e3 },
                r.createElement(
                  X,
                  (0, o.Z)(
                    {
                      className: g()(
                        ((i = {}),
                        (0, a.Z)(i, "".concat(Y, "-").concat(m), m),
                        (0, a.Z)(i, "".concat(Y, "-disabled"), b),
                        (0, a.Z)(i, "".concat(Y, "-ellipsis"), e$),
                        (0, a.Z)(
                          i,
                          "".concat(Y, "-single-line"),
                          eJ && 1 === e1,
                        ),
                        (0, a.Z)(i, "".concat(Y, "-ellipsis-single-line"), e6),
                        (0, a.Z)(
                          i,
                          "".concat(Y, "-ellipsis-multiple-line"),
                          e9,
                        ),
                        i),
                        p,
                      ),
                      prefixCls: f,
                      style: (0, o.Z)((0, o.Z)({}, v), {
                        WebkitLineClamp: e9 ? e1 : void 0,
                      }),
                      component: I,
                      ref: (0, S.sQ)(n, B, t),
                      direction: H,
                      onClick: eu.includes("text") ? ep : void 0,
                      "aria-label": null == tc ? void 0 : tc.toString(),
                      title: T,
                    },
                    q,
                  ),
                  r.createElement(
                    Q,
                    {
                      enabledMeasure: eJ && !e2,
                      text: h,
                      rows: e1,
                      width: te,
                      fontSize: tr,
                      onEllipsis: ti,
                    },
                    function (t, n) {
                      var o = t;
                      return (
                        t.length &&
                          n &&
                          tc &&
                          (o = r.createElement(
                            "span",
                            { key: "show-content", "aria-hidden": !0 },
                            o,
                          )),
                        (function (e, t) {
                          var n = e.mark,
                            o = e.code,
                            a = e.underline,
                            i = e.delete,
                            l = e.strong,
                            c = e.keyboard,
                            s = e.italic,
                            u = t;
                          function f(e, t) {
                            e && (u = r.createElement(t, {}, u));
                          }
                          return (
                            f(l, "strong"),
                            f(a, "u"),
                            f(i, "del"),
                            f(o, "code"),
                            f(n, "mark"),
                            f(c, "kbd"),
                            f(s, "i"),
                            u
                          );
                        })(
                          e,
                          r.createElement(r.Fragment, null, o, [
                            n &&
                              r.createElement(
                                "span",
                                { "aria-hidden": !0, key: "ellipsis" },
                                "...",
                              ),
                            eG.suffix,
                            [n && ts(), tu(), tf()],
                          ]),
                        )
                      );
                    },
                  ),
                ),
              );
            },
          );
        }),
        en = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        eo = r.forwardRef(function (e, t) {
          var n = e.ellipsis,
            a = e.rel,
            i = en(e, ["ellipsis", "rel"]),
            l = (0, o.Z)((0, o.Z)({}, i), {
              rel:
                void 0 === a && "_blank" === i.target
                  ? "noopener noreferrer"
                  : a,
            });
          return (
            delete l.navigate,
            r.createElement(
              et,
              (0, o.Z)({}, l, { ref: t, ellipsis: !!n, component: "a" }),
            )
          );
        }),
        er = r.forwardRef(function (e, t) {
          return r.createElement(
            et,
            (0, o.Z)({ ref: t }, e, { component: "div" }),
          );
        }),
        ea = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        ei = r.forwardRef(function (e, t) {
          var n = e.ellipsis,
            a = ea(e, ["ellipsis"]),
            l = r.useMemo(
              function () {
                return n && "object" === (0, i.Z)(n)
                  ? (0, O.Z)(n, ["expandable", "rows"])
                  : n;
              },
              [n],
            );
          return r.createElement(
            et,
            (0, o.Z)({ ref: t }, a, { ellipsis: l, component: "span" }),
          );
        }),
        el = n(93355),
        ec = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        es = (0, el.a)(1, 2, 3, 4, 5),
        eu = r.forwardRef(function (e, t) {
          var n,
            a = e.level,
            i = void 0 === a ? 1 : a,
            l = ec(e, ["level"]);
          return (
            (n = es.includes(i) ? "h".concat(i) : "h1"),
            r.createElement(et, (0, o.Z)({ ref: t }, l, { component: n }))
          );
        }),
        ef = X;
      (ef.Text = ei), (ef.Link = eo), (ef.Title = eu), (ef.Paragraph = er);
      var ep = ef;
    },
    20640: function (e, t, n) {
      "use strict";
      var o = n(11742),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          i,
          l,
          c,
          s,
          u,
          f,
          p = !1;
        t || (t = {}), (i = t.debug || !1);
        try {
          if (
            ((c = o()),
            (s = document.createRange()),
            (u = document.getSelection()),
            ((f = document.createElement("span")).textContent = e),
            (f.ariaHidden = "true"),
            (f.style.all = "unset"),
            (f.style.position = "fixed"),
            (f.style.top = 0),
            (f.style.clip = "rect(0, 0, 0, 0)"),
            (f.style.whiteSpace = "pre"),
            (f.style.webkitUserSelect = "text"),
            (f.style.MozUserSelect = "text"),
            (f.style.msUserSelect = "text"),
            (f.style.userSelect = "text"),
            f.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  i && console.warn("unable to use e.clipboardData"),
                    i && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var o = r[t.format] || r.default;
                  window.clipboardData.setData(o, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(f),
            s.selectNodeContents(f),
            u.addRange(s),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          p = !0;
        } catch (o) {
          i && console.error("unable to copy using execCommand: ", o),
            i && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (p = !0);
          } catch (o) {
            i && console.error("unable to copy using clipboardData: ", o),
              i && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (a =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (l = n.replace(/#{\s*key\s*}/g, a)),
              window.prompt(l, e);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(s)
              : u.removeAllRanges()),
            f && document.body.removeChild(f),
            c();
        }
        return p;
      };
    },
    43159: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return a;
        },
      });
      var o = { adjustX: 1, adjustY: 1 },
        r = [0, 0],
        a = {
          left: {
            points: ["cr", "cl"],
            overflow: o,
            offset: [-4, 0],
            targetOffset: r,
          },
          right: {
            points: ["cl", "cr"],
            overflow: o,
            offset: [4, 0],
            targetOffset: r,
          },
          top: {
            points: ["bc", "tc"],
            overflow: o,
            offset: [0, -4],
            targetOffset: r,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: o,
            offset: [0, 4],
            targetOffset: r,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: o,
            offset: [0, -4],
            targetOffset: r,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: o,
            offset: [-4, 0],
            targetOffset: r,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: o,
            offset: [0, -4],
            targetOffset: r,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: o,
            offset: [4, 0],
            targetOffset: r,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: o,
            offset: [0, 4],
            targetOffset: r,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: o,
            offset: [4, 0],
            targetOffset: r,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: o,
            offset: [0, 4],
            targetOffset: r,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: o,
            offset: [-4, 0],
            targetOffset: r,
          },
        };
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], o = 0;
          o < e.rangeCount;
          o++
        )
          n.push(e.getRangeAt(o));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
//# sourceMappingURL=6942.9e37d9346acdeb8b.js.map
