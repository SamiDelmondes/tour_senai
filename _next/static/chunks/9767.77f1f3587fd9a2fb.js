"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9767],
  {
    39767: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var o = t(85893),
        u = t(828),
        a = t(29750),
        r = t(67294),
        i = t(25617),
        c = t(7400),
        s = t(79505),
        l = function (e) {
          var n = e.krpanoRef,
            t = (0, s.Q)({ krpanoRef: n }),
            o = t.onUp,
            l = t.onDown,
            f = t.onLeft,
            v = t.onRight,
            d = t.onStopHorizontal,
            C = t.onStopVertical,
            g = (0, i.v9)(c.dm),
            h = (0, i.v9)(c.iV),
            m = (0, u.Z)((0, r.useState)(!1), 2),
            k = m[0],
            S = m[1],
            E = (0, u.Z)((0, r.useState)(void 0), 2),
            b = E[0],
            y = E[1],
            p = (0, r.useMemo)(
              function () {
                return h.enabled;
              },
              [h.enabled],
            ),
            A = (0, r.useMemo)(
              function () {
                return h.on;
              },
              [h.on],
            ),
            R = (0, r.useMemo)(
              function () {
                return h.waitTime;
              },
              [h],
            ),
            w = (0, r.useMemo)(
              function () {
                return g.enabled;
              },
              [g],
            ),
            L = (0, r.useMemo)(
              function () {
                return g.on;
              },
              [g],
            ),
            M = (0, r.useCallback)(
              function () {
                S(!0), y(+R + +a.$y);
              },
              [R],
            ),
            T = (0, r.useCallback)(
              function () {
                var e;
                null == n || n.getContainer().addEventListener("mousedown", M),
                  null === (e = null == n ? void 0 : n.getContainer()) ||
                    void 0 === e ||
                    e.addEventListener("touchstart", M);
              },
              [n, M],
            ),
            P = (0, r.useCallback)(
              function () {
                var e, t;
                null === (e = null == n ? void 0 : n.getContainer()) ||
                  void 0 === e ||
                  e.removeEventListener("mousedown", M),
                  null === (t = null == n ? void 0 : n.getContainer()) ||
                    void 0 === t ||
                    t.removeEventListener("touchstart", M);
              },
              [n, M],
            ),
            B = (0, r.useCallback)(
              function (e) {
                switch (e.keyCode) {
                  case 37:
                  case 39:
                    d();
                    break;
                  case 38:
                  case 40:
                    C();
                }
              },
              [d, C],
            ),
            I = (0, r.useCallback)(
              function (e) {
                switch (e.keyCode) {
                  case 37:
                    f();
                    break;
                  case 38:
                    o();
                    break;
                  case 39:
                    v();
                    break;
                  case 40:
                    l();
                }
              },
              [l, f, v, o],
            ),
            K = (0, r.useCallback)(
              function () {
                var e, t;
                null === (e = null == n ? void 0 : n.getContainer()) ||
                  void 0 === e ||
                  e.addEventListener("keyup", B),
                  null === (t = null == n ? void 0 : n.getContainer()) ||
                    void 0 === t ||
                    t.addEventListener("keydown", I);
              },
              [n, I, B],
            ),
            _ = (0, r.useCallback)(
              function () {
                var e, t;
                null === (e = null == n ? void 0 : n.getContainer()) ||
                  void 0 === e ||
                  e.removeEventListener("keyup", B),
                  null === (t = null == n ? void 0 : n.getContainer()) ||
                    void 0 === t ||
                    t.removeEventListener("keydown", I);
              },
              [n, I, B],
            );
          return (0, r.useMemo)(
            function () {
              return {
                isAutoChangeScene: A,
                timeChangeScene: R,
                enableAutoChangeScene: p,
                isTurnOnAutoRotate: L,
                enabledAutoRotate: w,
                timePauseChangeScene: b,
                setTimePauseChangeScene: y,
                isTemporaryPauseAutoChangeScene: k,
                setIsTemporaryPauseAutoChangeScene: S,
                onEventMoveByKeyCode: K,
                offEventMoveByKeyCode: _,
                onEventAutoChangeScene: T,
                offEventAutoChangeScene: P,
              };
            },
            [A, R, p, L, w, b, k, K, _, T, P],
          );
        },
        f = (0, r.memo)(function (e) {
          var n = e.isLoaded,
            t = e.onStartRotate,
            u = e.onNextScene,
            a = e.krpanoRef,
            i = (0, r.useRef)(null),
            c = l({ krpanoRef: a }),
            s = c.timeChangeScene,
            f = c.isAutoChangeScene,
            v = c.enableAutoChangeScene,
            d = c.isTurnOnAutoRotate,
            C = c.enabledAutoRotate,
            g = c.timePauseChangeScene,
            h = c.setTimePauseChangeScene,
            m = c.isTemporaryPauseAutoChangeScene,
            k = c.setIsTemporaryPauseAutoChangeScene,
            S = c.onEventAutoChangeScene,
            E = c.offEventAutoChangeScene,
            b = c.onEventMoveByKeyCode,
            y = c.offEventMoveByKeyCode;
          return (
            (0, r.useEffect)(
              function () {
                h(s);
              },
              [s],
            ),
            (0, r.useEffect)(
              function () {
                C && d && n && t();
              },
              [C, n, t],
            ),
            (0, r.useEffect)(
              function () {
                return (
                  f &&
                    s &&
                    n &&
                    ((i.current = setInterval(
                      function () {
                        u(), h(s);
                      },
                      1e3 * (g || s),
                    )),
                    m && k(!1)),
                  function () {
                    i.current && clearInterval(i.current);
                  }
                );
              },
              [n, f, m],
            ),
            (0, r.useEffect)(
              function () {
                return (
                  v && f && S(),
                  function () {
                    f || E();
                  }
                );
              },
              [f, v],
            ),
            (0, r.useEffect)(function () {
              return (
                b(),
                function () {
                  y();
                }
              );
            }, []),
            (0, o.jsx)("div", {})
          );
        });
    },
  },
]);
//# sourceMappingURL=9767.77f1f3587fd9a2fb.js.map
