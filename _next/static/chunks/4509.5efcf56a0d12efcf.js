"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4509],
  {
    84509: function (n, e, t) {
      t.r(e);
      var i = t(41799),
        o = t(69396),
        l = t(828),
        u = t(85893),
        d = t(7400),
        r = t(33207),
        a = t(17230),
        c = t(5152),
        s = t.n(c),
        v = t(67294),
        f = t(25617),
        p = t(59031),
        b = s()(
          function () {
            return t.e(1074).then(t.bind(t, 41074));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [41074];
              },
            },
          },
        ),
        _ = s()(
          function () {
            return Promise.all([t.e(4047), t.e(6957)]).then(t.bind(t, 26957));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [26957];
              },
            },
          },
        ),
        h = s()(
          function () {
            return Promise.all([t.e(9980), t.e(3077)]).then(t.bind(t, 50777));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [50777];
              },
            },
          },
        );
      e.default = (0, v.memo)(function () {
        var n,
          e,
          t = (0, f.I0)(),
          c = (0, f.v9)(d.U9),
          s = (0, f.v9)(d.aS),
          w = (0, f.v9)(d.Y2),
          g = (0, l.Z)((0, v.useState)(void 0), 2),
          k = g[0],
          m = g[1],
          S = (0, l.Z)((0, v.useState)(!1), 2),
          P = S[0],
          y = S[1],
          Z = (0, l.Z)((0, v.useState)(!1), 2),
          E = Z[0],
          N = Z[1],
          C = (0, a.o)().onPushEventClickedHotspot,
          x = (0, p.$)({ idPost: k }).detailPost,
          j = (0, v.useMemo)(
            function () {
              var n;
              return (
                (null == s
                  ? void 0
                  : null === (n = s.config) || void 0 === n
                    ? void 0
                    : n.link) || void 0
              );
            },
            [s],
          ),
          G = (0, v.useMemo)(
            function () {
              var n, e;
              return (
                ((null == s ? void 0 : s.type) === "point"
                  ? null == s
                    ? void 0
                    : null === (n = s.config) || void 0 === n
                      ? void 0
                      : n.point
                  : null == s
                    ? void 0
                    : null === (e = s.config) || void 0 === e
                      ? void 0
                      : e.chevron) || void 0
              );
            },
            [s],
          ),
          T = (0, v.useCallback)(
            function () {
              t(r.Nw.setHotspotSelected(null)), N(!1), y(!1), m(void 0);
            },
            [t],
          );
        return (
          (0, v.useEffect)(
            function () {
              if (
                (s && C(), s && (null == s ? void 0 : s.type) === "article")
              ) {
                var n, e, t, i;
                y(!0),
                  (null == s
                    ? void 0
                    : null === (n = s.config) || void 0 === n
                      ? void 0
                      : null === (e = n.article) || void 0 === e
                        ? void 0
                        : e.post_id) &&
                    m(
                      null == s
                        ? void 0
                        : null === (t = s.config) || void 0 === t
                          ? void 0
                          : null === (i = t.article) || void 0 === i
                            ? void 0
                            : i.post_id,
                    );
              }
              s && (null == s ? void 0 : s.type) === "product" && N(!0);
            },
            [s],
          ),
          (0, v.useEffect)(
            function () {
              (null == j ? void 0 : j.url) &&
                (null == j ? void 0 : j.action) !== "iframe" &&
                (window.open(
                  null == j ? void 0 : j.url,
                  (null == j ? void 0 : j.action) === "same-tab"
                    ? "_self"
                    : "_blank",
                  (null == j ? void 0 : j.action) === "new-window"
                    ? "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                    : null,
                ),
                T());
            },
            [j],
          ),
          (0, v.useEffect)(
            function () {
              if (null == G ? void 0 : G.target_scene_id) {
                var n,
                  e = G.hlookat_default,
                  l = G.vlookat_default,
                  u = G.zoom_default,
                  d = G.isTransition,
                  a = G.typeTransition,
                  s = c.filter(function (n) {
                    return n.id === (null == G ? void 0 : G.target_scene_id);
                  })[0];
                (null ==
                (s = (0, i.Z)({}, s, {
                  config: (0, o.Z)(
                    (0, i.Z)({}, null == s ? void 0 : s.config),
                    {
                      default_view: (0, i.Z)(
                        {},
                        null == s
                          ? void 0
                          : null === (n = s.config) || void 0 === n
                            ? void 0
                            : n.default_view,
                        { x: e || 0, y: l || 0, zoom_lv: u || 90 },
                      ),
                      isTransition: d,
                      typeTransition: d
                        ? void 0 === a
                          ? "NOBLEND"
                          : a
                        : "NOBLEND",
                    },
                  ),
                }))
                  ? void 0
                  : s.id) &&
                  (t(r.Nw.setSceneSelected(s)),
                  t(r.Nw.setprevSceneSelected(w)),
                  T());
              }
            },
            [w, t, G, c, T],
          ),
          (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(b, {
                visible: P,
                onCancel: T,
                post: x,
                width:
                  null == s
                    ? void 0
                    : null === (n = s.config) || void 0 === n
                      ? void 0
                      : null === (e = n.article) || void 0 === e
                        ? void 0
                        : e.popup_width,
              }),
              (null == s ? void 0 : s.itemPrd) &&
                (0, u.jsx)(_, {
                  onCancel: T,
                  visible: E,
                  product: null == s ? void 0 : s.itemPrd,
                }),
              s && (0, u.jsx)(h, { hotspotSelected: s, onClose: T }),
            ],
          })
        );
      });
    },
    59031: function (n, e, t) {
      t.d(e, {
        $: function () {
          return c;
        },
      });
      var i = t(47568),
        o = t(828),
        l = t(70655),
        u = t(35077),
        d = t(25617),
        r = t(67294),
        a = t(7400),
        c = function (n) {
          var e = n.idPost,
            t = (0, d.v9)(a.Yd),
            c = (0, o.Z)((0, r.useState)(!1), 2),
            s = c[0],
            v = c[1],
            f = (0, o.Z)((0, r.useState)(void 0), 2),
            p = f[0],
            b = f[1],
            _ = (0, r.useCallback)(
              (0, i.Z)(function () {
                var n;
                return (0, l.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      v(!0), (i.label = 1);
                    case 1:
                      if (
                        (i.trys.push([1, 4, 5, 6]),
                        (n = t.find(function (n) {
                          return n.id === e;
                        })))
                      )
                        return [3, 3];
                      return [4, (0, u.r)(e)];
                    case 2:
                      (n = i.sent().data.data), (i.label = 3);
                    case 3:
                      return b(n), [3, 6];
                    case 4:
                      return i.sent(), b(void 0), [3, 6];
                    case 5:
                      return v(!1), [7];
                    case 6:
                      return [2];
                  }
                });
              }),
              [e, t],
            );
          return (
            (0, r.useEffect)(
              function () {
                return (
                  e ? _() : b(void 0),
                  function () {
                    v(!1), b(void 0);
                  }
                );
              },
              [e],
            ),
            (0, r.useMemo)(
              function () {
                return { loading: s, detailPost: p, onGetDetailPost: _ };
              },
              [p, s, _],
            )
          );
        };
    },
    35077: function (n, e, t) {
      t.d(e, {
        r: function () {
          return o;
        },
      });
      var i = t(33618),
        o = function (n) {
          return i.R.$get("/post/getPublish", { id: n });
        };
    },
  },
]);
//# sourceMappingURL=4509.5efcf56a0d12efcf.js.map
