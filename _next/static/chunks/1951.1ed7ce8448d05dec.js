"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1951],
  {
    71951: function (e, n, r) {
      r.r(n),
        r.d(n, {
          Popup: function () {
            return v;
          },
        });
      var a = r(41799),
        i = r(85893),
        l = r(5152),
        t = r.n(l),
        o = r(67294),
        c = r(29750),
        d = r(25617),
        u = r(7400),
        s = r(91527),
        f = t()(
          function () {
            return r.e(1371).then(r.bind(r, 91371));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [91371];
              },
            },
          },
        ),
        m = t()(
          function () {
            return Promise.all([
              r.e(1577),
              r.e(7040),
              r.e(4222),
              r.e(7871),
            ]).then(r.bind(r, 37871));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37871];
              },
            },
          },
        ),
        h = t()(
          function () {
            return Promise.all([
              r.e(1577),
              r.e(4011),
              r.e(2932),
              r.e(1756),
            ]).then(r.bind(r, 61756));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61756];
              },
            },
          },
        ),
        v = function (e) {
          var n,
            r = e.visible,
            l = e.onCancel,
            t = e.listFloorplan,
            v = e.markerSelected,
            b = e.floorplanSelected,
            k = e.configFloorplan,
            p = e.onChangeFloorplan,
            x = e.onChangeScene,
            j = (0, d.v9)(u.U9),
            C = (0, d.v9)(u.Y2),
            g = (0, o.useMemo)(
              function () {
                return (0, a.Z)({}, c.QI.radar, null == k ? void 0 : k.radar);
              },
              [null == k ? void 0 : k.radar],
            ),
            w = (0, o.useMemo)(
              function () {
                return (0, a.Z)({}, c.QI.marker, null == k ? void 0 : k.marker);
              },
              [null == k ? void 0 : k.marker],
            ),
            _ = (0, o.useCallback)(
              function (e) {
                var n = j.filter(function (n) {
                  return n.id === e.target_scene_id;
                })[0];
                n && x(n);
              },
              [j, x],
            );
          return (0, i.jsx)(m, {
            visible: r,
            onCancel: l,
            maskClosable: !0,
            centered: !0,
            width: "650px",
            bodyStyle: { maxWidth: "100%", width: "100%" },
            children: (0, i.jsxs)(s.SM, {
              children: [
                (0, i.jsx)(s.Ko, {
                  children: (0, i.jsx)("div", {
                    className: "--left",
                    children: (0, i.jsx)(h, {
                      menuActive: [null == b ? void 0 : b.id],
                      listMenu: t.map(function (e) {
                        return {
                          type: e.id,
                          classIcon: "far fa-project-diagram",
                          label: e.name,
                        };
                      }),
                      onClick: p,
                      children: (0, i.jsxs)("div", {
                        className: "action--item --select",
                        children: [
                          (0, i.jsx)("span", {
                            children: (null == b ? void 0 : b.name) || "---",
                          }),
                          (0, i.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fas fa-caret-down",
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)("img", { src: b.src, alt: "test" }),
                null === (n = b.markers) || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      return (0, i.jsx)(
                        f,
                        {
                          marker: e,
                          onClick: _,
                          configRadar: g,
                          configMarker: w,
                          northRadar: C.north_ath,
                          isTurnOnRadar: g.isEnabled,
                          isActive: (null == v ? void 0 : v.id) === e.id,
                        },
                        e.id,
                      );
                    }),
              ],
            }),
          });
        };
      n.default = (0, o.memo)(v);
    },
  },
]);
//# sourceMappingURL=1951.1ed7ce8448d05dec.js.map
