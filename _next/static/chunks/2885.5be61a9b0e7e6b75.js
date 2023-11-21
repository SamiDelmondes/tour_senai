"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2885],
  {
    22885: function (n, e, t) {
      t.r(e),
        t.d(e, {
          ThemeBlank: function () {
            return f;
          },
        });
      var o = t(85893),
        i = t(67294),
        r = t(5152),
        a = t.n(r),
        d = t(85972),
        s = a()(
          function () {
            return t.e(2021).then(t.bind(t, 92021));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [92021];
              },
            },
          },
        ),
        p = a()(
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
        l = a()(
          function () {
            return t.e(7679).then(t.bind(t, 7679));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7679];
              },
            },
            ssr: !1,
          },
        ),
        f = (0, i.memo)(function (n) {
          var e = n.onChangeScene,
            t = n.onNextScene;
          return (0, o.jsxs)(d.ei, {
            children: [
              (0, o.jsx)(s, {}),
              (0, o.jsx)(p, {
                onChangeScene: e,
                onNextScene: t,
                children: (0, o.jsx)(l, {}),
              }),
            ],
          });
        });
      e.default = f;
    },
    85972: function (n, e, t) {
      t.d(e, {
        NA: function () {
          return l;
        },
        Pz: function () {
          return f;
        },
        ei: function () {
          return c;
        },
      });
      var o = t(7297),
        i = t(19521);
      function r() {
        var n = (0, o.Z)(
          [
            "\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 2000;\n  &:after {\n    content: '';\n    background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 1) 35%,\n      transparent\n    );\n    opacity: 0;\n    width: 400px;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    display: block;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    transition: all 0.15s ease-out;\n  }\n  &.active {\n    &:after {\n      opacity: 1;\n      z-index: 999;\n    }\n  }\n  &.active {\n    .gallery {\n      left: 0;\n      right: unset;\n    }\n    .galleryDots {\n      opacity: 0;\n    }\n    .copyright {\n      transform: translateY(100%);\n    }\n  }\n  .closeBtn {\n    position: fixed;\n    right: 0;\n    top: 0;\n    color: #fff;\n    font-size: 1.5rem;\n    width: 2.5rem;\n    height: 2.5rem;\n    background: rgb(0 0 0 / 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* // pointer-events: none; */\n    display: none;\n    @media (max-width: 575px) {\n      &.show {\n        display: flex;\n      }\n      &.hide {\n        display: none;\n      }\n    }\n  }\n  .galleryDots {\n    transition: all 0.25s ease-out;\n    align-items: center;\n    flex-flow: column;\n    position: absolute;\n    width: 4px;\n    height: 80%;\n    display: flex;\n    opacity: 1;\n    padding-left: 15px;\n    top: 10%;\n    justify-content: center;\n    span {\n      height: 40px;\n      width: 4px;\n      margin: 2px 0;\n      display: block;\n      background: rgb(255 255 255 / 0.5);\n      cursor: pointer;\n      border-radius: 25px;\n      transition: all 0.25s ease-out;\n      &.active {\n        background: #fff;\n      }\n    }\n    @media (max-width: 575px) {\n      width: 2.25rem;\n      height: 2.5rem;\n      background: #fff;\n      box-shadow: 0 0 24px 0 rgb(0 0 0 / 0.5);\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      padding: 0;\n      font-size: 1.25rem;\n      border-radius: 0 3px 3px 0;\n      &:after {\n        content: '\f0c9';\n        font-family: 'Font Awesome 5 Pro';\n        font-weight: 300;\n      }\n      span {\n        /* height: 20px !important; */\n        display: none;\n      }\n    }\n  }\n  .gallery {\n    transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n    position: absolute;\n    width: 200px;\n    top: 0;\n    bottom: 0;\n    left: -200px;\n    z-index: 2001;\n    padding-top: 12px;\n    padding-bottom: 24px;\n    overflow: auto;\n    &::-webkit-scrollbar {\n      display: none;\n      -ms-overflow-style: none;\n      scrollbar-width: none;\n    }\n    .galleryGroup {\n      padding: 0;\n      width: 100%;\n      height: auto;\n      border-bottom: 1px solid rgb(255 255 255 / 0.2);\n      .galleryGroupName {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: #fff;\n        cursor: pointer;\n        padding: 0.5rem 0.75rem;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            background: rgb(255 255 255 / 0.15);\n            i {\n              opacity: 1;\n            }\n          }\n        }\n        h5 {\n          text-transform: uppercase;\n          font-size: 13px;\n          margin-bottom: 0;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden;\n          flex: 1;\n          color: inherit;\n        }\n        i {\n          font-size: 20px;\n          opacity: 0.5;\n        }\n      }\n      .galleryThumb {\n        margin-bottom: 0.75rem;\n        padding: 0 0.75rem;\n        &.hide {\n          height: 0;\n          overflow: hidden;\n          margin-bottom: 0;\n          .galleryImg {\n          }\n        }\n        .galleryImg {\n          transition: 0.15s ease-out;\n          width: 100%;\n          height: 90px;\n          margin: 0.5rem 0px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          overflow: hidden;\n          position: relative;\n          border: 1px solid rgba(255, 255, 255, 0.25);\n          border-radius: 3px;\n          /* transform: scale(.95); */\n          cursor: pointer;\n          @media (hover: hover) and (pointer: fine) {\n            &:hover {\n              border-color: #fff;\n              transform: scale(1.05);\n            }\n          }\n          &.active {\n            border-color: var(--color-primary);\n            box-shadow: 0 0 0 2px var(--color-primary);\n          }\n          img {\n            width: 100%;\n            min-height: 100%;\n            object-fit: contain;\n            background: rgba(0, 0, 0, 1);\n          }\n          .--menuSceneTitle {\n            z-index: 10;\n            position: absolute;\n            bottom: 0;\n            margin: 0;\n            left: 0;\n            right: 0;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            color: #fff;\n            padding: 0.75rem 0.5rem 0.25rem;\n            font-weight: inherit;\n            font-size: inherit;\n            background-image: linear-gradient(\n              to top,\n              rgba(0, 0, 0, 0.75),\n              transparent\n            );\n          }\n        }\n      }\n    }\n  }\n  @media (max-width: 575px) {\n    z-index: 2000;\n  }\n",
          ],
          [
            "\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 2000;\n  &:after {\n    content: '';\n    background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 1) 35%,\n      transparent\n    );\n    opacity: 0;\n    width: 400px;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    display: block;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    transition: all 0.15s ease-out;\n  }\n  &.active {\n    &:after {\n      opacity: 1;\n      z-index: 999;\n    }\n  }\n  &.active {\n    .gallery {\n      left: 0;\n      right: unset;\n    }\n    .galleryDots {\n      opacity: 0;\n    }\n    .copyright {\n      transform: translateY(100%);\n    }\n  }\n  .closeBtn {\n    position: fixed;\n    right: 0;\n    top: 0;\n    color: #fff;\n    font-size: 1.5rem;\n    width: 2.5rem;\n    height: 2.5rem;\n    background: rgb(0 0 0 / 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* // pointer-events: none; */\n    display: none;\n    @media (max-width: 575px) {\n      &.show {\n        display: flex;\n      }\n      &.hide {\n        display: none;\n      }\n    }\n  }\n  .galleryDots {\n    transition: all 0.25s ease-out;\n    align-items: center;\n    flex-flow: column;\n    position: absolute;\n    width: 4px;\n    height: 80%;\n    display: flex;\n    opacity: 1;\n    padding-left: 15px;\n    top: 10%;\n    justify-content: center;\n    span {\n      height: 40px;\n      width: 4px;\n      margin: 2px 0;\n      display: block;\n      background: rgb(255 255 255 / 0.5);\n      cursor: pointer;\n      border-radius: 25px;\n      transition: all 0.25s ease-out;\n      &.active {\n        background: #fff;\n      }\n    }\n    @media (max-width: 575px) {\n      width: 2.25rem;\n      height: 2.5rem;\n      background: #fff;\n      box-shadow: 0 0 24px 0 rgb(0 0 0 / 0.5);\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      padding: 0;\n      font-size: 1.25rem;\n      border-radius: 0 3px 3px 0;\n      &:after {\n        content: '\\f0c9';\n        font-family: 'Font Awesome 5 Pro';\n        font-weight: 300;\n      }\n      span {\n        /* height: 20px !important; */\n        display: none;\n      }\n    }\n  }\n  .gallery {\n    transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n    position: absolute;\n    width: 200px;\n    top: 0;\n    bottom: 0;\n    left: -200px;\n    z-index: 2001;\n    padding-top: 12px;\n    padding-bottom: 24px;\n    overflow: auto;\n    &::-webkit-scrollbar {\n      display: none;\n      -ms-overflow-style: none;\n      scrollbar-width: none;\n    }\n    .galleryGroup {\n      padding: 0;\n      width: 100%;\n      height: auto;\n      border-bottom: 1px solid rgb(255 255 255 / 0.2);\n      .galleryGroupName {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: #fff;\n        cursor: pointer;\n        padding: 0.5rem 0.75rem;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            background: rgb(255 255 255 / 0.15);\n            i {\n              opacity: 1;\n            }\n          }\n        }\n        h5 {\n          text-transform: uppercase;\n          font-size: 13px;\n          margin-bottom: 0;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden;\n          flex: 1;\n          color: inherit;\n        }\n        i {\n          font-size: 20px;\n          opacity: 0.5;\n        }\n      }\n      .galleryThumb {\n        margin-bottom: 0.75rem;\n        padding: 0 0.75rem;\n        &.hide {\n          height: 0;\n          overflow: hidden;\n          margin-bottom: 0;\n          .galleryImg {\n          }\n        }\n        .galleryImg {\n          transition: 0.15s ease-out;\n          width: 100%;\n          height: 90px;\n          margin: 0.5rem 0px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          overflow: hidden;\n          position: relative;\n          border: 1px solid rgba(255, 255, 255, 0.25);\n          border-radius: 3px;\n          /* transform: scale(.95); */\n          cursor: pointer;\n          @media (hover: hover) and (pointer: fine) {\n            &:hover {\n              border-color: #fff;\n              transform: scale(1.05);\n            }\n          }\n          &.active {\n            border-color: var(--color-primary);\n            box-shadow: 0 0 0 2px var(--color-primary);\n          }\n          img {\n            width: 100%;\n            min-height: 100%;\n            object-fit: contain;\n            background: rgba(0, 0, 0, 1);\n          }\n          .--menuSceneTitle {\n            z-index: 10;\n            position: absolute;\n            bottom: 0;\n            margin: 0;\n            left: 0;\n            right: 0;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            color: #fff;\n            padding: 0.75rem 0.5rem 0.25rem;\n            font-weight: inherit;\n            font-size: inherit;\n            background-image: linear-gradient(\n              to top,\n              rgba(0, 0, 0, 0.75),\n              transparent\n            );\n          }\n        }\n      }\n    }\n  }\n  @media (max-width: 575px) {\n    z-index: 2000;\n  }\n",
          ],
        );
        return (
          (r = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = (0, o.Z)([
          "\n  pointer-events: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  align-items: flex-end;\n  @media (max-width: 575px) {\n    flex-direction: column;\n    align-items: center;\n    .actGroup {\n      padding-right: 0 !important;\n    }\n  }\n  .copyright {\n    pointer-events: auto;\n    flex: 1;\n    transition: all 0.25s ease-out;\n    p {\n      color: rgb(255 255 255 / 0.75);\n      background-image: linear-gradient(\n        to right,\n        rgba(0, 0, 0, 0.75),\n        transparent\n      );\n      padding: 0.5rem 6rem 0.5rem 15px;\n      display: inline-flex;\n      a {\n        font-weight: 500;\n        color: #fff;\n        margin-left: 0.25rem;\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n    @media (max-width: 575px) {\n      position: absolute;\n      bottom: 2.75rem;\n      left: 0;\n      p {\n        padding: 0.125rem 4rem 0.125rem 0.75rem;\n      }\n    }\n  }\n  .actDirection {\n    display: none;\n    @media screen and (max-width: 1024px) {\n      display: none;\n    }\n    .actDirectionWrapper {\n      pointer-events: auto;\n      /* transform: rotate(45deg) scale(0.7, 0.7); */\n      transform: scale(0.7) translate(0, 2.5rem);\n      transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n      width: 80px;\n      height: 86px;\n      margin: 0.5rem 0;\n      @media (max-width: 1024px) {\n        transform: scale(0.9);\n      }\n      button {\n        &.active {\n          opacity: 1;\n        }\n        width: 24px;\n        height: 38px;\n        position: absolute;\n        opacity: 0.5;\n        transition: all 0.15s ease-out;\n        padding: 0;\n        background: transparent;\n        border: none;\n        span {\n          width: 100%;\n          height: 100%;\n          display: block;\n          background: #fff;\n          // border: 2px solid #aaa;\n          // border-style: outset;\n          clip-path: polygon(50% 0, 100% 68%, 50% 100%, 0 68%);\n          transition: all 0.15s ease-out;\n        }\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            opacity: 1;\n          }\n        }\n        &:active span {\n          transform: scale(0.7);\n        }\n        &:nth-child(1) {\n          top: 0;\n          bottom: initial;\n          left: 0;\n          right: 0;\n          margin: auto;\n        }\n        &:nth-child(2) {\n          top: 0;\n          bottom: 0;\n          left: initial;\n          right: 0;\n          margin: auto;\n          transform: rotate(90deg);\n        }\n        &:nth-child(3) {\n          top: initial;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          margin: auto;\n          transform: rotate(180deg);\n        }\n        &:nth-child(4) {\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: initial;\n          margin: auto;\n          transform: rotate(270deg);\n        }\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          transform: scale(0.9) translateY(0.5rem);\n        }\n      }\n    }\n  }\n  .actGroup {\n    pointer-events: auto;\n    justify-content: flex-end;\n    padding: 0 0.5rem 0 2rem;\n    // flex: 1;\n    display: flex;\n    background: linear-gradient(to left, rgba(0, 0, 0, 0.75), transparent);\n    border-radius: 12px 0 0 0;\n    @media screen and (max-width: 575px) {\n      background: transparent;\n    }\n    button {\n      background: none;\n      border: none;\n      color: #fff;\n      position: relative;\n      padding: 0;\n      margin: 0 2px;\n    }\n    .act {\n      height: 34px;\n      width: 2.25rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-shadow: 0 1px 3px rgb(0 0 0 / 0.75);\n      transition: var(--transition-smooth);\n      &:after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: rgb(0 0 0 / 0.75);\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        z-index: -1;\n        border-radius: 50%;\n        opacity: 0;\n        transition: all 0.15s ease-out;\n        transform: scale(0.5);\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          text-shadow: 0 0 20px #fff;\n          transform: scale(1.1);\n          i {\n            font-weight: 900;\n          }\n          &:after {\n            // opacity: 0.75;\n            // transform: scale(1);\n          }\n          i {\n          }\n        }\n      }\n    }\n    i {\n      font-size: 1.1rem;\n    }\n    .actPopGroup {\n    }\n    @media (max-width: 575px) {\n      .act {\n        i {\n          font-size: 1.25rem;\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, o.Z)([
          "\n  top: 0;\n  left: 0;\n  padding: 1rem 2.5rem 2.5rem;\n  width: 100%;\n  max-width: none;\n  z-index: 2;\n  transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.25) 5%,\n    transparent\n  );\n  position: absolute;\n  pointer-events: none;\n  &.showSidebar {\n    margin-left: 190px;\n    padding-left: 1.5rem;\n    ~ div {\n      .copyright {\n        transform: translateX(-100%);\n      }\n    }\n    @media (max-width: 575px) {\n      &.showSidebar {\n        margin-left: 0;\n        ~ div {\n          .copyright {\n            transform: none;\n          }\n        }\n      }\n    }\n  }\n\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  .--logo {\n    padding: 0 0 12px;\n    width: 100%;\n    display: flex;\n    cursor: pointer;\n    &.topLeft {\n      justify-content: flex-start;\n    }\n    &.topCenter {\n      justify-content: center;\n      position: absolute;\n      left: 0;\n    }\n    &.topRight {\n      justify-content: flex-end;\n      position: absolute;\n      left: 0;\n      padding-right: 12px;\n    }\n    img {\n      width: 100%;\n      height: auto;\n      pointer-events: auto;\n      max-height: max-content;\n    }\n    @media (max-width: 575px) {\n      position: relative !important;\n      justify-content: initial !important;\n      max-width: 45vw;\n      padding: 0 0 12px 0 !important;\n      img {\n        max-width: 100%;\n      }\n    }\n  }\n  .--info {\n    width: max-content;\n    max-width: 100%;\n    .--projectTitle {\n      font-size: 20px;\n      margin: 0px;\n      color: #fff;\n      font-weight: 700;\n      text-shadow: 0 2px 4px rgba(0, 0, 0, 25%);\n      width: max-content;\n      max-width: 100%;\n    }\n    .address {\n      margin: -0.25rem 0 0.75rem 0;\n      color: #fff;\n      text-shadow: 0 2px 4px rgb(0 0 0 / 25%);\n      font-weight: 500;\n      width: max-content;\n      max-width: 100%;\n    }\n    .popInfo {\n      position: relative;\n      pointer-events: auto;\n      width: max-content;\n      max-width: 100%;\n      button {\n        border: none;\n        font-size: 0.8rem;\n        font-weight: 700;\n        text-align: left;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        width: max-content;\n        padding: 0;\n        display: flex;\n        align-items: center;\n        background: rgba(0, 0, 0, 0.5);\n        border-radius: 100px;\n        padding: 2px 8px;\n      }\n      @media (max-width: 575px) {\n        margin-top: 0;\n        button {\n          font-size: 0.875rem;\n        }\n      }\n    }\n    .popInfoToggle {\n      color: #fff;\n      text-shadow: 0 2px 4px rgb(0 0 0 / 25%);\n      span {\n        margin-left: 0.5rem;\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.25);\n        animation: pulse-grow 1.5s infinite;\n        animation-duration: 1500ms !important;\n        border-radius: 50%;\n      }\n      i {\n        width: 1.25rem;\n        height: 1.25rem;\n        background: rgb(0 0 0 / 0.25);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        font-size: 0.75rem;\n      }\n    }\n    .popInfoArticle {\n      p {\n        margin-bottom: 1rem;\n      }\n    }\n    .popInfoContent {\n      background: #fff;\n      box-shadow: 0 12px 24px rgb(0 0 0 / 0.5);\n      width: 320px;\n      padding: 0 0 1.5rem;\n      opacity: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      border-radius: 0;\n      max-height: 420px;\n      overflow: auto;\n      transition: 0.5s cubic-bezier(0.04, 1, 0.6, 0.97);\n      transform: translateX(-4rem);\n      @media (max-width: 768px) {\n        width: 70vw;\n        max-width: 320px;\n      }\n      &::-webkit-scrollbar {\n        display: none;\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n      }\n      &.active {\n        opacity: 1;\n        transform: translateX(0);\n        pointer-events: auto;\n      }\n      .popInfoContentHead {\n        position: sticky;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: var(--color-primary);\n        color: var(--color-text);\n        padding: 0.75rem 1.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 1px solid #ececec;\n        h4 {\n          flex: 1;\n          font-size: 20px;\n          margin: 0;\n          color: inherit;\n        }\n      }\n      .popInfoArticle {\n        padding: 0.5rem 1.5rem;\n      }\n      .popInfoClose {\n        width: 1.5rem;\n        height: 1.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        cursor: pointer;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            background: rgb(0 0 0 / 0.2);\n          }\n        }\n      }\n      p {\n        color: var(--color-text);\n      }\n    }\n  }\n  @media (max-width: 768px) {\n  }\n\n  @media (max-width: 575px) {\n    padding: 0.75rem 0.75rem 2rem;\n    background-image: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.75) 5%,\n      transparent\n    );\n    h3 {\n      font-size: 20px;\n    }\n    .address {\n      display: none;\n    }\n    .popInfo {\n      .popInfoContentHead {\n        padding: 0.5rem 1.5rem;\n        h4 {\n          font-size: 18px;\n        }\n      }\n    }\n    .popInfoClose {\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, o.Z)([
          "\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background: #ffffff;\n  button {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, o.Z)([
          "\n  z-index: 100;\n  ul {\n    padding: 0;\n    margin: 0;\n    li {\n      list-style: none;\n      button {\n        cursor: pointer;\n        background: #212121;\n        border-color: transparent;\n        color: rgb(255 255 255 / 0.5);\n        width: 100%;\n        justify-content: left;\n        height: auto;\n        display: flex;\n        align-items: center;\n        transition: all 0.15s ease-out;\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            color: #fff;\n          }\n        }\n        i {\n          width: 2rem;\n          height: 2rem;\n          color: #fff;\n          margin-right: 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-size: 1rem;\n          border-radius: 50%;\n          background: #393839;\n          text-shadow: none;\n          transition: all 0.15s ease-out;\n        }\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            i {\n              background-color: #fff;\n              color: #212121;\n              transform: scale(0.8);\n            }\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      i.ZP.div.withConfig({
        displayName: "styled__ListSceneWrapper",
        componentId: "Panoee__sc-c38040ee-0",
      })(r());
      var l = i.ZP.div.withConfig({
          displayName: "styled__ControlbarWrapper",
          componentId: "Panoee__sc-c38040ee-1",
        })(a()),
        f = i.ZP.div.withConfig({
          displayName: "styled__HeaderWrapper",
          componentId: "Panoee__sc-c38040ee-2",
        })(d()),
        c = i.ZP.div.withConfig({
          displayName: "styled__ThemeBlankWrapper",
          componentId: "Panoee__sc-c38040ee-3",
        })(s());
      i.ZP.div.withConfig({
        displayName: "styled__ControlbarPopoverWrapper",
        componentId: "Panoee__sc-c38040ee-4",
      })(p());
    },
  },
]);
//# sourceMappingURL=2885.5be61a9b0e7e6b75.js.map
