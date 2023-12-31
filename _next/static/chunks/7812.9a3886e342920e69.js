(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7812],
  {
    47812: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        });
      var c = t(828),
        i = t(85893),
        r = t(7400),
        u = t(67294),
        o = t(25617),
        l = t(44526),
        s = t(79612),
        a = function (e) {
          var n = e.onSetRef,
            t = e.scenesGroupActive,
            c = e.sceneSelected;
          return (0, i.jsx)(s.Z, {
            elementType: "div",
            className: "carousel",
            flickityRef: function (e) {
              e && n(e);
            },
            options: {
              freeScroll: !0,
              freeScrollFriction: 0.03,
              contain: !0,
              prevNextButtons: !1,
              pageDots: !1,
              lazyLoad: !0,
              cellAlign: "left",
            },
            children: t.map(function (e) {
              var n, t;
              return (0, i.jsxs)(
                "div",
                {
                  className: "".concat(
                    (null == c ? void 0 : c.id) === e.id ? "active" : "",
                    " itemScene",
                  ),
                  children: [
                    (0, i.jsx)("img", {
                      src:
                        e.screenshot ||
                        (null === (n = e.media) || void 0 === n
                          ? void 0
                          : n.src_thumb) ||
                        (null === (t = e.media) || void 0 === t
                          ? void 0
                          : t.src_preview) ||
                        "",
                      alt: "",
                    }),
                    (0, i.jsx)("h2", {
                      className: "--menuSceneTitle",
                      children: e.title,
                    }),
                  ],
                },
                e.id,
              );
            }),
          });
        },
        d = t(81100),
        f = t(55837);
      t(21699);
      var v = (0, u.forwardRef)(function (e, n) {
        var t = e.onChangeScene,
          s = e.className,
          v = e.isShow,
          m = (0, u.useRef)(null),
          h = (0, c.Z)((0, u.useState)(!1), 2),
          p = h[0],
          S = h[1],
          x = (0, o.v9)(r.Fr),
          N = (0, o.v9)(r.Y2),
          g = (0, u.useMemo)(
            function () {
              var e;
              return 1 === x.length && "uncategory" === x[0].id
                ? "uncategory"
                : (null ===
                    (e = x.filter(function (e) {
                      return (null == N ? void 0 : N.group) === e.id;
                    })[0]) || void 0 === e
                    ? void 0
                    : e.id) || "";
            },
            [x, N],
          ),
          j = (0, u.useMemo)(
            function () {
              var e;
              return (
                (null ===
                  (e = x.filter(function (e) {
                    return e.id === g;
                  })[0]) || void 0 === e
                  ? void 0
                  : e.scenes) || []
              );
            },
            [g, x],
          ),
          k = (0, u.useMemo)(
            function () {
              return j.findIndex(function (e) {
                return e.id === (null == N ? void 0 : N.id);
              });
            },
            [N, j],
          ),
          b = (0, u.useCallback)(
            function (e, n, c, i) {
              c && t(j[i]);
            },
            [t, j],
          );
        return (
          (0, u.useImperativeHandle)(n, function () {
            return {
              onPrevScene: function () {
                if (0 !== k) {
                  var e,
                    n = k - 1;
                  t(j[n]),
                    null === (e = m.current) || void 0 === e || e.select(n, !1);
                }
              },
              onNextScene: function () {
                if (k + 1 !== j.length) {
                  var e,
                    n = k + 1;
                  t(j[n]),
                    null === (e = m.current) || void 0 === e || e.select(n, !1);
                }
              },
            };
          }),
          (0, u.useEffect)(function () {
            S(!0);
          }, []),
          (0, u.useEffect)(
            function () {
              var e;
              return (
                (null == m ? void 0 : m.current) &&
                  (null === (e = m.current) ||
                    void 0 === e ||
                    e.on("staticClick", b)),
                function () {
                  var e;
                  (null == m ? void 0 : m.current) &&
                    (null === (e = m.current) ||
                      void 0 === e ||
                      e.off("staticClick", b));
                }
              );
            },
            [g, b, p],
          ),
          (0, i.jsxs)(f.bx, {
            className: ""
              .concat(s, " ")
              .concat(v ? "" : "--hide", " ")
              .concat(
                1 === x.length && "uncategory" === x[0].id ? "hideNav" : "",
              ),
            children: [
              1 === x.length && "uncategory" === x[0].id
                ? (0, i.jsx)("div", {
                    className: "scenes",
                    children:
                      p &&
                      (0, i.jsx)(a, {
                        sceneSelected: N,
                        scenesGroupActive: j,
                        onSetRef: function (e) {
                          if (!m.current && e) {
                            var n;
                            (m.current = e),
                              null === (n = m.current) ||
                                void 0 === n ||
                                n.on("staticClick", b);
                          }
                        },
                      }),
                  })
                : (0, i.jsx)(l.Z, {
                    activeKey: g,
                    tabPosition: "top",
                    onTabClick: function (e) {
                      var n = x.filter(function (n) {
                        return n.id === e;
                      })[0];
                      n.scenes && ((m.current = null), t(n.scenes[0]));
                    },
                    className: "--tabs",
                    children: x.map(function (e) {
                      return (0, i.jsx)(
                        l.Z.TabPane,
                        {
                          tab: "".concat(e.name || "N/A"),
                          className: "itemSceneCate ".concat(
                            g === e.id ? "active" : "",
                          ),
                          children:
                            g === e.id &&
                            p &&
                            (0, i.jsx)(a, {
                              sceneSelected: N,
                              scenesGroupActive: j,
                              onSetRef: function (e) {
                                if (!m.current) {
                                  var n;
                                  (m.current = e),
                                    null === (n = m.current) ||
                                      void 0 === n ||
                                      n.on("staticClick", b);
                                }
                              },
                            }),
                        },
                        e.id,
                      );
                    }),
                  }),
              (0, i.jsx)(d.H, {}),
            ],
          })
        );
      });
    },
    21699: function () {},
  },
]);
//# sourceMappingURL=7812.9a3886e342920e69.js.map
