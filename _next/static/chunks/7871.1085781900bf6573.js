"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7871],
  {
    37871: function (n, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return g;
          },
        });
      var o = i(41799),
        t = i(85893),
        a = i(67294),
        d = i(67040),
        r = i(7297),
        s = i(19521),
        l = i(38505);
      function c() {
        var n = (0, r.Z)([
          "\n  height: 100%;\n  width: 100%;\n  font-size: 14px;\n  .close {\n    width: 2.5rem;\n    height: 2.5rem;\n    position: fixed;\n    opacity: 1;\n    transition: all 0.15s ease-out;\n    z-index: 3;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #fff;\n    border-radius: 50%;\n    font-size: 24px;\n    top: 4px;\n    right: 4px;\n    box-shadow: 0 2px 16px rgb(0 0 0 / 50%);\n    color: #333;\n    i {\n      line-height: initial;\n    }\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        transform: rotate(90deg);\n      }\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, r.Z)(["\n  position: relative;\n  ", ";\n"]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, r.Z)(["\n  width: 100%;\n  height: 100% !important;\n"]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, r.Z)([""]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      var u = s.ZP.div.withConfig({
          displayName: "styled__DialogWrapper",
          componentId: "Panoee__sc-1d4fb32a-0",
        })(c()),
        v = s.ZP.div.withConfig({
          displayName: "styled__DialogHeaderWrapper",
          componentId: "Panoee__sc-1d4fb32a-1",
        })(h(), l.jD),
        m = s.ZP.div.withConfig({
          displayName: "styled__DialogBodyWrapper",
          componentId: "Panoee__sc-1d4fb32a-2",
        })(p()),
        y = s.ZP.div.withConfig({
          displayName: "styled__DialogFooterWrapper",
          componentId: "Panoee__sc-1d4fb32a-3",
        })(f()),
        g = (0, a.memo)(function (n) {
          var e = n.title,
            i = n.visible,
            a = n.width,
            r = n.centered,
            s = n.className,
            l = n.zIndex,
            c = n.maskClosable,
            h = n.keyboard,
            p = n.isShowMask,
            f = n.hiddenCloseButton,
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
          return (0, t.jsx)(d.Z, {
            title: void 0 === e ? void 0 : e,
            open: void 0 !== i && i,
            footer: null,
            width: void 0 === a ? "650px" : a,
            centered: void 0 !== r && r,
            className: void 0 === s ? "" : s,
            zIndex: void 0 === l ? 100 : l,
            keyboard: void 0 !== h && h,
            maskClosable: void 0 !== c && c,
            bodyStyle: void 0 === _ ? {} : _,
            onOk: Z,
            onCancel: j,
            style: (0, o.Z)({}, void 0 === g ? {} : g, {
              top: (void 0 === P ? 0 : P) || 0,
            }),
            maskStyle: void 0 === x ? {} : x,
            mask: void 0 === p || p,
            destroyOnClose: !0,
            children: (0, t.jsxs)(u, {
              style: void 0 === b ? {} : b,
              children: [
                !(void 0 !== f && f) &&
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
//# sourceMappingURL=7871.1085781900bf6573.js.map
