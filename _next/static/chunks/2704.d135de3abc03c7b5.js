"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2704],
  {
    82704: function (n, i, t) {
      t.r(i),
        t.d(i, {
          LoadingContainer: function () {
            return u;
          },
          default: function () {
            return p;
          },
        });
      var e = t(85893),
        r = t(67294),
        o = t(50888),
        d = t(11382),
        a = t(7297);
      function h() {
        var n = (0, a.Z)([
          "\n  width: 100%;\n  height: 100%;\n  .ant-spin {\n    color: #d1005c;\n    &-container {\n      width: 100%;\n      height: 100%;\n    }\n    &-nested-loading {\n      width: 100%;\n      height: 100%;\n      > div > .ant-spin {\n        width: 100%;\n        height: 100%;\n        max-height: 100%;\n      }\n    }\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var c = t(19521).ZP.div.withConfig({
          displayName: "styled__LoadingContainerWrapper",
          componentId: "Panoee__sc-25029517-0",
        })(h()),
        s = (0, e.jsx)(o.Z, { style: { fontSize: 24 }, spin: !0 }),
        u = (0, r.memo)(function (n) {
          var i = n.loading,
            t = n.description,
            r = n.children;
          return (0, e.jsx)(c, {
            children: (0, e.jsx)(d.Z, {
              indicator: s,
              tip: void 0 === t ? "" : t,
              spinning: void 0 !== i && i,
              children: r,
            }),
          });
        }),
        p = u;
    },
  },
]);
//# sourceMappingURL=2704.d135de3abc03c7b5.js.map
