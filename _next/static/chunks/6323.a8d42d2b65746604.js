"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6323],
  {
    36323: function (n, o, i) {
      var e = i(41799),
        t = i(828),
        l = i(85893),
        c = i(27556),
        a = i(67294),
        v = i(5239),
        u = i(29750),
        r = i(39252),
        d = (0, a.forwardRef)(function (n, o) {
          var i = n.scene,
            d = n.urlTour,
            s = n.divId,
            f = void 0 === s ? "container" : s,
            g = n.krpanoId,
            m = void 0 === g ? "krpanoContainer" : g,
            p = n.nadirConfig,
            h = n.children,
            w = n.styleContainer,
            E = (0, a.useRef)(null),
            b = (0, t.Z)((0, a.useState)(), 2),
            _ = b[0],
            k = b[1],
            P = (0, t.Z)((0, v.FN)("zoom"), 1)[0],
            y = (0, t.Z)((0, v.EB)("hlookat"), 1)[0],
            S = (0, t.Z)((0, v.Oj)("vlookat"), 1)[0],
            x = c.sk ? void 0 : window,
            I = (0, a.useCallback)(
              function () {
                Object.entries(u.$i).forEach(function (n) {
                  var o = (0, t.Z)(n, 2),
                    e = o[0];
                  Object.entries(o[1]).forEach(function (n) {
                    var o = (0, t.Z)(n, 2),
                      l = o[0],
                      c = o[1],
                      a =
                        i &&
                        (null == i ? void 0 : i.configPlugin) &&
                        (null == i ? void 0 : i.configPlugin[e]) &&
                        (null == i ? void 0 : i.configPlugin[e][l])
                          ? null == i
                            ? void 0
                            : i.configPlugin[e][l]
                          : c;
                    x[m].set("plugin[".concat(e, "].").concat(l), a);
                  });
                });
              },
              [x, m, i],
            ),
            T = (0, a.useCallback)(
              function () {
                var n,
                  o,
                  e,
                  t,
                  l,
                  c,
                  a,
                  v,
                  u,
                  r,
                  d,
                  s,
                  f,
                  g,
                  m,
                  p,
                  h,
                  w,
                  E,
                  b,
                  _ =
                    (null == i
                      ? void 0
                      : null === (n = i.config) || void 0 === n
                        ? void 0
                        : n.typeTransition) === "3d"
                      ? "OPENBLEND(0.5, 0.0, 0.75, 0.05, linear)"
                      : null == i
                        ? void 0
                        : null === (o = i.config) || void 0 === o
                          ? void 0
                          : o.typeTransition,
                  k = "<view ",
                  x =
                    (null == i
                      ? void 0
                      : null === (e = i.config) || void 0 === e
                        ? void 0
                        : null === (t = e.default_view) || void 0 === t
                          ? void 0
                          : t.zoom_lv) || 90;
                return {
                  view: (k +=
                    ' hlookat="'.concat(y || 0, '"') +
                    ' vlookat="'.concat(S || 0, '"') +
                    ' fov="'.concat(P || 90, '"') +
                    ' fovmin="'.concat(
                      (null == i
                        ? void 0
                        : null === (l = i.config) || void 0 === l
                          ? void 0
                          : null === (c = l.zoom_limit) || void 0 === c
                            ? void 0
                            : c.min) !== void 0
                        ? i.config.zoom_limit.min
                        : 60,
                      '"',
                    ) +
                    ' fovmax="\n          '.concat(
                      (null == i
                        ? void 0
                        : null === (a = i.config) || void 0 === a
                          ? void 0
                          : null === (v = a.zoom_limit) || void 0 === v
                            ? void 0
                            : v.max) !== void 0
                        ? i.config.zoom_limit.max
                        : 150,
                      '"',
                    ) +
                    ' limitview="range"' +
                    ' hlookatmin="'.concat(
                      (null == i
                        ? void 0
                        : null === (u = i.config) || void 0 === u
                          ? void 0
                          : null === (r = u.limit_view) || void 0 === r
                            ? void 0
                            : r.left) !== void 0
                        ? null == i
                          ? void 0
                          : null === (d = i.config) || void 0 === d
                            ? void 0
                            : d.limit_view.left
                        : -180,
                      '"',
                    ) +
                    ' hlookatmax="'.concat(
                      (null == i
                        ? void 0
                        : null === (s = i.config) || void 0 === s
                          ? void 0
                          : null === (f = s.limit_view) || void 0 === f
                            ? void 0
                            : f.right) !== void 0
                        ? null == i
                          ? void 0
                          : null === (g = i.config) || void 0 === g
                            ? void 0
                            : g.limit_view.right
                        : 180,
                      '"',
                    ) +
                    ' vlookatmin="'.concat(
                      (null == i
                        ? void 0
                        : null === (m = i.config) || void 0 === m
                          ? void 0
                          : null === (p = m.limit_view) || void 0 === p
                            ? void 0
                            : p.bottom) !== void 0
                        ? null == i
                          ? void 0
                          : null === (h = i.config) || void 0 === h
                            ? void 0
                            : h.limit_view.bottom
                        : 90,
                      '"',
                    ) +
                    ' vlookatmax="'.concat(
                      (null == i
                        ? void 0
                        : null === (w = i.config) || void 0 === w
                          ? void 0
                          : null === (E = w.limit_view) || void 0 === E
                            ? void 0
                            : E.top) !== void 0
                        ? null == i
                          ? void 0
                          : null === (b = i.config) || void 0 === b
                            ? void 0
                            : b.limit_view.top
                        : -90,
                      '"',
                    ) +
                    " />"),
                  transition: _,
                  fovDefault: x,
                };
              },
              [i, y, S, P],
            ),
            C = (0, a.useCallback)(
              function (n) {
                if (n && n.media && _) {
                  var o,
                    e,
                    t,
                    l,
                    c,
                    a,
                    v,
                    r,
                    s,
                    f,
                    g,
                    m,
                    p,
                    h,
                    w,
                    E,
                    b,
                    k,
                    y,
                    S,
                    x,
                    I,
                    C,
                    N,
                    O,
                    K,
                    D,
                    G,
                    Z,
                    L,
                    z,
                    B,
                    $,
                    j,
                    A,
                    R,
                    V = T(),
                    M = V.transition,
                    F = V.view;
                  _.loadScene(
                    d,
                    null,
                    n.media.krpano_xml || null,
                    M,
                    "".concat(F, "\n              ").concat(
                      (null === (o = i.configPlugin) || void 0 === o
                        ? void 0
                        : null === (e = o.lensflare) || void 0 === e
                          ? void 0
                          : e.enabled) &&
                        (null === (t = i.configPlugin) || void 0 === t
                          ? void 0
                          : null === (l = t.lensflare) || void 0 === l
                            ? void 0
                            : l.ath) &&
                        (null === (c = i.configPlugin) || void 0 === c
                          ? void 0
                          : null === (a = c.lensflare) || void 0 === a
                            ? void 0
                            : a.atv)
                        ? '<include url="%$mypath%/core/skin/lensflare.xml" />\n                <lensflare_settings editor="false" ath="'
                            .concat(
                              (null === (v = i.configPlugin) || void 0 === v
                                ? void 0
                                : null === (r = v.lensflare) || void 0 === r
                                  ? void 0
                                  : r.ath) !== void 0
                                ? null === (s = i.configPlugin) || void 0 === s
                                  ? void 0
                                  : null === (f = s.lensflare) || void 0 === f
                                    ? void 0
                                    : f.ath
                                : null === (g = u.$i.lensflare) || void 0 === g
                                  ? void 0
                                  : g.ath,
                              '" atv="',
                            )
                            .concat(
                              (null === (m = i.configPlugin) || void 0 === m
                                ? void 0
                                : null === (p = m.lensflare) || void 0 === p
                                  ? void 0
                                  : p.atv) !== void 0
                                ? null === (h = i.configPlugin) || void 0 === h
                                  ? void 0
                                  : null === (w = h.lensflare) || void 0 === w
                                    ? void 0
                                    : w.atv
                                : null === (E = u.$i.lensflare) || void 0 === E
                                  ? void 0
                                  : E.atv,
                              '" sun="',
                            )
                            .concat(
                              (null === (b = i.configPlugin) || void 0 === b
                                ? void 0
                                : null === (k = b.lensflare) || void 0 === k
                                  ? void 0
                                  : k.sun) !== void 0
                                ? null === (y = i.configPlugin) || void 0 === y
                                  ? void 0
                                  : null === (S = y.lensflare) || void 0 === S
                                    ? void 0
                                    : S.sun
                                : null === (x = u.$i.lensflare) || void 0 === x
                                  ? void 0
                                  : x.sun,
                              '" glare="',
                            )
                            .concat(
                              (null === (I = i.configPlugin) || void 0 === I
                                ? void 0
                                : null === (C = I.lensflare) || void 0 === C
                                  ? void 0
                                  : C.glare) !== void 0
                                ? null === (N = i.configPlugin) || void 0 === N
                                  ? void 0
                                  : null === (O = N.lensflare) || void 0 === O
                                    ? void 0
                                    : O.glare
                                : null === (K = u.$i.lensflare) || void 0 === K
                                  ? void 0
                                  : K.glare,
                              '" r_ring="',
                            )
                            .concat(
                              (null === (D = i.configPlugin) || void 0 === D
                                ? void 0
                                : null === (G = D.lensflare) || void 0 === G
                                  ? void 0
                                  : G.r_ring) !== void 0
                                ? null === (Z = i.configPlugin) || void 0 === Z
                                  ? void 0
                                  : null === (L = Z.lensflare) || void 0 === L
                                    ? void 0
                                    : L.r_ring
                                : null === (z = u.$i.lensflare) || void 0 === z
                                  ? void 0
                                  : z.r_ring,
                              '" exposure="true" exposure_bias="',
                            )
                            .concat(
                              (null === (B = i.configPlugin) || void 0 === B
                                ? void 0
                                : null === ($ = B.lensflare) || void 0 === $
                                  ? void 0
                                  : $.exposure_bias) !== void 0
                                ? null === (j = i.configPlugin) || void 0 === j
                                  ? void 0
                                  : null === (A = j.lensflare) || void 0 === A
                                    ? void 0
                                    : A.exposure_bias
                                : null === (R = u.$i.lensflare) || void 0 === R
                                  ? void 0
                                  : R.exposure_bias,
                              '"/>\n                <plugin name="pp_light" devices="html5" keep="false"\n                  url="%$mypath%/core/plugins/pp_light.js"\n                  enabled="true"\n                  exposure="0.0"\n                  lights="0.0"\n                  shadows="0.0"\n                  filterrange="60.0"\n                  masking="1.0"\n                  quality="7"\n                  order=""\n                  phase="2"\n                />',
                            )
                        : "",
                      "\n          ",
                    ),
                    P || 90,
                  );
                }
              },
              [T, _, i, d, P],
            ),
            N = (0, a.useCallback)(
              function () {
                var n = x[m],
                  o = "nadirlogo";
                n.set("hotspot['".concat(o, "'].ath"), 0),
                  n.set("hotspot['".concat(o, "'].atv"), 90),
                  n.set("hotspot['".concat(o, "'].zoom"), !1),
                  n.set(
                    "hotspot['".concat(o, "'].scale"),
                    (null == p ? void 0 : p.scale) || 1,
                  ),
                  n.set("hotspot['".concat(o, "'].rotatewithview"), "true"),
                  n.set("hotspot['".concat(o, "'].distorted"), !0),
                  n.set(
                    "hotspot['".concat(o, "'].url"),
                    (null == p ? void 0 : p.src) || "",
                  ),
                  n.set(
                    "hotspot['".concat(o, "'].visible"),
                    !!(
                      (null == p ? void 0 : p.isEnabled) &&
                      (null == p ? void 0 : p.src)
                    ),
                  ),
                  (null == p ? void 0 : p.link) &&
                    n.set("hotspot['".concat(o, "'].onclick"), function () {
                      window.open(null == p ? void 0 : p.link, "_blank");
                    }),
                  (null == p ? void 0 : p.isEnabled) &&
                    (null == p ? void 0 : p.src) &&
                    n.call("addhotspot('".concat(o, "')"));
              },
              [x, m, p],
            ),
            O = (0, a.useCallback)(
              function () {
                i &&
                  (I(),
                  x[m].set("view.limitview", "range"),
                  x[m].set("showerrors", !1),
                  x[m].call("followmouse_disable()"),
                  N());
              },
              [i, x, m, I, N],
            );
          return (
            (0, a.useImperativeHandle)(o, function () {
              return {
                getContainer: function () {
                  return E.current;
                },
                viewPlanet: function () {
                  x[m].call("cm_littleplanet_view");
                },
                viewNormal: function () {
                  x[m].call("cm_normal_view");
                },
                viewMirrorBall: function () {
                  x[m].call("mirror_ball_view");
                },
                viewFullscreen: function () {
                  x[m].call("switch(fullscreen)");
                },
                viewWebvr: function () {
                  x[m].call("webvr.enterVR()");
                },
                toggleGyro: function () {
                  x[m].call("toggleGyroscope()");
                },
                startAutoRotate: function (n) {
                  var o = n.speed,
                    i = n.wait_time;
                  x[m].call(
                    "startrotation("
                      .concat(void 0 === o ? 10 : o, ", ")
                      .concat(void 0 === i ? 20 : i, ")"),
                  );
                },
                stopAutoRotate: function () {
                  x[m].call("stoprotation");
                },
                toLeft: function () {
                  x[m].call("set(hlookat_moveforce,-0.75)");
                },
                toRight: function () {
                  x[m].call("set(hlookat_moveforce,+0.75)");
                },
                stopToHorizontal: function () {
                  x[m].call("set(hlookat_moveforce,0)");
                },
                toUp: function () {
                  x[m].call("set(vlookat_moveforce,-0.75)");
                },
                toDown: function () {
                  x[m].call("set(vlookat_moveforce,+0.75)");
                },
                stopToVertical: function () {
                  x[m].call("set(vlookat_moveforce,0)");
                },
              };
            }),
            (0, a.useEffect)(
              function () {
                !_ && m && k((0, r.Z)(m));
              },
              [_, m],
            ),
            (0, a.useEffect)(
              function () {
                _ &&
                  _.init(f, "".concat("/static", "/core/tour.xml"), {
                    mypath: "/static",
                  });
              },
              [_, f],
            ),
            (0, a.useEffect)(
              function () {
                _ && d && i && C(i);
              },
              [d, _],
            ),
            (0, a.useEffect)(
              function () {
                return (
                  x[m] && _ && x[m].addEventListener("onloadcomplete", O),
                  function () {
                    x[m] && x[m].removeEventListener("onloadcomplete", O);
                  }
                );
              },
              [_, i],
            ),
            (0, a.useEffect)(
              function () {
                return function () {
                  _ && _.removePano();
                };
              },
              [_],
            ),
            (0, l.jsx)("div", {
              id: f,
              ref: E,
              style: (0, e.Z)(
                {},
                { width: "100%", height: "250px" },
                void 0 === w ? { height: "100%" } : w,
              ),
              children: h,
            })
          );
        });
      o.Z = (0, a.memo)(d);
    },
    39252: function (n, o, i) {
      i.d(o, {
        Z: function () {
          return l;
        },
      });
      var e = i(828),
        t = i(29815);
      function l(n) {
        var o = function () {
            return document.getElementById(n);
          },
          i = function (n, i, e) {
            if ("function" == typeof i && null !== o()) {
              if (e)
                try {
                  o().set("events['".concat(e, "'].").concat(n), i);
                } catch (n) {}
              else
                try {
                  o().set("events.".concat(n), i);
                } catch (n) {}
            }
          };
        return {
          init: function (e, l, c) {
            var a = {};
            c && (a = c), (a["image.prealign"] = ""), (a.panoId = n);
            try {
              if (
                (window.embedpano({
                  target: e,
                  html5: "auto",
                  xml: l,
                  bgcolor: "#ffffff",
                  id: n,
                  vars: a,
                  initvars: c,
                  consolelog: !1,
                }),
                window.listKrpanoInstance)
              ) {
                var v = window.listKrpanoInstance;
                window.listKrpanoInstance = (0, t.Z)(v).concat([n]);
              } else window.listKrpanoInstance = [n];
            } catch (n) {}
            i("onloadcomplete", function () {
              var n = new Event("onloadcomplete");
              o() && o().dispatchEvent(n);
            }),
              i("onviewchange", function () {
                var n = new Event("onviewchange");
                o() && o().dispatchEvent(n);
              }),
              i("ondoubleclick", function () {
                var n = new Event("ondoubleclick");
                o() && o().dispatchEvent(n);
              }),
              i("onmousewheel", function () {
                var n = new Event("onmousewheel");
                o() && o().dispatchEvent(n);
              }),
              i("onmouseup", function () {
                var n = new Event("onmouseup");
                o() && o().dispatchEvent(n);
              }),
              i("onmousedown", function () {
                var n = new Event("onmousedown");
                o() && o().dispatchEvent(n);
              }),
              i("onnewpanovr", function () {
                var n = new Event("onnewpanovr");
                o() && o().dispatchEvent(n);
              }),
              (window[n] = o());
          },
          krpano: o(),
          loadScene: function (n, i, t) {
            var l =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "NOBLEND",
              c =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : "<view />",
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : "",
              v =
                arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : [],
              u =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : {},
              r =
                arguments.length > 8 && void 0 !== arguments[8]
                  ? arguments[8]
                  : 90,
              d = "";
            i
              ? Object.entries(i).forEach(function (n) {
                  var o = (0, e.Z)(n, 2),
                    i = o[0],
                    t = o[1];
                  d += "".concat(i, "=").concat(t, "&");
                })
              : (i = null);
            var s = '<krpano syncother="false">';
            (s +=
              '<include url="%$mypath%/core/sync.xml" />\n    <action name="startup">\n      clearinterval(day2dust);\n    '),
              "day2dust" === a &&
                v.length &&
                (s += "setinterval(day2dust, "
                  .concat(
                    u.durationTime || 3,
                    ',\n              if(sceneActive === "01", loadscene(00, null, MERGE|KEEPMOVE|KEEPVIEW|KEEPHOTSPOTS, BLEND(',
                  )
                  .concat(
                    u.waitTime || 0.01,
                    ", easeInCubic));, loadscene(01, null, MERGE|KEEPMOVE|KEEPVIEW|KEEPHOTSPOTS, BLEND(",
                  )
                  .concat(u.waitTime || 0.01, ", easeInCubic));););")),
              (s += "</action>"),
              t
                ? (s += "\n        "
                    .concat(t)
                    .concat(
                      c,
                      '\n        <scene name="00" onstart="set(sceneActive, 00)" nogrid="true">\n          ',
                    )
                    .concat(t)
                    .concat(c, "\n        </scene>\n      "))
                : (s += '\n        <preview url="'
                    .concat(n, '" />\n          <image><sphere url="')
                    .concat(n, '" /></image>\n          ')
                    .concat(
                      c,
                      '\n        <scene name="00" onstart="set(sceneActive, 00)" nogrid="true">\n          <preview url="',
                    )
                    .concat(n, '" />\n          <image><sphere url="')
                    .concat(n, '" /></image>\n          ')
                    .concat(c, "\n        </scene>\n      ")),
              "day2dust" === a &&
                v.length &&
                v.forEach(function (n, o) {
                  s += n.xml
                    ? '<scene name="0'
                        .concat(o + 1, '" onstart="set(sceneActive, 0')
                        .concat(o + 1, ')" nogrid="true">\n              ')
                        .concat(n.xml)
                        .concat(c, "\n            </scene>")
                    : '<scene name="0'
                        .concat(o + 1, '" onstart="set(sceneActive, 0')
                        .concat(
                          o + 1,
                          ')" nogrid="true">\n              <preview url="',
                        )
                        .concat(
                          n.urlTour,
                          '" />\n              <image><sphere url="',
                        )
                        .concat(n.urlTour, '" /></image>\n              ')
                        .concat(c, "\n          </scene>");
                }),
              "staging" === a &&
                v.length &&
                "" === u.modeDisplay &&
                v.forEach(function (n, o) {
                  s += n.xml
                    ? '<scene name="0'
                        .concat(o + 1, '" nogrid="true">\n              ')
                        .concat(n.xml)
                        .concat(c, "\n            </scene>")
                    : '<scene name="0'
                        .concat(
                          o + 1,
                          '" nogrid="true">\n              <preview url="',
                        )
                        .concat(
                          n.urlTour,
                          '" />\n              <image><sphere url="',
                        )
                        .concat(n.urlTour, '" /></image>\n              ')
                        .concat(c, "\n          </scene>");
                }),
              (s +=
                '<hotspot name="hotspot_media_overlay" zorder="1" distorted="true" ath="0" atv="0" enabled="false" type="text" renderer="webgl" bgcolor="0x000000" bgalpha="1.0" width="100%" height="100%" alpha="0.85" scale="1" flying="1" visible="false" /></krpano>'),
              o().call(
                "\n        "
                  .concat(
                    "OPENBLEND(0.5, 0.0, 0.75, 0.05, linear)" === l
                      ? "wait(1.1)"
                      : "",
                    ";\n        loadxml(",
                  )
                  .concat(s, ", ")
                  .concat(d || null, ", KEEPPLUGINS, ")
                  .concat(l, ', startup);\n        set("view.fov", ')
                  .concat(r, ");\n        ")
                  .concat(
                    "OPENBLEND(0.5, 0.0, 0.75, 0.05, linear)" === l
                      ? "wait(0.25);\n            trace(view.fov);\n            tween(view.fov, ".concat(
                          r,
                          ", 2);",
                        )
                      : "",
                    ";\n\n      ",
                  ),
              );
          },
          removePano: function () {
            window.listKrpanoInstance &&
              (window.listKrpanoInstance = window.listKrpanoInstance.filter(
                function (o) {
                  return o !== n;
                },
              )),
              window.removepano(n);
          },
        };
      }
    },
    5239: function (n, o, i) {
      i.d(o, {
        EB: function () {
          return l;
        },
        FN: function () {
          return c;
        },
        Oj: function () {
          return t;
        },
        gU: function () {
          return u;
        },
        tf: function () {
          return v;
        },
        yG: function () {
          return a;
        },
      });
      var e = i(62845),
        t = (0, e.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, e.r8)({ hlookat: void 0 }).useGlobalState,
        c = (0, e.r8)({ zoom: void 0 }).useGlobalState,
        a = (0, e.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        v = (0, e.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        u = (0, e.r8)({
          state: {
            isLoaded: !1,
            idPostProjectSelected: "",
            visibleDialogPostProject: !1,
            idPostSceneSelected: "",
            visibleDialogPostScene: !1,
            isSoundOnScene: !1,
            isVisibleMap: !0,
            isVisibleFloorplan: !0,
            isVisiblePopupIntro: void 0,
            isActiveModeMultipleStaging: !1,
          },
        }).useGlobalState;
    },
  },
]);
//# sourceMappingURL=6323.a8d42d2b65746604.js.map
