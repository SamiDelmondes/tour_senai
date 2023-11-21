"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [275],
  {
    60275: function (n, t, e) {
      e.r(t);
      var i = e(85893),
        r = e(5152),
        o = e.n(r),
        a = e(59031),
        l = e(67294),
        d = e(87306),
        u = o()(
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
        s = o()(
          function () {
            return Promise.all([e.e(1382), e.e(2704)]).then(e.bind(e, 82704));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82704];
              },
            },
          },
        );
      t.default = (0, l.memo)(function (n) {
        var t,
          e,
          r,
          o = n.idPost,
          l = n.visible,
          c = n.onCancel,
          h = n.isUseDefaultStyle,
          f = (0, a.$)({ idPost: o }),
          m = f.detailPost,
          v = f.loading;
        return (0, i.jsx)(u, {
          visible: l,
          onCancel: c,
          maskClosable: !0,
          top: 0,
          width: "700px",
          centered: !0,
          bodyStyle: { maxWidth: "700px", width: "100%" },
          children: (0, i.jsx)(d.i, {
            isUseDefaultStyle: void 0 === h || h,
            children: (0, i.jsxs)(s, {
              loading: v,
              children: [
                (0, i.jsxs)("div", {
                  className: "header",
                  children: [
                    (null == m
                      ? void 0
                      : null === (t = m.thumbnail) || void 0 === t
                        ? void 0
                        : t.src) &&
                      (0, i.jsx)("img", {
                        className: "thumb",
                        src:
                          null == m
                            ? void 0
                            : null === (e = m.thumbnail) || void 0 === e
                              ? void 0
                              : e.src,
                        alt:
                          null == m
                            ? void 0
                            : null === (r = m.thumbnail) || void 0 === r
                              ? void 0
                              : r.name,
                      }),
                    (0, i.jsx)("div", {
                      className: "title",
                      children: (null == m ? void 0 : m.title) || "N/A",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "body hide-scrollbar",
                  children:
                    (null == m ? void 0 : m.content) &&
                    (0, i.jsx)("div", {
                      className: "content ctn__html",
                      dangerouslySetInnerHTML: {
                        __html: null == m ? void 0 : m.content,
                      },
                    }),
                }),
              ],
            }),
          }),
        });
      });
    },
    87306: function (n, t, e) {
      e.d(t, {
        i: function () {
          return d;
        },
      });
      var i = e(7297),
        r = e(38505),
        o = e(19521);
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
    59031: function (n, t, e) {
      e.d(t, {
        $: function () {
          return s;
        },
      });
      var i = e(47568),
        r = e(828),
        o = e(70655),
        a = e(35077),
        l = e(25617),
        d = e(67294),
        u = e(7400),
        s = function (n) {
          var t = n.idPost,
            e = (0, l.v9)(u.Yd),
            s = (0, r.Z)((0, d.useState)(!1), 2),
            c = s[0],
            h = s[1],
            f = (0, r.Z)((0, d.useState)(void 0), 2),
            m = f[0],
            v = f[1],
            p = (0, d.useCallback)(
              (0, i.Z)(function () {
                var n;
                return (0, o.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      h(!0), (i.label = 1);
                    case 1:
                      if (
                        (i.trys.push([1, 4, 5, 6]),
                        (n = e.find(function (n) {
                          return n.id === t;
                        })))
                      )
                        return [3, 3];
                      return [4, (0, a.r)(t)];
                    case 2:
                      (n = i.sent().data.data), (i.label = 3);
                    case 3:
                      return v(n), [3, 6];
                    case 4:
                      return i.sent(), v(void 0), [3, 6];
                    case 5:
                      return h(!1), [7];
                    case 6:
                      return [2];
                  }
                });
              }),
              [t, e],
            );
          return (
            (0, d.useEffect)(
              function () {
                return (
                  t ? p() : v(void 0),
                  function () {
                    h(!1), v(void 0);
                  }
                );
              },
              [t],
            ),
            (0, d.useMemo)(
              function () {
                return { loading: c, detailPost: m, onGetDetailPost: p };
              },
              [m, c, p],
            )
          );
        };
    },
    35077: function (n, t, e) {
      e.d(t, {
        r: function () {
          return r;
        },
      });
      var i = e(33618),
        r = function (n) {
          return i.R.$get("/post/getPublish", { id: n });
        };
    },
  },
]);
//# sourceMappingURL=275.8101b818d5ee40b9.js.map
