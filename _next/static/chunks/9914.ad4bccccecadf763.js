"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9914],
  {
    33603: function (n, o, t) {
      t.d(o, {
        mL: function () {
          return i;
        },
        q0: function () {
          return l;
        },
      });
      var e = t(93355),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        a = function (n) {
          return { height: n.scrollHeight, opacity: 1 };
        },
        c = function (n, o) {
          return (
            (null == o ? void 0 : o.deadline) === !0 ||
            "height" === o.propertyName
          );
        };
      (0, e.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var l = function (n) {
          return void 0 !== n && ("topLeft" === n || "topRight" === n)
            ? "slide-down"
            : "slide-up";
        },
        i = function (n, o, t) {
          return void 0 !== t ? t : "".concat(n, "-").concat(o);
        };
      o.ZP = {
        motionName: "ant-motion-collapse",
        onAppearStart: r,
        onEnterStart: r,
        onAppearActive: a,
        onEnterActive: a,
        onLeaveStart: function (n) {
          return { height: n ? n.offsetHeight : 0 };
        },
        onLeaveActive: r,
        onAppearEnd: c,
        onEnterEnd: c,
        onLeaveEnd: c,
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
    90750: function (n, o, t) {
      t.d(o, {
        p: function () {
          return l;
        },
      });
      var e = t(85893),
        r = t(67294),
        a = t(25617),
        c = t(7400),
        l = function () {
          var n = (0, a.v9)(c.Ai),
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
                    a = n[o];
                  if ("icon" === a.type && a.icon)
                    return (0, e.jsx)("i", {
                      "aria-hidden": !0,
                      className: "controlbar-item__icon ".concat(a.icon),
                    });
                  if (
                    "image" === a.type &&
                    (null === (t = a.image) || void 0 === t ? void 0 : t.src)
                  )
                    return (0, e.jsx)("img", {
                      className: "controlbar-item__img",
                      src:
                        null === (r = a.image) || void 0 === r ? void 0 : r.src,
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
    53355: function (n, o, t) {
      t.r(o);
      var e = t(828),
        r = t(85893),
        a = t(5239),
        c = t(90750),
        l = t(79505),
        i = t(43386),
        u = t(7400),
        s = t(77939),
        f = t(67294),
        b = t(25617),
        g = void 0,
        h = (0, f.memo)(function (n) {
          var o = n.krpanoRef,
            t = (0, e.Z)((0, a.gU)("state"), 1)[0],
            f = t.isSoundOnScene,
            h = t.visibleDialogPostScene,
            d = t.isActiveModeMultipleStaging,
            S = (0, c.p)(),
            p = S.onCheckIsShowContentControlbarItem,
            m = S.onRenderContentControlbarItem,
            _ = (0, b.v9)(u.g5),
            C = (0, l.Q)({ krpanoRef: o }),
            v = C.onVR,
            x = C.onToFirstScene,
            y = C.isChangeScene,
            M = C.isShowIconChangeScene,
            T = C.onChangeAutoChangeScene,
            R = C.isRotate,
            I = C.isShowIconRotate,
            j = C.onToggleRotate,
            w = C.isShowIconInfoPlace,
            A = C.onShowInfoPlace,
            k = C.isShowIconInfoScene,
            N = C.onToggleInfoScene,
            P = C.isShowIconSoundScene,
            O = C.onToggleSoundScene,
            V = C.isShowIconMultipleStaging,
            Z = C.onToggleModeMultipleStaging;
          return (0, r.jsxs)("div", {
            className: "nav",
            children: [
              p("home") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarFirstScene,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act",
                    onClick: x,
                    children: m("home"),
                  }),
                }),
              w &&
                p("info_tour") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarInfoTour,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act",
                    onClick: A,
                    children: m("info_tour"),
                  }),
                }),
              k &&
                p("info_scene") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarInfoScene,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act ".concat(h ? "active" : ""),
                    onClick: N.bind(g, void 0),
                    children: m("info_scene"),
                  }),
                }),
              P &&
                p("sound_scene_off") &&
                p("sound_scene_on") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarSoundScene,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act",
                    onClick: O,
                    children: m(f ? "sound_scene_off" : "sound_scene_on"),
                  }),
                }),
              I &&
                p("auto_rotate_off") &&
                p("auto_rotate_on") &&
                (0, r.jsx)(s.Z, {
                  title: R
                    ? i.a[_].controlbarStopRotate
                    : i.a[_].controlbarStartRotate,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act",
                    onClick: j,
                    children: m(R ? "auto_rotate_off" : "auto_rotate_on"),
                  }),
                }),
              M &&
                p("auto_change_scene_off") &&
                p("auto_change_scene_on") &&
                (0, r.jsx)(s.Z, {
                  title: y
                    ? i.a[_].controlbarStopAutoPlayScene
                    : i.a[_].controlbarStartAutoPlayScene,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act",
                    onClick: T.bind(g, !y),
                    children: m(
                      y ? "auto_change_scene_off" : "auto_change_scene_on",
                    ),
                  }),
                }),
              V &&
                p("multi_staging") &&
                (0, r.jsx)(s.Z, {
                  title: d
                    ? i.a[_].controlbarTurnOffModeMultipleStaging
                    : i.a[_].controlbarTurnOnModeMultipleStaging,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act hide-on-mobile",
                    onClick: function () {
                      return Z();
                    },
                    children: m("multi_staging"),
                  }),
                }),
              p("vr") &&
                (0, r.jsx)(s.Z, {
                  title: i.a[_].controlbarVRMode,
                  placement: "top",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "act hide-on-mobile",
                    onClick: v,
                    children: m("vr"),
                  }),
                }),
            ],
          });
        });
      o.default = h;
    },
    8410: function (n, o, t) {
      t.d(o, {
        o: function () {
          return a;
        },
      });
      var e = t(67294),
        r = (0, t(98924).Z)() ? e.useLayoutEffect : e.useEffect;
      o.Z = r;
      var a = function (n, o) {
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
  },
]);
//# sourceMappingURL=9914.ad4bccccecadf763.js.map
