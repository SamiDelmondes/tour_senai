"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9840],
  {
    89840: function (e, n, o) {
      o.r(n);
      var t = o(828),
        a = o(85893),
        l = o(67294),
        i = o(29750),
        r = o(5152),
        u = o.n(r),
        c = o(5239),
        s = o(28100),
        d = o(25617),
        f = o(7400),
        p = o(77939),
        v = o(17705),
        m = o(8007),
        h = {
          normal: { width: 220, height: 160 },
          scale: { width: 500, height: 390 },
        },
        g = u()(
          function () {
            return o.e(8749).then(o.bind(o, 48943));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [48943];
              },
            },
          },
        ),
        k = (0, l.memo)(function (e) {
          var n = e.onChangeScene,
            o = (0, l.useRef)(null),
            r = (0, d.v9)(f.AA),
            u = (0, t.Z)((0, c.gU)("state"), 1)[0],
            k = (0, s.m)(),
            C = k.mapData,
            b = k.configMap,
            x = k.visiblePopup,
            M = k.sceneSelected,
            j = k.markerSelected,
            w = k.configDisplayBox,
            S = k.onCloseMap,
            Z = k.onOpenPopup,
            y = k.onClosePopup,
            P = (0, l.useRef)(!1),
            N = (0, t.Z)((0, l.useState)(h.normal), 2),
            T = N[0],
            _ = N[1],
            E = (0, l.useCallback)(function () {
              var e;
              null === (e = o.current) || void 0 === e || e.onFitBounds();
            }, []),
            R = (0, l.useCallback)(
              function () {
                var e;
                null === (e = o.current) || void 0 === e || e.onPanToMarker(j);
              },
              [j],
            );
          return (0, a.jsxs)(v.Yq, {
            bgColor: (null == b ? void 0 : b.bgColor) || i.xr.bgColor,
            position: w.position || "bottomRight",
            offsetTop: w.offsetTop || 10,
            offsetBottom: w.offsetBottom || 10,
            offsetRight: w.offsetRight || 10,
            offsetLeft: w.offsetLeft || 10,
            onMouseOver: function () {
              return _(h.scale);
            },
            onMouseLeave: function () {
              _(h.normal),
                setTimeout(function () {
                  var e;
                  j &&
                    !P.current &&
                    (null === (e = o.current) ||
                      void 0 === e ||
                      e.onPanToMarker(j));
                }, 200);
            },
            style: {
              width: "".concat(T.width, "px"),
              height: "".concat(T.height, "px"),
            },
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
              (0, a.jsxs)(v.Nh, {
                style: {
                  zIndex: T.width === h.scale.width ? 1 : -1,
                  opacity: T.width === h.scale.width ? 1 : 0,
                },
                onMouseOver: function (e) {
                  e.stopPropagation(), (P.current = !0);
                },
                onMouseLeave: function (e) {
                  e.stopPropagation(), (P.current = !1);
                },
                children: [
                  (0, a.jsx)("div", { className: "--left" }),
                  (0, a.jsxs)("div", {
                    className: "--right",
                    children: [
                      (0, a.jsx)(p.Z, {
                        title: "Point To Marker Active",
                        placement: "top",
                        children: (0, a.jsx)("div", {
                          className: "action--item",
                          onClick: R,
                          children: (0, a.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-crosshairs",
                          }),
                        }),
                      }),
                      (0, a.jsx)(p.Z, {
                        title: "Fit map to cover all marker",
                        placement: "top",
                        children: (0, a.jsx)("div", {
                          className: "action--item",
                          onClick: E,
                          children: (0, a.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-ball-pile",
                          }),
                        }),
                      }),
                      (0, a.jsx)(p.Z, {
                        title: "Expand",
                        placement: "top",
                        children: (0, a.jsx)("div", {
                          className: "action--item",
                          onClick: Z,
                          children: (0, a.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-expand",
                          }),
                        }),
                      }),
                      (0, a.jsx)(p.Z, {
                        title: "Close",
                        placement: "top",
                        children: (0, a.jsx)("div", {
                          className: "action--item",
                          onClick: S,
                          children: (0, a.jsx)("i", {
                            "aria-hidden": !0,
                            className: "far fa-times",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(m.Z, {
                ref: o,
                mapData: C,
                sceneSelected: M,
                markerSelected: j,
                configMap: b,
                onChangeScene: n,
              }),
              x &&
                (0, a.jsx)(g, {
                  visible: x,
                  markerSelected: j,
                  mapData: C,
                  configMap: b,
                  onChangeScene: n,
                  onCancel: y,
                }),
            ],
          });
        });
      n.default = k;
    },
    8007: function (e, n, o) {
      var t = o(41799),
        a = o(828),
        l = o(85893),
        i = o(67294),
        r = o(25617),
        u = o(5152),
        c = o.n(u),
        s = o(29750),
        d = o(76725),
        f = o(7400),
        p = o(17705),
        v = o(83454),
        m = c()(
          function () {
            return o.e(4470).then(o.bind(o, 54470));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [54470];
              },
            },
          },
        ),
        h = (0, i.forwardRef)(function (e, n) {
          var o = e.configMap,
            u = e.sceneSelected,
            c = e.mapData,
            h = e.markerSelected,
            g = e.onChangeScene,
            k = (0, i.useRef)(null),
            C = (0, a.Z)((0, i.useState)(!1), 2),
            b = C[0],
            x = C[1],
            M = (0, r.v9)(f.U9),
            j = (0, i.useMemo)(
              function () {
                return (0, t.Z)({}, s.xr.radar, null == o ? void 0 : o.radar);
              },
              [null == o ? void 0 : o.radar],
            ),
            w = (0, i.useMemo)(
              function () {
                return (0, t.Z)({}, s.xr.marker, null == o ? void 0 : o.marker);
              },
              [null == o ? void 0 : o.marker],
            ),
            S = (0, i.useMemo)(
              function () {
                try {
                  return (null == o ? void 0 : o.mapStyle)
                    ? JSON.parse((null == o ? void 0 : o.mapStyle) || "[]")
                    : [];
                } catch (e) {
                  return [];
                }
              },
              [o],
            ),
            Z = (0, i.useCallback)(
              function () {
                var e = window;
                if (e.google) {
                  var n,
                    o = new e.google.maps.LatLngBounds();
                  null === (n = c.markers) ||
                    void 0 === n ||
                    n.forEach(function (e) {
                      o.extend({ lat: e.lat, lng: e.lng });
                    }),
                    k.current.fitBounds(o);
                }
              },
              [c],
            ),
            y = (0, i.useCallback)(function (e) {
              var n;
              null === (n = k.current) ||
                void 0 === n ||
                n.panTo({
                  lat: null == e ? void 0 : e.lat,
                  lng: null == e ? void 0 : e.lng,
                });
            }, []),
            P = (0, i.useCallback)(
              function (e, n) {
                var o;
                if (
                  null == n
                    ? void 0
                    : null === (o = n.marker) || void 0 === o
                      ? void 0
                      : o.target_scene_id
                ) {
                  var t = M.filter(function (e) {
                    var o;
                    return (
                      e.id ===
                      (null == n
                        ? void 0
                        : null === (o = n.marker) || void 0 === o
                          ? void 0
                          : o.target_scene_id)
                    );
                  })[0];
                  t && g(t);
                }
              },
              [M, g],
            );
          return (
            (0, i.useEffect)(
              function () {
                b && (h ? y(h) : Z());
              },
              [b, h],
            ),
            (0, i.useImperativeHandle)(n, function () {
              return {
                onFitBounds: function () {
                  return Z();
                },
                onPanToMarker: function (e) {
                  return y(e);
                },
              };
            }),
            (0, l.jsx)(p.pu, {
              children: (0, l.jsx)(d.ZP, {
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
                    mapTypeId: null == o ? void 0 : o.mapType,
                    disableDefaultUI: !0,
                    styles: S,
                  };
                },
                scrollWheelZoom: "center",
                yesIWantToUseGoogleMapApiInternals: !0,
                onGoogleApiLoaded: function (e) {
                  var n = e.map;
                  (k.current = n), x(!0);
                },
                onChildClick: P,
                children:
                  null == c
                    ? void 0
                    : c.markers.map(function (e) {
                        return (0, l.jsx)(
                          m,
                          {
                            lat: e.lat,
                            lng: e.lng,
                            marker: e,
                            configRadar: j,
                            configMarker: w,
                            northRadar: null == u ? void 0 : u.north_ath,
                            isTurnOnRadar: j.isEnabled,
                            isActive: (null == h ? void 0 : h.id) === e.id,
                          },
                          e.id,
                        );
                      }),
              }),
            })
          );
        });
      n.Z = (0, i.memo)(h);
    },
    28100: function (e, n, o) {
      o.d(n, {
        m: function () {
          return s;
        },
      });
      var t = o(41799),
        a = o(69396),
        l = o(828),
        i = o(67294),
        r = o(25617),
        u = o(5239),
        c = o(7400),
        s = function () {
          var e = (0, r.v9)(c.CE),
            n = (0, r.v9)(c.F7),
            o = (0, r.v9)(c.Y2),
            s = (0, l.Z)((0, u.gU)("state"), 2)[1],
            d = (0, i.useMemo)(
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
            f = (0, i.useMemo)(
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
            p = (0, i.useMemo)(
              function () {
                var e;
                return (null == n
                  ? void 0
                  : null === (e = n.map) || void 0 === e
                    ? void 0
                    : e.type) === "box"
                  ? (0, t.Z)(
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
            v = (0, l.Z)((0, i.useState)(!1), 2),
            m = v[0],
            h = v[1],
            g = (0, i.useCallback)(
              function () {
                s(function (e) {
                  return (0, a.Z)((0, t.Z)({}, e), { isVisibleMap: !1 });
                });
              },
              [s],
            ),
            k = (0, i.useCallback)(function () {
              return h(!0);
            }, []),
            C = (0, i.useCallback)(function () {
              return h(!1);
            }, []);
          return (0, i.useMemo)(
            function () {
              return {
                visiblePopup: m,
                sceneSelected: o,
                markerSelected: d,
                configMap: n,
                configDisplayBox: p,
                mapData: e,
                configDisplayPanel: f,
                onCloseMap: g,
                onClosePopup: C,
                onOpenPopup: k,
              };
            },
            [m, o, d, n, p, e, f, g, C, k],
          );
        };
    },
  },
]);
//# sourceMappingURL=9840.a3eb7226b47f6379.js.map
