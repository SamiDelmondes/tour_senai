"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1933],
  {
    61933: function (l, n, i) {
      i.r(n);
      var o = i(85893),
        e = i(7400),
        u = i(67294),
        a = i(25617),
        c = (0, u.memo)(function () {
          var l = (0, a.v9)(e.N5),
            n = (0, u.useCallback)(
              function () {
                window.open(null == l ? void 0 : l.url, "_blank");
              },
              [l],
            );
          return (
            !!(null == l ? void 0 : l.isEnabled) &&
            !!(null == l ? void 0 : l.image) &&
            (0, o.jsx)("div", {
              className: "--logo ".concat(
                (null == l ? void 0 : l.position) || "topLeft",
              ),
              children: (0, o.jsx)("img", {
                src: null == l ? void 0 : l.image,
                alt: "logo",
                onClick: n,
                style: {
                  width: "".concat((null == l ? void 0 : l.size) || 180, "px"),
                },
              }),
            })
          );
        });
      n.default = c;
    },
  },
]);
//# sourceMappingURL=1933.f1a40c0e21846339.js.map
