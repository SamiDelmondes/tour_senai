"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1074],
  {
    41074: function (n, t, e) {
      e.r(t),
        e.d(t, {
          DialogArticle: function () {
            return p;
          },
          default: function () {
            return m;
          },
        });
      var i = e(85893),
        o = e(5152),
        r = e.n(o),
        a = e(67294),
        l = e(7297),
        d = e(19521),
        c = e(38505);
      function u() {
        var n = (0, l.Z)([
          "\n  background: var(--color-popup-bg);\n  color: var(--color-popup-text);\n  height: max-content;\n  max-height: 95vh;\n  overflow: auto;\n  width: 100%;\n  padding: 0;\n  border-radius: 12px;\n  ",
          ";\n  .header {\n    ",
          ";\n    position: relative;\n    border-bottom: 1px solid rgb(255 255 255 / 0.2);\n    padding: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .thumb {\n      width: max-content;\n      max-width: 100%;\n      height: auto;\n    }\n    .title {\n      font-weight: 600;\n      width: 100%;\n      position: relative;\n      font-size: 1rem;\n      text-transform: uppercase;\n      text-align: center;\n      padding: 1.5rem 3rem;\n      background: rgba(0, 0, 0, 0.1);\n    }\n    &:after {\n      content: '';\n      width: 64px;\n      height: 2px;\n      background: var(--color-popup-text);\n      display: block;\n      position: absolute;\n      bottom: -1px;\n      left: 0;\n      right: 0;\n      margin: auto;\n    }\n  }\n  .body {\n    width: 100%;\n    height: 100%;\n    padding: 1.5rem 3rem;\n    margin: 0 auto;\n    height: auto;\n    .content {\n      width: 100%;\n      /* background: var(--color-popup-bg);\n      color: var(--color-popup-text); */\n    }\n  }\n  @media (max-width: 575px) {\n    .body {\n      padding: 1.5rem 1rem;\n    }\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      var s = d.ZP.div.withConfig({
          displayName: "styled__DialogHotspotArticleWrapper",
          componentId: "Panoee__sc-7bc9aa26-0",
        })(u(), c.Nv, c.S8),
        h = r()(
          function () {
            return Promise.all([
              e.e(1577),
              e.e(7040),
              e.e(4222),
              e.e(3966),
            ]).then(e.bind(e, 37871));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37871];
              },
            },
          },
        ),
        p = function (n) {
          var t,
            e,
            o,
            r = n.visible,
            a = n.onCancel,
            l = n.post,
            d = n.width;
          return (0, i.jsx)(h, {
            visible: r,
            onCancel: a,
            maskClosable: !0,
            centered: !0,
            width: d || "720px",
            bodyStyle: { maxWidth: d || "720px", width: "100%" },
            children: (0, i.jsxs)(s, {
              children: [
                (0, i.jsxs)("div", {
                  className: "header",
                  children: [
                    (null == l
                      ? void 0
                      : null === (t = l.thumbnail) || void 0 === t
                        ? void 0
                        : t.src) &&
                      (0, i.jsx)("img", {
                        className: "thumb",
                        src:
                          null == l
                            ? void 0
                            : null === (e = l.thumbnail) || void 0 === e
                              ? void 0
                              : e.src,
                        alt:
                          null == l
                            ? void 0
                            : null === (o = l.thumbnail) || void 0 === o
                              ? void 0
                              : o.name,
                      }),
                    (0, i.jsx)("div", {
                      className: "title",
                      children: (null == l ? void 0 : l.title) || "N/A",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "body hide-scrollbar",
                  children: (0, i.jsx)("div", {
                    className: "content ctn__html",
                    dangerouslySetInnerHTML: {
                      __html: null == l ? void 0 : l.content,
                    },
                  }),
                }),
              ],
            }),
          });
        },
        m = (0, a.memo)(p);
    },
  },
]);
//# sourceMappingURL=1074.5cf1db60aa90c6ee.js.map
