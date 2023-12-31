"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5781],
  {
    35781: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return j;
          },
        });
      var o = t(41799),
        i = t(69396),
        l = t(828),
        r = t(85893),
        s = t(67294),
        u = t(25617),
        a = t(7400),
        c = t(5239),
        d = t(79505),
        v = t(17840),
        p = t(7297),
        f = t(19521);
      function m() {
        var e = (0, p.Z)([
          "\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.1);\n  }\n}",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = (0, p.Z)([
          "\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 20;\n  pointer-events: auto;\n  transition: all 1s ease-out;\n  opacity: 1;\n  &.inactive {\n    pointer-events: none;\n    transform: scale(1.1);\n    opacity: 0;\n    z-index: -1;\n    img,\n    video {\n    }\n    .overlayClose {\n      display: none;\n    }\n  }\n\n  img,\n  video {\n    background-color: #000;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    /* pointer-events: none; */\n  }\n\n  img {\n    animation: ",
          " 2s forwards;\n  }\n\n  .--mobile {\n    display: none;\n  }\n\n  @media (max-width: 640px) {\n    .--mobile {\n      display: block;\n    }\n    .--pc {\n      display: none;\n    }\n  }\n\n  .overlayClose {\n    position: absolute;\n    bottom: 1.5rem;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: max-content;\n    z-index: 10;\n    .close {\n      padding: 4px 32px;\n      border: 2px solid #ddd;\n      color: #ddd;\n      font-weight: 600;\n      font-size: 1rem;\n      text-align: center;\n      transition: all 0.15s ease-out;\n      cursor: pointer;\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          background: #ddd;\n          color: var(--color-text);\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      var h = (0, f.F4)(m()),
        y = f.ZP.div.withConfig({
          displayName: "styled__PopupIntroWrapper",
          componentId: "Panoee__sc-aac2a603-0",
        })(b(), h),
        g = t(5152),
        S = t.n(g),
        P = t(33207),
        x = void 0,
        k = S()(
          function () {
            return t.e(4358).then(t.bind(t, 24358));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [24358];
              },
            },
          },
        ),
        j = (0, s.memo)(function () {
          var e = (0, u.I0)(),
            n = (0, s.useRef)(!1),
            t = (0, s.useRef)(null),
            p = (0, v.h)().checkDevice,
            f = (0, u.v9)(a.us),
            m = (0, u.v9)(a.Aq),
            b = (0, l.Z)((0, s.useState)(!1), 2),
            h = b[0],
            g = b[1],
            S = (0, l.Z)((0, s.useState)(!1), 2),
            j = S[0],
            w = S[1],
            C = (0, d.Q)({}),
            E = C.onSetSoundOnScene,
            I = C.isShowIconInfoPlace,
            D = C.onShowInfoPlace,
            G = C.onCloseDialogPostProject,
            N = (0, l.Z)((0, c.gU)("state"), 2),
            V = N[0],
            Z = N[1],
            M = (0, s.useCallback)(function () {
              var e;
              null == t || null === (e = t.current) || void 0 === e || e.play(),
                w(!1);
            }, []),
            O = (0, s.useCallback)(
              function () {
                t.current && ((t.current.muted = !1), (t.current.volume = 1)),
                  g(!0),
                  M();
              },
              [M],
            ),
            _ = (0, s.useCallback)(
              function () {
                var n;
                (null == t ? void 0 : t.current) &&
                  (null == t ||
                    null === (n = t.current) ||
                    void 0 === n ||
                    n.pause()),
                  (null == m ? void 0 : m.type) === "post" && G(),
                  Z(function (e) {
                    return (0, i.Z)((0, o.Z)({}, e), {
                      isVisiblePopupIntro: !1,
                    });
                  }),
                  (void 0 === f.on || null === f.on) &&
                    h &&
                    (E(!0), e(P.Nw.setConfigSoundProject({ on: !0 })));
              },
              [e, f, h, m, E, Z, G],
            );
          return (
            (0, s.useEffect)(function () {
              if (void 0 === V.isVisiblePopupIntro) {
                var e =
                  (((null == m ? void 0 : m.type) === "image" &&
                    (null == m ? void 0 : m.imageDesktop)) ||
                    ((null == m ? void 0 : m.type) === "video" &&
                      (null == m ? void 0 : m.videoDesktop)) ||
                    ((null == m ? void 0 : m.type) === "post" && I)) &&
                  !!(null == m ? void 0 : m.isEnabled);
                e &&
                  ((null == m ? void 0 : m.type) === "post" &&
                    (D(), (n.current = !0)),
                  (null == m ? void 0 : m.type) === "video" &&
                    t.current &&
                    (f.on && !m.mute
                      ? O()
                      : (void 0 !== f.on && null !== f.on) || m.mute
                        ? ((t.current.muted = !0), (t.current.autoplay = !0))
                        : w(!0))),
                  Z(function (n) {
                    return (0, i.Z)((0, o.Z)({}, n), {
                      isVisiblePopupIntro: e,
                    });
                  });
              }
            }, []),
            (0, s.useEffect)(
              function () {
                V.isVisiblePopupIntro &&
                  (null == m ? void 0 : m.isAutoClose) &&
                  (null == m ? void 0 : m.type) !== "post" &&
                  setTimeout(
                    function () {
                      _();
                    },
                    1e3 * +(null == m ? void 0 : m.timeAutoClose),
                  );
              },
              [V.isVisiblePopupIntro, m],
            ),
            (0, s.useEffect)(
              function () {
                (null == m ? void 0 : m.type) === "post" &&
                  n.current &&
                  !V.visibleDialogPostProject &&
                  void 0 !== V.isVisiblePopupIntro &&
                  _();
              },
              [V.visibleDialogPostProject],
            ),
            (0, r.jsxs)(y, {
              className: !1 !== V.isVisiblePopupIntro ? "" : "inactive",
              children: [
                m &&
                  (null == m ? void 0 : m.isEnabled) &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (null == m ? void 0 : m.type) === "image" &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("img", {
                              src: null == m ? void 0 : m.imageDesktop,
                              alt: "",
                              className: "--pc",
                            }),
                            (0, r.jsx)("img", {
                              src:
                                (null == m ? void 0 : m.imageMobile) ||
                                (null == m ? void 0 : m.imageDesktop),
                              alt: "",
                              className: "--mobile",
                            }),
                          ],
                        }),
                      (null == m ? void 0 : m.type) === "video" &&
                        (0, r.jsx)(r.Fragment, {
                          children: p().isMobile()
                            ? (0, r.jsx)("video", {
                                muted: !0,
                                playsInline: !0,
                                ref: t,
                                onEnded: _,
                                className: "--mobile",
                                autoPlay: !!m.mute,
                                children: (0, r.jsx)("source", {
                                  src:
                                    ((null == m ? void 0 : m.videoMobile) ||
                                      (null == m ? void 0 : m.videoDesktop)) +
                                    "#t=0.001",
                                  type: "video/mp4",
                                }),
                              })
                            : (0, r.jsx)("video", {
                                muted: !0,
                                playsInline: !0,
                                ref: t,
                                onEnded: _,
                                children: (0, r.jsx)("source", {
                                  src: null == m ? void 0 : m.videoDesktop,
                                  type: "video/mp4",
                                }),
                              }),
                        }),
                      (null == m ? void 0 : m.type) !== "post" &&
                        (0, r.jsx)("div", {
                          className: "overlayClose",
                          children: (0, r.jsx)("div", {
                            onClick: _,
                            className: "close",
                            children:
                              (null == m ? void 0 : m.textClose) || "Close",
                          }),
                        }),
                    ],
                  }),
                j &&
                  (0, r.jsx)(k, {
                    visible: j,
                    onOK: O,
                    onCancel: M.bind(x, !1),
                  }),
              ],
            })
          );
        });
    },
    5239: function (e, n, t) {
      t.d(n, {
        EB: function () {
          return l;
        },
        FN: function () {
          return r;
        },
        Oj: function () {
          return i;
        },
        gU: function () {
          return a;
        },
        tf: function () {
          return u;
        },
        yG: function () {
          return s;
        },
      });
      var o = t(62845),
        i = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        r = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        s = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        u = (0, o.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        a = (0, o.r8)({
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
    17840: function (e, n, t) {
      t.d(n, {
        h: function () {
          return i;
        },
      });
      var o = t(67294),
        i = function () {
          var e = (0, o.useCallback)(function () {
            var e = window.matchMedia(
              "only screen and (max-width: 760px)",
            ).matches;
            return {
              isMobile: function () {
                return e;
              },
            };
          }, []);
          return (0, o.useMemo)(
            function () {
              return { checkDevice: e };
            },
            [e],
          );
        };
    },
    62845: function (e, n, t) {
      t.d(n, {
        r8: function () {
          return s;
        },
      });
      var o = t(67294);
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        r = (e, n) => {
          let t = Object.keys(n),
            r = n,
            s = null,
            u = {};
          t.forEach((e) => {
            u[e] = new Set();
          });
          let a = (n, t) => (t.type === l ? (t.r ? t.r(n) : t.e) : e(n, t)),
            c = (e, n) => {
              let t = (t) => {
                var o;
                return i({}, t, {
                  [e]: ((o = t[e]), "function" == typeof n ? n(o) : n),
                });
              };
              if (s) s({ type: l, r: t });
              else {
                r = t(r);
                let n = r[e];
                u[e].forEach((e) => e(n));
              }
            },
            d = (e, n) => {
              t.forEach((t) => {
                let o = n[t];
                e[t] !== o && u[t].forEach((e) => e(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, n] = (0, o.useReducer)(a, r);
              (0, o.useEffect)(() => {
                if (s) throw Error("Only one global state provider is allowed");
                return (
                  (s = n),
                  n({ type: l, e: r }),
                  () => {
                    s = null;
                  }
                );
              }, []);
              let t = (0, o.useRef)(e);
              d(t.current, e),
                (t.current = e),
                (0, o.useEffect)(() => {
                  r = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [n, t] = (0, o.useState)(r[e]);
              return (
                (0, o.useEffect)(
                  () => (
                    u[e].add(t),
                    t(r[e]),
                    () => {
                      u[e].delete(t);
                    }
                  ),
                  [e],
                ),
                [n, (0, o.useCallback)((n) => c(e, n), [e])]
              );
            },
            getGlobalState: (e) => r[e],
            setGlobalState: c,
            getState: () => r,
            setState: (e) => {
              if (s) s({ type: l, e: e });
              else {
                let n = r;
                d(n, (r = e));
              }
            },
            dispatch: (n) => {
              if (s) s(n);
              else {
                let t = r;
                d(t, (r = e(r, n)));
              }
              return n;
            },
          };
        },
        s = (e) => r((e, n) => e, e),
        u = (e, n = e(void 0, { type: void 0 }), t) =>
          t ? t(u)(e, n) : r(e, n);
    },
  },
]);
//# sourceMappingURL=5781.ee3cb52d687ed021.js.map
