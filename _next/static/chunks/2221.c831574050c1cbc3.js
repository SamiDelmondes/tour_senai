"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2221],
  {
    82221: function (e, n, t) {
      t.r(n);
      var u = t(828),
        r = t(85893),
        c = t(67294),
        s = t(35204),
        f = (0, c.memo)(function (e) {
          var n = e.src,
            t = e.name,
            f = e.children,
            i = (0, u.Z)((0, c.useState)(""), 2),
            h = i[0],
            a = i[1];
          return (
            (0, c.useEffect)(
              function () {
                fetch(n)
                  .then(function (e) {
                    return e.text();
                  })
                  .then(function (e) {
                    return a(e);
                  });
              },
              [n],
            ),
            (0, r.jsxs)(s.N, {
              id: t || "",
              children: [
                (0, r.jsx)("div", { dangerouslySetInnerHTML: { __html: h } }),
                f,
              ],
            })
          );
        });
      n.default = f;
    },
  },
]);
//# sourceMappingURL=2221.c831574050c1cbc3.js.map
