"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7636],
  {
    36490: function (e, n, a) {
      a.r(n);
      var s = a(828),
        i = a(85893),
        c = a(67294),
        l = a(71577),
        t = a(10808),
        r = a(2138),
        u = a.n(r),
        o = a(95898),
        d = (0, c.memo)(function (e) {
          var n = e.initValue,
            a = e.loading,
            r = e.isShowBtnCancel,
            d = e.isShowBtnReset,
            f = void 0 !== d && d,
            h = e.onSubmit,
            m = e.onCancel,
            x = (0, c.useRef)(),
            j = (0, s.Z)((0, c.useState)(null), 2),
            k = j[0],
            v = j[1],
            C = (0, c.useCallback)(
              function (e) {
                "Escape" === e.key && m(),
                  13 !== e.keyCode ||
                    e.shiftKey ||
                    (m(), h(k), e.preventDefault());
              },
              [m, h, k],
            );
          (0, c.useEffect)(
            function () {
              var e = x.current;
              return (
                e && e.addEventListener("keydown", C),
                function () {
                  e && e.removeEventListener("keydown", C);
                }
              );
            },
            [C],
          ),
            (0, c.useEffect)(
              function () {
                x.current.focus(), null === k && v(n);
              },
              [n],
            );
          var b = (0, c.useCallback)(function (e, n) {
              v(function (e) {
                return e + n.emoji;
              });
            }, []),
            N = (0, c.useCallback)(function () {
              v("");
            }, []),
            p = (0, c.useCallback)(
              function () {
                h(k), f && N(), m();
              },
              [f, N, k, h, m],
            );
          return (0, i.jsxs)(o.RL, {
            children: [
              (0, i.jsx)("textarea", {
                ref: x,
                value: k || "",
                onChange: function (e) {
                  return v(e.target.value);
                },
                rows: 3,
                placeholder: "Write something...",
              }),
              (0, i.jsxs)("div", {
                className: "--bottom",
                children: [
                  (0, i.jsxs)("div", {
                    className: "act-main",
                    children: [
                      (0, i.jsxs)(l.Z, {
                        loading: a,
                        size: "small",
                        className: "--btn --submit",
                        onClick: p,
                        children: [
                          (0, i.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fal fa-check",
                          }),
                          (0, i.jsx)("span", { children: "Submit" }),
                        ],
                      }),
                      f &&
                        (0, i.jsxs)(l.Z, {
                          size: "small",
                          className: "--btn --cancel",
                          onClick: N,
                          children: [
                            (0, i.jsx)("i", {
                              "aria-hidden": !0,
                              className: "fal fa-undo-alt",
                            }),
                            (0, i.jsx)("span", { children: "Reset" }),
                          ],
                        }),
                      (void 0 === r || r) &&
                        (0, i.jsxs)(l.Z, {
                          size: "small",
                          className: "--btn --cancel",
                          onClick: m,
                          children: [
                            (0, i.jsx)("i", {
                              "aria-hidden": !0,
                              className: "fal fa-times",
                            }),
                            (0, i.jsx)("span", { children: "Cancel" }),
                          ],
                        }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "act-extra",
                    children: (0, i.jsx)(t.Z, {
                      trigger: "click",
                      content: (0, i.jsx)(u(), {
                        onEmojiClick: b,
                        disableAutoFocus: !0,
                        native: !0,
                      }),
                      onOpenChange: function (e) {
                        var n;
                        e ||
                          null === (n = x.current) ||
                          void 0 === n ||
                          n.focus();
                      },
                      zIndex: 101,
                      children: (0, i.jsx)("i", {
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
      n.default = d;
    },
  },
]);
//# sourceMappingURL=7636.13bfacc63910b932.js.map
