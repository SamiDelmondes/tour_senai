"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4989],
  {
    54989: function (e, n, t) {
      t.r(n);
      var r = t(41799),
        u = t(69396),
        a = t(99534),
        c = t(85893),
        f = t(67294);
      n.default = function (e) {
        var n = e.html,
          t = (0, a.Z)(e, ["html"]),
          l = (0, f.useRef)(null);
        return (
          (0, f.useEffect)(
            function () {
              if (n) {
                var e = document.createRange().createContextualFragment(n);
                (l.current.innerHTML = ""), l.current.appendChild(e);
              }
            },
            [n],
          ),
          (0, c.jsx)("div", (0, u.Z)((0, r.Z)({}, t), { ref: l }))
        );
      };
    },
  },
]);
//# sourceMappingURL=4989.f91a6168b4a3b440.js.map
