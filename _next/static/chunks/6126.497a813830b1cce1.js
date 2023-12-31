"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6126],
  {
    26126: function (n, t, e) {
      e.d(t, {
        Uv: function () {
          return nf;
        },
        d$: function () {
          return nm;
        },
      });
      var i = e(67294),
        o = function (n, t) {
          return Number(n.toFixed(t));
        },
        a = function (n, t, e) {
          e && "function" == typeof e && e(n, t);
        },
        r = {
          easeOut: function (n) {
            return -Math.cos(n * Math.PI) / 2 + 0.5;
          },
          linear: function (n) {
            return n;
          },
          easeInQuad: function (n) {
            return n * n;
          },
          easeOutQuad: function (n) {
            return n * (2 - n);
          },
          easeInOutQuad: function (n) {
            return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
          },
          easeInCubic: function (n) {
            return n * n * n;
          },
          easeOutCubic: function (n) {
            return --n * n * n + 1;
          },
          easeInOutCubic: function (n) {
            return n < 0.5
              ? 4 * n * n * n
              : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
          },
          easeInQuart: function (n) {
            return n * n * n * n;
          },
          easeOutQuart: function (n) {
            return 1 - --n * n * n * n;
          },
          easeInOutQuart: function (n) {
            return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
          },
          easeInQuint: function (n) {
            return n * n * n * n * n;
          },
          easeOutQuint: function (n) {
            return 1 + --n * n * n * n * n;
          },
          easeInOutQuint: function (n) {
            return n < 0.5
              ? 16 * n * n * n * n * n
              : 1 + 16 * --n * n * n * n * n;
          },
        },
        s = function (n) {
          "number" == typeof n && cancelAnimationFrame(n);
        },
        u = function (n) {
          n.mounted &&
            (s(n.animation),
            (n.animate = !1),
            (n.animation = null),
            (n.velocity = null));
        };
      function l(n, t, e, i) {
        if (n.mounted) {
          var o = new Date().getTime();
          u(n),
            (n.animation = function () {
              if (!n.mounted) return s(n.animation);
              var a = new Date().getTime() - o,
                u = (0, r[t])(a / e);
              a >= e
                ? (i(1), (n.animation = null))
                : n.animation && (i(u), requestAnimationFrame(n.animation));
            }),
            requestAnimationFrame(n.animation);
        }
      }
      function c(n, t, e, i) {
        var o,
          a,
          r,
          s =
            ((o = t.scale),
            (a = t.positionX),
            (r = t.positionY),
            !(Number.isNaN(o) || Number.isNaN(a) || Number.isNaN(r)));
        if (n.mounted && s) {
          var u = n.setTransformState,
            c = n.transformState,
            p = c.scale,
            m = c.positionX,
            d = c.positionY,
            f = t.scale - p,
            v = t.positionX - m,
            h = t.positionY - d;
          0 === e
            ? u(t.scale, t.positionX, t.positionY)
            : l(n, i, e, function (n) {
                u(p + f * n, m + v * n, d + h * n);
              });
        }
      }
      var p = function (n, t, e, i, o, a, r) {
          var s = n > t ? e * (r ? 1 : 0.5) : 0,
            u = i > o ? a * (r ? 1 : 0.5) : 0;
          return {
            minPositionX: n - t - s,
            maxPositionX: s,
            minPositionY: i - o - u,
            maxPositionY: u,
          };
        },
        m = function (n, t) {
          var e,
            i,
            o,
            a,
            r,
            s,
            u = n.wrapperComponent,
            l = n.contentComponent,
            c = n.setup.centerZoomedOut;
          if (!u || !l) throw Error("Components are not mounted");
          var m =
              ((e = u.offsetWidth),
              (i = u.offsetHeight),
              (o = l.offsetWidth),
              (a = l.offsetHeight),
              {
                wrapperWidth: e,
                wrapperHeight: i,
                newContentWidth: (r = o * t),
                newDiffWidth: e - r,
                newContentHeight: (s = a * t),
                newDiffHeight: i - s,
              }),
            d = m.wrapperWidth,
            f = m.wrapperHeight;
          return p(
            d,
            m.newContentWidth,
            m.newDiffWidth,
            f,
            m.newContentHeight,
            m.newDiffHeight,
            Boolean(c),
          );
        },
        d = function (n, t, e, i) {
          return i ? (n < t ? o(t, 2) : n > e ? o(e, 2) : o(n, 2)) : o(n, 2);
        },
        f = function (n, t) {
          var e = m(n, t);
          return (n.bounds = e), e;
        };
      function v(n, t, e, i, o, a, r) {
        var s = e.minPositionX,
          u = e.minPositionY,
          l = e.maxPositionX,
          c = e.maxPositionY,
          p = 0,
          m = 0;
        return (
          r && ((p = o), (m = a)),
          { x: d(n, s - p, l + p, i), y: d(t, u - m, c + m, i) }
        );
      }
      function h(n, t, e, i, o, a) {
        var r = n.transformState,
          s = r.scale,
          u = r.positionX,
          l = r.positionY,
          c = i - s;
        return "number" != typeof t || "number" != typeof e
          ? (console.error("Mouse X and Y position were not provided!"),
            { x: u, y: l })
          : v(u - t * c, l - e * c, o, a, 0, 0, null);
      }
      function g(n, t, e, i, o) {
        var a = t - (o ? i : 0);
        return !Number.isNaN(e) && n >= e
          ? e
          : !Number.isNaN(t) && n <= a
            ? a
            : n;
      }
      var S = function (n, t) {
          var e = n.setup.panning.excluded,
            i = n.isInitialized,
            o = n.wrapperComponent,
            a = t.target,
            r = null == o ? void 0 : o.contains(a);
          return !(!(i && a && r) || Z(a, e));
        },
        y = function (n) {
          var t = n.isInitialized,
            e = n.isPanning,
            i = n.setup.panning.disabled;
          return !!t && !!e && !i;
        },
        w = function (n, t) {
          var e = n.transformState,
            i = e.positionX,
            o = e.positionY;
          n.isPanning = !0;
          var a = t.clientX,
            r = t.clientY;
          n.startCoords = { x: a - i, y: r - o };
        },
        b = function (n, t) {
          var e = t.touches,
            i = n.transformState,
            o = i.positionX,
            a = i.positionY;
          if (((n.isPanning = !0), 1 === e.length)) {
            var r = e[0].clientX,
              s = e[0].clientY;
            n.startCoords = { x: r - o, y: s - a };
          }
        },
        C = function (n, t, e) {
          var i = n.startCoords,
            o = n.transformState,
            a = n.setup.panning,
            r = a.lockAxisX,
            s = a.lockAxisY,
            u = o.positionX,
            l = o.positionY;
          if (!i) return { x: u, y: l };
          var c = t - i.x,
            p = e - i.y;
          return { x: r ? u : c, y: s ? l : p };
        },
        P = function (n, t) {
          var e = n.setup,
            i = n.transformState.scale,
            o = e.minScale,
            a = e.disablePadding;
          return t > 0 && i >= o && !a ? t : 0;
        },
        T = function (n) {
          var t = n.mounted,
            e = n.setup,
            i = e.disabled,
            o = e.velocityAnimation,
            a = n.transformState.scale;
          return !o.disabled || a > 1 || !i || !!t;
        },
        x = function (n) {
          var t = n.mounted,
            e = n.velocity,
            i = n.bounds,
            o = n.setup,
            a = o.disabled,
            r = o.velocityAnimation,
            s = n.transformState.scale;
          return (!r.disabled || s > 1 || !a || !!t) && !!e && !!i;
        };
      function Y(n, t, e, i, o, a, r, s, u, l) {
        if (o) {
          if (t > r && e > r) {
            var c = r + (n - r) * l;
            return c > u ? u : c < r ? r : c;
          }
          if (t < a && e < a) {
            var c = a + (n - a) * l;
            return c < s ? s : c > a ? a : c;
          }
        }
        return i ? t : d(n, a, r, o);
      }
      function E(n, t) {
        var e = n.transformState.scale;
        u(n),
          f(n, e),
          void 0 !== window.TouchEvent && t instanceof TouchEvent
            ? b(n, t)
            : w(n, t);
      }
      function X(n) {
        var t = n.transformState.scale,
          e = n.setup,
          i = e.minScale,
          o = e.alignmentAnimation,
          a = o.disabled,
          r = o.sizeX,
          s = o.sizeY,
          u = o.animationTime,
          l = o.animationType;
        if (!(a || t < i || (!r && !s))) {
          var p = (function (n) {
            var t = n.transformState,
              e = t.positionX,
              i = t.positionY,
              o = t.scale,
              a = n.setup,
              r = a.disabled,
              s = a.limitToBounds,
              u = a.centerZoomedOut,
              l = n.wrapperComponent;
            if (!r && l && n.bounds) {
              var c = n.bounds,
                p = c.maxPositionX,
                m = c.minPositionX,
                d = c.maxPositionY,
                f = c.minPositionY,
                v = e > p ? l.offsetWidth : n.setup.minPositionX || 0,
                g = i > d ? l.offsetHeight : n.setup.minPositionY || 0,
                S = h(n, v, g, o, n.bounds, s || u),
                y = S.x,
                w = S.y;
              return {
                scale: o,
                positionX: e > p || e < m ? y : e,
                positionY: i > d || i < f ? w : i,
              };
            }
          })(n);
          p && c(n, p, u, l);
        }
      }
      function N(n, t, e) {
        var i = n.startCoords,
          o = n.setup.alignmentAnimation,
          a = o.sizeX,
          r = o.sizeY;
        if (i) {
          var s = C(n, t, e),
            u = s.x,
            l = s.y,
            c = P(n, a),
            p = P(n, r);
          !(function (n, t) {
            if (T(n)) {
              var e = n.lastMousePosition,
                i = n.velocityTime,
                o = n.setup,
                a = n.wrapperComponent,
                r = o.velocityAnimation.equalToMove,
                s = Date.now();
              if (e && i && a) {
                var u = r ? Math.min(1, a.offsetWidth / window.innerWidth) : 1,
                  l = t.x - e.x,
                  c = t.y - e.y;
                n.velocity = {
                  velocityX: l / u,
                  velocityY: c / u,
                  total: Math.sqrt(l * l + c * c) / (s - i),
                };
              }
              (n.lastMousePosition = t), (n.velocityTime = s);
            }
          })(n, { x: u, y: l }),
            (function (n, t, e, i, o) {
              var a = n.setup.limitToBounds,
                r = n.wrapperComponent,
                s = n.bounds,
                u = n.transformState,
                l = u.scale,
                c = u.positionX,
                p = u.positionY;
              if (null !== r && null !== s && (t !== c || e !== p)) {
                var m = v(t, e, s, a, i, o, r),
                  d = m.x,
                  f = m.y;
                n.setTransformState(l, d, f);
              }
            })(n, u, l, c, p);
        }
      }
      function z(n, t, e, i) {
        var a = n.setup,
          r = a.minScale,
          s = a.maxScale,
          u = a.limitToBounds,
          l = g(o(t, 2), r, s, 0, !1),
          c = f(n, l),
          p = h(n, e, i, l, c, u),
          m = p.x,
          d = p.y;
        return { scale: l, positionX: m, positionY: d };
      }
      function D(n, t, e) {
        var i = n.transformState.scale,
          o = n.wrapperComponent,
          a = n.setup,
          r = a.minScale,
          s = a.limitToBounds,
          u = a.zoomAnimation,
          l = u.disabled,
          p = u.animationTime,
          m = u.animationType;
        if (((i >= 1 || s) && X(n), !(l || i >= r) && o && n.mounted)) {
          var d = z(n, r, t || o.offsetWidth / 2, e || o.offsetHeight / 2);
          d && c(n, d, p, m);
        }
      }
      var k = function () {
        return (k =
          Object.assign ||
          function (n) {
            for (var t, e = 1, i = arguments.length; e < i; e++)
              for (var o in (t = arguments[e]))
                Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
            return n;
          }).apply(this, arguments);
      };
      function A(n, t, e) {
        if (e || 2 == arguments.length)
          for (var i, o = 0, a = t.length; o < a; o++)
            (!i && o in t) ||
              (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
        return n.concat(i || Array.prototype.slice.call(t));
      }
      var O = { previousScale: 1, scale: 1, positionX: 0, positionY: 0 },
        W = {
          disabled: !1,
          minPositionX: null,
          maxPositionX: null,
          minPositionY: null,
          maxPositionY: null,
          minScale: 1,
          maxScale: 8,
          limitToBounds: !0,
          centerZoomedOut: !1,
          centerOnInit: !1,
          disablePadding: !1,
          wheel: {
            step: 0.2,
            disabled: !1,
            wheelDisabled: !1,
            touchPadDisabled: !1,
            activationKeys: [],
            excluded: [],
          },
          panning: {
            disabled: !1,
            velocityDisabled: !1,
            lockAxisX: !1,
            lockAxisY: !1,
            activationKeys: [],
            excluded: [],
          },
          pinch: { step: 5, disabled: !1, excluded: [] },
          doubleClick: {
            disabled: !1,
            step: 0.7,
            mode: "zoomIn",
            animationType: "easeOut",
            animationTime: 200,
            excluded: [],
          },
          zoomAnimation: {
            disabled: !1,
            size: 0.4,
            animationTime: 200,
            animationType: "easeOut",
          },
          alignmentAnimation: {
            disabled: !1,
            sizeX: 100,
            sizeY: 100,
            animationTime: 200,
            velocityAlignmentTime: 400,
            animationType: "easeOut",
          },
          velocityAnimation: {
            disabled: !1,
            sensitivity: 1,
            animationTime: 400,
            animationType: "easeOut",
            equalToMove: !0,
          },
        },
        I = function (n) {
          var t, e, i, o;
          return {
            previousScale:
              null !== (t = n.initialScale) && void 0 !== t ? t : O.scale,
            scale: null !== (e = n.initialScale) && void 0 !== e ? e : O.scale,
            positionX:
              null !== (i = n.initialPositionX) && void 0 !== i
                ? i
                : O.positionX,
            positionY:
              null !== (o = n.initialPositionY) && void 0 !== o
                ? o
                : O.positionY,
          };
        },
        M = function (n) {
          var t = k({}, W);
          return (
            Object.keys(n).forEach(function (e) {
              var i = void 0 !== n[e];
              if (void 0 !== W[e] && i) {
                var o = Object.prototype.toString.call(W[e]);
                "[object Object]" === o
                  ? (t[e] = k(k({}, W[e]), n[e]))
                  : "[object Array]" === o
                    ? (t[e] = A(A([], W[e], !0), n[e], !0))
                    : (t[e] = n[e]);
              }
            }),
            t
          );
        },
        B = function (n, t, e) {
          var i = n.transformState.scale,
            a = n.wrapperComponent,
            r = n.setup,
            s = r.maxScale,
            u = r.minScale,
            l = r.zoomAnimation.size;
          if (!a) throw Error("Wrapper is not mounted");
          return g(o(i * Math.exp(t * e), 3), u, s, l, !1);
        };
      function K(n, t, e, i, o) {
        var a = n.wrapperComponent,
          r = n.transformState,
          s = r.scale,
          u = r.positionX,
          l = r.positionY;
        if (!a) return console.error("No WrapperComponent found");
        var p = a.offsetWidth,
          m = a.offsetHeight,
          d = B(n, t, e),
          f = z(n, d, (p / 2 - u) / s, (m / 2 - l) / s);
        if (!f)
          return console.error(
            "Error during zoom event. New transformation state was not calculated.",
          );
        c(n, f, i, o);
      }
      function L(n, t, e, i) {
        var o = n.setup,
          a = n.wrapperComponent,
          r = o.limitToBounds,
          s = I(n.props),
          u = n.transformState,
          l = u.scale,
          p = u.positionX,
          d = u.positionY;
        if (a) {
          var f = m(n, s.scale),
            h = v(s.positionX, s.positionY, f, r, 0, 0, a),
            g = { scale: s.scale, positionX: h.x, positionY: h.y };
          if (l === s.scale && p === s.positionX && d === s.positionY) return;
          null == i || i(), c(n, g, t, e);
        }
      }
      var H = function (n) {
        return {
          instance: n,
          state: n.transformState,
          zoomIn: function (t, e, i) {
            void 0 === t && (t = 0.5),
              void 0 === e && (e = 300),
              void 0 === i && (i = "easeOut"),
              K(n, 1, t, e, i);
          },
          zoomOut: function (t, e, i) {
            void 0 === t && (t = 0.5),
              void 0 === e && (e = 300),
              void 0 === i && (i = "easeOut"),
              K(n, -1, t, e, i);
          },
          setTransform: function (t, e, i, o, a) {
            void 0 === o && (o = 300), void 0 === a && (a = "easeOut");
            var r = n.transformState,
              s = r.positionX,
              u = r.positionY,
              l = r.scale,
              p = n.wrapperComponent,
              m = n.contentComponent;
            !n.setup.disabled &&
              p &&
              m &&
              c(
                n,
                {
                  positionX: Number.isNaN(t) ? s : t,
                  positionY: Number.isNaN(e) ? u : e,
                  scale: Number.isNaN(i) ? l : i,
                },
                o,
                a,
              );
          },
          resetTransform: function (t, e) {
            void 0 === t && (t = 200),
              void 0 === e && (e = "easeOut"),
              L(n, t, e);
          },
          centerView: function (t, e, i) {
            void 0 === e && (e = 200), void 0 === i && (i = "easeOut");
            var o = n.transformState,
              a = n.wrapperComponent,
              r = n.contentComponent;
            a && r && c(n, F(t || o.scale, a, r), e, i);
          },
          zoomToElement: function (t, e, i, o) {
            void 0 === i && (i = 600), void 0 === o && (o = "easeOut"), u(n);
            var a = n.wrapperComponent,
              r = "string" == typeof t ? document.getElementById(t) : t;
            if (a && r && a.contains(r)) {
              var s = (function (n, t, e) {
                var i,
                  o,
                  a,
                  r,
                  s,
                  u = n.wrapperComponent,
                  l = n.contentComponent,
                  c = n.transformState,
                  p = n.setup,
                  d = p.limitToBounds,
                  f = p.minScale,
                  h = p.maxScale;
                if (!u || !l) return c;
                var S = u.getBoundingClientRect(),
                  y = t.getBoundingClientRect(),
                  w =
                    ((i = t.getBoundingClientRect()),
                    (o = u.getBoundingClientRect()),
                    (a = l.getBoundingClientRect()),
                    (r = o.x * c.scale),
                    (s = o.y * c.scale),
                    {
                      x: (i.x - a.x + r) / c.scale,
                      y: (i.y - a.y + s) / c.scale,
                    }),
                  b = w.x,
                  C = w.y,
                  P = y.width / c.scale,
                  T = y.height / c.scale,
                  x = u.offsetWidth / P,
                  Y = u.offsetHeight / T,
                  E = g(e || Math.min(x, Y), f, h, 0, !1),
                  X = (S.width - P * E) / 2,
                  N = (S.height - T * E) / 2,
                  z = v(
                    (S.left - b) * E + X,
                    (S.top - C) * E + N,
                    m(n, E),
                    d,
                    0,
                    0,
                    u,
                  );
                return { positionX: z.x, positionY: z.y, scale: E };
              })(n, r, e);
              c(n, s, i, o);
            }
          },
        };
      };
      function _() {
        try {
          return {
            get passive() {
              return !1;
            },
          };
        } catch (n) {
          return !1;
        }
      }
      var Z = function (n, t) {
          var e = n.tagName.toUpperCase();
          return !!(
            t.find(function (n) {
              return n.toUpperCase() === e;
            }) ||
            t.find(function (t) {
              return n.classList.contains(t);
            })
          );
        },
        R = function (n) {
          n && clearTimeout(n);
        },
        F = function (n, t, e) {
          var i = e.offsetWidth * n,
            o = e.offsetHeight * n;
          return {
            scale: n,
            positionX: (t.offsetWidth - i) / 2,
            positionY: (t.offsetHeight - o) / 2,
          };
        },
        Q = function (n, t) {
          var e = n.setup.wheel,
            i = e.disabled,
            o = e.wheelDisabled,
            a = e.touchPadDisabled,
            r = e.excluded,
            s = n.isInitialized,
            u = n.isPanning,
            l = t.target;
          return !(
            !(s && !u && !i && l) ||
            (o && !t.ctrlKey) ||
            (a && t.ctrlKey) ||
            Z(l, r)
          );
        };
      function q(n, t, e) {
        var i = t.getBoundingClientRect(),
          o = 0,
          a = 0;
        if ("clientX" in n)
          (o = (n.clientX - i.left) / e), (a = (n.clientY - i.top) / e);
        else {
          var r = n.touches[0];
          (o = (r.clientX - i.left) / e), (a = (r.clientY - i.top) / e);
        }
        return (
          (Number.isNaN(o) || Number.isNaN(a)) &&
            console.error("No mouse or touch offset found"),
          { x: o, y: a }
        );
      }
      var j = function (n, t, e, i, a) {
          var r = n.transformState.scale,
            s = n.wrapperComponent,
            u = n.setup,
            l = u.maxScale,
            c = u.minScale,
            p = u.zoomAnimation,
            m = u.disablePadding,
            d = p.size,
            f = p.disabled;
          if (!s) throw Error("Wrapper is not mounted");
          var v = r + t * (r - r * e) * e;
          return a ? v : g(o(v, 3), c, l, d, !i && !f && !m);
        },
        U = function (n, t) {
          var e = n.previousWheelEvent,
            i = n.transformState.scale,
            o = n.setup,
            a = o.maxScale,
            r = o.minScale;
          return (
            !!e &&
            (i < a ||
              i > r ||
              Math.sign(e.deltaY) !== Math.sign(t.deltaY) ||
              (e.deltaY > 0 && e.deltaY < t.deltaY) ||
              (e.deltaY < 0 && e.deltaY > t.deltaY) ||
              Math.sign(e.deltaY) !== Math.sign(t.deltaY))
          );
        },
        V = function (n, t) {
          var e = n.setup.pinch,
            i = e.disabled,
            o = e.excluded,
            a = n.isInitialized,
            r = t.target;
          return !(!(a && !i && r) || Z(r, o));
        },
        J = function (n) {
          var t = n.setup.pinch.disabled,
            e = n.isInitialized,
            i = n.pinchStartDistance;
          return !!e && !t && !!i;
        },
        $ = function (n, t, e) {
          var i = e.getBoundingClientRect(),
            a = n.touches,
            r = o(a[0].clientX - i.left, 5),
            s = o(a[0].clientY - i.top, 5);
          return {
            x: (r + o(a[1].clientX - i.left, 5)) / 2 / t,
            y: (s + o(a[1].clientY - i.top, 5)) / 2 / t,
          };
        },
        G = function (n) {
          return Math.sqrt(
            Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) +
              Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2),
          );
        },
        nn = function (n, t) {
          var e = n.pinchStartScale,
            i = n.pinchStartDistance,
            a = n.setup,
            r = a.maxScale,
            s = a.minScale,
            u = a.zoomAnimation,
            l = a.disablePadding,
            c = u.size,
            p = u.disabled;
          if (!e || null === i || !t)
            throw Error("Pinch touches distance was not provided");
          return t < 0
            ? n.transformState.scale
            : g(o((t / i) * e, 2), s, r, c, !p && !l);
        },
        nt = function (n, t) {
          var e = n.props,
            i = e.onWheelStart,
            o = e.onZoomStart;
          n.wheelStopEventTimer || (u(n), a(H(n), t, i), a(H(n), t, o));
        },
        ne = function (n, t) {
          var e,
            i = n.props,
            o = i.onWheel,
            r = i.onZoom,
            s = n.contentComponent,
            u = n.setup,
            l = n.transformState.scale,
            c = u.limitToBounds,
            p = u.centerZoomedOut,
            m = u.zoomAnimation,
            d = u.wheel,
            v = u.disablePadding,
            g = m.size,
            S = m.disabled,
            y = d.step;
          if (!s) throw Error("Component not mounted");
          t.preventDefault(), t.stopPropagation();
          var w = j(n, (e = t ? (t.deltaY < 0 ? 1 : -1) : 0), y, !t.ctrlKey);
          if (l !== w) {
            var b = f(n, w),
              C = q(t, s, l),
              P = h(n, C.x, C.y, w, b, c && (S || 0 === g || p || v)),
              T = P.x,
              x = P.y;
            (n.previousWheelEvent = t),
              n.setTransformState(w, T, x),
              a(H(n), t, o),
              a(H(n), t, r);
          }
        },
        ni = function (n, t) {
          var e = n.props,
            i = e.onWheelStop,
            o = e.onZoomStop;
          R(n.wheelAnimationTimer),
            (n.wheelAnimationTimer = setTimeout(function () {
              n.mounted && (D(n, t.x, t.y), (n.wheelAnimationTimer = null));
            }, 100)),
            U(n, t) &&
              (R(n.wheelStopEventTimer),
              (n.wheelStopEventTimer = setTimeout(function () {
                n.mounted &&
                  ((n.wheelStopEventTimer = null),
                  a(H(n), t, i),
                  a(H(n), t, o));
              }, 160)));
        },
        no = function (n, t) {
          var e = G(t);
          (n.pinchStartDistance = e),
            (n.lastDistance = e),
            (n.pinchStartScale = n.transformState.scale),
            (n.isPanning = !1),
            u(n);
        },
        na = function (n, t) {
          var e = n.contentComponent,
            i = n.pinchStartDistance,
            o = n.transformState.scale,
            a = n.setup,
            r = a.limitToBounds,
            s = a.centerZoomedOut,
            u = a.zoomAnimation,
            l = u.disabled,
            c = u.size;
          if (null !== i && e) {
            var p = $(t, o, e);
            if (Number.isFinite(p.x) && Number.isFinite(p.y)) {
              var m = G(t),
                d = nn(n, m);
              if (d !== o) {
                var v = f(n, d),
                  g = h(n, p.x, p.y, d, v, r && (l || 0 === c || s)),
                  S = g.x,
                  y = g.y;
                (n.pinchMidpoint = p),
                  (n.lastDistance = m),
                  n.setTransformState(d, S, y);
              }
            }
          }
        },
        nr = function (n) {
          var t = n.pinchMidpoint;
          (n.velocity = null),
            (n.lastDistance = null),
            (n.pinchMidpoint = null),
            (n.pinchStartScale = null),
            (n.pinchStartDistance = null),
            D(n, null == t ? void 0 : t.x, null == t ? void 0 : t.y);
        },
        ns = function (n, t) {
          var e = n.props.onZoomStop,
            i = n.setup.doubleClick.animationTime;
          R(n.doubleClickStopEventTimer),
            (n.doubleClickStopEventTimer = setTimeout(function () {
              (n.doubleClickStopEventTimer = null), a(H(n), t, e);
            }, i));
        },
        nu = function (n, t) {
          var e = n.props,
            i = e.onZoomStart,
            o = e.onZoom,
            r = n.setup.doubleClick,
            s = r.animationTime,
            u = r.animationType;
          a(H(n), t, i),
            L(n, s, u, function () {
              return a(H(n), t, o);
            }),
            ns(n, t);
        },
        nl = function (n, t) {
          var e = n.isInitialized,
            i = n.setup,
            o = n.wrapperComponent,
            a = i.doubleClick,
            r = a.disabled,
            s = a.excluded,
            u = t.target,
            l = null == o ? void 0 : o.contains(u);
          return !(!(e && u && l && !r) || Z(u, s));
        },
        nc = function (n) {
          var t = this;
          (this.mounted = !0),
            (this.onChangeCallbacks = new Set()),
            (this.wrapperComponent = null),
            (this.contentComponent = null),
            (this.isInitialized = !1),
            (this.bounds = null),
            (this.previousWheelEvent = null),
            (this.wheelStopEventTimer = null),
            (this.wheelAnimationTimer = null),
            (this.isPanning = !1),
            (this.startCoords = null),
            (this.lastTouch = null),
            (this.distance = null),
            (this.lastDistance = null),
            (this.pinchStartDistance = null),
            (this.pinchStartScale = null),
            (this.pinchMidpoint = null),
            (this.doubleClickStopEventTimer = null),
            (this.velocity = null),
            (this.velocityTime = null),
            (this.lastMousePosition = null),
            (this.animate = !1),
            (this.animation = null),
            (this.maxBounds = null),
            (this.pressedKeys = {}),
            (this.mount = function () {
              t.initializeWindowEvents();
            }),
            (this.unmount = function () {
              t.cleanupWindowEvents();
            }),
            (this.update = function (n) {
              f(t, t.transformState.scale), (t.setup = M(n));
            }),
            (this.initializeWindowEvents = function () {
              var n,
                e = _(),
                i =
                  null === (n = t.wrapperComponent) || void 0 === n
                    ? void 0
                    : n.ownerDocument,
                o = null == i ? void 0 : i.defaultView;
              null == o || o.addEventListener("mousedown", t.onPanningStart, e),
                null == o || o.addEventListener("mousemove", t.onPanning, e),
                null == o || o.addEventListener("mouseup", t.onPanningStop, e),
                null == i ||
                  i.addEventListener("mouseleave", t.clearPanning, e),
                null == o || o.addEventListener("keyup", t.setKeyUnPressed, e),
                null == o || o.addEventListener("keydown", t.setKeyPressed, e);
            }),
            (this.cleanupWindowEvents = function () {
              var n,
                e,
                i = _(),
                o =
                  null === (n = t.wrapperComponent) || void 0 === n
                    ? void 0
                    : n.ownerDocument,
                a = null == o ? void 0 : o.defaultView;
              null == a ||
                a.removeEventListener("mousedown", t.onPanningStart, i),
                null == a || a.removeEventListener("mousemove", t.onPanning, i),
                null == a ||
                  a.removeEventListener("mouseup", t.onPanningStop, i),
                null == o ||
                  o.removeEventListener("mouseleave", t.clearPanning, i),
                null == a ||
                  a.removeEventListener("keyup", t.setKeyUnPressed, i),
                null == a ||
                  a.removeEventListener("keydown", t.setKeyPressed, i),
                document.removeEventListener("mouseleave", t.clearPanning, i),
                u(t),
                null === (e = t.observer) || void 0 === e || e.disconnect();
            }),
            (this.handleInitializeWrapperEvents = function (n) {
              var e = _();
              n.addEventListener("wheel", t.onWheelZoom, e),
                n.addEventListener("dblclick", t.onDoubleClick, e),
                n.addEventListener("touchstart", t.onTouchPanningStart, e),
                n.addEventListener("touchmove", t.onTouchPanning, e),
                n.addEventListener("touchend", t.onTouchPanningStop, e);
            }),
            (this.handleInitialize = function (n) {
              var e = t.setup.centerOnInit;
              t.applyTransformation(),
                e &&
                  (t.setCenter(),
                  (t.observer = new ResizeObserver(function () {
                    var n;
                    t.setCenter(),
                      null === (n = t.observer) ||
                        void 0 === n ||
                        n.disconnect();
                  })),
                  t.observer.observe(n));
            }),
            (this.onWheelZoom = function (n) {
              !t.setup.disabled &&
                Q(t, n) &&
                t.isPressingKeys(t.setup.wheel.activationKeys) &&
                (nt(t, n), ne(t, n), ni(t, n));
            }),
            (this.onPanningStart = function (n) {
              var e = t.setup.disabled,
                i = t.props.onPanningStart;
              !e &&
                S(t, n) &&
                t.isPressingKeys(t.setup.panning.activationKeys) &&
                (n.preventDefault(),
                n.stopPropagation(),
                u(t),
                E(t, n),
                a(H(t), n, i));
            }),
            (this.onPanning = function (n) {
              var e = t.setup.disabled,
                i = t.props.onPanning;
              !e &&
                y(t) &&
                t.isPressingKeys(t.setup.panning.activationKeys) &&
                (n.preventDefault(),
                n.stopPropagation(),
                N(t, n.clientX, n.clientY),
                a(H(t), n, i));
            }),
            (this.onPanningStop = function (n) {
              var e = t.props.onPanningStop;
              t.isPanning &&
                ((function (n) {
                  if (n.isPanning) {
                    var t = n.setup.panning.velocityDisabled,
                      e = n.velocity,
                      i = n.wrapperComponent,
                      o = n.contentComponent;
                    (n.isPanning = !1), (n.animate = !1), (n.animation = null);
                    var a = null == i ? void 0 : i.getBoundingClientRect(),
                      s = null == o ? void 0 : o.getBoundingClientRect(),
                      u = (null == a ? void 0 : a.width) || 0,
                      c = (null == a ? void 0 : a.height) || 0,
                      p = (null == s ? void 0 : s.width) || 0,
                      m = (null == s ? void 0 : s.height) || 0;
                    !t &&
                    e &&
                    (null == e ? void 0 : e.total) > 0.1 &&
                    (u < p || c < m)
                      ? (function (n) {
                          var t,
                            e,
                            i,
                            o,
                            a = n.velocity,
                            s = n.bounds,
                            u = n.setup,
                            c = n.wrapperComponent;
                          if (x(n) && a && s && c) {
                            var p = a.velocityX,
                              m = a.velocityY,
                              d = a.total,
                              f = s.maxPositionX,
                              v = s.minPositionX,
                              h = s.maxPositionY,
                              g = s.minPositionY,
                              S = u.limitToBounds,
                              y = u.alignmentAnimation,
                              w = u.zoomAnimation,
                              b = u.panning,
                              C = b.lockAxisY,
                              T = b.lockAxisX,
                              E = w.animationType,
                              X = y.sizeX,
                              N = y.sizeY,
                              z = y.velocityAlignmentTime,
                              D =
                                ((e = (t = n.setup.velocityAnimation)
                                  .equalToMove),
                                (i = t.animationTime),
                                (o = t.sensitivity),
                                e ? i * d * o : i),
                              k = P(n, X),
                              A = P(n, N),
                              O = (k * c.offsetWidth) / 100,
                              W = (A * c.offsetHeight) / 100,
                              I = f + O,
                              M = v - O,
                              B = h + W,
                              K = g - W,
                              L = n.transformState,
                              H = new Date().getTime();
                            l(n, E, Math.max(D, z), function (t) {
                              var e = n.transformState,
                                i = e.scale,
                                o = e.positionX,
                                a = e.positionY,
                                s = new Date().getTime() - H,
                                u =
                                  1 -
                                  (0, r[y.animationType])(Math.min(1, s / z)),
                                l = 1 - t,
                                c = o + p * l,
                                d = a + m * l,
                                w = Y(c, L.positionX, o, T, S, v, f, M, I, u),
                                b = Y(d, L.positionY, a, C, S, g, h, K, B, u);
                              (o !== c || a !== d) &&
                                n.setTransformState(i, w, b);
                            });
                          }
                        })(n)
                      : X(n);
                  }
                })(t),
                a(H(t), n, e));
            }),
            (this.onPinchStart = function (n) {
              var e = t.setup.disabled,
                i = t.props,
                o = i.onPinchingStart,
                r = i.onZoomStart;
              !e && V(t, n) && (no(t, n), u(t), a(H(t), n, o), a(H(t), n, r));
            }),
            (this.onPinch = function (n) {
              var e = t.setup.disabled,
                i = t.props,
                o = i.onPinching,
                r = i.onZoom;
              !e &&
                J(t) &&
                (n.preventDefault(),
                n.stopPropagation(),
                na(t, n),
                a(H(t), n, o),
                a(H(t), n, r));
            }),
            (this.onPinchStop = function (n) {
              var e = t.props,
                i = e.onPinchingStop,
                o = e.onZoomStop;
              t.pinchStartScale && (nr(t), a(H(t), n, i), a(H(t), n, o));
            }),
            (this.onTouchPanningStart = function (n) {
              var e = t.setup.disabled,
                i = t.props.onPanningStart;
              if (!e && S(t, n)) {
                if (
                  t.lastTouch &&
                  +new Date() - t.lastTouch < 200 &&
                  1 === n.touches.length
                )
                  t.onDoubleClick(n);
                else {
                  (t.lastTouch = +new Date()), u(t);
                  var o = n.touches,
                    r = 1 === o.length,
                    s = 2 === o.length;
                  r && (u(t), E(t, n), a(H(t), n, i)), s && t.onPinchStart(n);
                }
              }
            }),
            (this.onTouchPanning = function (n) {
              var e = t.setup.disabled,
                i = t.props.onPanning;
              if (t.isPanning && 1 === n.touches.length) {
                if (e || !y(t)) return;
                n.preventDefault(), n.stopPropagation();
                var o = n.touches[0];
                N(t, o.clientX, o.clientY), a(H(t), n, i);
              } else n.touches.length > 1 && t.onPinch(n);
            }),
            (this.onTouchPanningStop = function (n) {
              t.onPanningStop(n), t.onPinchStop(n);
            }),
            (this.onDoubleClick = function (n) {
              !t.setup.disabled &&
                nl(t, n) &&
                (function (n, t) {
                  var e = n.setup,
                    i = n.doubleClickStopEventTimer,
                    o = n.transformState,
                    r = n.contentComponent,
                    s = o.scale,
                    u = n.props,
                    l = u.onZoomStart,
                    p = u.onZoom,
                    m = e.doubleClick,
                    d = m.disabled,
                    f = m.mode,
                    v = m.step,
                    h = m.animationTime,
                    g = m.animationType;
                  if (!d && !i) {
                    if ("reset" === f) return nu(n, t);
                    if (!r) return console.error("No ContentComponent found");
                    var S = B(n, "zoomOut" === f ? -1 : 1, v);
                    if (s !== S) {
                      a(H(n), t, l);
                      var y = q(t, r, s),
                        w = z(n, S, y.x, y.y);
                      if (!w)
                        return console.error(
                          "Error during zoom event. New transformation state was not calculated.",
                        );
                      a(H(n), t, p), c(n, w, h, g), ns(n, t);
                    }
                  }
                })(t, n);
            }),
            (this.clearPanning = function (n) {
              t.isPanning && t.onPanningStop(n);
            }),
            (this.setKeyPressed = function (n) {
              t.pressedKeys[n.key] = !0;
            }),
            (this.setKeyUnPressed = function (n) {
              t.pressedKeys[n.key] = !1;
            }),
            (this.isPressingKeys = function (n) {
              return (
                !n.length ||
                Boolean(
                  n.find(function (n) {
                    return t.pressedKeys[n];
                  }),
                )
              );
            }),
            (this.setTransformState = function (n, e, i) {
              var o = t.props.onTransformed;
              if (Number.isNaN(n) || Number.isNaN(e) || Number.isNaN(i))
                console.error("Detected NaN set state values");
              else {
                n !== t.transformState.scale &&
                  ((t.transformState.previousScale = t.transformState.scale),
                  (t.transformState.scale = n)),
                  (t.transformState.positionX = e),
                  (t.transformState.positionY = i);
                var r = H(t);
                t.onChangeCallbacks.forEach(function (n) {
                  return n(r);
                }),
                  a(r, { scale: n, positionX: e, positionY: i }, o),
                  t.applyTransformation();
              }
            }),
            (this.setCenter = function () {
              if (t.wrapperComponent && t.contentComponent) {
                var n = F(
                  t.transformState.scale,
                  t.wrapperComponent,
                  t.contentComponent,
                );
                t.setTransformState(n.scale, n.positionX, n.positionY);
              }
            }),
            (this.handleTransformStyles = function (n, e, i) {
              return t.props.customTransform
                ? t.props.customTransform(n, e, i)
                : "translate("
                    .concat(n, "px, ")
                    .concat(e, "px) scale(")
                    .concat(i, ")");
            }),
            (this.applyTransformation = function () {
              if (t.mounted && t.contentComponent) {
                var n = t.transformState,
                  e = n.scale,
                  i = n.positionX,
                  o = n.positionY,
                  a = t.handleTransformStyles(i, o, e);
                t.contentComponent.style.transform = a;
              }
            }),
            (this.getContext = function () {
              return H(t);
            }),
            (this.onChange = function (n) {
              return (
                t.onChangeCallbacks.has(n) || t.onChangeCallbacks.add(n),
                function () {
                  t.onChangeCallbacks.delete(n);
                }
              );
            }),
            (this.init = function (n, e) {
              t.cleanupWindowEvents(),
                (t.wrapperComponent = n),
                (t.contentComponent = e),
                f(t, t.transformState.scale),
                t.handleInitializeWrapperEvents(n),
                t.handleInitialize(e),
                t.initializeWindowEvents(),
                (t.isInitialized = !0),
                a(H(t), void 0, t.props.onInit);
            }),
            (this.props = n),
            (this.setup = M(this.props)),
            (this.transformState = I(this.props));
        },
        np = i.createContext(null),
        nm = i.forwardRef(function (n, t) {
          var e,
            o,
            a = (0, i.useState)(0)[1],
            r = n.children,
            s = (0, i.useRef)(new nc(n)).current,
            u =
              ((e = n.children), (o = H(s)), "function" == typeof e ? e(o) : e),
            l = (0, i.useCallback)(
              function () {
                "function" == typeof r &&
                  a(function (n) {
                    return n + 1;
                  });
              },
              [r],
            );
          return (
            (0, i.useImperativeHandle)(
              t,
              function () {
                return H(s);
              },
              [s],
            ),
            (0, i.useEffect)(
              function () {
                s.update(n);
              },
              [s, n],
            ),
            (0, i.useEffect)(
              function () {
                return s.onChange(l);
              },
              [s, n, l],
            ),
            i.createElement(np.Provider, { value: s }, u)
          );
        }),
        nd = {
          wrapper: "transform-component-module_wrapper__7HFJe",
          content: "transform-component-module_content__uCDPE",
        };
      !(function (n, t) {
        void 0 === t && (t = {});
        var e = t.insertAt;
        if (n && "undefined" != typeof document) {
          var i = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
          (o.type = "text/css"),
            "top" === e && i.firstChild
              ? i.insertBefore(o, i.firstChild)
              : i.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = n)
              : o.appendChild(document.createTextNode(n));
        }
      })(
        ".transform-component-module_wrapper__7HFJe {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__uCDPE {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__uCDPE img {\n  pointer-events: none;\n}\n",
      );
      var nf = function (n) {
        var t = n.children,
          e = n.wrapperClass,
          o = n.contentClass,
          a = n.wrapperStyle,
          r = n.contentStyle,
          s = n.wrapperProps,
          u = n.contentProps,
          l = (0, i.useContext)(np).init,
          c = (0, i.useRef)(null),
          p = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(function () {
            var n = c.current,
              t = p.current;
            null !== n && null !== t && l && l(n, t);
          }, []),
          i.createElement(
            "div",
            k({}, void 0 === s ? {} : s, {
              ref: c,
              className: "react-transform-wrapper "
                .concat(nd.wrapper, " ")
                .concat(void 0 === e ? "" : e),
              style: a,
            }),
            i.createElement(
              "div",
              k({}, void 0 === u ? {} : u, {
                ref: p,
                className: "react-transform-component "
                  .concat(nd.content, " ")
                  .concat(void 0 === o ? "" : o),
                style: r,
              }),
              t,
            ),
          )
        );
      };
      i.forwardRef(function (n, t) {
        var e,
          o = (0, i.useRef)(null),
          a = (0, i.useContext)(np);
        return (
          (0, i.useEffect)(
            function () {
              return a.onChange(function (n) {
                o.current &&
                  (o.current.style.transform = a.handleTransformStyles(
                    0,
                    0,
                    1 / n.state.scale,
                  ));
              });
            },
            [a],
          ),
          i.createElement(
            "div",
            k({}, n, {
              ref:
                ((e = [o, t]),
                function (n) {
                  e.forEach(function (t) {
                    "function" == typeof t
                      ? t(n)
                      : null != t && (t.current = n);
                  });
                }),
            }),
          )
        );
      });
    },
  },
]);
//# sourceMappingURL=6126.497a813830b1cce1.js.map
