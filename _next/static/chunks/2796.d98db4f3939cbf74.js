"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2796],
  {
    17840: function (n, e, t) {
      t.d(e, {
        h: function () {
          return o;
        },
      });
      var r = t(67294),
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
    72796: function (n, e, t) {
      t.r(e);
      var r = t(828),
        o = t(85893),
        i = t(5152),
        a = t.n(i),
        d = t(67294),
        l = t(17840),
        c = t(25617),
        p = t(7400),
        s = t(55837),
        u = a()(
          function () {
            return Promise.all([
              t.e(9774),
              t.e(1649),
              t.e(1276),
              t.e(1382),
              t.e(4079),
              t.e(9505),
              t.e(6323),
              t.e(5098),
              t.e(518),
            ]).then(t.bind(t, 30518));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [30518];
              },
            },
            ssr: !1,
          },
        ),
        f = a()(
          function () {
            return Promise.all([
              t.e(1649),
              t.e(1276),
              t.e(4011),
              t.e(6655),
              t.e(3742),
              t.e(7812),
            ]).then(t.bind(t, 47812));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [47812];
              },
            },
            ssr: !1,
          },
        ),
        m = a()(
          function () {
            return t.e(7591).then(t.bind(t, 87591));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [87591];
              },
            },
          },
        ),
        h = a()(
          function () {
            return t.e(5329).then(t.bind(t, 85329));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [85329];
              },
            },
          },
        ),
        g = a()(
          function () {
            return t.e(7732).then(t.bind(t, 17732));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [17732];
              },
            },
          },
        ),
        b = a()(
          function () {
            return t.e(3162).then(t.bind(t, 23162));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [23162];
              },
            },
          },
        ),
        x = (0, d.memo)(function (n) {
          var e = n.onNextScene,
            t = n.onChangeScene,
            i = (0, r.Z)((0, d.useState)(!1), 2),
            a = i[0],
            x = i[1],
            v = (0, l.h)().checkDevice,
            w = (0, c.v9)(p.d5),
            y = (0, c.v9)(p.AA),
            k = (0, d.useCallback)(function () {
              return x(function (n) {
                return !n;
              });
            }, []);
          return (
            (0, d.useEffect)(
              function () {
                var n, e;
                (null == y ? void 0 : y.selected) === "wall" &&
                  x(
                    v().isMobile()
                      ? !!(null == y
                          ? void 0
                          : null === (n = y.config) || void 0 === n
                            ? void 0
                            : n.autoOpenSceneListMobile)
                      : !!(null == y
                          ? void 0
                          : null === (e = y.config) || void 0 === e
                            ? void 0
                            : e.autoOpenSceneListDesktop),
                  );
              },
              [y],
            ),
            (0, o.jsxs)(s.E0, {
              children: [
                (0, o.jsx)(m, {}),
                (0, o.jsxs)(u, {
                  onChangeScene: t,
                  onNextScene: e,
                  children: [
                    (0, o.jsx)(g, {
                      isShow: a,
                      onToggleShow: k,
                      className: (null == w ? void 0 : w.isEnabled)
                        ? "hasCopyRight"
                        : "",
                    }),
                    (0, o.jsx)(f, {
                      isShow: a,
                      onChangeScene: t,
                      className: (null == w ? void 0 : w.isEnabled)
                        ? "hasCopyRight"
                        : "",
                    }),
                  ],
                }),
                (0, o.jsx)(b, {}),
                (0, o.jsx)(h, {}),
              ],
            })
          );
        });
      e.default = x;
    },
    55837: function (n, e, t) {
      t.d(e, {
        E0: function () {
          return u;
        },
        NA: function () {
          return h;
        },
        OT: function () {
          return m;
        },
        Pz: function () {
          return f;
        },
        bx: function () {
          return g;
        },
        ln: function () {
          return b;
        },
      });
      var r = t(7297),
        o = t(19521),
        i = t(83953);
      function a() {
        var n = (0, r.Z)([
          "\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background: #ffffff;\n  button {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, r.Z)([
          "\n  top: 0;\n  left: 0;\n  padding: 0 0 2rem;\n  width: 100%;\n  max-width: none;\n  transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.25) 5%,\n    transparent\n  );\n  position: absolute;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  z-index: 2;\n  .--content {\n    display: flex;\n    flex-flow: column;\n    color: #fff;\n    font-weight: 600;\n    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);\n    margin-bottom: 0.5rem;\n    text-align: center;\n    padding: 0.5rem 0;\n    .--projectName {\n      font-size: 1.25rem;\n      font-weight: inherit;\n      color: inherit;\n    }\n    .--sceneName {\n      background: var(--color-primary);\n      color: var(--color-text);\n      text-shadow: none;\n      width: max-content;\n      margin: 0 auto;\n      padding: 2px 12px;\n      border-radius: 25px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 100%;\n      white-space: nowrap;\n    }\n  }\n\n  .--logo {\n    top: 0.5rem;\n    cursor: pointer;\n    &.topLeft {\n      left: 1rem;\n      position: absolute;\n    }\n    &.topCenter {\n      left: 0;\n      right: 0;\n      margin: 0.5rem auto;\n    }\n    &.topRight {\n      position: absolute;\n      right: 1rem;\n    }\n    img {\n      width: 100%;\n      height: auto;\n      pointer-events: auto;\n      max-height: max-content;\n    }\n    @media (max-width: 575px) {\n      position: relative !important;\n      justify-content: initial !important;\n      max-width: 45vw;\n      padding: 0 0 12px 0 !important;\n      img {\n        max-width: 100%;\n      }\n    }\n  }\n  @media (max-width: 575px) {\n    align-items: center;\n    justify-content: center;\n    .--logo {\n      left: 0 !important;\n      right: 0 !important;\n    }\n    .mainTitle {\n      max-width: calc(100% - 100px);\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(90deg, #000, rgba(0, 0, 0, 0));\n  padding: 0.5rem 2.5rem 0.5rem 0.5rem;\n  color: #fff;\n  z-index: 8;\n  * {\n    color: #fff;\n  }\n  a {\n    font-weight: 700;\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: auto;\n  background: var(--color-primary);\n  color: var(--color-text);\n  height: calc(100vh - 87px);\n  padding: 0 0.25rem;\n  z-index: 1;\n  transition: var(--transition-smooth);\n  backdrop-filter: blur(10px);\n  @media (max-width: 575px) {\n  }\n  &.hasCopyRight {\n    height: calc(100vh - 120px);\n  }\n  .--toggler {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    transform: translate(-100%, 42px);\n    background: var(--color-primary);\n    width: 2rem;\n    height: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px 0 0 4px;\n    cursor: pointer;\n    backdrop-filter: blur(10px);\n  }\n  .controlBar {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    margin: 0.75rem 0;\n    height: 100%;\n    > * {\n      display: flex;\n    }\n    .itemControlBtn {\n      width: 2.5rem;\n      height: 2.5rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 1.25rem;\n      border-radius: 25px;\n      margin: 2px 0;\n      transition: var(--transition-regular);\n      flex: 0 0 auto;\n      cursor: pointer;\n      opacity: 0.8;\n      background: none;\n      border: none;\n      img {\n        width: 1.25rem;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          opacity: 1;\n          text-shadow: 0 0 12px rgba(255, 255, 255, 0.75);\n          i {\n            font-weight: 900;\n          }\n        }\n      }\n    }\n  }\n  &.--controlbar-off {\n    transform: translateX(100%);\n  }\n  @media (max-width: 640px) {\n    .--toggler {\n      transform: translate(-100%, 20vh);\n      bottom: initial;\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 100%;\n  z-index: 2;\n  transition: var(--transition-smooth);\n  .scenes {\n    background: var(--color-primary);\n    padding: 0.4rem 0.75rem 0.4rem;\n  }\n  &.hideNav {\n    /* height: 80px; */\n  }\n\n  &.--hide {\n    transform: translateY(100%);\n  }\n  /* @media (max-width: 575px) {\n    &.hasCopyRight {\n      .--tabs .ant-tabs-content-holder {\n        padding-bottom: calc(34px + 0.4rem);\n      }\n    }\n    //padding: 0.4rem 0.5rem 2rem 0.4rem;\n  } */\n  &.hasCopyRight {\n    .--tabs .ant-tabs-content-holder {\n      padding-bottom: calc(34px + 0.4rem);\n    }\n    .scenes {\n      padding-bottom: calc(34px + 0.4rem);\n    }\n  }\n  .--tabs {\n    .ant-tabs {\n      &-nav {\n        margin: 0 0 0 12px;\n        &:before {\n          border: none;\n        }\n        &-more {\n          color: #fff;\n        }\n      }\n      &-content-holder {\n        background-color: var(--color-primary);\n        padding: 0.4rem 0.75rem 0.4rem;\n        backdrop-filter: blur(10px);\n      }\n      &-tab {\n        margin: 0;\n        border: 1px solid rgb(255 255 255 / 0.35);\n        border-bottom: none;\n        color: var(--color-text);\n        padding: 0.25rem 0.5rem;\n        border-radius: 8px 8px 0 0;\n        margin-right: 2px;\n        cursor: pointer;\n        transition: var(--transition-regular);\n        background: rgba(0, 0, 0, 0.25);\n        backdrop-filter: blur(10px);\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            border-color: rgba(255, 255, 255, 0.5);\n          }\n        }\n        &-active {\n          background: var(--color-primary);\n          .ant-tabs-tab-btn {\n            color: var(--color-text);\n          }\n        }\n      }\n      &-ink-bar {\n        display: none;\n      }\n    }\n    .flickity-viewport {\n      overflow: visible;\n    }\n\n    @media (max-width: 575px) {\n      /* padding: 0 0.25rem; */\n      /* flex-wrap: nowrap;\n      overflow: auto; */\n      .ant-tabs-tab {\n        flex: 0 0 auto;\n      }\n    }\n  }\n\n  .itemScene {\n    width: 128px;\n    height: 74px;\n    overflow: hidden;\n    margin-right: 2px;\n    position: relative;\n    border: 2px solid transparent;\n    transition: var(--transition-regular);\n    cursor: pointer;\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        border-color: rgba(255, 255, 255, 0.75);\n      }\n    }\n    &.active {\n      border: 2px solid #fff;\n    }\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      background: rgba(0, 0, 0, 1);\n    }\n    .--menuSceneTitle {\n      position: absolute;\n      bottom: 0;\n      padding: 2rem 0.75rem 0.25rem;\n      background: linear-gradient(0deg, black, transparent);\n      display: block;\n      width: 100%;\n      margin: 0;\n      text-align: center;\n      color: var(--color-text);\n      font-size: 0.8rem;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    @media (max-width: 575px) {\n      width: 40%;\n      border: 1px solid rgba(255, 255, 255, 0.35);\n    }\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, r.Z)([""]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      var u = o.ZP.div.withConfig({
          displayName: "styled__ThemeWallWrapper",
          componentId: "Panoee__sc-d4ffddfd-0",
        })(a()),
        f = o.ZP.div.withConfig({
          displayName: "styled__HeaderWrapper",
          componentId: "Panoee__sc-d4ffddfd-1",
        })(d()),
        m = o.ZP.div.withConfig({
          displayName: "styled__CopyrightWrapper",
          componentId: "Panoee__sc-d4ffddfd-2",
        })(l()),
        h = o.ZP.div.withConfig({
          displayName: "styled__ControlbarWrapper",
          componentId: "Panoee__sc-d4ffddfd-3",
        })(c()),
        g = o.ZP.div.withConfig({
          displayName: "styled__ListSceneWrapper",
          componentId: "Panoee__sc-d4ffddfd-4",
        })(p()),
        b = (0, o.ZP)(i.ln).withConfig({
          displayName: "styled__ControlbarPopoverWrapper",
          componentId: "Panoee__sc-d4ffddfd-5",
        })(s());
    },
  },
]);
//# sourceMappingURL=2796.d98db4f3939cbf74.js.map
