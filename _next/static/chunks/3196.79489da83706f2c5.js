"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3196],
  {
    73196: function (s, e, i) {
      i.r(e);
      var l = i(85893),
        a = i(67294),
        c = i(53495),
        n = (0, a.memo)(function (s) {
          var e = s.hotspotTitle,
            i = s.callout;
          return (0, l.jsx)(c.a$, {
            degrees: +((null == i ? void 0 : i.degrees) || 45),
            children: (0, l.jsxs)("div", {
              className: "calloutWrapper",
              children: [
                (0, l.jsx)("div", {
                  className: "point",
                  children: (0, l.jsx)("div", { className: "--dot" }),
                }),
                (0, l.jsxs)("div", {
                  className: "--main",
                  children: [
                    (0, l.jsx)("div", {
                      className: "line",
                      children: (0, l.jsx)("div", { className: "--line" }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "--content ".concat(
                        (null == i ? void 0 : i.type) === "image"
                          ? "--type-img"
                          : "--type-text",
                      ),
                      children: [
                        (0, l.jsx)("div", {
                          className: "--line",
                          children: (0, l.jsx)("svg", {
                            children: (0, l.jsx)("circle", {
                              id: "path",
                              cx: "85",
                              cy: "85",
                              r: "80",
                              stroke: "#fff",
                              fillOpacity: "0",
                              strokeWidth: "6",
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "--text",
                          children: (0, l.jsxs)("div", {
                            className: "--inner",
                            children: [
                              (0, l.jsx)("span", {
                                className: "--mainTitle",
                                children: e,
                              }),
                              (0, l.jsx)("article", {
                                children:
                                  (null == i ? void 0 : i.text) || "---",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "--img",
                          children: (0, l.jsxs)("div", {
                            className: "--inner",
                            children: [
                              (0, l.jsx)("div", { className: "--line" }),
                              (0, l.jsx)("img", {
                                src: null == i ? void 0 : i.src,
                                alt: "",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      e.default = n;
    },
  },
]);
//# sourceMappingURL=3196.79489da83706f2c5.js.map
