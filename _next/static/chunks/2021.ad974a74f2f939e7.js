"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2021],
  {
    92021: function (n, e, l) {
      l.r(e),
        l.d(e, {
          Header: function () {
            return r;
          },
        });
      var s = l(85893),
        i = l(7400),
        o = l(5152),
        t = l.n(o),
        a = l(67294),
        c = l(25617),
        d = l(85972),
        u = t()(
          function () {
            return l.e(1933).then(l.bind(l, 61933));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61933];
              },
            },
          },
        ),
        r = (0, a.memo)(function () {
          var n,
            e = (0, c.v9)(i.N5),
            l = (0, c.v9)(i.M9),
            o = (0, c.v9)(i.Y2),
            t = (0, c.v9)(i.AA);
          return (0, s.jsxs)(d.Pz, {
            className: "topInfo ",
            children: [
              (null == e ? void 0 : e.isEnabled)
                ? (0, s.jsx)(u, {})
                : (0, s.jsx)("div", {
                    className: "--logo topLeft",
                    children: (0, s.jsx)("img", {
                      src: "".concat("/static", "/static/logo.png"),
                      alt: "logo",
                      onClick: function () {
                        return window.open("https://panoee.com", "_blank");
                      },
                      style: { width: "180px" },
                    }),
                  }),
              (null == t ? void 0 : t.selected) === "blank" &&
                !(null == t
                  ? void 0
                  : null === (n = t.config) || void 0 === n
                    ? void 0
                    : n.isHideInfoTour) &&
                (0, s.jsxs)("div", {
                  className: "--info",
                  children: [
                    (0, s.jsx)("h1", {
                      className: "--projectTitle",
                      children: (null == l ? void 0 : l.title) || "---",
                    }),
                    !!(null == l ? void 0 : l.subTitle) &&
                      (0, s.jsx)("p", {
                        className: "address",
                        children: null == l ? void 0 : l.subTitle,
                      }),
                    (0, s.jsx)("div", {
                      className: "popInfo",
                      children: (0, s.jsxs)("button", {
                        className: "popInfoToggle",
                        type: "button",
                        children: [
                          null == o ? void 0 : o.title,
                          (null == o ? void 0 : o.post) &&
                            (0, s.jsx)("span", {
                              children: (0, s.jsx)("i", {
                                "aria-hidden": !0,
                                className: "fas fa-info",
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        });
      e.default = r;
    },
  },
]);
//# sourceMappingURL=2021.ad974a74f2f939e7.js.map
