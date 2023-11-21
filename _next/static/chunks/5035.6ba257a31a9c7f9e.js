"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5035],
  {
    55035: function (n, e, t) {
      t.r(e);
      var i = t(47568),
        r = t(828),
        o = t(70655),
        a = t(85893),
        l = t(5152),
        d = t.n(l),
        u = t(67294),
        s = t(35077),
        c = t(87306),
        h = d()(
          function () {
            return Promise.all([
              t.e(1577),
              t.e(7040),
              t.e(4222),
              t.e(7871),
            ]).then(t.bind(t, 37871));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37871];
              },
            },
          },
        ),
        m = d()(
          function () {
            return Promise.resolve().then(t.bind(t, 82704));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82704];
              },
            },
          },
        );
      e.default = (0, u.memo)(function (n) {
        var e,
          t,
          l,
          d = n.idPost,
          v = n.visible,
          p = n.onCancel,
          f = n.isUseDefaultStyle,
          b = n.listPost,
          g = void 0 === b ? [] : b,
          x = (0, r.Z)((0, u.useState)(!1), 2),
          w = x[0],
          y = x[1],
          _ = (0, r.Z)((0, u.useState)(void 0), 2),
          k = _[0],
          N = _[1],
          j = (0, u.useCallback)(
            (0, i.Z)(function () {
              var n;
              return (0, o.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    y(!0), (e.label = 1);
                  case 1:
                    if (
                      (e.trys.push([1, 4, 5, 6]),
                      (n = g.find(function (n) {
                        return n.id === d;
                      })))
                    )
                      return [3, 3];
                    return [4, (0, s.r)(d)];
                  case 2:
                    (n = e.sent().data.data), (e.label = 3);
                  case 3:
                    return N(n), [3, 6];
                  case 4:
                    return e.sent(), N(void 0), [3, 6];
                  case 5:
                    return y(!1), [7];
                  case 6:
                    return [2];
                }
              });
            }),
            [d, g],
          );
        return (
          (0, u.useEffect)(
            function () {
              return (
                d ? j() : N(void 0),
                function () {
                  y(!1), N(void 0);
                }
              );
            },
            [d],
          ),
          (0, a.jsx)(h, {
            visible: v,
            onCancel: p,
            maskClosable: !0,
            top: 0,
            width: "700px",
            centered: !0,
            bodyStyle: { maxWidth: "700px", width: "100%" },
            children: (0, a.jsx)(c.i, {
              isUseDefaultStyle: void 0 === f || f,
              children: (0, a.jsxs)(m, {
                loading: w,
                children: [
                  (0, a.jsxs)("div", {
                    className: "header",
                    children: [
                      (null == k
                        ? void 0
                        : null === (e = k.thumbnail) || void 0 === e
                          ? void 0
                          : e.src) &&
                        (0, a.jsx)("img", {
                          className: "thumb",
                          src:
                            null == k
                              ? void 0
                              : null === (t = k.thumbnail) || void 0 === t
                                ? void 0
                                : t.src,
                          alt:
                            null == k
                              ? void 0
                              : null === (l = k.thumbnail) || void 0 === l
                                ? void 0
                                : l.name,
                        }),
                      (0, a.jsx)("div", {
                        className: "title",
                        children: (null == k ? void 0 : k.title) || "N/A",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "body hide-scrollbar",
                    children:
                      (null == k ? void 0 : k.content) &&
                      (0, a.jsx)("div", {
                        className: "content ctn__html",
                        dangerouslySetInnerHTML: {
                          __html: null == k ? void 0 : k.content,
                        },
                      }),
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    87306: function (n, e, t) {
      t.d(e, {
        i: function () {
          return d;
        },
      });
      var i = t(7297),
        r = t(38505),
        o = t(19521);
      function a() {
        var n = (0, i.Z)([""]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, i.Z)([
          "\n  ",
          "\n  background: var(--color-popup-bg);\n  color: var(--color-popup-text);\n  height: max-content;\n  max-height: 95vh;\n  overflow: auto;\n  width: 100%;\n  padding: 0;\n  border-radius: 12px;\n  ",
          ";\n  .header {\n    position: relative;\n    border-bottom: 1px solid rgb(255 255 255 / 0.2);\n    padding: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .thumb {\n      width: max-content;\n      max-width: 100%;\n      height: auto;\n    }\n    .title {\n      font-weight: 600;\n      width: 100%;\n      position: relative;\n      font-size: 1rem;\n      text-transform: uppercase;\n      text-align: center;\n      padding: 1.5rem 3rem;\n      background: rgba(0, 0, 0, 0.1);\n    }\n    &:after {\n      content: '';\n      width: 64px;\n      height: 2px;\n      background: var(--color-popup-text);\n      display: block;\n      position: absolute;\n      bottom: -1px;\n      left: 0;\n      right: 0;\n      margin: auto;\n    }\n  }\n  .body {\n    width: 100%;\n    height: 100%;\n    padding: 1.5rem 3rem;\n    margin: 0 auto;\n    height: auto;\n    .content {\n      width: 100%;\n      min-height: 200px;\n    }\n  }\n  @media (max-width: 575px) {\n    .header {\n      .title {\n      }\n    }\n    .body {\n      padding: 1.5rem 1rem;\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      var d = o.ZP.div.withConfig({
        displayName: "styled__DialogPostWrapper",
        componentId: "Panoee__sc-de8e6709-0",
      })(
        l(),
        function (n) {
          return !n.isUseDefaultStyle && (0, o.iv)(a());
        },
        r.Nv,
      );
    },
    35077: function (n, e, t) {
      t.d(e, {
        r: function () {
          return r;
        },
      });
      var i = t(33618),
        r = function (n) {
          return i.R.$get("/post/getPublish", { id: n });
        };
    },
  },
]);
//# sourceMappingURL=5035.6ba257a31a9c7f9e.js.map
