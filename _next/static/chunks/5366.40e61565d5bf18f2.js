"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5366],
  {
    33603: function (e, t, n) {
      n.d(t, {
        mL: function () {
          return i;
        },
        q0: function () {
          return c;
        },
      });
      var o = n(93355),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        l = function (e) {
          return { height: e.scrollHeight, opacity: 1 };
        },
        a = function (e, t) {
          return (
            (null == t ? void 0 : t.deadline) === !0 ||
            "height" === t.propertyName
          );
        };
      (0, o.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var c = function (e) {
          return void 0 !== e && ("topLeft" === e || "topRight" === e)
            ? "slide-down"
            : "slide-up";
        },
        i = function (e, t, n) {
          return void 0 !== n ? n : "".concat(e, "-").concat(t);
        };
      t.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: r,
        onEnterStart: r,
        onAppearActive: l,
        onEnterActive: l,
        onLeaveStart: function (e) {
          return { height: e ? e.offsetHeight : 0 };
        },
        onLeaveActive: r,
        onAppearEnd: a,
        onEnterEnd: a,
        onLeaveEnd: a,
        motionDeadline: 500,
      };
    },
    93355: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
        b: function () {
          return o;
        },
      });
      var o = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        },
        r = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        };
    },
    10808: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var o = n(87462),
        r = n(67294),
        l = n(53124),
        a = n(77939),
        c = function (e) {
          return e ? ("function" == typeof e ? e() : e) : null;
        },
        i = n(33603),
        u = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              0 > t.indexOf(o) &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, o = Object.getOwnPropertySymbols(e);
              r < o.length;
              r++
            )
              0 > t.indexOf(o[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          return n;
        },
        s = function (e) {
          var t = e.title,
            n = e.content,
            o = e.prefixCls;
          return t || n
            ? r.createElement(
                r.Fragment,
                null,
                t &&
                  r.createElement(
                    "div",
                    { className: "".concat(o, "-title") },
                    c(t),
                  ),
                r.createElement(
                  "div",
                  { className: "".concat(o, "-inner-content") },
                  c(n),
                ),
              )
            : null;
        },
        f = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            c = e.title,
            f = e.content,
            d = e._overlay,
            b = e.placement,
            p = e.trigger,
            m = e.mouseEnterDelay,
            h = e.mouseLeaveDelay,
            g = e.overlayStyle,
            S = u(e, [
              "prefixCls",
              "title",
              "content",
              "_overlay",
              "placement",
              "trigger",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayStyle",
            ]),
            v = r.useContext(l.E_).getPrefixCls,
            _ = v("popover", n),
            y = v();
          return r.createElement(
            a.Z,
            (0, o.Z)(
              {
                placement: void 0 === b ? "top" : b,
                trigger: void 0 === p ? "hover" : p,
                mouseEnterDelay: void 0 === m ? 0.1 : m,
                mouseLeaveDelay: void 0 === h ? 0.1 : h,
                overlayStyle: void 0 === g ? {} : g,
              },
              S,
              {
                prefixCls: _,
                ref: t,
                overlay:
                  d ||
                  r.createElement(s, { prefixCls: _, title: c, content: f }),
                transitionName: (0, i.mL)(y, "zoom-big", S.transitionName),
              },
            ),
          );
        });
    },
    5239: function (e, t, n) {
      n.d(t, {
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
          return i;
        },
        yG: function () {
          return c;
        },
      });
      var o = n(62845),
        r = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        a = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        c = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        i = (0, o.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        u = (0, o.r8)({
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
    90750: function (e, t, n) {
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var o = n(85893),
        r = n(67294),
        l = n(25617),
        a = n(7400),
        c = function () {
          var e = (0, l.v9)(a.Ai),
            t = (0, r.useCallback)(
              function (t) {
                return !t || !e[t].isHide;
              },
              [e],
            ),
            n = (0, r.useCallback)(
              function (t) {
                if (t) {
                  var n,
                    r,
                    l = e[t];
                  if ("icon" === l.type && l.icon)
                    return (0, o.jsx)("i", {
                      "aria-hidden": !0,
                      className: "controlbar-item__icon ".concat(l.icon),
                    });
                  if (
                    "image" === l.type &&
                    (null === (n = l.image) || void 0 === n ? void 0 : n.src)
                  )
                    return (0, o.jsx)("img", {
                      className: "controlbar-item__img",
                      src:
                        null === (r = l.image) || void 0 === r ? void 0 : r.src,
                      alt: "img",
                    });
                }
                return "";
              },
              [e],
            );
          return (0, r.useMemo)(
            function () {
              return {
                onRenderContentControlbarItem: n,
                onCheckIsShowContentControlbarItem: t,
              };
            },
            [n, t],
          );
        };
    },
    43386: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var o = {
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
    36462: function (e, t, n) {
      n.r(t);
      var o = n(828),
        r = n(85893),
        l = n(67294),
        a = n(5239),
        c = n(79505),
        i = n(43386),
        u = n(7400),
        s = n(77939),
        f = n(10808),
        d = n(25617),
        b = n(90750),
        p = n(55837),
        m = void 0,
        h = (0, l.memo)(function (e) {
          var t = e.krpanoRef,
            n = (0, o.Z)((0, a.gU)("state"), 1)[0],
            l = n.isSoundOnScene,
            h = n.isActiveModeMultipleStaging,
            g = (0, b.p)(),
            S = g.onCheckIsShowContentControlbarItem,
            v = g.onRenderContentControlbarItem,
            _ = (0, d.v9)(u.g5),
            y = (0, d.v9)(u.us),
            C = (0, c.Q)({ krpanoRef: t }),
            x = C.onVR,
            j = C.onToggleGyro,
            w = C.onFullscreen,
            M = C.onToFirstScene,
            T = C.onViewNormal,
            P = C.onViewMirrorBall,
            O = C.onViewPlannet,
            k = C.isChangeScene,
            I = C.isShowIconChangeScene,
            N = C.onChangeAutoChangeScene,
            E = C.isRotate,
            R = C.isShowIconRotate,
            A = C.onToggleRotate,
            B = C.isShowIconSoundScene,
            V = C.onToggleSoundScene,
            F = C.isShowIconSoundProject,
            Z = C.onTurnOffSoundProject,
            G = C.onTurnOnSoundProject,
            L = C.isShowIconMultipleStaging,
            D = C.onToggleModeMultipleStaging,
            z = C.isShowIconInfoPlace,
            H = C.onShowInfoPlace,
            K = C.isShowIconInfoScene,
            U = C.onToggleInfoScene,
            q = C.isShowIconFloorplan,
            Q = C.onToggleFloorplan,
            X = C.isShowIconMap,
            J = C.onToggleMap;
          return (0, r.jsxs)("div", {
            className: "controlBar",
            children: [
              S("home") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarFirstScene,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: M,
                    children: v("home"),
                  }),
                }),
              F &&
                S("sound_project_off") &&
                S("sound_project_on") &&
                (0, r.jsx)(s.Z, {
                  title: y.on
                    ? i.a[_].controlbarTurnOffSoundProject
                    : i.a[_].controlbarTurnOnSoundProject,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: y.on ? Z : G,
                    children: v(
                      y.on ? "sound_project_off" : "sound_project_on",
                    ),
                  }),
                }),
              ((B && S("sound_scene_off") && S("sound_scene_on")) ||
                (R && S("auto_rotate_off") && S("auto_rotate_on")) ||
                (I &&
                  S("auto_change_scene_off") &&
                  S("auto_change_scene_on"))) &&
                (0, r.jsx)(f.Z, {
                  placement: "left",
                  zIndex: 99,
                  content: (0, r.jsx)(p.ln, {
                    children: (0, r.jsxs)("ul", {
                      children: [
                        B &&
                          S("sound_scene_off") &&
                          S("sound_scene_on") &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: V,
                              children: [
                                v(l ? "sound_scene_off" : "sound_scene_on"),
                                i.a[_].controlbarSoundScene,
                              ],
                            }),
                          }),
                        R &&
                          S("auto_rotate_off") &&
                          S("auto_rotate_on") &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: A,
                              children: [
                                v(E ? "auto_rotate_off" : "auto_rotate_on"),
                                E
                                  ? i.a[_].controlbarStopRotate
                                  : i.a[_].controlbarStartRotate,
                              ],
                            }),
                          }),
                        I &&
                          S("auto_change_scene_off") &&
                          S("auto_change_scene_on") &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: N.bind(m, !k),
                              children: [
                                v(
                                  k
                                    ? "auto_change_scene_off"
                                    : "auto_change_scene_on",
                                ),
                                k
                                  ? i.a[_].controlbarStopAutoPlayScene
                                  : i.a[_].controlbarStartAutoPlayScene,
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                  overlayClassName: "popoverControlbar",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    children: v("group_auto_play"),
                  }),
                }),
              S("view_mode") &&
                (S("view_mode_little_planet") ||
                  S("view_mode_mirror") ||
                  S("view_mode_normal")) &&
                (0, r.jsx)(f.Z, {
                  placement: "left",
                  zIndex: 99,
                  content: (0, r.jsx)(p.ln, {
                    children: (0, r.jsxs)("ul", {
                      children: [
                        S("view_mode_normal") &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: function () {
                                return T();
                              },
                              children: [v("view_mode_normal"), "Normal"],
                            }),
                          }),
                        S("view_mode_mirror") &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: function () {
                                return P();
                              },
                              children: [v("view_mode_mirror"), "Mirror Ball"],
                            }),
                          }),
                        S("view_mode_little_planet") &&
                          (0, r.jsx)("li", {
                            children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: function () {
                                return O();
                              },
                              children: [
                                v("view_mode_little_planet"),
                                "Little Planel",
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                  overlayClassName: "popoverControlbar",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    children: v("view_mode"),
                  }),
                }),
              L &&
                S("multi_staging") &&
                (0, r.jsx)(s.Z, {
                  title: h
                    ? i.a[_].controlbarTurnOffModeMultipleStaging
                    : i.a[_].controlbarTurnOnModeMultipleStaging,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn hide-on-mobile",
                    onClick: function () {
                      return D();
                    },
                    children: v("multi_staging"),
                  }),
                }),
              S("gyro") &&
                (0, r.jsx)("button", {
                  type: "button",
                  className: "itemControlBtn show-on-mobile",
                  onClick: j,
                  children: v("gyro"),
                }),
              z &&
                S("info_tour") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarInfoTour,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: H,
                    children: v("info_tour"),
                  }),
                }),
              K &&
                S("info_scene") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarInfoScene,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: U.bind(m, void 0),
                    children: v("info_scene"),
                  }),
                }),
              q &&
                S("floorplan") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarFloorplan,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: Q.bind(m, void 0),
                    children: v("floorplan"),
                  }),
                }),
              X &&
                S("map") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarMap,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: J.bind(m, void 0),
                    children: v("map"),
                  }),
                }),
              S("vr") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarVRMode,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: x,
                    children: v("vr"),
                  }),
                }),
              S("fullscreen") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarFullscreen,
                  placement: "left",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: w,
                    children: v("fullscreen"),
                  }),
                }),
            ],
          });
        });
      t.default = h;
    },
    8410: function (e, t, n) {
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var o = n(67294),
        r = (0, n(98924).Z)() ? o.useLayoutEffect : o.useEffect;
      t.Z = r;
      var l = function (e, t) {
        var n = o.useRef(!0);
        r(function () {
          if (!n.current) return e();
        }, t),
          r(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []);
      };
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return c;
        },
      });
      var o = n(67294);
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        a = (e, t) => {
          let n = Object.keys(t),
            a = t,
            c = null,
            i = {};
          n.forEach((e) => {
            i[e] = new Set();
          });
          let u = (t, n) => (n.type === l ? (n.r ? n.r(t) : n.e) : e(t, n)),
            s = (e, t) => {
              let n = (n) => {
                var o;
                return r({}, n, {
                  [e]: ((o = n[e]), "function" == typeof t ? t(o) : t),
                });
              };
              if (c) c({ type: l, r: n });
              else {
                a = n(a);
                let t = a[e];
                i[e].forEach((e) => e(t));
              }
            },
            f = (e, t) => {
              n.forEach((n) => {
                let o = t[n];
                e[n] !== o && i[n].forEach((e) => e(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, o.useReducer)(u, a);
              (0, o.useEffect)(() => {
                if (c) throw Error("Only one global state provider is allowed");
                return (
                  (c = t),
                  t({ type: l, e: a }),
                  () => {
                    c = null;
                  }
                );
              }, []);
              let n = (0, o.useRef)(e);
              f(n.current, e),
                (n.current = e),
                (0, o.useEffect)(() => {
                  a = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, n] = (0, o.useState)(a[e]);
              return (
                (0, o.useEffect)(
                  () => (
                    i[e].add(n),
                    n(a[e]),
                    () => {
                      i[e].delete(n);
                    }
                  ),
                  [e],
                ),
                [t, (0, o.useCallback)((t) => s(e, t), [e])]
              );
            },
            getGlobalState: (e) => a[e],
            setGlobalState: s,
            getState: () => a,
            setState: (e) => {
              if (c) c({ type: l, e: e });
              else {
                let t = a;
                f(t, (a = e));
              }
            },
            dispatch: (t) => {
              if (c) c(t);
              else {
                let n = a;
                f(n, (a = e(a, t)));
              }
              return t;
            },
          };
        },
        c = (e) => a((e, t) => e, e),
        i = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(i)(e, t) : a(e, t);
    },
  },
]);
//# sourceMappingURL=5366.40e61565d5bf18f2.js.map
