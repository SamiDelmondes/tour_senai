"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6163],
  {
    86163: function (e, l, a) {
      a.r(l);
      var n = a(85893),
        t = a(67294),
        i = a(74936),
        o = a(57295),
        r = (0, t.memo)(function (e) {
          var l = e.listScene,
            a = e.className,
            t = e.value,
            r = e.onChange;
          return (0, n.jsx)(i.Z, {
            value: t,
            bordered: !1,
            onChange: r,
            showSearch: !0,
            placeholder: "Select scene",
            optionFilterProp: "label",
            optionLabelProp: "label",
            filterOption: function (e, l) {
              return e.toLowerCase()
                ? l.label && l.label.toLowerCase().indexOf(e.toLowerCase()) >= 0
                : l.label.toLowerCase().indexOf(e.toLowerCase()) >= 0;
            },
            className: "".concat(a || ""),
            children: l.map(function (e) {
              var l, a;
              return (0, n.jsx)(
                i.Z.Option,
                {
                  value: e.id,
                  label: e.title,
                  children: (0, n.jsxs)(o.gn, {
                    children: [
                      (0, n.jsx)("img", {
                        src:
                          (null === (l = e.media) || void 0 === l
                            ? void 0
                            : l.src_thumb) ||
                          (null === (a = e.media) || void 0 === a
                            ? void 0
                            : a.src_preview) ||
                          "",
                        alt: e.title,
                      }),
                      (0, n.jsx)("span", {
                        className: "text-ellipsis",
                        children: e.title,
                      }),
                    ],
                  }),
                },
                e.id,
              );
            }),
          });
        });
      l.default = r;
    },
  },
]);
//# sourceMappingURL=6163.8492e760da1d645d.js.map
