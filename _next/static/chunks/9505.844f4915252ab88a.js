"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9505],
  {
    79505: function (n, o, e) {
      e.d(o, {
        Q: function () {
          return f;
        },
      });
      var t = e(41799),
        l = e(69396),
        u = e(828),
        i = e(67294),
        c = e(25617),
        a = e(67653),
        r = e(5239),
        s = e(7400),
        d = e(33207),
        f = function (n) {
          var o = n.krpanoRef,
            e = (0, c.I0)(),
            f = (0, c.v9)(s.dm),
            v = (0, c.v9)(s.iV),
            g = (0, c.v9)(s.Nf),
            b = (0, c.v9)(s.M9),
            S = (0, c.v9)(s.Fr),
            p = (0, c.v9)(s.Y2),
            C = (0, c.v9)(s.f5),
            k = (0, c.v9)(s.F7),
            m = (0, u.Z)((0, r.tf)("stats"), 2)[1],
            h = (0, u.Z)((0, r.gU)("state"), 2),
            Z = h[0],
            w = h[1],
            M = (0, a.Z)({}).onCheckShowFormCaptureOnHotspot,
            P = (0, i.useRef)(null),
            A = (0, i.useMemo)(
              function () {
                var n;
                return (
                  (null == p
                    ? void 0
                    : null === (n = p.hotspots) || void 0 === n
                      ? void 0
                      : n.some(function (n) {
                          var o, e, t, l, u, i, c, a, r, s, d;
                          return (
                            ("sound" === n.type &&
                              ((null === (o = n.config) || void 0 === o
                                ? void 0
                                : null === (e = o.sound) || void 0 === e
                                  ? void 0
                                  : e.file) ||
                                (null === (t = n.config) || void 0 === t
                                  ? void 0
                                  : null === (l = t.sound) || void 0 === l
                                    ? void 0
                                    : l.url))) ||
                            ("instructor" === n.type &&
                              (null === (u = n.config) || void 0 === u
                                ? void 0
                                : null === (i = u.instructor) || void 0 === i
                                  ? void 0
                                  : i.media)) ||
                            ("media" === n.type &&
                              (null === (c = n.config) || void 0 === c
                                ? void 0
                                : null === (a = c.media) || void 0 === a
                                  ? void 0
                                  : a.type) === "media-video" &&
                              (null === (r = n.config) || void 0 === r
                                ? void 0
                                : null === (s = r.media) || void 0 === s
                                  ? void 0
                                  : null === (d = s.media) || void 0 === d
                                    ? void 0
                                    : d.src))
                          );
                        })) ||
                  !!(null == b ? void 0 : b.background_sound) ||
                  !!(null == p ? void 0 : p.background_sound)
                );
              },
              [b, p],
            ),
            D = (0, i.useMemo)(
              function () {
                return !!(null == b ? void 0 : b.post);
              },
              [b],
            ),
            R = (0, i.useMemo)(
              function () {
                return !!(null == p ? void 0 : p.post);
              },
              [p],
            ),
            T = (0, i.useMemo)(
              function () {
                return !!(null == k ? void 0 : k.isEnabled);
              },
              [k],
            ),
            I = (0, i.useMemo)(
              function () {
                return !!C.length;
              },
              [C],
            ),
            O = (0, i.useMemo)(
              function () {
                var n, o, e;
                return !!(
                  (null == p ? void 0 : p.mode) === "staging" &&
                  (null == p
                    ? void 0
                    : null === (n = p.staging) || void 0 === n
                      ? void 0
                      : n.length) &&
                  (null == p
                    ? void 0
                    : null === (o = p.staging) || void 0 === o
                      ? void 0
                      : o.filter(function (n) {
                          return n.media;
                        }).length) &&
                  (null == p
                    ? void 0
                    : null === (e = p.configStaging) || void 0 === e
                      ? void 0
                      : e.modeDisplay)
                );
              },
              [p],
            ),
            V = (0, i.useMemo)(
              function () {
                return A;
              },
              [A],
            ),
            _ = (0, i.useMemo)(
              function () {
                return !!(null == p ? void 0 : p.background_sound);
              },
              [p],
            ),
            N = (0, i.useMemo)(
              function () {
                return v.enabled;
              },
              [v],
            ),
            j = (0, i.useMemo)(
              function () {
                return v.on;
              },
              [v],
            ),
            y = (0, i.useMemo)(
              function () {
                return f.enabled;
              },
              [f],
            ),
            F = (0, i.useMemo)(
              function () {
                return f.on;
              },
              [f],
            ),
            E = (0, i.useMemo)(
              function () {
                return f.waitTime;
              },
              [f],
            ),
            H = (0, i.useMemo)(
              function () {
                return f.speed;
              },
              [f],
            );
          (0, i.useEffect)(
            function () {
              P.current = v;
            },
            [v],
          );
          var G = (0, i.useCallback)(
              function (n) {
                return M(n.hotspot);
              },
              [M],
            ),
            L = (0, i.useCallback)(
              function (n) {
                var o, t;
                (null === (o = P.current) || void 0 === o
                  ? void 0
                  : o.enabled) &&
                  (null === (t = P.current) || void 0 === t ? void 0 : t.on) !==
                    n &&
                  e(d.Nw.setConfigAutoChangeScene({ on: n }));
              },
              [e],
            ),
            U = (0, i.useCallback)(
              function () {
                e(d.Nw.setSceneSelected(g));
              },
              [g, e],
            ),
            z = (0, i.useCallback)(
              function () {
                m(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    btnDirectionActive: "top",
                  });
                }),
                  null == o || o.toUp();
              },
              [o, m],
            ),
            B = (0, i.useCallback)(
              function () {
                m(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    btnDirectionActive: "left",
                  });
                }),
                  null == o || o.toLeft();
              },
              [o, m],
            ),
            q = (0, i.useCallback)(
              function () {
                m(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    btnDirectionActive: "bottom",
                  });
                }),
                  null == o || o.toDown();
              },
              [o, m],
            ),
            x = (0, i.useCallback)(
              function () {
                m(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    btnDirectionActive: "right",
                  });
                }),
                  null == o || o.toRight();
              },
              [o, m],
            ),
            Q = (0, i.useCallback)(
              function () {
                return null == o ? void 0 : o.viewWebvr();
              },
              [o],
            ),
            W = (0, i.useCallback)(
              function () {
                null == o || o.viewNormal();
              },
              [o],
            ),
            X = (0, i.useCallback)(
              function () {
                null == o || o.viewPlanet();
              },
              [o],
            ),
            Y = (0, i.useCallback)(
              function () {
                null == o || o.viewMirrorBall();
              },
              [o],
            ),
            J = (0, i.useCallback)(
              function () {
                null == o || o.toggleGyro();
              },
              [o],
            ),
            K = (0, i.useCallback)(
              function (n) {
                return null == o ? void 0 : o.removeAllChevronHotspot(n);
              },
              [o],
            ),
            $ = (0, i.useCallback)(
              function () {
                e(d.Nw.setConfigAutoRotate({ on: !1 })),
                  null == o || o.stopAutoRotate();
              },
              [e, o],
            ),
            nn = (0, i.useCallback)(
              function () {
                e(d.Nw.setConfigAutoRotate({ on: !0 })),
                  null == o || o.startAutoRotate({ speed: H, wait_time: E });
              },
              [e, o, H, E],
            ),
            no = (0, i.useCallback)(
              function () {
                nn && $ && (F ? $() : nn());
              },
              [F, nn, $],
            ),
            ne = (0, i.useCallback)(
              function () {
                m(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), { btnDirectionActive: "" });
                }),
                  null == o || o.stopToVertical();
              },
              [o, m],
            ),
            nt = (0, i.useCallback)(
              function () {
                m(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), { btnDirectionActive: "" });
                }),
                  null == o || o.stopToHorizontal();
              },
              [o, m],
            ),
            nl = (0, i.useCallback)(
              function () {
                null == o || o.viewFullscreen();
              },
              [o],
            ),
            nu = (0, i.useCallback)(
              function () {
                null == o || o.triggerSound();
              },
              [o],
            ),
            ni = (0, i.useCallback)(
              function () {
                null == o || o.destroySound();
              },
              [o],
            ),
            nc = (0, i.useCallback)(
              function () {
                null == o || o.unmuteAllSound(p);
              },
              [o, p],
            ),
            na = (0, i.useCallback)(
              function () {
                null == o || o.muteAllSound(p);
              },
              [o, p],
            ),
            nr = (0, i.useCallback)(
              function (n) {
                return w(function (o) {
                  return (0, l.Z)((0, t.Z)({}, o), { isSoundOnScene: n });
                });
              },
              [w],
            ),
            ns = (0, i.useCallback)(
              function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
                w(function (o) {
                  return (0, l.Z)((0, t.Z)({}, o), {
                    isActiveModeMultipleStaging:
                      void 0 === n ? !o.isActiveModeMultipleStaging : n,
                  });
                });
              },
              [w],
            ),
            nd = (0, i.useCallback)(
              function () {
                return nr(!0);
              },
              [nr],
            ),
            nf = (0, i.useCallback)(
              function () {
                return nr(!1);
              },
              [nr],
            ),
            nv = (0, i.useCallback)(
              function () {
                nf && nd && (Z.isSoundOnScene ? nf() : nd());
              },
              [nf, nd, Z.isSoundOnScene],
            ),
            ng = (0, i.useCallback)(
              function () {
                nc(), e(d.Nw.setConfigSoundProject({ on: !0 }));
              },
              [e, nc],
            ),
            nb = (0, i.useCallback)(
              function () {
                na(), e(d.Nw.setConfigSoundProject({ on: !1 }));
              },
              [e, na],
            ),
            nS = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    visibleDialogPostProject: !0,
                  });
                });
              },
              [w],
            ),
            np = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    visibleDialogPostProject: !1,
                  });
                });
              },
              [w],
            ),
            nC = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    idPostProjectSelected: null == b ? void 0 : b.post,
                  });
                }),
                  nS();
              },
              [b, nS, w],
            ),
            nk = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    visibleDialogPostScene: !0,
                  });
                });
              },
              [w],
            ),
            nm = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    visibleDialogPostScene: !1,
                  });
                });
              },
              [w],
            ),
            nh = (0, i.useCallback)(
              function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
                (null == p ? void 0 : p.post)
                  ? (void 0 !== n && n) || !Z.visibleDialogPostScene
                    ? (w(function (n) {
                        return (0, l.Z)((0, t.Z)({}, n), {
                          idPostSceneSelected: null == p ? void 0 : p.post,
                        });
                      }),
                      nk())
                    : ((void 0 !== n && !n) || Z.visibleDialogPostScene) && nm()
                  : nm();
              },
              [nm, nk, w, Z, p],
            ),
            nZ = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    isVisibleFloorplan: !n.isVisibleFloorplan,
                  });
                });
              },
              [w],
            ),
            nw = (0, i.useCallback)(
              function () {
                w(function (n) {
                  return (0, l.Z)((0, t.Z)({}, n), {
                    isVisibleMap: !n.isVisibleMap,
                  });
                });
              },
              [w],
            ),
            nM = (0, i.useCallback)(
              function () {
                var n = function (n) {
                    var o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0;
                    return '<scene name="scene_'
                      .concat(n.id, '" title="')
                      .concat(
                        n.title
                          .replaceAll("&", "&amp;")
                          .replaceAll("<", "&lt;")
                          .replaceAll(">", "&gt;")
                          .replaceAll("'", "&apos;")
                          .replaceAll('"', "&quot;"),
                        '" onstart="set(sceneId, \'',
                      )
                      .concat(
                        n.id,
                        "'); events.dispatch('onnewpanovr');\" thumburl=\"",
                      )
                      .concat(
                        n.media.src_thumb || n.media.src_preview,
                        '" lat="" lng="" alt="" heading="" group="',
                      )
                      .concat(
                        o ? "group_" + (null == o ? void 0 : o.id) : "",
                        '" nogrid="false"/>',
                      );
                  },
                  o = '<krpano thumbready="0">';
                return (
                  1 === S.length && "uncategory" === S[0].id
                    ? S[0].scenes.forEach(function (e) {
                        o += n(e);
                      })
                    : ((o += ""),
                      S.forEach(function (e) {
                        e.scenes.forEach(function (e) {
                          o += n(e);
                        });
                      })),
                  (o += "</krpano>")
                );
              },
              [S],
            );
          return (0, i.useMemo)(
            function () {
              return {
                onUp: z,
                onDown: q,
                onLeft: B,
                onRight: x,
                onVR: Q,
                onToggleGyro: J,
                onViewNormal: W,
                onViewPlannet: X,
                onViewMirrorBall: Y,
                onStopVertical: ne,
                onStopHorizontal: nt,
                onFullscreen: nl,
                onToFirstScene: U,
                onRemoveAllChevronHotspot: K,
                isRotate: F,
                onStopRotate: $,
                onToggleRotate: no,
                onStartRotate: nn,
                isShowIconRotate: y,
                onClickHotspot: G,
                isChangeScene: j,
                isShowIconChangeScene: N,
                onChangeAutoChangeScene: L,
                onShowInfoPlace: nC,
                onOpenDialogPostProject: nS,
                onCloseDialogPostProject: np,
                isShowIconInfoPlace: D,
                onToggleInfoScene: nh,
                onOpenDialogPostScene: nk,
                onCloseDialogPostScene: nm,
                isShowIconInfoScene: R,
                isExistSound: A,
                onSetSoundOnScene: nr,
                onTurnOnSoundScene: nd,
                onToggleSoundScene: nv,
                onTurnOffSoundScene: nf,
                isShowIconSoundScene: _,
                onStartHotspotSound: nu,
                onStopHotspotSound: ni,
                onTurnOnSoundProject: ng,
                onTurnOffSoundProject: nb,
                isShowIconSoundProject: V,
                isShowIconMap: T,
                onToggleMap: nw,
                isShowIconFloorplan: I,
                onToggleFloorplan: nZ,
                isShowIconMultipleStaging: O,
                onToggleModeMultipleStaging: ns,
                onGenerateXMLMenuThumbnailOnVR: nM,
              };
            },
            [
              z,
              q,
              B,
              x,
              Q,
              J,
              W,
              X,
              Y,
              ne,
              nt,
              nl,
              U,
              K,
              F,
              $,
              no,
              nn,
              y,
              G,
              j,
              N,
              L,
              nC,
              nS,
              np,
              D,
              nh,
              nk,
              nm,
              R,
              A,
              nr,
              nd,
              nv,
              nf,
              _,
              nu,
              ni,
              ng,
              nb,
              V,
              T,
              nw,
              I,
              nZ,
              O,
              ns,
              nM,
            ],
          );
        };
    },
  },
]);
//# sourceMappingURL=9505.844f4915252ab88a.js.map