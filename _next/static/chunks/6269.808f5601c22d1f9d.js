"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6269],
  {
    36269: function (n, t, e) {
      e.r(t);
      var r = e(41799),
        i = e(69396),
        o = e(828),
        u = e(85893),
        a = e(67294),
        f = e(25617),
        c = e(5152),
        s = e.n(c),
        p = e(5239),
        d = e(17840),
        l = e(7400),
        h = e(17705),
        v = s()(
          function () {
            return Promise.all([e.e(6725), e.e(9840)]).then(e.bind(e, 89840));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [89840];
              },
            },
          },
        ),
        m = s()(
          function () {
            return Promise.all([e.e(6725), e.e(8630)]).then(e.bind(e, 8630));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8630];
              },
            },
          },
        ),
        g = s()(
          function () {
            return e.e(9480).then(e.bind(e, 9480));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9480];
              },
            },
          },
        ),
        b = (0, a.memo)(function (n) {
          var t,
            e = n.onChangeScene,
            c = (0, d.h)().checkDevice,
            s = (0, f.v9)(l.F7),
            b = (0, o.Z)((0, p.gU)("state"), 2)[1];
          return (
            (0, a.useEffect)(
              function () {
                b(function (n) {
                  return (0, i.Z)((0, r.Z)({}, n), {
                    isVisibleMap:
                      !c().isMobile() &&
                      !!(null == s ? void 0 : s.isShowOnStart),
                  });
                });
              },
              [null == s ? void 0 : s.isShowOnStart],
            ),
            c().isMobile()
              ? (0, u.jsx)(g, { onChangeScene: e })
              : (0, u.jsx)(h.fk, {
                  children:
                    (null == s
                      ? void 0
                      : null === (t = s.map) || void 0 === t
                        ? void 0
                        : t.type) === "box"
                      ? (0, u.jsx)(v, { onChangeScene: e })
                      : (0, u.jsx)(m, { onChangeScene: e }),
                })
          );
        });
      t.default = b;
    },
    17705: function (n, t, e) {
      e.d(t, {
        Nh: function () {
          return N;
        },
        SM: function () {
          return X;
        },
        XJ: function () {
          return S;
        },
        Yq: function () {
          return z;
        },
        fk: function () {
          return j;
        },
        g8: function () {
          return W;
        },
        pu: function () {
          return I;
        },
      });
      var r = e(7297),
        i = e(19521);
      function o() {
        var n = (0, r.Z)([""]);
        return (
          (o = function () {
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
      function f() {
        var n = (0, r.Z)([
          "\n            transform: translateX(-100%);\n          ",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, r.Z)([
          "\n            width: calc(30% + 48px);\n            ",
          " {\n              justify-content: flex-start;\n            }\n          ",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, r.Z)([
          "\n            ",
          " {\n              justify-content: flex-end;\n            }\n          ",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, r.Z)([
          "\n            right: 0;\n            top: 0;\n            height: 100%;\n          ",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, r.Z)([
          "\n            left: 0;\n            top: 94px;\n            height: calc(100% - 94px);\n          ",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, r.Z)(["\n          right: 0;\n        "]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, r.Z)(["\n          left: 0;\n        "]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  width: 30%;\n  height: 100%;\n  transition: var(--transition-smooth);\n  display: flex;\n  align-items: center;\n  background: ",
          ";\n  top: 0;\n  pointer-events: auto;\n  transform: none;\n  z-index: 10;\n  &.hide {\n    pointer-events: none;\n    z-index: -1;\n    ",
          "\n  }\n  &.wall {\n    z-index: 2;\n    ",
          "// height: calc(100% - 87px);;;;;;;;;\n  }\n  &.basekrpano {\n  }\n  &.default {\n    ",
          "\n  }\n  &.custom1 {\n    height: calc(100% - 50px);\n  }\n  ",
          "\n  .main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  .react-transform-wrapper {\n    overflow: visible;\n    z-index: 2;\n  }\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = (0, r.Z)([
          "\n            transform: translateX(-4rem);\n          ",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = (0, r.Z)([
          "\n            transform: translateX(-4rem);\n          ",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = (0, r.Z)([
          "\n            transform: translateX(4rem);\n          ",
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
          "\n            transform: translateX(4rem);\n          ",
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
          "\n          bottom: ",
          "px;\n          left: ",
          "px;\n          right: unset;\n          top: unset;\n        ",
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
          "\n          top: ",
          "px;\n          left: ",
          "px;\n          bottom: unset;\n          right: unset;\n        ",
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
          "\n          top: ",
          "px;\n          right: ",
          "px;\n          bottom: unset;\n          left: unset;\n        ",
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
          "\n          bottom: ",
          "px;\n          right: ",
          "px;\n          left: unset;\n          top: unset;\n        ",
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
          "\n  position: absolute;\n  transition: var(--transition-smooth);\n  background: radial-gradient(50% 50% at 50% 50%, #626262 0%, #000000 100%);\n  background: ",
          ";\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid #fff;\n  transform: none;\n  z-index: 10;\n  &.hide {\n    opacity: 0;\n    z-index: -1;\n    pointer-events: none;\n    ",
          "\n  }\n  &.basekrpano {\n    /* opacity: 0.5; */\n  }\n  &.default {\n  }\n  &.custom1 {\n  }\n  ",
          "\n",
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
          "\n  position: relative;\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = (0, r.Z)([
          "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  cursor: pointer;\n  img {\n    width: auto;\n    height: auto;\n  }\n  &.active img {\n    box-shadow: 0 0 2px 8px rgb(0 0 0 / 0.1);\n    border-radius: 50%;\n  }\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = (0, r.Z)([
          "\n  width: 100%;\n  height: 80vh;\n  position: relative;\n  ",
          " {\n    justify-content: center;\n    position: fixed;\n    top: 1rem;\n    left: 0;\n  }\n",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      var j = i.ZP.div.withConfig({
          displayName: "styled__MapWrapper",
          componentId: "Panoee__sc-d2213e04-0",
        })(o()),
        N = i.ZP.div.withConfig({
          displayName: "styled__ActionMapWrapper",
          componentId: "Panoee__sc-d2213e04-1",
        })(u()),
        S = i.ZP.div.withConfig({
          displayName: "styled__MapPanelWrapper",
          componentId: "Panoee__sc-d2213e04-2",
        })(
          v(),
          function (n) {
            return n.bgColor;
          },
          function (n) {
            return "right" === n.position ? (0, i.iv)(a()) : (0, i.iv)(f());
          },
          function (n) {
            return "right" === n.position
              ? (0, i.iv)(c(), N)
              : (0, i.iv)(s(), N);
          },
          function (n) {
            return "right" === n.position ? (0, i.iv)(p()) : (0, i.iv)(d());
          },
          function (n) {
            return "right" === n.position ? (0, i.iv)(l()) : (0, i.iv)(h());
          },
        ),
        z = i.ZP.div.withConfig({
          displayName: "styled__MapBoxWrapper",
          componentId: "Panoee__sc-d2213e04-3",
        })(
          k(),
          function (n) {
            return n.bgColor;
          },
          function (n) {
            return "bottomLeft" === n.position
              ? (0, i.iv)(m())
              : "topLeft" === n.position
                ? (0, i.iv)(g())
                : "topRight" === n.position
                  ? (0, i.iv)(b())
                  : (0, i.iv)(x());
          },
          function (n) {
            return "bottomLeft" === n.position
              ? (0, i.iv)(w(), n.offsetBottom, n.offsetLeft)
              : "topLeft" === n.position
                ? (0, i.iv)(Z(), n.offsetTop, n.offsetLeft)
                : "topRight" === n.position
                  ? (0, i.iv)(_(), n.offsetTop, n.offsetRight)
                  : (0, i.iv)(y(), n.offsetBottom, n.offsetRight);
          },
        ),
        I = i.ZP.div.withConfig({
          displayName: "styled__GoogleMapWrapper",
          componentId: "Panoee__sc-d2213e04-4",
        })(P()),
        W = i.ZP.div.withConfig({
          displayName: "styled__MarkerWrapper",
          componentId: "Panoee__sc-d2213e04-5",
        })(C()),
        X = i.ZP.div.withConfig({
          displayName: "styled__PopupWrapper",
          componentId: "Panoee__sc-d2213e04-6",
        })(M(), N);
    },
    17840: function (n, t, e) {
      e.d(t, {
        h: function () {
          return i;
        },
      });
      var r = e(67294),
        i = function () {
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
//# sourceMappingURL=6269.808f5601c22d1f9d.js.map
