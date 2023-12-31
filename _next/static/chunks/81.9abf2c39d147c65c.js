"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [81],
  {
    90081: function (n, o, e) {
      e.r(o);
      var l = e(41799),
        t = e(69396),
        r = e(828),
        i = e(85893),
        u = e(67294),
        a = e(5152),
        c = e.n(a),
        f = e(76925),
        s = e(5239),
        v = c()(
          function () {
            return e.e(1951).then(e.bind(e, 71951));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [71951];
              },
            },
          },
        ),
        d = (0, u.memo)(function (n) {
          var o = n.onChangeScene,
            e = (0, u.useRef)(null),
            a = (0, r.Z)((0, s.gU)("state"), 2),
            c = a[0],
            d = a[1],
            p = (0, f.O)({ floorplanRef: e }),
            b = p.listFloorplan,
            g = p.markerSelected,
            k = p.floorplanSelected,
            C = p.configFloorplan,
            m = p.onChangeFloorplan,
            F = (0, u.useCallback)(
              function () {
                return d(function (n) {
                  return (0, t.Z)((0, l.Z)({}, n), { isVisibleFloorplan: !1 });
                });
              },
              [d],
            );
          return (
            !!c.isVisibleFloorplan &&
            (0, i.jsx)(v, {
              visible: c.isVisibleFloorplan,
              listFloorplan: b,
              markerSelected: g,
              floorplanSelected: k,
              configFloorplan: C,
              onChangeFloorplan: m,
              onChangeScene: o,
              onCancel: F,
            })
          );
        });
      o.default = d;
    },
    76925: function (n, o, e) {
      e.d(o, {
        O: function () {
          return f;
        },
      });
      var l = e(41799),
        t = e(69396),
        r = e(828),
        i = e(67294),
        u = e(25617),
        a = e(5239),
        c = e(7400),
        f = function (n) {
          var o = n.floorplanRef,
            e = (0, u.v9)(c.f5),
            f = (0, u.v9)(c.Y2),
            s = (0, u.v9)(c.u$),
            v = (0, r.Z)((0, a.gU)("state"), 2)[1],
            d = (0, r.Z)((0, i.useState)(void 0), 2),
            p = d[0],
            b = d[1];
          (0, i.useEffect)(
            function () {
              b(
                (e &&
                  (e.filter(function (n) {
                    var o;
                    return (
                      (null === (o = n.markers) || void 0 === o
                        ? void 0
                        : o.filter(function (n) {
                            return (
                              n.target_scene_id === (null == f ? void 0 : f.id)
                            );
                          }).length) > 0
                    );
                  })[0] ||
                    e[0])) ||
                  void 0,
              );
            },
            [e, f],
          );
          var g = (0, i.useMemo)(
              function () {
                var n;
                return (
                  (null == p
                    ? void 0
                    : null === (n = p.markers) || void 0 === n
                      ? void 0
                      : n.filter(function (n) {
                          return (
                            n.target_scene_id === (null == f ? void 0 : f.id)
                          );
                        })[0]) || void 0
                );
              },
              [p, f],
            ),
            k = (0, i.useMemo)(
              function () {
                var n;
                return (null == s
                  ? void 0
                  : null === (n = s.floorplan) || void 0 === n
                    ? void 0
                    : n.type) === "panel"
                  ? null == s
                    ? void 0
                    : s.floorplan
                  : void 0;
              },
              [null == s ? void 0 : s.floorplan],
            ),
            C = (0, i.useMemo)(
              function () {
                var n;
                return (null == s
                  ? void 0
                  : null === (n = s.floorplan) || void 0 === n
                    ? void 0
                    : n.type) === "box"
                  ? (0, l.Z)(
                      {},
                      {
                        offsetBottom: 48,
                        offsetLeft: 10,
                        offsetRight: 10,
                        offsetTop: 10,
                      },
                      null == s ? void 0 : s.floorplan,
                    )
                  : void 0;
              },
              [null == s ? void 0 : s.floorplan],
            ),
            m = (0, r.Z)((0, i.useState)(!1), 2),
            F = m[0],
            h = m[1],
            S = (0, i.useCallback)(
              function () {
                v(function (n) {
                  return (0, t.Z)((0, l.Z)({}, n), { isVisibleFloorplan: !1 });
                });
              },
              [v],
            ),
            Z = (0, i.useCallback)(function () {
              return h(!0);
            }, []),
            _ = (0, i.useCallback)(function () {
              return h(!1);
            }, []),
            I = (0, i.useCallback)(
              function () {
                var n;
                return null === (n = o.current) || void 0 === n
                  ? void 0
                  : n.getInstance().zoomIn();
              },
              [o],
            ),
            y = (0, i.useCallback)(
              function () {
                var n;
                return null === (n = o.current) || void 0 === n
                  ? void 0
                  : n.getInstance().zoomOut();
              },
              [o],
            ),
            M = (0, i.useCallback)(
              function () {
                var n,
                  e,
                  l,
                  t =
                    null === (n = o.current) || void 0 === n
                      ? void 0
                      : n.getInstance().state.scale;
                null ===
                  (e =
                    null === (l = o.current) || void 0 === l
                      ? void 0
                      : l.getInstance()) ||
                  void 0 === e ||
                  e.zoomToElement(null == g ? void 0 : g.id, t || void 0);
              },
              [o, g],
            ),
            O = (0, i.useCallback)(
              function (n) {
                var o = n.type,
                  l = e.filter(function (n) {
                    return n.id === o;
                  })[0];
                l && b(l);
              },
              [e],
            );
          return (0, i.useMemo)(
            function () {
              return {
                visiblePopup: F,
                sceneSelected: f,
                listFloorplan: e,
                markerSelected: g,
                configFloorplan: s,
                configDisplayBox: C,
                floorplanSelected: p,
                configDisplayPanel: k,
                onCenterToMarkerActive: M,
                onChangeFloorplan: O,
                onCloseFloorplan: S,
                onClosePopup: _,
                onOpenPopup: Z,
                onZoomOut: y,
                onZoomIn: I,
              };
            },
            [F, f, e, g, s, C, p, k, M, O, S, _, Z, y, I],
          );
        };
    },
  },
]);
//# sourceMappingURL=81.9abf2c39d147c65c.js.map
