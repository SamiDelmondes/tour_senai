"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2473, 7871],
  {
    96159: function (n, e, i) {
      i.d(e, {
        M2: function () {
          return r;
        },
        Tm: function () {
          return a;
        },
        l$: function () {
          return t;
        },
      });
      var o = i(67294),
        t = o.isValidElement;
      function r(n) {
        return n && t(n) && n.type === o.Fragment;
      }
      function a(n, e) {
        return t(n)
          ? o.cloneElement(n, "function" == typeof e ? e(n.props || {}) : e)
          : n;
      }
    },
    37871: function (n, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return g;
          },
        });
      var o = i(41799),
        t = i(85893),
        r = i(67294),
        a = i(67040),
        d = i(7297),
        l = i(19521),
        s = i(38505);
      function c() {
        var n = (0, d.Z)([
          "\n  height: 100%;\n  width: 100%;\n  font-size: 14px;\n  .close {\n    width: 2.5rem;\n    height: 2.5rem;\n    position: fixed;\n    opacity: 1;\n    transition: all 0.15s ease-out;\n    z-index: 3;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #fff;\n    border-radius: 50%;\n    font-size: 24px;\n    top: 4px;\n    right: 4px;\n    box-shadow: 0 2px 16px rgb(0 0 0 / 50%);\n    color: #333;\n    i {\n      line-height: initial;\n    }\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        transform: rotate(90deg);\n      }\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, d.Z)(["\n  position: relative;\n  ", ";\n"]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, d.Z)(["\n  width: 100%;\n  height: 100% !important;\n"]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, d.Z)([""]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      var h = l.ZP.div.withConfig({
          displayName: "styled__DialogWrapper",
          componentId: "Panoee__sc-1d4fb32a-0",
        })(c()),
        v = l.ZP.div.withConfig({
          displayName: "styled__DialogHeaderWrapper",
          componentId: "Panoee__sc-1d4fb32a-1",
        })(u(), s.jD),
        m = l.ZP.div.withConfig({
          displayName: "styled__DialogBodyWrapper",
          componentId: "Panoee__sc-1d4fb32a-2",
        })(f()),
        y = l.ZP.div.withConfig({
          displayName: "styled__DialogFooterWrapper",
          componentId: "Panoee__sc-1d4fb32a-3",
        })(p()),
        g = (0, r.memo)(function (n) {
          var e = n.title,
            i = n.visible,
            r = n.width,
            d = n.centered,
            l = n.className,
            s = n.zIndex,
            c = n.maskClosable,
            u = n.keyboard,
            f = n.isShowMask,
            p = n.hiddenCloseButton,
            g = n.dialogContainerStyle,
            x = n.maskStyle,
            _ = n.bodyStyle,
            b = n.dialogContentStyle,
            k = n.height,
            C = n.children,
            w = n.footer,
            N = n.header,
            Z = n.onOk,
            j = n.onCancel,
            P = n.top;
          return (0, t.jsx)(a.Z, {
            title: void 0 === e ? void 0 : e,
            open: void 0 !== i && i,
            footer: null,
            width: void 0 === r ? "650px" : r,
            centered: void 0 !== d && d,
            className: void 0 === l ? "" : l,
            zIndex: void 0 === s ? 100 : s,
            keyboard: void 0 !== u && u,
            maskClosable: void 0 !== c && c,
            bodyStyle: void 0 === _ ? {} : _,
            onOk: Z,
            onCancel: j,
            style: (0, o.Z)({}, void 0 === g ? {} : g, {
              top: (void 0 === P ? 0 : P) || 0,
            }),
            maskStyle: void 0 === x ? {} : x,
            mask: void 0 === f || f,
            destroyOnClose: !0,
            children: (0, t.jsxs)(h, {
              style: void 0 === b ? {} : b,
              children: [
                !(void 0 !== p && p) &&
                  (0, t.jsx)("div", {
                    className: "close",
                    onClick: j,
                    children: (0, t.jsx)("i", {
                      "aria-hidden": !0,
                      className: "fal fa-times",
                    }),
                  }),
                (0, t.jsx)(v, { children: N }),
                (0, t.jsx)(m, {
                  style: { height: void 0 === k ? "auto" : k },
                  children: C,
                }),
                (0, t.jsx)(y, { children: w }),
              ],
            }),
          });
        });
    },
  },
]);
//# sourceMappingURL=2473.2daca86285ed1014.js.map
