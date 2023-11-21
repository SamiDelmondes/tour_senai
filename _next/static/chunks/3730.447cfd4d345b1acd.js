"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3730],
  {
    13730: function (n, r, e) {
      e.r(r),
        e.d(r, {
          ProtectPassword: function () {
            return f;
          },
          default: function () {
            return v;
          },
        });
      var o = e(828),
        i = e(85893),
        a = e(67294),
        t = e(36323),
        s = e(68863),
        d = e(13448),
        c = e(71577),
        l = e(7297),
        p = e(19521),
        u = e(38505);
      function b() {
        var n = (0, l.Z)([
          "\n  color: #fff;\n  width: 100vw;\n  height: 100vh;\n  .overlay {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    ",
          ";\n    position: absolute;\n    // backdrop-filter: blur(4px);\n    background: rgba(0, 0, 0, 0.25);\n    .form {\n      width: 360px;\n      padding: 48px 24px 24px;\n      max-width: 90%;\n      position: relative;\n      background: rgba(0, 0, 0, 0.2);\n      background-image: linear-gradient(\n        114deg,\n        rgb(255 255 255 / 1%),\n        rgb(255 255 255 / 12%) 43%,\n        transparent 43.1%,\n        transparent\n      );\n      border-radius: 16px;\n      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n      backdrop-filter: blur(10px);\n      border: 1px solid rgba(255, 255, 255, 0.46);\n      .icon {\n        position: absolute;\n        width: 56px;\n        height: 56px;\n        top: -28px;\n        left: 50%;\n        transform: translateX(-50%);\n        ",
          ";\n        color: var(--color-text);\n        background: var(--color-primary);\n        border-radius: 50%;\n        font-size: 1.5rem;\n        z-index: 2;\n      }\n      .content {\n        width: 100%;\n        z-index: 2;\n        ",
          ";\n        .title {\n        }\n        .input {\n          margin: 20px 0;\n          width: 100%;\n          .ant-input-password {\n            background: rgb(0 0 0 / 0.15);\n            border: 1px solid rgba(255, 255, 255, 0.5);\n            box-sizing: border-box;\n            border-radius: 6px;\n            width: 100%;\n            color: #fff;\n            &-icon {\n              color: #fff;\n              @media (hover: hover) and (pointer: fine) {\n                &:hover {\n                  color: #fff;\n                }\n              }\n            }\n            input {\n              background: transparent;\n              color: inherit;\n            }\n            &.ant-input-affix-wrapper-focused {\n              border-color: #fff;\n              box-shadow: 0 0 0 4px rgb(255 255 255 / 0.25);\n            }\n          }\n        }\n        .action {\n          .ant-btn {\n            background: var(--color-primary);\n            color: var(--color-text);\n            box-shadow: 0px 4px 12px rgb(0 0 0 / 0.2);\n            border-radius: 6px;\n            border: none;\n            padding: 8px 36px;\n            height: auto;\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      var x = p.ZP.div.withConfig({
          displayName: "styled__ProtectPasswordWrapper",
          componentId: "Panoee__sc-88a5750e-0",
        })(b(), u.b0, u.b0, u.S8),
        h = s.Z.Password,
        f = (0, a.memo)(function (n) {
          var r = n.scene,
            e = n.password,
            s = n.onSubmit,
            l = (0, o.Z)((0, a.useState)(""), 2),
            p = l[0],
            u = l[1],
            b = (0, a.useMemo)(
              function () {
                var n, e, o;
                return (
                  (null == r
                    ? void 0
                    : null === (n = r.media) || void 0 === n
                      ? void 0
                      : n.src_preview) ||
                  (null == r
                    ? void 0
                    : null === (e = r.media) || void 0 === e
                      ? void 0
                      : e.src_thumb) ||
                  (null == r
                    ? void 0
                    : null === (o = r.media) || void 0 === o
                      ? void 0
                      : o.src)
                );
              },
              [r],
            ),
            f = (0, a.useCallback)(
              function () {
                p !== e
                  ? d.Z.error({
                      message: "Error",
                      description: "Incorrect password.",
                      placement: "topRight",
                    })
                  : s();
              },
              [e, p, s],
            );
          return (0, i.jsxs)(x, {
            children: [
              (0, i.jsx)(t.Z, {
                urlTour: b || "",
                scene: r || void 0,
                krpanoId: "previewViewer",
                divId: "previewContainer",
                styleContainer: {
                  height: "100%",
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  left: 0,
                },
              }),
              (0, i.jsx)("div", {
                className: "overlay",
                children: (0, i.jsxs)("div", {
                  className: "form",
                  children: [
                    (0, i.jsx)("div", { className: "bg" }),
                    (0, i.jsx)("div", {
                      className: "icon",
                      children: (0, i.jsx)("i", {
                        "aria-hidden": !0,
                        className: "fas fa-lock",
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "content",
                      children: [
                        (0, i.jsx)("div", {
                          className: "title",
                          children: "This Project is locked by owner!",
                        }),
                        (0, i.jsx)("div", {
                          className: "input",
                          children: (0, i.jsx)(h, {
                            size: "large",
                            autoFocus: !0,
                            value: p,
                            onChange: function (n) {
                              return u(n.target.value);
                            },
                            placeholder: "Please enter password",
                            onPressEnter: f,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "action",
                          children: (0, i.jsx)(c.Z, {
                            disabled: !p,
                            type: "primary",
                            onClick: f,
                            children: "Access",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        v = f;
    },
  },
]);
//# sourceMappingURL=3730.447cfd4d345b1acd.js.map
