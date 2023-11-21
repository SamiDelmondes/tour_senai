"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6490, 7636],
  {
    10808: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(87462),
        l = t(67294),
        r = t(53124),
        i = t(77939),
        s = function (e) {
          return e ? ("function" == typeof e ? e() : e) : null;
        },
        c = t(33603),
        o = function (e, n) {
          var t = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              0 > n.indexOf(a) &&
              (t[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, a = Object.getOwnPropertySymbols(e);
              l < a.length;
              l++
            )
              0 > n.indexOf(a[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, a[l]) &&
                (t[a[l]] = e[a[l]]);
          return t;
        },
        u = function (e) {
          var n = e.title,
            t = e.content,
            a = e.prefixCls;
          return n || t
            ? l.createElement(
                l.Fragment,
                null,
                n &&
                  l.createElement(
                    "div",
                    { className: "".concat(a, "-title") },
                    s(n),
                  ),
                l.createElement(
                  "div",
                  { className: "".concat(a, "-inner-content") },
                  s(t),
                ),
              )
            : null;
        },
        f = l.forwardRef(function (e, n) {
          var t = e.prefixCls,
            s = e.title,
            f = e.content,
            m = e._overlay,
            d = e.placement,
            v = e.trigger,
            p = e.mouseEnterDelay,
            y = e.mouseLeaveDelay,
            h = e.overlayStyle,
            x = o(e, [
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
            j = l.useContext(r.E_).getPrefixCls,
            C = j("popover", t),
            b = j();
          return l.createElement(
            i.Z,
            (0, a.Z)(
              {
                placement: void 0 === d ? "top" : d,
                trigger: void 0 === v ? "hover" : v,
                mouseEnterDelay: void 0 === p ? 0.1 : p,
                mouseLeaveDelay: void 0 === y ? 0.1 : y,
                overlayStyle: void 0 === h ? {} : h,
              },
              x,
              {
                prefixCls: C,
                ref: n,
                overlay:
                  m ||
                  l.createElement(u, { prefixCls: C, title: s, content: f }),
                transitionName: (0, c.mL)(b, "zoom-big", x.transitionName),
              },
            ),
          );
        });
    },
    36490: function (e, n, t) {
      t.r(n);
      var a = t(828),
        l = t(85893),
        r = t(67294),
        i = t(71577),
        s = t(10808),
        c = t(2138),
        o = t.n(c),
        u = t(95898),
        f = (0, r.memo)(function (e) {
          var n = e.initValue,
            t = e.loading,
            c = e.isShowBtnCancel,
            f = e.isShowBtnReset,
            m = void 0 !== f && f,
            d = e.onSubmit,
            v = e.onCancel,
            p = (0, r.useRef)(),
            y = (0, a.Z)((0, r.useState)(null), 2),
            h = y[0],
            x = y[1],
            j = (0, r.useCallback)(
              function (e) {
                "Escape" === e.key && v(),
                  13 !== e.keyCode ||
                    e.shiftKey ||
                    (v(), d(h), e.preventDefault());
              },
              [v, d, h],
            );
          (0, r.useEffect)(
            function () {
              var e = p.current;
              return (
                e && e.addEventListener("keydown", j),
                function () {
                  e && e.removeEventListener("keydown", j);
                }
              );
            },
            [j],
          ),
            (0, r.useEffect)(
              function () {
                p.current.focus(), null === h && x(n);
              },
              [n],
            );
          var C = (0, r.useCallback)(function (e, n) {
              x(function (e) {
                return e + n.emoji;
              });
            }, []),
            b = (0, r.useCallback)(function () {
              x("");
            }, []),
            g = (0, r.useCallback)(
              function () {
                d(h), m && b(), v();
              },
              [m, b, h, d, v],
            );
          return (0, l.jsxs)(u.RL, {
            children: [
              (0, l.jsx)("textarea", {
                ref: p,
                value: h || "",
                onChange: function (e) {
                  return x(e.target.value);
                },
                rows: 3,
                placeholder: "Write something...",
              }),
              (0, l.jsxs)("div", {
                className: "--bottom",
                children: [
                  (0, l.jsxs)("div", {
                    className: "act-main",
                    children: [
                      (0, l.jsxs)(i.Z, {
                        loading: t,
                        size: "small",
                        className: "--btn --submit",
                        onClick: g,
                        children: [
                          (0, l.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fal fa-check",
                          }),
                          (0, l.jsx)("span", { children: "Submit" }),
                        ],
                      }),
                      m &&
                        (0, l.jsxs)(i.Z, {
                          size: "small",
                          className: "--btn --cancel",
                          onClick: b,
                          children: [
                            (0, l.jsx)("i", {
                              "aria-hidden": !0,
                              className: "fal fa-undo-alt",
                            }),
                            (0, l.jsx)("span", { children: "Reset" }),
                          ],
                        }),
                      (void 0 === c || c) &&
                        (0, l.jsxs)(i.Z, {
                          size: "small",
                          className: "--btn --cancel",
                          onClick: v,
                          children: [
                            (0, l.jsx)("i", {
                              "aria-hidden": !0,
                              className: "fal fa-times",
                            }),
                            (0, l.jsx)("span", { children: "Cancel" }),
                          ],
                        }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "act-extra",
                    children: (0, l.jsx)(s.Z, {
                      trigger: "click",
                      content: (0, l.jsx)(o(), {
                        onEmojiClick: C,
                        disableAutoFocus: !0,
                        native: !0,
                      }),
                      onOpenChange: function (e) {
                        var n;
                        e ||
                          null === (n = p.current) ||
                          void 0 === n ||
                          n.focus();
                      },
                      zIndex: 101,
                      children: (0, l.jsx)("i", {
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
      n.default = f;
    },
  },
]);
//# sourceMappingURL=6490.ad15df8db1ac74f7.js.map
