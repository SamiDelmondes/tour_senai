"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7057],
  {
    97057: function (n, o, u) {
      u.r(o);
      var e = u(828),
        l = u(85893),
        i = u(67294),
        d = u(5152),
        r = u.n(d),
        t = u(25617),
        c = u(7400),
        v = u(33207),
        s = u(79505),
        a = u(94178),
        f = u(5239),
        m = void 0,
        p = r()(
          function () {
            return u.e(4358).then(u.bind(u, 24358));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [24358];
              },
            },
          },
        );
      o.default = (0, i.memo)(function (n) {
        var o = n.krpanoRef,
          u = (0, t.I0)(),
          d = (0, i.useRef)(null),
          r = (0, i.useRef)(null),
          b = (0, s.Q)({ krpanoRef: o }),
          k = b.onSetSoundOnScene,
          g = b.onStartHotspotSound,
          _ = (0, e.Z)((0, f.gU)("state"), 1)[0],
          y = (0, e.Z)((0, i.useState)(!1), 2),
          S = y[0],
          h = y[1],
          C = (0, t.v9)(c.CO),
          j = (0, t.v9)(c.M9),
          x = (0, t.v9)(c.Y2),
          E = (0, t.v9)(c.us),
          N = null == j ? void 0 : j.background_sound,
          P = null == x ? void 0 : x.background_sound,
          w = (0, i.useMemo)(
            function () {
              var n;
              return (
                !!N ||
                !!P ||
                (null == x
                  ? void 0
                  : null === (n = x.hotspots) || void 0 === n
                    ? void 0
                    : n.some(function (n) {
                        var o, u, e, l, i, d, r, t, c, v, s;
                        return (
                          ("sound" === n.type &&
                            ((null === (o = n.config) || void 0 === o
                              ? void 0
                              : null === (u = o.sound) || void 0 === u
                                ? void 0
                                : u.file) ||
                              (null === (e = n.config) || void 0 === e
                                ? void 0
                                : null === (l = e.sound) || void 0 === l
                                  ? void 0
                                  : l.url))) ||
                          ("instructor" === n.type &&
                            (null === (i = n.config) || void 0 === i
                              ? void 0
                              : null === (d = i.instructor) || void 0 === d
                                ? void 0
                                : d.media)) ||
                          ("media" === n.type &&
                            (null === (r = n.config) || void 0 === r
                              ? void 0
                              : null === (t = r.media) || void 0 === t
                                ? void 0
                                : t.type) === "media-video" &&
                            (null === (c = n.config) || void 0 === c
                              ? void 0
                              : null === (v = c.media) || void 0 === v
                                ? void 0
                                : null === (s = v.media) || void 0 === s
                                  ? void 0
                                  : s.src))
                        );
                      }))
              );
            },
            [N, P, x],
          ),
          O = (0, i.useCallback)(
            function () {
              var n, o;
              (null == d ? void 0 : d.current) &&
                (_.isSoundOnScene
                  ? null === (o = d.current) || void 0 === o || o.play()
                  : null === (n = d.current) || void 0 === n || n.pause());
            },
            [_],
          ),
          R = (0, i.useCallback)(
            function () {
              if (E) {
                var n, o;
                r.current &&
                  ((r.current.volume = E.on
                    ? (null == j ? void 0 : j.background_sound_volume) || 0.4
                    : 0),
                  (r.current.muted = !E.on),
                  E.on &&
                    (null === (n = r.current) || void 0 === n || n.play())),
                  d.current &&
                    ((d.current.muted = !E.on),
                    (d.current.volume = E.on
                      ? (null == x ? void 0 : x.background_sound_volume) || 0.8
                      : 0),
                    E.on &&
                      (null === (o = d.current) || void 0 === o || o.play()));
              }
            },
            [
              E,
              null == j ? void 0 : j.background_sound_volume,
              null == x ? void 0 : x.background_sound_volume,
            ],
          );
        (0, i.useEffect)(
          function () {
            !1 === _.isVisiblePopupIntro &&
              w &&
              ((null == E ? void 0 : E.on) === void 0 ||
              (null == E ? void 0 : E.on) === null
                ? C
                  ? h(!0)
                  : M()
                : (R(), O()));
          },
          [C, w, _.isVisiblePopupIntro],
        ),
          (0, i.useEffect)(
            function () {
              !1 === C &&
                E.on &&
                P &&
                d.current &&
                ((d.current.src = null == P ? void 0 : P.src),
                (d.current.currentTime = 0),
                (d.current.volume = E.on
                  ? (null == x ? void 0 : x.background_sound_volume) || 0.8
                  : 0),
                (d.current.muted = !E.on),
                O());
            },
            [x, E],
          );
        var I = (0, i.useCallback)(
            function () {
              var n =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              h(!1), n || (k(!1), u(v.Nw.setConfigSoundProject({ on: !1 })));
            },
            [u, k],
          ),
          M = (0, i.useCallback)(
            function () {
              var n, o;
              k(!0),
                u(v.Nw.setConfigSoundProject({ on: !0 })),
                x && g(),
                null === (n = r.current) || void 0 === n || n.play(),
                null === (o = d.current) || void 0 === o || o.play(),
                I(!0);
            },
            [u, x, k, g, I],
          );
        return (
          (0, i.useEffect)(
            function () {
              R(), E.on && S && I(!0);
            },
            [E],
          ),
          (0, i.useEffect)(
            function () {
              O();
            },
            [_.isSoundOnScene],
          ),
          (0, l.jsxs)(a.M, {
            children: [
              N &&
                (0, l.jsx)("audio", {
                  className: "el-hide",
                  loop: !0,
                  autoPlay: !1,
                  ref: r,
                  children: (0, l.jsx)("source", {
                    src: null == N ? void 0 : N.src,
                    type: null == N ? void 0 : N.mimetype,
                  }),
                }),
              P &&
                (0, l.jsx)("audio", {
                  className: "el-hide",
                  loop: !0,
                  autoPlay: !1,
                  ref: d,
                  children: (0, l.jsx)("source", {
                    src: null == P ? void 0 : P.src,
                    type: null == P ? void 0 : P.mimetype,
                  }),
                }),
              S &&
                (0, l.jsx)(p, { visible: S, onOK: M, onCancel: I.bind(m, !1) }),
            ],
          })
        );
      });
    },
  },
]);
//# sourceMappingURL=7057.e6a09edf35be9a5f.js.map
