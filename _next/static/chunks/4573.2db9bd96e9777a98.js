"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4573],
  {
    5239: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return l;
        },
        FN: function () {
          return i;
        },
        Oj: function () {
          return r;
        },
        gU: function () {
          return u;
        },
        tf: function () {
          return s;
        },
        yG: function () {
          return a;
        },
      });
      var o = n(62845),
        r = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        i = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        a = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        s = (0, o.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        u = (0, o.r8)({
          state: {
            isLoaded: !1,
            idPostProjectSelected: "",
            visibleDialogPostProject: !1,
            idPostSceneSelected: "",
            visibleDialogPostScene: !1,
            isSoundOnScene: !1,
            isVisibleMap: !0,
            isVisibleFloorplan: !0,
            isVisiblePopupIntro: void 0,
            isActiveModeMultipleStaging: !1,
          },
        }).useGlobalState;
    },
    59031: function (e, t, n) {
      n.d(t, {
        $: function () {
          return c;
        },
      });
      var o = n(47568),
        r = n(828),
        l = n(70655),
        i = n(35077),
        a = n(25617),
        s = n(67294),
        u = n(7400),
        c = function (e) {
          var t = e.idPost,
            n = (0, a.v9)(u.Yd),
            c = (0, r.Z)((0, s.useState)(!1), 2),
            d = c[0],
            f = c[1],
            v = (0, r.Z)((0, s.useState)(void 0), 2),
            S = v[0],
            b = v[1],
            p = (0, s.useCallback)(
              (0, o.Z)(function () {
                var e;
                return (0, l.__generator)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      f(!0), (o.label = 1);
                    case 1:
                      if (
                        (o.trys.push([1, 4, 5, 6]),
                        (e = n.find(function (e) {
                          return e.id === t;
                        })))
                      )
                        return [3, 3];
                      return [4, (0, i.r)(t)];
                    case 2:
                      (e = o.sent().data.data), (o.label = 3);
                    case 3:
                      return b(e), [3, 6];
                    case 4:
                      return o.sent(), b(void 0), [3, 6];
                    case 5:
                      return f(!1), [7];
                    case 6:
                      return [2];
                  }
                });
              }),
              [t, n],
            );
          return (
            (0, s.useEffect)(
              function () {
                return (
                  t ? p() : b(void 0),
                  function () {
                    f(!1), b(void 0);
                  }
                );
              },
              [t],
            ),
            (0, s.useMemo)(
              function () {
                return { loading: d, detailPost: S, onGetDetailPost: p };
              },
              [S, d, p],
            )
          );
        };
    },
    84573: function (e, t, n) {
      n.r(t);
      var o = n(41799),
        r = n(69396),
        l = n(828),
        i = n(85893),
        a = n(5239),
        s = n(59031),
        u = n(7400),
        c = n(67294),
        d = n(25617),
        f = n(5152),
        v = n.n(f),
        S = n(79505),
        b = n(63665),
        p = v()(
          function () {
            return Promise.all([n.e(1382), n.e(2704)]).then(n.bind(n, 82704));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82704];
              },
            },
          },
        ),
        h = (0, c.memo)(function () {
          var e = (0, d.v9)(u.Y2),
            t = (0, l.Z)((0, a.tf)("stats"), 1)[0],
            n = (0, l.Z)((0, a.gU)("state"), 2),
            f = n[0],
            v = n[1],
            h = (0, S.Q)({}),
            g = h.onToggleInfoScene,
            m = h.onCloseDialogPostScene,
            P = (0, s.$)({ idPost: f.idPostSceneSelected }),
            y = P.loading,
            j = P.detailPost;
          return (
            (0, c.useEffect)(
              function () {
                return (
                  (null == e ? void 0 : e.post)
                    ? g(!0)
                    : (g(!1),
                      v(function (e) {
                        return (0, r.Z)((0, o.Z)({}, e), {
                          idPostSceneSelected: "",
                        });
                      })),
                  function () {
                    g(!1);
                  }
                );
              },
              [e],
            ),
            (0, i.jsx)(b.n7, {
              className: "".concat(f.visibleDialogPostScene ? "active" : ""),
              isShowControlbar: t.isShowControlbar,
              children: (0, i.jsxs)(p, {
                loading: y,
                children: [
                  (0, i.jsxs)("div", {
                    className: "popInfoContentHead",
                    children: [
                      (0, i.jsx)("h4", {
                        children: null == e ? void 0 : e.title,
                      }),
                      (0, i.jsx)("i", {
                        className: "popInfoClose fal fa-times",
                        onClick: m,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "popInfoArticle",
                    children: (0, i.jsx)("div", {
                      className: "content ctn__html",
                      dangerouslySetInnerHTML: {
                        __html: null == j ? void 0 : j.content,
                      },
                    }),
                  }),
                ],
              }),
            })
          );
        });
      t.default = h;
    },
    35077: function (e, t, n) {
      n.d(t, {
        r: function () {
          return r;
        },
      });
      var o = n(33618),
        r = function (e) {
          return o.R.$get("/post/getPublish", { id: e });
        };
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return a;
        },
      });
      var o = n(67294);
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        i = (e, t) => {
          let n = Object.keys(t),
            i = t,
            a = null,
            s = {};
          n.forEach((e) => {
            s[e] = new Set();
          });
          let u = (t, n) => (n.type === l ? (n.r ? n.r(t) : n.e) : e(t, n)),
            c = (e, t) => {
              let n = (n) => {
                var o;
                return r({}, n, {
                  [e]: ((o = n[e]), "function" == typeof t ? t(o) : t),
                });
              };
              if (a) a({ type: l, r: n });
              else {
                i = n(i);
                let t = i[e];
                s[e].forEach((e) => e(t));
              }
            },
            d = (e, t) => {
              n.forEach((n) => {
                let o = t[n];
                e[n] !== o && s[n].forEach((e) => e(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, o.useReducer)(u, i);
              (0, o.useEffect)(() => {
                if (a) throw Error("Only one global state provider is allowed");
                return (
                  (a = t),
                  t({ type: l, e: i }),
                  () => {
                    a = null;
                  }
                );
              }, []);
              let n = (0, o.useRef)(e);
              d(n.current, e),
                (n.current = e),
                (0, o.useEffect)(() => {
                  i = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, n] = (0, o.useState)(i[e]);
              return (
                (0, o.useEffect)(
                  () => (
                    s[e].add(n),
                    n(i[e]),
                    () => {
                      s[e].delete(n);
                    }
                  ),
                  [e],
                ),
                [t, (0, o.useCallback)((t) => c(e, t), [e])]
              );
            },
            getGlobalState: (e) => i[e],
            setGlobalState: c,
            getState: () => i,
            setState: (e) => {
              if (a) a({ type: l, e: e });
              else {
                let t = i;
                d(t, (i = e));
              }
            },
            dispatch: (t) => {
              if (a) a(t);
              else {
                let n = i;
                d(n, (i = e(i, t)));
              }
              return t;
            },
          };
        },
        a = (e) => i((e, t) => e, e),
        s = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(s)(e, t) : i(e, t);
    },
  },
]);
//# sourceMappingURL=4573.2db9bd96e9777a98.js.map
