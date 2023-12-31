"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1870, 828],
  {
    96159: function (e, n, t) {
      t.d(n, {
        M2: function () {
          return i;
        },
        Tm: function () {
          return a;
        },
        l$: function () {
          return o;
        },
      });
      var r = t(67294),
        o = r.isValidElement;
      function i(e) {
        return e && o(e) && e.type === r.Fragment;
      }
      function a(e, n) {
        return o(e)
          ? r.cloneElement(e, "function" == typeof n ? n(e.props || {}) : n)
          : e;
      }
    },
    93355: function (e, n, t) {
      t.d(n, {
        a: function () {
          return o;
        },
        b: function () {
          return r;
        },
      });
      var r = function () {
          for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return n;
        },
        o = function () {
          for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return n;
        };
    },
    4173: function (e, n, t) {
      t.d(n, {
        BR: function () {
          return m;
        },
        ri: function () {
          return f;
        },
      });
      var r = t(87462),
        o = t(4942),
        i = t(94184),
        a = t.n(i),
        c = t(50344),
        l = t(67294),
        u = t(53124),
        s = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > n.indexOf(r) &&
              (t[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(e);
              o < r.length;
              o++
            )
              0 > n.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          return t;
        },
        d = l.createContext(null),
        f = function (e, n) {
          var t = l.useContext(d),
            r = l.useMemo(
              function () {
                if (!t) return "";
                var r,
                  i = t.compactDirection,
                  c = t.isFirstItem,
                  l = t.isLastItem,
                  u = "vertical" === i ? "-vertical-" : "-";
                return a()(
                  ((r = {}),
                  (0, o.Z)(r, "".concat(e, "-compact").concat(u, "item"), !0),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(u, "first-item"),
                    c,
                  ),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(u, "last-item"),
                    l,
                  ),
                  (0, o.Z)(
                    r,
                    "".concat(e, "-compact").concat(u, "item-rtl"),
                    "rtl" === n,
                  ),
                  r),
                );
              },
              [e, n, t],
            );
          return {
            compactSize: null == t ? void 0 : t.compactSize,
            compactDirection: null == t ? void 0 : t.compactDirection,
            compactItemClassnames: r,
          };
        },
        m = function (e) {
          var n = e.children;
          return l.createElement(d.Provider, { value: null }, n);
        },
        p = function (e) {
          var n = e.children,
            t = s(e, ["children"]);
          return l.createElement(d.Provider, { value: t }, n);
        };
      n.ZP = function (e) {
        var n,
          t = l.useContext(u.E_),
          i = t.getPrefixCls,
          f = t.direction,
          m = e.size,
          v = void 0 === m ? "middle" : m,
          h = e.direction,
          b = e.block,
          g = e.prefixCls,
          y = e.className,
          w = e.children,
          x = s(e, [
            "size",
            "direction",
            "block",
            "prefixCls",
            "className",
            "children",
          ]),
          C = i("space-compact", g),
          Z = a()(
            C,
            ((n = {}),
            (0, o.Z)(n, "".concat(C, "-rtl"), "rtl" === f),
            (0, o.Z)(n, "".concat(C, "-block"), b),
            (0, o.Z)(n, "".concat(C, "-vertical"), "vertical" === h),
            n),
            y,
          ),
          S = l.useContext(d),
          O = (0, c.Z)(w),
          k = l.useMemo(
            function () {
              return O.map(function (e, n) {
                var t = (e && e.key) || "".concat(C, "-item-").concat(n);
                return l.createElement(
                  p,
                  {
                    key: t,
                    compactSize: v,
                    compactDirection: h,
                    isFirstItem:
                      0 === n && (!S || (null == S ? void 0 : S.isFirstItem)),
                    isLastItem:
                      n === O.length - 1 &&
                      (!S || (null == S ? void 0 : S.isLastItem)),
                  },
                  e,
                );
              });
            },
            [v, O, S],
          );
        return 0 === O.length
          ? null
          : l.createElement("div", (0, r.Z)({ className: Z }, x), k);
      };
    },
    70370: function (e, n, t) {
      t.r(n),
        t.d(n, {
          RequestAccessCollaboration: function () {
            return b;
          },
          default: function () {
            return g;
          },
        });
      var r = t(47568),
        o = t(828),
        i = t(70655),
        a = t(85893),
        c = t(67294),
        l = t(36323),
        u = t(71577),
        s = t(91612),
        d = t(5239),
        f = t(7297),
        m = t(19521),
        p = t(38505);
      function v() {
        var e = (0, f.Z)([
          "\n  color: #fff;\n  width: 100vw;\n  height: 100vh;\n  .overlay {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    ",
          ";\n    position: absolute;\n    // backdrop-filter: blur(4px);\n    background: rgba(0, 0, 0, 0.25);\n    .form {\n      width: 440px;\n      padding: 48px 24px 24px;\n      max-width: 90%;\n      position: relative;\n      background: rgba(0, 0, 0, 0.2);\n      background-image: linear-gradient(\n        114deg,\n        rgb(255 255 255 / 1%),\n        rgb(255 255 255 / 12%) 43%,\n        transparent 43.1%,\n        transparent\n      );\n      border-radius: 16px;\n      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n      backdrop-filter: blur(10px);\n      border: 1px solid rgba(255, 255, 255, 0.46);\n    }\n    .icon {\n      position: absolute;\n      width: 56px;\n      height: 56px;\n      top: -28px;\n      left: 50%;\n      transform: translateX(-50%);\n      ",
          ";\n      color: #fff;\n      background: var(--color-theme);\n      border-radius: 50%;\n      font-size: 1.5rem;\n      z-index: 2;\n    }\n    .content {\n      width: 100%;\n      z-index: 2;\n      ",
          ";\n      line-height: 180%;\n      text-align: center;\n      h2 {\n        color: #fff;\n      }\n      .title {\n        margin: 32px 0 12px;\n        font-weight: 500;\n        font-size: var(--fontSize-h5);\n      }\n      .action {\n        .ant-btn {\n          background: var(--color-theme);\n          color: #fff;\n          box-shadow: 0px 4px 12px rgb(0 0 0 / 0.2);\n          border-radius: 6px;\n          border: none;\n          padding: 8px 36px;\n          height: auto;\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      var h = m.ZP.div.withConfig({
          displayName: "styled__RequestAccessCollaborationWrapper",
          componentId: "Panoee__sc-c50e8bf8-0",
        })(v(), p.b0, p.b0, p.S8),
        b = (0, c.memo)(function (e) {
          var n = e.scene,
            t = e.project_id,
            f = (0, o.Z)((0, c.useState)(!1), 2),
            m = f[0],
            p = f[1],
            v = (0, o.Z)((0, d.yG)("loading"), 1)[0],
            b = (0, s.d)().onRequestAccessCollaboration,
            g = (0, c.useMemo)(
              function () {
                var e, t, r;
                return (
                  (null == n
                    ? void 0
                    : null === (e = n.media) || void 0 === e
                      ? void 0
                      : e.src_preview) ||
                  (null == n
                    ? void 0
                    : null === (t = n.media) || void 0 === t
                      ? void 0
                      : t.src_thumb) ||
                  (null == n
                    ? void 0
                    : null === (r = n.media) || void 0 === r
                      ? void 0
                      : r.src)
                );
              },
              [n],
            ),
            y = (0, c.useCallback)(
              (0, r.Z)(function () {
                return (0, i.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, b(t)];
                    case 1:
                      return e.sent().msg && p(!0), [2];
                  }
                });
              }),
              [b, t],
            );
          return (0, a.jsxs)(h, {
            children: [
              (0, a.jsx)(l.Z, {
                urlTour: g || "",
                scene: n || void 0,
                krpanoId: "previewViewer",
                divId: "previewContainer",
                styleContainer: {
                  height: "100%",
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  left: 0,
                },
              }),
              (0, a.jsx)("div", {
                className: "overlay",
                children: (0, a.jsxs)("div", {
                  className: "form",
                  children: [
                    (0, a.jsx)("div", { className: "bg" }),
                    (0, a.jsx)("div", {
                      className: "icon",
                      children: (0, a.jsx)("i", {
                        "aria-hidden": !0,
                        className: "fas fa-lock",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "content",
                      children: [
                        !m &&
                          (0, a.jsx)("h2", {
                            children:
                              "You do not have sufficient permission to access this page",
                          }),
                        (0, a.jsx)("div", {
                          className: "title",
                          children: m
                            ? "Send request access successfully!"
                            : "Please contact this Virtual Tour's owner to ensure that collaboration is enabled\n                or you have been granted access!",
                        }),
                        !m &&
                          (0, a.jsx)("div", {
                            className: "action",
                            children: (0, a.jsx)(u.Z, {
                              loading: v,
                              disabled: v,
                              type: "primary",
                              onClick: y,
                              children: "Request Sharing",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        g = b;
    },
    91612: function (e, n, t) {
      t.d(n, {
        d: function () {
          return v;
        },
      });
      var r = t(47568),
        o = t(41799),
        i = t(69396),
        a = t(828),
        c = t(29815),
        l = t(70655),
        u = t(33618),
        s = t(67294),
        d = t(25617),
        f = t(5239),
        m = t(7400),
        p = t(33207),
        v = function () {
          var e,
            n,
            t,
            v,
            h = (0, d.I0)(),
            b = (0, d.v9)(m.rK),
            g = (0, d.v9)(m.bn),
            y = (0, d.v9)(m.eu),
            w = (0, d.v9)(m.ej),
            x = (0, d.v9)(m.Iy),
            C = (0, s.useRef)([]),
            Z = (0, a.Z)((0, f.yG)("krpanoRef"), 1)[0],
            S = (0, a.Z)((0, f.yG)("commentSceneSelected"), 2)[1],
            O = (0, a.Z)((0, f.yG)("isShowDialogCreateCommentScene"), 2)[1],
            k = (0, a.Z)((0, f.yG)("loading"), 2)[1],
            _ = (0, s.useMemo)(
              function () {
                var e, n, t;
                return (
                  (null ===
                    (e =
                      null ===
                        (n =
                          null ===
                            (t =
                              null == g
                                ? void 0
                                : g.filter(function (e) {
                                    return !e.parent;
                                  })) || void 0 === t
                            ? void 0
                            : t.slice()) || void 0 === n
                        ? void 0
                        : n.sort(function (e, n) {
                            return e.created_at.localeCompare(n.created_at);
                          })) || void 0 === e
                    ? void 0
                    : e.map(function (e, n) {
                        var t, r, a, c;
                        return (0, i.Z)((0, o.Z)({}, e), {
                          index: n + 1,
                          isOwnerTour: w,
                          isOwnerComment:
                            (null === (t = e.user) || void 0 === t
                              ? void 0
                              : t.id) === (null == y ? void 0 : y.id),
                          children:
                            (null ===
                              (r =
                                null ===
                                  (a =
                                    null ===
                                      (c =
                                        null == g
                                          ? void 0
                                          : g.filter(function (n) {
                                              return n.parent === e.id;
                                            })) || void 0 === c
                                      ? void 0
                                      : c.map(function (e) {
                                          var n;
                                          return (0, i.Z)((0, o.Z)({}, e), {
                                            isOwnerTour: w,
                                            isOwnerComment:
                                              (null === (n = e.user) ||
                                              void 0 === n
                                                ? void 0
                                                : n.id) ===
                                              (null == y ? void 0 : y.id),
                                          });
                                        })) || void 0 === a
                                  ? void 0
                                  : a.slice()) || void 0 === r
                              ? void 0
                              : r.sort(function (e, n) {
                                  return n.created_at.localeCompare(
                                    e.created_at,
                                  );
                                })) || [],
                        });
                      })) || []
                );
              },
              [null == y ? void 0 : y.id, w, g],
            ),
            j = (0, s.useMemo)(
              function () {
                return _.filter(function (e) {
                  return !!e.isResolved;
                });
              },
              [_],
            ),
            E = (0, s.useMemo)(
              function () {
                return _.filter(function (e) {
                  return !e.isResolved;
                });
              },
              [_],
            );
          (0, s.useEffect)(
            function () {
              C.current = _;
            },
            [_],
          );
          var R = (0, s.useCallback)(
              ((e = (0, r.Z)(function (e) {
                return (0, l.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      k(!0), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, , 3, 4]),
                        [
                          4,
                          u.R.$post(
                            "/comment-scene/send-request-access-collab",
                            { project_id: e },
                            { headers: { Authorization: "Bearer ".concat(b) } },
                          ),
                        ]
                      );
                    case 2:
                      return [2, n.sent().data];
                    case 3:
                      return k(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (n) {
                return e.apply(this, arguments);
              }),
              [b, k],
            ),
            A = (0, s.useCallback)(
              ((n = (0, r.Z)(function (e) {
                var n,
                  t,
                  r,
                  a,
                  s = arguments;
                return (0, l.__generator)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (n = s.length > 1 && void 0 !== s[1] ? s[1] : Z),
                        k(!0),
                        (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, , 3, 4]),
                        [
                          4,
                          u.R.$post("/comment-scene/create", e, {
                            headers: { Authorization: "Bearer ".concat(b) },
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (t = l.sent().data),
                        h(p.Nw.createCommentScene(t.data)),
                        t.data.parent
                          ? ((a = C.current.filter(function (e) {
                              return e.id === t.data.parent;
                            })[0]),
                            (r = (0, i.Z)((0, o.Z)({}, a), {
                              children: [
                                (0, i.Z)((0, o.Z)({}, t.data), {
                                  isOwnerTour: w,
                                  isOwnerComment: !0,
                                }),
                              ].concat((0, c.Z)(a.children || [])),
                            })),
                            n && n.onReplaceCommentScene(r))
                          : (((r = (0, i.Z)((0, o.Z)({}, t.data), {
                              isOwnerTour: w,
                              isOwnerComment: !0,
                              index: C.current.length + 1,
                            })).children = []),
                            n && n.onAddCommentScene(r)),
                        O(!1),
                        [3, 4]
                      );
                    case 3:
                      return k(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (e) {
                return n.apply(this, arguments);
              }),
              [b, h, k, w, Z, O],
            ),
            N = (0, s.useCallback)(
              ((t = (0, r.Z)(function (e) {
                var n,
                  t,
                  r,
                  a,
                  c = arguments;
                return (0, l.__generator)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      (n = c.length > 1 && void 0 !== c[1] ? c[1] : Z),
                        k(!0),
                        (l.label = 1);
                    case 1:
                      return (
                        l.trys.push([1, , 3, 4]),
                        [
                          4,
                          u.R.$put("/comment-scene/update", e, {
                            headers: { Authorization: "Bearer ".concat(b) },
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (t = l.sent().data),
                        h(p.Nw.updateCommentScene(t.data)),
                        t.data.parent
                          ? ((r = C.current.filter(function (e) {
                              return e.id === t.data.parent;
                            })[0]).children = r.children.map(function (e) {
                              return e.id === t.data.id
                                ? (0, i.Z)((0, o.Z)({}, t.data), {
                                    children: [],
                                    isOwnerTour: w,
                                    isOwnerComment: !0,
                                  })
                                : e;
                            }))
                          : ((a = C.current.filter(function (e) {
                              return e.id === t.data.id;
                            })[0]),
                            (r = (0, i.Z)((0, o.Z)({}, a, t.data), {
                              isOwnerTour: w,
                              isOwnerComment: !0,
                            }))),
                        n && n.onReplaceCommentScene(r),
                        [3, 4]
                      );
                    case 3:
                      return k(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
              [Z, k, b, h, w],
            ),
            I = (0, s.useCallback)(
              ((v = (0, r.Z)(function (e) {
                var n,
                  t,
                  r,
                  o = arguments;
                return (0, l.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (n = o.length > 1 && void 0 !== o[1] ? o[1] : Z),
                        (t = o.length > 2 && void 0 !== o[2] && o[2]),
                        k(!0),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, , 3, 4]),
                        [
                          4,
                          u.R.$delete(
                            "/comment-scene/delete",
                            { id: e.id },
                            { headers: { Authorization: "Bearer ".concat(b) } },
                          ),
                        ]
                      );
                    case 2:
                      return (
                        i.sent(),
                        h(p.Nw.deleteCommentScene(e)),
                        e.parent
                          ? (((r = C.current.filter(function (n) {
                              return n.id === e.parent;
                            })[0]).children = r.children.filter(function (n) {
                              return n.id !== e.id;
                            })),
                            n && n.onReplaceCommentScene(r))
                          : n && n.onRemoveCommentScene(e.id),
                        t && S(null),
                        [3, 4]
                      );
                    case 3:
                      return k(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (e) {
                return v.apply(this, arguments);
              }),
              [b, h, k, Z, S],
            );
          return (0, s.useMemo)(
            function () {
              return {
                isOwnerTour: w,
                onCreateCommentScene: A,
                onUpdateCommentScene: N,
                onDeleteCommentScene: I,
                listCommentSceneGroupByParent: _,
                onRequestAccessCollaboration: R,
                isAllowToAccessOnCollaborationMode: x,
                listCommentSceneGroupByParentActive: E,
                listCommentSceneGroupByParentResolved: j,
              };
            },
            [w, A, N, I, R, _, x, E, j],
          );
        };
    },
    98423: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(1413);
      function o(e, n) {
        var t = (0, r.Z)({}, e);
        return (
          Array.isArray(n) &&
            n.forEach(function (e) {
              delete t[e];
            }),
          t
        );
      }
    },
    62845: function (e, n, t) {
      t.d(n, {
        r8: function () {
          return c;
        },
      });
      var r = t(67294);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      let i = Symbol(),
        a = (e, n) => {
          let t = Object.keys(n),
            a = n,
            c = null,
            l = {};
          t.forEach((e) => {
            l[e] = new Set();
          });
          let u = (n, t) => (t.type === i ? (t.r ? t.r(n) : t.e) : e(n, t)),
            s = (e, n) => {
              let t = (t) => {
                var r;
                return o({}, t, {
                  [e]: ((r = t[e]), "function" == typeof n ? n(r) : n),
                });
              };
              if (c) c({ type: i, r: t });
              else {
                a = t(a);
                let n = a[e];
                l[e].forEach((e) => e(n));
              }
            },
            d = (e, n) => {
              t.forEach((t) => {
                let r = n[t];
                e[t] !== r && l[t].forEach((e) => e(r));
              });
            };
          return {
            useGlobalStateProvider: () => {
              let [e, n] = (0, r.useReducer)(u, a);
              (0, r.useEffect)(() => {
                if (c) throw Error("Only one global state provider is allowed");
                return (
                  (c = n),
                  n({ type: i, e: a }),
                  () => {
                    c = null;
                  }
                );
              }, []);
              let t = (0, r.useRef)(e);
              d(t.current, e),
                (t.current = e),
                (0, r.useEffect)(() => {
                  a = e;
                }, [e]);
            },
            useGlobalState: (e) => {
              let [n, t] = (0, r.useState)(a[e]);
              return (
                (0, r.useEffect)(
                  () => (
                    l[e].add(t),
                    t(a[e]),
                    () => {
                      l[e].delete(t);
                    }
                  ),
                  [e],
                ),
                [n, (0, r.useCallback)((n) => s(e, n), [e])]
              );
            },
            getGlobalState: (e) => a[e],
            setGlobalState: s,
            getState: () => a,
            setState: (e) => {
              if (c) c({ type: i, e: e });
              else {
                let n = a;
                d(n, (a = e));
              }
            },
            dispatch: (n) => {
              if (c) c(n);
              else {
                let t = a;
                d(t, (a = e(a, n)));
              }
              return n;
            },
          };
        },
        c = (e) => a((e, n) => e, e),
        l = (e, n = e(void 0, { type: void 0 }), t) =>
          t ? t(l)(e, n) : a(e, n);
    },
    828: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(13375),
        o = t(91566);
      function i(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (0, r.Z)(e, n) ||
          (0, o.Z)(e, n) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
    },
  },
]);
//# sourceMappingURL=1870.c57011a0e5281c95.js.map
