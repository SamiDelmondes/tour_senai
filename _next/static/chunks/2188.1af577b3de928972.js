"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2188],
  {
    82188: function (n, t, o) {
      o.r(t);
      var e = o(828),
        r = o(85893),
        i = o(5152),
        a = o.n(i),
        l = o(67294),
        s = o(37091),
        c = a()(
          function () {
            return o.e(7491).then(o.bind(o, 77491));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [77491];
              },
            },
          },
        ),
        f = (0, l.memo)(function (n) {
          var t = n.listCallToAction,
            o = n.callToActionConfig,
            i = (0, e.Z)((0, l.useState)(!1), 2),
            a = i[0],
            f = i[1];
          return (0, r.jsxs)(s.M, {
            offsetLeft: null == o ? void 0 : o.offsetLeft,
            offsetRight: null == o ? void 0 : o.offsetRight,
            offsetBottom: null == o ? void 0 : o.offsetBottom,
            className: ""
              .concat(
                (null == o ? void 0 : o.layout) === "bubble"
                  ? ""
                  : "--layoutList",
                " ",
              )
              .concat(
                (null == o ? void 0 : o.position) === "left"
                  ? "--left"
                  : "--right",
                " ",
              )
              .concat(a ? "active" : ""),
            children: [
              (0, r.jsxs)("div", {
                className: "--toggler",
                onClick: function () {
                  return f(function (n) {
                    return !n;
                  });
                },
                children: [
                  (0, r.jsx)("i", {
                    "aria-hidden": !0,
                    className: "fal fa-ellipsis-v",
                  }),
                  (0, r.jsx)("i", {
                    "aria-hidden": !0,
                    className: "fal fa-times",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "--panel",
                children: (void 0 === t ? [] : t).map(function (n) {
                  return (0, r.jsx)(c, { item: n }, n.id);
                }),
              }),
            ],
          });
        });
      t.default = f;
    },
    37091: function (n, t, o) {
      o.d(t, {
        M: function () {
          return s;
        },
        v: function () {
          return l;
        },
      });
      var e = o(7297),
        r = o(19521);
      function i() {
        var n = (0, e.Z)([
          "\n  color: inherit !important;\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0.5rem;\n  cursor: pointer;\n  transition: var(--transition-regular);\n  border-radius: 8px;\n  .--symbol {\n    font-size: 1.25rem;\n    margin-right: 0.5rem;\n    width: 1.5rem;\n    max-height: 1.5rem;\n    object-fit: contain;\n    display: inline-flex;\n    justify-content: center;\n  }\n  .--arrow {\n    position: absolute;\n    right: 1rem;\n    transform: translateX(1rem);\n    opacity: 0;\n    transition: var(--transition-smooth);\n  }\n  span {\n    max-width: 160px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background: rgba(0, 0, 0, 0.35);\n      .--arrow {\n        opacity: 1;\n        transform: none;\n      }\n    }\n  }\n",
        ]);
        return (
          (i = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = (0, e.Z)([
          "\n  position: absolute;\n  bottom: ",
          "px;\n  &.--left {\n    left: ",
          "px;\n    .--panel {\n      left: 0;\n    }\n    &.--layoutList {\n      .--panel {\n        left: ",
          "px;\n      }\n      ",
          " {\n        span {\n          left: 0;\n          transform: translateX(42px) scale(0.9);\n        }\n      }\n    }\n  }\n  &.--right {\n    right: ",
          "px;\n    .--panel {\n      right: 0;\n      transform-origin: bottom right;\n    }\n    &.--layoutList {\n      .--panel {\n        right: ",
          "px;\n        ",
          " {\n          span {\n            right: 0;\n            transform: translateX(-42px) scale(0.9);\n          }\n        }\n      }\n    }\n  }\n  z-index: 1;\n  .--toggler {\n    width: 3.5rem;\n    height: 3.5rem;\n    font-size: 1.25rem;\n    border-radius: 50%;\n    background: var(--color-primary);\n    backdrop-filter: blur(10px);\n    color: var(--color-text);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    i:nth-child(1) {\n      display: block;\n    }\n    i:nth-child(2) {\n      display: none;\n    }\n  }\n  .--panel {\n    position: absolute;\n    bottom: 4.5rem;\n    background: var(--color-primary);\n    backdrop-filter: blur(10px);\n    color: var(--color-text);\n    width: max-content;\n    display: flex;\n    flex-flow: column;\n    border-radius: 12px;\n    padding: 0.5rem;\n    min-width: 160px;\n    transition: all 0.35s cubic-bezier(0.45, 1.83, 0.6, 0.97);\n    opacity: 0;\n    transform: scale(0.5);\n    pointer-events: none;\n    transform-origin: bottom left;\n  }\n  &.active {\n    .--toggler {\n      i:nth-child(1) {\n        display: none;\n      }\n      i:nth-child(2) {\n        display: block;\n      }\n    }\n    .--panel {\n      transform: none;\n      opacity: 1;\n      pointer-events: auto;\n    }\n  }\n  &.--layoutList {\n    .--toggler {\n      display: none;\n    }\n    .--panel {\n      display: block;\n      opacity: 1;\n      transform: none;\n      pointer-events: auto;\n      border-radius: 0;\n      background-color: transparent;\n      backdrop-filter: initial;\n      min-width: initial;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      position: absolute;\n      height: max-content;\n    }\n    ",
          " {\n      width: 42px;\n      height: 42px;\n      background: var(--color-primary);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      transition: var(--transition-smooth);\n      margin: 0.5rem 0;\n      span {\n        position: absolute;\n        padding: 4px 8px;\n        border-radius: 4px;\n        opacity: 0;\n        font-weight: 600;\n        pointer-events: none;\n        transition: var(--transition-regular);\n        text-shadow: 0 1px 6px rgb(0 0 0 / 35%);\n      }\n      .--symbol {\n        margin: 0;\n        width: auto;\n        font-size: 1rem;\n        max-width: 1.5rem;\n        max-height: 1.5rem;\n        height: auto;\n        object-fit: contain;\n      }\n      .--arrow {\n        display: none;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          background: var(--color-primary);\n          transform: scale(1.1);\n          span {\n            opacity: 1;\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      var l = r.ZP.div.withConfig({
          displayName: "styled__CallToActionItemWrapper",
          componentId: "Panoee__sc-e856d75-0",
        })(i()),
        s = r.ZP.div.withConfig({
          displayName: "styled__CallToActionsWrapper",
          componentId: "Panoee__sc-e856d75-1",
        })(
          a(),
          function (n) {
            return n.offsetBottom || 165;
          },
          function (n) {
            return n.offsetLeft || 12;
          },
          function (n) {
            return n.offsetLeft || 12;
          },
          l,
          function (n) {
            return n.offsetRight || 12;
          },
          function (n) {
            return n.offsetRight || 12;
          },
          l,
          l,
        );
    },
  },
]);
//# sourceMappingURL=2188.1af577b3de928972.js.map
