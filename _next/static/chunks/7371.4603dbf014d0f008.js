"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7371],
  {
    27371: function (n, t, e) {
      e.r(t);
      var r = e(41799),
        o = e(69396),
        i = e(828),
        u = e(85893),
        a = e(67294),
        c = e(25617),
        f = e(5152),
        s = e.n(f),
        p = e(5239),
        d = e(17840),
        l = e(7400),
        h = e(91527),
        v = s()(
          function () {
            return Promise.all([e.e(6126), e.e(3230)]).then(e.bind(e, 3230));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [3230];
              },
            },
          },
        ),
        g = s()(
          function () {
            return Promise.all([e.e(6126), e.e(5877)]).then(e.bind(e, 95877));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [95877];
              },
            },
          },
        ),
        m = s()(
          function () {
            return e.e(81).then(e.bind(e, 90081));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [90081];
              },
            },
          },
        ),
        b = (0, a.memo)(function (n) {
          var t,
            e = n.onChangeScene,
            f = (0, d.h)().checkDevice,
            s = (0, c.v9)(l.u$),
            b = (0, i.Z)((0, p.gU)("state"), 2)[1];
          return (
            (0, a.useEffect)(
              function () {
                b(function (n) {
                  return (0, o.Z)((0, r.Z)({}, n), {
                    isVisibleFloorplan:
                      !f().isMobile() &&
                      !!(null == s ? void 0 : s.isShowOnStart),
                  });
                });
              },
              [null == s ? void 0 : s.isShowOnStart],
            ),
            f().isMobile()
              ? (0, u.jsx)(m, { onChangeScene: e })
              : (0, u.jsx)(h.zA, {
                  children:
                    (null == s
                      ? void 0
                      : null === (t = s.floorplan) || void 0 === t
                        ? void 0
                        : t.type) === "box"
                      ? (0, u.jsx)(v, { onChangeScene: e })
                      : (0, u.jsx)(g, { onChangeScene: e }),
                })
          );
        });
      t.default = b;
    },
    91527: function (n, t, e) {
      e.d(t, {
        Ko: function () {
          return z;
        },
        SM: function () {
          return M;
        },
        YD: function () {
          return N;
        },
        Zs: function () {
          return I;
        },
        g8: function () {
          return j;
        },
        y9: function () {
          return S;
        },
        zA: function () {
          return C;
        },
      });
      var r = e(7297),
        o = e(19521);
      function i() {
        var n = (0, r.Z)([""]);
        return (
          (i = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  width: 100%;\n  top: 8px;\n  padding: 0 8px;\n  display: flex;\n  border-radius: 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 4;\n  pointer-events: none;\n  .--left {\n    background: rgb(0 0 0 / 0.5);\n    border-radius: 4px;\n    pointer-events: auto;\n  }\n  .--right {\n    display: flex;\n    align-items: center;\n    background: rgb(0 0 0 / 0.5);\n    border-radius: 4px;\n    overflow: hidden;\n    pointer-events: auto;\n  }\n  .action--item {\n    cursor: pointer;\n    transition: all 0.15s ease-out;\n    border: none;\n    padding: 0.25rem 0.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    width: 2rem;\n    height: 2rem;\n    cursor: pointer;\n    color: #fff;\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        background: rgb(0 0 0 / 0.5);\n      }\n    }\n    &.--select {\n      width: max-content;\n    }\n    i {\n    }\n    &.--select {\n      i {\n        margin-right: 0px;\n        margin-left: 4px;\n      }\n    }\n    &:not(:last-child) {\n      border-right: 1px solid rgb(255 255 255 / 0.25);\n    }\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = (0, r.Z)([
          "\n            transform: translateX(100%);\n          ",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, r.Z)([
          "\n            transform: translateX(-100%);\n          ",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, r.Z)([
          "\n            right: 0;\n            top: 0;\n            height: 100%;\n          ",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, r.Z)([
          "\n            left: 0;\n            top: 94px;\n            height: calc(100% - 94px);\n          ",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, r.Z)(["\n          right: 0;\n        "]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, r.Z)(["\n          left: 0;\n        "]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  width: 30%;\n  height: 100%;\n  transition: var(--transition-smooth);\n  display: flex;\n  align-items: center;\n  background: ",
          ";\n  top: 0;\n  pointer-events: auto;\n  transform: none;\n  z-index: 10;\n  &.wall {\n    z-index: 2;\n  }\n  &.hide {\n    pointer-events: none;\n    z-index: -1;\n    ",
          "\n  }\n  &.basekrpano {\n  }\n  &.default {\n    ",
          "\n  }\n  &.custom1 {\n    height: calc(100% - 50px);\n  }\n  ",
          "\n  .main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  .react-transform-wrapper {\n    overflow: visible;\n    z-index: 2;\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, r.Z)([
          "\n            transform: translateX(-4rem);\n          ",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = (0, r.Z)([
          "\n            transform: translateX(-4rem);\n          ",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = (0, r.Z)([
          "\n            transform: translateX(4rem);\n          ",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = (0, r.Z)([
          "\n            transform: translateX(4rem);\n          ",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = (0, r.Z)([
          "\n          bottom: ",
          "px;\n          left: ",
          "px;\n          right: unset;\n          top: unset;\n        ",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, r.Z)([
          "\n          top: ",
          "px;\n          left: ",
          "px;\n          bottom: unset;\n          right: unset;\n        ",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = (0, r.Z)([
          "\n          top: ",
          "px;\n          right: ",
          "px;\n          bottom: unset;\n          left: unset;\n        ",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        var n = (0, r.Z)([
          "\n          bottom: ",
          "px;\n          right: ",
          "px;\n          left: unset;\n          top: unset;\n        ",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  transition: var(--transition-smooth);\n  background: radial-gradient(50% 50% at 50% 50%, #626262 0%, #000000 100%);\n  background: ",
          ";\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid #fff;\n  transform: none;\n  z-index: 10;\n  &.hide {\n    opacity: 0;\n    z-index: -1;\n    pointer-events: none;\n    ",
          "\n  }\n  &.basekrpano {\n    /* opacity: 0.5; */\n  }\n  &.default {\n  }\n  &.custom1 {\n  }\n  ",
          "\n",
        ]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = (0, r.Z)([
          "\n  position: relative;\n  img {\n    min-width: 450px;\n    width: 100%;\n    height: auto;\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  background-color: var(--color-blue);\n  border: 2px solid transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  transform: scale(0.75);\n  svg {\n    pointer-events: none;\n  }\n  &.active {\n    box-shadow: 0 0 0 8px rgb(0 0 0 / 0.1);\n  }\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        var n = (0, r.Z)([
          "\n  width: 100%;\n  height: 100%;\n  position: relative;\n  ",
          " {\n    justify-content: center;\n    position: absolute;\n    top: 1rem;\n    left: 0;\n  }\n  img {\n    width: 100%;\n    height: auto;\n  }\n  ",
          " {\n    width: 24px;\n    height: 24px;\n    background-color: #007aff;\n    border: 1px solid #007aff;\n    border-width: 2px;\n  }\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      var C = o.ZP.div.withConfig({
          displayName: "styled__FloorplanWrapper",
          componentId: "Panoee__sc-6d8e0cc8-0",
        })(i()),
        z = o.ZP.div.withConfig({
          displayName: "styled__ActionFloorplanWrapper",
          componentId: "Panoee__sc-6d8e0cc8-1",
        })(u()),
        N = o.ZP.div.withConfig({
          displayName: "styled__FloorplanPanelWrapper",
          componentId: "Panoee__sc-6d8e0cc8-2",
        })(
          l(),
          function (n) {
            return n.bgColor;
          },
          function (n) {
            return "right" === n.position ? (0, o.iv)(a()) : (0, o.iv)(c());
          },
          function (n) {
            return "right" === n.position ? (0, o.iv)(f()) : (0, o.iv)(s());
          },
          function (n) {
            return "right" === n.position ? (0, o.iv)(p()) : (0, o.iv)(d());
          },
        ),
        S = o.ZP.div.withConfig({
          displayName: "styled__FloorplanBoxWrapper",
          componentId: "Panoee__sc-6d8e0cc8-3",
        })(
          _(),
          function (n) {
            return n.bgColor;
          },
          function (n) {
            return "bottomLeft" === n.position
              ? (0, o.iv)(h())
              : "topLeft" === n.position
                ? (0, o.iv)(v())
                : "topRight" === n.position
                  ? (0, o.iv)(g())
                  : (0, o.iv)(m());
          },
          function (n) {
            return "bottomLeft" === n.position
              ? (0, o.iv)(b(), n.offsetBottom, n.offsetLeft)
              : "topLeft" === n.position
                ? (0, o.iv)(x(), n.offsetTop, n.offsetLeft)
                : "topRight" === n.position
                  ? (0, o.iv)(w(), n.offsetTop, n.offsetRight)
                  : (0, o.iv)(Z(), n.offsetBottom, n.offsetRight);
          },
        ),
        I = o.ZP.div.withConfig({
          displayName: "styled__ImageFloorplanWrapper",
          componentId: "Panoee__sc-6d8e0cc8-4",
        })(y()),
        j = o.ZP.div.withConfig({
          displayName: "styled__MarkerWrapper",
          componentId: "Panoee__sc-6d8e0cc8-5",
        })(k()),
        M = o.ZP.div.withConfig({
          displayName: "styled__PopupWrapper",
          componentId: "Panoee__sc-6d8e0cc8-6",
        })(P(), z, j);
    },
    17840: function (n, t, e) {
      e.d(t, {
        h: function () {
          return o;
        },
      });
      var r = e(67294),
        o = function () {
          var n = (0, r.useCallback)(function () {
            var n = window.matchMedia(
              "only screen and (max-width: 760px)",
            ).matches;
            return {
              isMobile: function () {
                return n;
              },
            };
          }, []);
          return (0, r.useMemo)(
            function () {
              return { checkDevice: n };
            },
            [n],
          );
        };
    },
  },
]);
//# sourceMappingURL=7371.4603dbf014d0f008.js.map
