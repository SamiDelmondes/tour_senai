"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9982],
  {
    5239: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return l;
        },
        FN: function () {
          return a;
        },
        Oj: function () {
          return o;
        },
        gU: function () {
          return s;
        },
        tf: function () {
          return u;
        },
        yG: function () {
          return i;
        },
      });
      var r = n(62845),
        o = (0, r.r8)({ vlookat: void 0 }).useGlobalState,
        l = (0, r.r8)({ hlookat: void 0 }).useGlobalState,
        a = (0, r.r8)({ zoom: void 0 }).useGlobalState,
        i = (0, r.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        u = (0, r.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        s = (0, r.r8)({
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
    9982: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Controlbar: function () {
            return h;
          },
        });
      var r = n(828),
        o = n(85893),
        l = n(5152),
        a = n.n(l),
        i = n(67294),
        u = n(25617),
        s = n(7400),
        c = n(5239),
        f = n(63665),
        d = a()(
          function () {
            return n.e(4112).then(n.bind(n, 44112));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [44112];
              },
            },
          },
        ),
        b = a()(
          function () {
            return Promise.all([
              n.e(1649),
              n.e(1276),
              n.e(7939),
              n.e(9505),
              n.e(3872),
            ]).then(n.bind(n, 72846));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [72846];
              },
            },
          },
        ),
        p = a()(
          function () {
            return Promise.all([
              n.e(1649),
              n.e(1276),
              n.e(7939),
              n.e(9505),
              n.e(8580),
            ]).then(n.bind(n, 22022));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [22022];
              },
            },
          },
        ),
        S = a()(
          function () {
            return Promise.all([
              n.e(1649),
              n.e(1276),
              n.e(7939),
              n.e(9505),
              n.e(9914),
            ]).then(n.bind(n, 53355));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [53355];
              },
            },
          },
        ),
        h = (0, i.memo)(function (e) {
          var t = e.krpanoRef,
            n = (0, u.v9)(s.Y2),
            l = (0, u.v9)(s.M9),
            a = (0, r.Z)((0, c.tf)("stats"), 1)[0];
          return (0, o.jsxs)(f.NA, {
            isShowControlbar: a.isShowControlbar,
            children: [
              (0, o.jsx)(d, {}),
              (0, o.jsxs)("div", {
                className: "txtBox",
                children: [
                  (0, o.jsx)("h1", {
                    className: "--projectTitle",
                    children: l.title || "N/A",
                  }),
                  (0, o.jsx)("p", {
                    children: (null == n ? void 0 : n.title) || "N/A",
                  }),
                ],
              }),
              (0, o.jsx)(b, { krpanoRef: t }),
              (0, o.jsx)(S, { krpanoRef: t }),
              (0, o.jsx)(p, { krpanoRef: t }),
            ],
          });
        });
      t.default = h;
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return i;
        },
      });
      var r = n(67294);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      let l = Symbol(),
        a = (e, t) => {
          let n = Object.keys(t),
            a = t,
            i = null,
            u = {};
          n.forEach((e) => {
            u[e] = new Set();
          });
          let s = (t, n) => (n.type === l ? (n.r ? n.r(t) : n.e) : e(t, n)),
            c = (e, t) => {
              let n = (n) => {
                var r;
                return o({}, n, {
                  [e]: ((r = n[e]), "function" == typeof t ? t(r) : t),
                });
              };
              if (i) i({ type: l, r: n });
              else {
                a = n(a);
                let t = a[e];
                u[e].forEach((e) => e(t));
              }
            },
            f = (e, t) => {
              n.forEach((n) => {
                let r = t[n];
                e[n] !== r && u[n].forEach((e) => e(r));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, r.useReducer)(s, a);
              (0, r.useEffect)(() => {
                if (i) throw Error("Only one global state provider is allowed");
                return (
                  (i = t),
                  t({ type: l, e: a }),
                  () => {
                    i = null;
                  }
                );
              }, []);
              let n = (0, r.useRef)(e);
              f(n.current, e),
                (n.current = e),
                (0, r.useEffect)(() => {
                  a = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [t, n] = (0, r.useState)(a[e]);
              return (
                (0, r.useEffect)(
                  () => (
                    u[e].add(n),
                    n(a[e]),
                    () => {
                      u[e].delete(n);
                    }
                  ),
                  [e],
                ),
                [t, (0, r.useCallback)((t) => c(e, t), [e])]
              );
            },
            getGlobalState: (e) => a[e],
            setGlobalState: c,
            getState: () => a,
            setState: (e) => {
              if (i) i({ type: l, e: e });
              else {
                let t = a;
                f(t, (a = e));
              }
            },
            dispatch: (t) => {
              if (i) i(t);
              else {
                let n = a;
                f(n, (a = e(a, t)));
              }
              return t;
            },
          };
        },
        i = (e) => a((e, t) => e, e),
        u = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(u)(e, t) : a(e, t);
    },
  },
]);
//# sourceMappingURL=9982.9589dbce6eeb3dca.js.map
