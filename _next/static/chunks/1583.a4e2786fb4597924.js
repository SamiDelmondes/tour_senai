"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1583, 2704],
  {
    82704: function (n, e, i) {
      i.r(e),
        i.d(e, {
          LoadingContainer: function () {
            return u;
          },
          default: function () {
            return h;
          },
        });
      var t = i(85893),
        a = i(67294),
        o = i(50888),
        r = i(11382),
        d = i(7297);
      function l() {
        var n = (0, d.Z)([
          "\n  width: 100%;\n  height: 100%;\n  .ant-spin {\n    color: #d1005c;\n    &-container {\n      width: 100%;\n      height: 100%;\n    }\n    &-nested-loading {\n      width: 100%;\n      height: 100%;\n      > div > .ant-spin {\n        width: 100%;\n        height: 100%;\n        max-height: 100%;\n      }\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      var c = i(19521).ZP.div.withConfig({
          displayName: "styled__LoadingContainerWrapper",
          componentId: "Panoee__sc-25029517-0",
        })(l()),
        s = (0, t.jsx)(o.Z, { style: { fontSize: 24 }, spin: !0 }),
        u = (0, a.memo)(function (n) {
          var e = n.loading,
            i = n.description,
            a = n.children;
          return (0, t.jsx)(c, {
            children: (0, t.jsx)(r.Z, {
              indicator: s,
              tip: void 0 === i ? "" : i,
              spinning: void 0 !== e && e,
              children: a,
            }),
          });
        }),
        h = u;
    },
    11583: function (n, e, i) {
      i.r(e);
      var t = i(828),
        a = i(85893),
        o = i(67294),
        r = i(5152),
        d = i.n(r),
        l = i(5239),
        c = i(82704),
        s = i(95898),
        u = d()(
          function () {
            return Promise.all([
              i.e(5127),
              i.e(1649),
              i.e(1276),
              i.e(1577),
              i.e(3088),
            ]).then(i.bind(i, 36490));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [36490];
              },
            },
          },
        ),
        h = d()(
          function () {
            return Promise.all([
              i.e(1577),
              i.e(7040),
              i.e(4222),
              i.e(2830),
            ]).then(i.bind(i, 37871));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37871];
              },
            },
          },
        );
      e.default = (0, o.memo)(function (n) {
        var e = n.visible,
          i = n.onCancel,
          r = n.onCreateCommentScene,
          d = (0, o.useRef)(null),
          f = (0, t.Z)((0, l.yG)("loading"), 1)[0],
          m = (0, t.Z)((0, l.yG)("krpanoRef"), 1)[0],
          p = (0, o.useCallback)(
            function (n) {
              return r(n, m);
            },
            [m, r],
          );
        return (0, a.jsx)(h, {
          visible: e,
          onCancel: i,
          maskClosable: !1,
          centered: !0,
          width: "500px",
          bodyStyle: { maxWidth: "500px", width: "100%" },
          hiddenCloseButton: !0,
          children: (0, a.jsx)(c.default, {
            loading: f,
            children: (0, a.jsxs)(s.Ck, {
              ref: d,
              children: [
                (0, a.jsx)("i", {
                  "aria-hidden": !0,
                  className: "fal fa-times --icon-close",
                  onClick: i,
                }),
                (0, a.jsx)("div", {
                  className: "header",
                  children: (0, a.jsx)("div", {
                    className: "title",
                    children: "New Comment",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "popover",
                  children: (0, a.jsx)(u, {
                    initValue: "",
                    isShowBtnReset: !0,
                    onCancel: function () {},
                    isShowBtnCancel: !1,
                    onSubmit: p,
                  }),
                }),
              ],
            }),
          }),
        });
      });
    },
  },
]);
//# sourceMappingURL=1583.a4e2786fb4597924.js.map
