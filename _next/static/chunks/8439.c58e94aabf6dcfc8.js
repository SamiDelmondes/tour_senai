"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8439],
  {
    28439: function (e, n, t) {
      t.r(n);
      var c = t(85893),
        l = t(44526),
        o = t(56075),
        s = t(5152),
        i = t.n(s),
        a = t(67294),
        m = t(57295),
        d = l.Z.TabPane,
        r = o.Z.Text,
        h = i()(
          function () {
            return Promise.all([t.e(4936), t.e(6163)]).then(t.bind(t, 86163));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [86163];
              },
            },
          },
        ),
        u = i()(
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
        S = (0, a.memo)(function (e) {
          var n = e.list,
            t = e.onMoveToCommentScene,
            l = e.onSelectCommentScene,
            o = e.onUpdateCommentScene,
            s = e.onDeleteCommentScene;
          return (0, c.jsx)("div", {
            className: "--list hide-scrollbar",
            children: n.map(function (e) {
              return (0, c.jsxs)(
                "div",
                {
                  className: "--item",
                  children: [
                    (0, c.jsx)("div", {
                      className: "stt",
                      children: (null == e ? void 0 : e.index) || 0,
                    }),
                    (0, c.jsx)(u, {
                      commentScene: e,
                      onClick: t,
                      onUpdate: o,
                      onDelete: s,
                      children: (0, c.jsxs)("small", {
                        className: "countComment",
                        onClick: function (n) {
                          n.stopPropagation(), l(e);
                        },
                        children: [
                          (0, c.jsx)("i", {
                            "aria-hidden": !0,
                            className: "fas fa-comment-alt",
                          }),
                          (0, c.jsxs)("span", {
                            children: [e.children.length, " Replies"],
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                e.id,
              );
            }),
          });
        }),
        C = (0, a.memo)(function (e) {
          var n = e.onBack,
            t = e.listScene,
            o = e.onNextScene,
            s = e.titleProject,
            i = e.sceneSelected,
            u = e.onMoveToCommentScene,
            C = e.onSelectCommentScene,
            x = e.onUpdateCommentScene,
            v = e.onDeleteCommentScene,
            j = e.listCommentSceneGroupByParentActive,
            f = e.listCommentSceneGroupByParentResolved,
            p = (0, a.useCallback)(
              function (e) {
                o(
                  t.find(function (n) {
                    return n.id === e;
                  }),
                );
              },
              [t, o],
            );
          return (0, c.jsxs)(m.FX, {
            children: [
              (0, c.jsxs)("div", {
                className: "--header",
                children: [
                  (0, c.jsx)("div", {
                    className: "--left",
                    children: (0, c.jsx)("i", {
                      "aria-hidden": !0,
                      className: "far fa-arrow-left",
                      onClick: n,
                    }),
                  }),
                  (0, c.jsxs)("div", {
                    className: "--right",
                    children: [
                      (0, c.jsx)("div", {
                        className: "--title",
                        children: (0, c.jsx)(r, {
                          style: { width: "100%" },
                          ellipsis: { tooltip: s },
                          children: s,
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "--select",
                        children: (0, c.jsx)(h, {
                          listScene: t,
                          value: null == i ? void 0 : i.id,
                          onChange: p,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)("div", {
                className: "--body",
                children: (0, c.jsxs)(l.Z, {
                  centered: !0,
                  defaultActiveKey: "1",
                  children: [
                    (0, c.jsx)(
                      d,
                      {
                        tab: "Active (".concat(j.length, ")"),
                        children: (0, c.jsx)(S, {
                          list: j,
                          onMoveToCommentScene: u,
                          onSelectCommentScene: C,
                          onUpdateCommentScene: x,
                          onDeleteCommentScene: v,
                        }),
                      },
                      "1",
                    ),
                    (0, c.jsx)(
                      d,
                      {
                        tab: "Resolved (".concat(f.length, ")"),
                        children: (0, c.jsx)(S, {
                          list: f,
                          onMoveToCommentScene: u,
                          onSelectCommentScene: C,
                          onUpdateCommentScene: x,
                          onDeleteCommentScene: v,
                        }),
                      },
                      "2",
                    ),
                  ],
                }),
              }),
            ],
          });
        });
      n.default = C;
    },
  },
]);
//# sourceMappingURL=8439.c58e94aabf6dcfc8.js.map
