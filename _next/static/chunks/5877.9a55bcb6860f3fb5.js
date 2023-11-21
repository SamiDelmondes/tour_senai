"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5877],
  {
    95877: function (e, n, o) {
      o.r(n);
      var l = o(828),
        i = o(85893),
        a = o(67294),
        r = o(29750),
        t = o(5152),
        c = o.n(t),
        s = o(5239),
        u = o(76925),
        d = o(25617),
        f = o(7400),
        v = o(91527),
        m = o(67744),
        p = c()(
          function () {
            return Promise.all([
              o.e(1577),
              o.e(4011),
              o.e(2932),
              o.e(1756),
            ]).then(o.bind(o, 61756));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61756];
              },
            },
          },
        ),
        h = c()(
          function () {
            return o.e(1951).then(o.bind(o, 71951));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [71951];
              },
            },
          },
        ),
        k = (0, a.memo)(function (e) {
          var n = e.onChangeScene,
            o = (0, a.useRef)(null),
            t = (0, d.v9)(f.AA),
            c = (0, l.Z)((0, s.gU)("state"), 1)[0],
            k = (0, u.O)({ floorplanRef: o }),
            g = k.visiblePopup,
            b = k.sceneSelected,
            C = k.listFloorplan,
            x = k.markerSelected,
            j = k.configFloorplan,
            S = k.floorplanSelected,
            Z = k.configDisplayPanel,
            N = k.onCenterToMarkerActive,
            F = k.onChangeFloorplan,
            I = k.onCloseFloorplan,
            w = k.onClosePopup,
            _ = k.onOpenPopup,
            M = k.onZoomOut,
            y = k.onZoomIn;
          return (0, i.jsxs)(v.YD, {
            bgColor: (null == j ? void 0 : j.bgColor) || r.QI.bgColor,
            position: (null == Z ? void 0 : Z.position) || "left",
            className: ""
              .concat(c.isVisibleFloorplan ? "" : "hide", " ")
              .concat(
                (null == t ? void 0 : t.selected) === "basekrpano"
                  ? "basekrpano"
                  : (null == t ? void 0 : t.selected) === "custom1"
                    ? "custom1"
                    : (null == t ? void 0 : t.selected) === "wall"
                      ? "wall"
                      : "default",
              ),
            children: [
              (0, i.jsx)("div", {
                className: "main",
                children:
                  S &&
                  (0, i.jsx)(m.Z, {
                    zoom: 1,
                    ref: o,
                    sceneSelected: b,
                    markerSelected: x,
                    floorplanSelected: S,
                    configFloorplan: j,
                    onChangeScene: n,
                  }),
              }),
              (0, i.jsxs)(v.Ko, {
                children: [
                  (0, i.jsx)("div", {
                    className: "--left",
                    children: (0, i.jsx)(p, {
                      menuActive: [null == S ? void 0 : S.id],
                      listMenu: C.map(function (e) {
                        return {
                          type: e.id,
                          classIcon: "far fa-project-diagram",
                          label: e.name,
                        };
                      }),
                      onClick: F,
                      children: (0, i.jsxs)("div", {
                        className: "action--item --select",
                        children: [
                          (0, i.jsx)("span", {
                            children: (null == S ? void 0 : S.name) || "---",
                          }),
                          (0, i.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fas fa-caret-down",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "--right",
                    children: [
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: y,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-search-plus",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: M,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-search-minus",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: N,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-crosshairs",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: _,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-expand",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: I,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-times",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              g &&
                (0, i.jsx)(h, {
                  visible: g,
                  listFloorplan: C,
                  markerSelected: x,
                  floorplanSelected: S,
                  configFloorplan: j,
                  onChangeFloorplan: F,
                  onChangeScene: n,
                  onCancel: w,
                }),
            ],
          });
        });
      n.default = k;
    },
    67744: function (e, n, o) {
      var l = o(41799),
        i = o(828),
        a = o(85893),
        r = o(67294),
        t = o(25617),
        c = o(26126),
        s = o(5152),
        u = o.n(s),
        d = o(29750),
        f = o(7400),
        v = o(91527),
        m = u()(
          function () {
            return o.e(1371).then(o.bind(o, 91371));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [91371];
              },
            },
          },
        ),
        p = (0, r.forwardRef)(function (e, n) {
          var o,
            s = e.configFloorplan,
            u = e.floorplanSelected,
            p = e.sceneSelected,
            h = e.markerSelected,
            k = e.onChangeScene,
            g = e.zoom,
            b = void 0 === g ? 1.5 : g,
            C = e.minZoom,
            x = e.maxZoom,
            j = (0, i.Z)((0, r.useState)(!1), 2),
            S = j[0],
            Z = j[1],
            N = (0, r.useRef)(null),
            F = (0, t.v9)(f.U9),
            I = (0, r.useMemo)(
              function () {
                return (0, l.Z)({}, d.QI.radar, null == s ? void 0 : s.radar);
              },
              [null == s ? void 0 : s.radar],
            ),
            w = (0, r.useMemo)(
              function () {
                return (0, l.Z)({}, d.QI.marker, null == s ? void 0 : s.marker);
              },
              [null == s ? void 0 : s.marker],
            );
          (0, r.useEffect)(
            function () {
              h &&
                S &&
                setTimeout(function () {
                  var e,
                    n,
                    o,
                    l =
                      (null === (e = N.current) || void 0 === e
                        ? void 0
                        : null === (n = e.state) || void 0 === n
                          ? void 0
                          : n.scale) || b;
                  null === (o = N.current) ||
                    void 0 === o ||
                    o.zoomToElement(h.id, l);
                }, 200);
            },
            [S, h],
          ),
            (0, r.useImperativeHandle)(n, function () {
              return {
                getInstance: function () {
                  return N.current;
                },
              };
            });
          var _ = (0, r.useCallback)(
            function (e) {
              var n = F.filter(function (n) {
                return n.id === e.target_scene_id;
              })[0];
              n && k(n);
            },
            [F, k],
          );
          return (0, a.jsx)(c.d$, {
            centerZoomedOut: !0,
            initialScale: b,
            ref: N,
            wheel: { disabled: !0 },
            pinch: { disabled: !0 },
            doubleClick: { disabled: !0 },
            minScale: void 0 === C ? 1 : C,
            maxScale: void 0 === x ? 2 : x,
            alignmentAnimation: { animationTime: 150, animationType: "linear" },
            children: (0, a.jsx)(c.Uv, {
              wrapperStyle: { width: "100%", height: "100%" },
              children: (0, a.jsxs)(v.Zs, {
                children: [
                  (0, a.jsx)("img", {
                    src: u.src,
                    alt: "test",
                    onLoad: function () {
                      return Z(!0);
                    },
                  }),
                  null === (o = u.markers) || void 0 === o
                    ? void 0
                    : o.map(function (e) {
                        return (0, a.jsx)(
                          m,
                          {
                            marker: e,
                            onClick: _,
                            configRadar: I,
                            configMarker: w,
                            northRadar: null == p ? void 0 : p.north_ath,
                            isTurnOnRadar: I.isEnabled,
                            isActive: (null == h ? void 0 : h.id) === e.id,
                          },
                          e.id,
                        );
                      }),
                ],
              }),
            }),
          });
        });
      n.Z = (0, r.memo)(p);
    },
    76925: function (e, n, o) {
      o.d(n, {
        O: function () {
          return u;
        },
      });
      var l = o(41799),
        i = o(69396),
        a = o(828),
        r = o(67294),
        t = o(25617),
        c = o(5239),
        s = o(7400),
        u = function (e) {
          var n = e.floorplanRef,
            o = (0, t.v9)(s.f5),
            u = (0, t.v9)(s.Y2),
            d = (0, t.v9)(s.u$),
            f = (0, a.Z)((0, c.gU)("state"), 2)[1],
            v = (0, a.Z)((0, r.useState)(void 0), 2),
            m = v[0],
            p = v[1];
          (0, r.useEffect)(
            function () {
              p(
                (o &&
                  (o.filter(function (e) {
                    var n;
                    return (
                      (null === (n = e.markers) || void 0 === n
                        ? void 0
                        : n.filter(function (e) {
                            return (
                              e.target_scene_id === (null == u ? void 0 : u.id)
                            );
                          }).length) > 0
                    );
                  })[0] ||
                    o[0])) ||
                  void 0,
              );
            },
            [o, u],
          );
          var h = (0, r.useMemo)(
              function () {
                var e;
                return (
                  (null == m
                    ? void 0
                    : null === (e = m.markers) || void 0 === e
                      ? void 0
                      : e.filter(function (e) {
                          return (
                            e.target_scene_id === (null == u ? void 0 : u.id)
                          );
                        })[0]) || void 0
                );
              },
              [m, u],
            ),
            k = (0, r.useMemo)(
              function () {
                var e;
                return (null == d
                  ? void 0
                  : null === (e = d.floorplan) || void 0 === e
                    ? void 0
                    : e.type) === "panel"
                  ? null == d
                    ? void 0
                    : d.floorplan
                  : void 0;
              },
              [null == d ? void 0 : d.floorplan],
            ),
            g = (0, r.useMemo)(
              function () {
                var e;
                return (null == d
                  ? void 0
                  : null === (e = d.floorplan) || void 0 === e
                    ? void 0
                    : e.type) === "box"
                  ? (0, l.Z)(
                      {},
                      {
                        offsetBottom: 48,
                        offsetLeft: 10,
                        offsetRight: 10,
                        offsetTop: 10,
                      },
                      null == d ? void 0 : d.floorplan,
                    )
                  : void 0;
              },
              [null == d ? void 0 : d.floorplan],
            ),
            b = (0, a.Z)((0, r.useState)(!1), 2),
            C = b[0],
            x = b[1],
            j = (0, r.useCallback)(
              function () {
                f(function (e) {
                  return (0, i.Z)((0, l.Z)({}, e), { isVisibleFloorplan: !1 });
                });
              },
              [f],
            ),
            S = (0, r.useCallback)(function () {
              return x(!0);
            }, []),
            Z = (0, r.useCallback)(function () {
              return x(!1);
            }, []),
            N = (0, r.useCallback)(
              function () {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.getInstance().zoomIn();
              },
              [n],
            ),
            F = (0, r.useCallback)(
              function () {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.getInstance().zoomOut();
              },
              [n],
            ),
            I = (0, r.useCallback)(
              function () {
                var e,
                  o,
                  l,
                  i =
                    null === (e = n.current) || void 0 === e
                      ? void 0
                      : e.getInstance().state.scale;
                null ===
                  (o =
                    null === (l = n.current) || void 0 === l
                      ? void 0
                      : l.getInstance()) ||
                  void 0 === o ||
                  o.zoomToElement(null == h ? void 0 : h.id, i || void 0);
              },
              [n, h],
            ),
            w = (0, r.useCallback)(
              function (e) {
                var n = e.type,
                  l = o.filter(function (e) {
                    return e.id === n;
                  })[0];
                l && p(l);
              },
              [o],
            );
          return (0, r.useMemo)(
            function () {
              return {
                visiblePopup: C,
                sceneSelected: u,
                listFloorplan: o,
                markerSelected: h,
                configFloorplan: d,
                configDisplayBox: g,
                floorplanSelected: m,
                configDisplayPanel: k,
                onCenterToMarkerActive: I,
                onChangeFloorplan: w,
                onCloseFloorplan: j,
                onClosePopup: Z,
                onOpenPopup: S,
                onZoomOut: F,
                onZoomIn: N,
              };
            },
            [C, u, o, h, d, g, m, k, I, w, j, Z, S, F, N],
          );
        };
    },
  },
]);
//# sourceMappingURL=5877.9a55bcb6860f3fb5.js.map
