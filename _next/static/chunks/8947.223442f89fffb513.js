"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8947],
  {
    5239: function (t, e, o) {
      o.d(e, {
        EB: function () {
          return r;
        },
        FN: function () {
          return i;
        },
        Oj: function () {
          return a;
        },
        gU: function () {
          return s;
        },
        tf: function () {
          return l;
        },
        yG: function () {
          return c;
        },
      });
      var n = o(62845),
        a = (0, n.r8)({ vlookat: void 0 }).useGlobalState,
        r = (0, n.r8)({ hlookat: void 0 }).useGlobalState,
        i = (0, n.r8)({ zoom: void 0 }).useGlobalState,
        c = (0, n.r8)({
          loading: !1,
          krpanoRef: void 0,
          commentSceneSelected: null,
          isShowDialogCreateCommentScene: !1,
          commentSceneTemporary: null,
        }).useGlobalState,
        l = (0, n.r8)({
          stats: { isShowControlbar: !0, btnDirectionActive: "" },
        }).useGlobalState,
        s = (0, n.r8)({
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
    48947: function (t, e, o) {
      o.r(e);
      var n = o(828),
        a = o(85893),
        r = o(5239),
        i = o(79505),
        c = (0, o(67294).memo)(function (t) {
          var e = t.krpanoRef,
            o = (0, n.Z)((0, r.tf)("stats"), 1)[0],
            c = (0, i.Q)({ krpanoRef: e }),
            l = c.onUp,
            s = c.onDown,
            u = c.onLeft,
            p = c.onRight,
            f = c.onStopVertical,
            b = c.onStopHorizontal;
          return (0, a.jsx)("div", {
            className: "actDirection",
            children: (0, a.jsxs)("div", {
              className: "actDirectionWrapper",
              children: [
                (0, a.jsx)("button", {
                  type: "button",
                  className: "act__item actTop ".concat(
                    "top" === o.btnDirectionActive ? "active" : "",
                  ),
                  onMouseDown: l,
                  onMouseUp: f,
                  children: (0, a.jsx)("span", {}),
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  className: "act__item actRight ".concat(
                    "right" === o.btnDirectionActive ? "active" : "",
                  ),
                  onMouseDown: p,
                  onMouseUp: b,
                  children: (0, a.jsx)("span", {}),
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  className: "act__item actBottom ".concat(
                    "bottom" === o.btnDirectionActive ? "active" : "",
                  ),
                  onMouseDown: s,
                  onMouseUp: f,
                  children: (0, a.jsx)("span", {}),
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  className: "act__item actLeft ".concat(
                    "left" === o.btnDirectionActive ? "active" : "",
                  ),
                  onMouseDown: u,
                  onMouseUp: b,
                  children: (0, a.jsx)("span", {}),
                }),
              ],
            }),
          });
        });
      e.default = c;
    },
    62845: function (t, e, o) {
      o.d(e, {
        r8: function () {
          return c;
        },
      });
      var n = o(67294);
      function a() {
        return (a =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var o = arguments[e];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      let r = Symbol(),
        i = (t, e) => {
          let o = Object.keys(e),
            i = e,
            c = null,
            l = {};
          o.forEach((t) => {
            l[t] = new Set();
          });
          let s = (e, o) => (o.type === r ? (o.r ? o.r(e) : o.e) : t(e, o)),
            u = (t, e) => {
              let o = (o) => {
                var n;
                return a({}, o, {
                  [t]: ((n = o[t]), "function" == typeof e ? e(n) : e),
                });
              };
              if (c) c({ type: r, r: o });
              else {
                i = o(i);
                let e = i[t];
                l[t].forEach((t) => t(e));
              }
            },
            p = (t, e) => {
              o.forEach((o) => {
                let n = e[o];
                t[o] !== n && l[o].forEach((t) => t(n));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [t, e] = (0, n.useReducer)(s, i);
              (0, n.useEffect)(() => {
                if (c) throw Error("Only one global state provider is allowed");
                return (
                  (c = e),
                  e({ type: r, e: i }),
                  () => {
                    c = null;
                  }
                );
              }, []);
              let o = (0, n.useRef)(t);
              p(o.current, t),
                (o.current = t),
                (0, n.useEffect)(() => {
                  i = t;
                }, [t]);
            },
            useGlobalState: (t) => {
              let [e, o] = (0, n.useState)(i[t]);
              return (
                (0, n.useEffect)(
                  () => (
                    l[t].add(o),
                    o(i[t]),
                    () => {
                      l[t].delete(o);
                    }
                  ),
                  [t],
                ),
                [e, (0, n.useCallback)((e) => u(t, e), [t])]
              );
            },
            getGlobalState: (t) => i[t],
            setGlobalState: u,
            getState: () => i,
            setState: (t) => {
              if (c) c({ type: r, e: t });
              else {
                let e = i;
                p(e, (i = t));
              }
            },
            dispatch: (e) => {
              if (c) c(e);
              else {
                let o = i;
                p(o, (i = t(i, e)));
              }
              return e;
            },
          };
        },
        c = (t) => i((t, e) => t, t),
        l = (t, e = t(void 0, { type: void 0 }), o) =>
          o ? o(l)(t, e) : i(t, e);
    },
  },
]);
//# sourceMappingURL=8947.223442f89fffb513.js.map
