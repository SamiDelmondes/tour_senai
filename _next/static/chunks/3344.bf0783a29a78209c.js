"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3344],
  {
    93344: function (n, t, e) {
      e.r(t),
        e.d(t, {
          ThemeCustom1: function () {
            return h;
          },
        });
      var o = e(85893),
        r = e(67294),
        i = e(5152),
        a = e.n(i),
        s = e(63665),
        d = a()(
          function () {
            return Promise.all([e.e(9505), e.e(4573)]).then(e.bind(e, 84573));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [84573];
              },
            },
          },
        ),
        l = a()(
          function () {
            return e.e(9982).then(e.bind(e, 9982));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9982];
              },
            },
          },
        ),
        c = a()(
          function () {
            return Promise.all([e.e(1649), e.e(1276), e.e(9630)]).then(
              e.bind(e, 79680),
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [79680];
              },
            },
            ssr: !1,
          },
        ),
        p = a()(
          function () {
            return Promise.all([
              e.e(9774),
              e.e(1649),
              e.e(1276),
              e.e(1382),
              e.e(4079),
              e.e(9505),
              e.e(6323),
              e.e(5098),
              e.e(518),
            ]).then(e.bind(e, 30518));
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
        h = (0, r.memo)(function (n) {
          var t = n.onChangeScene,
            e = n.onNextScene;
          return (0, o.jsxs)(s.zy, {
            children: [
              (0, o.jsx)(c, { onChangeScene: t }),
              (0, o.jsx)(p, {
                onChangeScene: t,
                onNextScene: e,
                children: (0, o.jsx)(l, {}),
              }),
              (0, o.jsx)(d, {}),
            ],
          });
        });
      t.default = h;
    },
    63665: function (n, t, e) {
      e.d(t, {
        NA: function () {
          return m;
        },
        Pz: function () {
          return u;
        },
        n7: function () {
          return x;
        },
        zy: function () {
          return f;
        },
      });
      var o = e(7297),
        r = e(38505),
        i = e(19521);
      function a() {
        var n = (0, o.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  .view {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: 0.5s;\n    transition-delay: 0.15s;\n    img {\n      height: 100%;\n      min-height: 100%;\n      object-fit: cover;\n    }\n    &.active {\n      transform: scale(1.05, 1.05);\n    }\n  }\n\n  .cursorCus {\n    width: 50px;\n    height: 50px;\n    margin-top: -25px;\n    margin-left: -25px;\n    display: flex;\n    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 50%;\n    z-index: 100;\n    pointer-events: none;\n    transition: 0.2s linear;\n    display: none !important;\n    i:first-child {\n      color: #fff;\n      font-size: 25px;\n      transition: 0.3s;\n    }\n    i:nth-child(2) {\n      color: #fff;\n      font-size: 10px;\n      text-align: center;\n      opacity: 0;\n      transition: 0.3s;\n    }\n    i:last-child {\n      color: #fff;\n      font-size: 25px;\n      transition: 0.3s;\n    }\n    &.active {\n      i:first-child {\n        margin-left: -70%;\n      }\n      i:nth-child(2) {\n        flex: 1;\n        opacity: 1;\n      }\n      i:last-child {\n        margin-right: -70%;\n      }\n    }\n  }\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, o.Z)([
          "\n          bottom: -4rem;\n          opacity: 0;\n        ",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, o.Z)([
          "\n  background: var(--color-primary);\n  position: absolute;\n  z-index: 11;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  padding: 0 8px 0 15px;\n  height: 50px;\n  cursor: initial;\n  @media (max-width: 575px) {\n    align-items: flex-start;\n    justify-content: space-between;\n    padding-top: 12px;\n    height: ",
          ";\n    transition: height 0.3s;\n    /* padding-bottom: 50px; */\n  }\n  .copyright {\n    pointer-events: auto;\n    flex: 1 1 0%;\n    transition: all 0.25s ease-out 0s;\n    z-index: 11;\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    p {\n      color: rgba(255, 255, 255, 0.75);\n      background-image: linear-gradient(\n        to right,\n        rgba(0, 0, 0, 0.75),\n        transparent\n      );\n      padding: 0.5rem 6rem 0.5rem 15px;\n      display: inline-flex;\n      a {\n        font-weight: 500;\n        color: rgb(255, 255, 255);\n        margin-left: 0.25rem;\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n    @media (max-width: 575px) {\n      position: absolute;\n      bottom: 100%;\n      left: 0px;\n      p {\n        padding: 0.125rem 4rem 0.125rem 0.75rem;\n      }\n    }\n  }\n  .txtBox {\n    flex: 1;\n    max-width: 33%;\n\n    .--projectTitle {\n      font-weight: 600;\n      font-size: 15px;\n      margin: 0 0 -0.125rem 0;\n      color: var(--color-text);\n      white-space: nowrap;\n      max-width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    p {\n      color: var(--color-text);\n      /* font-size: 0.75rem; */\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      width: 100%;\n    }\n    @media (max-width: 575px) {\n      flex: initial;\n      max-width: 65%;\n    }\n  }\n  .nav {\n    text-align: center;\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    button {\n      border: none;\n      background: transparent;\n      color: var(--color-text);\n      cursor: pointer;\n      width: 42px;\n      height: 42px;\n      flex: 0 0 auto;\n      margin: 0 2px;\n      font-size: 1.25rem;\n      border-radius: 4px;\n      box-sizing: content-box;\n      padding: 0;\n      img {\n        width: 1.25rem;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          background: rgb(0 0 0 / 0.25);\n        }\n      }\n      &.active {\n        background: rgb(0 0 0 / 0.25);\n      }\n      @media (max-width: 575px) and (hove: hover) and (pointer: fine) {\n        &:hover {\n          background: transparent;\n        }\n      }\n      @media (max-width: 575px) {\n        &:active {\n          background: rgb(0 0 0 / 0.25);\n        }\n      }\n    }\n    @media (max-width: 575px) {\n      bottom: 0.25rem;\n      left: 0;\n      position: absolute;\n      justify-content: center;\n      width: 100%;\n      opacity: 1;\n      transition: all 0.5s cubic-bezier(0.04, 1, 0.6, 0.97) 0s;\n      ",
          "\n    }\n  }\n  .actGroup {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    button {\n      border: none;\n      background: transparent;\n      color: var(--color-text);\n      cursor: pointer;\n      width: 42px;\n      height: 42px;\n      flex: 0 0 auto;\n      font-size: 1.25rem;\n      border-radius: 4px;\n      img {\n        width: 1.25rem;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          background: rgb(0 0 0 / 0.25);\n        }\n      }\n      &.act-toggle__controlbar {\n        transition: all 0.2s ease-in-out;\n        transform: rotateX(0);\n        i.hide {\n          transform: rotateX(180deg);\n        }\n      }\n      @media (max-width: 575px) and (hover: hover) and (pointer: fine) {\n        &:hover {\n          background: transparent;\n        }\n      }\n      @media (max-width: 575px) {\n        &:active {\n          background: rgb(0 0 0 / 0.25);\n        }\n      }\n    }\n    .pop {\n      &Color {\n        position: relative;\n        &.open {\n          .popMain {\n            opacity: 1;\n            visibility: visible;\n          }\n        }\n      }\n      &Main {\n        z-index: 11;\n        opacity: 0;\n        visibility: hidden;\n        position: absolute;\n        bottom: 100%;\n        right: 0;\n      }\n    }\n  }\n  .controlbar-top {\n    z-index: 11;\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    color: #fff;\n    padding: 0.25rem 0.5rem 0;\n    &:before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 70%;\n      height: 100%;\n      border-style: solid;\n      border-color: var(--color-primary);\n      border-width: 2px 0 2px 2px;\n      border-radius: 8px 0 0 0;\n      -webkit-transform: skewX(-20deg);\n      -moz-transform: skewX(-20deg);\n      -o-transform: skewX(-20deg);\n      transform: skewX(-20deg);\n      background-color: var(--color-primary);\n      z-index: -1;\n    }\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 70%;\n      height: 100%;\n      border-style: solid;\n      border-color: var(--color-primary);\n      border-width: 2px 2px 2px 0;\n      border-radius: 0 8px 0 0;\n      -webkit-transform: skewX(20deg);\n      -moz-transform: skewX(20deg);\n      -o-transform: skewX(20deg);\n      transform: skewX(20deg);\n      background-color: var(--color-primary);\n      z-index: -1;\n    }\n    button {\n      background: transparent;\n      border: transparent;\n      font-size: 1rem;\n      border-radius: 50%;\n      margin: 0 0.25rem;\n      width: 2rem;\n      height: 2rem;\n      opacity: 0.5;\n      ",
          "\n      img {\n        width: 1rem;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          opacity: 0.75;\n          background: transparent;\n        }\n      }\n      &.active {\n        opacity: 1;\n      }\n    }\n    @media (max-width: 575px) {\n      position: absolute;\n      top: 4rem;\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, o.Z)([
          "\n  z-index: 9;\n  position: absolute;\n  top: 1rem;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max-content;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: none;\n  .--logo {\n    padding: 0 12px 12px;\n    width: 100%;\n    display: flex;\n    cursor: pointer;\n    &.topLeft {\n      justify-content: flex-start;\n      position: absolute;\n      top: 0;\n    }\n    &.topCenter {\n      justify-content: center;\n    }\n    &.topRight {\n      justify-content: flex-end;\n      position: absolute;\n      top: 0;\n    }\n    img {\n      width: 100%;\n      height: auto;\n      pointer-events: auto;\n      max-height: max-content;\n    }\n    @media (max-width: 575px) {\n      position: relative !important;\n      justify-content: center !important;\n      max-width: 45vw;\n      display: inline-block;\n      text-align: center;\n      img {\n        max-width: 100%;\n      }\n    }\n  }\n\n  .--scenes {\n    pointer-events: auto;\n    display: flex;\n    .dropdown {\n      &Group {\n        margin: 0 0.25rem;\n        width: 160px;\n        position: relative;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            .dropdownList {\n              pointer-events: auto;\n              button {\n                opacity: 1;\n                transform: none;\n              }\n            }\n            .dropdownLabel {\n              border-color: transparent;\n              // transform: scale(0.95);\n              &:after {\n                // opacity: 0.5;\n              }\n            }\n          }\n        }\n        &.active .dropdownLabel {\n          background: #fff;\n          color: var(--color-primary);\n          border-color: transparent;\n          box-shadow: 0 12px 24px rgb(0 0 0 / 0.15);\n          outline: none;\n          &:after {\n            display: none;\n          }\n        }\n      }\n      &Label {\n        border-radius: 0px;\n        padding: 0 0.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n        height: 32px;\n        text-transform: uppercase;\n        cursor: pointer;\n        background: var(--color-primary);\n        border: 1px solid var(--color-primary);\n        color: var(--color-text);\n        transition: all 0.5s cubic-bezier(0.04, 1, 0.6, 0.97) 0s;\n        flex-direction: row-reverse;\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          background: #000;\n          opacity: 0.5;\n          display: block;\n          width: 100%;\n          height: 100%;\n          top: 0;\n          left: 0;\n          z-index: -1;\n          opacity: 0;\n          transition: all 0.15s ease-out;\n        }\n        span {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: block;\n        }\n        i {\n          font-size: 1rem;\n          transition: all 0.5s cubic-bezier(0.04, 1, 0.6, 0.97) 0s;\n        }\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            i {\n              transform: rotate(45deg);\n            }\n          }\n        }\n      }\n      &List {\n        padding-top: 0.5rem;\n        position: absolute;\n        top: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        pointer-events: none;\n        min-width: 100%;\n        max-width: 150%;\n        .--listing {\n          white-space: nowrap;\n          max-height: 70vh;\n          overflow: auto;\n          width: 100%;\n          display: flex;\n          flex-flow: column;\n          &::-webkit-scrollbar {\n            display: none;\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n          }\n        }\n        button {\n          cursor: pointer;\n          /* text-transform: uppercase; */\n          background: none;\n          border-radius: 0;\n          color: var(--color-text);\n          border: none;\n          padding: 0.5rem;\n          width: 100%;\n          background: var(--color-primary);\n          position: relative;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: block;\n          flex: 0 0 auto;\n          opacity: 0;\n          transform: translateY(1rem);\n          transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n          text-align: left;\n          .--menuSceneTitle {\n            position: relative;\n            z-index: 1;\n            color: inherit;\n            font-size: inherit;\n            font-weight: inherit;\n          }\n          &.active {\n            background: var(--color-secondary);\n            color: var(--color-text);\n            border-color: transparent;\n            box-shadow: 0 12px 24px rgb(0 0 0 / 0.15);\n          }\n          &:nth-child(1) {\n            transition-delay: 0s;\n          }\n          &:nth-child(2) {\n            transition-delay: 0.05s;\n          }\n          &:nth-child(3) {\n            transition-delay: 0.1s;\n          }\n          &:nth-child(4) {\n            transition-delay: 0.15s;\n          }\n          &:nth-child(5) {\n            transition-delay: 0.2s;\n          }\n          &:nth-child(6) {\n            transition-delay: 0.25s;\n          }\n          &:nth-child(7) {\n            transition-delay: 0.3s;\n          }\n          &:nth-child(8) {\n            transition-delay: 0.35s;\n          }\n          &:nth-child(9) {\n            transition-delay: 0.4s;\n          }\n          &:nth-child(10) {\n            transition-delay: 0.45s;\n          }\n          &:nth-child(11) {\n            transition-delay: 0.5s;\n          }\n          &:nth-child(12) {\n            transition-delay: 0.55s;\n          }\n          &:nth-child(13) {\n            transition-delay: 0.6s;\n          }\n          &:nth-child(14) {\n            transition-delay: 0.65s;\n          }\n          &:nth-child(15) {\n            transition-delay: 0.7s;\n          }\n          &:after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            background: var(--color-secondary);\n            display: block;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            z-index: 0;\n            opacity: 0;\n            transition: all 0.15s ease-out;\n          }\n          &:hover:after {\n            opacity: 1;\n          }\n          &:last-child {\n          }\n        }\n      }\n    }\n  }\n\n  @media (max-width: 575px) {\n    top: 0.5rem;\n    .--scenes {\n      justify-content: start;\n      padding: 0 0.5rem 0.75rem;\n      max-width: 100%;\n      overflow: auto;\n      .dropdownLabel {\n        box-shadow: none !important;\n      }\n      &::-webkit-scrollbar {\n        &-track {\n          background-color: var(--color-primary--light);\n        }\n        &-thumb {\n          background-color: var(--color-primary);\n        }\n        scrollbar-width: 100%;\n        height: 6px;\n      }\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, o.Z)(["\n            bottom: 140px;\n          "]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, o.Z)(["\n            bottom: 110px;\n          "]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, o.Z)([
          "\n  position: absolute;\n  background: var(--color-primary);\n  border-top: 4px solid var(--color-secondary);\n  color: #fff;\n  width: 320px;\n  padding: 0 1.5rem 1.5rem 1.5rem;\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n  right: 0;\n  bottom: 50px;\n  border-radius: 0;\n  max-height: 420px;\n  overflow: auto;\n  transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n  transform: translate(100%, 0);\n  z-index: 10;\n  @media (max-width: 768px) {\n    width: 70vw;\n    max-width: 320px;\n  }\n  @media (max-width: 576px) {\n    width: 84vw;\n    z-index: 11;\n    ",
          "\n  }\n  &::-webkit-scrollbar {\n    display: none;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  &.active {\n    opacity: 1;\n    transform: translate(0, 0);\n    pointer-events: auto;\n    z-index: 1;\n  }\n  .popInfoContentHead {\n    position: sticky;\n    background: var(--color-primary);\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 0.75rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid rgb(255 255 255 / 0.25);\n    margin-bottom: 0.5rem;\n    color: var(--color-text);\n    h4 {\n      flex: 1;\n      font-size: 20px;\n      margin: 0;\n      color: inherit;\n    }\n    @media (max-width: 575px) {\n      padding: 0;\n    }\n  }\n  .popInfoClose {\n    width: 1.5rem;\n    height: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        background: rgb(0 0 0 / 0.25);\n      }\n    }\n    @media (max-width: 575px) {\n      width: 2.25rem;\n      height: 2.25rem;\n    }\n  }\n  .popInfoArticle {\n    color: var(--color-text);\n  }\n  p {\n    color: var(--color-text);\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var f = i.ZP.div.withConfig({
          displayName: "styled__ThemeCustom1Wrapper",
          componentId: "Panoee__sc-fabf4530-0",
        })(a()),
        m = i.ZP.div.withConfig({
          displayName: "styled__ControlbarWrapper",
          componentId: "Panoee__sc-fabf4530-1",
        })(
          d(),
          function (n) {
            return n.isShowControlbar ? "100px" : "60px";
          },
          function (n) {
            return !n.isShowControlbar && (0, i.iv)(s());
          },
          r.b0,
        ),
        u = i.ZP.div.withConfig({
          displayName: "styled__HeaderWrapper",
          componentId: "Panoee__sc-fabf4530-2",
        })(l()),
        x = i.ZP.div.withConfig({
          displayName: "styled__PostSceneWrapper",
          componentId: "Panoee__sc-fabf4530-3",
        })(h(), function (n) {
          return n.isShowControlbar ? (0, i.iv)(c()) : (0, i.iv)(p());
        });
    },
  },
]);
//# sourceMappingURL=3344.bf0783a29a78209c.js.map
