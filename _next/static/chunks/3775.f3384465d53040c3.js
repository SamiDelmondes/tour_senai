"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3775],
  {
    83775: function (a, e, s) {
      s.r(e);
      var t = s(85893),
        r = s(67294),
        n = s(5152),
        c = s.n(n),
        i = s(53495),
        o = c()(
          function () {
            return s.e(2221).then(s.bind(s, 82221));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82221];
              },
            },
          },
        );
      e.default = (0, r.memo)(function (a) {
        var e = a.typeHotspot,
          s = a.bgColorDefault,
          n = a.iconColorDefault,
          c = a.hotspotStyleShape,
          u = (0, r.useMemo)(
            function () {
              switch (null == c ? void 0 : c.shape) {
                case "star":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Star.svg"),
                  });
                case "diamond":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Diamond.svg"),
                  });
                case "certificate":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Certificate.svg"),
                  });
                case "yinyang":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/YinYang.svg"),
                  });
                case "hexagon":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Hexagon.svg"),
                  });
                case "heart":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Heart.svg"),
                  });
                case "triangle":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Triangle.svg"),
                  });
                case "square":
                  return (0, t.jsx)(o, {
                    src: "".concat("/static", "/svg/Square.svg"),
                  });
                default:
                  return "";
              }
            },
            [c],
          ),
          l = (0, r.useMemo)(
            function () {
              var a,
                s =
                  null == c
                    ? void 0
                    : null === (a = c.icon) || void 0 === a
                      ? void 0
                      : a.split("/")[1];
              if (s) return s;
              switch (e) {
                case "point":
                  return "fas fa-map-marker-alt";
                case "article":
                  return "fas fa-newspaper";
                case "link":
                  return "fas fa-link";
                case "sound":
                  return "fas fa-waveform";
                case "video":
                  return "fas fa-video";
                case "image":
                  return "fas fa-images";
                default:
                  return "";
              }
            },
            [c, e],
          );
        return (0, t.jsxs)(i.$d, {
          bgColor: (null == c ? void 0 : c.bg_color) || s,
          iconColor: n,
          isRenderShape: !!(null == c ? void 0 : c.shape),
          className: (null == c ? void 0 : c.shape) || "",
          children: [
            u,
            (0, t.jsx)("span", {
              className: "icon",
              children: (0, t.jsx)("i", { "aria-hidden": !0, className: l }),
            }),
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=3775.f3384465d53040c3.js.map
