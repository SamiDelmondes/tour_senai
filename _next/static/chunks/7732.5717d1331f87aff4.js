"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7732],
  {
    17732: function (e, n, a) {
      a.r(n),
        a.d(n, {
          Controlbar: function () {
            return i;
          },
        });
      var r = a(85893),
        o = a(5152),
        c = a.n(o),
        s = a(67294),
        l = a(55837),
        t = c()(
          function () {
            return Promise.all([
              a.e(1649),
              a.e(1276),
              a.e(7939),
              a.e(9505),
              a.e(5366),
            ]).then(a.bind(a, 36462));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [36462];
              },
            },
          },
        ),
        i = (0, s.memo)(function (e) {
          var n = e.krpanoRef,
            a = e.className,
            o = e.isShow,
            c = e.onToggleShow;
          return (0, r.jsxs)(l.NA, {
            className: "--controlbar-".concat(o ? "on" : "off", " ").concat(a),
            children: [
              (0, r.jsx)("div", {
                className: "--toggler",
                onClick: c,
                children: (0, r.jsx)("i", {
                  "aria-hidden": !0,
                  className: "fal fa-bars",
                }),
              }),
              (0, r.jsx)(t, { krpanoRef: n }),
            ],
          });
        });
      n.default = i;
    },
  },
]);
//# sourceMappingURL=7732.5717d1331f87aff4.js.map
