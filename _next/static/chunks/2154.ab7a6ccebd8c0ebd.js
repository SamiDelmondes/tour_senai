"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2154],
  {
    32154: function (n, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return u;
          },
        });
      var t = i(828),
        r = i(85893),
        a = i(7400),
        o = i(77939),
        l = i(67294),
        s = i(25617),
        c = i(7297),
        d = i(38505);
      function m() {
        var n = (0, c.Z)([
          "\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  z-index: 2;\n  /* NOTE: theme default  */\n  &.default {\n  }\n  /* NOTE: theme solid */\n  &.custom1 {\n    right: initial;\n    left: 12px;\n  }\n  /* NOTE: theme base  */\n  &.basekrpano {\n    right: initial;\n    left: 12px;\n  }\n  @media (max-width: 575px) {\n    right: 8px;\n    &.basekrpano {\n      right: initial;\n      left: 8px;\n    }\n  }\n  .--list {\n    .--item {\n      transition: 0.15s ease-out;\n      width: 100px;\n      height: 100px;\n      margin: 0 6px;\n      border-radius: 8px;\n      ",
          ";\n      overflow: hidden;\n      position: relative;\n      border: 2px solid rgba(255, 255, 255, 0.5);\n      /* transform: scale(.95); */\n      cursor: pointer;\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          border-color: #fff;\n          transform: scale(1.05);\n        }\n      }\n      &.active {\n        border-color: var(--color-primary);\n        box-shadow: 0 0 0 2px var(--color-primary);\n      }\n      @media (max-width: 575px) {\n        width: 56px;\n        height: 56px;\n      }\n      img {\n        width: 100%;\n        min-height: 100%;\n        object-fit: cover;\n      }\n      p {\n        z-index: 10;\n        position: absolute;\n        bottom: 0;\n        margin: 0;\n        left: 0;\n        right: 0;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        color: #fff;\n        padding: 0.75rem 0.5rem 0.25rem;\n        background-image: linear-gradient(\n          to top,\n          rgba(0, 0, 0, 0.75),\n          transparent\n        );\n      }\n\n      &:not(:last-child) {\n        margin-bottom: 12px;\n      }\n    }\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      var p = i(19521).ZP.div.withConfig({
          displayName: "styled__MultipleStagingThumbWrapper",
          componentId: "Panoee__sc-7054f754-0",
        })(m(), d.b0),
        u = (0, l.memo)(function (n) {
          var e,
            i,
            c,
            d = n.scenes,
            m = n.callKrpano,
            u = (0, t.Z)((0, l.useState)(0), 2),
            h = u[0],
            v = u[1],
            f = (0, s.v9)(a.Y2),
            x = (0, s.v9)(a.AA),
            b = (0, l.useCallback)(
              function (n) {
                v(n),
                  m(
                    "loadscene(0".concat(
                      n,
                      ", null, MERGE|KEEPMOVE|KEEPVIEW|KEEPHOTSPOTS, BLEND(",
                      0.5,
                      ", easeInCubic))",
                    ),
                  );
              },
              [m],
            );
          return (0, r.jsx)(p, {
            className: (null == x ? void 0 : x.selected) || "",
            children: (0, r.jsxs)("div", {
              className: "--list",
              children: [
                (0, r.jsx)(o.Z, {
                  placement: "left",
                  title: f.title || "N/A",
                  children: (0, r.jsxs)("div", {
                    className: "--item ".concat(0 === h ? "active" : ""),
                    onClick: function () {
                      return b(0);
                    },
                    children: [
                      (0, r.jsx)("img", {
                        src:
                          (null === (e = f.media) || void 0 === e
                            ? void 0
                            : e.src_thumb) ||
                          (null === (i = f.media) || void 0 === i
                            ? void 0
                            : i.src_preview) ||
                          (null === (c = f.media) || void 0 === c
                            ? void 0
                            : c.src) ||
                          "",
                        alt: "",
                      }),
                      (0, r.jsx)("p", {
                        className: "",
                        children: f.title || "N/A",
                      }),
                    ],
                  }),
                }),
                d.map(function (n, e) {
                  var i, t, a;
                  return (0, r.jsx)(
                    o.Z,
                    {
                      placement: "left",
                      title: n.title || "N/A",
                      children: (0, r.jsxs)("div", {
                        className: "--item ".concat(
                          h === e + 1 ? "active" : "",
                        ),
                        onClick: function () {
                          return b(e + 1);
                        },
                        children: [
                          (0, r.jsx)("img", {
                            src:
                              (null === (i = n.media) || void 0 === i
                                ? void 0
                                : i.src_thumb) ||
                              (null === (t = n.media) || void 0 === t
                                ? void 0
                                : t.src_preview) ||
                              (null === (a = n.media) || void 0 === a
                                ? void 0
                                : a.src) ||
                              "",
                            alt: "",
                          }),
                          (0, r.jsx)("p", {
                            className: "",
                            children: n.title || "N/A",
                          }),
                        ],
                      }),
                    },
                    n.id,
                  );
                }),
              ],
            }),
          });
        });
    },
  },
]);
//# sourceMappingURL=2154.ab7a6ccebd8c0ebd.js.map
