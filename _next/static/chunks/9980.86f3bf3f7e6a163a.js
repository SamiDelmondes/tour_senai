(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9980],
  {
    22689: function (t, e, i) {
      "use strict";
      i.d(e, {
        KR: function () {
          return F;
        },
      });
      let s = (t) =>
          "object" == typeof t &&
          null !== t &&
          t.constructor === Object &&
          "[object Object]" === Object.prototype.toString.call(t),
        o = (...t) => {
          let e = !1;
          "boolean" == typeof t[0] && (e = t.shift());
          let i = t[0];
          if (!i || "object" != typeof i)
            throw Error("extendee must be an object");
          let n = t.slice(1),
            a = n.length;
          for (let t = 0; t < a; t++) {
            let a = n[t];
            for (let t in a)
              if (a.hasOwnProperty(t)) {
                let n = a[t];
                if (e && (Array.isArray(n) || s(n))) {
                  let e = Array.isArray(n) ? [] : {};
                  i[t] = o(!0, i.hasOwnProperty(t) ? i[t] : e, n);
                } else i[t] = n;
              }
          }
          return i;
        },
        n = (t, e = 1e4) =>
          Math.round(((t = parseFloat(t) || 0) + Number.EPSILON) * e) / e,
        a = function (t) {
          return (
            !!(
              t &&
              "object" == typeof t &&
              t instanceof Element &&
              t !== document.body
            ) &&
            !t.__Panzoom &&
            (!(function (t) {
              let e = getComputedStyle(t)["overflow-y"],
                i = getComputedStyle(t)["overflow-x"],
                s =
                  ("scroll" === e || "auto" === e) &&
                  Math.abs(t.scrollHeight - t.clientHeight) > 1,
                o =
                  ("scroll" === i || "auto" === i) &&
                  Math.abs(t.scrollWidth - t.clientWidth) > 1;
              return s || o;
            })(t)
              ? a(t.parentNode)
              : t)
          );
        },
        r =
          ("undefined" != typeof window && window.ResizeObserver) ||
          class {
            constructor(t) {
              (this.observables = []),
                (this.boundCheck = this.check.bind(this)),
                this.boundCheck(),
                (this.callback = t);
            }
            observe(t) {
              if (this.observables.some((e) => e.el === t)) return;
              let e = {
                el: t,
                size: { height: t.clientHeight, width: t.clientWidth },
              };
              this.observables.push(e);
            }
            unobserve(t) {
              this.observables = this.observables.filter((e) => e.el !== t);
            }
            disconnect() {
              this.observables = [];
            }
            check() {
              let t = this.observables
                .filter((t) => {
                  let e = t.el.clientHeight,
                    i = t.el.clientWidth;
                  if (t.size.height !== e || t.size.width !== i)
                    return (t.size.height = e), (t.size.width = i), !0;
                })
                .map((t) => t.el);
              t.length > 0 && this.callback(t),
                window.requestAnimationFrame(this.boundCheck);
            }
          };
      class l {
        constructor(t) {
          (this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
            (this.pageX = t.pageX),
            (this.pageY = t.pageY),
            (this.clientX = t.clientX),
            (this.clientY = t.clientY);
        }
      }
      let h = (t, e) =>
          e
            ? Math.sqrt(
                (e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2,
              )
            : 0,
        c = (t, e) =>
          e
            ? {
                clientX: (t.clientX + e.clientX) / 2,
                clientY: (t.clientY + e.clientY) / 2,
              }
            : t;
      class d {
        constructor(
          t,
          { start: e = () => !0, move: i = () => {}, end: s = () => {} } = {},
        ) {
          (this._element = t),
            (this.startPointers = []),
            (this.currentPointers = []),
            (this._pointerStart = (t) => {
              if (t.buttons > 0 && 0 !== t.button) return;
              let e = new l(t);
              this.currentPointers.some((t) => t.id === e.id) ||
                (this._triggerPointerStart(e, t) &&
                  (window.addEventListener("mousemove", this._move),
                  window.addEventListener("mouseup", this._pointerEnd)));
            }),
            (this._touchStart = (t) => {
              for (let e of Array.from(t.changedTouches || []))
                this._triggerPointerStart(new l(e), t);
            }),
            (this._move = (t) => {
              let e = this.currentPointers.slice(),
                i =
                  "changedTouches" in t
                    ? Array.from(t.changedTouches).map((t) => new l(t))
                    : [new l(t)];
              for (let t of i) {
                let e = this.currentPointers.findIndex((e) => e.id === t.id);
                e < 0 || (this.currentPointers[e] = t);
              }
              this._moveCallback(e, this.currentPointers.slice(), t);
            }),
            (this._triggerPointerEnd = (t, e) => {
              let i = this.currentPointers.findIndex((e) => e.id === t.id);
              return (
                !(i < 0) &&
                (this.currentPointers.splice(i, 1),
                this.startPointers.splice(i, 1),
                this._endCallback(t, e),
                !0)
              );
            }),
            (this._pointerEnd = (t) => {
              (t.buttons > 0 && 0 !== t.button) ||
                (this._triggerPointerEnd(new l(t), t) &&
                  (window.removeEventListener("mousemove", this._move, {
                    passive: !1,
                  }),
                  window.removeEventListener("mouseup", this._pointerEnd, {
                    passive: !1,
                  })));
            }),
            (this._touchEnd = (t) => {
              for (let e of Array.from(t.changedTouches || []))
                this._triggerPointerEnd(new l(e), t);
            }),
            (this._startCallback = e),
            (this._moveCallback = i),
            (this._endCallback = s),
            this._element.addEventListener("mousedown", this._pointerStart, {
              passive: !1,
            }),
            this._element.addEventListener("touchstart", this._touchStart, {
              passive: !1,
            }),
            this._element.addEventListener("touchmove", this._move, {
              passive: !1,
            }),
            this._element.addEventListener("touchend", this._touchEnd),
            this._element.addEventListener("touchcancel", this._touchEnd);
        }
        stop() {
          this._element.removeEventListener("mousedown", this._pointerStart, {
            passive: !1,
          }),
            this._element.removeEventListener("touchstart", this._touchStart, {
              passive: !1,
            }),
            this._element.removeEventListener("touchmove", this._move, {
              passive: !1,
            }),
            this._element.removeEventListener("touchend", this._touchEnd),
            this._element.removeEventListener("touchcancel", this._touchEnd),
            window.removeEventListener("mousemove", this._move),
            window.removeEventListener("mouseup", this._pointerEnd);
        }
        _triggerPointerStart(t, e) {
          return (
            !!this._startCallback(t, e) &&
            (this.currentPointers.push(t), this.startPointers.push(t), !0)
          );
        }
      }
      class u {
        constructor(t = {}) {
          for (let e of ((this.options = o(!0, {}, t)),
          (this.plugins = []),
          (this.events = {}),
          ["on", "once"]))
            for (let t of Object.entries(this.options[e] || {})) this[e](...t);
        }
        option(t, e, ...i) {
          var s, o;
          let n =
            ((s = t = String(t)),
            (o = this.options),
            s.split(".").reduce(function (t, e) {
              return t && t[e];
            }, o));
          return (
            "function" == typeof n && (n = n.call(this, this, ...i)),
            void 0 === n ? e : n
          );
        }
        localize(t, e = []) {
          return (t = (t = String(t).replace(
            /\{\{(\w+).?(\w+)?\}\}/g,
            (t, i, s) => {
              let o = "";
              s
                ? (o = this.option(
                    `${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`,
                  ))
                : i && (o = this.option(`l10n.${i}`)),
                o || (o = t);
              for (let t = 0; t < e.length; t++)
                o = o.split(e[t][0]).join(e[t][1]);
              return o;
            },
          )).replace(/\{\{(.*)\}\}/, (t, e) => e));
        }
        on(t, e) {
          if (s(t)) {
            for (let e of Object.entries(t)) this.on(...e);
            return this;
          }
          return (
            String(t)
              .split(" ")
              .forEach((t) => {
                let i = (this.events[t] = this.events[t] || []);
                -1 == i.indexOf(e) && i.push(e);
              }),
            this
          );
        }
        once(t, e) {
          if (s(t)) {
            for (let e of Object.entries(t)) this.once(...e);
            return this;
          }
          return (
            String(t)
              .split(" ")
              .forEach((t) => {
                let i = (...s) => {
                  this.off(t, i), e.call(this, this, ...s);
                };
                (i._ = e), this.on(t, i);
              }),
            this
          );
        }
        off(t, e) {
          if (!s(t))
            return (
              t.split(" ").forEach((t) => {
                let i = this.events[t];
                if (!i || !i.length) return this;
                let s = -1;
                for (let t = 0, o = i.length; t < o; t++) {
                  let o = i[t];
                  if (o && (o === e || o._ === e)) {
                    s = t;
                    break;
                  }
                }
                -1 != s && i.splice(s, 1);
              }),
              this
            );
          for (let e of Object.entries(t)) this.off(...e);
        }
        trigger(t, ...e) {
          for (let i of [...(this.events[t] || [])].slice())
            if (i && !1 === i.call(this, this, ...e)) return !1;
          for (let i of [...(this.events["*"] || [])].slice())
            if (i && !1 === i.call(this, t, this, ...e)) return !1;
          return !0;
        }
        attachPlugins(t) {
          let e = {};
          for (let [i, s] of Object.entries(t || {}))
            !1 === this.options[i] ||
              this.plugins[i] ||
              ((this.options[i] = o({}, s.defaults || {}, this.options[i])),
              (e[i] = new s(this)));
          for (let [t, i] of Object.entries(e)) i.attach(this);
          return (this.plugins = Object.assign({}, this.plugins, e)), this;
        }
        detachPlugins() {
          for (let t in this.plugins) {
            let e;
            (e = this.plugins[t]) &&
              "function" == typeof e.detach &&
              e.detach(this);
          }
          return (this.plugins = {}), this;
        }
      }
      let g = {
        touch: !0,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: !1,
        lockAxis: !1,
        friction: 0.64,
        decelFriction: 0.88,
        zoomFriction: 0.74,
        bounceForce: 0.2,
        baseScale: 1,
        minScale: 1,
        maxScale: 2,
        step: 0.5,
        textSelection: !1,
        click: "toggleZoom",
        wheel: "zoom",
        wheelFactor: 42,
        wheelLimit: 5,
        draggableClass: "is-draggable",
        draggingClass: "is-dragging",
        ratio: 1,
      };
      class f extends u {
        constructor(t, e = {}) {
          for (let i of (super(o(!0, {}, g, e)),
          (this.state = "init"),
          (this.$container = t),
          ["onLoad", "onWheel", "onClick"]))
            this[i] = this[i].bind(this);
          this.initLayout(),
            this.resetValues(),
            this.attachPlugins(f.Plugins),
            this.trigger("init"),
            this.updateMetrics(),
            this.attachEvents(),
            this.trigger("ready"),
            !1 === this.option("centerOnStart")
              ? (this.state = "ready")
              : this.panTo({ friction: 0 }),
            (t.__Panzoom = this);
        }
        initLayout() {
          let t = this.$container;
          if (!(t instanceof HTMLElement))
            throw Error("Panzoom: Container not found");
          let e =
            this.option("content") || t.querySelector(".panzoom__content");
          if (!e) throw Error("Panzoom: Content not found");
          this.$content = e;
          let i =
            this.option("viewport") || t.querySelector(".panzoom__viewport");
          i ||
            !1 === this.option("wrapInner") ||
            ((i = document.createElement("div")).classList.add(
              "panzoom__viewport",
            ),
            i.append(...t.childNodes),
            t.appendChild(i)),
            (this.$viewport = i || e.parentNode);
        }
        resetValues() {
          (this.updateRate = this.option(
            "updateRate",
            /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24,
          )),
            (this.container = { width: 0, height: 0 }),
            (this.viewport = { width: 0, height: 0 }),
            (this.content = {
              origWidth: 0,
              origHeight: 0,
              width: 0,
              height: 0,
              x: this.option("x", 0),
              y: this.option("y", 0),
              scale: this.option("baseScale"),
            }),
            (this.transform = { x: 0, y: 0, scale: 1 }),
            this.resetDragPosition();
        }
        onLoad(t) {
          this.updateMetrics(),
            this.panTo({ scale: this.option("baseScale"), friction: 0 }),
            this.trigger("load", t);
        }
        onClick(t) {
          if (
            t.defaultPrevented ||
            (document.activeElement &&
              document.activeElement.closest("[contenteditable]"))
          )
            return;
          if (
            this.option("textSelection") &&
            window.getSelection().toString().length &&
            (!t.target || !t.target.hasAttribute("data-fancybox-close"))
          )
            return void t.stopPropagation();
          let e = this.$content.getClientRects()[0];
          if (
            "ready" !== this.state &&
            (this.dragPosition.midPoint ||
              Math.abs(e.top - this.dragStart.rect.top) > 1 ||
              Math.abs(e.left - this.dragStart.rect.left) > 1)
          )
            return t.preventDefault(), void t.stopPropagation();
          !1 !== this.trigger("click", t) &&
            this.option("zoom") &&
            "toggleZoom" === this.option("click") &&
            (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
        }
        onWheel(t) {
          !1 !== this.trigger("wheel", t) &&
            this.option("zoom") &&
            this.option("wheel") &&
            this.zoomWithWheel(t);
        }
        zoomWithWheel(t) {
          void 0 === this.changedDelta && (this.changedDelta = 0);
          let e = Math.max(
              -1,
              Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail),
            ),
            i = this.content.scale,
            s = (i * (100 + e * this.option("wheelFactor"))) / 100;
          if (
            ((e < 0 && 0.01 > Math.abs(i - this.option("minScale"))) ||
            (e > 0 && 0.01 > Math.abs(i - this.option("maxScale")))
              ? ((this.changedDelta += Math.abs(e)), (s = i))
              : ((this.changedDelta = 0),
                (s = Math.max(
                  Math.min(s, this.option("maxScale")),
                  this.option("minScale"),
                ))),
            this.changedDelta > this.option("wheelLimit") ||
              (t.preventDefault(), s === i))
          )
            return;
          let o = this.$content.getBoundingClientRect(),
            n = t.clientX - o.left,
            a = t.clientY - o.top;
          this.zoomTo(s, { x: n, y: a });
        }
        zoomWithClick(t) {
          let e = this.$content.getClientRects()[0],
            i = t.clientX - e.left,
            s = t.clientY - e.top;
          this.toggleZoom({ x: i, y: s });
        }
        attachEvents() {
          this.$content.addEventListener("load", this.onLoad),
            this.$container.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.$container.addEventListener("click", this.onClick, {
              passive: !1,
            }),
            this.initObserver();
          let t = new d(this.$container, {
            start: (e, i) => {
              if (!this.option("touch") || this.velocity.scale < 0) return !1;
              let s = i.composedPath()[0];
              return (
                !(
                  !t.currentPointers.length &&
                  (-1 !==
                    [
                      "BUTTON",
                      "TEXTAREA",
                      "OPTION",
                      "INPUT",
                      "SELECT",
                      "VIDEO",
                    ].indexOf(s.nodeName) ||
                    (this.option("textSelection") &&
                      ((t, e, i) => {
                        let s = t.childNodes,
                          o = document.createRange();
                        for (let t = 0; t < s.length; t++) {
                          let n = s[t];
                          if (n.nodeType !== Node.TEXT_NODE) continue;
                          o.selectNodeContents(n);
                          let a = o.getBoundingClientRect();
                          if (
                            e >= a.left &&
                            i >= a.top &&
                            e <= a.right &&
                            i <= a.bottom
                          )
                            return n;
                        }
                        return !1;
                      })(s, e.clientX, e.clientY)))
                ) &&
                !a(s) &&
                !1 !== this.trigger("touchStart", i) &&
                ("mousedown" === i.type && i.preventDefault(),
                (this.state = "pointerdown"),
                this.resetDragPosition(),
                (this.dragPosition.midPoint = null),
                (this.dragPosition.time = Date.now()),
                !0)
              );
            },
            move: (e, i, s) => {
              if ("pointerdown" !== this.state) return;
              if (!1 === this.trigger("touchMove", s))
                return void s.preventDefault();
              if (
                (i.length < 2 &&
                  !0 === this.option("panOnlyZoomed") &&
                  this.content.width <= this.viewport.width &&
                  this.content.height <= this.viewport.height &&
                  this.transform.scale <= this.option("baseScale")) ||
                (i.length > 1 &&
                  (!this.option("zoom") || !1 === this.option("pinchToZoom")))
              )
                return;
              let o = c(e[0], e[1]),
                n = c(i[0], i[1]),
                a = n.clientX - o.clientX,
                r = n.clientY - o.clientY,
                l = h(e[0], e[1]),
                d = h(i[0], i[1]);
              (this.dragOffset.x += a),
                (this.dragOffset.y += r),
                (this.dragOffset.scale *= l && d ? d / l : 1),
                (this.dragOffset.time = Date.now() - this.dragPosition.time);
              let u = 1 === this.dragStart.scale && this.option("lockAxis");
              if (u && !this.lockAxis) {
                if (
                  6 > Math.abs(this.dragOffset.x) &&
                  6 > Math.abs(this.dragOffset.y)
                )
                  return void s.preventDefault();
                let t = Math.abs(
                  (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) /
                    Math.PI,
                );
                this.lockAxis = t > 45 && t < 135 ? "y" : "x";
              }
              if ("xy" === u || "y" !== this.lockAxis) {
                if (
                  (s.preventDefault(),
                  s.stopPropagation(),
                  s.stopImmediatePropagation(),
                  this.lockAxis &&
                    (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0),
                  this.$container.classList.add(this.option("draggingClass")),
                  (this.transform.scale === this.option("baseScale") &&
                    "y" === this.lockAxis) ||
                    (this.dragPosition.x =
                      this.dragStart.x + this.dragOffset.x),
                  (this.transform.scale === this.option("baseScale") &&
                    "x" === this.lockAxis) ||
                    (this.dragPosition.y =
                      this.dragStart.y + this.dragOffset.y),
                  (this.dragPosition.scale =
                    this.dragStart.scale * this.dragOffset.scale),
                  i.length > 1)
                ) {
                  let e = c(t.startPointers[0], t.startPointers[1]),
                    i = e.clientX - this.dragStart.rect.x,
                    s = e.clientY - this.dragStart.rect.y,
                    { deltaX: o, deltaY: a } = this.getZoomDelta(
                      this.content.scale * this.dragOffset.scale,
                      i,
                      s,
                    );
                  (this.dragPosition.x -= o),
                    (this.dragPosition.y -= a),
                    (this.dragPosition.midPoint = n);
                } else this.setDragResistance();
                (this.transform = {
                  x: this.dragPosition.x,
                  y: this.dragPosition.y,
                  scale: this.dragPosition.scale,
                }),
                  this.startAnimation();
              }
            },
            end: (e, i) => {
              if ("pointerdown" !== this.state) return;
              if (
                ((this._dragOffset = { ...this.dragOffset }),
                t.currentPointers.length)
              )
                return void this.resetDragPosition();
              if (
                ((this.state = "decel"),
                (this.friction = this.option("decelFriction")),
                this.recalculateTransform(),
                this.$container.classList.remove(this.option("draggingClass")),
                !1 === this.trigger("touchEnd", i) || "decel" !== this.state)
              )
                return;
              let s = this.option("minScale");
              if (this.transform.scale < s)
                return void this.zoomTo(s, { friction: 0.64 });
              let o = this.option("maxScale");
              if (this.transform.scale - o > 0.01) {
                let t = this.dragPosition.midPoint || e,
                  i = this.$content.getClientRects()[0];
                this.zoomTo(o, {
                  friction: 0.64,
                  x: t.clientX - i.left,
                  y: t.clientY - i.top,
                });
              }
            },
          });
          this.pointerTracker = t;
        }
        initObserver() {
          this.resizeObserver ||
            ((this.resizeObserver = new r(() => {
              this.updateTimer ||
                (this.updateTimer = setTimeout(() => {
                  let t = this.$container.getBoundingClientRect();
                  t.width &&
                    t.height &&
                    (Math.abs(t.width - this.container.width) > 1 ||
                      Math.abs(t.height - this.container.height) > 1) &&
                    (this.isAnimating() && this.endAnimation(!0),
                    this.updateMetrics(),
                    this.panTo({
                      x: this.content.x,
                      y: this.content.y,
                      scale: this.option("baseScale"),
                      friction: 0,
                    })),
                    (this.updateTimer = null);
                }, this.updateRate));
            })),
            this.resizeObserver.observe(this.$container));
        }
        resetDragPosition() {
          (this.lockAxis = null),
            (this.friction = this.option("friction")),
            (this.velocity = { x: 0, y: 0, scale: 0 });
          let { x: t, y: e, scale: i } = this.content;
          (this.dragStart = {
            rect: this.$content.getBoundingClientRect(),
            x: t,
            y: e,
            scale: i,
          }),
            (this.dragPosition = {
              ...this.dragPosition,
              x: t,
              y: e,
              scale: i,
            }),
            (this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 });
        }
        updateMetrics(t) {
          !0 !== t && this.trigger("beforeUpdate");
          let e = this.$container,
            i = this.$content,
            s = this.$viewport,
            o = i instanceof HTMLImageElement,
            a = this.option("zoom"),
            r = this.option("resizeParent", a),
            l = this.option("width"),
            h = this.option("height"),
            c =
              l ||
              Math.max(
                parseFloat(i.naturalWidth || 0),
                parseFloat(
                  (i.width && i.width.baseVal && i.width.baseVal.value) || 0,
                ),
                parseFloat(i.offsetWidth || 0),
                parseFloat(i.scrollWidth || 0),
              ),
            d =
              h ||
              Math.max(
                parseFloat(i.naturalHeight || 0),
                parseFloat(
                  (i.height && i.height.baseVal && i.height.baseVal.value) || 0,
                ),
                parseFloat(i.offsetHeight || 0),
                parseFloat(i.scrollHeight || 0),
              );
          Object.assign(i.style, {
            width: l ? `${l}px` : "",
            height: h ? `${h}px` : "",
            maxWidth: "",
            maxHeight: "",
          }),
            r && Object.assign(s.style, { width: "", height: "" });
          let u = this.option("ratio");
          (c = n(c * u)), (d = n(d * u)), (l = c), (h = d);
          let g = i.getBoundingClientRect(),
            f = s.getBoundingClientRect(),
            p = s == e ? f : e.getBoundingClientRect(),
            m = Math.max(s.offsetWidth, n(f.width)),
            y = Math.max(s.offsetHeight, n(f.height)),
            b = window.getComputedStyle(s);
          if (
            ((m -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight)),
            (y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom)),
            (this.viewport.width = m),
            (this.viewport.height = y),
            a)
          ) {
            if (Math.abs(c - g.width) > 0.1 || Math.abs(d - g.height) > 0.1) {
              let t = ((t, e, i, s) => {
                let o = Math.min(i / t || 0, s / e);
                return { width: t * o || 0, height: e * o || 0 };
              })(c, d, Math.min(c, g.width), Math.min(d, g.height));
              (l = n(t.width)), (h = n(t.height));
            }
            Object.assign(i.style, {
              width: `${l}px`,
              height: `${h}px`,
              transform: "",
            });
          }
          if (
            (r &&
              (Object.assign(s.style, { width: `${l}px`, height: `${h}px` }),
              (this.viewport = { ...this.viewport, width: l, height: h })),
            o && a && "function" != typeof this.options.maxScale)
          ) {
            let t = this.option("maxScale");
            this.options.maxScale = function () {
              return this.content.origWidth > 0 && this.content.fitWidth > 0
                ? this.content.origWidth / this.content.fitWidth
                : t;
            };
          }
          (this.content = {
            ...this.content,
            origWidth: c,
            origHeight: d,
            fitWidth: l,
            fitHeight: h,
            width: l,
            height: h,
            scale: 1,
            isZoomable: a,
          }),
            (this.container = { width: p.width, height: p.height }),
            !0 !== t && this.trigger("afterUpdate");
        }
        zoomIn(t) {
          this.zoomTo(this.content.scale + (t || this.option("step")));
        }
        zoomOut(t) {
          this.zoomTo(this.content.scale - (t || this.option("step")));
        }
        toggleZoom(t = {}) {
          let e = this.option("maxScale"),
            i = this.option("baseScale"),
            s = this.content.scale > i + 0.5 * (e - i) ? i : e;
          this.zoomTo(s, t);
        }
        zoomTo(
          t = this.option("baseScale"),
          { x: e = null, y: i = null } = {},
        ) {
          t = Math.max(
            Math.min(t, this.option("maxScale")),
            this.option("minScale"),
          );
          let s = n(
            this.content.scale / (this.content.width / this.content.fitWidth),
            1e7,
          );
          null === e && (e = this.content.width * s * 0.5),
            null === i && (i = this.content.height * s * 0.5);
          let { deltaX: o, deltaY: a } = this.getZoomDelta(t, e, i);
          (e = this.content.x - o),
            (i = this.content.y - a),
            this.panTo({
              x: e,
              y: i,
              scale: t,
              friction: this.option("zoomFriction"),
            });
        }
        getZoomDelta(t, e = 0, i = 0) {
          let s = this.content.fitWidth * this.content.scale,
            o = this.content.fitHeight * this.content.scale;
          return {
            deltaX: (this.content.fitWidth * t - s) * (e > 0 && s ? e / s : 0),
            deltaY: (this.content.fitHeight * t - o) * (i > 0 && o ? i / o : 0),
          };
        }
        panTo({
          x: t = this.content.x,
          y: e = this.content.y,
          scale: i,
          friction: s = this.option("friction"),
          ignoreBounds: o = !1,
        } = {}) {
          if (((i = i || this.content.scale || 1), !o)) {
            let { boundX: s, boundY: o } = this.getBounds(i);
            s && (t = Math.max(Math.min(t, s.to), s.from)),
              o && (e = Math.max(Math.min(e, o.to), o.from));
          }
          (this.friction = s),
            (this.transform = { ...this.transform, x: t, y: e, scale: i }),
            s
              ? ((this.state = "panning"),
                (this.velocity = {
                  x: (1 / this.friction - 1) * (t - this.content.x),
                  y: (1 / this.friction - 1) * (e - this.content.y),
                  scale: (1 / this.friction - 1) * (i - this.content.scale),
                }),
                this.startAnimation())
              : this.endAnimation();
        }
        startAnimation() {
          this.rAF
            ? cancelAnimationFrame(this.rAF)
            : this.trigger("startAnimation"),
            (this.rAF = requestAnimationFrame(() => this.animate()));
        }
        animate() {
          if (
            (this.setEdgeForce(),
            this.setDragForce(),
            (this.velocity.x *= this.friction),
            (this.velocity.y *= this.friction),
            (this.velocity.scale *= this.friction),
            (this.content.x += this.velocity.x),
            (this.content.y += this.velocity.y),
            (this.content.scale += this.velocity.scale),
            this.isAnimating())
          )
            this.setTransform();
          else if ("pointerdown" !== this.state)
            return void this.endAnimation();
          this.rAF = requestAnimationFrame(() => this.animate());
        }
        getBounds(t) {
          let e = this.boundX,
            i = this.boundY;
          if (void 0 !== e && void 0 !== i) return { boundX: e, boundY: i };
          (e = { from: 0, to: 0 }),
            (i = { from: 0, to: 0 }),
            (t = t || this.transform.scale);
          let s = this.content.fitWidth * t,
            o = this.content.fitHeight * t,
            a = this.viewport.width,
            r = this.viewport.height;
          if (s < a) {
            let t = n(0.5 * (a - s));
            (e.from = t), (e.to = t);
          } else e.from = n(a - s);
          if (o < r) {
            let t = 0.5 * (r - o);
            (i.from = t), (i.to = t);
          } else i.from = n(r - o);
          return { boundX: e, boundY: i };
        }
        setEdgeForce() {
          let t, e, i, s;
          if ("decel" !== this.state) return;
          let o = this.option("bounceForce"),
            { boundX: n, boundY: a } = this.getBounds(
              Math.max(this.transform.scale, this.content.scale),
            );
          if (
            (n && ((t = this.content.x < n.from), (e = this.content.x > n.to)),
            a && ((i = this.content.y < a.from), (s = this.content.y > a.to)),
            t || e)
          ) {
            let e = ((t ? n.from : n.to) - this.content.x) * o,
              i = this.content.x + (this.velocity.x + e) / this.friction;
            i >= n.from && i <= n.to && (e += this.velocity.x),
              (this.velocity.x = e),
              this.recalculateTransform();
          }
          if (i || s) {
            let t = ((i ? a.from : a.to) - this.content.y) * o,
              e = this.content.y + (t + this.velocity.y) / this.friction;
            e >= a.from && e <= a.to && (t += this.velocity.y),
              (this.velocity.y = t),
              this.recalculateTransform();
          }
        }
        setDragResistance() {
          let t, e, i, s;
          if ("pointerdown" !== this.state) return;
          let { boundX: o, boundY: n } = this.getBounds(
            this.dragPosition.scale,
          );
          if (
            (o &&
              ((t = this.dragPosition.x < o.from),
              (e = this.dragPosition.x > o.to)),
            n &&
              ((i = this.dragPosition.y < n.from),
              (s = this.dragPosition.y > n.to)),
            (t || e) && (!t || !e))
          ) {
            let e = t ? o.from : o.to,
              i = e - this.dragPosition.x;
            this.dragPosition.x = e - 0.3 * i;
          }
          if ((i || s) && (!i || !s)) {
            let t = i ? n.from : n.to,
              e = t - this.dragPosition.y;
            this.dragPosition.y = t - 0.3 * e;
          }
        }
        setDragForce() {
          "pointerdown" === this.state &&
            ((this.velocity.x = this.dragPosition.x - this.content.x),
            (this.velocity.y = this.dragPosition.y - this.content.y),
            (this.velocity.scale =
              this.dragPosition.scale - this.content.scale));
        }
        recalculateTransform() {
          (this.transform.x =
            this.content.x + this.velocity.x / (1 / this.friction - 1)),
            (this.transform.y =
              this.content.y + this.velocity.y / (1 / this.friction - 1)),
            (this.transform.scale =
              this.content.scale +
              this.velocity.scale / (1 / this.friction - 1));
        }
        isAnimating() {
          return !(
            !this.friction ||
            !(
              Math.abs(this.velocity.x) > 0.05 ||
              Math.abs(this.velocity.y) > 0.05 ||
              Math.abs(this.velocity.scale) > 0.05
            )
          );
        }
        setTransform(t) {
          let e, i, s;
          if (
            (t
              ? ((e = n(this.transform.x)),
                (i = n(this.transform.y)),
                (s = this.transform.scale),
                (this.content = { ...this.content, x: e, y: i, scale: s }))
              : ((e = n(this.content.x)),
                (i = n(this.content.y)),
                (s =
                  this.content.scale /
                  (this.content.width / this.content.fitWidth)),
                (this.content = { ...this.content, x: e, y: i })),
            this.trigger("beforeTransform"),
            (e = n(this.content.x)),
            (i = n(this.content.y)),
            t && this.option("zoom"))
          ) {
            let t, o;
            (t = n(this.content.fitWidth * s)),
              (o = n(this.content.fitHeight * s)),
              (this.content.width = t),
              (this.content.height = o),
              (this.transform = {
                ...this.transform,
                width: t,
                height: o,
                scale: s,
              }),
              Object.assign(this.$content.style, {
                width: `${t}px`,
                height: `${o}px`,
                maxWidth: "none",
                maxHeight: "none",
                transform: `translate3d(${e}px, ${i}px, 0) scale(1)`,
              });
          } else
            this.$content.style.transform = `translate3d(${e}px, ${i}px, 0) scale(${s})`;
          this.trigger("afterTransform");
        }
        endAnimation(t) {
          cancelAnimationFrame(this.rAF),
            (this.rAF = null),
            (this.velocity = { x: 0, y: 0, scale: 0 }),
            this.setTransform(!0),
            (this.state = "ready"),
            this.handleCursor(),
            !0 !== t && this.trigger("endAnimation");
        }
        handleCursor() {
          let t = this.option("draggableClass");
          t &&
            this.option("touch") &&
            (1 == this.option("panOnlyZoomed") &&
            this.content.width <= this.viewport.width &&
            this.content.height <= this.viewport.height &&
            this.transform.scale <= this.option("baseScale")
              ? this.$container.classList.remove(t)
              : this.$container.classList.add(t));
        }
        detachEvents() {
          this.$content.removeEventListener("load", this.onLoad),
            this.$container.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.$container.removeEventListener("click", this.onClick, {
              passive: !1,
            }),
            this.pointerTracker &&
              (this.pointerTracker.stop(), (this.pointerTracker = null)),
            this.resizeObserver &&
              (this.resizeObserver.disconnect(), (this.resizeObserver = null));
        }
        destroy() {
          "destroy" !== this.state &&
            ((this.state = "destroy"),
            clearTimeout(this.updateTimer),
            (this.updateTimer = null),
            cancelAnimationFrame(this.rAF),
            (this.rAF = null),
            this.detachEvents(),
            this.detachPlugins(),
            this.resetDragPosition());
        }
      }
      (f.version = "4.0.31"), (f.Plugins = {});
      let p = (t, e) => {
        let i = 0;
        return function (...s) {
          let o = new Date().getTime();
          if (!(o - i < e)) return (i = o), t(...s);
        };
      };
      class m {
        constructor(t) {
          (this.$container = null),
            (this.$prev = null),
            (this.$next = null),
            (this.carousel = t),
            (this.onRefresh = this.onRefresh.bind(this));
        }
        option(t) {
          return this.carousel.option(`Navigation.${t}`);
        }
        createButton(t) {
          let e = document.createElement("button");
          e.setAttribute(
            "title",
            this.carousel.localize(`{{${t.toUpperCase()}}}`),
          );
          let i =
            this.option("classNames.button") +
            " " +
            this.option(`classNames.${t}`);
          return (
            e.classList.add(...i.split(" ")),
            e.setAttribute("tabindex", "0"),
            (e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`))),
            e.addEventListener("click", (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                this.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
            }),
            e
          );
        }
        build() {
          this.$container ||
            ((this.$container = document.createElement("div")),
            this.$container.classList.add(
              ...this.option("classNames.main").split(" "),
            ),
            this.carousel.$container.appendChild(this.$container)),
            this.$next ||
              ((this.$next = this.createButton("next")),
              this.$container.appendChild(this.$next)),
            this.$prev ||
              ((this.$prev = this.createButton("prev")),
              this.$container.appendChild(this.$prev));
        }
        onRefresh() {
          let t = this.carousel.pages.length;
          t <= 1 ||
          (t > 1 &&
            this.carousel.elemDimWidth < this.carousel.wrapDimWidth &&
            !Number.isInteger(this.carousel.option("slidesPerPage")))
            ? this.cleanup()
            : (this.build(),
              this.$prev.removeAttribute("disabled"),
              this.$next.removeAttribute("disabled"),
              this.carousel.option(
                "infiniteX",
                this.carousel.option("infinite"),
              ) ||
                (this.carousel.page <= 0 &&
                  this.$prev.setAttribute("disabled", ""),
                this.carousel.page >= t - 1 &&
                  this.$next.setAttribute("disabled", "")));
        }
        cleanup() {
          this.$prev && this.$prev.remove(),
            (this.$prev = null),
            this.$next && this.$next.remove(),
            (this.$next = null),
            this.$container && this.$container.remove(),
            (this.$container = null);
        }
        attach() {
          this.carousel.on("refresh change", this.onRefresh);
        }
        detach() {
          this.carousel.off("refresh change", this.onRefresh), this.cleanup();
        }
      }
      m.defaults = {
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
          main: "carousel__nav",
          button: "carousel__button",
          next: "is-next",
          prev: "is-prev",
        },
      };
      class y {
        constructor(t) {
          (this.carousel = t),
            (this.selectedIndex = null),
            (this.friction = 0),
            (this.onNavReady = this.onNavReady.bind(this)),
            (this.onNavClick = this.onNavClick.bind(this)),
            (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
            (this.onTargetChange = this.onTargetChange.bind(this));
        }
        addAsTargetFor(t) {
          (this.target = this.carousel), (this.nav = t), this.attachEvents();
        }
        addAsNavFor(t) {
          (this.target = t), (this.nav = this.carousel), this.attachEvents();
        }
        attachEvents() {
          (this.nav.options.initialSlide = this.target.options.initialPage),
            this.nav.on("ready", this.onNavReady),
            this.nav.on("createSlide", this.onNavCreateSlide),
            this.nav.on("Panzoom.click", this.onNavClick),
            this.target.on("change", this.onTargetChange),
            this.target.on("Panzoom.afterUpdate", this.onTargetChange);
        }
        onNavReady() {
          this.onTargetChange(!0);
        }
        onNavClick(t, e, i) {
          let s = i.target.closest(".carousel__slide");
          if (!s) return;
          i.stopPropagation();
          let o = parseInt(s.dataset.index, 10),
            n = this.target.findPageForSlide(o);
          this.target.page !== n &&
            this.target.slideTo(n, { friction: this.friction }),
            this.markSelectedSlide(o);
        }
        onNavCreateSlide(t, e) {
          e.index === this.selectedIndex && this.markSelectedSlide(e.index);
        }
        onTargetChange() {
          let t = this.target.pages[this.target.page].indexes[0],
            e = this.nav.findPageForSlide(t);
          this.nav.slideTo(e), this.markSelectedSlide(t);
        }
        markSelectedSlide(t) {
          (this.selectedIndex = t),
            [...this.nav.slides].filter(
              (t) => t.$el && t.$el.classList.remove("is-nav-selected"),
            );
          let e = this.nav.slides[t];
          e && e.$el && e.$el.classList.add("is-nav-selected");
        }
        attach(t) {
          let e = t.options.Sync;
          (e.target || e.nav) &&
            (e.target
              ? this.addAsNavFor(e.target)
              : e.nav && this.addAsTargetFor(e.nav),
            (this.friction = e.friction));
        }
        detach() {
          this.nav &&
            (this.nav.off("ready", this.onNavReady),
            this.nav.off("Panzoom.click", this.onNavClick),
            this.nav.off("createSlide", this.onNavCreateSlide)),
            this.target &&
              (this.target.off("Panzoom.afterUpdate", this.onTargetChange),
              this.target.off("change", this.onTargetChange));
        }
      }
      y.defaults = { friction: 0.92 };
      let b = {
        slides: [],
        preload: 0,
        slidesPerPage: "auto",
        initialPage: null,
        initialSlide: null,
        friction: 0.92,
        center: !0,
        infinite: !0,
        fill: !0,
        dragFree: !1,
        prefix: "",
        classNames: {
          viewport: "carousel__viewport",
          track: "carousel__track",
          slide: "carousel__slide",
          slideSelected: "is-selected",
        },
        l10n: {
          NEXT: "Next slide",
          PREV: "Previous slide",
          GOTO: "Go to slide #%d",
        },
      };
      class v extends u {
        constructor(t, e = {}) {
          if (
            (super((e = o(!0, {}, b, e))),
            (this.state = "init"),
            (this.$container = t),
            !(this.$container instanceof HTMLElement))
          )
            throw Error("No root element provided");
          (this.slideNext = p(this.slideNext.bind(this), 250)),
            (this.slidePrev = p(this.slidePrev.bind(this), 250)),
            this.init(),
            (t.__Carousel = this);
        }
        init() {
          (this.pages = []),
            (this.page = this.pageIndex = null),
            (this.prevPage = this.prevPageIndex = null),
            this.attachPlugins(v.Plugins),
            this.trigger("init"),
            this.initLayout(),
            this.initSlides(),
            this.updateMetrics(),
            this.$track &&
              this.pages.length &&
              (this.$track.style.transform = `translate3d(${
                -1 * this.pages[this.page].left
              }px, 0px, 0) scale(1)`),
            this.manageSlideVisiblity(),
            this.initPanzoom(),
            (this.state = "ready"),
            this.trigger("ready");
        }
        initLayout() {
          let t = this.option("prefix"),
            e = this.option("classNames");
          (this.$viewport =
            this.option("viewport") ||
            this.$container.querySelector(`.${t}${e.viewport}`)),
            this.$viewport ||
              ((this.$viewport = document.createElement("div")),
              this.$viewport.classList.add(...(t + e.viewport).split(" ")),
              this.$viewport.append(...this.$container.childNodes),
              this.$container.appendChild(this.$viewport)),
            (this.$track =
              this.option("track") ||
              this.$container.querySelector(`.${t}${e.track}`)),
            this.$track ||
              ((this.$track = document.createElement("div")),
              this.$track.classList.add(...(t + e.track).split(" ")),
              this.$track.append(...this.$viewport.childNodes),
              this.$viewport.appendChild(this.$track));
        }
        initSlides() {
          (this.slides = []),
            this.$viewport
              .querySelectorAll(
                `.${this.option("prefix")}${this.option("classNames.slide")}`,
              )
              .forEach((t) => {
                let e = { $el: t, isDom: !0 };
                this.slides.push(e),
                  this.trigger("createSlide", e, this.slides.length);
              }),
            Array.isArray(this.options.slides) &&
              (this.slides = o(!0, [...this.slides], this.options.slides));
        }
        updateMetrics() {
          let t,
            e,
            i = 0,
            s = [];
          this.slides.forEach((t, o) => {
            let n = t.$el,
              a = t.isDom || !e ? this.getSlideMetrics(n) : e;
            (t.index = o),
              (t.width = a),
              (t.left = i),
              (e = a),
              (i += a),
              s.push(o);
          });
          let o = Math.max(
              this.$track.offsetWidth,
              n(this.$track.getBoundingClientRect().width),
            ),
            a = getComputedStyle(this.$track);
          (o -= parseFloat(a.paddingLeft) + parseFloat(a.paddingRight)),
            (this.contentWidth = i),
            (this.viewportWidth = o);
          let r = [],
            l = this.option("slidesPerPage");
          if (Number.isInteger(l) && i > o)
            for (let t = 0; t < this.slides.length; t += l)
              r.push({
                indexes: s.slice(t, t + l),
                slides: this.slides.slice(t, t + l),
              });
          else {
            let t = 0,
              e = 0;
            for (let i = 0; i < this.slides.length; i += 1) {
              let s = this.slides[i];
              (!r.length || e + s.width > o) &&
                (r.push({ indexes: [], slides: [] }),
                (t = r.length - 1),
                (e = 0)),
                (e += s.width),
                r[t].indexes.push(i),
                r[t].slides.push(s);
            }
          }
          let h = this.option("center"),
            c = this.option("fill");
          r.forEach((t, e) => {
            (t.index = e),
              (t.width = t.slides.reduce((t, e) => t + e.width, 0)),
              (t.left = t.slides[0].left),
              h && (t.left += -(0.5 * (o - t.width) * 1)),
              c &&
                !this.option("infiniteX", this.option("infinite")) &&
                i > o &&
                ((t.left = Math.max(t.left, 0)),
                (t.left = Math.min(t.left, i - o)));
          });
          let d = [];
          r.forEach((e) => {
            let i = { ...e };
            t && i.left === t.left
              ? ((t.width += i.width),
                (t.slides = [...t.slides, ...i.slides]),
                (t.indexes = [...t.indexes, ...i.indexes]))
              : ((i.index = d.length), (t = i), d.push(i));
          }),
            (this.pages = d);
          let u = this.page;
          if (null === u) {
            let t = this.option("initialSlide");
            d[
              (u =
                null !== t
                  ? this.findPageForSlide(t)
                  : parseInt(this.option("initialPage", 0), 10) || 0)
            ] || (u = d.length && u > d.length ? d[d.length - 1].index : 0),
              (this.page = u),
              (this.pageIndex = u);
          }
          this.updatePanzoom(), this.trigger("refresh");
        }
        getSlideMetrics(t) {
          if (!t) {
            let e = this.slides[0];
            ((t = document.createElement("div")).dataset.isTestEl = 1),
              (t.style.visibility = "hidden"),
              t.classList.add(
                ...(
                  this.option("prefix") + this.option("classNames.slide")
                ).split(" "),
              ),
              e.customClass && t.classList.add(...e.customClass.split(" ")),
              this.$track.prepend(t);
          }
          let e = Math.max(t.offsetWidth, n(t.getBoundingClientRect().width)),
            i = t.currentStyle || window.getComputedStyle(t);
          return (
            (e =
              e +
              (parseFloat(i.marginLeft) || 0) +
              (parseFloat(i.marginRight) || 0)),
            t.dataset.isTestEl && t.remove(),
            e
          );
        }
        findPageForSlide(t) {
          t = parseInt(t, 10) || 0;
          let e = this.pages.find((e) => e.indexes.indexOf(t) > -1);
          return e ? e.index : null;
        }
        slideNext() {
          this.slideTo(this.pageIndex + 1);
        }
        slidePrev() {
          this.slideTo(this.pageIndex - 1);
        }
        slideTo(t, e = {}) {
          let {
            x: i = -1 * this.setPage(t, !0),
            y: s = 0,
            friction: o = this.option("friction"),
          } = e;
          (this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o) ||
            (this.Panzoom.panTo({ x: i, y: s, friction: o, ignoreBounds: !0 }),
            "ready" === this.state &&
              "ready" === this.Panzoom.state &&
              this.trigger("settle"));
        }
        initPanzoom() {
          this.Panzoom && this.Panzoom.destroy();
          let t = o(
            !0,
            {},
            {
              content: this.$track,
              wrapInner: !1,
              resizeParent: !1,
              zoom: !1,
              click: !1,
              lockAxis: "x",
              x: this.pages.length ? -1 * this.pages[this.page].left : 0,
              centerOnStart: !1,
              textSelection: () => this.option("textSelection", !1),
              panOnlyZoomed: function () {
                return this.content.width <= this.viewport.width;
              },
            },
            this.option("Panzoom"),
          );
          (this.Panzoom = new f(this.$container, t)),
            this.Panzoom.on({
              "*": (t, ...e) => this.trigger(`Panzoom.${t}`, ...e),
              afterUpdate: () => {
                this.updatePage();
              },
              beforeTransform: this.onBeforeTransform.bind(this),
              touchEnd: this.onTouchEnd.bind(this),
              endAnimation: () => {
                this.trigger("settle");
              },
            }),
            this.updateMetrics(),
            this.manageSlideVisiblity();
        }
        updatePanzoom() {
          this.Panzoom &&
            ((this.Panzoom.content = {
              ...this.Panzoom.content,
              fitWidth: this.contentWidth,
              origWidth: this.contentWidth,
              width: this.contentWidth,
            }),
            this.pages.length > 1 &&
            this.option("infiniteX", this.option("infinite"))
              ? (this.Panzoom.boundX = null)
              : this.pages.length &&
                (this.Panzoom.boundX = {
                  from: -1 * this.pages[this.pages.length - 1].left,
                  to: -1 * this.pages[0].left,
                }),
            this.option("infiniteY", this.option("infinite"))
              ? (this.Panzoom.boundY = null)
              : (this.Panzoom.boundY = { from: 0, to: 0 }),
            this.Panzoom.handleCursor());
        }
        manageSlideVisiblity() {
          let t = this.contentWidth,
            e = this.viewportWidth,
            i = this.Panzoom
              ? -1 * this.Panzoom.content.x
              : this.pages.length
                ? this.pages[this.page].left
                : 0,
            s = this.option("preload"),
            o = this.option("infiniteX", this.option("infinite")),
            n = parseFloat(
              getComputedStyle(this.$viewport, null).getPropertyValue(
                "padding-left",
              ),
            ),
            a = parseFloat(
              getComputedStyle(this.$viewport, null).getPropertyValue(
                "padding-right",
              ),
            );
          this.slides.forEach((r) => {
            let l,
              h,
              c = 0;
            (l = i - n),
              (h = i + e + a),
              (l -= s * (e + n + a)),
              (h += s * (e + n + a));
            let d = r.left + r.width > l && r.left < h;
            (l = i + t - n), (h = i + t + e + a), (l -= s * (e + n + a));
            let u = o && r.left + r.width > l && r.left < h;
            (l = i - t - n), (h = i - t + e + a), (l -= s * (e + n + a));
            let g = o && r.left + r.width > l && r.left < h;
            u || d || g
              ? (this.createSlideEl(r),
                d && (c = 0),
                u && (c = -1),
                g && (c = 1),
                r.left + r.width > i && r.left <= i + e + a && (c = 0))
              : this.removeSlideEl(r),
              (r.hasDiff = c);
          });
          let r = 0,
            l = 0;
          this.slides.forEach((e, i) => {
            let s = 0;
            e.$el
              ? (i !== r || e.hasDiff ? (s = l + e.hasDiff * t) : (l = 0),
                (e.$el.style.left =
                  Math.abs(s) > 0.1 ? `${l + e.hasDiff * t}px` : ""),
                r++)
              : (l += e.width);
          }),
            this.markSelectedSlides();
        }
        createSlideEl(t) {
          if (!t) return;
          if (t.$el) {
            let e = t.$el.dataset.index;
            if (!e || parseInt(e, 10) !== t.index) {
              let e;
              (t.$el.dataset.index = t.index),
                t.$el.querySelectorAll("[data-lazy-srcset]").forEach((t) => {
                  t.srcset = t.dataset.lazySrcset;
                }),
                t.$el.querySelectorAll("[data-lazy-src]").forEach((t) => {
                  let e = t.dataset.lazySrc;
                  t instanceof HTMLImageElement
                    ? (t.src = e)
                    : (t.style.backgroundImage = `url('${e}')`);
                }),
                (e = t.$el.dataset.lazySrc) &&
                  (t.$el.style.backgroundImage = `url('${e}')`),
                (t.state = "ready");
            }
            return;
          }
          let e = document.createElement("div");
          (e.dataset.index = t.index),
            e.classList.add(
              ...(
                this.option("prefix") + this.option("classNames.slide")
              ).split(" "),
            ),
            t.customClass && e.classList.add(...t.customClass.split(" ")),
            t.html && (e.innerHTML = t.html);
          let i = [];
          this.slides.forEach((t, e) => {
            t.$el && i.push(e);
          });
          let s = t.index,
            o = null;
          if (i.length) {
            let t = i.reduce((t, e) =>
              Math.abs(e - s) < Math.abs(t - s) ? e : t,
            );
            o = this.slides[t];
          }
          return (
            this.$track.insertBefore(
              e,
              o && o.$el
                ? o.index < t.index
                  ? o.$el.nextSibling
                  : o.$el
                : null,
            ),
            (t.$el = e),
            this.trigger("createSlide", t, s),
            t
          );
        }
        removeSlideEl(t) {
          t.$el &&
            !t.isDom &&
            (this.trigger("removeSlide", t), t.$el.remove(), (t.$el = null));
        }
        markSelectedSlides() {
          let t = this.option("classNames.slideSelected"),
            e = "aria-hidden";
          this.slides.forEach((i, s) => {
            let o = i.$el;
            if (!o) return;
            let n = this.pages[this.page];
            n && n.indexes && n.indexes.indexOf(s) > -1
              ? (t &&
                  !o.classList.contains(t) &&
                  (o.classList.add(t), this.trigger("selectSlide", i)),
                o.removeAttribute(e))
              : (t &&
                  o.classList.contains(t) &&
                  (o.classList.remove(t), this.trigger("unselectSlide", i)),
                o.setAttribute(e, !0));
          });
        }
        updatePage() {
          this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
        }
        onBeforeTransform() {
          this.option("infiniteX", this.option("infinite")) &&
            this.manageInfiniteTrack(),
            this.manageSlideVisiblity();
        }
        manageInfiniteTrack() {
          let t = this.contentWidth,
            e = this.viewportWidth;
          if (
            !this.option("infiniteX", this.option("infinite")) ||
            this.pages.length < 2 ||
            t < e
          )
            return;
          let i = this.Panzoom,
            s = !1;
          return (
            i.content.x < -1 * (t - e) &&
              ((i.content.x += t),
              (this.pageIndex = this.pageIndex - this.pages.length),
              (s = !0)),
            i.content.x > e &&
              ((i.content.x -= t),
              (this.pageIndex = this.pageIndex + this.pages.length),
              (s = !0)),
            s && "pointerdown" === i.state && i.resetDragPosition(),
            s
          );
        }
        onTouchEnd(t, e) {
          let i = this.option("dragFree");
          if (
            !i &&
            this.pages.length > 1 &&
            t.dragOffset.time < 350 &&
            1 > Math.abs(t.dragOffset.y) &&
            Math.abs(t.dragOffset.x) > 5
          )
            this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
          else if (i) {
            let [, e] = this.getPageFromPosition(-1 * t.transform.x);
            this.setPage(e);
          } else this.slideToClosest();
        }
        slideToClosest(t = {}) {
          let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
          this.slideTo(e, t);
        }
        getPageFromPosition(t) {
          let e = this.pages.length;
          this.option("center") && (t += 0.5 * this.viewportWidth);
          let i = Math.floor(t / this.contentWidth);
          t -= i * this.contentWidth;
          let s = this.slides.find((e) => e.left <= t && e.left + e.width > t);
          if (s) {
            let t = this.findPageForSlide(s.index);
            return [t, t + i * e];
          }
          return [0, 0];
        }
        setPage(t, e) {
          let i = 0,
            s = parseInt(t, 10) || 0,
            o = this.page,
            n = this.pageIndex,
            a = this.pages.length,
            r = this.contentWidth,
            l = this.viewportWidth;
          if (
            ((t = ((s % a) + a) % a),
            this.option("infiniteX", this.option("infinite")) && r > l)
          ) {
            let o = Math.floor(s / a) || 0;
            if (((i = this.pages[t].left + o * r), !0 === e && a > 2)) {
              let t = -1 * this.Panzoom.content.x,
                e = i - r,
                o = i + r,
                n = Math.abs(t - i),
                l = Math.abs(t - e),
                h = Math.abs(t - o);
              h < n && h <= l
                ? ((i = o), (s += a))
                : l < n && l < h && ((i = e), (s -= a));
            }
          } else
            (t = s = Math.max(0, Math.min(s, a - 1))),
              (i = this.pages.length ? this.pages[t].left : 0);
          return (
            (this.page = t),
            (this.pageIndex = s),
            null !== o &&
              t !== o &&
              ((this.prevPage = o),
              (this.prevPageIndex = n),
              this.trigger("change", t, o)),
            i
          );
        }
        destroy() {
          (this.state = "destroy"),
            this.slides.forEach((t) => {
              this.removeSlideEl(t);
            }),
            (this.slides = []),
            this.Panzoom.destroy(),
            this.detachPlugins();
        }
      }
      (v.version = "4.0.31"),
        (v.Plugins = {
          Navigation: m,
          Dots: class {
            constructor(t) {
              (this.carousel = t),
                (this.$list = null),
                (this.events = {
                  change: this.onChange.bind(this),
                  refresh: this.onRefresh.bind(this),
                });
            }
            buildList() {
              if (
                this.carousel.pages.length <
                this.carousel.option("Dots.minSlideCount")
              )
                return;
              let t = document.createElement("ol");
              return (
                t.classList.add("carousel__dots"),
                t.addEventListener("click", (t) => {
                  if (!("page" in t.target.dataset)) return;
                  t.preventDefault(), t.stopPropagation();
                  let e = parseInt(t.target.dataset.page, 10),
                    i = this.carousel;
                  e !== i.page &&
                    (i.pages.length < 3 && i.option("infinite")
                      ? i[0 == e ? "slidePrev" : "slideNext"]()
                      : i.slideTo(e));
                }),
                (this.$list = t),
                this.carousel.$container.appendChild(t),
                this.carousel.$container.classList.add("has-dots"),
                t
              );
            }
            removeList() {
              this.$list &&
                (this.$list.parentNode.removeChild(this.$list),
                (this.$list = null)),
                this.carousel.$container.classList.remove("has-dots");
            }
            rebuildDots() {
              let t = this.$list,
                e = !!t,
                i = this.carousel.pages.length;
              if (i < 2) return void (e && this.removeList());
              e || (t = this.buildList());
              let s = this.$list.children.length;
              if (s > i)
                for (let t = i; t < s; t++)
                  this.$list.removeChild(this.$list.lastChild);
              else {
                for (let t = s; t < i; t++) {
                  let e = document.createElement("li");
                  e.classList.add("carousel__dot"),
                    (e.dataset.page = t),
                    e.setAttribute("role", "button"),
                    e.setAttribute("tabindex", "0"),
                    e.setAttribute(
                      "title",
                      this.carousel.localize("{{GOTO}}", [["%d", t + 1]]),
                    ),
                    e.addEventListener("keydown", (t) => {
                      let i;
                      let s = t.code;
                      "Enter" === s || "NumpadEnter" === s
                        ? (i = e)
                        : "ArrowRight" === s
                          ? (i = e.nextSibling)
                          : "ArrowLeft" === s && (i = e.previousSibling),
                        i && i.click();
                    }),
                    this.$list.appendChild(e);
                }
                this.setActiveDot();
              }
            }
            setActiveDot() {
              if (!this.$list) return;
              this.$list.childNodes.forEach((t) => {
                t.classList.remove("is-selected");
              });
              let t = this.$list.childNodes[this.carousel.page];
              t && t.classList.add("is-selected");
            }
            onChange() {
              this.setActiveDot();
            }
            onRefresh() {
              this.rebuildDots();
            }
            attach() {
              this.carousel.on(this.events);
            }
            detach() {
              this.removeList(),
                this.carousel.off(this.events),
                (this.carousel = null);
            }
          },
          Sync: y,
        });
      let x = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        w = null,
        $ = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
        ],
        C = (t) => {
          if (t && x) {
            null === w &&
              document.createElement("div").focus({
                get preventScroll() {
                  return (w = !0), !1;
                },
              });
            try {
              if (t.setActive) t.setActive();
              else if (w) t.focus({ preventScroll: !0 });
              else {
                let e = window.pageXOffset || document.body.scrollTop,
                  i = window.pageYOffset || document.body.scrollLeft;
                t.focus(),
                  document.body.scrollTo({ top: e, left: i, behavior: "auto" });
              }
            } catch (t) {}
          }
        };
      class S {
        constructor(t) {
          for (let e of ((this.fancybox = t),
          (this.$container = null),
          (this.state = "init"),
          ["onPrepare", "onClosing", "onKeydown"]))
            this[e] = this[e].bind(this);
          this.events = {
            prepare: this.onPrepare,
            closing: this.onClosing,
            keydown: this.onKeydown,
          };
        }
        onPrepare() {
          this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount")
            ? (this.state = "disabled")
            : !0 === this.fancybox.option("Thumbs.autoStart") &&
              this.fancybox.Carousel.Panzoom.content.height >=
                this.fancybox.option("Thumbs.minScreenHeight") &&
              this.build();
        }
        onClosing() {
          this.Carousel && this.Carousel.Panzoom.detachEvents();
        }
        onKeydown(t, e) {
          e === t.option("Thumbs.key") && this.toggle();
        }
        build() {
          if (this.$container) return;
          let t = document.createElement("div");
          t.classList.add("fancybox__thumbs"),
            this.fancybox.$carousel.parentNode.insertBefore(
              t,
              this.fancybox.$carousel.nextSibling,
            ),
            (this.Carousel = new v(
              t,
              o(
                !0,
                {
                  Dots: !1,
                  Navigation: !1,
                  Sync: { friction: 0 },
                  infinite: !1,
                  center: !0,
                  fill: !0,
                  dragFree: !0,
                  slidesPerPage: 1,
                  preload: 1,
                },
                this.fancybox.option("Thumbs.Carousel"),
                {
                  Sync: { target: this.fancybox.Carousel },
                  slides: this.getSlides(),
                },
              ),
            )),
            this.Carousel.Panzoom.on("wheel", (t, e) => {
              e.preventDefault(),
                this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
            }),
            (this.$container = t),
            (this.state = "visible");
        }
        getSlides() {
          let t = [];
          for (let e of this.fancybox.items) {
            let i = e.thumb;
            i &&
              t.push({
                html: this.fancybox
                  .option("Thumbs.tpl")
                  .replace(/\{\{src\}\}/gi, i),
                customClass: `has-thumb has-${e.type || "image"}`,
              });
          }
          return t;
        }
        toggle() {
          "visible" === this.state
            ? this.hide()
            : "hidden" === this.state
              ? this.show()
              : this.build();
        }
        show() {
          "hidden" === this.state &&
            ((this.$container.style.display = ""),
            this.Carousel.Panzoom.attachEvents(),
            (this.state = "visible"));
        }
        hide() {
          "visible" === this.state &&
            (this.Carousel.Panzoom.detachEvents(),
            (this.$container.style.display = "none"),
            (this.state = "hidden"));
        }
        cleanup() {
          this.Carousel && (this.Carousel.destroy(), (this.Carousel = null)),
            this.$container &&
              (this.$container.remove(), (this.$container = null)),
            (this.state = "init");
        }
        attach() {
          this.fancybox.on(this.events);
        }
        detach() {
          this.fancybox.off(this.events), this.cleanup();
        }
      }
      S.defaults = {
        minSlideCount: 2,
        minScreenHeight: 500,
        autoStart: !0,
        key: "t",
        Carousel: {},
        tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>',
      };
      let E = (t, e) => {
          let i = new URL(t),
            s = new URLSearchParams(i.search),
            o = new URLSearchParams();
          for (let [t, i] of [...s, ...Object.entries(e)])
            "t" === t ? o.set("start", parseInt(i)) : o.set(t, i);
          o = o.toString();
          let n = t.match(/#t=((.*)?\d+s)/);
          return n && (o += `#t=${n[1]}`), o;
        },
        P = {
          video: { autoplay: !0, ratio: 16 / 9 },
          youtube: {
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          vimeo: {
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          html5video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            format: "",
          },
        };
      class L {
        constructor(t) {
          for (let e of ((this.fancybox = t),
          [
            "onInit",
            "onReady",
            "onCreateSlide",
            "onRemoveSlide",
            "onSelectSlide",
            "onUnselectSlide",
            "onRefresh",
            "onMessage",
          ]))
            this[e] = this[e].bind(this);
          this.events = {
            init: this.onInit,
            ready: this.onReady,
            "Carousel.createSlide": this.onCreateSlide,
            "Carousel.removeSlide": this.onRemoveSlide,
            "Carousel.selectSlide": this.onSelectSlide,
            "Carousel.unselectSlide": this.onUnselectSlide,
            "Carousel.refresh": this.onRefresh,
          };
        }
        onInit() {
          for (let t of this.fancybox.items) this.processType(t);
        }
        processType(t) {
          if (t.html)
            return (t.src = t.html), (t.type = "html"), void delete t.html;
          let e = t.src || "",
            i = t.type || this.fancybox.options.type,
            s = null;
          if (!e || "string" == typeof e) {
            if (
              (s = e.match(
                /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i,
              ))
            ) {
              let o = E(e, this.fancybox.option("Html.youtube")),
                n = encodeURIComponent(s[1]);
              (t.videoId = n),
                (t.src = `https://www.youtube-nocookie.com/embed/${n}?${o}`),
                (t.thumb =
                  t.thumb || `https://i.ytimg.com/vi/${n}/mqdefault.jpg`),
                (t.vendor = "youtube"),
                (i = "video");
            } else if ((s = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/))) {
              let o = E(e, this.fancybox.option("Html.vimeo")),
                n = encodeURIComponent(s[1]);
              (t.videoId = n),
                (t.src = `https://player.vimeo.com/video/${n}?${o}`),
                (t.vendor = "vimeo"),
                (i = "video");
            } else
              (s = e.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i,
              ))
                ? ((t.src = `//maps.google.${s[1]}/?ll=${(s[2]
                    ? s[2] +
                      "&z=" +
                      Math.floor(s[3]) +
                      (s[4] ? s[4].replace(/^\//, "&") : "")
                    : s[4] + ""
                  ).replace(/\?/, "&")}&output=${
                    s[4] && s[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
                  }`),
                  (i = "map"))
                : (s = e.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i,
                  )) &&
                  ((t.src = `//maps.google.${s[1]}/maps?q=${s[2]
                    .replace("query=", "q=")
                    .replace("api=1", "")}&output=embed`),
                  (i = "map"));
            i ||
              ("#" === e.charAt(0)
                ? (i = "inline")
                : (s = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((i = "html5video"),
                    (t.format =
                      t.format || "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                  : e.match(
                        /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i,
                      )
                    ? (i = "image")
                    : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")),
              (t.type = i || this.fancybox.option("defaultType", "image")),
              ("html5video" !== i && "video" !== i) ||
                ((t.video = o({}, this.fancybox.option("Html.video"), t.video)),
                t._width && t._height
                  ? (t.ratio = parseFloat(t._width) / parseFloat(t._height))
                  : (t.ratio = t.ratio || t.video.ratio || P.video.ratio));
          }
        }
        onReady() {
          this.fancybox.Carousel.slides.forEach((t) => {
            t.$el &&
              (this.setContent(t),
              t.index === this.fancybox.getSlide().index && this.playVideo(t));
          });
        }
        onCreateSlide(t, e, i) {
          "ready" === this.fancybox.state && this.setContent(i);
        }
        loadInlineContent(t) {
          let e;
          if (t.src instanceof HTMLElement) e = t.src;
          else if ("string" == typeof t.src) {
            let i = t.src.split("#", 2),
              s = 2 === i.length && "" === i[0] ? i[1] : i[0];
            e = document.getElementById(s);
          }
          if (e) {
            if ("clone" === t.type || e.$placeHolder) {
              let i = (e = e.cloneNode(!0)).getAttribute("id");
              (i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`),
                e.setAttribute("id", i);
            } else {
              let t = document.createElement("div");
              t.classList.add("fancybox-placeholder"),
                e.parentNode.insertBefore(t, e),
                (e.$placeHolder = t);
            }
            this.fancybox.setContent(t, e);
          } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
        }
        loadAjaxContent(t) {
          let e = this.fancybox,
            i = new XMLHttpRequest();
          e.showLoading(t),
            (i.onreadystatechange = function () {
              i.readyState === XMLHttpRequest.DONE &&
                "ready" === e.state &&
                (e.hideLoading(t),
                200 === i.status
                  ? e.setContent(t, i.responseText)
                  : e.setError(
                      t,
                      404 === i.status
                        ? "{{AJAX_NOT_FOUND}}"
                        : "{{AJAX_FORBIDDEN}}",
                    ));
            });
          let s = t.ajax || null;
          i.open(s ? "POST" : "GET", t.src),
            i.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded",
            ),
            i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            i.send(s),
            (t.xhr = i);
        }
        loadIframeContent(t) {
          let e = this.fancybox,
            i = document.createElement("iframe");
          if (
            ((i.className = "fancybox__iframe"),
            i.setAttribute("id", `fancybox__iframe_${e.id}_${t.index}`),
            i.setAttribute("allow", "autoplay; fullscreen"),
            i.setAttribute("scrolling", "auto"),
            (t.$iframe = i),
            "iframe" !== t.type || !1 === t.preload)
          )
            return (
              i.setAttribute("src", t.src),
              this.fancybox.setContent(t, i),
              void this.resizeIframe(t)
            );
          e.showLoading(t);
          let s = document.createElement("div");
          (s.style.visibility = "hidden"),
            this.fancybox.setContent(t, s),
            s.appendChild(i),
            (i.onerror = () => {
              e.setError(t, "{{IFRAME_ERROR}}");
            }),
            (i.onload = () => {
              e.hideLoading(t);
              let s = !1;
              i.isReady || ((i.isReady = !0), (s = !0)),
                i.src.length &&
                  ((i.parentNode.style.visibility = ""),
                  this.resizeIframe(t),
                  s && e.revealContent(t));
            }),
            i.setAttribute("src", t.src);
        }
        setAspectRatio(t) {
          let e = t.$content,
            i = t.ratio;
          if (!e) return;
          let s = t._width,
            o = t._height;
          if (i || (s && o)) {
            Object.assign(e.style, {
              width: s && o ? "100%" : "",
              height: s && o ? "100%" : "",
              maxWidth: "",
              maxHeight: "",
            });
            let t = e.offsetWidth,
              n = e.offsetHeight;
            if (((s = s || t), (o = o || n), s > t || o > n)) {
              let e = Math.min(t / s, n / o);
              (s *= e), (o *= e);
            }
            Math.abs(s / o - i) > 0.01 &&
              (i < s / o ? (s = o * i) : (o = s / i)),
              Object.assign(e.style, { width: `${s}px`, height: `${o}px` });
          }
        }
        resizeIframe(t) {
          let e = t.$iframe;
          if (!e) return;
          let i = t._width || 0,
            s = t._height || 0;
          i && s && (t.autoSize = !1);
          let o = e.parentNode,
            n = o && o.style;
          if (!1 !== t.preload && !1 !== t.autoSize && n)
            try {
              let t = window.getComputedStyle(o),
                a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
                l = e.contentWindow.document,
                h = l.getElementsByTagName("html")[0],
                c = l.body;
              (n.width = ""),
                (c.style.overflow = "hidden"),
                (i = i || h.scrollWidth + a),
                (n.width = `${i}px`),
                (c.style.overflow = ""),
                (n.flex = "0 0 auto"),
                (n.height = `${c.scrollHeight}px`),
                (s = h.scrollHeight + r);
            } catch (t) {}
          if (i || s) {
            let t = { flex: "0 1 auto" };
            i && (t.width = `${i}px`),
              s && (t.height = `${s}px`),
              Object.assign(n, t);
          }
        }
        onRefresh(t, e) {
          e.slides.forEach((t) => {
            t.$el &&
              (t.$iframe && this.resizeIframe(t),
              t.ratio && this.setAspectRatio(t));
          });
        }
        setContent(t) {
          if (t && !t.isDom) {
            switch (t.type) {
              case "html":
                this.fancybox.setContent(t, t.src);
                break;
              case "html5video":
                this.fancybox.setContent(
                  t,
                  this.fancybox
                    .option("Html.html5video.tpl")
                    .replace(/\{\{src\}\}/gi, t.src)
                    .replace(
                      "{{format}}",
                      t.format || (t.html5video && t.html5video.format) || "",
                    )
                    .replace("{{poster}}", t.poster || t.thumb || ""),
                );
                break;
              case "inline":
              case "clone":
                this.loadInlineContent(t);
                break;
              case "ajax":
                this.loadAjaxContent(t);
                break;
              case "pdf":
              case "video":
              case "map":
                t.preload = !1;
              case "iframe":
                this.loadIframeContent(t);
            }
            t.ratio && this.setAspectRatio(t);
          }
        }
        onSelectSlide(t, e, i) {
          "ready" === t.state && this.playVideo(i);
        }
        playVideo(t) {
          if ("html5video" === t.type && t.video.autoplay)
            try {
              let e = t.$el.querySelector("video");
              if (e) {
                let t = e.play();
                void 0 !== t &&
                  t
                    .then(() => {})
                    .catch((t) => {
                      (e.muted = !0), e.play();
                    });
              }
            } catch (t) {}
          if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow)
            return;
          let e = () => {
            if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
              let e;
              if (t.$iframe.isReady)
                return (
                  t.video &&
                    t.video.autoplay &&
                    (e =
                      "youtube" == t.vendor
                        ? { event: "command", func: "playVideo" }
                        : { method: "play", value: "true" }),
                  void (
                    e &&
                    t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*")
                  )
                );
              "youtube" === t.vendor &&
                ((e = { event: "listening", id: t.$iframe.getAttribute("id") }),
                t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
            }
            t.poller = setTimeout(e, 250);
          };
          e();
        }
        onUnselectSlide(t, e, i) {
          if ("html5video" === i.type) {
            try {
              i.$el.querySelector("video").pause();
            } catch (t) {}
            return;
          }
          let s = !1;
          "vimeo" == i.vendor
            ? (s = { method: "pause", value: "true" })
            : "youtube" === i.vendor &&
              (s = { event: "command", func: "pauseVideo" }),
            s &&
              i.$iframe &&
              i.$iframe.contentWindow &&
              i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"),
            clearTimeout(i.poller);
        }
        onRemoveSlide(t, e, i) {
          i.xhr && (i.xhr.abort(), (i.xhr = null)),
            i.$iframe &&
              ((i.$iframe.onload = i.$iframe.onerror = null),
              (i.$iframe.src = "//about:blank"),
              (i.$iframe = null));
          let s = i.$content;
          "inline" === i.type &&
            s &&
            (s.classList.remove("fancybox__content"),
            "none" !== s.style.display && (s.style.display = "none")),
            i.$closeButton &&
              (i.$closeButton.remove(), (i.$closeButton = null));
          let o = s && s.$placeHolder;
          o &&
            (o.parentNode.insertBefore(s, o),
            o.remove(),
            (s.$placeHolder = null));
        }
        onMessage(t) {
          try {
            let e = JSON.parse(t.data);
            if ("https://player.vimeo.com" === t.origin) {
              if ("ready" === e.event)
                for (let e of document.getElementsByClassName(
                  "fancybox__iframe",
                ))
                  e.contentWindow === t.source && (e.isReady = 1);
            } else
              "https://www.youtube-nocookie.com" === t.origin &&
                "onReady" === e.event &&
                (document.getElementById(e.id).isReady = 1);
          } catch (t) {}
        }
        attach() {
          this.fancybox.on(this.events),
            window.addEventListener("message", this.onMessage, !1);
        }
        detach() {
          this.fancybox.off(this.events),
            window.removeEventListener("message", this.onMessage, !1);
        }
      }
      L.defaults = P;
      class T {
        constructor(t) {
          for (let e of ((this.fancybox = t),
          [
            "onReady",
            "onClosing",
            "onDone",
            "onPageChange",
            "onCreateSlide",
            "onRemoveSlide",
            "onImageStatusChange",
          ]))
            this[e] = this[e].bind(this);
          this.events = {
            ready: this.onReady,
            closing: this.onClosing,
            done: this.onDone,
            "Carousel.change": this.onPageChange,
            "Carousel.createSlide": this.onCreateSlide,
            "Carousel.removeSlide": this.onRemoveSlide,
          };
        }
        onReady() {
          this.fancybox.Carousel.slides.forEach((t) => {
            t.$el && this.setContent(t);
          });
        }
        onDone(t, e) {
          this.handleCursor(e);
        }
        onClosing(t) {
          clearTimeout(this.clickTimer),
            (this.clickTimer = null),
            t.Carousel.slides.forEach((t) => {
              t.$image && (t.state = "destroy"),
                t.Panzoom && t.Panzoom.detachEvents();
            }),
            "closing" === this.fancybox.state &&
              this.canZoom(t.getSlide()) &&
              this.zoomOut();
        }
        onCreateSlide(t, e, i) {
          "ready" === this.fancybox.state && this.setContent(i);
        }
        onRemoveSlide(t, e, i) {
          i.$image &&
            (i.$el.classList.remove(t.option("Image.canZoomInClass")),
            i.$image.remove(),
            (i.$image = null)),
            i.Panzoom && (i.Panzoom.destroy(), (i.Panzoom = null)),
            i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
        }
        setContent(t) {
          if (t.isDom || t.html || (t.type && "image" !== t.type) || t.$image)
            return;
          (t.type = "image"), (t.state = "loading");
          let e = document.createElement("div");
          e.style.visibility = "hidden";
          let i = document.createElement("img");
          i.addEventListener("load", (e) => {
            e.stopImmediatePropagation(), this.onImageStatusChange(t);
          }),
            i.addEventListener("error", () => {
              this.onImageStatusChange(t);
            }),
            (i.src = t.src),
            (i.alt = ""),
            (i.draggable = !1),
            i.classList.add("fancybox__image"),
            t.srcset && i.setAttribute("srcset", t.srcset),
            t.sizes && i.setAttribute("sizes", t.sizes),
            (t.$image = i);
          let s = this.fancybox.option("Image.wrap");
          if (s) {
            let o = document.createElement("div");
            o.classList.add("string" == typeof s ? s : "fancybox__image-wrap"),
              o.appendChild(i),
              e.appendChild(o),
              (t.$wrap = o);
          } else e.appendChild(i);
          (t.$el.dataset.imageFit = this.fancybox.option("Image.fit")),
            this.fancybox.setContent(t, e),
            i.complete || i.error
              ? this.onImageStatusChange(t)
              : this.fancybox.showLoading(t);
        }
        onImageStatusChange(t) {
          let e = t.$image;
          e &&
            "loading" === t.state &&
            (e.complete && e.naturalWidth && e.naturalHeight
              ? (this.fancybox.hideLoading(t),
                "contain" === this.fancybox.option("Image.fit") &&
                  this.initSlidePanzoom(t),
                t.$el.addEventListener("wheel", (e) => this.onWheel(t, e), {
                  passive: !1,
                }),
                t.$content.addEventListener(
                  "click",
                  (e) => this.onClick(t, e),
                  { passive: !1 },
                ),
                this.revealContent(t))
              : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
        }
        initSlidePanzoom(t) {
          t.Panzoom ||
            ((t.Panzoom = new f(
              t.$el,
              o(!0, this.fancybox.option("Image.Panzoom", {}), {
                viewport: t.$wrap,
                content: t.$image,
                width: t._width,
                height: t._height,
                wrapInner: !1,
                textSelection: !0,
                touch: this.fancybox.option("Image.touch"),
                panOnlyZoomed: !0,
                click: !1,
                wheel: !1,
              }),
            )),
            t.Panzoom.on("startAnimation", () => {
              this.fancybox.trigger("Image.startAnimation", t);
            }),
            t.Panzoom.on("endAnimation", () => {
              "zoomIn" === t.state && this.fancybox.done(t),
                this.handleCursor(t),
                this.fancybox.trigger("Image.endAnimation", t);
            }),
            t.Panzoom.on("afterUpdate", () => {
              this.handleCursor(t),
                this.fancybox.trigger("Image.afterUpdate", t);
            }));
        }
        revealContent(t) {
          null === this.fancybox.Carousel.prevPage &&
          t.index === this.fancybox.options.startIndex &&
          this.canZoom(t)
            ? this.zoomIn()
            : this.fancybox.revealContent(t);
        }
        getZoomInfo(t) {
          let e = t.$thumb.getBoundingClientRect(),
            i = e.width,
            s = e.height,
            o = t.$content.getBoundingClientRect(),
            n = o.width,
            a = o.height,
            r = o.top - e.top,
            l = o.left - e.left,
            h = this.fancybox.option("Image.zoomOpacity");
          return (
            "auto" === h && (h = Math.abs(i / s - n / a) > 0.1),
            { top: r, left: l, scale: n && i ? i / n : 1, opacity: h }
          );
        }
        canZoom(t) {
          let e;
          let i = this.fancybox,
            s = i.$container;
          if (
            (window.visualViewport && 1 !== window.visualViewport.scale) ||
            (t.Panzoom && !t.Panzoom.content.width) ||
            !i.option("Image.zoom") ||
            "contain" !== i.option("Image.fit")
          )
            return !1;
          let o = t.$thumb;
          if (!o || "loading" === t.state) return !1;
          s.classList.add("fancybox__no-click");
          let n = o.getBoundingClientRect();
          if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
            let t = document.elementFromPoint(n.left + 1, n.top + 1) === o,
              i = document.elementFromPoint(n.right - 1, n.bottom - 1) === o;
            e = t && i;
          } else
            e =
              document.elementFromPoint(
                n.left + 0.5 * n.width,
                n.top + 0.5 * n.height,
              ) === o;
          return s.classList.remove("fancybox__no-click"), e;
        }
        zoomIn() {
          let t = this.fancybox,
            e = t.getSlide(),
            i = e.Panzoom,
            { top: s, left: o, scale: n, opacity: a } = this.getZoomInfo(e);
          t.trigger("reveal", e),
            i.panTo({
              x: -1 * o,
              y: -1 * s,
              scale: n,
              friction: 0,
              ignoreBounds: !0,
            }),
            (e.$content.style.visibility = ""),
            (e.state = "zoomIn"),
            !0 === a &&
              i.on("afterTransform", (t) => {
                ("zoomIn" !== e.state && "zoomOut" !== e.state) ||
                  (t.$content.style.opacity = Math.min(
                    1,
                    1 - (1 - t.content.scale) / (1 - n),
                  ));
              }),
            i.panTo({
              x: 0,
              y: 0,
              scale: 1,
              friction: this.fancybox.option("Image.zoomFriction"),
            });
        }
        zoomOut() {
          let t = this.fancybox,
            e = t.getSlide(),
            i = e.Panzoom;
          if (!i) return;
          (e.state = "zoomOut"),
            (t.state = "customClosing"),
            e.$caption && (e.$caption.style.visibility = "hidden");
          let s = this.fancybox.option("Image.zoomFriction"),
            o = (t) => {
              let {
                top: o,
                left: n,
                scale: a,
                opacity: r,
              } = this.getZoomInfo(e);
              t || r || (s *= 0.82),
                i.panTo({
                  x: -1 * n,
                  y: -1 * o,
                  scale: a,
                  friction: s,
                  ignoreBounds: !0,
                }),
                (s *= 0.98);
            };
          window.addEventListener("scroll", o),
            i.once("endAnimation", () => {
              window.removeEventListener("scroll", o), t.destroy();
            }),
            o();
        }
        handleCursor(t) {
          if ("image" !== t.type || !t.$el) return;
          let e = t.Panzoom,
            i = this.fancybox.option("Image.click", !1, t),
            s = this.fancybox.option("Image.touch"),
            o = t.$el.classList,
            n = this.fancybox.option("Image.canZoomInClass"),
            a = this.fancybox.option("Image.canZoomOutClass");
          (o.remove(a), o.remove(n), e && "toggleZoom" === i)
            ? e &&
              1 === e.content.scale &&
              e.option("maxScale") - e.content.scale > 0.01
              ? o.add(n)
              : e.content.scale > 1 && !s && o.add(a)
            : "close" === i && o.add(a);
        }
        onWheel(t, e) {
          if (
            "ready" === this.fancybox.state &&
            !1 !== this.fancybox.trigger("Image.wheel", e)
          )
            switch (this.fancybox.option("Image.wheel")) {
              case "zoom":
                "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
                break;
              case "close":
                this.fancybox.close();
                break;
              case "slide":
                this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
            }
        }
        onClick(t, e) {
          if ("ready" !== this.fancybox.state) return;
          let i = t.Panzoom;
          if (
            i &&
            (i.dragPosition.midPoint ||
              0 !== i.dragOffset.x ||
              0 !== i.dragOffset.y ||
              1 !== i.dragOffset.scale)
          )
            return;
          if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
          let s = (i) => {
              switch (i) {
                case "toggleZoom":
                  e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
                  break;
                case "close":
                  this.fancybox.close();
                  break;
                case "next":
                  e.stopPropagation(), this.fancybox.next();
              }
            },
            o = this.fancybox.option("Image.click"),
            n = this.fancybox.option("Image.doubleClick");
          n
            ? this.clickTimer
              ? (clearTimeout(this.clickTimer), (this.clickTimer = null), s(n))
              : (this.clickTimer = setTimeout(() => {
                  (this.clickTimer = null), s(o);
                }, 300))
            : s(o);
        }
        onPageChange(t, e) {
          let i = t.getSlide();
          e.slides.forEach((t) => {
            t.Panzoom &&
              "done" === t.state &&
              t.index !== i.index &&
              t.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
          });
        }
        attach() {
          this.fancybox.on(this.events);
        }
        detach() {
          this.fancybox.off(this.events);
        }
      }
      T.defaults = {
        canZoomInClass: "can-zoom_in",
        canZoomOutClass: "can-zoom_out",
        zoom: !0,
        zoomOpacity: "auto",
        zoomFriction: 0.82,
        ignoreCoveredThumbnail: !1,
        touch: !0,
        click: "toggleZoom",
        doubleClick: null,
        wheel: "zoom",
        fit: "contain",
        wrap: !1,
        Panzoom: { ratio: 1 },
      };
      class _ {
        constructor(t) {
          for (let e of ((this.fancybox = t), ["onChange", "onClosing"]))
            this[e] = this[e].bind(this);
          (this.events = {
            initCarousel: this.onChange,
            "Carousel.change": this.onChange,
            closing: this.onClosing,
          }),
            (this.hasCreatedHistory = !1),
            (this.origHash = ""),
            (this.timer = null);
        }
        onChange(t) {
          let e = t.Carousel;
          this.timer && clearTimeout(this.timer);
          let i = null === e.prevPage,
            s = t.getSlide(),
            o = new URL(document.URL).hash,
            n = !1;
          if (s.slug) n = "#" + s.slug;
          else {
            let i = s.$trigger && s.$trigger.dataset,
              o = t.option("slug") || (i && i.fancybox);
            o &&
              o.length &&
              "true" !== o &&
              (n = "#" + o + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
          }
          i && (this.origHash = o !== n ? o : ""),
            n &&
              o !== n &&
              (this.timer = setTimeout(() => {
                try {
                  window.history[i ? "pushState" : "replaceState"](
                    {},
                    document.title,
                    window.location.pathname + window.location.search + n,
                  ),
                    i && (this.hasCreatedHistory = !0);
                } catch (t) {}
              }, 300));
        }
        onClosing() {
          if (
            (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose)
          )
            try {
              return void window.history.replaceState(
                {},
                document.title,
                window.location.pathname +
                  window.location.search +
                  (this.origHash || ""),
              );
            } catch (t) {}
        }
        attach(t) {
          t.on(this.events);
        }
        detach(t) {
          t.off(this.events);
        }
        static startFromUrl() {
          let t = _.Fancybox;
          if (!t || t.getInstance() || !1 === t.defaults.Hash) return;
          let { hash: e, slug: i, index: s } = _.getParsedURL();
          if (!i) return;
          let o = document.querySelector(`[data-slug="${e}"]`);
          if (
            (o &&
              o.dispatchEvent(
                new CustomEvent("click", { bubbles: !0, cancelable: !0 }),
              ),
            t.getInstance())
          )
            return;
          let n = document.querySelectorAll(`[data-fancybox="${i}"]`);
          n.length &&
            (null === s && 1 === n.length ? (o = n[0]) : s && (o = n[s - 1]),
            o &&
              o.dispatchEvent(
                new CustomEvent("click", { bubbles: !0, cancelable: !0 }),
              ));
        }
        static onHashChange() {
          let { slug: t, index: e } = _.getParsedURL(),
            i = _.Fancybox,
            s = i && i.getInstance();
          if (s && s.plugins.Hash) {
            if (t) {
              let i = s.Carousel;
              if (t === s.option("slug")) return i.slideTo(e - 1);
              for (let e of i.slides)
                if (e.slug && e.slug === t) return i.slideTo(e.index);
              let o = s.getSlide(),
                n = o.$trigger && o.$trigger.dataset;
              if (n && n.fancybox === t) return i.slideTo(e - 1);
            }
            (s.plugins.Hash.hasSilentClose = !0), s.close();
          }
          _.startFromUrl();
        }
        static create(t) {
          function e() {
            window.addEventListener("hashchange", _.onHashChange, !1),
              _.startFromUrl();
          }
          (_.Fancybox = t),
            x &&
              window.requestAnimationFrame(() => {
                /complete|interactive|loaded/.test(document.readyState)
                  ? e()
                  : document.addEventListener("DOMContentLoaded", e);
              });
        }
        static destroy() {
          window.removeEventListener("hashchange", _.onHashChange, !1);
        }
        static getParsedURL() {
          let t = window.location.hash.substr(1),
            e = t.split("-"),
            i =
              (e.length > 1 &&
                /^\+?\d+$/.test(e[e.length - 1]) &&
                parseInt(e.pop(-1), 10)) ||
              null;
          return { hash: t, slug: e.join("-"), index: i };
        }
      }
      let A = {
        pageXOffset: 0,
        pageYOffset: 0,
        element: () =>
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement,
        activate(t) {
          (A.pageXOffset = window.pageXOffset),
            (A.pageYOffset = window.pageYOffset),
            t.requestFullscreen
              ? t.requestFullscreen()
              : t.mozRequestFullScreen
                ? t.mozRequestFullScreen()
                : t.webkitRequestFullscreen
                  ? t.webkitRequestFullscreen()
                  : t.msRequestFullscreen && t.msRequestFullscreen();
        },
        deactivate() {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitExitFullscreen &&
                document.webkitExitFullscreen();
        },
      };
      class z {
        constructor(t) {
          (this.fancybox = t),
            (this.active = !1),
            (this.handleVisibilityChange =
              this.handleVisibilityChange.bind(this));
        }
        isActive() {
          return this.active;
        }
        setTimer() {
          if (!this.active || this.timer) return;
          let t = this.fancybox.option("slideshow.delay", 3e3);
          this.timer = setTimeout(() => {
            (this.timer = null),
              this.fancybox.option("infinite") ||
              this.fancybox.getSlide().index !==
                this.fancybox.Carousel.slides.length - 1
                ? this.fancybox.next()
                : this.fancybox.jumpTo(0, { friction: 0 });
          }, t);
          let e = this.$progress;
          e ||
            ((e = document.createElement("div")).classList.add(
              "fancybox__progress",
            ),
            this.fancybox.$carousel.parentNode.insertBefore(
              e,
              this.fancybox.$carousel,
            ),
            (this.$progress = e),
            e.offsetHeight),
            (e.style.transitionDuration = `${t}ms`),
            (e.style.transform = "scaleX(1)");
        }
        clearTimer() {
          clearTimeout(this.timer),
            (this.timer = null),
            this.$progress &&
              ((this.$progress.style.transitionDuration = ""),
              (this.$progress.style.transform = ""),
              this.$progress.offsetHeight);
        }
        activate() {
          this.active ||
            ((this.active = !0),
            this.fancybox.$container.classList.add("has-slideshow"),
            "done" === this.fancybox.getSlide().state && this.setTimer(),
            document.addEventListener(
              "visibilitychange",
              this.handleVisibilityChange,
              !1,
            ));
        }
        handleVisibilityChange() {
          this.deactivate();
        }
        deactivate() {
          (this.active = !1),
            this.clearTimer(),
            this.fancybox.$container.classList.remove("has-slideshow"),
            document.removeEventListener(
              "visibilitychange",
              this.handleVisibilityChange,
              !1,
            );
        }
        toggle() {
          this.active
            ? this.deactivate()
            : this.fancybox.Carousel.slides.length > 1 && this.activate();
        }
      }
      class k {
        constructor(t) {
          for (let e of ((this.fancybox = t),
          (this.$container = null),
          (this.state = "init"),
          [
            "onInit",
            "onPrepare",
            "onDone",
            "onKeydown",
            "onClosing",
            "onChange",
            "onSettle",
            "onRefresh",
          ]))
            this[e] = this[e].bind(this);
          this.events = {
            init: this.onInit,
            prepare: this.onPrepare,
            done: this.onDone,
            keydown: this.onKeydown,
            closing: this.onClosing,
            "Carousel.change": this.onChange,
            "Carousel.settle": this.onSettle,
            "Carousel.Panzoom.touchStart": () => this.onRefresh(),
            "Image.startAnimation": (t, e) => this.onRefresh(e),
            "Image.afterUpdate": (t, e) => this.onRefresh(e),
          };
        }
        onInit() {
          if (this.fancybox.option("Toolbar.autoEnable")) {
            let t = !1;
            for (let e of this.fancybox.items)
              if ("image" === e.type) {
                t = !0;
                break;
              }
            if (!t) return void (this.state = "disabled");
          }
          for (let t of this.fancybox.option("Toolbar.display"))
            if ("close" === (s(t) ? t.id : t)) {
              this.fancybox.options.closeButton = !1;
              break;
            }
        }
        onPrepare() {
          let t = this.fancybox;
          if (
            "init" === this.state &&
            (this.build(),
            this.update(),
            (this.Slideshow = new z(t)),
            !t.Carousel.prevPage &&
              (t.option("slideshow.autoStart") && this.Slideshow.activate(),
              t.option("fullscreen.autoStart") && !A.element()))
          )
            try {
              A.activate(t.$container);
            } catch (t) {}
        }
        onFsChange() {
          window.scrollTo(A.pageXOffset, A.pageYOffset);
        }
        onSettle() {
          let t = this.fancybox,
            e = this.Slideshow;
          e &&
            e.isActive() &&
            (t.getSlide().index !== t.Carousel.slides.length - 1 ||
            t.option("infinite")
              ? "done" === t.getSlide().state && e.setTimer()
              : e.deactivate());
        }
        onChange() {
          this.update(),
            this.Slideshow &&
              this.Slideshow.isActive() &&
              this.Slideshow.clearTimer();
        }
        onDone(t, e) {
          let i = this.Slideshow;
          e.index === t.getSlide().index &&
            (this.update(),
            i &&
              i.isActive() &&
              (t.option("infinite") || e.index !== t.Carousel.slides.length - 1
                ? i.setTimer()
                : i.deactivate()));
        }
        onRefresh(t) {
          (t && t.index !== this.fancybox.getSlide().index) ||
            (this.update(),
            this.Slideshow &&
              this.Slideshow.isActive() &&
              (!t || "done" === t.state) &&
              this.Slideshow.deactivate());
        }
        onKeydown(t, e, i) {
          " " === e &&
            this.Slideshow &&
            (this.Slideshow.toggle(), i.preventDefault());
        }
        onClosing() {
          this.Slideshow && this.Slideshow.deactivate(),
            document.removeEventListener("fullscreenchange", this.onFsChange);
        }
        createElement(t) {
          let e;
          for (let i in ("div" === t.type
            ? (e = document.createElement("div"))
            : (e = document.createElement(
                "link" === t.type ? "a" : "button",
              )).classList.add("carousel__button"),
          (e.innerHTML = t.html),
          e.setAttribute("tabindex", t.tabindex || 0),
          t.class && e.classList.add(...t.class.split(" ")),
          t.attr))
            e.setAttribute(i, t.attr[i]);
          t.label &&
            e.setAttribute("title", this.fancybox.localize(`{{${t.label}}}`)),
            t.click && e.addEventListener("click", t.click.bind(this)),
            "prev" === t.id && e.setAttribute("data-fancybox-prev", ""),
            "next" === t.id && e.setAttribute("data-fancybox-next", "");
          let i = e.querySelector("svg");
          return (
            i &&
              (i.setAttribute("role", "img"),
              i.setAttribute("tabindex", "-1"),
              i.setAttribute("xmlns", "http://www.w3.org/2000/svg")),
            e
          );
        }
        build() {
          this.cleanup();
          let t = this.fancybox.option("Toolbar.items"),
            e = [
              { position: "left", items: [] },
              { position: "center", items: [] },
              { position: "right", items: [] },
            ],
            i = this.fancybox.plugins.Thumbs;
          for (let n of this.fancybox.option("Toolbar.display")) {
            let a, r;
            if (
              ((r = s(n) ? o({}, t[(a = n.id)], n) : t[(a = n)]),
              ["counter", "next", "prev", "slideshow"].includes(a) &&
                this.fancybox.items.length < 2)
            )
              continue;
            if ("fullscreen" === a) {
              if (!document.fullscreenEnabled || window.fullScreen) continue;
              document.addEventListener("fullscreenchange", this.onFsChange);
            }
            if (("thumbs" === a && (!i || "disabled" === i.state)) || !r)
              continue;
            let l = r.position || "right",
              h = e.find((t) => t.position === l);
            h && h.items.push(r);
          }
          let n = document.createElement("div");
          for (let t of (n.classList.add("fancybox__toolbar"), e))
            if (t.items.length) {
              let e = document.createElement("div");
              for (let i of (e.classList.add("fancybox__toolbar__items"),
              e.classList.add(`fancybox__toolbar__items--${t.position}`),
              t.items))
                e.appendChild(this.createElement(i));
              n.appendChild(e);
            }
          this.fancybox.$carousel.parentNode.insertBefore(
            n,
            this.fancybox.$carousel,
          ),
            (this.$container = n);
        }
        update() {
          let t = this.fancybox.getSlide(),
            e = t.index,
            i = this.fancybox.items.length,
            s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);
          for (let t of this.fancybox.$container.querySelectorAll(
            "a.fancybox__button--download",
          ))
            s
              ? (t.removeAttribute("disabled"),
                t.removeAttribute("tabindex"),
                t.setAttribute("href", s),
                t.setAttribute("download", s),
                t.setAttribute("target", "_blank"))
              : (t.setAttribute("disabled", ""),
                t.setAttribute("tabindex", -1),
                t.removeAttribute("href"),
                t.removeAttribute("download"));
          let o = t.Panzoom,
            n = o && o.option("maxScale") > o.option("baseScale");
          for (let t of this.fancybox.$container.querySelectorAll(
            ".fancybox__button--zoom",
          ))
            n ? t.removeAttribute("disabled") : t.setAttribute("disabled", "");
          for (let e of this.fancybox.$container.querySelectorAll(
            "[data-fancybox-index]",
          ))
            e.innerHTML = t.index + 1;
          for (let t of this.fancybox.$container.querySelectorAll(
            "[data-fancybox-count]",
          ))
            t.innerHTML = i;
          if (!this.fancybox.option("infinite")) {
            for (let t of this.fancybox.$container.querySelectorAll(
              "[data-fancybox-prev]",
            ))
              0 === e
                ? t.setAttribute("disabled", "")
                : t.removeAttribute("disabled");
            for (let t of this.fancybox.$container.querySelectorAll(
              "[data-fancybox-next]",
            ))
              e === i - 1
                ? t.setAttribute("disabled", "")
                : t.removeAttribute("disabled");
          }
        }
        cleanup() {
          this.Slideshow &&
            this.Slideshow.isActive() &&
            this.Slideshow.clearTimer(),
            this.$container && this.$container.remove(),
            (this.$container = null);
        }
        attach() {
          this.fancybox.on(this.events);
        }
        detach() {
          this.fancybox.off(this.events), this.cleanup();
        }
      }
      k.defaults = {
        display: [
          "counter",
          "zoom",
          "slideshow",
          "fullscreen",
          "thumbs",
          "close",
        ],
        autoEnable: !0,
        items: {
          counter: {
            position: "left",
            type: "div",
            class: "fancybox__counter",
            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
            attr: { tabindex: -1 },
          },
          prev: {
            type: "button",
            class: "fancybox__button--prev",
            label: "PREV",
            html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
            attr: { "data-fancybox-prev": "" },
          },
          next: {
            type: "button",
            class: "fancybox__button--next",
            label: "NEXT",
            html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
            attr: { "data-fancybox-next": "" },
          },
          fullscreen: {
            type: "button",
            class: "fancybox__button--fullscreen",
            label: "TOGGLE_FULLSCREEN",
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
            click: function (t) {
              t.preventDefault(),
                A.element()
                  ? A.deactivate()
                  : A.activate(this.fancybox.$container);
            },
          },
          slideshow: {
            type: "button",
            class: "fancybox__button--slideshow",
            label: "TOGGLE_SLIDESHOW",
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
            click: function (t) {
              t.preventDefault(), this.Slideshow.toggle();
            },
          },
          zoom: {
            type: "button",
            class: "fancybox__button--zoom",
            label: "TOGGLE_ZOOM",
            html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
            click: function (t) {
              t.preventDefault();
              let e = this.fancybox.getSlide().Panzoom;
              e && e.toggleZoom();
            },
          },
          download: {
            type: "link",
            label: "DOWNLOAD",
            class: "fancybox__button--download",
            html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
            click: function (t) {
              t.stopPropagation();
            },
          },
          thumbs: {
            type: "button",
            label: "TOGGLE_THUMBS",
            class: "fancybox__button--thumbs",
            html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
            click: function (t) {
              t.stopPropagation();
              let e = this.fancybox.plugins.Thumbs;
              e && e.toggle();
            },
          },
          close: {
            type: "button",
            label: "CLOSE",
            class: "fancybox__button--close",
            html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
            attr: { "data-fancybox-close": "", tabindex: 0 },
          },
        },
      };
      let O = {
          startIndex: 0,
          preload: 1,
          infinite: !0,
          showClass: "fancybox-zoomInUp",
          hideClass: "fancybox-fadeOut",
          animated: !0,
          hideScrollbar: !0,
          parentEl: null,
          mainClass: null,
          autoFocus: !0,
          trapFocus: !0,
          placeFocusBack: !0,
          click: "close",
          closeButton: "inside",
          dragToClose: !0,
          keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev",
          },
          template: {
            closeButton:
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
            spinner:
              '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
            main: null,
          },
          l10n: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
            ELEMENT_NOT_FOUND: "HTML Element Not Found",
            AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
            AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
            IFRAME_ERROR: "Error Loading Page",
            TOGGLE_ZOOM: "Toggle zoom level",
            TOGGLE_THUMBS: "Toggle thumbnails",
            TOGGLE_SLIDESHOW: "Toggle slideshow",
            TOGGLE_FULLSCREEN: "Toggle full-screen mode",
            DOWNLOAD: "Download",
          },
        },
        M = new Map(),
        I = 0;
      class F extends u {
        constructor(t, e = {}) {
          (t = t.map(
            (t) => (
              t.width && (t._width = t.width),
              t.height && (t._height = t.height),
              t
            ),
          )),
            super(o(!0, {}, O, e)),
            this.bindHandlers(),
            (this.state = "init"),
            this.setItems(t),
            this.attachPlugins(F.Plugins),
            this.trigger("init"),
            !0 === this.option("hideScrollbar") && this.hideScrollbar(),
            this.initLayout(),
            this.initCarousel(),
            this.attachEvents(),
            M.set(this.id, this),
            this.trigger("prepare"),
            (this.state = "ready"),
            this.trigger("ready"),
            this.$container.setAttribute("aria-hidden", "false"),
            this.option("trapFocus") && this.focus();
        }
        option(t, ...e) {
          let i = this.getSlide(),
            s = i ? i[t] : void 0;
          return void 0 !== s
            ? ("function" == typeof s && (s = s.call(this, this, ...e)), s)
            : super.option(t, ...e);
        }
        bindHandlers() {
          for (let t of [
            "onMousedown",
            "onKeydown",
            "onClick",
            "onFocus",
            "onCreateSlide",
            "onSettle",
            "onTouchMove",
            "onTouchEnd",
            "onTransform",
          ])
            this[t] = this[t].bind(this);
        }
        attachEvents() {
          document.addEventListener("mousedown", this.onMousedown),
            document.addEventListener("keydown", this.onKeydown, !0),
            this.option("trapFocus") &&
              document.addEventListener("focus", this.onFocus, !0),
            this.$container.addEventListener("click", this.onClick);
        }
        detachEvents() {
          document.removeEventListener("mousedown", this.onMousedown),
            document.removeEventListener("keydown", this.onKeydown, !0),
            document.removeEventListener("focus", this.onFocus, !0),
            this.$container.removeEventListener("click", this.onClick);
        }
        initLayout() {
          this.$root = this.option("parentEl") || document.body;
          let t = this.option("template.main");
          t &&
            (this.$root.insertAdjacentHTML("beforeend", this.localize(t)),
            (this.$container = this.$root.querySelector(
              ".fancybox__container",
            ))),
            this.$container ||
              ((this.$container = document.createElement("div")),
              this.$root.appendChild(this.$container)),
            (this.$container.onscroll = () => (
              (this.$container.scrollLeft = 0), !1
            )),
            Object.entries({
              class: "fancybox__container",
              role: "dialog",
              tabIndex: "-1",
              "aria-modal": "true",
              "aria-hidden": "true",
              "aria-label": this.localize("{{MODAL}}"),
            }).forEach((t) => this.$container.setAttribute(...t)),
            this.option("animated") &&
              this.$container.classList.add("is-animated"),
            (this.$backdrop = this.$container.querySelector(
              ".fancybox__backdrop",
            )),
            this.$backdrop ||
              ((this.$backdrop = document.createElement("div")),
              this.$backdrop.classList.add("fancybox__backdrop"),
              this.$container.appendChild(this.$backdrop)),
            (this.$carousel = this.$container.querySelector(
              ".fancybox__carousel",
            )),
            this.$carousel ||
              ((this.$carousel = document.createElement("div")),
              this.$carousel.classList.add("fancybox__carousel"),
              this.$container.appendChild(this.$carousel)),
            (this.$container.Fancybox = this),
            (this.id = this.$container.getAttribute("id")),
            this.id ||
              ((this.id = this.options.id || ++I),
              this.$container.setAttribute("id", "fancybox-" + this.id));
          let e = this.option("mainClass");
          return (
            e && this.$container.classList.add(...e.split(" ")),
            document.documentElement.classList.add("with-fancybox"),
            this.trigger("initLayout"),
            this
          );
        }
        setItems(t) {
          let e = [];
          for (let i of t) {
            let t = i.$trigger;
            if (t) {
              let e = t.dataset || {};
              (i.src = e.src || t.getAttribute("href") || i.src),
                (i.type = e.type || i.type),
                !i.src &&
                  t instanceof HTMLImageElement &&
                  (i.src = t.currentSrc || i.$trigger.src);
            }
            let s = i.$thumb;
            if (!s) {
              let t = i.$trigger && i.$trigger.origTarget;
              t &&
                (s =
                  t instanceof HTMLImageElement
                    ? t
                    : t.querySelector("img:not([aria-hidden])")),
                !s &&
                  i.$trigger &&
                  (s =
                    i.$trigger instanceof HTMLImageElement
                      ? i.$trigger
                      : i.$trigger.querySelector("img:not([aria-hidden])"));
            }
            i.$thumb = s || null;
            let o = i.thumb;
            o ||
              !s ||
              (o = s.currentSrc || s.src) ||
              !s.dataset ||
              (o = s.dataset.lazySrc || s.dataset.src),
              o || "image" !== i.type || (o = i.src),
              (i.thumb = o || null),
              (i.caption = i.caption || ""),
              e.push(i);
          }
          this.items = e;
        }
        initCarousel() {
          return (
            (this.Carousel = new v(
              this.$carousel,
              o(
                !0,
                {},
                {
                  prefix: "",
                  classNames: {
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide",
                  },
                  textSelection: !0,
                  preload: this.option("preload"),
                  friction: 0.88,
                  slides: this.items,
                  initialPage: this.options.startIndex,
                  slidesPerPage: 1,
                  infiniteX: this.option("infinite"),
                  infiniteY: !0,
                  l10n: this.option("l10n"),
                  Dots: !1,
                  Navigation: {
                    classNames: {
                      main: "fancybox__nav",
                      button: "carousel__button",
                      next: "is-next",
                      prev: "is-prev",
                    },
                  },
                  Panzoom: {
                    textSelection: !0,
                    panOnlyZoomed: () =>
                      this.Carousel &&
                      this.Carousel.pages &&
                      this.Carousel.pages.length < 2 &&
                      !this.option("dragToClose"),
                    lockAxis: () => {
                      if (this.Carousel) {
                        let t = "x";
                        return this.option("dragToClose") && (t += "y"), t;
                      }
                    },
                  },
                  on: {
                    "*": (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
                    init: (t) => (this.Carousel = t),
                    createSlide: this.onCreateSlide,
                    settle: this.onSettle,
                  },
                },
                this.option("Carousel"),
              ),
            )),
            this.option("dragToClose") &&
              this.Carousel.Panzoom.on({
                touchMove: this.onTouchMove,
                afterTransform: this.onTransform,
                touchEnd: this.onTouchEnd,
              }),
            this.trigger("initCarousel"),
            this
          );
        }
        onCreateSlide(t, e) {
          let i = e.caption || "";
          if (
            ("function" == typeof this.options.caption &&
              (i = this.options.caption.call(this, this, this.Carousel, e)),
            "string" == typeof i && i.length)
          ) {
            let t = document.createElement("div"),
              s = `fancybox__caption_${this.id}_${e.index}`;
            (t.className = "fancybox__caption"),
              (t.innerHTML = i),
              t.setAttribute("id", s),
              (e.$caption = e.$el.appendChild(t)),
              e.$el.classList.add("has-caption"),
              e.$el.setAttribute("aria-labelledby", s);
          }
        }
        onSettle() {
          this.option("autoFocus") && this.focus();
        }
        onFocus(t) {
          this.isTopmost() && this.focus(t);
        }
        onClick(t) {
          if (t.defaultPrevented) return;
          let e = t.composedPath()[0];
          if (e.matches("[data-fancybox-close]"))
            return t.preventDefault(), void F.close(!1, t);
          if (e.matches("[data-fancybox-next]"))
            return t.preventDefault(), void F.next();
          if (e.matches("[data-fancybox-prev]"))
            return t.preventDefault(), void F.prev();
          let i = document.activeElement;
          if (i) {
            if (i.closest("[contenteditable]")) return;
            e.matches($) || i.blur();
          }
          if (
            !e.closest(".fancybox__content") &&
            !getSelection().toString().length &&
            !1 !== this.trigger("click", t)
          )
            switch (this.option("click")) {
              case "close":
                this.close();
                break;
              case "next":
                this.next();
            }
        }
        onTouchMove() {
          let t = this.getSlide().Panzoom;
          return !t || 1 === t.content.scale;
        }
        onTouchEnd(t) {
          let e = t.dragOffset.y;
          Math.abs(e) >= 150 || (Math.abs(e) >= 35 && t.dragOffset.time < 350)
            ? (this.option("hideClass") &&
                (this.getSlide().hideClass =
                  "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")),
              this.close())
            : "y" === t.lockAxis && t.panTo({ y: 0 });
        }
        onTransform(t) {
          if (this.$backdrop) {
            let e = Math.abs(t.content.y),
              i =
                e < 1
                  ? ""
                  : Math.max(
                      0.33,
                      Math.min(1, 1 - (e / t.content.fitHeight) * 1.5),
                    );
            this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""),
              this.$container.style.setProperty("--fancybox-opacity", i);
          }
        }
        onMousedown() {
          "ready" === this.state &&
            document.body.classList.add("is-using-mouse");
        }
        onKeydown(t) {
          if (!this.isTopmost()) return;
          document.body.classList.remove("is-using-mouse");
          let e = t.key,
            i = this.option("keyboard");
          if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
          let s = t.composedPath()[0],
            o = document.activeElement && document.activeElement.classList,
            n = o && o.contains("carousel__button");
          if (
            ("Escape" !== e &&
              !n &&
              (t.target.isContentEditable ||
                -1 !==
                  [
                    "BUTTON",
                    "TEXTAREA",
                    "OPTION",
                    "INPUT",
                    "SELECT",
                    "VIDEO",
                  ].indexOf(s.nodeName))) ||
            !1 === this.trigger("keydown", e, t)
          )
            return;
          let a = i[e];
          "function" == typeof this[a] && this[a]();
        }
        getSlide() {
          let t = this.Carousel;
          if (!t) return null;
          let e = null === t.page ? t.option("initialPage") : t.page,
            i = t.pages || [];
          return i.length && i[e] ? i[e].slides[0] : null;
        }
        focus(t) {
          if (
            F.ignoreFocusChange ||
            ["init", "closing", "customClosing", "destroy"].indexOf(
              this.state,
            ) > -1
          )
            return;
          let e = this.$container,
            i = this.getSlide(),
            s = "done" === i.state ? i.$el : null;
          if (s && s.contains(document.activeElement)) return;
          t && t.preventDefault(), (F.ignoreFocusChange = !0);
          let o = Array.from(e.querySelectorAll($)),
            n,
            a = [];
          for (let t of o) {
            let e = t.offsetParent,
              i = s && s.contains(t),
              o = !this.Carousel.$viewport.contains(t);
            e && (i || o)
              ? (a.push(t),
                void 0 !== t.dataset.origTabindex &&
                  ((t.tabIndex = t.dataset.origTabindex),
                  t.removeAttribute("data-orig-tabindex")),
                (t.hasAttribute("autoFocus") ||
                  (!n && i && !t.classList.contains("carousel__button"))) &&
                  (n = t))
              : ((t.dataset.origTabindex =
                  void 0 === t.dataset.origTabindex
                    ? t.getAttribute("tabindex")
                    : t.dataset.origTabindex),
                (t.tabIndex = -1));
          }
          t
            ? a.indexOf(t.target) > -1
              ? (this.lastFocus = t.target)
              : this.lastFocus === e
                ? C(a[a.length - 1])
                : C(e)
            : this.option("autoFocus") && n
              ? C(n)
              : 0 > a.indexOf(document.activeElement) && C(e),
            (this.lastFocus = document.activeElement),
            (F.ignoreFocusChange = !1);
        }
        hideScrollbar() {
          if (!x) return;
          let t =
              window.innerWidth -
              document.documentElement.getBoundingClientRect().width,
            e = "fancybox-style-noscroll",
            i = document.getElementById(e);
          i ||
            (t > 0 &&
              (((i = document.createElement("style")).id = e),
              (i.type = "text/css"),
              (i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`),
              document.getElementsByTagName("head")[0].appendChild(i),
              document.body.classList.add("compensate-for-scrollbar")));
        }
        revealScrollbar() {
          document.body.classList.remove("compensate-for-scrollbar");
          let t = document.getElementById("fancybox-style-noscroll");
          t && t.remove();
        }
        clearContent(t) {
          this.Carousel.trigger("removeSlide", t),
            t.$content && (t.$content.remove(), (t.$content = null)),
            t.$closeButton &&
              (t.$closeButton.remove(), (t.$closeButton = null)),
            t._className && t.$el.classList.remove(t._className);
        }
        setContent(t, e, i = {}) {
          let s;
          let o = t.$el;
          if (e instanceof HTMLElement)
            ["img", "iframe", "video", "audio"].indexOf(
              e.nodeName.toLowerCase(),
            ) > -1
              ? (s = document.createElement("div")).appendChild(e)
              : (s = e);
          else {
            let t = document.createRange().createContextualFragment(e);
            (s = document.createElement("div")).appendChild(t);
          }
          if (
            (t.filter && !t.error && (s = s.querySelector(t.filter)),
            s instanceof Element)
          )
            return (
              (t._className = `has-${i.suffix || t.type || "unknown"}`),
              o.classList.add(t._className),
              s.classList.add("fancybox__content"),
              ("none" !== s.style.display &&
                "none" !== getComputedStyle(s).getPropertyValue("display")) ||
                (s.style.display =
                  t.display || this.option("defaultDisplay") || "flex"),
              t.id && s.setAttribute("id", t.id),
              (t.$content = s),
              o.prepend(s),
              this.manageCloseButton(t),
              "loading" !== t.state && this.revealContent(t),
              s
            );
          this.setError(t, "{{ELEMENT_NOT_FOUND}}");
        }
        manageCloseButton(t) {
          let e =
            void 0 === t.closeButton
              ? this.option("closeButton")
              : t.closeButton;
          if (!e || ("top" === e && this.$closeButton)) return;
          let i = document.createElement("button");
          i.classList.add("carousel__button", "is-close"),
            i.setAttribute("title", this.options.l10n.CLOSE),
            (i.innerHTML = this.option("template.closeButton")),
            i.addEventListener("click", (t) => this.close(t)),
            "inside" === e
              ? (t.$closeButton && t.$closeButton.remove(),
                (t.$closeButton = t.$content.appendChild(i)))
              : (this.$closeButton = this.$container.insertBefore(
                  i,
                  this.$container.firstChild,
                ));
        }
        revealContent(t) {
          this.trigger("reveal", t), (t.$content.style.visibility = "");
          let e = !1;
          t.error ||
            "loading" === t.state ||
            null !== this.Carousel.prevPage ||
            t.index !== this.options.startIndex ||
            (e =
              void 0 === t.showClass ? this.option("showClass") : t.showClass),
            e
              ? ((t.state = "animating"),
                this.animateCSS(t.$content, e, () => {
                  this.done(t);
                }))
              : this.done(t);
        }
        animateCSS(t, e, i) {
          if (
            (t &&
              t.dispatchEvent(
                new CustomEvent("animationend", {
                  bubbles: !0,
                  cancelable: !0,
                }),
              ),
            !t || !e)
          )
            return void ("function" == typeof i && i());
          let s = function (o) {
            o.currentTarget === this &&
              (t.removeEventListener("animationend", s),
              i && i(),
              t.classList.remove(e));
          };
          t.addEventListener("animationend", s), t.classList.add(e);
        }
        done(t) {
          (t.state = "done"), this.trigger("done", t);
          let e = this.getSlide();
          e && t.index === e.index && this.option("autoFocus") && this.focus();
        }
        setError(t, e) {
          (t.error = e), this.hideLoading(t), this.clearContent(t);
          let i = document.createElement("div");
          i.classList.add("fancybox-error"),
            (i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>")),
            this.setContent(t, i, { suffix: "error" });
        }
        showLoading(t) {
          (t.state = "loading"), t.$el.classList.add("is-loading");
          let e = t.$el.querySelector(".fancybox__spinner");
          e ||
            ((e = document.createElement("div")).classList.add(
              "fancybox__spinner",
            ),
            (e.innerHTML = this.option("template.spinner")),
            e.addEventListener("click", () => {
              this.Carousel.Panzoom.velocity || this.close();
            }),
            t.$el.prepend(e));
        }
        hideLoading(t) {
          let e = t.$el && t.$el.querySelector(".fancybox__spinner");
          e && (e.remove(), t.$el.classList.remove("is-loading")),
            "loading" === t.state &&
              (this.trigger("load", t), (t.state = "ready"));
        }
        next() {
          let t = this.Carousel;
          t && t.pages.length > 1 && t.slideNext();
        }
        prev() {
          let t = this.Carousel;
          t && t.pages.length > 1 && t.slidePrev();
        }
        jumpTo(...t) {
          this.Carousel && this.Carousel.slideTo(...t);
        }
        isClosing() {
          return ["closing", "customClosing", "destroy"].includes(this.state);
        }
        isTopmost() {
          return F.getInstance().id == this.id;
        }
        close(t) {
          if (
            (t && t.preventDefault(),
            this.isClosing() ||
              !1 === this.trigger("shouldClose", t) ||
              ((this.state = "closing"),
              this.Carousel.Panzoom.destroy(),
              this.detachEvents(),
              this.trigger("closing", t),
              "destroy" === this.state))
          )
            return;
          this.$container.setAttribute("aria-hidden", "true"),
            this.$container.classList.add("is-closing");
          let e = this.getSlide();
          if (
            (this.Carousel.slides.forEach((t) => {
              t.$content &&
                t.index !== e.index &&
                this.Carousel.trigger("removeSlide", t);
            }),
            "closing" === this.state)
          ) {
            let t =
              void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;
            this.animateCSS(
              e.$content,
              t,
              () => {
                this.destroy();
              },
              !0,
            );
          }
        }
        destroy() {
          if ("destroy" === this.state) return;
          (this.state = "destroy"), this.trigger("destroy");
          let t = this.option("placeFocusBack")
            ? this.option("triggerTarget", this.getSlide().$trigger)
            : null;
          this.Carousel.destroy(),
            this.detachPlugins(),
            (this.Carousel = null),
            (this.options = {}),
            (this.events = {}),
            this.$container.remove(),
            (this.$container = this.$backdrop = this.$carousel = null),
            t && C(t),
            M.delete(this.id);
          let e = F.getInstance();
          e
            ? e.focus()
            : (document.documentElement.classList.remove("with-fancybox"),
              document.body.classList.remove("is-using-mouse"),
              this.revealScrollbar());
        }
        static show(t, e = {}) {
          return new F(t, e);
        }
        static fromEvent(t, e = {}) {
          if (
            t.defaultPrevented ||
            (t.button && 0 !== t.button) ||
            t.ctrlKey ||
            t.metaKey ||
            t.shiftKey
          )
            return;
          let i = t.composedPath()[0],
            s,
            o,
            n,
            a = i;
          if (
            ((a.matches("[data-fancybox-trigger]") ||
              (a = a.closest("[data-fancybox-trigger]"))) &&
              ((e.triggerTarget = a),
              (s = a && a.dataset && a.dataset.fancyboxTrigger)),
            s)
          ) {
            let t = document.querySelectorAll(`[data-fancybox="${s}"]`),
              e = parseInt(a.dataset.fancyboxIndex, 10) || 0;
            a = t.length ? t[e] : a;
          }
          Array.from(F.openers.keys())
            .reverse()
            .some((e) => {
              n = a || i;
              let s = !1;
              try {
                n instanceof Element &&
                  ("string" == typeof e || e instanceof String) &&
                  (s = n.matches(e) || (n = n.closest(e)));
              } catch (t) {}
              return !!s && (t.preventDefault(), (o = e), !0);
            });
          let r = !1;
          if (o) {
            (e.event = t),
              (e.target = n),
              (n.origTarget = i),
              (r = F.fromOpener(o, e));
            let s = F.getInstance();
            s &&
              "ready" === s.state &&
              t.detail &&
              document.body.classList.add("is-using-mouse");
          }
          return r;
        }
        static fromOpener(t, e = {}) {
          let i = [],
            s = e.startIndex || 0,
            n = e.target || null,
            a =
              void 0 !== (e = o({}, e, F.openers.get(t))).groupAll &&
              e.groupAll,
            r = void 0 === e.groupAttr ? "data-fancybox" : e.groupAttr,
            l = r && n ? n.getAttribute(`${r}`) : "";
          if (!n || l || a) {
            let s = e.root || (n ? n.getRootNode() : document.body);
            i = [].slice.call(s.querySelectorAll(t));
          }
          if (
            (n &&
              !a &&
              (i = l ? i.filter((t) => t.getAttribute(`${r}`) === l) : [n]),
            !i.length)
          )
            return !1;
          let h = F.getInstance();
          return (
            !(h && i.indexOf(h.options.$trigger) > -1) &&
            ((s = n ? i.indexOf(n) : s),
            (i = i.map(function (t) {
              let e = ["false", "0", "no", "null", "undefined"],
                i = ["true", "1", "yes"],
                s = Object.assign({}, t.dataset),
                o = {};
              for (let [t, n] of Object.entries(s))
                if ("fancybox" !== t) {
                  if ("width" === t || "height" === t) o[`_${t}`] = n;
                  else if ("string" == typeof n || n instanceof String) {
                    if (e.indexOf(n) > -1) o[t] = !1;
                    else if (i.indexOf(o[t]) > -1) o[t] = !0;
                    else
                      try {
                        o[t] = JSON.parse(n);
                      } catch (e) {
                        o[t] = n;
                      }
                  } else o[t] = n;
                }
              return t instanceof Element && (o.$trigger = t), o;
            })),
            new F(i, o({}, e, { startIndex: s, $trigger: n })))
          );
        }
        static bind(t, e = {}) {
          function i() {
            document.body.addEventListener("click", F.fromEvent, !1);
          }
          x &&
            (F.openers.size ||
              (/complete|interactive|loaded/.test(document.readyState)
                ? i()
                : document.addEventListener("DOMContentLoaded", i)),
            F.openers.set(t, e));
        }
        static unbind(t) {
          F.openers.delete(t), F.openers.size || F.destroy();
        }
        static destroy() {
          let t;
          for (; (t = F.getInstance()); ) t.destroy();
          (F.openers = new Map()),
            document.body.removeEventListener("click", F.fromEvent, !1);
        }
        static getInstance(t) {
          return t
            ? M.get(t)
            : Array.from(M.values())
                .reverse()
                .find((t) => !t.isClosing() && t) || null;
        }
        static close(t = !0, e) {
          if (t) for (let t of M.values()) t.close(e);
          else {
            let t = F.getInstance();
            t && t.close(e);
          }
        }
        static next() {
          let t = F.getInstance();
          t && t.next();
        }
        static prev() {
          let t = F.getInstance();
          t && t.prev();
        }
      }
      for (let [t, e] of ((F.version = "4.0.31"),
      (F.defaults = O),
      (F.openers = new Map()),
      (F.Plugins = {
        ScrollLock: class {
          constructor(t) {
            for (let e of ((this.fancybox = t),
            (this.viewport = null),
            (this.pendingUpdate = null),
            ["onReady", "onResize", "onTouchstart", "onTouchmove"]))
              this[e] = this[e].bind(this);
          }
          onReady() {
            let t = window.visualViewport;
            t &&
              ((this.viewport = t),
              (this.startY = 0),
              t.addEventListener("resize", this.onResize),
              this.updateViewport()),
              window.addEventListener("touchstart", this.onTouchstart, {
                passive: !1,
              }),
              window.addEventListener("touchmove", this.onTouchmove, {
                passive: !1,
              }),
              window.addEventListener("wheel", this.onWheel, { passive: !1 });
          }
          onResize() {
            this.updateViewport();
          }
          updateViewport() {
            let t = this.fancybox,
              e = this.viewport,
              i = e.scale || 1,
              s = t.$container;
            if (!s) return;
            let o = "",
              n = "",
              a = "";
            i - 1 > 0.1 &&
              ((o = e.width * i + "px"),
              (n = e.height * i + "px"),
              (a = `translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${
                1 / i
              })`)),
              (s.style.width = o),
              (s.style.height = n),
              (s.style.transform = a);
          }
          onTouchstart(t) {
            this.startY = t.touches ? t.touches[0].screenY : t.screenY;
          }
          onTouchmove(t) {
            let e = this.startY,
              i =
                window.innerWidth / window.document.documentElement.clientWidth;
            if (!t.cancelable || t.touches.length > 1 || 1 !== i) return;
            let s = a(t.composedPath()[0]);
            if (!s) return void t.preventDefault();
            let o = window.getComputedStyle(s),
              n = parseInt(o.getPropertyValue("height"), 10),
              r = t.touches ? t.touches[0].screenY : t.screenY,
              l = e <= r && 0 === s.scrollTop,
              h = e >= r && s.scrollHeight - s.scrollTop === n;
            (l || h) && t.preventDefault();
          }
          onWheel(t) {
            a(t.composedPath()[0]) || t.preventDefault();
          }
          cleanup() {
            this.pendingUpdate &&
              (cancelAnimationFrame(this.pendingUpdate),
              (this.pendingUpdate = null));
            let t = this.viewport;
            t &&
              (t.removeEventListener("resize", this.onResize),
              (this.viewport = null)),
              window.removeEventListener("touchstart", this.onTouchstart, !1),
              window.removeEventListener("touchmove", this.onTouchmove, !1),
              window.removeEventListener("wheel", this.onWheel, {
                passive: !1,
              });
          }
          attach() {
            this.fancybox.on("initLayout", this.onReady);
          }
          detach() {
            this.fancybox.off("initLayout", this.onReady), this.cleanup();
          }
        },
        Thumbs: S,
        Html: L,
        Toolbar: k,
        Image: T,
        Hash: _,
      }),
      F.bind("[data-fancybox]"),
      Object.entries(F.Plugins || {})))
        "function" == typeof e.create && e.create(F);
    },
    8846: function () {},
  },
]);
//# sourceMappingURL=9980.86f3bf3f7e6a163a.js.map
