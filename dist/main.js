(() => {
  "use strict";
  var t,
    e,
    o,
    n,
    i = {
      44: (t, e, o) => {
        o.a(
          t,
          async (t, e) => {
            try {
              var n = o(413);
              const i = document.querySelector(".usersList"),
                s = document.querySelector("#loading");
              async function r() {
                (0, n.Cs)(s);
                try {
                  const t = await fetch("https://reqres.in/api/users");
                  await (0, n.yy)();
                  const e = (await t.json()).data
                    .map((t) => (0, n.Fp)(t))
                    .join("");
                  (i.innerHTML = ""), (i.innerHTML = e);
                } catch (t) {
                  console.error("Error getting users:", t);
                } finally {
                  (0, n.RZ)(s);
                }
              }
              await r();
              class a extends HTMLElement {
                constructor(t, e, o, n, i) {
                  super(),
                    (this.id = t),
                    (this.title = e),
                    (this.body = o),
                    (this.createdAt = n),
                    (this.archived = i),
                    this.render();
                }
                render() {
                  this.archived
                    ? (this.innerHTML = `\n      <article tabindex="0" class="note-item">\n          <h3 class="note-title">${this.title}</h3>\n          <div class="note-body">${this.body}</div>\n          <small class="note-created">${this.createdAt}</small>\n          <button class="unarchive-note">Unarchive</button>\n          <button class="delete-button">Delete</button>\n      </article>\n      `)
                    : (this.innerHTML = `\n      <article tabindex="0" class="note-item">\n          <h3 class="note-title">${this.title}</h3>\n          <div class="note-body">${this.body}</div>\n          <small class="note-created">${this.createdAt}</small>\n          <button class="archive-note">Archive</button>\n          <button class="delete-button">Delete</button>\n      </article>\n      `),
                    this.querySelector(".delete-button").addEventListener(
                      "click",
                      this.deleteNote.bind(this),
                    ),
                    this.archived
                      ? this.querySelector(".unarchive-note").addEventListener(
                          "click",
                          this.unarchiveNote.bind(this),
                        )
                      : this.querySelector(".archive-note").addEventListener(
                          "click",
                          this.archiveNote.bind(this),
                        );
                }
                async deleteNote() {
                  try {
                    const t = await fetch(
                      `https://notes-api.dicoding.dev/v2/notes/${this.id}`,
                      { method: "DELETE" },
                    );
                    t.ok
                      ? this.remove()
                      : alert.error("Failed to delete note:", await t.json());
                  } catch (t) {
                    alert.error("Error deleting note:", t);
                  }
                }
                async archiveNote() {
                  try {
                    const t = await fetch(
                      `https://notes-api.dicoding.dev/v2/notes/${this.id}/archive`,
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                      },
                    );
                    t.ok
                      ? (this.remove(), (this.archived = !0))
                      : console.error("Failed to archive note:", t.statusText);
                  } catch (t) {
                    console.error("Error archiving note:", t);
                  }
                  document
                    .getElementById("activeNotesList")
                    .removeNoteById(this.id),
                    document
                      .getElementById("archivedNotesList")
                      .addNoteToList(this),
                    this.render();
                }
                async unarchiveNote() {
                  try {
                    const t = await fetch(
                      `https://notes-api.dicoding.dev/v2/notes/${this.id}/unarchive`,
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                      },
                    );
                    t.ok
                      ? (this.remove(), (this.archived = !1))
                      : alert.error("Failed to unarchive note:", t.statusText);
                  } catch (t) {
                    alert.error("Error unarchiving note:", t);
                  }
                  document
                    .getElementById("archivedNotesList")
                    .removeNoteById(this.id),
                    document
                      .getElementById("activeNotesList")
                      .addNoteToList(this),
                    this.render();
                }
              }
              customElements.define("note-item", a);
              class c extends HTMLElement {
                constructor() {
                  super(), (this.notes = []), this.fetchNotes();
                }
                async fetchNotes() {
                  if ("unarchived" === this.getAttribute("data-type"))
                    try {
                      const t = await fetch(
                          "https://notes-api.dicoding.dev/v2/notes",
                        ),
                        e = await t.json();
                      t.ok && this.setNotes(e.data);
                    } catch (t) {
                      alert.error("Error fetching notes:", t);
                    }
                  else
                    try {
                      const t = await fetch(
                          "https://notes-api.dicoding.dev/v2/notes/archived",
                        ),
                        e = await t.json();
                      t.ok && this.setNotes(e.data);
                    } catch (t) {
                      alert.error("Error fetching notes:", t);
                    }
                }
                setNotes(t) {
                  const e = "archived" === this.getAttribute("data-type");
                  (this.notes = t.filter((t) => t.archived === e)),
                    this.render();
                }
                addNoteToList(t) {
                  console.log(t), this.notes.push(t), this.appendChild(t);
                }
                removeNoteById(t) {
                  (this.notes = this.notes.filter((e) => e.id !== t)),
                    this.render();
                }
                render() {
                  (this.innerHTML = ""),
                    this.notes &&
                      this.notes.forEach((t) => {
                        const e = new a(
                          t.id,
                          t.title,
                          t.body,
                          t.createdAt,
                          t.archived,
                        );
                        this.appendChild(e);
                      });
                }
              }
              customElements.define("note-list", c);
              class d extends HTMLElement {
                constructor() {
                  super(),
                    this.attachShadow({ mode: "open" }),
                    (this.shadowRoot.innerHTML =
                      '\n      <section class="input_section">\n        <h2>Tulis Notes</h2>\n        <form id="inputNote">\n          <div class="input">\n            <label for="inputNoteTitle">Judul</label>\n            <input id="inputNoteTitle" type="text" required>\n          </div>\n          <div class="input">\n              <textarea id="inputNoteBody" name="inputNoteBody" placeholder="Tulis isi notes yang ingin dicatat"></textarea>\n            </div>\n          <button id="bodySubmit" type="submit">Tambahkan Note</button>\n        </form>\n      </section>\n      '),
                    this.shadowRoot
                      .querySelector("#inputNote")
                      .addEventListener("submit", this.addNote.bind(this));
                }
                async addNote(t) {
                  t.preventDefault();
                  const e = {
                    title:
                      this.shadowRoot.querySelector("#inputNoteTitle").value,
                    body: this.shadowRoot.querySelector("#inputNoteBody").value,
                  };
                  try {
                    const t = await fetch(
                      "https://notes-api.dicoding.dev/v2/notes",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(e),
                      },
                    );
                    t.ok
                      ? (document.querySelector("note-list").fetchNotes(),
                        this.shadowRoot.querySelector("#inputNote").reset(),
                        console.log("Added new note"))
                      : alert.error("Failed to add note:", await t.json());
                  } catch (t) {
                    alert.error("Error adding note:", t);
                  }
                }
              }
              customElements.define("note-input", d),
                document.addEventListener("DOMContentLoaded", function () {
                  const t = document.getElementById("activeNotesList"),
                    e = document.getElementById("archivedNotesList");
                  t.fetchNotes(), e.fetchNotes();
                }),
                e();
            } catch (h) {
              e(h);
            }
          },
          1,
        );
      },
      413: (t, e, o) => {
        function n(t) {
          const { id: e, email: o, first_name: n, last_name: i } = t;
          return `\n      <article data-userid="${e}">\n        <h3>${n} ${i}</h3>\n        <div>${o}</div>\n      </article>\n    `;
        }
        function i(t) {
          t.style.display = "block";
        }
        function s(t) {
          t.style.display = "none";
        }
        function r(t = null) {
          return new Promise((e) =>
            setTimeout(() => {
              e(t);
            }, 3e3),
          );
        }
        o.d(e, { Cs: () => i, Fp: () => n, RZ: () => s, yy: () => r });
      },
    },
    s = {};
  function r(t) {
    var e = s[t];
    if (void 0 !== e) return e.exports;
    var o = (s[t] = { exports: {} });
    return i[t](o, o.exports, r), o.exports;
  }
  (t =
    "function" == typeof Symbol
      ? Symbol("webpack queues")
      : "__webpack_queues__"),
    (e =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (o =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (n = (t) => {
      t &&
        t.d < 1 &&
        ((t.d = 1),
        t.forEach((t) => t.r--),
        t.forEach((t) => (t.r-- ? t.r++ : t())));
    }),
    (r.a = (i, s, r) => {
      var a;
      r && ((a = []).d = -1);
      var c,
        d,
        h,
        l = new Set(),
        u = i.exports,
        p = new Promise((t, e) => {
          (h = e), (d = t);
        });
      (p[e] = u),
        (p[t] = (t) => (a && t(a), l.forEach(t), p.catch((t) => {}))),
        (i.exports = p),
        s(
          (i) => {
            var s;
            c = ((i) =>
              i.map((i) => {
                if (null !== i && "object" == typeof i) {
                  if (i[t]) return i;
                  if (i.then) {
                    var s = [];
                    (s.d = 0),
                      i.then(
                        (t) => {
                          (r[e] = t), n(s);
                        },
                        (t) => {
                          (r[o] = t), n(s);
                        },
                      );
                    var r = {};
                    return (r[t] = (t) => t(s)), r;
                  }
                }
                var a = {};
                return (a[t] = (t) => {}), (a[e] = i), a;
              }))(i);
            var r = () =>
                c.map((t) => {
                  if (t[o]) throw t[o];
                  return t[e];
                }),
              d = new Promise((e) => {
                (s = () => e(r)).r = 0;
                var o = (t) =>
                  t !== a &&
                  !l.has(t) &&
                  (l.add(t), t && !t.d && (s.r++, t.push(s)));
                c.map((e) => e[t](o));
              });
            return s.r ? d : r();
          },
          (t) => (t ? h((p[o] = t)) : d(u), n(a)),
        ),
        a && a.d < 0 && (a.d = 0);
    }),
    (r.d = (t, e) => {
      for (var o in e)
        r.o(e, o) &&
          !r.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    r(44);
})();
