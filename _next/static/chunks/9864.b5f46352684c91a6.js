"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9864],
  {
    69864: function (e, n, c) {
      c.r(n);
      var i = c(85893),
        a = c(67294),
        t = c(73632),
        s = (0, a.memo)(function (e) {
          var n = e.type,
            c = e.classIcon,
            a = e.label,
            s = e.opacity,
            l = e.onClick,
            o = e.onRef,
            r = e.active;
          return (0, i.jsxs)(t.C7, {
            ref: function (e) {
              return o ? o(e) : {};
            },
            onClick: function () {
              return l ? l({ type: n }) : {};
            },
            opacity: void 0 === s ? 1 : s,
            className: void 0 !== r && r ? "active" : "",
            children: [
              (0, i.jsx)("i", {
                "aria-hidden": !0,
                className: "menu-item__icon ".concat(c),
              }),
              (0, i.jsx)("div", { className: "menu-item__label", children: a }),
            ],
          });
        });
      n.default = s;
    },
  },
]);
//# sourceMappingURL=9864.b5f46352684c91a6.js.map
