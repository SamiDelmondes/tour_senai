"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3077],
  {
    36478: function (o, i, e) {
      var n = e(85893),
        l = e(67294),
        t = e(22689);
      e(8846);
      var d = (0, l.forwardRef)(function (o, i) {
        var e = o.delegate,
          d = o.options,
          u = o.children,
          c = e || "[data-fancybox]";
        return (
          (0, l.useEffect)(function () {
            return (
              t.KR.bind(c, d || {}),
              (window.fancybox = t.KR),
              function () {
                t.KR.destroy();
              }
            );
          }, []),
          (0, l.useImperativeHandle)(i, function () {
            return {
              getRoot: function () {
                return t.KR;
              },
              getInstance: function () {
                return t.KR.getInstance();
              },
            };
          }),
          (0, n.jsx)(n.Fragment, { children: u })
        );
      });
      i.Z = d;
    },
    50777: function (o, i, e) {
      e.r(i);
      var n = e(85893),
        l = e(67294),
        t = e(36478),
        d = (0, l.memo)(function (o) {
          var i = o.hotspotSelected,
            e = o.onClose,
            d = (0, l.useRef)(null),
            u = (0, l.useMemo)(
              function () {
                return {
                  infinite: !1,
                  closeButton: "outside",
                  dragToClose: !1,
                  helpers: { overlay: { closeClick: !1 } },
                  clickSlide: !1,
                  touch: !1,
                  on: {
                    destroy: function () {
                      return e();
                    },
                  },
                };
              },
              [e],
            ),
            c = (0, l.useCallback)(
              function () {
                var o,
                  e,
                  n,
                  l,
                  t,
                  c,
                  r,
                  a,
                  v,
                  s,
                  f,
                  g,
                  m,
                  h,
                  p,
                  y,
                  k,
                  R,
                  w,
                  b,
                  x,
                  C,
                  K,
                  E,
                  _;
                switch (i.type) {
                  case "image":
                    null === (o = d.current) ||
                      void 0 === o ||
                      o.getRoot().show(
                        null === (e = i.config) || void 0 === e
                          ? void 0
                          : null === (n = e.image) || void 0 === n
                            ? void 0
                            : null === (l = n.galleries) || void 0 === l
                              ? void 0
                              : l.map(function (o) {
                                  return { src: o.src, type: "image" };
                                }),
                        u,
                      );
                    break;
                  case "video":
                    null === (t = d.current) ||
                      void 0 === t ||
                      t.getRoot().show(
                        [
                          {
                            src:
                              null === (c = i.config) || void 0 === c
                                ? void 0
                                : c.video.url,
                            type: "video",
                          },
                        ],
                        u,
                      );
                    break;
                  case "media":
                    switch (
                      null === (r = i.config) || void 0 === r
                        ? void 0
                        : null === (a = r.media) || void 0 === a
                          ? void 0
                          : a.type
                    ) {
                      case "media-video":
                        (null === (v = i.config) || void 0 === v
                          ? void 0
                          : null === (s = v.media) || void 0 === s
                            ? void 0
                            : s.action) === "zoom" &&
                          (null === (f = d.current) ||
                            void 0 === f ||
                            f.getRoot().show(
                              [
                                {
                                  src:
                                    null === (g = i.config) || void 0 === g
                                      ? void 0
                                      : null === (m = g.media) || void 0 === m
                                        ? void 0
                                        : null === (h = m.media) || void 0 === h
                                          ? void 0
                                          : h.src,
                                  type: "video",
                                },
                              ],
                              u,
                            ));
                        break;
                      case "media-image":
                        (null === (p = i.config) || void 0 === p
                          ? void 0
                          : null === (y = p.media) || void 0 === y
                            ? void 0
                            : y.action) === "zoom" &&
                          (null === (k = d.current) ||
                            void 0 === k ||
                            k.getRoot().show(
                              [
                                {
                                  src:
                                    null === (R = i.config) || void 0 === R
                                      ? void 0
                                      : null === (w = R.media) || void 0 === w
                                        ? void 0
                                        : null === (b = w.media) || void 0 === b
                                          ? void 0
                                          : b.src,
                                  type: "image",
                                },
                              ],
                              u,
                            ));
                    }
                  case "link":
                    (null === (x = i.config) || void 0 === x
                      ? void 0
                      : null === (C = x.link) || void 0 === C
                        ? void 0
                        : C.action) === "iframe" &&
                      (null === (K = d.current) ||
                        void 0 === K ||
                        K.getRoot().show(
                          [
                            {
                              src:
                                null === (E = i.config) || void 0 === E
                                  ? void 0
                                  : null === (_ = E.link) || void 0 === _
                                    ? void 0
                                    : _.url,
                              type: "iframe",
                            },
                          ],
                          u,
                        ));
                }
              },
              [i, u],
            );
          return (
            (0, l.useEffect)(
              function () {
                c();
              },
              [c],
            ),
            (0, n.jsx)(t.Z, {
              ref: d,
              options: {
                on: {
                  destroy: function () {
                    return e();
                  },
                },
              },
              children: (0, n.jsx)("a", {
                "data-fancybox": "gallery",
                href: "https://lipsum.app/id/3/800x600",
                className: "el-hide",
                children: "Panoee",
              }),
            })
          );
        });
      i.default = d;
    },
  },
]);
//# sourceMappingURL=3077.1bacf9d8c41f994a.js.map
