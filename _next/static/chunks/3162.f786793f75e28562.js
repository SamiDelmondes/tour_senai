"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3162],
  {
    5239: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return r;
        },
        FN: function () {
          return i;
        },
        Oj: function () {
          return l;
        },
        gU: function () {
          return s;
        },
        tf: function () {
          return u;
        },
        yG: function () {
          return a;
        },
      });
      var o = n(62845),
        l = (0, o.r8)({ vlookat: void 0 }).useGlobalState,
        r = (0, o.r8)({ hlookat: void 0 }).useGlobalState,
        i = (0, o.r8)({ zoom: void 0 }).useGlobalState,
        a = (0, o.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        u = (0, o.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        s = (0, o.r8)({
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
    23162: function (e, t, n) {
      n.r(t);
      var o = n(41799),
        l = n(69396),
        r = n(828),
        i = n(85893),
        a = n(5239),
        u = n(5152),
        s = n.n(u),
        c = n(67294),
        f = s()(
          function () {
            return n.e(275).then(n.bind(n, 60275));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [60275];
              },
            },
          },
        ),
        d = (0, c.memo)(function () {
          var e = (0, r.Z)((0, a.gU)("state"), 2),
            t = e[0],
            n = e[1],
            u = (0, c.useCallback)(
              function () {
                n(function (e) {
                  return (0, l.Z)((0, o.Z)({}, e), {
                    idPostSceneSelected: "",
                    visibleDialogPostScene: !1,
                  });
                });
              },
              [n],
            );
          return (0, i.jsx)(f, {
            onCancel: u,
            isUseDefaultStyle: !1,
            idPost: t.idPostSceneSelected,
            visible: t.visibleDialogPostScene,
          });
        });
      t.default = d;
    },
    62845: function (e, t, n) {
      n.d(t, {
        r8: function () {
          return a;
        },
      });
      var o = n(67294);
      function l() {
        return (l =
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
      let r = Symbol(),
        i = (e, t) => {
          let n = Object.keys(t),
            i = t,
            a = null,
            u = {};
          n.forEach((e) => {
            u[e] = new Set();
          });
          let s = (t, n) => (n.type === r ? (n.r ? n.r(t) : n.e) : e(t, n)),
            c = (e, t) => {
              let n = (n) => {
                var o;
                return l({}, n, {
                  [e]: ((o = n[e]), "function" == typeof t ? t(o) : t),
                });
              };
              if (a) a({ type: r, r: n });
              else {
                i = n(i);
                let t = i[e];
                u[e].forEach((e) => e(t));
              }
            },
            f = (e, t) => {
              n.forEach((n) => {
                let o = t[n];
                e[n] !== o && u[n].forEach((e) => e(o));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, t] = (0, o.useReducer)(s, i);
              (0, o.useEffect)(() => {
                if (a) throw Error("Only one global state provider is allowed");
                return (
                  (a = t),
                  t({ type: r, e: i }),
                  () => {
                    a = null;
                  }
                );
              }, []);
              let n = (0, o.useRef)(e);
              f(n.current, e),
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
                    u[e].add(n),
                    n(i[e]),
                    () => {
                      u[e].delete(n);
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
              if (a) a({ type: r, e: e });
              else {
                let t = i;
                f(t, (i = e));
              }
            },
            dispatch: (t) => {
              if (a) a(t);
              else {
                let n = i;
                f(n, (i = e(i, t)));
              }
              return t;
            },
          };
        },
        a = (e) => i((e, t) => e, e),
        u = (e, t = e(void 0, { type: void 0 }), n) =>
          n ? n(u)(e, t) : i(e, t);
    },
  },
]);
//# sourceMappingURL=3162.f786793f75e28562.js.map
