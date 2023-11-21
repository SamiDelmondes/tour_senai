"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3088, 7636, 6490],
  {
    33603: function (e, t, o) {
      o.d(t, {
        mL: function () {
          return c;
        },
        q0: function () {
          return l;
        },
      });
      var n = o(93355),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        i = function (e) {
          return { height: e.scrollHeight, opacity: 1 };
        },
        a = function (e, t) {
          return (
            (null == t ? void 0 : t.deadline) === !0 ||
            "height" === t.propertyName
          );
        };
      (0, n.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var l = function (e) {
          return void 0 !== e && ("topLeft" === e || "topRight" === e)
            ? "slide-down"
            : "slide-up";
        },
        c = function (e, t, o) {
          return void 0 !== o ? o : "".concat(e, "-").concat(t);
        };
      t.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: r,
        onEnterStart: r,
        onAppearActive: i,
        onEnterActive: i,
        onLeaveStart: function (e) {
          return { height: e ? e.offsetHeight : 0 };
        },
        onLeaveActive: r,
        onAppearEnd: a,
        onEnterEnd: a,
        onLeaveEnd: a,
        motionDeadline: 500,
      };
    },
    80636: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = o(87462),
        r = o(43159),
        i = { adjustX: 1, adjustY: 1 },
        a = { adjustX: 0, adjustY: 0 },
        l = [0, 0];
      function c(e) {
        return "boolean" == typeof e
          ? e
            ? i
            : a
          : (0, n.Z)((0, n.Z)({}, a), e);
      }
      function s(e) {
        var t = e.arrowWidth,
          o = void 0 === t ? 4 : t,
          i = e.horizontalArrowShift,
          a = void 0 === i ? 16 : i,
          s = e.verticalArrowShift,
          f = void 0 === s ? 8 : s,
          u = e.autoAdjustOverflow,
          p = e.arrowPointAtCenter,
          m = {
            left: { points: ["cr", "cl"], offset: [-4, 0] },
            right: { points: ["cl", "cr"], offset: [4, 0] },
            top: { points: ["bc", "tc"], offset: [0, -4] },
            bottom: { points: ["tc", "bc"], offset: [0, 4] },
            topLeft: { points: ["bl", "tc"], offset: [-(a + o), -4] },
            leftTop: { points: ["tr", "cl"], offset: [-4, -(f + o)] },
            topRight: { points: ["br", "tc"], offset: [a + o, -4] },
            rightTop: { points: ["tl", "cr"], offset: [4, -(f + o)] },
            bottomRight: { points: ["tr", "bc"], offset: [a + o, 4] },
            rightBottom: { points: ["bl", "cr"], offset: [4, f + o] },
            bottomLeft: { points: ["tl", "bc"], offset: [-(a + o), 4] },
            leftBottom: { points: ["br", "cl"], offset: [-4, f + o] },
          };
        return (
          Object.keys(m).forEach(function (e) {
            (m[e] = p
              ? (0, n.Z)((0, n.Z)({}, m[e]), {
                  overflow: c(u),
                  targetOffset: l,
                })
              : (0, n.Z)((0, n.Z)({}, r.C[e]), { overflow: c(u) })),
              (m[e].ignoreShake = !0);
          }),
          m
        );
      }
    },
    10808: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = o(87462),
        r = o(67294),
        i = o(53124),
        a = o(77939),
        l = function (e) {
          return e ? ("function" == typeof e ? e() : e) : null;
        },
        c = o(33603),
        s = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(e);
              r < n.length;
              r++
            )
              0 > t.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          return o;
        },
        f = function (e) {
          var t = e.title,
            o = e.content,
            n = e.prefixCls;
          return t || o
            ? r.createElement(
                r.Fragment,
                null,
                t &&
                  r.createElement(
                    "div",
                    { className: "".concat(n, "-title") },
                    l(t),
                  ),
                r.createElement(
                  "div",
                  { className: "".concat(n, "-inner-content") },
                  l(o),
                ),
              )
            : null;
        },
        u = r.forwardRef(function (e, t) {
          var o = e.prefixCls,
            l = e.title,
            u = e.content,
            p = e._overlay,
            m = e.placement,
            v = e.trigger,
            d = e.mouseEnterDelay,
            y = e.mouseLeaveDelay,
            g = e.overlayStyle,
            b = s(e, [
              "prefixCls",
              "title",
              "content",
              "_overlay",
              "placement",
              "trigger",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayStyle",
            ]),
            h = r.useContext(i.E_).getPrefixCls,
            C = h("popover", o),
            w = h();
          return r.createElement(
            a.Z,
            (0, n.Z)(
              {
                placement: void 0 === m ? "top" : m,
                trigger: void 0 === v ? "hover" : v,
                mouseEnterDelay: void 0 === d ? 0.1 : d,
                mouseLeaveDelay: void 0 === y ? 0.1 : y,
                overlayStyle: void 0 === g ? {} : g,
              },
              b,
              {
                prefixCls: C,
                ref: t,
                overlay:
                  p ||
                  r.createElement(f, { prefixCls: C, title: l, content: u }),
                transitionName: (0, c.mL)(w, "zoom-big", b.transitionName),
              },
            ),
          );
        });
    },
    4173: function (e, t, o) {
      o.d(t, {
        BR: function () {
          return m;
        },
        ri: function () {
          return p;
        },
      });
      var n = o(87462),
        r = o(4942),
        i = o(94184),
        a = o.n(i),
        l = o(50344),
        c = o(67294),
        s = o(53124),
        f = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(e);
              r < n.length;
              r++
            )
              0 > t.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          return o;
        },
        u = c.createContext(null),
        p = function (e, t) {
          var o = c.useContext(u),
            n = c.useMemo(
              function () {
                if (!o) return "";
                var n,
                  i = o.compactDirection,
                  l = o.isFirstItem,
                  c = o.isLastItem,
                  s = "vertical" === i ? "-vertical-" : "-";
                return a()(
                  ((n = {}),
                  (0, r.Z)(n, "".concat(e, "-compact").concat(s, "item"), !0),
                  (0, r.Z)(
                    n,
                    "".concat(e, "-compact").concat(s, "first-item"),
                    l,
                  ),
                  (0, r.Z)(
                    n,
                    "".concat(e, "-compact").concat(s, "last-item"),
                    c,
                  ),
                  (0, r.Z)(
                    n,
                    "".concat(e, "-compact").concat(s, "item-rtl"),
                    "rtl" === t,
                  ),
                  n),
                );
              },
              [e, t, o],
            );
          return {
            compactSize: null == o ? void 0 : o.compactSize,
            compactDirection: null == o ? void 0 : o.compactDirection,
            compactItemClassnames: n,
          };
        },
        m = function (e) {
          var t = e.children;
          return c.createElement(u.Provider, { value: null }, t);
        },
        v = function (e) {
          var t = e.children,
            o = f(e, ["children"]);
          return c.createElement(u.Provider, { value: o }, t);
        };
      t.ZP = function (e) {
        var t,
          o = c.useContext(s.E_),
          i = o.getPrefixCls,
          p = o.direction,
          m = e.size,
          d = void 0 === m ? "middle" : m,
          y = e.direction,
          g = e.block,
          b = e.prefixCls,
          h = e.className,
          C = e.children,
          w = f(e, [
            "size",
            "direction",
            "block",
            "prefixCls",
            "className",
            "children",
          ]),
          x = i("space-compact", b),
          O = a()(
            x,
            ((t = {}),
            (0, r.Z)(t, "".concat(x, "-rtl"), "rtl" === p),
            (0, r.Z)(t, "".concat(x, "-block"), g),
            (0, r.Z)(t, "".concat(x, "-vertical"), "vertical" === y),
            t),
            h,
          ),
          E = c.useContext(u),
          N = (0, l.Z)(C),
          Z = c.useMemo(
            function () {
              return N.map(function (e, t) {
                var o = (e && e.key) || "".concat(x, "-item-").concat(t);
                return c.createElement(
                  v,
                  {
                    key: o,
                    compactSize: d,
                    compactDirection: y,
                    isFirstItem:
                      0 === t && (!E || (null == E ? void 0 : E.isFirstItem)),
                    isLastItem:
                      t === N.length - 1 &&
                      (!E || (null == E ? void 0 : E.isLastItem)),
                  },
                  e,
                );
              });
            },
            [d, N, E],
          );
        return 0 === N.length
          ? null
          : c.createElement("div", (0, n.Z)({ className: O }, w), Z);
      };
    },
    77939: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = o(4942),
        r = o(97685),
        i = o(87462),
        a = o(94184),
        l = o.n(a),
        c = o(71002),
        s = o(1413),
        f = o(45987),
        u = o(67294),
        p = o(11276),
        m = o(43159);
      function v(e) {
        var t = e.showArrow,
          o = e.arrowContent,
          n = e.children,
          r = e.prefixCls,
          i = e.id,
          a = e.overlayInnerStyle,
          c = e.className,
          s = e.style;
        return u.createElement(
          "div",
          { className: l()("".concat(r, "-content"), c), style: s },
          !1 !== t &&
            u.createElement(
              "div",
              { className: "".concat(r, "-arrow"), key: "arrow" },
              o,
            ),
          u.createElement(
            "div",
            {
              className: "".concat(r, "-inner"),
              id: i,
              role: "tooltip",
              style: a,
            },
            "function" == typeof n ? n() : n,
          ),
        );
      }
      var d = (0, u.forwardRef)(function (e, t) {
          var o = e.overlayClassName,
            n = e.trigger,
            r = e.mouseEnterDelay,
            a = e.mouseLeaveDelay,
            l = e.overlayStyle,
            d = e.prefixCls,
            y = void 0 === d ? "rc-tooltip" : d,
            g = e.children,
            b = e.onVisibleChange,
            h = e.afterVisibleChange,
            C = e.transitionName,
            w = e.animation,
            x = e.motion,
            O = e.placement,
            E = e.align,
            N = e.destroyTooltipOnHide,
            Z = void 0 !== N && N,
            j = e.defaultVisible,
            k = e.getTooltipContainer,
            P = e.overlayInnerStyle,
            S = e.arrowContent,
            L = e.overlay,
            D = e.id,
            A = e.showArrow,
            I = (0, f.Z)(e, [
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
            R = (0, u.useRef)(null);
          (0, u.useImperativeHandle)(t, function () {
            return R.current;
          });
          var T = (0, s.Z)({}, I);
          "visible" in e && (T.popupVisible = e.visible);
          var _ = !1,
            V = !1;
          if ("boolean" == typeof Z) _ = Z;
          else if (Z && "object" === (0, c.Z)(Z)) {
            var z = Z.keepParent;
            (_ = !0 === z), (V = !1 === z);
          }
          return u.createElement(
            p.Z,
            (0, i.Z)(
              {
                popupClassName: o,
                prefixCls: y,
                popup: function () {
                  return u.createElement(
                    v,
                    {
                      showArrow: A,
                      arrowContent: S,
                      key: "content",
                      prefixCls: y,
                      id: D,
                      overlayInnerStyle: P,
                    },
                    L,
                  );
                },
                action: void 0 === n ? ["hover"] : n,
                builtinPlacements: m.C,
                popupPlacement: void 0 === O ? "right" : O,
                ref: R,
                popupAlign: void 0 === E ? {} : E,
                getPopupContainer: k,
                onPopupVisibleChange: b,
                afterPopupVisibleChange: h,
                popupTransitionName: C,
                popupAnimation: w,
                popupMotion: x,
                defaultPopupVisible: j,
                destroyPopupOnHide: _,
                autoDestroy: V,
                mouseLeaveDelay: void 0 === a ? 0.1 : a,
                popupStyle: l,
                mouseEnterDelay: void 0 === r ? 0 : r,
              },
              T,
            ),
            g,
          );
        }),
        y = o(21770),
        g = o(53124),
        b = o(93355);
      (0, b.b)("success", "processing", "error", "default", "warning");
      var h = (0, b.b)(
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
        C = o(33603),
        w = o(80636),
        x = o(96159),
        O = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(e);
              r < n.length;
              r++
            )
              0 > t.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          return o;
        },
        E = function (e, t) {
          var o = {},
            n = (0, i.Z)({}, e);
          return (
            t.forEach(function (t) {
              e && t in e && ((o[t] = e[t]), delete n[t]);
            }),
            { picked: o, omitted: n }
          );
        },
        N = RegExp("^(".concat(h.join("|"), ")(-inverse)?$")),
        Z = u.forwardRef(function (e, t) {
          var o,
            a,
            c,
            s = u.useContext(g.E_),
            f = s.getPopupContainer,
            p = s.getPrefixCls,
            m = s.direction,
            v = (0, y.Z)(!1, {
              value: void 0 !== e.open ? e.open : e.visible,
              defaultValue:
                void 0 !== e.defaultOpen ? e.defaultOpen : e.defaultVisible,
            }),
            b = (0, r.Z)(v, 2),
            h = b[0],
            Z = b[1],
            j = function () {
              var t = e.title,
                o = e.overlay;
              return !t && !o && 0 !== t;
            },
            k = function () {
              var t = e.builtinPlacements,
                o = e.arrowPointAtCenter,
                n = e.autoAdjustOverflow;
              return (
                t ||
                (0, w.Z)({
                  arrowPointAtCenter: void 0 !== o && o,
                  autoAdjustOverflow: void 0 === n || n,
                })
              );
            },
            P = e.getPopupContainer,
            S = e.placement,
            L = e.mouseEnterDelay,
            D = e.mouseLeaveDelay,
            A = O(e, [
              "getPopupContainer",
              "placement",
              "mouseEnterDelay",
              "mouseLeaveDelay",
            ]),
            I = e.prefixCls,
            R = e.openClassName,
            T = e.getTooltipContainer,
            _ = e.overlayClassName,
            V = e.color,
            z = e.overlayInnerStyle,
            B = e.children,
            H = p("tooltip", I),
            F = p(),
            M = h;
          !("open" in e) && !("visible" in e) && j() && (M = !1);
          var W = (function (e, t) {
              var o = e.type;
              if (
                ((!0 === o.__ANT_BUTTON || "button" === e.type) &&
                  e.props.disabled) ||
                (!0 === o.__ANT_SWITCH &&
                  (e.props.disabled || e.props.loading)) ||
                (!0 === o.__ANT_RADIO && e.props.disabled)
              ) {
                var n = E(e.props.style, [
                    "position",
                    "left",
                    "right",
                    "top",
                    "bottom",
                    "float",
                    "display",
                    "zIndex",
                  ]),
                  r = n.picked,
                  a = n.omitted,
                  c = (0, i.Z)((0, i.Z)({ display: "inline-block" }, r), {
                    cursor: "not-allowed",
                    width: e.props.block ? "100%" : void 0,
                  }),
                  s = (0, i.Z)((0, i.Z)({}, a), { pointerEvents: "none" }),
                  f = (0, x.Tm)(e, { style: s, className: null });
                return u.createElement(
                  "span",
                  {
                    style: c,
                    className: l()(
                      e.props.className,
                      "".concat(t, "-disabled-compatible-wrapper"),
                    ),
                  },
                  f,
                );
              }
              return e;
            })(
              (0, x.l$)(B) && !(0, x.M2)(B)
                ? B
                : u.createElement("span", null, B),
              H,
            ),
            X = W.props,
            Y =
              X.className && "string" != typeof X.className
                ? X.className
                : l()(
                    X.className,
                    (0, n.Z)({}, R || "".concat(H, "-open"), !0),
                  ),
            $ = l()(
              _,
              ((c = {}),
              (0, n.Z)(c, "".concat(H, "-rtl"), "rtl" === m),
              (0, n.Z)(c, "".concat(H, "-").concat(V), V && N.test(V)),
              c),
            ),
            q = z,
            K = {};
          return (
            V &&
              !N.test(V) &&
              ((q = (0, i.Z)((0, i.Z)({}, z), { background: V })),
              (K = { "--antd-arrow-background-color": V })),
            u.createElement(
              d,
              (0, i.Z)({}, A, {
                placement: void 0 === S ? "top" : S,
                mouseEnterDelay: void 0 === L ? 0.1 : L,
                mouseLeaveDelay: void 0 === D ? 0.1 : D,
                prefixCls: H,
                overlayClassName: $,
                getTooltipContainer: P || T || f,
                ref: t,
                builtinPlacements: k(),
                overlay:
                  ((o = e.title), (a = e.overlay), 0 === o ? o : a || o || ""),
                visible: M,
                onVisibleChange: function (t) {
                  var o, n;
                  Z(!j() && t),
                    j() ||
                      (null === (o = e.onOpenChange) ||
                        void 0 === o ||
                        o.call(e, t),
                      null === (n = e.onVisibleChange) ||
                        void 0 === n ||
                        n.call(e, t));
                },
                onPopupAlign: function (e, t) {
                  var o = k(),
                    n = Object.keys(o).find(function (e) {
                      var n, r;
                      return (
                        o[e].points[0] ===
                          (null === (n = t.points) || void 0 === n
                            ? void 0
                            : n[0]) &&
                        o[e].points[1] ===
                          (null === (r = t.points) || void 0 === r
                            ? void 0
                            : r[1])
                      );
                    });
                  if (n) {
                    var r = e.getBoundingClientRect(),
                      i = { top: "50%", left: "50%" };
                    /top|Bottom/.test(n)
                      ? (i.top = "".concat(r.height - t.offset[1], "px"))
                      : /Top|bottom/.test(n) &&
                        (i.top = "".concat(-t.offset[1], "px")),
                      /left|Right/.test(n)
                        ? (i.left = "".concat(r.width - t.offset[0], "px"))
                        : /right|Left/.test(n) &&
                          (i.left = "".concat(-t.offset[0], "px")),
                      (e.style.transformOrigin = ""
                        .concat(i.left, " ")
                        .concat(i.top));
                  }
                },
                overlayInnerStyle: q,
                arrowContent: u.createElement("span", {
                  className: "".concat(H, "-arrow-content"),
                  style: K,
                }),
                motion: {
                  motionName: (0, C.mL)(F, "zoom-big-fast", e.transitionName),
                  motionDeadline: 1e3,
                },
              }),
              M ? (0, x.Tm)(W, { className: Y }) : W,
            )
          );
        });
    },
    36490: function (e, t, o) {
      o.r(t);
      var n = o(828),
        r = o(85893),
        i = o(67294),
        a = o(71577),
        l = o(10808),
        c = o(2138),
        s = o.n(c),
        f = o(95898),
        u = (0, i.memo)(function (e) {
          var t = e.initValue,
            o = e.loading,
            c = e.isShowBtnCancel,
            u = e.isShowBtnReset,
            p = void 0 !== u && u,
            m = e.onSubmit,
            v = e.onCancel,
            d = (0, i.useRef)(),
            y = (0, n.Z)((0, i.useState)(null), 2),
            g = y[0],
            b = y[1],
            h = (0, i.useCallback)(
              function (e) {
                "Escape" === e.key && v(),
                  13 !== e.keyCode ||
                    e.shiftKey ||
                    (v(), m(g), e.preventDefault());
              },
              [v, m, g],
            );
          (0, i.useEffect)(
            function () {
              var e = d.current;
              return (
                e && e.addEventListener("keydown", h),
                function () {
                  e && e.removeEventListener("keydown", h);
                }
              );
            },
            [h],
          ),
            (0, i.useEffect)(
              function () {
                d.current.focus(), null === g && b(t);
              },
              [t],
            );
          var C = (0, i.useCallback)(function (e, t) {
              b(function (e) {
                return e + t.emoji;
              });
            }, []),
            w = (0, i.useCallback)(function () {
              b("");
            }, []),
            x = (0, i.useCallback)(
              function () {
                m(g), p && w(), v();
              },
              [p, w, g, m, v],
            );
          return (0, r.jsxs)(f.RL, {
            children: [
              (0, r.jsx)("textarea", {
                ref: d,
                value: g || "",
                onChange: function (e) {
                  return b(e.target.value);
                },
                rows: 3,
                placeholder: "Write something...",
              }),
              (0, r.jsxs)("div", {
                className: "--bottom",
                children: [
                  (0, r.jsxs)("div", {
                    className: "act-main",
                    children: [
                      (0, r.jsxs)(a.Z, {
                        loading: o,
                        size: "small",
                        className: "--btn --submit",
                        onClick: x,
                        children: [
                          (0, r.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fal fa-check",
                          }),
                          (0, r.jsx)("span", { children: "Submit" }),
                        ],
                      }),
                      p &&
                        (0, r.jsxs)(a.Z, {
                          size: "small",
                          className: "--btn --cancel",
                          onClick: w,
                          children: [
                            (0, r.jsx)("i", {
                              "aria-hidden": !0,
                              className: "fal fa-undo-alt",
                            }),
                            (0, r.jsx)("span", { children: "Reset" }),
                          ],
                        }),
                      (void 0 === c || c) &&
                        (0, r.jsxs)(a.Z, {
                          size: "small",
                          className: "--btn --cancel",
                          onClick: v,
                          children: [
                            (0, r.jsx)("i", {
                              "aria-hidden": !0,
                              className: "fal fa-times",
                            }),
                            (0, r.jsx)("span", { children: "Cancel" }),
                          ],
                        }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "act-extra",
                    children: (0, r.jsx)(l.Z, {
                      trigger: "click",
                      content: (0, r.jsx)(s(), {
                        onEmojiClick: C,
                        disableAutoFocus: !0,
                        native: !0,
                      }),
                      onOpenChange: function (e) {
                        var t;
                        e ||
                          null === (t = d.current) ||
                          void 0 === t ||
                          t.focus();
                      },
                      zIndex: 101,
                      children: (0, r.jsx)("i", {
                        "aria-hidden": !0,
                        className: "fas fa-grin-alt",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        });
      t.default = u;
    },
    43159: function (e, t, o) {
      o.d(t, {
        C: function () {
          return i;
        },
      });
      var n = { adjustX: 1, adjustY: 1 },
        r = [0, 0],
        i = {
          left: {
            points: ["cr", "cl"],
            overflow: n,
            offset: [-4, 0],
            targetOffset: r,
          },
          right: {
            points: ["cl", "cr"],
            overflow: n,
            offset: [4, 0],
            targetOffset: r,
          },
          top: {
            points: ["bc", "tc"],
            overflow: n,
            offset: [0, -4],
            targetOffset: r,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: n,
            offset: [0, 4],
            targetOffset: r,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: n,
            offset: [0, -4],
            targetOffset: r,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: n,
            offset: [-4, 0],
            targetOffset: r,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: n,
            offset: [0, -4],
            targetOffset: r,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: n,
            offset: [4, 0],
            targetOffset: r,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: n,
            offset: [0, 4],
            targetOffset: r,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: n,
            offset: [4, 0],
            targetOffset: r,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: n,
            offset: [0, 4],
            targetOffset: r,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: n,
            offset: [-4, 0],
            targetOffset: r,
          },
        };
    },
    8410: function (e, t, o) {
      o.d(t, {
        o: function () {
          return i;
        },
      });
      var n = o(67294),
        r = (0, o(98924).Z)() ? n.useLayoutEffect : n.useEffect;
      t.Z = r;
      var i = function (e, t) {
        var o = n.useRef(!0);
        r(function () {
          if (!o.current) return e();
        }, t),
          r(function () {
            return (
              (o.current = !1),
              function () {
                o.current = !0;
              }
            );
          }, []);
      };
    },
  },
]);
//# sourceMappingURL=3088.f6c1cdf2aa832459.js.map
