(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4047],
  {
    92703: function (e, t, o) {
      "use strict";
      var r = o(50414);
      function n() {}
      function i() {}
      (i.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, o, n, i, a) {
            if (a !== r) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var o = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: n,
          };
          return (o.PropTypes = o), o;
        });
    },
    45697: function (e, t, o) {
      e.exports = o(92703)();
    },
    50414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7656: function (e, t, o) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = s(o(67294)),
        i = s(o(45697)),
        a = s(o(4107)),
        l = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" != typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(o, i, a)
                : (o[i] = e[i]);
            }
          return (o.default = e), t && t.set(e, o), o;
        })(o(81949)),
        u = s(o(21869));
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : f(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      var p = function (e) {
        var t = e.imageSrc,
          o = e.largeImageSrc,
          r = e.imageAlt,
          i = e.magnifierBorderSize,
          a = e.magnifierBorderColor,
          c = e.magnifierBackgroundColor,
          s = e.magnifierSize,
          f = e.magnifierOffsetX,
          p = e.magnifierOffsetY,
          h = e.square,
          m = e.cursorStyle,
          y = e.renderOverlay,
          v = e.allowOverflow,
          g = e.style,
          O = e.className,
          b = e.onImageLoad,
          w = e.onLargeImageLoad,
          P = e.onZoomStart,
          S = e.onZoomEnd;
        return n.default.createElement(
          l.default,
          {
            style: d(
              d({}, g),
              {},
              { position: "relative", overflow: v ? "visible" : "hidden" },
            ),
            className: O,
            touchActivationMethod: l.TOUCH_ACTIVATION.TOUCH,
            mouseActivationMethod: l.MOUSE_ACTIVATION.HOVER,
            onActivate: P,
            onDeactivate: S,
            trackItemPosition: !0,
            alignItemOnActivePos: !0,
            itemPositionLimitBySize: !0,
          },
          n.default.createElement(u.default, {
            magnifierBorderSize: i,
            magnifierBorderColor: a,
            magnifierBackgroundColor: c,
            magnifierSize: s,
            imageSrc: t,
            largeImageSrc: o,
            imageAlt: r,
            square: h,
            magnifierOffsetX: f,
            magnifierOffsetY: p,
            renderOverlay: y,
            cursorStyle: m,
            onImageLoad: b,
            onLargeImageLoad: w,
          }),
        );
      };
      (p.propTypes = {
        imageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        largeImageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        imageAlt: i.default.string,
        allowOverflow: i.default.bool,
        magnifierBorderSize: i.default.number,
        magnifierBorderColor: i.default.string,
        magnifierBackgroundColor: i.default.string,
        magnifierSize: i.default.oneOfType([
          i.default.string,
          i.default.number,
        ]),
        magnifierOffsetX: i.default.number,
        magnifierOffsetY: i.default.number,
        square: i.default.bool,
        cursorStyle: i.default.string,
        renderOverlay: i.default.func,
        className: i.default.string,
        style: i.default.object,
        onImageLoad: i.default.func,
        onLargeImageLoad: i.default.func,
      }),
        (p.defaultProps = {
          imageSrc: "",
          largeImageSrc: "",
          imageAlt: "",
          allowOverflow: !1,
          magnifierBorderSize: 3,
          magnifierBorderColor: "rgba(255,255,255,.5)",
          magnifierBackgroundColor: "rgba(225,225,225,.5)",
          magnifierSize: "25%",
          magnifierOffsetX: 0,
          magnifierOffsetY: 0,
          square: !1,
          cursorStyle: "none",
          onImageLoad: a.default.noop,
          onLargeImageLoad: a.default.noop,
        }),
        (t.default = p);
    },
    21869: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        n = l(o(4107)),
        i = l(o(40645)),
        a = l(o(3803));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : u(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      t.default = function (e) {
        var t = e.itemRef,
          o = e.itemPosition,
          l = e.activePosition,
          u = e.elementDimensions,
          s = e.itemDimensions,
          f = e.active,
          d = e.imageSrc,
          p = e.largeImageSrc,
          h = e.imageAlt,
          m = e.magnifierBorderSize,
          y = e.magnifierBorderColor,
          v = e.magnifierBackgroundColor,
          g = e.square,
          O = e.magnifierSize,
          b = e.magnifierOffsetX,
          w = e.magnifierOffsetY,
          P = e.renderOverlay,
          S = e.cursorStyle,
          I = e.onImageLoad,
          x = e.onLargeImageLoad,
          j = e.onLoadRefresh,
          T = s.width > u.width,
          M = T && f,
          A = n.default.convertWidthToPx(O, u.width),
          L = A / 2,
          C = { x: o.x - l.x + L - m, y: o.y - l.y + L - m },
          _ = { x: l.x - L + b, y: l.y - L + w };
        return r.default.createElement(
          r.default.Fragment,
          null,
          r.default.createElement(i.default, {
            style: {
              width: "100%",
              display: "block",
              boxSizing: "border-box",
              cursor: T ? S : "default",
            },
            src: d,
            alt: h,
            onImageLoad: I,
            onLoadRefresh: j,
          }),
          r.default.createElement(
            "div",
            {
              style: c(
                c({}, a.default.getZoomContainerStyle(A, A, !0)),
                {},
                {
                  visibility: M ? "visible" : "hidden",
                  borderRadius: g ? "0" : "50%",
                  zIndex: "1",
                  border: "".concat(m, "px solid ").concat(y),
                  transform: "translate("
                    .concat(_.x, "px, ")
                    .concat(_.y, "px)"),
                  backgroundColor: v,
                  backgroundClip: "padding-box",
                },
              ),
            },
            r.default.createElement(i.default, {
              style: a.default.getLargeImageStyle(C.x, C.y, M),
              ref: t,
              src: p || d,
              alt: h,
              onImageLoad: x,
              onLoadRefresh: j,
            }),
          ),
          P ? P(f) : null,
        );
      };
    },
    40645: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = i(o(67294)),
        n = i(o(4107));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, r = Array(t); o < t; o++) r[o] = e[o];
        return r;
      }
      var u = r.default.forwardRef(function (e, t) {
        var o,
          n = e.onImageLoad,
          i = e.onLoadRefresh,
          u = e.src,
          c = e.alt,
          s = (function (e, t) {
            if (null == e) return {};
            var o,
              r,
              n = (function (e, t) {
                if (null == e) return {};
                var o,
                  r,
                  n = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (o = i[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (o = i[r]),
                  !(t.indexOf(o) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, o) &&
                    (n[o] = e[o]);
            }
            return n;
          })(e, ["onImageLoad", "onLoadRefresh", "src", "alt"]),
          f =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((o = r.default.useState(0))) ||
            (function (e, t) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var o = [],
                  r = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var a, l = e[Symbol.iterator]();
                    !(r = (a = l.next()).done) &&
                    (o.push(a.value), !t || o.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (n = !0), (i = e);
                } finally {
                  try {
                    r || null == l.return || l.return();
                  } finally {
                    if (n) throw i;
                  }
                }
                return o;
              }
            })(o, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return l(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === o && e.constructor && (o = e.constructor.name),
                  "Map" === o || "Set" === o)
                )
                  return Array.from(e);
                if (
                  "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                )
                  return l(e, t);
              }
            })(o, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          d = f[0],
          p = f[1],
          h = r.default.useRef(!1),
          m = u.constructor === Array ? u : [u];
        return r.default.createElement(
          "img",
          a(
            {
              ref: t,
              src: m[d],
              alt: c,
              onLoad: function (e) {
                n(e), h.current && i();
              },
              onError: function (e) {
                d < m.length &&
                  ((h.current = !0),
                  p(function (e) {
                    return e + 1;
                  }));
              },
            },
            s,
          ),
        );
      });
      (u.defaultProps = {
        onImageLoad: n.default.noop,
        onLoadRefresh: n.default.noop,
      }),
        (t.default = u);
    },
    7008: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = i(o(67294)),
        n = i(o(3803));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = function (e) {
        var t = e.previewWidth,
          o = e.previewHeight,
          i = e.previewPosLeft,
          a = e.previewPosRight,
          l = e.previewPosTop,
          u = e.previewPosBottom,
          c = e.imageWidth,
          s = e.imageHeight,
          f = e.overlayOpacity,
          d = e.overlayBoxOpacity,
          p = e.active,
          h = e.transitionSpeed,
          m = e.overlayBackgroundColor,
          y = e.overlayBoxColor,
          v = e.overlayBoxImage,
          g = e.overlayBoxImageSize,
          O = p ? f : 0;
        return r.default.createElement(
          r.default.Fragment,
          null,
          r.default.createElement("div", {
            style: n.default.getOverlayCenterStyle(
              t,
              o,
              i,
              l,
              p ? d : 0,
              h,
              y,
              v,
              g,
            ),
          }),
          r.default.createElement("div", {
            style: n.default.getOverlayTopStyle(c, l, O, h, m),
          }),
          r.default.createElement("div", {
            style: n.default.getOverlayLeftStyle(i, o, l, O, h, m),
          }),
          r.default.createElement("div", {
            style: n.default.getOverlayRightStyle(c - a, o, l, O, h, m),
          }),
          r.default.createElement("div", {
            style: n.default.getOverlayBottomStyle(c, s - u, u, O, h, m),
          }),
        );
      };
      (a.defaultProps = {
        overlayOpacity: 0.5,
        overlayBoxOpacity: 0.8,
        transitionSpeed: 0.4,
        overlayBackgroundColor: "#000",
        overlayBoxColor: "#fff",
        overlayBoxImage: "",
        overlayBoxImageSize: "",
      }),
        (t.default = a);
    },
    34619: function (e, t, o) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = s(o(67294)),
        i = s(o(45697)),
        a = s(o(4107)),
        l = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" != typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(o, i, a)
                : (o[i] = e[i]);
            }
          return (o.default = e), t && t.set(e, o), o;
        })(o(81949)),
        u = s(o(33110));
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var d = function (e) {
        var t = e.imageSrc,
          o = e.largeImageSrc,
          r = e.imageAlt,
          i = e.cursorStyle,
          a = e.cursorStyleActive,
          c = e.renderOverlay,
          s = e.dragToMove,
          d = e.className,
          p = e.style,
          h = e.mouseActivation,
          m = e.touchActivation,
          y = e.interactionSettings,
          v = e.onImageLoad,
          g = e.onLargeImageLoad,
          O = e.onImageError,
          b = e.onLargeImageError,
          w = e.onZoomStart,
          P = e.onZoomEnd;
        return n.default.createElement(
          l.default,
          f(
            {
              style: p,
              className: d,
              touchActivationMethod: m,
              mouseActivationMethod: h,
              trackItemPosition: !0,
              centerItemOnActivatePos: s,
              alignItemOnActivePos: !s,
              onActivate: w,
              onDeactivate: P,
              itemPositionLimitBySize: !0,
            },
            y,
          ),
          n.default.createElement(u.default, {
            imageSrc: t,
            largeImageSrc: o,
            imageAlt: r,
            renderOverlay: c,
            cursorStyle: i,
            cursorStyleActive: a || s ? "move" : "zoom-out",
            onImageLoad: v,
            onLargeImageLoad: g,
            onImageError: O,
            onLargeImageError: b,
          }),
        );
      };
      (d.propTypes = {
        imageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        largeImageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        imageAlt: i.default.string,
        cursorStyle: i.default.string,
        cursorStyleActive: i.default.string,
        renderOverlay: i.default.func,
        dragToMove: i.default.bool,
        className: i.default.string,
        style: i.default.object,
        mouseActivation: i.default.string,
        touchActivation: i.default.string,
        interactionSettings: i.default.shape({
          tapDurationInMs: i.default.number,
          doubleTapDurationInMs: i.default.number,
          longTouchDurationInMs: i.default.number,
          longTouchMoveLimit: i.default.number,
          clickMoveLimit: i.default.number,
        }),
        onImageLoad: i.default.func,
        onLargeImageLoad: i.default.func,
      }),
        (d.defaultProps = {
          imageSrc: "",
          largeImageSrc: "",
          imageAlt: "",
          cursorStyle: "zoom-in",
          cursorStyleActive: "",
          dragToMove: !0,
          mouseActivation: l.MOUSE_ACTIVATION.CLICK,
          touchActivation: l.TOUCH_ACTIVATION.TAP,
          interactionSettings: {},
          onImageLoad: a.default.noop,
          onLargeImageLoad: a.default.noop,
        }),
        (t.default = d);
    },
    3139: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.MagnifierContext = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== c(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, n) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(o, n, i)
                : (o[n] = e[n]);
            }
          return (o.default = e), t && t.set(e, o), o;
        })(o(67294)),
        n = l(o(45697)),
        i = o(81949),
        a = l(o(4107));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(o), !0).forEach(function (t) {
                y(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : s(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      function d(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var v = r.default.createContext();
      t.MagnifierContext = v;
      var g = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(u, e);
        var t,
          o,
          n,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                o,
                r = m(u);
              if (t) {
                var n = m(this).constructor;
                o = Reflect.construct(r, arguments, n);
              } else o = r.apply(this, arguments);
              return (e = o) && ("object" === c(e) || "function" == typeof e)
                ? e
                : h(this);
            });
        function u() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, u);
          for (var t = arguments.length, o = Array(t), n = 0; n < t; n++)
            o[n] = arguments[n];
          return (
            y(h((e = l.call.apply(l, [this].concat(o)))), "state", {
              inputPositionState: i.defaultState,
            }),
            y(h(e), "zoomContainerRef", r.default.createRef()),
            y(h(e), "zoomImageRef", r.default.createRef()),
            y(h(e), "zoomImageDimensions", { width: 0, height: 0 }),
            y(h(e), "getZoomContainerDimensions", function () {
              if (!e.zoomContainerRef.current)
                return {
                  width: 0,
                  height: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                };
              var t = e.zoomContainerRef.current.getBoundingClientRect();
              return {
                width: t.width,
                height: t.height,
                left: t.left,
                right: t.right,
                top: t.top,
                bottom: t.bottom,
              };
            }),
            y(h(e), "onUpdate", function (t) {
              e.setState({ inputPositionState: t });
            }),
            y(h(e), "onZoomImageLoad", function (t) {
              var o = t.target.getBoundingClientRect();
              e.zoomImageDimensions = { width: o.width, height: o.height };
            }),
            e
          );
        }
        return (
          (o = [
            {
              key: "getZoomImageDimensions",
              value: function () {
                if (
                  !this.zoomImageDimensions.width &&
                  this.zoomImageRef.current
                ) {
                  var e = this.zoomImageRef.current.getBoundingClientRect();
                  this.zoomImageDimensions = {
                    width: e.width,
                    height: e.height,
                  };
                }
                return this.zoomImageDimensions;
              },
            },
            {
              key: "getContextValue",
              value: function () {
                return f(
                  {
                    stateOverride: this.state.inputPositionState,
                    isActive: this.state.inputPositionState.active,
                    onUpdate: this.onUpdate,
                    zoomImageDimensions: this.zoomImageDimensions,
                    zoomRef: this.zoomContainerRef,
                    zoomImageRef: this.zoomImageRef,
                    onZoomImageLoad: this.onZoomImageLoad,
                  },
                  this.calculatePositions(),
                );
              },
            },
            {
              key: "calculatePositions",
              value: function () {
                var e = this.state.inputPositionState,
                  t = e.elementDimensions,
                  o = e.itemPosition,
                  r = this.getZoomContainerDimensions(),
                  n = this.getZoomImageDimensions(),
                  i = !1,
                  l = this.props,
                  u = l.autoInPlace,
                  c = l.inPlaceMinBreakpoint;
                if (u || c)
                  try {
                    var s = r.left,
                      d = r.right,
                      p = window.innerWidth;
                    (p < c || s < 0 || d > p) && (i = !0);
                  } catch (e) {}
                var h = { width: t.width, height: t.height },
                  m = {
                    width: Math.floor(h.width * (r.width / n.width)),
                    height: Math.floor(h.height * (r.height / n.height)),
                  },
                  y = { x: 0, y: 0 },
                  v = f({}, o),
                  g = { x: i ? 0 : m.width / 2, y: i ? 0 : m.height / 2 };
                (v.x = Math.max(g.x, v.x)),
                  (v.x = Math.min(h.width - g.x, v.x)),
                  (v.y = Math.max(g.y, v.y)),
                  (v.y = Math.min(h.height - g.y, v.y)),
                  (y = f({}, v));
                var O = i ? h : r;
                return (
                  (y.x = a.default.convertRange(
                    g.x,
                    h.width - g.x,
                    -1 * n.width + O.width,
                    0,
                    y.x,
                  )),
                  (y.y = a.default.convertRange(
                    g.y,
                    h.height - g.y,
                    -1 * n.height + O.height,
                    0,
                    y.y,
                  )),
                  (y.x = a.default.invertNumber(
                    -1 * n.width + O.width,
                    0,
                    y.x,
                  )),
                  (y.y = a.default.invertNumber(
                    -1 * n.height + O.height,
                    0,
                    y.y,
                  )),
                  (m.left = Math.floor(v.x - g.x) || 0),
                  (m.right = Math.floor(v.x + g.x) || 0),
                  (m.top = Math.floor(v.y - g.y) || 0),
                  (m.bottom = Math.floor(v.y + g.y) || 0),
                  {
                    position: y,
                    smallImageSize: h,
                    previewSize: m,
                    zoomContainerDimensions: r,
                    inPlace: i,
                  }
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.style,
                  o = e.className;
                return r.default.createElement(
                  "div",
                  { style: t, className: o },
                  r.default.createElement(
                    v.Provider,
                    { value: this.getContextValue() },
                    this.props.children,
                  ),
                );
              },
            },
          ]),
          d(u.prototype, o),
          n && d(u, n),
          u
        );
      })(r.Component);
      y(g, "propTypes", {
        className: n.default.string,
        style: n.default.object,
        autoInPlace: n.default.bool,
        inPlaceMinBreakpoint: n.default.number,
      }),
        y(g, "defaultProps", { inPlaceMinBreakpoint: 0 }),
        (t.default = g);
    },
    79851: function (e, t, o) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = f(o(67294)),
        i = f(o(45697)),
        a = f(o(4107)),
        l = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" != typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(o, i, a)
                : (o[i] = e[i]);
            }
          return (o.default = e), t && t.set(e, o), o;
        })(o(81949)),
        u = f(o(73353)),
        c = o(3139);
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e) {
        var t = e.imageSrc,
          o = e.imageAlt,
          r = e.largeImageSrc,
          i = e.className,
          a = e.style,
          s = e.cursorStyle,
          f = e.onImageLoad,
          d = e.onLargeImageLoad,
          p = e.renderOverlay,
          h = e.overlayOpacity,
          m = e.overlayBoxOpacity,
          y = e.overlayBackgroundColor,
          v = e.overlayBoxColor,
          g = e.overlayBoxImage,
          O = e.overlayBoxImageSize,
          b = e.transitionSpeed,
          w = e.onZoomStart,
          P = e.onZoomEnd,
          S = e.mouseActivation,
          I = e.touchActivation,
          x = n.default.useContext(c.MagnifierContext),
          j = x.stateOverride,
          T = x.onUpdate,
          M = x.zoomImageDimensions,
          A = x.previewSize,
          L = x.smallImageSize,
          C = x.position,
          _ = x.inPlace;
        return n.default.createElement(
          l.default,
          {
            touchActivationMethod: I,
            mouseActivationMethod: S,
            onActivate: w,
            onDeactivate: P,
            className: i,
            style: a,
            cursorStyle: s,
            trackItemPosition: !0,
            linkItemToActive: !0,
            stateOverride: j,
            onUpdate: T,
          },
          n.default.createElement(u.default, {
            image: t,
            largeImage: r,
            alt: o,
            zoomImageDimensions: M,
            previewSize: A,
            smallImageSize: L,
            onImageLoad: f,
            onLargeImageLoad: d,
            renderOverlay: p,
            overlayOpacity: h,
            overlayBoxOpacity: m,
            overlayBackgroundColor: y,
            overlayBoxColor: v,
            overlayBoxImage: g,
            overlayBoxImageSize: O,
            transitionSpeed: b,
            inPlace: _,
            position: C,
          }),
        );
      }
      (d.propTypes = {
        className: i.default.string,
        style: i.default.object,
        cursorStyle: i.default.string,
        imageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        largeImageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        imageAlt: i.default.string,
        onImageLoad: i.default.func,
        onLargeImageLoad: i.default.func,
        renderOverlay: i.default.func,
        overlayBoxOpacity: i.default.number,
        overlayOpacity: i.default.number,
        overlayBackgroundColor: i.default.string,
        overlayBoxColor: i.default.string,
        overlayBoxImage: i.default.string,
        overlayBoxImageSize: i.default.string,
        transitionSpeed: i.default.number,
        mouseActivation: i.default.string,
        touchActivation: i.default.string,
      }),
        (d.defaultProps = {
          cursorStyle: "crosshair",
          imageSrc: "",
          imageAlt: "",
          overlayOpacity: 0.5,
          overlayBoxOpacity: 0.8,
          overlayBackgroundColor: "#000",
          overlayBoxColor: "#fff",
          overlayBoxImage: "",
          overlayBoxImageSize: "",
          transitionSpeed: 0.4,
          onImageLoad: a.default.noop,
          onLargeImageLoad: a.default.noop,
          mouseActivation: l.MOUSE_ACTIVATION.HOVER,
          touchActivation: l.TOUCH_ACTIVATION.TOUCH,
        }),
        (t.default = d);
    },
    73353: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        n = l(o(40645)),
        i = l(o(7008)),
        a = l(o(3803));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : u(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, r = Array(t); o < t; o++) r[o] = e[o];
        return r;
      }
      t.default = function (e) {
        var t,
          o = e.image,
          l = e.largeImage,
          u = e.alt,
          f = e.previewSize,
          d = e.smallImageSize,
          p = e.overlayOpacity,
          h = e.overlayBoxOpacity,
          m = e.overlayBackgroundColor,
          y = e.overlayBoxColor,
          v = e.overlayBoxImage,
          g = e.overlayBoxImageSize,
          O = e.active,
          b = e.onImageLoad,
          w = e.onLargeImageLoad,
          P = e.renderOverlay,
          S = e.transitionSpeed,
          I = e.inPlace,
          x = e.position,
          j =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((t = r.default.useState(!1))) ||
            (function (e, t) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var o = [],
                  r = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var a, l = e[Symbol.iterator]();
                    !(r = (a = l.next()).done) &&
                    (o.push(a.value), !t || o.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (n = !0), (i = e);
                } finally {
                  try {
                    r || null == l.return || l.return();
                  } finally {
                    if (n) throw i;
                  }
                }
                return o;
              }
            })(t, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return s(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === o && e.constructor && (o = e.constructor.name),
                  "Map" === o || "Set" === o)
                )
                  return Array.from(e);
                if (
                  "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                )
                  return s(e, t);
              }
            })(t, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          T = j[0],
          M = j[1];
        return (
          r.default.useEffect(
            function () {
              M(I);
            },
            [I],
          ),
          r.default.createElement(
            "div",
            { style: { position: "relative" } },
            r.default.createElement(n.default, {
              style: { display: "block", width: "100%" },
              src: o,
              alt: u,
              onImageLoad: b,
            }),
            r.default.createElement(i.default, {
              previewWidth: f.width,
              previewHeight: f.height,
              previewPosLeft: f.left,
              previewPosRight: f.right,
              previewPosTop: f.top,
              previewPosBottom: f.bottom,
              imageWidth: d.width,
              imageHeight: d.height,
              overlayOpacity: p,
              overlayBoxOpacity: h,
              overlayBackgroundColor: m,
              overlayBoxColor: y,
              overlayBoxImage: v,
              overlayBoxImageSize: g,
              active: O && !T,
              transitionSpeed: S,
            }),
            T
              ? r.default.createElement(
                  "div",
                  {
                    style: c(
                      c(
                        {},
                        a.default.getZoomContainerStyle(
                          d.width,
                          d.height,
                          T,
                          !1,
                        ),
                      ),
                      {},
                      {
                        opacity: O ? "1" : "0",
                        transition: "opacity ".concat(S, "s ease"),
                      },
                    ),
                  },
                  r.default.createElement(n.default, {
                    style: c({}, a.default.getLargeImageStyle(x.x, x.y, T)),
                    src: l,
                    alt: u,
                    onImageLoad: w,
                  }),
                )
              : null,
            P ? P(O) : null,
          )
        );
      };
    },
    33110: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = a(o(67294)),
        n = a(o(40645)),
        i = a(o(3803));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = e.itemPosition,
          o = e.active,
          a = e.elementDimensions,
          l = e.itemDimensions,
          u = e.imageSrc,
          c = e.largeImageSrc,
          s = e.imageAlt,
          f = e.itemRef,
          d = e.renderOverlay,
          p = e.cursorStyle,
          h = e.cursorStyleActive,
          m = e.onImageLoad,
          y = e.onLargeImageLoad,
          v = e.onLoadRefresh,
          g = l.width > a.width,
          O = g && o;
        return r.default.createElement(
          "div",
          {
            style: {
              position: "relative",
              cursor: g ? (o ? h : p) : "default",
            },
          },
          r.default.createElement(n.default, {
            style: {
              display: "block",
              visibility: O ? "hidden" : "visible",
              width: "100%",
            },
            src: u,
            alt: s,
            onImageLoad: m,
            onLoadRefresh: v,
          }),
          r.default.createElement(
            "div",
            { style: i.default.getZoomContainerStyle(a.width, a.height, !0) },
            r.default.createElement(n.default, {
              style: i.default.getLargeImageStyle(t.x, t.y, O),
              src: c || u,
              alt: s,
              ref: f,
              onImageLoad: y,
              onLoadRefresh: v,
            }),
          ),
          d ? d(o) : null,
        );
      };
    },
    61768: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = c(o(67294)),
        n = c(o(45697)),
        i = c(o(4107)),
        a = c(o(3803)),
        l = o(3139),
        u = c(o(40645));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : s(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      function d(e) {
        var t = e.imageSrc,
          o = e.imageAlt,
          n = e.className,
          i = e.style,
          c = e.onImageLoad,
          s = e.transitionSpeed,
          d = r.default.useContext(l.MagnifierContext),
          p = d.zoomImageDimensions,
          h = d.zoomContainerDimensions,
          m = d.position,
          y = d.onZoomImageLoad,
          v = d.zoomRef,
          g = d.zoomImageRef,
          O = d.isActive,
          b = d.inPlace,
          w = p.height <= h.height,
          P = p.width <= h.width;
        return r.default.createElement(
          "div",
          {
            className: n,
            style: f(
              f(f({}, a.default.getMagnifierZoomStyle(O && !b, s)), i),
              {},
              { overflow: "hidden", pointerEvents: "none" },
            ),
            ref: v,
          },
          r.default.createElement(u.default, {
            ref: g,
            style: f(
              {},
              a.default.getLargeImageStyle(P ? 0 : m.x, w ? 0 : m.y, !0),
            ),
            src: t,
            alt: o,
            onImageLoad: function (e) {
              y(e), c(e);
            },
          }),
        );
      }
      (d.propTypes = {
        className: n.default.string,
        style: n.default.object,
        imageSrc: n.default.oneOfType([
          n.default.string,
          n.default.arrayOf(n.default.string),
        ]),
        imageAlt: n.default.string,
        onImageLoad: n.default.func,
        transitionSpeed: n.default.number,
      }),
        (d.defaultProps = {
          style: {},
          imageSrc: "",
          imageAlt: "",
          onImageLoad: i.default.noop,
          transitionSpeed: 0.4,
        }),
        (t.default = d);
    },
    34772: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = s(o(67294)),
        n = u(o(45697)),
        i = u(o(4107)),
        a = s(o(81949)),
        l = u(o(27669));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== f(e) && "function" != typeof e))
          return { default: e };
        var t = c();
        if (t && t.has(e)) return t.get(e);
        var o = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, n) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(o, n, i)
              : (o[n] = e[n]);
          }
        return (o.default = e), t && t.set(e, o), o;
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(o), !0).forEach(function (t) {
                g(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : d(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      function h(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var O = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && m(e, t);
        })(i, e);
        var t,
          o,
          n =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                o,
                r = v(i);
              if (t) {
                var n = v(this).constructor;
                o = Reflect.construct(r, arguments, n);
              } else o = r.apply(this, arguments);
              return (e = o) && ("object" === f(e) || "function" == typeof e)
                ? e
                : y(this);
            });
        function i() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          for (var t = arguments.length, o = Array(t), a = 0; a < t; a++)
            o[a] = arguments[a];
          return (
            g(
              y((e = n.call.apply(n, [this].concat(o)))),
              "containerRef",
              r.default.createRef(),
            ),
            e
          );
        }
        return (
          h(i.prototype, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.imageSrc,
                  o = e.largeImageSrc,
                  n = e.imageAlt,
                  i = e.previewSizePercentage,
                  u = e.previewHorizontalPos,
                  c = e.previewVerticalPos,
                  s = e.previewOpacity,
                  f = e.previewOverlayOpacity,
                  d = e.previewOverlayBoxOpacity,
                  h = e.previewOverlayBackgroundColor,
                  m = e.previewOverlayBoxColor,
                  y = e.previewOverlayBoxImage,
                  v = e.previewOverlayBoxImageSize,
                  g = e.cursorStyle,
                  O = e.cursorStyleActive,
                  b = e.shadow,
                  w = e.shadowColor,
                  P = e.renderOverlay,
                  S = e.className,
                  I = e.style,
                  x = e.onImageLoad,
                  j = e.onLargeImageLoad,
                  T = e.onZoomStart,
                  M = e.onZoomEnd;
                return r.default.createElement(
                  "div",
                  {
                    ref: this.containerRef,
                    style: p(
                      p({}, I),
                      {},
                      { textAlign: u, overflow: "hidden", fontSize: "0" },
                    ),
                    className: S,
                  },
                  r.default.createElement(
                    a.default,
                    {
                      style: {
                        width: "".concat(i, "%"),
                        display: "inline-block",
                        boxShadow: b ? "1px -1px 1px ".concat(w) : "none",
                      },
                      touchActivationMethod: a.TOUCH_ACTIVATION.TOUCH,
                      mouseActivationMethod: a.MOUSE_ACTIVATION.MOUSE_DOWN,
                      onActivate: T,
                      onDeactivate: M,
                      trackItemPosition: !0,
                      itemPositionMinX: 0,
                      itemPositionMinY: 0,
                      itemPositionMaxX: -0.1,
                      itemPositionMaxY: -0.1,
                      linkItemToActive: !0,
                      centerItemOnLoad: !0,
                    },
                    r.default.createElement(l.default, {
                      containerRef: this.containerRef,
                      previewSizePercentage: i,
                      previewVerticalPos: c,
                      previewOpacity: s,
                      previewOverlayOpacity: f,
                      previewOverlayBoxOpacity: d,
                      previewOverlayBackgroundColor: h,
                      previewOverlayBoxColor: m,
                      previewOverlayBoxImage: y,
                      previewOverlayBoxImageSize: v,
                      imageSrc: t,
                      largeImageSrc: o,
                      imageAlt: n,
                      renderOverlay: P,
                      cursorStyle: g,
                      cursorStyleActive: O || g,
                      onImageLoad: x,
                      onLargeImageLoad: j,
                    }),
                  ),
                );
              },
            },
          ]),
          o && h(i, o),
          i
        );
      })(r.Component);
      g(O, "propTypes", {
        imageSrc: n.default.oneOfType([
          n.default.string,
          n.default.arrayOf(n.default.string),
        ]),
        largeImageSrc: n.default.oneOfType([
          n.default.string,
          n.default.arrayOf(n.default.string),
        ]),
        imageAlt: n.default.string,
        previewSizePercentage: n.default.number,
        previewHorizontalPos: n.default.oneOf(["left", "right"]),
        previewVerticalPos: n.default.oneOf(["top", "bottom"]),
        previewOpacity: n.default.number,
        previewOverlayOpacity: n.default.number,
        previewOverlayBoxOpacity: n.default.number,
        previewOverlayBackgroundColor: n.default.string,
        previewOverlayBoxColor: n.default.string,
        previewOverlayBoxImage: n.default.string,
        previewOverlayBoxImageSize: n.default.string,
        cursorStyle: n.default.string,
        cursorStyleActive: n.default.string,
        shadow: n.default.bool,
        shadowColor: n.default.string,
        renderOverlay: n.default.func,
        className: n.default.string,
        style: n.default.object,
        onImageLoad: n.default.func,
        onLargeImageLoad: n.default.func,
        onZoomStart: n.default.func,
        onZoomEnd: n.default.func,
      }),
        g(O, "defaultProps", {
          imageSrc: "",
          largeImageSrc: "",
          imageAlt: "",
          previewSizePercentage: 35,
          previewHorizontalPos: "left",
          previewVerticalPos: "bottom",
          previewOpacity: 0.8,
          previewOverlayOpacity: 0.4,
          previewOverlayBoxOpacity: 0.8,
          previewOverlayBackgroundColor: "#000",
          previewOverlayBoxColor: "#fff",
          previewOverlayBoxImage: "",
          previewOverlayBoxImageSize: "",
          cursorStyle: "crosshair",
          cursorStyleActive: "",
          shadowColor: "rgba(0,0,0,.4)",
          onImageLoad: i.default.noop,
          onLargeImageLoad: i.default.noop,
        }),
        (t.default = O);
    },
    27669: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = u(o(67294)),
        n = u(o(4107)),
        i = u(o(3803)),
        a = u(o(40645)),
        l = u(o(7008));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : c(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      t.default = function (e) {
        var t = e.active,
          o = e.itemPosition,
          u = e.elementDimensions,
          c = e.itemDimensions,
          f = e.imageSrc,
          d = e.largeImageSrc,
          p = e.imageAlt,
          h = e.itemRef,
          m = e.previewSizePercentage,
          y = e.containerRef,
          v = e.previewVerticalPos,
          g = e.previewOpacity,
          O = e.previewOverlayOpacity,
          b = e.previewOverlayBoxOpacity,
          w = e.previewOverlayBackgroundColor,
          P = e.previewOverlayBoxColor,
          S = e.previewOverlayBoxImage,
          I = e.previewOverlayBoxImageSize,
          x = e.renderOverlay,
          j = e.cursorStyle,
          T = e.cursorStyleActive,
          M = e.onLoadRefresh,
          A = e.onImageLoad,
          L = e.onLargeImageLoad,
          C = 100 / m,
          _ = 0,
          E = 0,
          D = 0;
        y.current &&
          ((D = y.current.getBoundingClientRect().width),
          "bottom" === v
            ? ((_ = u.height * (C - 1)),
              (y.current.style.paddingTop = "".concat(_, "px")))
            : (y.current.style.paddingBottom = "".concat(
                u.height * (C - 1),
                "px",
              )),
          "right" === y.current.style.textAlign && (E = u.width * (C - 1)));
        var B = { width: u.width, height: u.height },
          k = {
            width: Math.floor(B.width * (B.width / c.width) * C),
            height: Math.floor(B.height * (B.height / c.height) * C),
          };
        isNaN(k.width) && ((k.width = 0), (k.height = 0));
        var R = { x: 0, y: 0 },
          z = s({}, o),
          N = { x: k.width / 2, y: k.height / 2 };
        (z.x = Math.max(N.x, z.x)),
          (z.x = Math.min(B.width - N.x, z.x)),
          (z.y = Math.max(N.y, z.y)),
          (z.y = Math.min(B.height - N.y, z.y)),
          ((R = s({}, z)).x = n.default.convertRange(
            N.x,
            B.width - N.x,
            -1 * c.width + D,
            0,
            R.x,
          )),
          (R.y = n.default.convertRange(
            N.y,
            B.height - N.y,
            -1 * c.height + B.height * C,
            0,
            R.y,
          )),
          (R.x = n.default.invertNumber(-1 * c.width + D, 0, R.x)),
          (R.y = n.default.invertNumber(-1 * c.height + B.height * C, 0, R.y)),
          (k.left = Math.floor(z.x - N.x) || 0),
          (k.right = Math.floor(z.x + N.x) || 0),
          (k.top = Math.floor(z.y - N.y) || 0),
          (k.bottom = Math.floor(z.y + N.y) || 0);
        var U = k.width < B.width;
        return r.default.createElement(
          "div",
          {
            style: {
              position: "relative",
              cursor: U ? (t ? T : j) : "default",
            },
          },
          r.default.createElement(a.default, {
            style: {
              width: "100%",
              display: "block",
              opacity: g,
              visibility: U ? "visible" : "hidden",
            },
            src: f,
            alt: p,
            onImageLoad: function (e) {
              M(), A(e);
            },
            onLoadRefresh: M,
          }),
          r.default.createElement(
            "div",
            {
              style: s(
                s({}, i.default.getZoomContainerStyle(B.width, B.height, !0)),
                {},
                {
                  width: D + "px",
                  height: u.height * C + "px",
                  position: "absolute",
                  left: -E,
                  top: -_,
                  fontSize: "1rem",
                },
              ),
            },
            r.default.createElement(a.default, {
              style: s(
                s({}, i.default.getLargeImageStyle(R.x, R.y, !0)),
                {},
                { visibility: U ? "visible" : "hidden", zIndex: "-1" },
              ),
              src: d || f,
              alt: p,
              ref: h,
              onImageLoad: L,
              onLoadRefresh: M,
            }),
            r.default.createElement("img", {
              src: f,
              alt: p,
              style: { display: U ? "none" : "block", width: "100%" },
            }),
            x ? x(t) : null,
          ),
          r.default.createElement(l.default, {
            previewWidth: k.width,
            previewHeight: k.height,
            previewPosLeft: k.left,
            previewPosRight: k.right,
            previewPosTop: k.top,
            previewPosBottom: k.bottom,
            imageWidth: B.width,
            imageHeight: B.height,
            overlayOpacity: O,
            overlayBoxOpacity: b,
            overlayBackgroundColor: w,
            overlayBoxColor: P,
            overlayBoxImage: S,
            overlayBoxImageSize: I,
            active: U,
          }),
        );
      };
    },
    20965: function (e, t, o) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = s(o(67294)),
        i = s(o(45697)),
        a = s(o(4107)),
        l = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" != typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(o, i, a)
                : (o[i] = e[i]);
            }
          return (o.default = e), t && t.set(e, o), o;
        })(o(81949)),
        u = s(o(56186));
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = function (e) {
        var t = e.imageSrc,
          o = e.largeImageSrc,
          r = e.imageAlt,
          i = e.overlayOpacity,
          a = e.overlayBoxOpacity,
          c = e.overlayBackgroundColor,
          s = e.overlayBoxColor,
          f = e.overlayBoxImage,
          d = e.overlayBoxImageSize,
          p = e.cursorStyle,
          h = e.alwaysInPlace,
          m = e.transitionSpeed,
          y = e.transitionSpeedInPlace,
          v = e.renderOverlay,
          g = e.className,
          O = e.style,
          b = e.onImageLoad,
          w = e.onLargeImageLoad,
          P = e.switchSides,
          S = e.onZoomStart,
          I = e.onZoomEnd,
          x = e.fillAvailableSpace,
          j = e.fillAlignTop,
          T = e.fillGapLeft,
          M = e.fillGapRight,
          A = e.fillGapTop,
          L = e.fillGapBottom,
          C = e.inPlaceMinBreakpoint,
          _ = e.zoomContainerBorder,
          E = e.zoomContainerBoxShadow,
          D = e.mouseActivation,
          B = e.touchActivation;
        return n.default.createElement(
          l.default,
          {
            style: O,
            className: g,
            touchActivationMethod: B,
            mouseActivationMethod: D,
            onActivate: S,
            onDeactivate: I,
            trackItemPosition: !0,
            linkItemToActive: !0,
          },
          n.default.createElement(u.default, {
            imageSrc: t,
            largeImageSrc: o,
            imageAlt: r,
            overlayOpacity: i,
            overlayBoxOpacity: a,
            overlayBackgroundColor: c,
            overlayBoxColor: s,
            overlayBoxImage: f,
            overlayBoxImageSize: d,
            alwaysInPlace: h,
            transitionSpeed: m,
            transitionSpeedInPlace: y,
            renderOverlay: v,
            cursorStyle: p,
            onImageLoad: b,
            onLargeImageLoad: w,
            switchSides: P,
            fillAvailableSpace: x,
            fillAlignTop: j,
            fillGapLeft: T,
            fillGapRight: M,
            fillGapTop: A,
            fillGapBottom: L,
            inPlaceMinBreakpoint: C,
            zoomContainerBorder: _,
            zoomContainerBoxShadow: E,
          }),
        );
      };
      (f.propTypes = {
        imageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        largeImageSrc: i.default.oneOfType([
          i.default.string,
          i.default.arrayOf(i.default.string),
        ]),
        imageAlt: i.default.string,
        overlayOpacity: i.default.number,
        overlayBoxOpacity: i.default.number,
        overlayBackgroundColor: i.default.string,
        overlayBoxColor: i.default.string,
        overlayBoxImage: i.default.string,
        overlayBoxImageSize: i.default.string,
        cursorStyle: i.default.string,
        alwaysInPlace: i.default.bool,
        transitionSpeed: i.default.number,
        transitionSpeedInPlace: i.default.number,
        renderOverlay: i.default.func,
        className: i.default.string,
        style: i.default.object,
        onImageLoad: i.default.func,
        onLargeImageLoad: i.default.func,
        fillAvailableSpace: i.default.bool,
        fillAlignTop: i.default.bool,
        fillGapLeft: i.default.number,
        fillGapRight: i.default.number,
        fillGapTop: i.default.number,
        fillGapBottom: i.default.number,
        inPlaceMinBreakpoint: i.default.number,
        zoomContainerBorder: i.default.string,
        zoomContainerBoxShadow: i.default.string,
        mouseActivation: i.default.string,
        touchActivation: i.default.string,
      }),
        (f.defaultProps = {
          imageSrc: "",
          largeImageSrc: "",
          imageAlt: "",
          overlayOpacity: 0.5,
          overlayBoxOpacity: 0.8,
          overlayBackgroundColor: "#000",
          overlayBoxColor: "#fff",
          overlayBoxImage: "",
          overlayBoxImageSize: "",
          cursorStyle: "crosshair",
          transitionSpeed: 0.4,
          transitionSpeedInPlace: 0.4,
          onImageLoad: a.default.noop,
          onLargeImageLoad: a.default.noop,
          fillAvailableSpace: !0,
          fillAlignTop: !1,
          fillGapLeft: 0,
          fillGapRight: 0,
          fillGapTop: 0,
          fillGapBottom: 0,
          inPlaceMinBreakpoint: 0,
          zoomContainerBorder: "none",
          zoomContainerBoxShadow: "none",
          mouseActivation: l.MOUSE_ACTIVATION.HOVER,
          touchActivation: l.TOUCH_ACTIVATION.TOUCH,
        }),
        (t.default = f);
    },
    56186: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = u(o(67294)),
        n = u(o(4107)),
        i = u(o(3803)),
        a = u(o(40645)),
        l = u(o(7008));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : c(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      t.default = function (e) {
        var t = e.itemPosition,
          o = e.active,
          u = e.elementDimensions,
          c = e.elementOffset,
          f = e.itemDimensions,
          d = e.imageSrc,
          p = e.largeImageSrc,
          h = e.imageAlt,
          m = e.itemRef,
          y = e.overlayOpacity,
          v = e.overlayBoxOpacity,
          g = e.overlayBackgroundColor,
          O = e.overlayBoxColor,
          b = e.overlayBoxImage,
          w = e.overlayBoxImageSize,
          P = e.alwaysInPlace,
          S = e.transitionSpeed,
          I = e.transitionSpeedInPlace,
          x = e.renderOverlay,
          j = e.cursorStyle,
          T = e.onImageLoad,
          M = e.onLargeImageLoad,
          A = e.onLoadRefresh,
          L = e.switchSides,
          C = e.fillAvailableSpace,
          _ = e.fillAlignTop,
          E = e.fillGapLeft,
          D = e.fillGapRight,
          B = e.fillGapTop,
          k = e.fillGapBottom,
          R = e.inPlaceMinBreakpoint,
          z = e.zoomContainerBorder,
          N = e.zoomContainerBoxShadow,
          U = { width: u.width, height: u.height },
          H = {},
          V = 0,
          Y = 0,
          X = 0,
          W = B + k,
          Z = E + D;
        try {
          var G = document.documentElement,
            q = G.clientWidth,
            K = G.clientHeight,
            F = window.innerWidth;
          (V = q), (Y = K), (X = F);
        } catch (e) {}
        var $ = P || X < R;
        if (C && !$) {
          var Q = u.width + c.left;
          if (_)
            (U.height = Math.min(f.height, Y - c.top - W + B)), (U.top = B);
          else {
            U.height = Math.min(f.height, Y - W);
            var J = -c.top + B,
              ee = Y - c.top - (U.height + k);
            U.top = Math.max(J, ee);
          }
          (U.top = Math.min(U.top, 0)),
            (H.top = "".concat(U.top, "px")),
            L
              ? ((U.width = Math.min(f.width, c.left - Z)),
                (U.right = u.width + D),
                (H.right = "".concat(U.right, "px")))
              : ((U.width = Math.min(f.width, V - Q - Z)),
                (U.left = u.width + E),
                (H.left = "".concat(U.left, "px")));
        } else $ = L ? $ || c.left < u.width : $ || 2 * u.width + c.left > V;
        var et = f.width > u.width,
          eo = et && o,
          er = $ ? I : S,
          en = { width: u.width, height: u.height },
          ei = {
            width: Math.floor(en.width * (U.width / f.width)),
            height: Math.floor(en.height * (U.height / f.height)),
          },
          ea = { x: 0, y: 0 },
          el = s({}, t),
          eu = { x: $ ? 0 : ei.width / 2, y: $ ? 0 : ei.height / 2 };
        (el.x = Math.max(eu.x, el.x)),
          (el.x = Math.min(en.width - eu.x, el.x)),
          (el.y = Math.max(eu.y, el.y)),
          (el.y = Math.min(en.height - eu.y, el.y)),
          (ea = s({}, el));
        var ec = $ ? en : U;
        return (
          (ea.x = n.default.convertRange(
            eu.x,
            en.width - eu.x,
            -1 * f.width + ec.width,
            0,
            ea.x,
          )),
          (ea.y = n.default.convertRange(
            eu.y,
            en.height - eu.y,
            -1 * f.height + ec.height,
            0,
            ea.y,
          )),
          (ea.x = n.default.invertNumber(-1 * f.width + ec.width, 0, ea.x)),
          (ea.y = n.default.invertNumber(-1 * f.height + ec.height, 0, ea.y)),
          (ei.left = Math.floor(el.x - eu.x) || 0),
          (ei.right = Math.floor(el.x + eu.x) || 0),
          (ei.top = Math.floor(el.y - eu.y) || 0),
          (ei.bottom = Math.floor(el.y + eu.y) || 0),
          r.default.createElement(
            "div",
            { style: { position: "relative" } },
            r.default.createElement(a.default, {
              style: {
                width: "100%",
                display: "block",
                cursor: et ? j : "default",
              },
              src: d,
              alt: h,
              onImageLoad: T,
              onLoadRefresh: A,
            }),
            r.default.createElement(
              "div",
              {
                style: s(
                  s(
                    s(
                      {},
                      i.default.getZoomContainerStyle(
                        ec.width,
                        ec.height,
                        $,
                        L,
                      ),
                    ),
                    {},
                    {
                      opacity: eo ? "1" : "0",
                      transition: "opacity ".concat(er, "s ease"),
                      zIndex: "100",
                    },
                    H,
                  ),
                  {},
                  { border: z, boxShadow: N },
                ),
              },
              r.default.createElement(a.default, {
                style: i.default.getLargeImageStyle(ea.x, ea.y, !0),
                src: p || d,
                alt: h,
                ref: m,
                onImageLoad: M,
                onLoadRefresh: A,
              }),
            ),
            r.default.createElement(l.default, {
              previewWidth: ei.width,
              previewHeight: ei.height,
              previewPosLeft: ei.left,
              previewPosRight: ei.right,
              previewPosTop: ei.top,
              previewPosBottom: ei.bottom,
              imageWidth: en.width,
              imageHeight: en.height,
              overlayOpacity: y,
              overlayBoxOpacity: v,
              overlayBackgroundColor: g,
              overlayBoxColor: O,
              overlayBoxImage: b,
              overlayBoxImageSize: w,
              active: eo && !$,
              transitionSpeed: er,
            }),
            x ? x(o) : null,
          )
        );
      };
    },
    14047: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "Q7", {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      });
      var r = o(81949),
        n = i(o(20965));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(o(34619)),
        i(o(7656)),
        i(o(34772)),
        i(o(3139)),
        i(o(79851)),
        i(o(61768)),
        r.MOUSE_ACTIVATION.CLICK,
        r.MOUSE_ACTIVATION.DOUBLE_CLICK,
        r.TOUCH_ACTIVATION.TAP,
        r.TOUCH_ACTIVATION.DOUBLE_TAP,
        r.TOUCH_ACTIVATION.LONG_TOUCH;
    },
    3803: function (e, t) {
      "use strict";
      function o(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          getLargeImageStyle: function (e, t, o) {
            return {
              position: "absolute",
              boxSizing: "border-box",
              display: "block",
              top: 0,
              left: 0,
              transform: "translate(".concat(e, "px, ").concat(t, "px)"),
              zIndex: "1",
              visibility: o ? "visible" : "hidden",
              width: "auto",
            };
          },
          getZoomContainerStyle: function (e, t, o, r) {
            var n = {
              position: "absolute",
              boxSizing: "border-box",
              pointerEvents: "none",
              width: "".concat(e, "px"),
              height: "".concat(t, "px"),
              top: "0",
              overflow: "hidden",
            };
            return (
              o
                ? (n.left = "0px")
                : r
                  ? (n.right = "".concat(e, "px"))
                  : (n.left = "".concat(e, "px")),
              n
            );
          },
          getOverlayCenterStyle: function (e, t, r, n, i, a, l, u, c) {
            var s = {};
            return (
              u && (s.backgroundImage = 'url("'.concat(u, '")')),
              c && (s.backgroundSize = c),
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(r), !0).forEach(function (t) {
                        var o, n;
                        (o = e),
                          (n = r[t]),
                          t in o
                            ? Object.defineProperty(o, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (o[t] = n);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r),
                        )
                      : o(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t),
                          );
                        });
                }
                return e;
              })(
                {
                  position: "absolute",
                  width: "".concat(e, "px"),
                  height: "".concat(t, "px"),
                  left: 0,
                  top: 0,
                  boxSizing: "border-box",
                  transform: "translate(".concat(r, "px, ").concat(n, "px)"),
                  border: "1px solid ".concat(l),
                  opacity: i,
                  transition: "opacity ".concat(a, "s ease"),
                  zIndex: "15",
                  pointerEvents: "none",
                },
                s,
              )
            );
          },
          getOverlayTopStyle: function (e, t, o, r, n) {
            return {
              backgroundColor: n,
              position: "absolute",
              boxSizing: "border-box",
              top: 0,
              left: 0,
              width: "".concat(e, "px"),
              height: "".concat(t, "px"),
              zIndex: "10",
              transition: "opacity ".concat(r, "s ease"),
              opacity: o,
              transform: "scale3d(1,1,1)",
              pointerEvents: "none",
            };
          },
          getOverlayLeftStyle: function (e, t, o, r, n, i) {
            return {
              backgroundColor: i,
              position: "absolute",
              boxSizing: "border-box",
              width: "".concat(e, "px"),
              top: "".concat(o, "px"),
              left: 0,
              height: "".concat(t, "px"),
              zIndex: "10",
              transition: "opacity ".concat(n, "s ease"),
              opacity: r,
              transform: "scale3d(1,1,1)",
              pointerEvents: "none",
            };
          },
          getOverlayRightStyle: function (e, t, o, r, n, i) {
            return {
              backgroundColor: i,
              position: "absolute",
              boxSizing: "border-box",
              top: "".concat(o, "px"),
              right: 0,
              width: "".concat(e, "px"),
              height: "".concat(t, "px"),
              zIndex: "10",
              transition: "opacity ".concat(n, "s ease"),
              opacity: r,
              transform: "scale3d(1,1,1)",
              pointerEvents: "none",
            };
          },
          getOverlayBottomStyle: function (e, t, o, r, n, i) {
            return {
              backgroundColor: i,
              position: "absolute",
              boxSizing: "border-box",
              top: "".concat(o, "px"),
              width: "".concat(e, "px"),
              height: "".concat(t, "px"),
              zIndex: "10",
              transition: "opacity ".concat(n, "s ease"),
              opacity: r,
              transform: "scale3d(1,1,1)",
              pointerEvents: "none",
            };
          },
          getMagnifierZoomStyle: function (e, t) {
            return {
              position: "relative",
              opacity: e ? 1 : 0,
              transition: "opacity ".concat(t, "s ease"),
            };
          },
        });
    },
    4107: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          invertNumber: function (e, t, o) {
            return t + e - o;
          },
          convertRange: function (e, t, o, r, n) {
            return ((n - e) / (t - e)) * (r - o) + o || 0;
          },
          convertWidthToPx: function (e, t) {
            if ("number" == typeof e) return e;
            if ("string" != typeof e)
              throw Error(
                "Received: ".concat(e, " - Size must be a number or string"),
              );
            return "%" === e.substr(-1)
              ? t / (100 / Number(e.slice(0, -1)))
              : "px" === e.substr(-2)
                ? Number(e.slice(0, -2))
                : Number(e);
          },
          convertWidthToString: function (e) {
            return "number" == typeof e ? e + "px" : e;
          },
          noop: function () {},
        });
    },
    54570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TOUCH_ACTIVATION = t.MOUSE_ACTIVATION = void 0),
        (t.MOUSE_ACTIVATION = {
          CLICK: "click",
          DOUBLE_CLICK: "doubleClick",
          HOVER: "hover",
          MOUSE_DOWN: "mouseDown",
        }),
        (t.TOUCH_ACTIVATION = {
          DOUBLE_TAP: "doubleTap",
          LONG_TOUCH: "longTouch",
          TAP: "tap",
          TOUCH: "touch",
        });
    },
    81949: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "MOUSE_ACTIVATION", {
          enumerable: !0,
          get: function () {
            return l.MOUSE_ACTIVATION;
          },
        }),
        Object.defineProperty(t, "TOUCH_ACTIVATION", {
          enumerable: !0,
          get: function () {
            return l.TOUCH_ACTIVATION;
          },
        }),
        (t.default = t.defaultState = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== p(e) && "function" != typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, n) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(o, n, i)
                : (o[n] = e[n]);
            }
          return (o.default = e), t && t.set(e, o), o;
        })(o(67294)),
        n = c(o(45697)),
        i = c(o(14210)),
        a = c(o(43538)),
        l = o(54570),
        u = c(o(74125));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function f(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(o), !0).forEach(function (t) {
                g(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : f(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      function p(e) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function h(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var O = {
        active: !1,
        activePosition: { x: 0, y: 0 },
        prevActivePosition: { x: 0, y: 0 },
        passivePosition: { x: 0, y: 0 },
        elementDimensions: { width: 0, height: 0 },
        elementOffset: { left: 0, top: 0 },
        itemPosition: { x: 0, y: 0 },
        itemDimensions: { width: 0, height: 0 },
      };
      t.defaultState = O;
      var b = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && m(e, t);
        })(c, e);
        var t,
          o,
          n,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                o,
                r = v(c);
              if (t) {
                var n = v(this).constructor;
                o = Reflect.construct(r, arguments, n);
              } else o = r.apply(this, arguments);
              return (e = o) && ("object" === p(e) || "function" == typeof e)
                ? e
                : y(this);
            });
        function c() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, c);
          for (var t = arguments.length, o = Array(t), n = 0; n < t; n++)
            o[n] = arguments[n];
          return (
            g(y((e = l.call.apply(l, [this].concat(o)))), "state", O),
            g(y(e), "containerRef", r.default.createRef()),
            g(y(e), "itemRef", r.default.createRef()),
            g(y(e), "mouseDown", !1),
            g(y(e), "touched", !1),
            g(y(e), "justTouched", !1),
            g(y(e), "tapped", !1),
            g(y(e), "tapTimer", null),
            g(y(e), "tapTimedOut", !1),
            g(y(e), "doubleTapTimer", null),
            g(y(e), "doubleTapTimedOut", !1),
            g(y(e), "longTouchTimer", null),
            g(y(e), "longTouchTimedOut", !1),
            g(y(e), "refresh", !0),
            g(y(e), "onLoadRefresh", function () {
              e.refreshPosition();
            }),
            g(y(e), "handleResize", function () {
              e.refreshPosition();
            }),
            e
          );
        }
        return (
          (o = [
            {
              key: "componentDidMount",
              value: function () {
                this.init(), this.refreshPosition();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeMouseEventListeners(),
                  this.removeTouchEventListeners(),
                  this.removeOtherEventListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                e.mouseActivationMethod !== this.props.mouseActivationMethod &&
                  (this.removeMouseEventListeners(),
                  this.setMouseInteractionMethods(),
                  this.addMouseEventListeners()),
                  e.touchActivationMethod !==
                    this.props.touchActivationMethod &&
                    (this.removeTouchEventListeners(),
                    this.setTouchInteractionMethods(),
                    this.addTouchEventListeners());
              },
            },
            {
              key: "init",
              value: function () {
                this.checkPassiveEventSupport(),
                  this.setInputInteractionMethods(),
                  this.addMouseEventListeners(),
                  this.addTouchEventListeners(),
                  this.addOtherEventListeners();
              },
            },
            {
              key: "checkPassiveEventSupport",
              value: function () {
                var e = this;
                this.supportsPassive = !1;
                try {
                  var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      return (e.supportsPassive = !0);
                    },
                  });
                  window.addEventListener("testPassive", null, t),
                    window.removeEventListener("testPassive", null, t);
                } catch (e) {}
              },
            },
            {
              key: "updateState",
              value: function (e, t) {
                var o,
                  r = this,
                  n = this.props.onUpdate;
                if (
                  (e.hasOwnProperty("active") &&
                    (o = e.active
                      ? this.props.onActivate
                      : this.props.onDeactivate),
                  this.props.overrideState)
                ) {
                  n && n(e), o && o(), t && t.call(this);
                  return;
                }
                this.setState(
                  function () {
                    return e;
                  },
                  function () {
                    t && t.call(r), o && o(), n && n(r.getStateClone());
                  },
                );
              },
            },
            {
              key: "getState",
              value: function () {
                return this.props.overrideState
                  ? this.props.overrideState
                  : this.state;
              },
            },
            {
              key: "getStateClone",
              value: function () {
                var e = this.getState(),
                  t = {};
                for (var o in e)
                  "object" === p(e[o]) ? (t[o] = d({}, e[o])) : (t[o] = e[o]);
                return t;
              },
            },
            {
              key: "refreshPosition",
              value: function () {
                var e = this.props,
                  t = e.trackItemPosition,
                  o = e.centerItemOnLoad;
                this.setPosition({ x: 0, y: 0 }, t, !1, o);
              },
            },
            {
              key: "setInputInteractionMethods",
              value: function () {
                this.setMouseInteractionMethods(),
                  this.setTouchInteractionMethods();
              },
            },
            {
              key: "setMouseInteractionMethods",
              value: function () {
                var e = i.default[this.props.mouseActivationMethod];
                for (var t in ((this.mouseHandlers = []), e))
                  this.mouseHandlers.push({
                    event: t.toLowerCase(),
                    handler: e[t].bind(this),
                  });
              },
            },
            {
              key: "setTouchInteractionMethods",
              value: function () {
                var e = a.default[this.props.touchActivationMethod];
                for (var t in ((this.touchHandlers = []), e))
                  this.touchHandlers.push({
                    event: t.toLowerCase(),
                    handler: e[t].bind(this),
                  });
              },
            },
            {
              key: "setPosition",
              value: function (e, t, o, r) {
                if (!this.props.minUpdateSpeedInMs || this.refresh) {
                  this.refresh = !1;
                  var n = this.containerRef.current.getBoundingClientRect(),
                    i = n.left,
                    a = n.top,
                    l = n.width,
                    c = n.height,
                    s = this.props,
                    f = s.trackItemPosition,
                    p = s.trackPassivePosition,
                    h = s.trackPreviousPosition,
                    m = s.centerItemOnActivate,
                    y = s.centerItemOnActivatePos,
                    v = s.linkItemToActive,
                    g = s.itemMovementMultiplier,
                    O = s.alignItemOnActivePos,
                    b = s.itemPositionMinX,
                    w = s.itemPositionMaxX,
                    P = s.itemPositionMinY,
                    S = s.itemPositionMaxY,
                    I = s.itemPositionLimitBySize,
                    x = s.itemPositionLimitInternal,
                    j = this.getState(),
                    T = j.activePosition,
                    M = j.itemPosition,
                    A = {
                      elementDimensions: { width: l, height: c },
                      elementOffset: { left: i, top: a },
                      activePosition: {
                        x: Math.min(Math.max(0, e.x - i), l),
                        y: Math.min(Math.max(0, e.y - a), c),
                      },
                    };
                  if ((o && (A.active = !0), this.itemRef.current)) {
                    var L = this.itemRef.current.getBoundingClientRect();
                    A.itemDimensions = { width: L.width, height: L.height };
                  }
                  (h || f) && (A.prevActivePosition = { x: T.x, y: T.y }),
                    p && (A.passivePosition = { x: e.x - i, y: e.y - a });
                  var C = u.default.createAdjustedLimits(
                    b,
                    w,
                    P,
                    S,
                    A.elementDimensions,
                    A.itemDimensions,
                    I,
                    x,
                  );
                  if (r || (o && m)) {
                    var _ = (C.maxX + C.minX) / 2,
                      E = (C.maxY + C.minY) / 2;
                    return (
                      (A.itemPosition = { x: _ || 0, y: E || 0 }),
                      this.updateState(A, this.startRefreshTimer)
                    );
                  }
                  var D = !0;
                  f && v
                    ? (A.itemPosition = d({}, A.activePosition))
                    : f && O
                      ? (A.itemPosition = u.default.alignItemOnPosition(
                          A.elementDimensions,
                          A.itemDimensions,
                          A.activePosition,
                        ))
                      : f && o && y
                        ? (A.itemPosition = u.default.centerItemOnPosition(
                            A.elementDimensions,
                            A.itemDimensions,
                            A.activePosition,
                          ))
                        : f && t
                          ? (A.itemPosition = u.default.calculateItemPosition(
                              M,
                              A.prevActivePosition,
                              A.activePosition,
                              g,
                            ))
                          : (D = !1),
                    D &&
                      (A.itemPosition = u.default.limitPosition(
                        C.minX,
                        C.maxX,
                        C.minY,
                        C.maxY,
                        A.itemPosition,
                      )),
                    this.updateState(A, this.startRefreshTimer);
                }
              },
            },
            {
              key: "setPassivePosition",
              value: function (e) {
                if (this.props.trackPassivePosition) {
                  var t = this.containerRef.current.getBoundingClientRect(),
                    o = t.left,
                    r = t.top;
                  this.updateState({
                    passivePosition: { x: e.x - o, y: e.y - r },
                  });
                }
              },
            },
            {
              key: "toggleActive",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { x: 0, y: 0 };
                this.getState().active ? this.deactivate() : this.activate(e);
              },
            },
            {
              key: "activate",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { x: 0, y: 0 };
                this.setPosition(e, !1, !0);
              },
            },
            {
              key: "deactivate",
              value: function () {
                this.updateState({ active: !1 });
              },
            },
            {
              key: "startRefreshTimer",
              value: function () {
                var e = this;
                this.props.minUpdateSpeedInMs &&
                  setTimeout(function () {
                    e.refresh = !0;
                  }, this.props.minUpdateSpeedInMs);
              },
            },
            {
              key: "startTapTimer",
              value: function () {
                var e = this;
                this.tapTimer = setTimeout(function () {
                  e.tapTimedOut = !0;
                }, this.props.tapDurationInMs);
              },
            },
            {
              key: "startDoubleTapTimer",
              value: function () {
                var e = this;
                this.doubleTapTimer = setTimeout(function () {
                  e.doubleTapTimedOut = !0;
                }, this.props.doubleTapDurationInMs);
              },
            },
            {
              key: "startLongTouchTimer",
              value: function (e) {
                var t = this;
                this.longTouchTimer = setTimeout(function () {
                  t.touched && t.toggleActive(e);
                }, this.props.longTouchDurationInMs);
              },
            },
            {
              key: "addMouseEventListeners",
              value: function () {
                var e = this;
                this.mouseHandlers.forEach(function (t) {
                  e.containerRef.current.addEventListener(t.event, t.handler);
                });
              },
            },
            {
              key: "addTouchEventListeners",
              value: function () {
                var e = this;
                this.touchHandlers.forEach(function (t) {
                  e.containerRef.current.addEventListener(
                    t.event,
                    t.handler,
                    !!e.supportsPassive && { passive: !1 },
                  );
                });
              },
            },
            {
              key: "removeMouseEventListeners",
              value: function () {
                var e = this;
                this.mouseHandlers.forEach(function (t) {
                  e.containerRef.current.removeEventListener(
                    t.event,
                    t.handler,
                  );
                });
              },
            },
            {
              key: "removeTouchEventListeners",
              value: function () {
                var e = this;
                this.touchHandlers.forEach(function (t) {
                  e.containerRef.current.removeEventListener(
                    t.event,
                    t.handler,
                    !!e.supportsPassive && { passive: !1 },
                  );
                });
              },
            },
            {
              key: "addOtherEventListeners",
              value: function () {
                window.addEventListener("resize", this.handleResize),
                  window.addEventListener("load", this.onLoadRefresh);
              },
            },
            {
              key: "removeOtherEventListeners",
              value: function () {
                window.removeEventListener("resize", this.handleResize),
                  window.removeEventListener("load", this.onLoadRefresh);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.style,
                  o = e.className,
                  n = e.children,
                  i = e.cursorStyle,
                  a = e.cursorStyleActive,
                  l = this.getState().active,
                  c = d(
                    d({}, t),
                    {},
                    {
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                      userSelect: "none",
                      cursor: (l && a) || i,
                    },
                  );
                return r.default.createElement(
                  "div",
                  { style: c, className: o, ref: this.containerRef },
                  u.default.decorateChildren(
                    n,
                    d(
                      d({}, this.getState()),
                      {},
                      {
                        itemRef: this.itemRef,
                        onLoadRefresh: this.onLoadRefresh,
                      },
                    ),
                  ),
                );
              },
            },
          ]),
          h(c.prototype, o),
          n && h(c, n),
          c
        );
      })(r.Component);
      g(b, "propTypes", {
        mouseActivationMethod: n.default.oneOf([
          l.MOUSE_ACTIVATION.CLICK,
          l.MOUSE_ACTIVATION.DOUBLE_CLICK,
          l.MOUSE_ACTIVATION.HOVER,
          l.MOUSE_ACTIVATION.MOUSE_DOWN,
        ]).isRequired,
        touchActivationMethod: n.default.oneOf([
          l.TOUCH_ACTIVATION.DOUBLE_TAP,
          l.TOUCH_ACTIVATION.LONG_TOUCH,
          l.TOUCH_ACTIVATION.TAP,
          l.TOUCH_ACTIVATION.TOUCH,
        ]).isRequired,
        tapDurationInMs: n.default.number,
        doubleTapDurationInMs: n.default.number,
        longTouchDurationInMs: n.default.number,
        longTouchMoveLimit: n.default.number,
        clickMoveLimit: n.default.number,
        itemPositionMinX: n.default.number,
        itemPositionMaxX: n.default.number,
        itemPositionMinY: n.default.number,
        itemPositionMaxY: n.default.number,
        itemPositionLimitBySize: n.default.bool,
        itemPositionLimitInternal: n.default.bool,
        linkItemToActive: n.default.bool,
        className: n.default.string,
        style: n.default.object,
        minUpdateSpeedInMs: n.default.number,
        trackPassivePosition: n.default.bool,
        trackItemPosition: n.default.bool,
        trackPreviousPosition: n.default.bool,
        centerItemOnActivate: n.default.bool,
        centerItemOnActivatePos: n.default.bool,
        centerItemOnLoad: n.default.bool,
        alignItemOnActivePos: n.default.bool,
        itemMovementMultiplier: n.default.number,
        cursorStyle: n.default.string,
        cursorStyleActive: n.default.string,
        onUpdate: n.default.func,
        overrideState: n.default.object,
        mouseDownAllowOutside: n.default.bool,
        onActivate: n.default.func,
        onDeactivate: n.default.func,
      }),
        g(b, "defaultProps", {
          tapDurationInMs: 180,
          doubleTapDurationInMs: 400,
          longTouchDurationInMs: 500,
          longTouchMoveLimit: 5,
          clickMoveLimit: 5,
          style: {},
          minUpdateSpeedInMs: 1,
          itemMovementMultiplier: 1,
          cursorStyle: "crosshair",
          mouseActivationMethod: l.MOUSE_ACTIVATION.CLICK,
          touchActivationMethod: l.TOUCH_ACTIVATION.TAP,
          mouseDownAllowOutside: !1,
        }),
        (t.default = b);
    },
    4639: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        n = {
          mouseDown: function (e) {
            (this.mouseDown = !0),
              (this.clickMoveStartRef = e.clientX + e.clientY);
          },
          mouseUp: function (e) {
            if (this.mouseDown) {
              this.mouseDown = !1;
              var t = { x: e.clientX, y: e.clientY },
                o = t.x + t.y;
              Math.abs(this.clickMoveStartRef - o) <
                this.props.clickMoveLimit && this.toggleActive(t);
            }
          },
          mouseMove: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            if (!this.getState().active) return this.setPassivePosition(t);
            this.setPosition(t, this.mouseDown);
          },
          mouseLeave: function () {
            this.mouseDown = !1;
          },
          dragStart: ((r = o(74125)) && r.__esModule ? r : { default: r })
            .default.preventDefault,
        };
      t.default = n;
    },
    65360: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        n = {
          mouseDown: function () {
            this.mouseDown = !0;
          },
          mouseUp: function () {
            this.mouseDown = !1;
          },
          dblClick: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            this.toggleActive(t);
          },
          mouseMove: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            if (!this.getState().active) return this.setPassivePosition(t);
            this.setPosition(t, this.mouseDown);
          },
          mouseLeave: function () {
            this.mouseDown = !1;
          },
          dragStart: ((r = o(74125)) && r.__esModule ? r : { default: r })
            .default.preventDefault,
        };
      t.default = n;
    },
    7757: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        n = {
          mouseDown: function () {
            this.mouseDown = !0;
          },
          mouseUp: function () {
            this.mouseDown = !1;
          },
          mouseMove: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            if (!this.getState().active) return this.activate(t);
            this.setPosition(t, this.mouseDown);
          },
          mouseEnter: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            this.activate(t);
          },
          mouseLeave: function () {
            this.deactivate(), (this.mouseDown = !1);
          },
          dragStart: ((r = o(74125)) && r.__esModule ? r : { default: r })
            .default.preventDefault,
        };
      t.default = n;
    },
    14210: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(4639)),
        n = l(o(65360)),
        i = l(o(7757)),
        a = l(o(13873));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = {
        click: r.default,
        doubleClick: n.default,
        hover: i.default,
        mouseDown: a.default,
      };
      t.default = u;
    },
    13873: function (e, t, o) {
      "use strict";
      function r(e) {
        this.mouseHandlers
          .filter(function (e) {
            return "mouseup" === e.event || "mousemove" === e.event;
          })
          .forEach(function (t) {
            var o = t.event,
              r = t.handler;
            e
              ? window.addEventListener(o, r)
              : window.removeEventListener(o, r);
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n,
        i = {
          mouseDown: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            this.activate(t);
          },
          mouseUp: function () {
            this.deactivate(), this.mouseOutside && r.call(this);
          },
          mouseMove: function (e) {
            var t = { x: e.clientX, y: e.clientY };
            if (!this.getState().active) return this.setPassivePosition(t);
            this.setPosition(t, !0);
          },
          mouseLeave: function () {
            if (this.getState().active) {
              if (!this.props.mouseDownAllowOutside) return this.deactivate();
              (this.mouseOutside = !0), r.call(this, !0);
            }
          },
          mouseEnter: function () {
            this.mouseOutside && ((this.mouseOutside = !1), r.call(this));
          },
          dragStart: ((n = o(74125)) && n.__esModule ? n : { default: n })
            .default.preventDefault,
        };
      t.default = i;
    },
    57617: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          touchStart: function () {
            (this.touched = !0), (this.justTouched = !0), this.startTapTimer();
          },
          touchEnd: function (e) {
            if (
              (e.cancelable && e.preventDefault(),
              (this.touched = !1),
              (this.justTouched = !1),
              this.tapTimedOut)
            ) {
              this.tapTimedOut = !1;
              return;
            }
            if (
              (clearTimeout(this.tapTimer),
              this.tapped && !this.doubleTapTimedOut)
            ) {
              clearTimeout(this.doubleTapTimer);
              var t = e.changedTouches[0],
                o = { x: t.clientX, y: t.clientY };
              this.toggleActive(o), (this.tapped = !1);
              return;
            }
            (this.tapTimedOut = !1),
              (this.doubleTapTimedOut = !1),
              (this.tapped = !0),
              this.startDoubleTapTimer();
          },
          touchMove: function (e) {
            if (this.getState().active) {
              e.cancelable && e.preventDefault();
              var t = e.touches[0],
                o = { x: t.clientX, y: t.clientY };
              this.setPosition(o, this.touched && !this.justTouched),
                (this.justTouched = !1);
            }
          },
          touchCancel: function () {
            this.deactivate();
          },
        });
    },
    43538: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(57617)),
        n = l(o(50584)),
        i = l(o(46493)),
        a = l(o(94091));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = {
        doubleTap: r.default,
        longTouch: n.default,
        tap: i.default,
        touch: a.default,
      };
      t.default = u;
    },
    50584: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          touchStart: function (e) {
            (this.touched = !0),
              (this.justTouched = !0),
              clearTimeout(this.longTouchTimer);
            var t = e.touches[0],
              o = { x: t.clientX, y: t.clientY };
            (this.longTouchStartRef = o.x + o.y), this.startLongTouchTimer(o);
          },
          touchEnd: function (e) {
            e.cancelable && e.preventDefault(),
              (this.touched = !1),
              (this.justTouched = !1);
          },
          touchMove: function (e) {
            var t = e.touches[0],
              o = { x: t.clientX, y: t.clientY },
              r = o.x + o.y;
            Math.abs(this.longTouchStartRef - r) >
              this.props.longTouchMoveLimit &&
              clearTimeout(this.longTouchTimer),
              this.getState().active &&
                (e.cancelable && e.preventDefault(),
                this.setPosition(o, this.touched && !this.justTouched),
                (this.justTouched = !1));
          },
          touchCancel: function () {
            this.deactivate();
          },
        });
    },
    46493: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          touchStart: function () {
            (this.touched = !0), (this.justTouched = !0), this.startTapTimer();
          },
          touchEnd: function (e) {
            if (
              (e.cancelable && e.preventDefault(),
              (this.touched = !1),
              (this.justTouched = !1),
              this.tapTimedOut)
            ) {
              this.tapTimedOut = !1;
              return;
            }
            clearTimeout(this.tapTimer);
            var t = e.changedTouches[0],
              o = { x: t.clientX, y: t.clientY };
            this.toggleActive(o), (this.tapTimedOut = !1);
          },
          touchMove: function (e) {
            if (this.getState().active) {
              e.cancelable && e.preventDefault();
              var t = e.touches[0],
                o = { x: t.clientX, y: t.clientY };
              this.setPosition(o, this.touched && !this.justTouched),
                (this.justTouched = !1);
            }
          },
          touchCancel: function () {
            this.deactivate();
          },
        });
    },
    94091: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          touchStart: function (e) {
            (this.touched = !0), (this.justTouched = !0);
            var t = e.touches[0],
              o = { x: t.clientX, y: t.clientY };
            this.activate(o);
          },
          touchEnd: function (e) {
            e.cancelable && e.preventDefault(),
              (this.touched = !1),
              (this.justTouched = !1),
              this.deactivate();
          },
          touchMove: function (e) {
            if (this.getState().active) {
              e.cancelable && e.preventDefault();
              var t = e.touches[0],
                o = { x: t.clientX, y: t.clientY };
              this.setPosition(o, this.touched && !this.justTouched),
                (this.justTouched = !1);
            }
          },
          touchCancel: function () {
            this.deactivate();
          },
        });
    },
    74125: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(67294);
      function n(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(o), !0).forEach(function (t) {
                var r, n;
                (r = e),
                  (n = o[t]),
                  t in r
                    ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : n(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }
      function a(e, t, o, r, n) {
        return ((n - e) / (t - e)) * (r - o) + o;
      }
      function l() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = arguments.length > 2 ? arguments[2] : void 0,
          r = e.width,
          n = -(t.width || 0) + e.width,
          i = e.height,
          l = -(t.height || 0) + e.height;
        return { x: a(0, r, 0, n, o.x), y: a(0, i, 0, l, o.y) };
      }
      t.default = {
        decorateChildren: function (e, t) {
          return r.Children.map(e, function (e) {
            return e && "function" == typeof e.type
              ? (0, r.cloneElement)(e, t)
              : e;
          });
        },
        preventDefault: function (e) {
          e.preventDefault();
        },
        convertRange: a,
        limitPosition: function (e, t, o, r) {
          var n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {},
            a = i({}, n);
          return (
            void 0 !== e && a.x < e
              ? (a.x = e)
              : void 0 !== t && a.x > t && (a.x = t),
            void 0 !== o && a.y < o
              ? (a.y = o)
              : void 0 !== r && a.y > r && (a.y = r),
            a
          );
        },
        createAdjustedLimits: function (e, t, o, r) {
          var n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {},
            i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            a = arguments.length > 6 ? arguments[6] : void 0,
            l = arguments.length > 7 ? arguments[7] : void 0,
            u = { minX: e, maxX: t, minY: o, maxY: r };
          return (
            u.maxX < 0 && (u.maxX = n.width + u.maxX),
            u.maxY < 0 && (u.maxY = n.height + u.maxY),
            a &&
              (l
                ? ((u.minX = 0),
                  (u.minY = 0),
                  (u.maxX = n.width - i.width),
                  (u.maxY = n.height - i.height),
                  (i.width > n.width || i.height > n.height) &&
                    ((u.maxX = 0), (u.maxY = 0)))
                : (i.width || i.height) &&
                  ((u.maxX = 0),
                  (u.maxY = 0),
                  (u.minX = -i.width + n.width),
                  (u.minY = -i.height + n.height),
                  (i.width < n.width || i.height < n.height) &&
                    ((u.minX = 0), (u.minY = 0)))),
            u
          );
        },
        calculateItemPosition: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            n = i({}, e),
            a = (o.x - t.x) * r,
            l = (o.y - t.y) * r;
          return (n.x += a), (n.y += l), n;
        },
        alignItemOnPosition: l,
        centerItemOnPosition: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = arguments.length > 2 ? arguments[2] : void 0,
            r = l(e, t, o);
          return (r.x += e.width / 2 - o.x), (r.y += e.height / 2 - o.y), r;
        },
      };
    },
  },
]);
//# sourceMappingURL=4047.c9d095071de2e603.js.map
