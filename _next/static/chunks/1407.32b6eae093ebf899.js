"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1407],
  {
    1407: function (i, o, n) {
      n.r(o);
      var l = n(85893),
        e = n(5152),
        d = n.n(e),
        v = n(67294),
        u = n(53495),
        r = d()(
          function () {
            return n.e(2221).then(n.bind(n, 82221));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82221];
              },
            },
          },
        );
      o.default = (0, v.memo)(function (i) {
        var o = i.hotspot,
          n = i.marker,
          e = i.listScene,
          d = (0, v.useMemo)(
            function () {
              var i, n;
              return (
                ((null === (i = o.config) || void 0 === i
                  ? void 0
                  : null === (n = i.point) || void 0 === n
                    ? void 0
                    : n.target_scene_id) &&
                  e.filter(function (i) {
                    var n, l;
                    return (
                      i.id ===
                      (null == o
                        ? void 0
                        : null === (n = o.config) || void 0 === n
                          ? void 0
                          : null === (l = n.point) || void 0 === l
                            ? void 0
                            : l.target_scene_id)
                    );
                  })[0]) ||
                void 0
              );
            },
            [o, e],
          ),
          t = (0, v.useMemo)(
            function () {
              if ("point" === o.type) {
                var i, n, l, e, v, u, r, t, c, s, _, a;
                return (null === (i = o.config) || void 0 === i
                  ? void 0
                  : null === (n = i.point) || void 0 === n
                    ? void 0
                    : n.preview_box_img_type) === "thumbnail"
                  ? (null == d ? void 0 : d.screenshot) ||
                      (null == d
                        ? void 0
                        : null === (l = d.media) || void 0 === l
                          ? void 0
                          : l.src_thumb) ||
                      (null == d
                        ? void 0
                        : null === (e = d.media) || void 0 === e
                          ? void 0
                          : e.src_preview)
                  : (null === (v = o.config) || void 0 === v
                        ? void 0
                        : null === (u = v.point) || void 0 === u
                          ? void 0
                          : u.preview_box_img_type) === "upload" &&
                      (null === (r = o.config) || void 0 === r
                        ? void 0
                        : null === (t = r.point) || void 0 === t
                          ? void 0
                          : t.preview_box_img_src)
                    ? null == o
                      ? void 0
                      : null === (c = o.config) || void 0 === c
                        ? void 0
                        : null === (s = c.point) || void 0 === s
                          ? void 0
                          : s.preview_box_img_src
                    : (null == d
                        ? void 0
                        : null === (_ = d.media) || void 0 === _
                          ? void 0
                          : _.src_thumb) ||
                      (null == d
                        ? void 0
                        : null === (a = d.media) || void 0 === a
                          ? void 0
                          : a.src_preview);
              }
              return "";
            },
            [d, o],
          );
        return (0, l.jsx)(u.yY, {
          color: (null == n ? void 0 : n.color) || "",
          children: (0, l.jsx)(r, {
            src: (null == n ? void 0 : n.svg_src) || "",
            name: (null == n ? void 0 : n.svg_name) || "",
            children: (0, l.jsx)("img", { src: t || "", alt: "" }),
          }),
        });
      });
    },
  },
]);
//# sourceMappingURL=1407.32b6eae093ebf899.js.map
