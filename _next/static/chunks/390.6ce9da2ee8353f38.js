"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [390],
  {
    30390: function (e, t, n) {
      n.r(t),
        n.d(t, {
          LIST_MENU: function () {
            return P;
          },
          default: function () {
            return N;
          },
        });
      var a,
        r = n(41799),
        i = n(69396),
        o = n(828),
        s = n(85893),
        u = n(67294),
        l = n(5152),
        d = n.n(l),
        c = {};
      function m(e, t) {
        if (t.length < e)
          throw TypeError(
            e +
              " argument" +
              (e > 1 ? "s" : "") +
              " required, but only " +
              t.length +
              " present",
          );
      }
      function h(e) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function f(e) {
        m(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date || ("object" === h(e) && "[object Date]" === t)
          ? new Date(e.getTime())
          : "number" == typeof e || "[object Number]" === t
            ? new Date(e)
            : (("string" == typeof e || "[object String]" === t) &&
                "undefined" != typeof console &&
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
                ),
                console.warn(Error().stack)),
              new Date(NaN));
      }
      function g(e, t) {
        m(2, arguments);
        var n = f(e),
          a = f(t),
          r = n.getTime() - a.getTime();
        return r < 0 ? -1 : r > 0 ? 1 : r;
      }
      var v = {
          ceil: Math.ceil,
          round: Math.round,
          floor: Math.floor,
          trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
          },
        },
        b = {
          lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
          },
          xSeconds: { one: "1 second", other: "{{count}} seconds" },
          halfAMinute: "half a minute",
          lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
          },
          xMinutes: { one: "1 minute", other: "{{count}} minutes" },
          aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
          xHours: { one: "1 hour", other: "{{count}} hours" },
          xDays: { one: "1 day", other: "{{count}} days" },
          aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
          xWeeks: { one: "1 week", other: "{{count}} weeks" },
          aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months",
          },
          xMonths: { one: "1 month", other: "{{count}} months" },
          aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
          xYears: { one: "1 year", other: "{{count}} years" },
          overXYears: { one: "over 1 year", other: "over {{count}} years" },
          almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years",
          },
        };
      function y(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      var w = {
          date: y({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: y({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: y({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        p = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function M(e) {
        return function (t, n) {
          var a;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            e.formattingValues
          ) {
            var r = e.defaultFormattingWidth || e.defaultWidth,
              i = null != n && n.width ? String(n.width) : r;
            a = e.formattingValues[i] || e.formattingValues[r];
          } else {
            var o = e.defaultWidth,
              s = null != n && n.width ? String(n.width) : e.defaultWidth;
            a = e.values[s] || e.values[o];
          }
          return a[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      function x(e) {
        return function (t) {
          var n,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = a.width,
            i =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            o = t.match(i);
          if (!o) return null;
          var s = o[0],
            u =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(u)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
                })(u, function (e) {
                  return e.test(s);
                })
              : (function (e, t) {
                  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
                })(u, function (e) {
                  return e.test(s);
                });
          return (
            (n = e.valueCallback ? e.valueCallback(l) : l),
            {
              value: (n = a.valueCallback ? a.valueCallback(n) : n),
              rest: t.slice(s.length),
            }
          );
        };
      }
      var D = {
        code: "en-US",
        formatDistance: function (e, t, n) {
          var a,
            r = b[e];
          return ((a =
            "string" == typeof r
              ? r
              : 1 === t
                ? r.one
                : r.other.replace("{{count}}", t.toString())),
          null != n && n.addSuffix)
            ? n.comparison && n.comparison > 0
              ? "in " + a
              : a + " ago"
            : a;
        },
        formatLong: w,
        formatRelative: function (e, t, n, a) {
          return p[e];
        },
        localize: {
          ordinalNumber: function (e, t) {
            var n = Number(e),
              a = n % 100;
            if (a > 20 || a < 10)
              switch (a % 10) {
                case 1:
                  return n + "st";
                case 2:
                  return n + "nd";
                case 3:
                  return n + "rd";
              }
            return n + "th";
          },
          era: M({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"],
            },
            defaultWidth: "wide",
          }),
          quarter: M({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1st quarter",
                "2nd quarter",
                "3rd quarter",
                "4th quarter",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return e - 1;
            },
          }),
          month: M({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              wide: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            defaultWidth: "wide",
          }),
          day: M({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: M({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        },
        match: {
          ordinalNumber:
            ((a = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.match(a.matchPattern);
              if (!n) return null;
              var r = n[0],
                i = e.match(a.parsePattern);
              if (!i) return null;
              var o = a.valueCallback ? a.valueCallback(i[0]) : i[0];
              return {
                value: (o = t.valueCallback ? t.valueCallback(o) : o),
                rest: e.slice(r.length),
              };
            }),
          era: x({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: x({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: x({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: x({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: x({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      function S(e, t) {
        if (null == e)
          throw TypeError(
            "assign requires that input parameter not be null or undefined",
          );
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }
      function j(e) {
        var t = new Date(
          Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds(),
          ),
        );
        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
      }
      function k(e, t, n) {
        m(2, arguments);
        var a,
          r,
          i,
          o,
          s,
          u =
            null !==
              (a =
                null !== (r = null == n ? void 0 : n.locale) && void 0 !== r
                  ? r
                  : c.locale) && void 0 !== a
              ? a
              : D;
        if (!u.formatDistance)
          throw RangeError("locale must contain formatDistance property");
        var l = g(e, t);
        if (isNaN(l)) throw RangeError("Invalid time value");
        var d = S(S({}, n), {
          addSuffix: Boolean(null == n ? void 0 : n.addSuffix),
          comparison: l,
        });
        l > 0 ? ((i = f(t)), (o = f(e))) : ((i = f(e)), (o = f(t)));
        var h = (function (e, t, n) {
            m(2, arguments);
            var a,
              r =
                (function (e, t) {
                  return m(2, arguments), f(e).getTime() - f(t).getTime();
                })(e, t) / 1e3;
            return (
              (a = null == n ? void 0 : n.roundingMethod) ? v[a] : v.trunc
            )(r);
          })(o, i),
          b = Math.round((h - (j(o) - j(i)) / 1e3) / 60);
        if (b < 2) {
          if (null != n && n.includeSeconds) {
            if (h < 5) return u.formatDistance("lessThanXSeconds", 5, d);
            if (h < 10) return u.formatDistance("lessThanXSeconds", 10, d);
            if (h < 20) return u.formatDistance("lessThanXSeconds", 20, d);
            if (h < 40) return u.formatDistance("halfAMinute", 0, d);
            else if (h < 60) return u.formatDistance("lessThanXMinutes", 1, d);
            else return u.formatDistance("xMinutes", 1, d);
          }
          return 0 === b
            ? u.formatDistance("lessThanXMinutes", 1, d)
            : u.formatDistance("xMinutes", b, d);
        }
        if (b < 45) return u.formatDistance("xMinutes", b, d);
        if (b < 90) return u.formatDistance("aboutXHours", 1, d);
        if (b < 1440)
          return u.formatDistance("aboutXHours", Math.round(b / 60), d);
        if (b < 2520) return u.formatDistance("xDays", 1, d);
        if (b < 43200)
          return u.formatDistance("xDays", Math.round(b / 1440), d);
        if (b < 86400)
          return (
            (s = Math.round(b / 43200)), u.formatDistance("aboutXMonths", s, d)
          );
        if (
          (s = (function (e, t) {
            m(2, arguments);
            var n,
              a = f(e),
              r = f(t),
              i = g(a, r),
              o = Math.abs(
                (function (e, t) {
                  m(2, arguments);
                  var n = f(e),
                    a = f(t);
                  return (
                    12 * (n.getFullYear() - a.getFullYear()) +
                    (n.getMonth() - a.getMonth())
                  );
                })(a, r),
              );
            if (o < 1) n = 0;
            else {
              1 === a.getMonth() && a.getDate() > 27 && a.setDate(30),
                a.setMonth(a.getMonth() - i * o);
              var s = g(a, r) === -i;
              (function (e) {
                m(1, arguments);
                var t = f(e);
                return (
                  (function (e) {
                    m(1, arguments);
                    var t = f(e);
                    return t.setHours(23, 59, 59, 999), t;
                  })(t).getTime() ===
                  (function (e) {
                    m(1, arguments);
                    var t = f(e),
                      n = t.getMonth();
                    return (
                      t.setFullYear(t.getFullYear(), n + 1, 0),
                      t.setHours(23, 59, 59, 999),
                      t
                    );
                  })(t).getTime()
                );
              })(f(e)) &&
                1 === o &&
                1 === g(e, r) &&
                (s = !1),
                (n = i * (o - Number(s)));
            }
            return 0 === n ? 0 : n;
          })(o, i)) < 12
        )
          return u.formatDistance("xMonths", Math.round(b / 43200), d);
        var y = s % 12,
          w = Math.floor(s / 12);
        return y < 3
          ? u.formatDistance("aboutXYears", w, d)
          : y < 9
            ? u.formatDistance("overXYears", w, d)
            : u.formatDistance("almostXYears", w + 1, d);
      }
      var T = n(95898),
        C = d()(
          function () {
            return Promise.all([n.e(5127), n.e(1577), n.e(6490)]).then(
              n.bind(n, 36490),
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [36490];
              },
            },
          },
        ),
        W = d()(
          function () {
            return n.e(9612).then(n.bind(n, 49612));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [49612];
              },
            },
          },
        ),
        P = [
          {
            type: "edit",
            classIcon: "fas fa-pen",
            label: "Edit",
            isOwnerComment: !0,
            isOwnerTour: !1,
          },
          {
            type: "resolved",
            classIcon: "fas fa-check",
            label: "Mark Resolve",
            isOwnerTour: !0,
            isOwnerComment: !1,
          },
          {
            type: "processing",
            classIcon: "fas fa-undo-alt",
            label: "Mark Active",
            isOwnerTour: !0,
            isOwnerComment: !1,
          },
          {
            type: "remove",
            classIcon: "fas fa-trash-alt",
            label: "Delete",
            isOwnerTour: !0,
            isOwnerComment: !0,
          },
        ],
        N = (0, u.memo)(function (e) {
          var t = e.layout,
            n = void 0 === t ? "parent" : t,
            a = e.children,
            l = e.commentScene,
            d = e.onClick,
            c = e.onUpdate,
            m = e.onDelete,
            h = (0, u.useMemo)(
              function () {
                return P.filter(function (e) {
                  var t = !1;
                  return (
                    e.isOwnerComment && e.isOwnerTour
                      ? (t =
                          (null == l ? void 0 : l.isOwnerComment) ||
                          (null == l ? void 0 : l.isOwnerTour))
                      : e.isOwnerComment && !e.isOwnerTour
                        ? (t = null == l ? void 0 : l.isOwnerComment)
                        : !e.isOwnerComment &&
                          e.isOwnerTour &&
                          (t =
                            "resolved" === e.type
                              ? (null == l ? void 0 : l.isOwnerTour) &&
                                !l.isResolved &&
                                !l.parent
                              : "processing" === e.type
                                ? (null == l ? void 0 : l.isOwnerTour) &&
                                  l.isResolved &&
                                  !l.parent
                                : null == l
                                  ? void 0
                                  : l.isOwnerTour),
                    t
                  );
                });
              },
              [l],
            ),
            f = (0, o.Z)((0, u.useState)(!1), 2),
            g = f[0],
            v = f[1],
            b = (0, u.useCallback)(
              function () {
                d && d(l);
              },
              [d, l],
            ),
            y = (0, u.useCallback)(
              function (e) {
                switch (e.type) {
                  case "edit":
                    v(!0);
                    break;
                  case "resolved":
                    c(
                      (0, i.Z)((0, r.Z)({}, l), {
                        ath: void 0,
                        atv: void 0,
                        message: void 0,
                        scene_id: l.id,
                        isResolved: !0,
                      }),
                    );
                    break;
                  case "processing":
                    c(
                      (0, i.Z)((0, r.Z)({}, l), {
                        ath: void 0,
                        atv: void 0,
                        message: void 0,
                        scene_id: l.id,
                        isResolved: !1,
                      }),
                    );
                    break;
                  case "remove":
                    m(l);
                }
              },
              [l, m, c],
            ),
            w = (0, u.useCallback)(function () {
              return v(!1);
            }, []),
            p = (0, u.useCallback)(
              function (e) {
                return c(
                  (0, i.Z)((0, r.Z)({}, l), {
                    message: e,
                    ath: void 0,
                    atv: void 0,
                    isResolved: void 0,
                    scene_id: l.id,
                  }),
                );
              },
              [l, c],
            );
          return (0, s.jsxs)(T.s2, {
            className: "".concat(n, "-layout"),
            onClick: b,
            children: [
              (0, s.jsx)("div", {
                className: "--main",
                children:
                  "parent" === n
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)("div", {
                            className: "user",
                            children: [
                              (0, s.jsx)("div", {
                                className: "avt",
                                children: (0, s.jsx)("img", {
                                  src: l.user.avatar || "",
                                  alt: "",
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "info",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "name",
                                    children: l.user.name || l.user.email || "",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "time",
                                    children: k(
                                      new Date(l.created_at),
                                      new Date(),
                                      { addSuffix: !1 },
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g
                            ? (0, s.jsx)(C, {
                                initValue: l.message,
                                onCancel: w,
                                onSubmit: p,
                              })
                            : (0, s.jsx)("div", {
                                className: "txt",
                                children: l.message,
                              }),
                          a,
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("div", {
                            className: "avt",
                            children: (0, s.jsx)("img", {
                              src: l.user.avatar || "",
                              alt: "",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "content",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "info",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "name",
                                    children: l.user.name || l.user.email || "",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "time",
                                    children: k(
                                      new Date(l.created_at),
                                      new Date(),
                                      { addSuffix: !1 },
                                    ),
                                  }),
                                ],
                              }),
                              g
                                ? (0, s.jsx)(C, {
                                    initValue: l.message,
                                    onCancel: w,
                                    onSubmit: p,
                                  })
                                : (0, s.jsx)("div", {
                                    className: "txt",
                                    children: l.message,
                                  }),
                            ],
                          }),
                          a,
                        ],
                      }),
              }),
              !!h.length &&
                (0, s.jsx)("div", {
                  className: "--extra",
                  children: (0, s.jsx)(W, {
                    listMenu: h,
                    onTriggerAction: y,
                    placement: "bottom",
                    children: (0, s.jsx)("i", {
                      "aria-hidden": !0,
                      className: "fas fa-ellipsis-v",
                    }),
                  }),
                }),
            ],
          });
        });
    },
  },
]);
//# sourceMappingURL=390.6ce9da2ee8353f38.js.map
