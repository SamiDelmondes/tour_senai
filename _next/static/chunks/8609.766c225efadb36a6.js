"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8609],
  {
    10808: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = o(87462),
        r = o(67294),
        l = o(53124),
        a = o(77939),
        c = function (e) {
          return e ? ("function" == typeof e ? e() : e) : null;
        },
        i = o(33603),
        s = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var r = 0, n = Object.getOwnPropertySymbols(e);
              r < n.length;
              r++
            )
              0 > t.indexOf(n[r]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          return o;
        },
        u = function (e) {
          var t = e.title,
            o = e.content,
            n = e.prefixCls;
          return t || o
            ? r.createElement(
                r.Fragment,
                null,
                t &&
                  r.createElement(
                    "div",
                    { className: "".concat(n, "-title") },
                    c(t),
                  ),
                r.createElement(
                  "div",
                  { className: "".concat(n, "-inner-content") },
                  c(o),
                ),
              )
            : null;
        },
        d = r.forwardRef(function (e, t) {
          var o = e.prefixCls,
            c = e.title,
            d = e.content,
            b = e._overlay,
            f = e.placement,
            m = e.trigger,
            p = e.mouseEnterDelay,
            h = e.mouseLeaveDelay,
            S = e.overlayStyle,
            g = s(e, [
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
            _ = r.useContext(l.E_).getPrefixCls,
            v = _("popover", o),
            y = _();
          return r.createElement(
            a.Z,
            (0, n.Z)(
              {
                placement: void 0 === f ? "top" : f,
                trigger: void 0 === m ? "hover" : m,
                mouseEnterDelay: void 0 === p ? 0.1 : p,
                mouseLeaveDelay: void 0 === h ? 0.1 : h,
                overlayStyle: void 0 === S ? {} : S,
              },
              g,
              {
                prefixCls: v,
                ref: t,
                overlay:
                  b ||
                  r.createElement(u, { prefixCls: v, title: c, content: d }),
                transitionName: (0, i.mL)(y, "zoom-big", g.transitionName),
              },
            ),
          );
        });
    },
    5239: function (e, t, o) {
      o.d(t, {
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
          return s;
        },
        tf: function () {
          return i;
        },
        yG: function () {
          return c;
        },
      });
      var n = o(62845),
        r = (0, n.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, n.r8)({ hlookat: void 0 }).useGlobalState,
        a = (0, n.r8)({ zoom: void 0 }).useGlobalState,
        c = (0, n.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        i = (0, n.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        s = (0, n.r8)({
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
    90750: function (e, t, o) {
      o.d(t, {
        p: function () {
          return c;
        },
      });
      var n = o(85893),
        r = o(67294),
        l = o(25617),
        a = o(7400),
        c = function () {
          var e = (0, l.v9)(a.Ai),
            t = (0, r.useCallback)(
              function (t) {
                return !t || !e[t].isHide;
              },
              [e],
            ),
            o = (0, r.useCallback)(
              function (t) {
                if (t) {
                  var o,
                    r,
                    l = e[t];
                  if ("icon" === l.type && l.icon)
                    return (0, n.jsx)("i", {
                      "aria-hidden": !0,
                      className: "controlbar-item__icon ".concat(l.icon),
                    });
                  if (
                    "image" === l.type &&
                    (null === (o = l.image) || void 0 === o ? void 0 : o.src)
                  )
                    return (0, n.jsx)("img", {
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
                onRenderContentControlbarItem: o,
                onCheckIsShowContentControlbarItem: t,
              };
            },
            [o, t],
          );
        };
    },
    43386: function (e, t, o) {
      o.d(t, {
        a: function () {
          return n;
        },
      });
      var n = {
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
    48609: function (e, t, o) {
      o.r(t);
      var n = o(828),
        r = o(85893),
        l = o(5239),
        a = o(90750),
        c = o(79505),
        i = o(43386),
        s = o(7400),
        u = o(77939),
        d = o(10808),
        b = o(67294),
        f = o(25617),
        m = o(5855),
        p = void 0,
        h = (0, b.memo)(function (e) {
          var t = e.krpanoRef,
            o = e.onPrevScene,
            b = e.onNextScene,
            h = e.isShowListScene,
            S = e.isShowControlbar,
            g = e.onToggleControlbar,
            _ = e.onToggleListScene,
            v = (0, n.Z)((0, l.gU)("state"), 1)[0],
            y = v.isSoundOnScene,
            C = v.isActiveModeMultipleStaging,
            x = (0, a.p)(),
            j = x.onRenderContentControlbarItem,
            w = x.onCheckIsShowContentControlbarItem,
            N = (0, f.v9)(s.g5),
            M = (0, f.v9)(s.us),
            O = (0, c.Q)({ krpanoRef: t }),
            T = O.onVR,
            P = O.onToggleGyro,
            k = O.onFullscreen,
            R = O.onToFirstScene,
            B = O.onViewNormal,
            E = O.onViewMirrorBall,
            I = O.onViewPlannet,
            V = O.isChangeScene,
            F = O.isShowIconChangeScene,
            G = O.onChangeAutoChangeScene,
            A = O.isRotate,
            D = O.isShowIconRotate,
            Z = O.onToggleRotate,
            L = O.isShowIconSoundScene,
            z = O.onToggleSoundScene,
            K = O.isShowIconSoundProject,
            U = O.onTurnOffSoundProject,
            H = O.onTurnOnSoundProject,
            Q = O.isShowIconMultipleStaging,
            X = O.onToggleModeMultipleStaging;
          return (0, r.jsxs)("div", {
            className: "controlBar",
            children: [
              (0, r.jsxs)("div", {
                className: "--left",
                children: [
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: o,
                    children: (0, r.jsx)("i", {
                      "aria-hidden": !0,
                      className: "far fa-chevron-circle-left",
                    }),
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn ".concat(h ? "active" : ""),
                    onClick: _,
                    children: (0, r.jsx)("i", {
                      "aria-hidden": !0,
                      className: "far fa-th",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "--center",
                children: [
                  w("home") &&
                    (0, r.jsx)(u.Z, {
                      title: i.a[N].controlbarFirstScene,
                      placement: "top",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        className: "itemControlBtn",
                        onClick: R,
                        children: j("home"),
                      }),
                    }),
                  K &&
                    w("sound_project_off") &&
                    w("sound_project_on") &&
                    (0, r.jsx)(u.Z, {
                      title: M.on
                        ? i.a[N].controlbarTurnOffSoundProject
                        : i.a[N].controlbarTurnOnSoundProject,
                      placement: "top",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        className: "itemControlBtn",
                        onClick: M.on ? U : H,
                        children: j(
                          M.on ? "sound_project_off" : "sound_project_on",
                        ),
                      }),
                    }),
                  ((L && w("sound_scene_off") && w("sound_scene_on")) ||
                    (D && w("auto_rotate_off") && w("auto_rotate_on")) ||
                    (F &&
                      w("auto_change_scene_off") &&
                      w("auto_change_scene_on"))) &&
                    (0, r.jsx)(d.Z, {
                      placement: "top",
                      zIndex: 99,
                      content: (0, r.jsx)(m.ln, {
                        children: (0, r.jsxs)("ul", {
                          children: [
                            L &&
                              w("sound_scene_off") &&
                              w("sound_scene_on") &&
                              (0, r.jsx)("li", {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  onClick: z,
                                  children: [
                                    j(y ? "sound_scene_off" : "sound_scene_on"),
                                    i.a[N].controlbarSoundScene,
                                  ],
                                }),
                              }),
                            D &&
                              w("auto_rotate_off") &&
                              w("auto_rotate_on") &&
                              (0, r.jsx)("li", {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  onClick: Z,
                                  children: [
                                    j(A ? "auto_rotate_off" : "auto_rotate_on"),
                                    A
                                      ? i.a[N].controlbarStopRotate
                                      : i.a[N].controlbarStartRotate,
                                  ],
                                }),
                              }),
                            F &&
                              w("auto_change_scene_off") &&
                              w("auto_change_scene_on") &&
                              (0, r.jsx)("li", {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  onClick: G.bind(p, !V),
                                  children: [
                                    j(
                                      V
                                        ? "auto_change_scene_off"
                                        : "auto_change_scene_on",
                                    ),
                                    V
                                      ? i.a[N].controlbarStopAutoPlayScene
                                      : i.a[N].controlbarStartAutoPlayScene,
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
                        children: j("group_auto_play"),
                      }),
                    }),
                  w("view_mode") &&
                    (w("view_mode_little_planet") ||
                      w("view_mode_mirror") ||
                      w("view_mode_normal")) &&
                    (0, r.jsx)(d.Z, {
                      placement: "top",
                      zIndex: 99,
                      content: (0, r.jsx)(m.ln, {
                        children: (0, r.jsxs)("ul", {
                          children: [
                            w("view_mode_normal") &&
                              (0, r.jsx)("li", {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  onClick: function () {
                                    return B();
                                  },
                                  children: [j("view_mode_normal"), "Normal"],
                                }),
                              }),
                            w("view_mode_mirror") &&
                              (0, r.jsx)("li", {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  onClick: function () {
                                    return E();
                                  },
                                  children: [
                                    j("view_mode_mirror"),
                                    "Mirror Ball",
                                  ],
                                }),
                              }),
                            w("view_mode_little_planet") &&
                              (0, r.jsx)("li", {
                                children: (0, r.jsxs)("button", {
                                  type: "button",
                                  onClick: function () {
                                    return I();
                                  },
                                  children: [
                                    j("view_mode_little_planet"),
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
                        children: j("view_mode"),
                      }),
                    }),
                  Q &&
                    w("multi_staging") &&
                    (0, r.jsx)(u.Z, {
                      title: C
                        ? i.a[N].controlbarTurnOffModeMultipleStaging
                        : i.a[N].controlbarTurnOnModeMultipleStaging,
                      placement: "top",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        className: "itemControlBtn hide-on-mobile",
                        onClick: function () {
                          return X();
                        },
                        children: j("multi_staging"),
                      }),
                    }),
                  w("gyro") &&
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "itemControlBtn show-on-mobile",
                      onClick: P,
                      children: j("gyro"),
                    }),
                  w("vr") &&
                    (0, r.jsx)(u.Z, {
                      title: i.a[N].controlbarVRMode,
                      placement: "top",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        className: "itemControlBtn",
                        onClick: T,
                        children: j("vr"),
                      }),
                    }),
                  w("fullscreen") &&
                    (0, r.jsx)(u.Z, {
                      title: i.a[N].controlbarFullscreen,
                      placement: "top",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        className: "itemControlBtn",
                        onClick: k,
                        children: j("fullscreen"),
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "--right",
                children: [
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: g,
                    children: (0, r.jsx)("i", {
                      "aria-hidden": !0,
                      className: "far fa-caret-circle-down",
                    }),
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "itemControlBtn",
                    onClick: b,
                    children: (0, r.jsx)("i", {
                      "aria-hidden": !0,
                      className: "far fa-chevron-circle-right",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("button", {
                type: "button",
                className: "itemControlBtn itemShowControlbar ".concat(
                  S ? "--hide" : "--show",
                ),
                onClick: g,
                children: (0, r.jsx)("i", {
                  "aria-hidden": !0,
                  className: "far fa-caret-circle-up",
                }),
              }),
            ],
          });
        });
      t.default = h;
    },
    62845: function (e, t, o) {
      o.d(t, {
        r8: function () {
          return c;
        },
      });
      var n = o(67294);
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        a = (e, t) => {
          let o = Object.keys(t),
            a = t,
            c = null,
            i = {};
          o.forEach((e) => {
            i[e] = new Set();
          });
          let s = (t, o) => (o.type === l ? (o.r ? o.r(t) : o.e) : e(t, o)),
            u = (e, t) => {
              let o = (o) => {
                var n;
                return r({}, o, {
                  [e]: ((n = o[e]), "function" == typeof t ? t(n) : t),
                });
              };
              if (c) c({ type: l, r: o });
              else {
                a = o(a);
                let t = a[e];
                i[e].forEach((e) => e(t));
              }
            },
            d = (e, t) => {
              o.forEach((o) => {
                let n = t[o];
                e[o] !== n && i[o].forEach((e) => e(n));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, n.useReducer)(s, a);
              (0, n.useEffect)(() => {
                if (c) throw Error("Only one global state provider is allowed");
                return (
                  (c = t),
                  t({ type: l, e: a }),
                  () => {
                    c = null;
                  }
                );
              }, []);
              let o = (0, n.useRef)(e);
              d(o.current, e),
                (o.current = e),
                (0, n.useEffect)(() => {
                  a = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, o] = (0, n.useState)(a[e]);
              return (
                (0, n.useEffect)(
                  () => (
                    i[e].add(o),
                    o(a[e]),
                    () => {
                      i[e].delete(o);
                    }
                  ),
                  [e],
                ),
                [t, (0, n.useCallback)((t) => u(e, t), [e])]
              );
            },
            getGlobalState: (e) => a[e],
            setGlobalState: u,
            getState: () => a,
            setState: (e) => {
              if (c) c({ type: l, e: e });
              else {
                let t = a;
                d(t, (a = e));
              }
            },
            dispatch: (t) => {
              if (c) c(t);
              else {
                let o = a;
                d(o, (a = e(a, t)));
              }
              return t;
            },
          };
        },
        c = (e) => a((e, t) => e, e),
        i = (e, t = e(void 0, { type: void 0 }), o) =>
          o ? o(i)(e, t) : a(e, t);
    },
  },
]);
//# sourceMappingURL=8609.766c225efadb36a6.js.map
