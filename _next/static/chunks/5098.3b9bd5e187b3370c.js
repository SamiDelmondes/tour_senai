"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5098],
  {
    35204: function (n, e, r) {
      r.d(e, {
        N: function () {
          return i;
        },
      });
      var t = r(7297);
      function o() {
        var n = (0, t.Z)([
          "\n  width: 100%;\n  height: 100%;\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      var i = r(19521).ZP.div.withConfig({
        displayName: "styled__SvgContainerWrapper",
        componentId: "Panoee__sc-7ab11388-0",
      })(o());
    },
    95898: function (n, e, r) {
      r.d(e, {
        Bo: function () {
          return h;
        },
        Ck: function () {
          return g;
        },
        RL: function () {
          return m;
        },
        TM: function () {
          return p;
        },
        s2: function () {
          return f;
        },
      });
      var t = r(7297),
        o = r(35204),
        i = r(38505),
        a = r(19521);
      function c() {
        var n = (0, t.Z)([
          "\n  width: 42px;\n  height: auto;\n  display: inline-flex;\n  position: relative;\n  &.resolved {\n    transform: scale(0.85);\n    opacity: 0.75;\n  }\n  ",
          " {\n    height: auto;\n    path {\n      fill: rgb(250 173 20 / 80%);\n      stroke: #fff;\n      stroke-width: 2;\n    }\n  }\n  .--icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: inline-flex;\n    align-items: center;\n    color: #fff;\n    font-weight: 600;\n  }\n  &.resolved {\n    .--icon {\n      i {\n        font-size: 18px;\n      }\n    }\n    svg {\n      path {\n        fill: rgba(46, 194, 106, 0.8);\n        stroke: #fff;\n        stroke-width: 2;\n      }\n    }\n  }\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, t.Z)([
          "\n  width: 100%;\n  color: #ffffff;\n  display: flex;\n  .--main {\n    width: 100%;\n  }\n\n  .countComment {\n    width: max-content;\n    padding: 4px 6px;\n    background: var(--color-dark-2);\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    align-items: center;\n    i {\n      margin-right: 8px;\n    }\n    span {\n      opacity: 0.5;\n    }\n    &:hover {\n      span {\n        opacity: 1;\n      }\n    }\n  }\n\n  &.parent-layout {\n    .--main {\n      .user {\n        display: flex;\n        .avt {\n          margin-right: 8px;\n          flex: 0 0 auto;\n          img {\n            width: 42px;\n            height: 42px;\n            object-fit: cover;\n            border-radius: 50%;\n            background: #ffffff;\n          }\n        }\n        .info {\n          .name {\n            font-weight: 600;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            max-width: 150px;\n          }\n          .time {\n            color: var(--color-smoke);\n            font-size: 12px;\n          }\n        }\n      }\n      .txt {\n        margin: 8px 0;\n      }\n    }\n  }\n  &.children-layout {\n    .--main {\n      display: flex;\n      align-items: flex-start;\n      .avt {\n        margin-right: 12px;\n        border-radius: 50%;\n        overflow: hidden;\n        background: #ffffff;\n        flex: 0 0 auto;\n        img {\n          width: 42px;\n          height: 42px;\n          object-fit: cover;\n        }\n      }\n      .content {\n        background: rgba(0, 0, 0, 0.5);\n        border-radius: 8px;\n        padding: 8px 12px;\n        width: 100%;\n        .info {\n          display: flex;\n          align-items: flex-end;\n          .name {\n            font-weight: 600;\n            font-size: 15px;\n          }\n          .time {\n            color: #969fa7;\n            font-size: 12px;\n            margin-left: 8px;\n          }\n        }\n        .txt {\n          margin: 6px 0 3px;\n        }\n      }\n    }\n    &:not(:last-child) {\n      margin-bottom: 12px;\n    }\n    &:last-child {\n      margin-bottom: 8px;\n    }\n  }\n  .--extra {\n    flex: 0 0 auto;\n    margin-left: 8px;\n    i {\n      cursor: pointer;\n      &:after {\n        position: absolute;\n        content: '';\n        width: 24px;\n        height: 24px;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 2;\n      }\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, t.Z)([
          "\n  margin: 8px 0;\n  textarea {\n    width: 100%;\n    border: 1px solid rgba(255, 255, 255, 0.25);\n    outline: none !important;\n    box-shadow: none !important;\n    padding: 0.25rem 0.5rem;\n    width: 100%;\n    color: #fff;\n    // font-size: 14px;\n    // font-weight: 400;\n    background-color: var(--color-dark);\n    resize: none;\n    border-radius: 4px;\n    color: inherit;\n    max-height: 250px !important;\n    user-select: all;\n    &::placeholder {\n      opacity: 0.5;\n      color: rgba(255, 255, 255, 0.57);\n      font-size: 14px;\n    }\n    &:hover {\n      border-color: rgb(255 255 255 / 0.5);\n    }\n    &:focus {\n      border-color: #ffffff50;\n      background-color: rgb(0 0 0 / 0.5);\n    }\n    &:active {\n    }\n    &[disabled] {\n      background-color: rgba(0, 0, 0, 0.25);\n      color: rgba(255, 255, 255, 0.75);\n    }\n  }\n  .--bottom {\n    ",
          ";\n    color: #fff;\n    .act {\n      &-extra {\n        i {\n          cursor: pointer;\n        }\n      }\n      &-main {\n        .--btn {\n          border: none;\n          height: auto;\n          padding: 4px 12px;\n          border-radius: 4px;\n          span {\n            margin-left: 4px;\n          }\n          &.--submit {\n            margin-right: 8px;\n            background-color: var(--color-theme);\n            color: #fff;\n          }\n          &.--cancel {\n            background-color: var(--color-dark-2);\n            color: var(--color-smoke);\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, t.Z)([
          "\n  width: 400px;\n  padding: 16px 16px 0;\n  background: rgb(33 33 33 / 80%);\n  position: relative;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  .--parent {\n    ",
          " {\n      .--action {\n        margin-top: 8px;\n        .ant-btn {\n          background: rgb(47 208 172 / 20%);\n          border-radius: 6px;\n          height: auto;\n          color: var(--color-green);\n          border: 1px solid var(--color-green);\n          padding: 4px 8px;\n          span {\n            margin-left: 8px;\n          }\n          &[disabled] {\n            background: var(--color-green);\n            color: #fff;\n          }\n        }\n      }\n      padding-bottom: 12px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.25);\n    }\n  }\n  .--children {\n    margin-top: 12px;\n    max-height: 350px;\n    overflow: auto;\n  }\n  .--add-new {\n    border-top: 1px solid rgba(255, 255, 255, 0.4);\n    border-radius: 0 0 12px 12px;\n    margin-left: -16px;\n    width: calc(100% + 32px);\n    padding: 12px 16px;\n    background: var(--color-dark);\n    color: #fff;\n    ",
          " {\n      margin: 0;\n    }\n  }\n  .--close {\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    width: 24px;\n    height: 24px;\n    background: #fff;\n    color: #333;\n    border-radius: 50%;\n    ",
          ";\n    cursor: pointer;\n    i {\n    }\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, t.Z)([
          "\n  padding: 16px;\n  background: var(--color-dark);\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  .--icon-close {\n    position: absolute;\n    background: transparent;\n    color: #fff;\n    right: 6px;\n    top: 10px;\n    box-shadow: none;\n  }\n  .header {\n    ",
          "\n    .title {\n      color: #fff;\n      font-weight: 600;\n    }\n  }\n  .popover {\n    margin: 16px 0 0;\n    position: relative;\n    ",
          " {\n      margin-bottom: 0;\n      color: #fff;\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      var p = a.ZP.div.withConfig({
          displayName: "styled__CommentSceneIconWrapper",
          componentId: "Panoee__sc-29611543-0",
        })(c(), o.N),
        f = a.ZP.div.withConfig({
          displayName: "styled__CommentSceneItemWrapper",
          componentId: "Panoee__sc-29611543-1",
        })(d()),
        m = a.ZP.div.withConfig({
          displayName: "styled__CommentBoxWrapper",
          componentId: "Panoee__sc-29611543-2",
        })(l(), i.ep),
        h = a.ZP.div.withConfig({
          displayName: "styled__CommentScenePopoverWrapper",
          componentId: "Panoee__sc-29611543-3",
        })(u(), f, m, i.b0),
        g = a.ZP.div.withConfig({
          displayName: "styled__DialogCreateCommentSceneWrapper",
          componentId: "Panoee__sc-29611543-4",
        })(s(), i.ep, m);
    },
    91612: function (n, e, r) {
      r.d(e, {
        d: function () {
          return h;
        },
      });
      var t = r(47568),
        o = r(41799),
        i = r(69396),
        a = r(828),
        c = r(29815),
        d = r(70655),
        l = r(33618),
        u = r(67294),
        s = r(25617),
        p = r(5239),
        f = r(7400),
        m = r(33207),
        h = function () {
          var n,
            e,
            r,
            h,
            g = (0, s.I0)(),
            x = (0, s.v9)(f.rK),
            v = (0, s.v9)(f.bn),
            b = (0, s.v9)(f.eu),
            w = (0, s.v9)(f.ej),
            C = (0, s.v9)(f.Iy),
            y = (0, u.useRef)([]),
            _ = (0, a.Z)((0, p.yG)("krpanoRef"), 1)[0],
            k = (0, a.Z)((0, p.yG)("commentSceneSelected"), 2)[1],
            Z = (0, a.Z)((0, p.yG)("isShowDialogCreateCommentScene"), 2)[1],
            S = (0, a.Z)((0, p.yG)("loading"), 2)[1],
            P = (0, u.useMemo)(
              function () {
                var n, e, r;
                return (
                  (null ===
                    (n =
                      null ===
                        (e =
                          null ===
                            (r =
                              null == v
                                ? void 0
                                : v.filter(function (n) {
                                    return !n.parent;
                                  })) || void 0 === r
                            ? void 0
                            : r.slice()) || void 0 === e
                        ? void 0
                        : e.sort(function (n, e) {
                            return n.created_at.localeCompare(e.created_at);
                          })) || void 0 === n
                    ? void 0
                    : n.map(function (n, e) {
                        var r, t, a, c;
                        return (0, i.Z)((0, o.Z)({}, n), {
                          index: e + 1,
                          isOwnerTour: w,
                          isOwnerComment:
                            (null === (r = n.user) || void 0 === r
                              ? void 0
                              : r.id) === (null == b ? void 0 : b.id),
                          children:
                            (null ===
                              (t =
                                null ===
                                  (a =
                                    null ===
                                      (c =
                                        null == v
                                          ? void 0
                                          : v.filter(function (e) {
                                              return e.parent === n.id;
                                            })) || void 0 === c
                                      ? void 0
                                      : c.map(function (n) {
                                          var e;
                                          return (0, i.Z)((0, o.Z)({}, n), {
                                            isOwnerTour: w,
                                            isOwnerComment:
                                              (null === (e = n.user) ||
                                              void 0 === e
                                                ? void 0
                                                : e.id) ===
                                              (null == b ? void 0 : b.id),
                                          });
                                        })) || void 0 === a
                                  ? void 0
                                  : a.slice()) || void 0 === t
                              ? void 0
                              : t.sort(function (n, e) {
                                  return e.created_at.localeCompare(
                                    n.created_at,
                                  );
                                })) || [],
                        });
                      })) || []
                );
              },
              [null == b ? void 0 : b.id, w, v],
            ),
            R = (0, u.useMemo)(
              function () {
                return P.filter(function (n) {
                  return !!n.isResolved;
                });
              },
              [P],
            ),
            O = (0, u.useMemo)(
              function () {
                return P.filter(function (n) {
                  return !n.isResolved;
                });
              },
              [P],
            );
          (0, u.useEffect)(
            function () {
              y.current = P;
            },
            [P],
          );
          var N = (0, u.useCallback)(
              ((n = (0, t.Z)(function (n) {
                return (0, d.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      S(!0), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, , 3, 4]),
                        [
                          4,
                          l.R.$post(
                            "/comment-scene/send-request-access-collab",
                            { project_id: n },
                            { headers: { Authorization: "Bearer ".concat(x) } },
                          ),
                        ]
                      );
                    case 2:
                      return [2, e.sent().data];
                    case 3:
                      return S(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (e) {
                return n.apply(this, arguments);
              }),
              [x, S],
            ),
            z = (0, u.useCallback)(
              ((e = (0, t.Z)(function (n) {
                var e,
                  r,
                  t,
                  a,
                  u = arguments;
                return (0, d.__generator)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      (e = u.length > 1 && void 0 !== u[1] ? u[1] : _),
                        S(!0),
                        (d.label = 1);
                    case 1:
                      return (
                        d.trys.push([1, , 3, 4]),
                        [
                          4,
                          l.R.$post("/comment-scene/create", n, {
                            headers: { Authorization: "Bearer ".concat(x) },
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (r = d.sent().data),
                        g(m.Nw.createCommentScene(r.data)),
                        r.data.parent
                          ? ((a = y.current.filter(function (n) {
                              return n.id === r.data.parent;
                            })[0]),
                            (t = (0, i.Z)((0, o.Z)({}, a), {
                              children: [
                                (0, i.Z)((0, o.Z)({}, r.data), {
                                  isOwnerTour: w,
                                  isOwnerComment: !0,
                                }),
                              ].concat((0, c.Z)(a.children || [])),
                            })),
                            e && e.onReplaceCommentScene(t))
                          : (((t = (0, i.Z)((0, o.Z)({}, r.data), {
                              isOwnerTour: w,
                              isOwnerComment: !0,
                              index: y.current.length + 1,
                            })).children = []),
                            e && e.onAddCommentScene(t)),
                        Z(!1),
                        [3, 4]
                      );
                    case 3:
                      return S(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (n) {
                return e.apply(this, arguments);
              }),
              [x, g, S, w, _, Z],
            ),
            I = (0, u.useCallback)(
              ((r = (0, t.Z)(function (n) {
                var e,
                  r,
                  t,
                  a,
                  c = arguments;
                return (0, d.__generator)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      (e = c.length > 1 && void 0 !== c[1] ? c[1] : _),
                        S(!0),
                        (d.label = 1);
                    case 1:
                      return (
                        d.trys.push([1, , 3, 4]),
                        [
                          4,
                          l.R.$put("/comment-scene/update", n, {
                            headers: { Authorization: "Bearer ".concat(x) },
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (r = d.sent().data),
                        g(m.Nw.updateCommentScene(r.data)),
                        r.data.parent
                          ? ((t = y.current.filter(function (n) {
                              return n.id === r.data.parent;
                            })[0]).children = t.children.map(function (n) {
                              return n.id === r.data.id
                                ? (0, i.Z)((0, o.Z)({}, r.data), {
                                    children: [],
                                    isOwnerTour: w,
                                    isOwnerComment: !0,
                                  })
                                : n;
                            }))
                          : ((a = y.current.filter(function (n) {
                              return n.id === r.data.id;
                            })[0]),
                            (t = (0, i.Z)((0, o.Z)({}, a, r.data), {
                              isOwnerTour: w,
                              isOwnerComment: !0,
                            }))),
                        e && e.onReplaceCommentScene(t),
                        [3, 4]
                      );
                    case 3:
                      return S(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (n) {
                return r.apply(this, arguments);
              }),
              [_, S, x, g, w],
            ),
            A = (0, u.useCallback)(
              ((h = (0, t.Z)(function (n) {
                var e,
                  r,
                  t,
                  o = arguments;
                return (0, d.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (e = o.length > 1 && void 0 !== o[1] ? o[1] : _),
                        (r = o.length > 2 && void 0 !== o[2] && o[2]),
                        S(!0),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, , 3, 4]),
                        [
                          4,
                          l.R.$delete(
                            "/comment-scene/delete",
                            { id: n.id },
                            { headers: { Authorization: "Bearer ".concat(x) } },
                          ),
                        ]
                      );
                    case 2:
                      return (
                        i.sent(),
                        g(m.Nw.deleteCommentScene(n)),
                        n.parent
                          ? (((t = y.current.filter(function (e) {
                              return e.id === n.parent;
                            })[0]).children = t.children.filter(function (e) {
                              return e.id !== n.id;
                            })),
                            e && e.onReplaceCommentScene(t))
                          : e && e.onRemoveCommentScene(n.id),
                        r && k(null),
                        [3, 4]
                      );
                    case 3:
                      return S(!1), [7];
                    case 4:
                      return [2];
                  }
                });
              })),
              function (n) {
                return h.apply(this, arguments);
              }),
              [x, g, S, _, k],
            );
          return (0, u.useMemo)(
            function () {
              return {
                isOwnerTour: w,
                onCreateCommentScene: z,
                onUpdateCommentScene: I,
                onDeleteCommentScene: A,
                listCommentSceneGroupByParent: P,
                onRequestAccessCollaboration: N,
                isAllowToAccessOnCollaborationMode: C,
                listCommentSceneGroupByParentActive: O,
                listCommentSceneGroupByParentResolved: R,
              };
            },
            [w, z, I, A, N, P, C, O, R],
          );
        };
    },
  },
]);
//# sourceMappingURL=5098.3b9bd5e187b3370c.js.map
