"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8630],
  {
    8630: function (e, n, a) {
      a.r(n);
      var l = a(828),
        o = a(85893),
        i = a(67294),
        t = a(29750),
        r = a(5152),
        u = a.n(r),
        c = a(5239),
        s = a(28100),
        d = a(25617),
        f = a(7400),
        p = a(77939),
        v = a(17705),
        m = a(8007),
        k = u()(
          function () {
            return a.e(8749).then(a.bind(a, 48943));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [48943];
              },
            },
          },
        ),
        g = (0, i.memo)(function (e) {
          var n = e.onChangeScene,
            a = (0, i.useRef)(null),
            r = (0, d.v9)(f.AA),
            u = (0, l.Z)((0, c.gU)("state"), 1)[0],
            g = (0, s.m)(),
            h = g.mapData,
            C = g.configMap,
            b = g.visiblePopup,
            x = g.sceneSelected,
            j = g.markerSelected,
            M = g.configDisplayPanel,
            S = g.onCloseMap,
            Z = g.onOpenPopup,
            N = g.onClosePopup,
            y = (0, i.useCallback)(function () {
              var e;
              null === (e = a.current) || void 0 === e || e.onFitBounds();
            }, []),
            P = (0, i.useCallback)(
              function () {
                var e;
                null === (e = a.current) || void 0 === e || e.onPanToMarker(j);
              },
              [j],
            );
          return (0, o.jsxs)(v.XJ, {
            bgColor: (null == C ? void 0 : C.bgColor) || t.xr.bgColor,
            position: (null == M ? void 0 : M.position) || "left",
            className: ""
              .concat(u.isVisibleMap ? "" : "hide", " ")
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
              (0, o.jsx)("div", {
                className: "main",
                children: (0, o.jsx)(m.Z, {
                  ref: a,
                  mapData: h,
                  sceneSelected: x,
                  markerSelected: j,
                  configMap: C,
                  onChangeScene: n,
                }),
              }),
              (0, o.jsxs)(v.Nh, {
                children: [
                  (0, o.jsx)("div", { className: "--left" }),
                  (0, o.jsxs)("div", {
                    className: "--right",
                    children: [
                      (0, o.jsx)(p.Z, {
                        title: "Point To Marker Active",
                        placement: "top",
                        children: (0, o.jsx)("div", {
                          className: "action--item",
                          onClick: P,
                          children: (0, o.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-crosshairs",
                          }),
                        }),
                      }),
                      (0, o.jsx)(p.Z, {
                        title: "Fit map to cover all marker",
                        placement: "top",
                        children: (0, o.jsx)("div", {
                          className: "action--item",
                          onClick: y,
                          children: (0, o.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-ball-pile",
                          }),
                        }),
                      }),
                      (0, o.jsx)(p.Z, {
                        title: "Expand",
                        placement: "top",
                        children: (0, o.jsx)("div", {
                          className: "action--item",
                          onClick: Z,
                          children: (0, o.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-expand",
                          }),
                        }),
                      }),
                      (0, o.jsx)(p.Z, {
                        title: "Close",
                        placement: "top",
                        children: (0, o.jsx)("div", {
                          className: "action--item",
                          onClick: S,
                          children: (0, o.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-times",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              b &&
                (0, o.jsx)(k, {
                  visible: b,
                  markerSelected: j,
                  mapData: h,
                  configMap: C,
                  onChangeScene: n,
                  onCancel: N,
                }),
            ],
          });
        });
      n.default = g;
    },
    8007: function (e, n, a) {
      var l = a(41799),
        o = a(828),
        i = a(85893),
        t = a(67294),
        r = a(25617),
        u = a(5152),
        c = a.n(u),
        s = a(29750),
        d = a(76725),
        f = a(7400),
        p = a(17705),
        v = a(83454),
        m = c()(
          function () {
            return a.e(4470).then(a.bind(a, 54470));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [54470];
              },
            },
          },
        ),
        k = (0, t.forwardRef)(function (e, n) {
          var a = e.configMap,
            u = e.sceneSelected,
            c = e.mapData,
            k = e.markerSelected,
            g = e.onChangeScene,
            h = (0, t.useRef)(null),
            C = (0, o.Z)((0, t.useState)(!1), 2),
            b = C[0],
            x = C[1],
            j = (0, r.v9)(f.U9),
            M = (0, t.useMemo)(
              function () {
                return (0, l.Z)({}, s.xr.radar, null == a ? void 0 : a.radar);
              },
              [null == a ? void 0 : a.radar],
            ),
            S = (0, t.useMemo)(
              function () {
                return (0, l.Z)({}, s.xr.marker, null == a ? void 0 : a.marker);
              },
              [null == a ? void 0 : a.marker],
            ),
            Z = (0, t.useMemo)(
              function () {
                try {
                  return (null == a ? void 0 : a.mapStyle)
                    ? JSON.parse((null == a ? void 0 : a.mapStyle) || "[]")
                    : [];
                } catch (e) {
                  return [];
                }
              },
              [a],
            ),
            N = (0, t.useCallback)(
              function () {
                var e = window;
                if (e.google) {
                  var n,
                    a = new e.google.maps.LatLngBounds();
                  null === (n = c.markers) ||
                    void 0 === n ||
                    n.forEach(function (e) {
                      a.extend({ lat: e.lat, lng: e.lng });
                    }),
                    h.current.fitBounds(a);
                }
              },
              [c],
            ),
            y = (0, t.useCallback)(function (e) {
              var n;
              null === (n = h.current) ||
                void 0 === n ||
                n.panTo({
                  lat: null == e ? void 0 : e.lat,
                  lng: null == e ? void 0 : e.lng,
                });
            }, []),
            P = (0, t.useCallback)(
              function (e, n) {
                var a;
                if (
                  null == n
                    ? void 0
                    : null === (a = n.marker) || void 0 === a
                      ? void 0
                      : a.target_scene_id
                ) {
                  var l = j.filter(function (e) {
                    var a;
                    return (
                      e.id ===
                      (null == n
                        ? void 0
                        : null === (a = n.marker) || void 0 === a
                          ? void 0
                          : a.target_scene_id)
                    );
                  })[0];
                  l && g(l);
                }
              },
              [j, g],
            );
          return (
            (0, t.useEffect)(
              function () {
                b && (k ? y(k) : N());
              },
              [b, k],
            ),
            (0, t.useImperativeHandle)(n, function () {
              return {
                onFitBounds: function () {
                  return N();
                },
                onPanToMarker: function (e) {
                  return y(e);
                },
              };
            }),
            (0, i.jsx)(p.pu, {
              children: (0, i.jsx)(d.ZP, {
                bootstrapURLKeys: {
                  key:
                    v.env.NEXT_PUBLIC_GOOGLE_KEY ||
                    "AIzaSyAcwcJSrJ4_PqEIJoQCtC5RP988Eka0YE8",
                },
                draggable: !0,
                defaultCenter: { lat: 0, lng: 0 },
                defaultZoom: 12,
                options: function () {
                  return {
                    minZoom: 2,
                    panControl: !1,
                    mapTypeControl: !1,
                    scrollwheel: !0,
                    streetViewControl: !1,
                    mapTypeId: null == a ? void 0 : a.mapType,
                    disableDefaultUI: !0,
                    styles: Z,
                  };
                },
                scrollWheelZoom: "center",
                yesIWantToUseGoogleMapApiInternals: !0,
                onGoogleApiLoaded: function (e) {
                  var n = e.map;
                  (h.current = n), x(!0);
                },
                onChildClick: P,
                children:
                  null == c
                    ? void 0
                    : c.markers.map(function (e) {
                        return (0, i.jsx)(
                          m,
                          {
                            lat: e.lat,
                            lng: e.lng,
                            marker: e,
                            configRadar: M,
                            configMarker: S,
                            northRadar: null == u ? void 0 : u.north_ath,
                            isTurnOnRadar: M.isEnabled,
                            isActive: (null == k ? void 0 : k.id) === e.id,
                          },
                          e.id,
                        );
                      }),
              }),
            })
          );
        });
      n.Z = (0, t.memo)(k);
    },
    28100: function (e, n, a) {
      a.d(n, {
        m: function () {
          return s;
        },
      });
      var l = a(41799),
        o = a(69396),
        i = a(828),
        t = a(67294),
        r = a(25617),
        u = a(5239),
        c = a(7400),
        s = function () {
          var e = (0, r.v9)(c.CE),
            n = (0, r.v9)(c.F7),
            a = (0, r.v9)(c.Y2),
            s = (0, i.Z)((0, u.gU)("state"), 2)[1],
            d = (0, t.useMemo)(
              function () {
                var n;
                return (
                  (null == e
                    ? void 0
                    : null === (n = e.markers) || void 0 === n
                      ? void 0
                      : n.filter(function (e) {
                          return (
                            e.target_scene_id === (null == a ? void 0 : a.id)
                          );
                        })[0]) || void 0
                );
              },
              [e, a],
            ),
            f = (0, t.useMemo)(
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
            p = (0, t.useMemo)(
              function () {
                var e;
                return (null == n
                  ? void 0
                  : null === (e = n.map) || void 0 === e
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
                      null == n ? void 0 : n.map,
                    )
                  : void 0;
              },
              [null == n ? void 0 : n.map],
            ),
            v = (0, i.Z)((0, t.useState)(!1), 2),
            m = v[0],
            k = v[1],
            g = (0, t.useCallback)(
              function () {
                s(function (e) {
                  return (0, o.Z)((0, l.Z)({}, e), { isVisibleMap: !1 });
                });
              },
              [s],
            ),
            h = (0, t.useCallback)(function () {
              return k(!0);
            }, []),
            C = (0, t.useCallback)(function () {
              return k(!1);
            }, []);
          return (0, t.useMemo)(
            function () {
              return {
                visiblePopup: m,
                sceneSelected: a,
                markerSelected: d,
                configMap: n,
                configDisplayBox: p,
                mapData: e,
                configDisplayPanel: f,
                onCloseMap: g,
                onClosePopup: C,
                onOpenPopup: h,
              };
            },
            [m, a, d, n, p, e, f, g, C, h],
          );
        };
    },
  },
]);
//# sourceMappingURL=8630.d75d6eb1925e6357.js.map
