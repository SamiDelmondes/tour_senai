"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6592],
  {
    4173: function (e, n, t) {
      t.d(n, {
        BR: function () {
          return v;
        },
        ri: function () {
          return u;
        },
      });
      var c = t(87462),
        i = t(4942),
        a = t(94184),
        o = t.n(a),
        r = t(50344),
        l = t(67294),
        s = t(53124),
        d = function (e, n) {
          var t = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              0 > n.indexOf(c) &&
              (t[c] = e[c]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, c = Object.getOwnPropertySymbols(e);
              i < c.length;
              i++
            )
              0 > n.indexOf(c[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, c[i]) &&
                (t[c[i]] = e[c[i]]);
          return t;
        },
        m = l.createContext(null),
        u = function (e, n) {
          var t = l.useContext(m),
            c = l.useMemo(
              function () {
                if (!t) return "";
                var c,
                  a = t.compactDirection,
                  r = t.isFirstItem,
                  l = t.isLastItem,
                  s = "vertical" === a ? "-vertical-" : "-";
                return o()(
                  ((c = {}),
                  (0, i.Z)(c, "".concat(e, "-compact").concat(s, "item"), !0),
                  (0, i.Z)(
                    c,
                    "".concat(e, "-compact").concat(s, "first-item"),
                    r,
                  ),
                  (0, i.Z)(
                    c,
                    "".concat(e, "-compact").concat(s, "last-item"),
                    l,
                  ),
                  (0, i.Z)(
                    c,
                    "".concat(e, "-compact").concat(s, "item-rtl"),
                    "rtl" === n,
                  ),
                  c),
                );
              },
              [e, n, t],
            );
          return {
            compactSize: null == t ? void 0 : t.compactSize,
            compactDirection: null == t ? void 0 : t.compactDirection,
            compactItemClassnames: c,
          };
        },
        v = function (e) {
          var n = e.children;
          return l.createElement(m.Provider, { value: null }, n);
        },
        f = function (e) {
          var n = e.children,
            t = d(e, ["children"]);
          return l.createElement(m.Provider, { value: t }, n);
        };
      n.ZP = function (e) {
        var n,
          t = l.useContext(s.E_),
          a = t.getPrefixCls,
          u = t.direction,
          v = e.size,
          p = void 0 === v ? "middle" : v,
          h = e.direction,
          b = e.block,
          x = e.prefixCls,
          C = e.className,
          j = e.children,
          k = d(e, [
            "size",
            "direction",
            "block",
            "prefixCls",
            "className",
            "children",
          ]),
          S = a("space-compact", x),
          Z = o()(
            S,
            ((n = {}),
            (0, i.Z)(n, "".concat(S, "-rtl"), "rtl" === u),
            (0, i.Z)(n, "".concat(S, "-block"), b),
            (0, i.Z)(n, "".concat(S, "-vertical"), "vertical" === h),
            n),
            C,
          ),
          y = l.useContext(m),
          N = (0, r.Z)(j),
          w = l.useMemo(
            function () {
              return N.map(function (e, n) {
                var t = (e && e.key) || "".concat(S, "-item-").concat(n);
                return l.createElement(
                  f,
                  {
                    key: t,
                    compactSize: p,
                    compactDirection: h,
                    isFirstItem:
                      0 === n && (!y || (null == y ? void 0 : y.isFirstItem)),
                    isLastItem:
                      n === N.length - 1 &&
                      (!y || (null == y ? void 0 : y.isLastItem)),
                  },
                  e,
                );
              });
            },
            [p, N, y],
          );
        return 0 === N.length
          ? null
          : l.createElement("div", (0, c.Z)({ className: Z }, k), w);
      };
    },
    88922: function (e, n, t) {
      t.r(n);
      var c = t(41799),
        i = t(69396),
        a = t(85893),
        o = t(71577),
        r = t(5152),
        l = t.n(r),
        s = t(67294),
        d = t(95898),
        m = void 0,
        u = l()(
          function () {
            return Promise.all([t.e(5127), t.e(7636)]).then(t.bind(t, 36490));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [36490];
              },
            },
          },
        ),
        v = l()(
          function () {
            return t.e(390).then(t.bind(t, 30390));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [30390];
              },
            },
          },
        ),
        f = (0, s.memo)(function (e) {
          var n = e.onClose,
            t = e.commentSceneSelected,
            r = e.onCreateCommentScene,
            l = e.onUpdateCommentScene,
            f = e.onDeleteCommentScene,
            p = (0, s.useCallback)(
              function (e) {
                r({
                  message: e,
                  parent: t.id,
                  scene_id: t.scene,
                  ath: 0,
                  atv: 0,
                });
              },
              [t, r],
            ),
            h = (0, s.useCallback)(
              function (e) {
                f(e, !0);
              },
              [f],
            );
          return (0, a.jsxs)(d.Bo, {
            children: [
              (0, a.jsx)("div", {
                className: "--close",
                onClick: n,
                children: (0, a.jsx)("i", {
                  "aria-hidden": !0,
                  className: "fas fa-times",
                }),
              }),
              (0, a.jsx)("div", {
                className: "--parent",
                children: (0, a.jsx)(v, {
                  onUpdate: l,
                  commentScene: t,
                  onDelete: h,
                  children:
                    !!t.isOwnerTour &&
                    (0, a.jsx)("div", {
                      className: "--action",
                      children: (0, a.jsxs)(o.Z, {
                        disabled: !!t.isResolved,
                        size: "small",
                        onClick: l.bind(
                          m,
                          (0, i.Z)((0, c.Z)({}, t), {
                            ath: void 0,
                            atv: void 0,
                            message: void 0,
                            scene_id: t.scene,
                            isResolved: !0,
                          }),
                        ),
                        children: [
                          (0, a.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fal fa-check",
                          }),
                          (0, a.jsx)("span", {
                            children: t.isResolved
                              ? "Resolved"
                              : "Mark as Resolved",
                          }),
                        ],
                      }),
                    }),
                }),
              }),
              !!t.children.length &&
                (0, a.jsx)("div", {
                  className: "--children hide-scrollbar",
                  children: t.children.map(function (e) {
                    return (0, a.jsx)(
                      v,
                      {
                        layout: "children",
                        commentScene: e,
                        onUpdate: l,
                        onDelete: f,
                      },
                      e.id,
                    );
                  }),
                }),
              (0, a.jsx)("div", {
                className: "--add-new",
                children: (0, a.jsx)(u, {
                  initValue: "",
                  isShowBtnReset: !0,
                  onCancel: function () {},
                  isShowBtnCancel: !1,
                  onSubmit: p,
                }),
              }),
            ],
          });
        });
      n.default = f;
    },
  },
]);
//# sourceMappingURL=6592.926396a98fd6f810.js.map
