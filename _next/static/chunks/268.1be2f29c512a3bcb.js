"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [268],
  {
    80268: function (o, i, l) {
      l.r(i);
      var n = l(828),
        e = l(85893),
        d = l(67294),
        t = l(5152),
        v = l.n(t),
        u = l(10808),
        c = l(29750),
        r = l(53495),
        s = v()(
          function () {
            return l.e(6461).then(l.bind(l, 56461));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [56461];
              },
            },
          },
        ),
        a = v()(
          function () {
            return l.e(3775).then(l.bind(l, 83775));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [83775];
              },
            },
          },
        ),
        f = v()(
          function () {
            return l.e(3268).then(l.bind(l, 3268));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [3268];
              },
            },
          },
        ),
        p = v()(
          function () {
            return Promise.all([l.e(296), l.e(9464), l.e(7288)]).then(
              l.bind(l, 97288),
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [97288];
              },
            },
          },
        ),
        g = v()(
          function () {
            return l.e(1407).then(l.bind(l, 1407));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1407];
              },
            },
          },
        ),
        y = v()(
          function () {
            return l.e(3196).then(l.bind(l, 73196));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [73196];
              },
            },
          },
        ),
        h = v()(
          function () {
            return Promise.all([l.e(3742), l.e(4197)]).then(l.bind(l, 64197));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [64197];
              },
            },
            ssr: !1,
          },
        );
      i.default = (0, d.memo)(function (o) {
        var i,
          l,
          t,
          v,
          b,
          m,
          _,
          k,
          x,
          C,
          j,
          w,
          M,
          G,
          P,
          T,
          H,
          S,
          D,
          N,
          O,
          E,
          z,
          L,
          I,
          Z,
          F,
          R,
          $,
          q,
          A,
          B,
          J = o.hotspot,
          K = o.listScene,
          Q = o.listPost,
          U = o.onChangePopover,
          V = o.isHidden,
          W = o.isHideTitleGlobal,
          X = void 0 !== W && W,
          Y = o.isHidePreviewGlobal,
          oo = void 0 !== Y && Y,
          oi = o.isHideTitleOnTopGlobal,
          ol = o.onClick,
          on = void 0 === ol ? function () {} : ol,
          oe = o.bgColorDefault,
          od = void 0 === oe ? c.n$ : oe,
          ot = o.iconColorDefault,
          ov = void 0 === ot ? c.IM : ot,
          ou = (0, d.useRef)(!1),
          oc = (0, n.Z)((0, d.useState)(!1), 2),
          or = oc[0],
          os = oc[1],
          oa = (0, d.useMemo)(
            function () {
              var o, i, l, n, e, d, t, v;
              return (
                (null == J
                  ? void 0
                  : null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.style) || void 0 === i
                      ? void 0
                      : i.type) === "icon" &&
                ((null == J
                  ? void 0
                  : null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.style) || void 0 === n
                      ? void 0
                      : null === (e = n.icon) || void 0 === e
                        ? void 0
                        : e.icon) ||
                  (null == J
                    ? void 0
                    : null === (d = J.config) || void 0 === d
                      ? void 0
                      : null === (t = d.style) || void 0 === t
                        ? void 0
                        : null === (v = t.icon) || void 0 === v
                          ? void 0
                          : v.shape))
              );
            },
            [J],
          ),
          of = (0, d.useMemo)(
            function () {
              var o, i, l, n, e;
              return (
                (null == J
                  ? void 0
                  : null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.style) || void 0 === i
                      ? void 0
                      : i.type) === "image" &&
                (null == J
                  ? void 0
                  : null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.style) || void 0 === n
                      ? void 0
                      : null === (e = n.image) || void 0 === e
                        ? void 0
                        : e.src)
              );
            },
            [J],
          ),
          op = (0, d.useMemo)(
            function () {
              var o, i, l, n, e;
              return (
                (null == J
                  ? void 0
                  : null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.style) || void 0 === i
                      ? void 0
                      : i.type) === "lottie" &&
                (null == J
                  ? void 0
                  : null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.style) || void 0 === n
                      ? void 0
                      : null === (e = n.lottie) || void 0 === e
                        ? void 0
                        : e.json_src)
              );
            },
            [J],
          ),
          og = (0, d.useMemo)(
            function () {
              var o, i, l, n, e;
              return (
                (null == J
                  ? void 0
                  : null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.style) || void 0 === i
                      ? void 0
                      : i.type) === "marker" &&
                (null == J
                  ? void 0
                  : null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.style) || void 0 === n
                      ? void 0
                      : null === (e = n.marker) || void 0 === e
                        ? void 0
                        : e.svg_src)
              );
            },
            [J],
          ),
          oy = (0, d.useMemo)(
            function () {
              var o, i, l, n, e, d, t, v;
              return (
                (null == J
                  ? void 0
                  : null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.style) || void 0 === i
                      ? void 0
                      : i.type) === "callout" &&
                ((null == J
                  ? void 0
                  : null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.style) || void 0 === n
                      ? void 0
                      : null === (e = n.callout) || void 0 === e
                        ? void 0
                        : e.src) ||
                  (null == J
                    ? void 0
                    : null === (d = J.config) || void 0 === d
                      ? void 0
                      : null === (t = d.style) || void 0 === t
                        ? void 0
                        : null === (v = t.callout) || void 0 === v
                          ? void 0
                          : v.text))
              );
            },
            [J],
          ),
          oh = (0, d.useMemo)(
            function () {
              var o, i, l, n, e, d, t, v, u, c;
              switch (null == J ? void 0 : J.type) {
                case "point":
                  return !!(null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.point) || void 0 === i
                      ? void 0
                      : i.preview_box_hide);
                case "image":
                  return !!(null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.image) || void 0 === n
                      ? void 0
                      : n.preview_box_hide);
                case "video":
                  return !!(null === (e = J.config) || void 0 === e
                    ? void 0
                    : null === (d = e.video) || void 0 === d
                      ? void 0
                      : d.preview_box_hide);
                case "article":
                  return !!(null === (t = J.config) || void 0 === t
                    ? void 0
                    : null === (v = t.article) || void 0 === v
                      ? void 0
                      : v.preview_box_hide);
                case "link":
                  return !!(null === (u = J.config) || void 0 === u
                    ? void 0
                    : null === (c = u.link) || void 0 === c
                      ? void 0
                      : c.preview_box_hide);
                default:
                  return !1;
              }
            },
            [J],
          ),
          ob = (0, d.useMemo)(
            function () {
              var o, i, l, n, e, d, t, v, u, c;
              switch (null == J ? void 0 : J.type) {
                case "point":
                  return !!(null === (o = J.config) || void 0 === o
                    ? void 0
                    : null === (i = o.point) || void 0 === i
                      ? void 0
                      : i.title_on_top_hide);
                case "image":
                  return !!(null === (l = J.config) || void 0 === l
                    ? void 0
                    : null === (n = l.image) || void 0 === n
                      ? void 0
                      : n.title_on_top_hide);
                case "video":
                  return !!(null === (e = J.config) || void 0 === e
                    ? void 0
                    : null === (d = e.video) || void 0 === d
                      ? void 0
                      : d.title_on_top_hide);
                case "article":
                  return !!(null === (t = J.config) || void 0 === t
                    ? void 0
                    : null === (v = t.article) || void 0 === v
                      ? void 0
                      : v.title_on_top_hide);
                case "link":
                  return !!(null === (u = J.config) || void 0 === u
                    ? void 0
                    : null === (c = u.article) || void 0 === c
                      ? void 0
                      : c.title_on_top_hide);
                default:
                  return !1;
              }
            },
            [J],
          ),
          om = (0, d.useCallback)(function () {
            ou.current = !0;
          }, []),
          o_ = (0, d.useCallback)(function () {
            ou.current = !1;
          }, []),
          ok = (0, d.useCallback)(
            function () {
              os(!0), U(!0);
            },
            [U],
          ),
          ox = (0, d.useCallback)(
            function () {
              o_(), os(!1), U(!1);
            },
            [U, o_],
          );
        return (0, e.jsx)(r.xd, {
          isHidden: void 0 !== V && V,
          type:
            (null == J
              ? void 0
              : null === (i = J.config) || void 0 === i
                ? void 0
                : null === (l = i.style) || void 0 === l
                  ? void 0
                  : l.type) === "icon" &&
            (null == J
              ? void 0
              : null === (t = J.config) || void 0 === t
                ? void 0
                : null === (v = t.style) || void 0 === v
                  ? void 0
                  : null === (b = v.icon) || void 0 === b
                    ? void 0
                    : b.shape)
              ? "icon-shape"
              : (null == J
                  ? void 0
                  : null === (m = J.config) || void 0 === m
                    ? void 0
                    : null === (_ = m.style) || void 0 === _
                      ? void 0
                      : _.type) || "icon",
          size:
            (null == J
              ? void 0
              : null === (k = J.config) || void 0 === k
                ? void 0
                : null === (x = k.style) || void 0 === x
                  ? void 0
                  : x.size) || 3,
          rotate:
            (null == J
              ? void 0
              : null === (C = J.config) || void 0 === C
                ? void 0
                : null === (j = C.style) || void 0 === j
                  ? void 0
                  : j.rotate) || 0,
          opacity:
            ((null == J
              ? void 0
              : null === (w = J.config) || void 0 === w
                ? void 0
                : null === (M = w.style) || void 0 === M
                  ? void 0
                  : M.opacity) || 100) / 100,
          onMouseOver: ok,
          onMouseLeave: function () {
            setTimeout(function () {
              ou.current || ox();
            }, 200);
          },
          onClick: ox,
          onTouchEnd: ox,
          children: (0, e.jsxs)(u.Z, {
            open:
              (!oo || !X) &&
              (!oh || !X) &&
              (!oo || !!J.title) &&
              (!oh || !!J.title) &&
              "sound" !== J.type &&
              or,
            content: (0, e.jsx)("div", {
              onFocus: om,
              onMouseOver: om,
              onMouseLeave: o_,
              onClick: function (o) {
                o.stopPropagation(), om();
              },
              onTouchStart: function (o) {
                o.stopPropagation(), om();
              },
              children:
                J.title && !X
                  ? (0, e.jsxs)("span", {
                      className: "hotspotTitle",
                      children: [
                        oo || oh
                          ? (0, e.jsx)("div", {})
                          : (0, e.jsx)(h, {
                              hotspot: J,
                              listPost: Q,
                              listScene: K,
                              onClick: function () {
                                ox(), on();
                              },
                            }),
                        (0, e.jsx)("em", { children: J.title }),
                      ],
                    })
                  : oo || oh
                    ? (0, e.jsx)("div", {})
                    : (0, e.jsx)(h, {
                        hotspot: J,
                        listPost: Q,
                        listScene: K,
                        onClick: function () {
                          ox(), on();
                        },
                      }),
            }),
            placement: "article" === J.type ? "right" : "top",
            destroyTooltipOnHide: !0,
            mouseLeaveDelay: 500,
            onOpenChange: function (o) {
              o || (ou.current = !1);
            },
            overlayClassName: "popoverPreviewHotspot",
            zIndex: 99,
            children: [
              J.title &&
                !(void 0 !== oi && oi) &&
                !ob &&
                (0, e.jsx)("span", {
                  className: "--title",
                  children: (0, e.jsx)("em", { children: J.title }),
                }),
              (0, e.jsxs)("div", {
                className: "content animate__animated ".concat(
                  (null == J
                    ? void 0
                    : null === (G = J.config) || void 0 === G
                      ? void 0
                      : null === (P = G.style) || void 0 === P
                        ? void 0
                        : P.effect) &&
                    (null == J
                      ? void 0
                      : null === (T = J.config) || void 0 === T
                        ? void 0
                        : null === (H = T.style) || void 0 === H
                          ? void 0
                          : H.effect) !== "normal"
                    ? null == J
                      ? void 0
                      : null === (S = J.config) || void 0 === S
                        ? void 0
                        : null === (D = S.style) || void 0 === D
                          ? void 0
                          : D.effect
                    : "",
                ),
                onClick: on,
                onTouchEnd: on,
                children: [
                  !of &&
                    !oa &&
                    !op &&
                    !oy &&
                    !og &&
                    (0, e.jsx)(s, {
                      typeHotspot: null == J ? void 0 : J.type,
                      bgColorDefault:
                        (null === (N = J.config) || void 0 === N
                          ? void 0
                          : null === (O = N.style) || void 0 === O
                            ? void 0
                            : null === (E = O.icon) || void 0 === E
                              ? void 0
                              : E.bg_color) || od,
                      iconColorDefault: ov,
                    }),
                  oa &&
                    (0, e.jsx)(a, {
                      typeHotspot: null == J ? void 0 : J.type,
                      bgColorDefault: od,
                      iconColorDefault: ov,
                      hotspotStyleShape:
                        null === (z = J.config) || void 0 === z
                          ? void 0
                          : null === (L = z.style) || void 0 === L
                            ? void 0
                            : L.icon,
                    }),
                  of &&
                    (0, e.jsx)(f, {
                      image:
                        null === (I = J.config) || void 0 === I
                          ? void 0
                          : null === (Z = I.style) || void 0 === Z
                            ? void 0
                            : Z.image,
                    }),
                  op &&
                    (0, e.jsx)(p, {
                      lottie:
                        null === (F = J.config) || void 0 === F
                          ? void 0
                          : null === (R = F.style) || void 0 === R
                            ? void 0
                            : R.lottie,
                    }),
                  og &&
                    (0, e.jsx)(g, {
                      hotspot: J,
                      listScene: K,
                      marker:
                        null === ($ = J.config) || void 0 === $
                          ? void 0
                          : null === (q = $.style) || void 0 === q
                            ? void 0
                            : q.marker,
                    }),
                  oy &&
                    (0, e.jsx)(y, {
                      hotspotTitle: J.title || "---",
                      callout:
                        null === (A = J.config) || void 0 === A
                          ? void 0
                          : null === (B = A.style) || void 0 === B
                            ? void 0
                            : B.callout,
                    }),
                ],
              }),
            ],
          }),
        });
      });
    },
  },
]);
//# sourceMappingURL=268.1be2f29c512a3bcb.js.map
