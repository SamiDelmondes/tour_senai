"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4197],
  {
    68777: function (n, i, e) {
      e.d(i, {
        B: function () {
          return r;
        },
      });
      var t = e(7297);
      function o() {
        var n = (0, t.Z)([
          "\n  position: absolute;\n  top: calc(50% - 27px) !important;\n  background: #fff !important;\n  opacity: 0.5 !important;\n  z-index: 2000;\n  width: 32px;\n  height: 32px;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  cursor: pointer;\n  &.control-prev {\n    left: 10px !important;\n    &:before {\n      border-right-color: #212121 !important;\n    }\n  }\n  &.control-next {\n    right: 10px !important;\n    &:before {\n      border-left-color: #212121 !important;\n    }\n  }\n",
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      var r = e(19521).ZP.div.withConfig({
        displayName: "styled__ArrowSlideWrapper",
        componentId: "Panoee__sc-aac30e82-0",
      })(o());
    },
    64197: function (n, i, e) {
      e.r(i),
        e.d(i, {
          Preview: function () {
            return g;
          },
          default: function () {
            return m;
          },
        });
      var t = e(47568),
        o = e(828),
        r = e(70655),
        l = e(85893),
        a = e(81100),
        d = e(27556),
        c = e(35077),
        u = e(67294),
        s = e(79612),
        p = e(7297),
        v = e(68777);
      function f() {
        var n = (0, p.Z)([
          "\n  z-index: 10;\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid rgb(255 255 255 / 0.2);\n  width: max-content;\n  > div {\n    width: 100%;\n    height: 100%;\n  }\n  .video {\n    width: 320px;\n    height: 180px;\n    iframe {\n      width: 100% !important;\n      height: 100%;\n    }\n  }\n  .article {\n    width: 320px;\n    height: auto;\n    max-height: 70vh;\n    overflow: auto;\n    background: #fff;\n    padding: 0.75rem;\n    .ctn {\n      height: 100%;\n    }\n  }\n  .link {\n    width: 320px;\n    height: 180px;\n    iframe {\n      width: 320px;\n      height: 100%;\n    }\n  }\n  .images {\n    width: 320px;\n    height: auto;\n    background: #000;\n    position: relative;\n    ",
          " {\n      top: calc(50% - 16px) !important;\n    }\n    .gallery-item {\n      width: 100%;\n      height: 200px;\n      background-position: center;\n      background-size: contain;\n      background-repeat: no-repeat;\n    }\n    .quick-play {\n      top: 50%;\n      left: 50%;\n      z-index: 10;\n      cursor: pointer;\n      position: absolute;\n      transform: translate(-50%, -50%);\n      i {\n        color: #fff;\n        font-size: 32px;\n      }\n    }\n  }\n  .point {\n    img {\n      width: 200px;\n      height: auto;\n    }\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      var h = e(19521).ZP.div.withConfig({
          displayName: "Preview.styled__PreviewWrapper",
          componentId: "Panoee__sc-d240630c-0",
        })(f(), v.B),
        g = (0, u.memo)(function (n) {
          var i,
            e,
            p,
            v,
            f,
            g,
            m,
            x,
            _ = n.hotspot,
            w = n.listPost,
            b = n.listScene,
            y = n.onClick,
            k = (0, o.Z)((0, u.useState)(void 0), 2),
            j = k[0],
            N = k[1],
            P = (0, u.useCallback)(
              ((i = (0, t.Z)(function (n) {
                return (0, r.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (i.trys.push([0, 3, , 4]),
                        w.find(function (i) {
                          return i.id === n;
                        }))
                      )
                        return [3, 2];
                      return [4, (0, c.r)(n)];
                    case 1:
                      i.sent().data.data, (i.label = 2);
                    case 2:
                      return N(j), [3, 4];
                    case 3:
                      return i.sent(), N(void 0), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (n) {
                return i.apply(this, arguments);
              }),
              [w, j],
            );
          (0, u.useEffect)(
            function () {
              "article" === _.type &&
                _.config.article.post_id &&
                P(_.config.article.post_id);
            },
            [_],
          );
          var C = (0, u.useMemo)(
              function () {
                var n, i;
                return (
                  ("point" === _.type &&
                    (null === (n = _.config) || void 0 === n
                      ? void 0
                      : null === (i = n.point) || void 0 === i
                        ? void 0
                        : i.target_scene_id) &&
                    b.filter(function (n) {
                      return n.id === _.config.point.target_scene_id;
                    })[0]) ||
                  void 0
                );
              },
              [_, b],
            ),
            Z = (0, u.useMemo)(
              function () {
                if ("point" === _.type) {
                  var n, i, e, t, o, r, l, a, d, c;
                  return (null === (n = _.config) || void 0 === n
                    ? void 0
                    : null === (i = n.point) || void 0 === i
                      ? void 0
                      : i.preview_box_img_type) === "thumbnail"
                    ? (null == C ? void 0 : C.screenshot) ||
                        (null == C
                          ? void 0
                          : null === (e = C.media) || void 0 === e
                            ? void 0
                            : e.src_preview)
                    : (null === (t = _.config) || void 0 === t
                          ? void 0
                          : null === (o = t.point) || void 0 === o
                            ? void 0
                            : o.preview_box_img_type) === "upload" &&
                        (null === (r = _.config) || void 0 === r
                          ? void 0
                          : null === (l = r.point) || void 0 === l
                            ? void 0
                            : l.preview_box_img_src)
                      ? null == _
                        ? void 0
                        : null === (a = _.config) || void 0 === a
                          ? void 0
                          : null === (d = a.point) || void 0 === d
                            ? void 0
                            : d.preview_box_img_src
                      : null == C
                        ? void 0
                        : null === (c = C.media) || void 0 === c
                          ? void 0
                          : c.src_preview;
                }
                return "";
              },
              [C, _],
            );
          return (0, l.jsxs)(h, {
            children: [
              "video" === _.type &&
                (null === (e = _.config) || void 0 === e
                  ? void 0
                  : null === (p = e.video) || void 0 === p
                    ? void 0
                    : p.url) &&
                (0, l.jsx)("div", {
                  className: "video",
                  children: (0, l.jsx)("iframe", {
                    title: "title",
                    width: "100%",
                    height: "100%",
                    src: "".concat(
                      (0, d.RH)(
                        null === (v = _.config) || void 0 === v
                          ? void 0
                          : null === (f = v.video) || void 0 === f
                            ? void 0
                            : f.url,
                      ),
                    ),
                    allowFullScreen: !0,
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  }),
                }),
              "article" === _.type &&
                (null == j ? void 0 : j.id) &&
                (0, l.jsx)("div", {
                  className: "article",
                  children: (0, l.jsx)("div", {
                    className: "ctn ctn__html",
                    dangerouslySetInnerHTML: {
                      __html: null == j ? void 0 : j.content,
                    },
                  }),
                }),
              "image" === _.type &&
                (null === (g = _.config) || void 0 === g
                  ? void 0
                  : null === (m = g.image) || void 0 === m
                    ? void 0
                    : null === (x = m.galleries) || void 0 === x
                      ? void 0
                      : x.length) &&
                (0, l.jsxs)("div", {
                  className: "images",
                  children: [
                    (0, l.jsx)("div", {
                      className: "quick-play",
                      onClick: y,
                      children: (0, l.jsx)("i", {
                        "aria-hidden": !0,
                        className: "fas fa-search-plus",
                      }),
                    }),
                    (0, l.jsx)(s.Z, {
                      elementType: "div",
                      className: "carousel",
                      options: {
                        contain: !0,
                        prevNextButtons: !0,
                        pageDots: !1,
                        lazyLoad: !0,
                        cellAlign: "left",
                      },
                      children: _.config.image.galleries.map(function (n) {
                        return (0, l.jsx)(
                          "div",
                          {
                            className: "gallery-item",
                            style: {
                              backgroundImage: "url(".concat(n.src, ")"),
                            },
                          },
                          n.id,
                        );
                      }),
                    }),
                    (0, l.jsx)(a.H, {}),
                  ],
                }),
              "point" === _.type &&
                C &&
                (0, l.jsx)("div", {
                  className: "point",
                  children: (0, l.jsx)("img", { src: Z, alt: "123" }),
                }),
            ],
          });
        }),
        m = g;
    },
    35077: function (n, i, e) {
      e.d(i, {
        r: function () {
          return o;
        },
      });
      var t = e(33618),
        o = function (n) {
          return t.R.$get("/post/getPublish", { id: n });
        };
    },
  },
]);
//# sourceMappingURL=4197.917b341d26e250a4.js.map
