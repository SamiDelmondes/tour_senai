"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3230],
  {
    3230: function (e, n, o) {
      o.r(n);
      var l = o(828),
        i = o(85893),
        t = o(67294),
        a = o(29750),
        r = o(5152),
        c = o.n(r),
        s = o(5239),
        u = o(76925),
        d = o(25617),
        f = o(7400),
        v = o(91527),
        m = o(67744),
        p = {
          normal: { width: 220, height: 160 },
          scale: { width: 500, height: 390 },
        },
        h = c()(
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
        g = c()(
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
        k = (0, t.memo)(function (e) {
          var n = e.onChangeScene,
            o = (0, t.useRef)(null),
            r = (0, d.v9)(f.AA),
            c = (0, l.Z)((0, s.gU)("state"), 1)[0],
            k = (0, u.O)({ floorplanRef: o }),
            b = k.visiblePopup,
            C = k.sceneSelected,
            x = k.listFloorplan,
            j = k.markerSelected,
            S = k.configFloorplan,
            Z = k.configDisplayBox,
            w = k.floorplanSelected,
            I = k.onCenterToMarkerActive,
            N = k.onChangeFloorplan,
            T = k.onCloseFloorplan,
            F = k.onClosePopup,
            M = k.onOpenPopup,
            y = k.onZoomOut,
            R = k.onZoomIn,
            O = (0, t.useRef)(!1),
            _ = (0, l.Z)((0, t.useState)(p.normal), 2),
            P = _[0],
            z = _[1];
          return (0, i.jsxs)(v.y9, {
            bgColor: (null == S ? void 0 : S.bgColor) || a.QI.bgColor,
            position: Z.position || "bottomRight",
            offsetTop: Z.offsetTop || 10,
            offsetBottom: Z.offsetBottom || 10,
            offsetRight: Z.offsetRight || 10,
            offsetLeft: Z.offsetLeft || 10,
            onMouseOver: function () {
              z(p.scale),
                O.current ||
                  P !== p.normal ||
                  setTimeout(function () {
                    var e,
                      n,
                      l,
                      i,
                      t,
                      a =
                        null === (e = o.current) || void 0 === e
                          ? void 0
                          : e.getInstance().state.scale;
                    j
                      ? null ===
                          (n =
                            null === (l = o.current) || void 0 === l
                              ? void 0
                              : l.getInstance()) ||
                        void 0 === n ||
                        n.zoomToElement(j.id, a)
                      : null ===
                          (i =
                            null === (t = o.current) || void 0 === t
                              ? void 0
                              : t.getInstance()) ||
                        void 0 === i ||
                        i.resetTransform();
                  }, 200);
            },
            onMouseLeave: function () {
              z(p.normal),
                setTimeout(function () {
                  if (!O.current) {
                    var e,
                      n,
                      l,
                      i,
                      t,
                      a =
                        null === (e = o.current) || void 0 === e
                          ? void 0
                          : e.getInstance().state.scale;
                    j
                      ? null ===
                          (n =
                            null === (l = o.current) || void 0 === l
                              ? void 0
                              : l.getInstance()) ||
                        void 0 === n ||
                        n.zoomToElement(j.id, a)
                      : null ===
                          (i =
                            null === (t = o.current) || void 0 === t
                              ? void 0
                              : t.getInstance()) ||
                        void 0 === i ||
                        i.resetTransform();
                  }
                }, 200);
            },
            style: {
              width: "".concat(P.width, "px"),
              height: "".concat(P.height, "px"),
            },
            className: ""
              .concat(c.isVisibleFloorplan ? "" : "hide", " ")
              .concat(
                (null == r ? void 0 : r.selected) === "basekrpano"
                  ? "basekrpano"
                  : (null == r ? void 0 : r.selected) === "custom1"
                    ? "custom1"
                    : (null == r ? void 0 : r.selected) === "wall"
                      ? "wall"
                      : "default",
              ),
            children: [
              w &&
                (0, i.jsx)(m.Z, {
                  ref: o,
                  zoom: 1,
                  sceneSelected: C,
                  markerSelected: j,
                  floorplanSelected: w,
                  configFloorplan: S,
                  onChangeScene: n,
                }),
              (0, i.jsxs)(v.Ko, {
                style: {
                  zIndex: P.width === p.scale.width ? 1 : -1,
                  opacity: P.width === p.scale.width ? 1 : 0,
                },
                onMouseOver: function (e) {
                  e.stopPropagation(), (O.current = !0);
                },
                onMouseLeave: function (e) {
                  e.stopPropagation(), (O.current = !1);
                },
                children: [
                  (0, i.jsx)("div", {
                    className: "--left",
                    children: (0, i.jsx)(h, {
                      menuActive: [null == w ? void 0 : w.id],
                      listMenu: x.map(function (e) {
                        return {
                          type: e.id,
                          classIcon: "far fa-project-diagram",
                          label: e.name,
                        };
                      }),
                      onClick: N,
                      children: (0, i.jsxs)("div", {
                        className: "action--item --select",
                        children: [
                          (0, i.jsx)("span", {
                            children: (null == w ? void 0 : w.name) || "---",
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
                        onClick: R,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-search-plus",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: y,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-search-minus",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: I,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-crosshairs",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: M,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-expand",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "action--item",
                        onClick: T,
                        children: (0, i.jsx)("i", {
                          "aria-hidden": !0,
                          className: "far fa-times",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              b &&
                (0, i.jsx)(g, {
                  visible: b,
                  listFloorplan: x,
                  markerSelected: j,
                  floorplanSelected: w,
                  configFloorplan: S,
                  onChangeFloorplan: N,
                  onChangeScene: n,
                  onCancel: F,
                }),
            ],
          });
        });
      n.default = k;
    },
    67744: function (e, n, o) {
      var l = o(41799),
        i = o(828),
        t = o(85893),
        a = o(67294),
        r = o(25617),
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
        p = (0, a.forwardRef)(function (e, n) {
          var o,
            s = e.configFloorplan,
            u = e.floorplanSelected,
            p = e.sceneSelected,
            h = e.markerSelected,
            g = e.onChangeScene,
            k = e.zoom,
            b = void 0 === k ? 1.5 : k,
            C = e.minZoom,
            x = e.maxZoom,
            j = (0, i.Z)((0, a.useState)(!1), 2),
            S = j[0],
            Z = j[1],
            w = (0, a.useRef)(null),
            I = (0, r.v9)(f.U9),
            N = (0, a.useMemo)(
              function () {
                return (0, l.Z)({}, d.QI.radar, null == s ? void 0 : s.radar);
              },
              [null == s ? void 0 : s.radar],
            ),
            T = (0, a.useMemo)(
              function () {
                return (0, l.Z)({}, d.QI.marker, null == s ? void 0 : s.marker);
              },
              [null == s ? void 0 : s.marker],
            );
          (0, a.useEffect)(
            function () {
              h &&
                S &&
                setTimeout(function () {
                  var e,
                    n,
                    o,
                    l =
                      (null === (e = w.current) || void 0 === e
                        ? void 0
                        : null === (n = e.state) || void 0 === n
                          ? void 0
                          : n.scale) || b;
                  null === (o = w.current) ||
                    void 0 === o ||
                    o.zoomToElement(h.id, l);
                }, 200);
            },
            [S, h],
          ),
            (0, a.useImperativeHandle)(n, function () {
              return {
                getInstance: function () {
                  return w.current;
                },
              };
            });
          var F = (0, a.useCallback)(
            function (e) {
              var n = I.filter(function (n) {
                return n.id === e.target_scene_id;
              })[0];
              n && g(n);
            },
            [I, g],
          );
          return (0, t.jsx)(c.d$, {
            centerZoomedOut: !0,
            initialScale: b,
            ref: w,
            wheel: { disabled: !0 },
            pinch: { disabled: !0 },
            doubleClick: { disabled: !0 },
            minScale: void 0 === C ? 1 : C,
            maxScale: void 0 === x ? 2 : x,
            alignmentAnimation: { animationTime: 150, animationType: "linear" },
            children: (0, t.jsx)(c.Uv, {
              wrapperStyle: { width: "100%", height: "100%" },
              children: (0, t.jsxs)(v.Zs, {
                children: [
                  (0, t.jsx)("img", {
                    src: u.src,
                    alt: "test",
                    onLoad: function () {
                      return Z(!0);
                    },
                  }),
                  null === (o = u.markers) || void 0 === o
                    ? void 0
                    : o.map(function (e) {
                        return (0, t.jsx)(
                          m,
                          {
                            marker: e,
                            onClick: F,
                            configRadar: N,
                            configMarker: T,
                            northRadar: null == p ? void 0 : p.north_ath,
                            isTurnOnRadar: N.isEnabled,
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
      n.Z = (0, a.memo)(p);
    },
    76925: function (e, n, o) {
      o.d(n, {
        O: function () {
          return u;
        },
      });
      var l = o(41799),
        i = o(69396),
        t = o(828),
        a = o(67294),
        r = o(25617),
        c = o(5239),
        s = o(7400),
        u = function (e) {
          var n = e.floorplanRef,
            o = (0, r.v9)(s.f5),
            u = (0, r.v9)(s.Y2),
            d = (0, r.v9)(s.u$),
            f = (0, t.Z)((0, c.gU)("state"), 2)[1],
            v = (0, t.Z)((0, a.useState)(void 0), 2),
            m = v[0],
            p = v[1];
          (0, a.useEffect)(
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
          var h = (0, a.useMemo)(
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
            g = (0, a.useMemo)(
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
            k = (0, a.useMemo)(
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
            b = (0, t.Z)((0, a.useState)(!1), 2),
            C = b[0],
            x = b[1],
            j = (0, a.useCallback)(
              function () {
                f(function (e) {
                  return (0, i.Z)((0, l.Z)({}, e), { isVisibleFloorplan: !1 });
                });
              },
              [f],
            ),
            S = (0, a.useCallback)(function () {
              return x(!0);
            }, []),
            Z = (0, a.useCallback)(function () {
              return x(!1);
            }, []),
            w = (0, a.useCallback)(
              function () {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.getInstance().zoomIn();
              },
              [n],
            ),
            I = (0, a.useCallback)(
              function () {
                var e;
                return null === (e = n.current) || void 0 === e
                  ? void 0
                  : e.getInstance().zoomOut();
              },
              [n],
            ),
            N = (0, a.useCallback)(
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
            T = (0, a.useCallback)(
              function (e) {
                var n = e.type,
                  l = o.filter(function (e) {
                    return e.id === n;
                  })[0];
                l && p(l);
              },
              [o],
            );
          return (0, a.useMemo)(
            function () {
              return {
                visiblePopup: C,
                sceneSelected: u,
                listFloorplan: o,
                markerSelected: h,
                configFloorplan: d,
                configDisplayBox: k,
                floorplanSelected: m,
                configDisplayPanel: g,
                onCenterToMarkerActive: N,
                onChangeFloorplan: T,
                onCloseFloorplan: j,
                onClosePopup: Z,
                onOpenPopup: S,
                onZoomOut: I,
                onZoomIn: w,
              };
            },
            [C, u, o, h, d, k, m, g, N, T, j, Z, S, I, w],
          );
        };
    },
  },
]);
//# sourceMappingURL=3230.a689e0aba4273338.js.map
