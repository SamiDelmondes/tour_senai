"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4470],
  {
    54470: function (A, g, l) {
      l.r(g);
      var I = l(85893),
        e = l(5152),
        d = l.n(e),
        i = l(67294),
        o = l(77939),
        n = l(25617),
        C = l(7400),
        b = l(17705),
        r = d()(
          function () {
            return l.e(1622).then(l.bind(l, 51622));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [51622];
              },
            },
          },
        ),
        a = (0, i.memo)(function (A) {
          var g = A.marker,
            l = A.isTurnOnRadar,
            e = A.configMarker,
            d = A.configRadar,
            a = A.northRadar,
            u = A.isActive,
            t = (0, n.v9)(C.U9),
            c = (0, i.useMemo)(
              function () {
                return (
                  t.filter(function (A) {
                    return A.id === g.target_scene_id;
                  })[0] || void 0
                );
              },
              [t, g],
            );
          return (0, I.jsx)(o.Z, {
            title: (null == c ? void 0 : c.title) || "N/A",
            children: (0, I.jsxs)(b.g8, {
              id: g.id,
              className: u ? "active" : "",
              children: [
                (0, I.jsx)("img", {
                  src:
                    (u
                      ? null == e
                        ? void 0
                        : e.srcWhenActive
                      : null == e
                        ? void 0
                        : e.src) ||
                    (null == e ? void 0 : e.src) ||
                    "data:image/png;base64,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",
                  style: {
                    width: (null == e ? void 0 : e.width)
                      ? "".concat(null == e ? void 0 : e.width, "px")
                      : "20px",
                  },
                  alt: "dot",
                }),
                u &&
                  l &&
                  (0, I.jsx)(r, {
                    width: d.width,
                    bgColor: d.bgColor,
                    north: a || 0,
                    borderColor: d.borderColor,
                    borderWidth: d.borderWidth,
                  }),
              ],
            }),
          });
        });
      g.default = a;
    },
  },
]);
//# sourceMappingURL=4470.f180025f232c04bd.js.map
