"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1371],
  {
    91371: function (r, o, n) {
      n.r(o);
      var e = n(85893),
        t = n(5152),
        i = n.n(t),
        c = n(67294),
        l = n(77939),
        a = n(25617),
        d = n(7400),
        u = n(91527),
        b = i()(
          function () {
            return n.e(140).then(n.bind(n, 30140));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [30140];
              },
            },
          },
        ),
        s = (0, c.memo)(function (r) {
          var o = r.marker,
            n = r.isTurnOnRadar,
            t = r.configMarker,
            i = r.configRadar,
            s = r.northRadar,
            f = r.isActive,
            h = r.onClick,
            C = (0, a.v9)(d.U9),
            k = (0, c.useMemo)(
              function () {
                return (
                  C.filter(function (r) {
                    return r.id === o.target_scene_id;
                  })[0] || void 0
                );
              },
              [C, o],
            ),
            v = (0, c.useCallback)(
              function () {
                return h(o);
              },
              [o, h],
            );
          return (0, e.jsx)(l.Z, {
            title: (null == k ? void 0 : k.title) || "N/A",
            children: (0, e.jsx)(u.g8, {
              id: o.id,
              style: {
                left: "".concat(o.left, "%"),
                top: "".concat(o.top, "%"),
                backgroundColor: "".concat(null == t ? void 0 : t.bgColor),
                borderColor: "".concat(null == t ? void 0 : t.borderColor),
              },
              onClick: v,
              onTouchStart: v,
              className: f ? "active" : "",
              children:
                f &&
                n &&
                (0, e.jsx)(b, {
                  width: i.width,
                  bgColor: i.bgColor,
                  north: s || 0,
                  borderColor: i.borderColor,
                  borderWidth: i.borderWidth,
                }),
            }),
          });
        });
      o.default = s;
    },
  },
]);
//# sourceMappingURL=1371.d14b1b2d998a8414.js.map
