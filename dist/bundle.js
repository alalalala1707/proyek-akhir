/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t,
    e,
    n,
    r,
    o = {
      573: (t, e, n) => {
        n.a(t, async (t, e) => {
          try {
            var r = n(943),
              o = (n(788), t([r]));
            (r = (o.then ? (await o)() : o)[0]), e();
          } catch (t) {
            e(t);
          }
        });
      },
      943: (t, e, n) => {
        n.a(
          t,
          async (t, e) => {
            try {
              var r = n(618);
              function u(t) {
                return (
                  (u =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        }),
                  u(t)
                );
              }
              function l() {
                l = function () {
                  return e;
                };
                var t,
                  e = {},
                  n = Object.prototype,
                  r = n.hasOwnProperty,
                  o =
                    Object.defineProperty ||
                    function (t, e, n) {
                      t[e] = n.value;
                    },
                  i = "function" == typeof Symbol ? Symbol : {},
                  a = i.iterator || "@@iterator",
                  c = i.asyncIterator || "@@asyncIterator",
                  s = i.toStringTag || "@@toStringTag";
                function d(t, e, n) {
                  return (
                    Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    t[e]
                  );
                }
                try {
                  d({}, "");
                } catch (t) {
                  d = function (t, e, n) {
                    return (t[e] = n);
                  };
                }
                function p(t, e, n, r) {
                  var i = e && e.prototype instanceof g ? e : g,
                    a = Object.create(i.prototype),
                    c = new P(r || []);
                  return o(a, "_invoke", { value: T(t, n, c) }), a;
                }
                function f(t, e, n) {
                  try {
                    return { type: "normal", arg: t.call(e, n) };
                  } catch (t) {
                    return { type: "throw", arg: t };
                  }
                }
                e.wrap = p;
                var h = "suspendedStart",
                  v = "suspendedYield",
                  y = "executing",
                  m = "completed",
                  b = {};
                function g() {}
                function x() {}
                function w() {}
                var k = {};
                d(k, a, function () {
                  return this;
                });
                var E = Object.getPrototypeOf,
                  N = E && E(E(F([])));
                N && N !== n && r.call(N, a) && (k = N);
                var L = (w.prototype = g.prototype = Object.create(k));
                function _(t) {
                  ["next", "throw", "return"].forEach(function (e) {
                    d(t, e, function (t) {
                      return this._invoke(e, t);
                    });
                  });
                }
                function S(t, e) {
                  function n(o, i, a, c) {
                    var s = f(t[o], t, i);
                    if ("throw" !== s.type) {
                      var l = s.arg,
                        d = l.value;
                      return d && "object" == u(d) && r.call(d, "__await")
                        ? e.resolve(d.__await).then(
                            function (t) {
                              n("next", t, a, c);
                            },
                            function (t) {
                              n("throw", t, a, c);
                            },
                          )
                        : e.resolve(d).then(
                            function (t) {
                              (l.value = t), a(l);
                            },
                            function (t) {
                              return n("throw", t, a, c);
                            },
                          );
                    }
                    c(s.arg);
                  }
                  var i;
                  o(this, "_invoke", {
                    value: function (t, r) {
                      function o() {
                        return new e(function (e, o) {
                          n(t, r, e, o);
                        });
                      }
                      return (i = i ? i.then(o, o) : o());
                    },
                  });
                }
                function T(e, n, r) {
                  var o = h;
                  return function (i, a) {
                    if (o === y) throw Error("Generator is already running");
                    if (o === m) {
                      if ("throw" === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (r.method = i, r.arg = a; ; ) {
                      var c = r.delegate;
                      if (c) {
                        var s = j(c, r);
                        if (s) {
                          if (s === b) continue;
                          return s;
                        }
                      }
                      if ("next" === r.method) r.sent = r._sent = r.arg;
                      else if ("throw" === r.method) {
                        if (o === h) throw ((o = m), r.arg);
                        r.dispatchException(r.arg);
                      } else "return" === r.method && r.abrupt("return", r.arg);
                      o = y;
                      var u = f(e, n, r);
                      if ("normal" === u.type) {
                        if (((o = r.done ? m : v), u.arg === b)) continue;
                        return { value: u.arg, done: r.done };
                      }
                      "throw" === u.type &&
                        ((o = m), (r.method = "throw"), (r.arg = u.arg));
                    }
                  };
                }
                function j(e, n) {
                  var r = n.method,
                    o = e.iterator[r];
                  if (o === t)
                    return (
                      (n.delegate = null),
                      ("throw" === r &&
                        e.iterator.return &&
                        ((n.method = "return"),
                        (n.arg = t),
                        j(e, n),
                        "throw" === n.method)) ||
                        ("return" !== r &&
                          ((n.method = "throw"),
                          (n.arg = new TypeError(
                            "The iterator does not provide a '" +
                              r +
                              "' method",
                          )))),
                      b
                    );
                  var i = f(o, e.iterator, n.arg);
                  if ("throw" === i.type)
                    return (
                      (n.method = "throw"),
                      (n.arg = i.arg),
                      (n.delegate = null),
                      b
                    );
                  var a = i.arg;
                  return a
                    ? a.done
                      ? ((n[e.resultName] = a.value),
                        (n.next = e.nextLoc),
                        "return" !== n.method &&
                          ((n.method = "next"), (n.arg = t)),
                        (n.delegate = null),
                        b)
                      : a
                    : ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "iterator result is not an object",
                      )),
                      (n.delegate = null),
                      b);
                }
                function O(t) {
                  var e = { tryLoc: t[0] };
                  1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e);
                }
                function A(t) {
                  var e = t.completion || {};
                  (e.type = "normal"), delete e.arg, (t.completion = e);
                }
                function P(t) {
                  (this.tryEntries = [{ tryLoc: "root" }]),
                    t.forEach(O, this),
                    this.reset(!0);
                }
                function F(e) {
                  if (e || "" === e) {
                    var n = e[a];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                      var o = -1,
                        i = function n() {
                          for (; ++o < e.length; )
                            if (r.call(e, o))
                              return (n.value = e[o]), (n.done = !1), n;
                          return (n.value = t), (n.done = !0), n;
                        };
                      return (i.next = i);
                    }
                  }
                  throw new TypeError(u(e) + " is not iterable");
                }
                return (
                  (x.prototype = w),
                  o(L, "constructor", { value: w, configurable: !0 }),
                  o(w, "constructor", { value: x, configurable: !0 }),
                  (x.displayName = d(w, s, "GeneratorFunction")),
                  (e.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return (
                      !!e &&
                      (e === x ||
                        "GeneratorFunction" === (e.displayName || e.name))
                    );
                  }),
                  (e.mark = function (t) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, w)
                        : ((t.__proto__ = w), d(t, s, "GeneratorFunction")),
                      (t.prototype = Object.create(L)),
                      t
                    );
                  }),
                  (e.awrap = function (t) {
                    return { __await: t };
                  }),
                  _(S.prototype),
                  d(S.prototype, c, function () {
                    return this;
                  }),
                  (e.AsyncIterator = S),
                  (e.async = function (t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new S(p(t, n, r, o), i);
                    return e.isGeneratorFunction(n)
                      ? a
                      : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                        });
                  }),
                  _(L),
                  d(L, s, "Generator"),
                  d(L, a, function () {
                    return this;
                  }),
                  d(L, "toString", function () {
                    return "[object Generator]";
                  }),
                  (e.keys = function (t) {
                    var e = Object(t),
                      n = [];
                    for (var r in e) n.push(r);
                    return (
                      n.reverse(),
                      function t() {
                        for (; n.length; ) {
                          var r = n.pop();
                          if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                      }
                    );
                  }),
                  (e.values = F),
                  (P.prototype = {
                    constructor: P,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = t),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = t),
                        this.tryEntries.forEach(A),
                        !e)
                      )
                        for (var n in this)
                          "t" === n.charAt(0) &&
                            r.call(this, n) &&
                            !isNaN(+n.slice(1)) &&
                            (this[n] = t);
                    },
                    stop: function () {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ("throw" === t.type) throw t.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var n = this;
                      function o(r, o) {
                        return (
                          (c.type = "throw"),
                          (c.arg = e),
                          (n.next = r),
                          o && ((n.method = "next"), (n.arg = t)),
                          !!o
                        );
                      }
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                          c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                          var s = r.call(a, "catchLoc"),
                            u = r.call(a, "finallyLoc");
                          if (s && u) {
                            if (this.prev < a.catchLoc)
                              return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                              return o(a.finallyLoc);
                          } else if (s) {
                            if (this.prev < a.catchLoc)
                              return o(a.catchLoc, !0);
                          } else {
                            if (!u)
                              throw Error(
                                "try statement without catch or finally",
                              );
                            if (this.prev < a.finallyLoc)
                              return o(a.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (t, e) {
                      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (
                          o.tryLoc <= this.prev &&
                          r.call(o, "finallyLoc") &&
                          this.prev < o.finallyLoc
                        ) {
                          var i = o;
                          break;
                        }
                      }
                      i &&
                        ("break" === t || "continue" === t) &&
                        i.tryLoc <= e &&
                        e <= i.finallyLoc &&
                        (i = null);
                      var a = i ? i.completion : {};
                      return (
                        (a.type = t),
                        (a.arg = e),
                        i
                          ? ((this.method = "next"),
                            (this.next = i.finallyLoc),
                            b)
                          : this.complete(a)
                      );
                    },
                    complete: function (t, e) {
                      if ("throw" === t.type) throw t.arg;
                      return (
                        "break" === t.type || "continue" === t.type
                          ? (this.next = t.arg)
                          : "return" === t.type
                            ? ((this.rval = this.arg = t.arg),
                              (this.method = "return"),
                              (this.next = "end"))
                            : "normal" === t.type && e && (this.next = e),
                        b
                      );
                    },
                    finish: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                          return (
                            this.complete(n.completion, n.afterLoc), A(n), b
                          );
                      }
                    },
                    catch: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                          var r = n.completion;
                          if ("throw" === r.type) {
                            var o = r.arg;
                            A(n);
                          }
                          return o;
                        }
                      }
                      throw Error("illegal catch attempt");
                    },
                    delegateYield: function (e, n, r) {
                      return (
                        (this.delegate = {
                          iterator: F(e),
                          resultName: n,
                          nextLoc: r,
                        }),
                        "next" === this.method && (this.arg = t),
                        b
                      );
                    },
                  }),
                  e
                );
              }
              function d(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, h(r.key), r);
                }
              }
              function f(t, e, n) {
                return (
                  e && p(t.prototype, e),
                  n && p(t, n),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  t
                );
              }
              function h(t) {
                var e = v(t, "string");
                return "symbol" == u(e) ? e : e + "";
              }
              function v(t, e) {
                if ("object" != u(t) || !t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(t, e || "default");
                  if ("object" != u(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              }
              function y(t, e, n) {
                return (
                  (e = L(e)),
                  m(
                    t,
                    k()
                      ? Reflect.construct(e, n || [], L(t).constructor)
                      : e.apply(t, n),
                  )
                );
              }
              function m(t, e) {
                if (e && ("object" == u(e) || "function" == typeof e)) return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return b(t);
              }
              function b(t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              }
              function g(t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && N(t, e);
              }
              function x(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (
                  (x = function (t) {
                    if (null === t || !E(t)) return t;
                    if ("function" != typeof t)
                      throw new TypeError(
                        "Super expression must either be null or a function",
                      );
                    if (void 0 !== e) {
                      if (e.has(t)) return e.get(t);
                      e.set(t, n);
                    }
                    function n() {
                      return w(t, arguments, L(this).constructor);
                    }
                    return (
                      (n.prototype = Object.create(t.prototype, {
                        constructor: {
                          value: n,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                      N(n, t)
                    );
                  }),
                  x(t)
                );
              }
              function w(t, e, n) {
                if (k()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && N(o, n.prototype), o;
              }
              function k() {
                try {
                  var t = !Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  );
                } catch (t) {}
                return (k = function () {
                  return !!t;
                })();
              }
              function E(t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              }
              function N(t, e) {
                return (
                  (N = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      }),
                  N(t, e)
                );
              }
              function L(t) {
                return (
                  (L = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                      }),
                  L(t)
                );
              }
              function _(t, e, n, r, o, i, a) {
                try {
                  var c = t[i](a),
                    s = c.value;
                } catch (t) {
                  return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(r, o);
              }
              function S(t) {
                return function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function a(t) {
                      _(i, r, o, a, c, "next", t);
                    }
                    function c(t) {
                      _(i, r, o, a, c, "throw", t);
                    }
                    a(void 0);
                  });
                };
              }
              var o = document.querySelector(".usersList"),
                i = document.querySelector("#loading");
              function T() {
                return j.apply(this, arguments);
              }
              function j() {
                return (j = S(
                  l().mark(function t() {
                    var e, n, a, c;
                    return l().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (0, r.Cs)(i),
                                (t.prev = 1),
                                (t.next = 4),
                                fetch("https://reqres.in/api/users")
                              );
                            case 4:
                              return (e = t.sent), (t.next = 7), (0, r.yy)();
                            case 7:
                              return (t.next = 9), e.json();
                            case 9:
                              (n = t.sent),
                                (a = n.data),
                                (c = a
                                  .map(function (t) {
                                    return (0, r.Fp)(t);
                                  })
                                  .join("")),
                                (o.innerHTML = ""),
                                (o.innerHTML = c),
                                (t.next = 19);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(1)),
                                console.error("Error getting users:", t.t0);
                            case 19:
                              return (t.prev = 19), (0, r.RZ)(i), t.finish(19);
                            case 22:
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 16, 19, 22]],
                    );
                  }),
                )).apply(this, arguments);
              }
              await T();
              var a = (function (t) {
                function e(t, n, r, o, i) {
                  var a;
                  return (
                    d(this, e),
                    ((a = y(this, e)).id = t),
                    (a.title = n),
                    (a.body = r),
                    (a.createdAt = o),
                    (a.archived = i),
                    a.render(),
                    a
                  );
                }
                return (
                  g(e, t),
                  f(e, [
                    {
                      key: "render",
                      value: function () {
                        this.archived
                          ? (this.innerHTML =
                              '\n      <article tabindex="0" class="note-item">\n          <h3 class="note-title">'
                                .concat(
                                  this.title,
                                  '</h3>\n          <div class="note-body">',
                                )
                                .concat(
                                  this.body,
                                  '</div>\n          <small class="note-created">',
                                )
                                .concat(
                                  this.createdAt,
                                  '</small>\n          <button class="unarchive-note">Unarchive</button>\n          <button class="delete-button">Delete</button>\n      </article>\n      ',
                                ))
                          : (this.innerHTML =
                              '\n      <article tabindex="0" class="note-item">\n          <h3 class="note-title">'
                                .concat(
                                  this.title,
                                  '</h3>\n          <div class="note-body">',
                                )
                                .concat(
                                  this.body,
                                  '</div>\n          <small class="note-created">',
                                )
                                .concat(
                                  this.createdAt,
                                  '</small>\n          <button class="archive-note">Archive</button>\n          <button class="delete-button">Delete</button>\n      </article>\n      ',
                                )),
                          this.querySelector(".delete-button").addEventListener(
                            "click",
                            this.deleteNote.bind(this),
                          ),
                          this.archived
                            ? this.querySelector(
                                ".unarchive-note",
                              ).addEventListener(
                                "click",
                                this.unarchiveNote.bind(this),
                              )
                            : this.querySelector(
                                ".archive-note",
                              ).addEventListener(
                                "click",
                                this.archiveNote.bind(this),
                              );
                      },
                    },
                    {
                      key: "deleteNote",
                      value:
                        ((o = S(
                          l().mark(function t() {
                            var e;
                            return l().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        (t.next = 3),
                                        fetch(
                                          "https://notes-api.dicoding.dev/v2/notes/".concat(
                                            this.id,
                                          ),
                                          { method: "DELETE" },
                                        )
                                      );
                                    case 3:
                                      if (!(e = t.sent).ok) {
                                        t.next = 8;
                                        break;
                                      }
                                      this.remove(), (t.next = 13);
                                      break;
                                    case 8:
                                      return (
                                        (t.t0 = alert), (t.next = 11), e.json()
                                      );
                                    case 11:
                                      (t.t1 = t.sent),
                                        t.t0.error.call(
                                          t.t0,
                                          "Failed to delete note:",
                                          t.t1,
                                        );
                                    case 13:
                                      t.next = 18;
                                      break;
                                    case 15:
                                      (t.prev = 15),
                                        (t.t2 = t.catch(0)),
                                        alert.error(
                                          "Error deleting note:",
                                          t.t2,
                                        );
                                    case 18:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [[0, 15]],
                            );
                          }),
                        )),
                        function () {
                          return o.apply(this, arguments);
                        }),
                    },
                    {
                      key: "archiveNote",
                      value:
                        ((r = S(
                          l().mark(function t() {
                            var e;
                            return l().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        (t.next = 3),
                                        fetch(
                                          "https://notes-api.dicoding.dev/v2/notes/".concat(
                                            this.id,
                                            "/archive",
                                          ),
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                          },
                                        )
                                      );
                                    case 3:
                                      (e = t.sent).ok
                                        ? (this.remove(), (this.archived = !0))
                                        : console.error(
                                            "Failed to archive note:",
                                            e.statusText,
                                          ),
                                        (t.next = 10);
                                      break;
                                    case 7:
                                      (t.prev = 7),
                                        (t.t0 = t.catch(0)),
                                        console.error(
                                          "Error archiving note:",
                                          t.t0,
                                        );
                                    case 10:
                                      document
                                        .getElementById("activeNotesList")
                                        .removeNoteById(this.id),
                                        document
                                          .getElementById("archivedNotesList")
                                          .addNoteToList(this),
                                        this.render();
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [[0, 7]],
                            );
                          }),
                        )),
                        function () {
                          return r.apply(this, arguments);
                        }),
                    },
                    {
                      key: "unarchiveNote",
                      value:
                        ((n = S(
                          l().mark(function t() {
                            var e;
                            return l().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        (t.next = 3),
                                        fetch(
                                          "https://notes-api.dicoding.dev/v2/notes/".concat(
                                            this.id,
                                            "/unarchive",
                                          ),
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                          },
                                        )
                                      );
                                    case 3:
                                      (e = t.sent).ok
                                        ? (this.remove(), (this.archived = !1))
                                        : alert.error(
                                            "Failed to unarchive note:",
                                            e.statusText,
                                          ),
                                        (t.next = 10);
                                      break;
                                    case 7:
                                      (t.prev = 7),
                                        (t.t0 = t.catch(0)),
                                        alert.error(
                                          "Error unarchiving note:",
                                          t.t0,
                                        );
                                    case 10:
                                      document
                                        .getElementById("archivedNotesList")
                                        .removeNoteById(this.id),
                                        document
                                          .getElementById("activeNotesList")
                                          .addNoteToList(this),
                                        this.render();
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [[0, 7]],
                            );
                          }),
                        )),
                        function () {
                          return n.apply(this, arguments);
                        }),
                    },
                  ])
                );
                var n, r, o;
              })(x(HTMLElement));
              customElements.define("note-item", a);
              var c = (function (t) {
                function e() {
                  var t;
                  return (
                    d(this, e), ((t = y(this, e)).notes = []), t.fetchNotes(), t
                  );
                }
                return (
                  g(e, t),
                  f(e, [
                    {
                      key: "fetchNotes",
                      value:
                        ((n = S(
                          l().mark(function t() {
                            var e, n, r, o;
                            return l().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        "unarchived" !==
                                        this.getAttribute("data-type")
                                      ) {
                                        t.next = 16;
                                        break;
                                      }
                                      return (
                                        (t.prev = 1),
                                        (t.next = 4),
                                        fetch(
                                          "https://notes-api.dicoding.dev/v2/notes",
                                        )
                                      );
                                    case 4:
                                      return (
                                        (e = t.sent), (t.next = 7), e.json()
                                      );
                                    case 7:
                                      (n = t.sent),
                                        e.ok && this.setNotes(n.data),
                                        (t.next = 14);
                                      break;
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(1)),
                                        alert.error(
                                          "Error fetching notes:",
                                          t.t0,
                                        );
                                    case 14:
                                      t.next = 29;
                                      break;
                                    case 16:
                                      return (
                                        (t.prev = 16),
                                        (t.next = 19),
                                        fetch(
                                          "https://notes-api.dicoding.dev/v2/notes/archived",
                                        )
                                      );
                                    case 19:
                                      return (
                                        (r = t.sent), (t.next = 22), r.json()
                                      );
                                    case 22:
                                      (o = t.sent),
                                        r.ok && this.setNotes(o.data),
                                        (t.next = 29);
                                      break;
                                    case 26:
                                      (t.prev = 26),
                                        (t.t1 = t.catch(16)),
                                        alert.error(
                                          "Error fetching notes:",
                                          t.t1,
                                        );
                                    case 29:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [
                                [1, 11],
                                [16, 26],
                              ],
                            );
                          }),
                        )),
                        function () {
                          return n.apply(this, arguments);
                        }),
                    },
                    {
                      key: "setNotes",
                      value: function (t) {
                        var e = "archived" === this.getAttribute("data-type");
                        (this.notes = t.filter(function (t) {
                          return t.archived === e;
                        })),
                          this.render();
                      },
                    },
                    {
                      key: "addNoteToList",
                      value: function (t) {
                        console.log(t), this.notes.push(t), this.appendChild(t);
                      },
                    },
                    {
                      key: "removeNoteById",
                      value: function (t) {
                        (this.notes = this.notes.filter(function (e) {
                          return e.id !== t;
                        })),
                          this.render();
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = this;
                        (this.innerHTML = ""),
                          this.notes &&
                            this.notes.forEach(function (e) {
                              var n = new a(
                                e.id,
                                e.title,
                                e.body,
                                e.createdAt,
                                e.archived,
                              );
                              t.appendChild(n);
                            });
                      },
                    },
                  ])
                );
                var n;
              })(x(HTMLElement));
              customElements.define("note-list", c);
              var s = (function (t) {
                function e() {
                  var t;
                  return (
                    d(this, e),
                    (t = y(this, e)).attachShadow({ mode: "open" }),
                    (t.shadowRoot.innerHTML =
                      '\n      <section class="input_section">\n        <h2>Tulis Notes</h2>\n        <form id="inputNote">\n          <div class="input">\n            <label for="inputNoteTitle">Judul</label>\n            <input id="inputNoteTitle" type="text" required>\n          </div>\n          <div class="input">\n              <textarea id="inputNoteBody" name="inputNoteBody" placeholder="Tulis isi notes yang ingin dicatat"></textarea>\n            </div>\n          <button id="bodySubmit" type="submit">Tambahkan Note</button>\n        </form>\n      </section>\n      '),
                    t.shadowRoot
                      .querySelector("#inputNote")
                      .addEventListener("submit", t.addNote.bind(t)),
                    t
                  );
                }
                return (
                  g(e, t),
                  f(e, [
                    {
                      key: "addNote",
                      value:
                        ((n = S(
                          l().mark(function t(e) {
                            var n, r, o, i;
                            return l().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        e.preventDefault(),
                                        (n =
                                          this.shadowRoot.querySelector(
                                            "#inputNoteTitle",
                                          ).value),
                                        (r =
                                          this.shadowRoot.querySelector(
                                            "#inputNoteBody",
                                          ).value),
                                        (o = { title: n, body: r }),
                                        (t.prev = 4),
                                        (t.next = 7),
                                        fetch(
                                          "https://notes-api.dicoding.dev/v2/notes",
                                          {
                                            method: "POST",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify(o),
                                          },
                                        )
                                      );
                                    case 7:
                                      if (!(i = t.sent).ok) {
                                        t.next = 15;
                                        break;
                                      }
                                      document
                                        .querySelector("note-list")
                                        .fetchNotes(),
                                        this.shadowRoot
                                          .querySelector("#inputNote")
                                          .reset(),
                                        console.log("Added new note"),
                                        (t.next = 20);
                                      break;
                                    case 15:
                                      return (
                                        (t.t0 = alert), (t.next = 18), i.json()
                                      );
                                    case 18:
                                      (t.t1 = t.sent),
                                        t.t0.error.call(
                                          t.t0,
                                          "Failed to add note:",
                                          t.t1,
                                        );
                                    case 20:
                                      t.next = 25;
                                      break;
                                    case 22:
                                      (t.prev = 22),
                                        (t.t2 = t.catch(4)),
                                        alert.error("Error adding note:", t.t2);
                                    case 25:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [[4, 22]],
                            );
                          }),
                        )),
                        function (t) {
                          return n.apply(this, arguments);
                        }),
                    },
                  ])
                );
                var n;
              })(x(HTMLElement));
              customElements.define("note-input", s),
                document.addEventListener("DOMContentLoaded", function () {
                  var t = document.getElementById("activeNotesList"),
                    e = document.getElementById("archivedNotesList");
                  t.fetchNotes(), e.fetchNotes();
                }),
                e();
            } catch (O) {
              e(O);
            }
          },
          1,
        );
      },
      618: (t, e, n) => {
        function r(t) {
          var e = t.id,
            n = t.email,
            r = t.first_name,
            o = t.last_name;
          return '\n      <article data-userid="'
            .concat(e, '">\n        <h3>')
            .concat(r, " ")
            .concat(o, "</h3>\n        <div>")
            .concat(n, "</div>\n      </article>\n    ");
        }
        function o(t) {
          t.style.display = "block";
        }
        function i(t) {
          t.style.display = "none";
        }
        function a() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return new Promise(function (e) {
            return setTimeout(function () {
              e(t);
            }, 3e3);
          });
        }
        n.d(e, { Cs: () => o, Fp: () => r, RZ: () => i, yy: () => a });
      },
      365: (t, e, n) => {
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          "/* General Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f5f5f5;\n  color: #333;\n}\n\n.wrapper {\n  padding: 32px 24px;\n}\n\n.container {\n  display: grid; \n  gap: 40px 20px;\n}\n\n.title-section {\n  margin: 16px 0 24px;\n  text-align: center;\n  font-size: 2rem;\n  color: #694F8E;\n}\n\n/* Header */\nheader {\n  position: sticky;\n  top: 0;\n  background-color: #B692C2;\n  color: beige;\n  padding: 16px 0;\n}\n\nheader .wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.brand-name {\n  font-size: 2rem;\n  text-decoration: none;\n  color: #FFDFD6;\n}\n\n/* Note list */\n.note-list {\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px 32px;\n}\n\n/* Note item */\n.note-item {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 16px;\n  background-color: #fff;\n  transition: transform 150ms ease-in, box-shadow 150ms ease-in;\n}\n\n.note-item:hover,\n.note-item:focus-visible {\n  transform: scale(1.05);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.note-item .note__description {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 1rem;\n}\n\n.note-item .note__example {\n  text-align: center;\n}\n\n.note-item .note__example-img {\n  width: 75%;\n  margin-bottom: 1rem;\n  border-radius: 4px;\n}\n\n/* Archive specific styles */\n.note-item.archive-note {\n  background-color: #F0E68C;\n  border: 1px solid #DAA520;\n}\n\n.note-item.archive-note:hover,\n.note-item.archive-note:focus-visible {\n  transform: scale(1.05);\n  box-shadow: 0 2px 4px rgba(218, 165, 32, 0.2);\n}\n\n.archive-note-button {\n  background-color: #8B0000;\n  color: #fff;\n}\n\n.unarchive-note-button {\n  background-color: #32CD32;\n  color: #fff;\n}\n\n/* Footer */\nfooter {\n  background-color: #B692C2;\n  color: #FFDFD6;\n  padding: 16px 0;\n  text-align: center;\n}\n\n/* Note Input */\nnote-input {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n\nnote-input > .input_section > h2 {\n  color: #DA7297;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  font-size: 28px;\n}\n\n#bodySubmit {\n  background-color: #B1AFFF;\n  border-radius: 0.3rem;\n  padding: 0.7rem 1.3rem;\n  border: 1px solid #333;\n  color: #AF47D2;\n}\n\n#inputNote {\n  margin-top: 8px 0;\n  border-spacing: 0.5em;\n}\n\n#inputNoteBody {\n  resize: vertical;\n  width: 300px;\n  height: 100px;\n}\n\n\n#loading {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 35px;\n  font-weight: bold;\n  color: #9c2525;\n  background-color: #f9f9f9;\n  padding: 10px 0;\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n/* Responsive Design */\n@media (max-width: 1200px) {\n  .note-list {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n}\n",
          "",
        ]);
        const c = a;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      788: (t, e, n) => {
        var r = n(72),
          o = n.n(r),
          i = n(825),
          a = n.n(i),
          c = n(659),
          s = n.n(c),
          u = n(56),
          l = n.n(u),
          d = n(540),
          p = n.n(d),
          f = n(113),
          h = n.n(f),
          v = n(365),
          y = {};
        (y.styleTagTransform = h()),
          (y.setAttributes = l()),
          (y.insert = s().bind(null, "head")),
          (y.domAPI = a()),
          (y.insertStyleElement = p()),
          o()(v.A, y),
          v.A && v.A.locals && v.A.locals;
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var s = t[c],
              u = r.base ? s[0] + r.base : s[0],
              l = i[u] || 0,
              d = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var p = n(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var h = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: d, updater: h, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var s = r(t, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = s;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    i = {};
  function a(t) {
    var e = i[t];
    if (void 0 !== e) return e.exports;
    var n = (i[t] = { id: t, exports: {} });
    return o[t](n, n.exports, a), n.exports;
  }
  (t =
    "function" == typeof Symbol
      ? Symbol("webpack queues")
      : "__webpack_queues__"),
    (e =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (n =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (r = (t) => {
      t &&
        t.d < 1 &&
        ((t.d = 1),
        t.forEach((t) => t.r--),
        t.forEach((t) => (t.r-- ? t.r++ : t())));
    }),
    (a.a = (o, i, a) => {
      var c;
      a && ((c = []).d = -1);
      var s,
        u,
        l,
        d = new Set(),
        p = o.exports,
        f = new Promise((t, e) => {
          (l = e), (u = t);
        });
      (f[e] = p),
        (f[t] = (t) => (c && t(c), d.forEach(t), f.catch((t) => {}))),
        (o.exports = f),
        i(
          (o) => {
            var i;
            s = ((o) =>
              o.map((o) => {
                if (null !== o && "object" == typeof o) {
                  if (o[t]) return o;
                  if (o.then) {
                    var i = [];
                    (i.d = 0),
                      o.then(
                        (t) => {
                          (a[e] = t), r(i);
                        },
                        (t) => {
                          (a[n] = t), r(i);
                        },
                      );
                    var a = {};
                    return (a[t] = (t) => t(i)), a;
                  }
                }
                var c = {};
                return (c[t] = (t) => {}), (c[e] = o), c;
              }))(o);
            var a = () =>
                s.map((t) => {
                  if (t[n]) throw t[n];
                  return t[e];
                }),
              u = new Promise((e) => {
                (i = () => e(a)).r = 0;
                var n = (t) =>
                  t !== c &&
                  !d.has(t) &&
                  (d.add(t), t && !t.d && (i.r++, t.push(i)));
                s.map((e) => e[t](n));
              });
            return i.r ? u : a();
          },
          (t) => (t ? l((f[n] = t)) : u(p), r(c)),
        ),
        c && c.d < 0 && (c.d = 0);
    }),
    (a.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return a.d(e, { a: e }), e;
    }),
    (a.d = (t, e) => {
      for (var n in e)
        a.o(e, n) &&
          !a.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (a.nc = void 0),
    a(573);
})();
