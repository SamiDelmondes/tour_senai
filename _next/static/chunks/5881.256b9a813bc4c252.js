"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5881],
  {
    33603: function (n, o, t) {
      t.d(o, {
        mL: function () {
          return c;
        },
        q0: function () {
          return i;
        },
      });
      var e = t(93355),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        l = function (n) {
          return { height: n.scrollHeight, opacity: 1 };
        },
        a = function (n, o) {
          return (
            (null == o ? void 0 : o.deadline) === !0 ||
            "height" === o.propertyName
          );
        };
      (0, e.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var i = function (n) {
          return void 0 !== n && ("topLeft" === n || "topRight" === n)
            ? "slide-down"
            : "slide-up";
        },
        c = function (n, o, t) {
          return void 0 !== t ? t : "".concat(n, "-").concat(o);
        };
      o.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: r,
        onEnterStart: r,
        onAppearActive: l,
        onEnterActive: l,
        onLeaveStart: function (n) {
          return { height: n ? n.offsetHeight : 0 };
        },
        onLeaveActive: r,
        onAppearEnd: a,
        onEnterEnd: a,
        onLeaveEnd: a,
        motionDeadline: 500,
      };
    },
    93355: function (n, o, t) {
      t.d(o, {
        a: function () {
          return r;
        },
        b: function () {
          return e;
        },
      });
      var e = function () {
          for (var n = arguments.length, o = Array(n), t = 0; t < n; t++)
            o[t] = arguments[t];
          return o;
        },
        r = function () {
          for (var n = arguments.length, o = Array(n), t = 0; t < n; t++)
            o[t] = arguments[t];
          return o;
        };
    },
    5239: function (n, o, t) {
      t.d(o, {
        EB: function () {
          return l;
        },
        FN: function () {
          return a;
        },
        Oj: function () {
          return r;
        },
        gU: function () {
          return u;
        },
        tf: function () {
          return c;
        },
        yG: function () {
          return i;
        },
      });
      var e = t(62845),
        r = (0, e.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, e.r8)({ hlookat: void 0 }).useGlobalState,
        a = (0, e.r8)({ zoom: void 0 }).useGlobalState,
        i = (0, e.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        c = (0, e.r8)({
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
    90750: function (n, o, t) {
      t.d(o, {
        p: function () {
          return i;
        },
      });
      var e = t(85893),
        r = t(67294),
        l = t(25617),
        a = t(7400),
        i = function () {
          var n = (0, l.v9)(a.Ai),
            o = (0, r.useCallback)(
              function (o) {
                return !o || !n[o].isHide;
              },
              [n],
            ),
            t = (0, r.useCallback)(
              function (o) {
                if (o) {
                  var t,
                    r,
                    l = n[o];
                  if ("icon" === l.type && l.icon)
                    return (0, e.jsx)("i", {
                      "aria-hidden": !0,
                      className: "controlbar-item__icon ".concat(l.icon),
                    });
                  if (
                    "image" === l.type &&
                    (null === (t = l.image) || void 0 === t ? void 0 : t.src)
                  )
                    return (0, e.jsx)("img", {
                      className: "controlbar-item__img",
                      src:
                        null === (r = l.image) || void 0 === r ? void 0 : r.src,
                      alt: "img",
                    });
                }
                return "";
              },
              [n],
            );
          return (0, r.useMemo)(
            function () {
              return {
                onRenderContentControlbarItem: t,
                onCheckIsShowContentControlbarItem: o,
              };
            },
            [t, o],
          );
        };
    },
    43386: function (n, o, t) {
      t.d(o, {
        a: function () {
          return e;
        },
      });
      var e = {
        en: {
          dialogConfirmSoundTitle: "Auto play sound on this website?",
          btnOK: "OK",
          btnCancel: "Cancel",
          controlbarFirstScene: "Go to first scene",
          controlbarInfoTour: "Info Tour",
          controlbarInfoScene: "Info Scene",
          controlbarMap: "Google Map",
          controlbarFloorplan: "Floorplan",
          controlbarTurnOnSoundProject: "Unmute sound",
          controlbarTurnOffSoundProject: "Mute sound",
          controlbarSoundScene: "Sound scene",
          controlbarStopRotate: "Stop Rotate",
          controlbarStartRotate: "Rotate",
          controlbarStartAutoPlayScene: "Auto play scene",
          controlbarStopAutoPlayScene: "Stop auto play scene",
          controlbarVRMode: "VR Mode",
          controlbarFullscreen: "Toggle Fullscreen",
          controlbarViewNormal: "View Normal",
          controlbarViewPlanet: "View Little Planet",
          controlbarViewMirrorBall: "View Mirror Ball",
          controlbarSettingColor: "Change color",
          controlbarTurnOffModeMultipleStaging: "Disable Staging",
          controlbarTurnOnModeMultipleStaging: "Enable Staging",
        },
        vi: {
          dialogConfirmSoundTitle: "Tự động ph\xe1t nhạc?",
          btnOK: "OK",
          btnCancel: "Huỷ bỏ",
          controlbarFirstScene: "Cảnh đầu ti\xean",
          controlbarInfoTour: "Th\xf4ng tin tour",
          controlbarInfoScene: "Th\xf4ng tin cảnh",
          controlbarFloorplan: "Floorplan",
          controlbarMap: "Google Map",
          controlbarTurnOnSoundProject: "Bật \xe2m lượng",
          controlbarTurnOffSoundProject: "Tắt \xe2m lượng",
          controlbarSoundScene: "\xc2m thanh cảnh",
          controlbarStopRotate: "Dừng xoay",
          controlbarStartRotate: "Xoay",
          controlbarStartAutoPlayScene: "Tự động chuyển cảnh",
          controlbarStopAutoPlayScene: "Dừng tự động chuyển cảnh",
          controlbarVRMode: "Chế độ VR",
          controlbarFullscreen: "Chuyển đổi chế độ to\xe0n m\xe0n h\xecnh",
          controlbarViewNormal: "Chế độ mặc định",
          controlbarViewPlanet: "Chế độ to\xe0n cầu",
          controlbarViewMirrorBall: "Chế độ gương",
          controlbarSettingColor: "Thay đổi m\xe0u",
          controlbarTurnOffModeMultipleStaging: "Tắt chế độ Staging",
          controlbarTurnOnModeMultipleStaging: "Bật chế độ Staging",
        },
      };
    },
    48037: function (n, o, t) {
      t.r(o);
      var e = t(85893),
        r = t(79505),
        l = t(7400),
        a = t(77939),
        i = t(67294),
        c = t(25617),
        u = t(43386),
        f = t(90750),
        s = t(5855),
        d = void 0,
        b = (0, i.memo)(function (n) {
          var o = n.krpanoRef,
            t = (0, f.p)(),
            i = t.onCheckIsShowContentControlbarItem,
            b = t.onRenderContentControlbarItem,
            S = (0, c.v9)(l.g5),
            p = (0, r.Q)({ krpanoRef: o }),
            h = p.isShowIconInfoPlace,
            g = p.onShowInfoPlace,
            m = p.isShowIconInfoScene,
            v = p.onToggleInfoScene,
            C = p.isShowIconFloorplan,
            y = p.onToggleFloorplan,
            w = p.isShowIconMap,
            M = p.onToggleMap;
          return (h && i("info_tour")) ||
            (m && i("info_scene")) ||
            (C && i("floorplan")) ||
            (w && i("map"))
            ? (0, e.jsxs)(s.Pg, {
                children: [
                  h &&
                    i("info_tour") &&
                    (0, e.jsx)(a.Z, {
                      title: u.a[S].controlbarInfoTour,
                      placement: "left",
                      children: (0, e.jsx)("div", {
                        className: "itemSideBtn",
                        onClick: g,
                        children: b("info_tour"),
                      }),
                    }),
                  m &&
                    i("info_scene") &&
                    (0, e.jsx)(a.Z, {
                      title: u.a[S].controlbarInfoScene,
                      placement: "left",
                      children: (0, e.jsx)("div", {
                        className: "itemSideBtn",
                        onClick: v.bind(d, void 0),
                        children: b("info_scene"),
                      }),
                    }),
                  C &&
                    i("floorplan") &&
                    (0, e.jsx)(a.Z, {
                      title: u.a[S].controlbarFloorplan,
                      placement: "left",
                      children: (0, e.jsx)("div", {
                        className: "itemSideBtn",
                        onClick: y.bind(d, void 0),
                        children: b("floorplan"),
                      }),
                    }),
                  w &&
                    i("map") &&
                    (0, e.jsx)(a.Z, {
                      title: u.a[S].controlbarMap,
                      placement: "left",
                      children: (0, e.jsx)("div", {
                        className: "itemSideBtn",
                        onClick: M.bind(d, void 0),
                        children: b("map"),
                      }),
                    }),
                ],
              })
            : (0, e.jsx)("div", {});
        });
      o.default = b;
    },
    8410: function (n, o, t) {
      t.d(o, {
        o: function () {
          return l;
        },
      });
      var e = t(67294),
        r = (0, t(98924).Z)() ? e.useLayoutEffect : e.useEffect;
      o.Z = r;
      var l = function (n, o) {
        var t = e.useRef(!0);
        r(function () {
          if (!t.current) return n();
        }, o),
          r(function () {
            return (
              (t.current = !1),
              function () {
                t.current = !0;
              }
            );
          }, []);
      };
    },
    62845: function (n, o, t) {
      t.d(o, {
        r8: function () {
          return i;
        },
      });
      var e = t(67294);
      function r() {
        return (r =
          Object.assign ||
          function (n) {
            for (var o = 1; o < arguments.length; o++) {
              var t = arguments[o];
              for (var e in t)
                Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
            }
            return n;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        a = (n, o) => {
          let t = Object.keys(o),
            a = o,
            i = null,
            c = {};
          t.forEach((n) => {
            c[n] = new Set();
          });
          let u = (o, t) => (t.type === l ? (t.r ? t.r(o) : t.e) : n(o, t)),
            f = (n, o) => {
              let t = (t) => {
                var e;
                return r({}, t, {
                  [n]: ((e = t[n]), "function" == typeof o ? o(e) : o),
                });
              };
              if (i) i({ type: l, r: t });
              else {
                a = t(a);
                let o = a[n];
                c[n].forEach((n) => n(o));
              }
            },
            s = (n, o) => {
              t.forEach((t) => {
                let e = o[t];
                n[t] !== e && c[t].forEach((n) => n(e));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [n, o] = (0, e.useReducer)(u, a);
              (0, e.useEffect)(() => {
                if (i) throw Error("Only one global state provider is allowed");
                return (
                  (i = o),
                  o({ type: l, e: a }),
                  () => {
                    i = null;
                  }
                );
              }, []);
              let t = (0, e.useRef)(n);
              s(t.current, n),
                (t.current = n),
                (0, e.useEffect)(() => {
                  a = n;
                }, [n]);
            },
            useGlobalState: (n) => {
              let [o, t] = (0, e.useState)(a[n]);
              return (
                (0, e.useEffect)(
                  () => (
                    c[n].add(t),
                    t(a[n]),
                    () => {
                      c[n].delete(t);
                    }
                  ),
                  [n],
                ),
                [o, (0, e.useCallback)((o) => f(n, o), [n])]
              );
            },
            getGlobalState: (n) => a[n],
            setGlobalState: f,
            getState: () => a,
            setState: (n) => {
              if (i) i({ type: l, e: n });
              else {
                let o = a;
                s(o, (a = n));
              }
            },
            dispatch: (o) => {
              if (i) i(o);
              else {
                let t = a;
                s(t, (a = n(a, o)));
              }
              return o;
            },
          };
        },
        i = (n) => a((n, o) => n, n),
        c = (n, o = n(void 0, { type: void 0 }), t) =>
          t ? t(c)(n, o) : a(n, o);
    },
  },
]);
//# sourceMappingURL=5881.256b9a813bc4c252.js.map
