"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6461],
  {
    56461: function (e, r, a) {
      a.r(r);
      var t = a(85893),
        n = a(67294),
        o = a(53495);
      r.default = (0, n.memo)(function (e) {
        var r = e.typeHotspot,
          a = e.bgColorDefault,
          s = e.iconColorDefault,
          u = (0, n.useMemo)(
            function () {
              switch (r) {
                case "point":
                  return "map-marker-alt";
                case "article":
                  return "newspaper";
                case "link":
                  return "link";
                case "sound":
                  return "waveform";
                case "video":
                  return "video";
                case "image":
                  return "images";
                case "product":
                  return "tshirt";
                default:
                  return "";
              }
            },
            [r],
          );
        return (0, t.jsx)(o.BT, {
          bgColor: a,
          iconColor: s,
          children: (0, t.jsx)("i", {
            "aria-hidden": !0,
            className: "fas fa-".concat(u),
          }),
        });
      });
    },
  },
]);
//# sourceMappingURL=6461.d2294557427cc540.js.map
