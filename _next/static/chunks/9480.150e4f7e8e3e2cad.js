"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9480],
  {
    9480: function (e, n, o) {
      o.r(n);
      var i = o(41799),
        t = o(69396),
        a = o(828),
        u = o(85893),
        l = o(67294),
        r = o(5152),
        c = o.n(r),
        s = o(28100),
        f = o(5239),
        p = c()(
          function () {
            return Promise.all([o.e(6725), o.e(8943)]).then(o.bind(o, 48943));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [48943];
              },
            },
          },
        ),
        v = (0, l.memo)(function (e) {
          var n = e.onChangeScene,
            o = (0, a.Z)((0, f.gU)("state"), 2),
            r = o[0],
            c = o[1],
            v = (0, s.m)(),
            d = v.mapData,
            m = v.configMap,
            b = v.markerSelected,
            k = (0, l.useCallback)(
              function () {
                return c(function (e) {
                  return (0, t.Z)((0, i.Z)({}, e), { isVisibleMap: !1 });
                });
              },
              [c],
            );
          return (
            !!r.isVisibleMap &&
            (0, u.jsx)(p, {
              visible: r.isVisibleMap,
              markerSelected: b,
              mapData: d,
              configMap: m,
              onChangeScene: n,
              onCancel: k,
            })
          );
        });
      n.default = v;
    },
    28100: function (e, n, o) {
      o.d(n, {
        m: function () {
          return s;
        },
      });
      var i = o(41799),
        t = o(69396),
        a = o(828),
        u = o(67294),
        l = o(25617),
        r = o(5239),
        c = o(7400),
        s = function () {
          var e = (0, l.v9)(c.CE),
            n = (0, l.v9)(c.F7),
            o = (0, l.v9)(c.Y2),
            s = (0, a.Z)((0, r.gU)("state"), 2)[1],
            f = (0, u.useMemo)(
              function () {
                var n;
                return (
                  (null == e
                    ? void 0
                    : null === (n = e.markers) || void 0 === n
                      ? void 0
                      : n.filter(function (e) {
                          return (
                            e.target_scene_id === (null == o ? void 0 : o.id)
                          );
                        })[0]) || void 0
                );
              },
              [e, o],
            ),
            p = (0, u.useMemo)(
              function () {
                var e;
                return (null == n
                  ? void 0
                  : null === (e = n.map) || void 0 === e
                    ? void 0
                    : e.type) === "panel"
                  ? null == n
                    ? void 0
                    : n.map
                  : void 0;
              },
              [null == n ? void 0 : n.map],
            ),
            v = (0, u.useMemo)(
              function () {
                var e;
                return (null == n
                  ? void 0
                  : null === (e = n.map) || void 0 === e
                    ? void 0
                    : e.type) === "box"
                  ? (0, i.Z)(
                      {},
                      {
                        offsetBottom: 48,
                        offsetLeft: 10,
                        offsetRight: 10,
                        offsetTop: 10,
                      },
                      null == n ? void 0 : n.map,
                    )
                  : void 0;
              },
              [null == n ? void 0 : n.map],
            ),
            d = (0, a.Z)((0, u.useState)(!1), 2),
            m = d[0],
            b = d[1],
            k = (0, u.useCallback)(
              function () {
                s(function (e) {
                  return (0, t.Z)((0, i.Z)({}, e), { isVisibleMap: !1 });
                });
              },
              [s],
            ),
            C = (0, u.useCallback)(function () {
              return b(!0);
            }, []),
            M = (0, u.useCallback)(function () {
              return b(!1);
            }, []);
          return (0, u.useMemo)(
            function () {
              return {
                visiblePopup: m,
                sceneSelected: o,
                markerSelected: f,
                configMap: n,
                configDisplayBox: v,
                mapData: e,
                configDisplayPanel: p,
                onCloseMap: k,
                onClosePopup: M,
                onOpenPopup: C,
              };
            },
            [m, o, f, n, v, e, p, k, M, C],
          );
        };
    },
  },
]);
//# sourceMappingURL=9480.150e4f7e8e3e2cad.js.map
