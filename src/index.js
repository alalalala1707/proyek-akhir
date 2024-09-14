// Import notesData from "./data.js";
import { easings } from "animejs";
import {
  createNoteItemElement,
  showLoading,
  hideLoading,
  sleep,
} from "./utils.js";
import anime from "animejs/lib/anime.es.js";

// Get elements
const noteListElement = document.querySelector(".note-item");
const loading = document.querySelector("#loading");

async function getData() {
  // Show loading animation
  anime({
    targets: loading,
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutQuad",
  });
  showLoading(loading);

  try {
    const response = await fetch("https://notes-api.dicoding.dev/v2");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Simulate delay
    await sleep();

    const data = await response.json();
    const users = data.data;

    const listOfNoteItemHtmlString = users
      .map((user) => {
        return createNoteItemElement(user);
      })
      .join("");

    noteListElement.innerHTML = "";

    // Render all users
    noteListElement.innerHTML = listOfNoteItemHtmlString;

    // Animate notes appearance
    anime({
      targets: ".note-item",
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: "easeOutExpo",
      delay: anime.stagger(100),
    });
  } catch (error) {
    console.error("Error getting notes:", error);
  } finally {
    // Hide loading animation
    anime({
      targets: loading,
      opacity: [1, 0],
      duration: 500,
      easing: "easeInOutQuad",
      complete: () => hideLoading(loading),
    });
  }
}

await getData();

class Note extends HTMLElement {
  constructor(id, title, body, createdAt, archived) {
    super();
    this.id = id;
    this.title = title;
    this.body = body;
    this.createdAt = createdAt;
    this.archived = archived;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article tabindex="0" class="note-item">
        <h3 class="note-title">${this.title}</h3>
        <div class="note-body">${this.body}</div>
        <small class="note-created">${this.createdAt}</small>
        <button class="${this.archived ? 'unarchive-note' : 'archive-note'}">
          ${this.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button class="delete-button">Delete</button>
    </article>
    `;

    // Animate note element appearance
    anime({
      targets: this,
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 800,
      easing: "easeOutExpo",
    });

    this.querySelector(".delete-button").addEventListener(
      "click",
      this.deleteNote.bind(this),
    );
    if (this.archived) {
      this.querySelector(".unarchive-note").addEventListener(
        "click",
        this.unarchiveNote.bind(this),
      );
    } else {
      this.querySelector(".archive-note").addEventListener(
        "click",
        this.archiveNote.bind(this),
      );
    }
  }

  async deleteNote() {
    try {
      const response = await fetch(
        `https://notes-api.dicoding.dev/v2/notes/${this.id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        // Animate note removal
        anime({
          targets: this,
          opacity: [1, 0],
          translateX: [0, -50],
          duration: 500,
          easing: "easeInOutQuad",
          complete: () => this.remove(),
        });
      } else {
        alert("Failed to delete note:", await response.json());
      }
    } catch (error) {
      if (confirm("Error deleting note: " + error) == true) {
        this.deleteNote();
      }
    }
  }

async archiveNote() {
  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${this.id}/archive`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
    );

    if (response.ok) {
      anime({
        targets: this,
        opacity: [1, 0],
        translateX: [0, 50],
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          this.remove(); // Remove the note from the active list
          this.archived = true;
          const noteListEl = document.getElementById("activeNotesList");
          noteListEl.removeNoteById(this.id);
          document.getElementById("archivedNotesList").addNoteToList(this);
          document.getElementById("archivedNotesList").render(); // Render the archived list
        },
      });
    } else {
      console.error("Failed to archive note:", response.statusText);
    }
  } catch (error) {
    console.error("Error archiving note:", error);
  }
}

async unarchiveNote() {
  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${this.id}/unarchive`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
    );

    if (response.ok) {
      anime({
        targets: this,
        opacity: [1, 0],
        translateX: [0, -50],
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          this.remove(); // Remove the note from the archived list
          this.archived = false;
          const noteListEl = document.getElementById("archivedNotesList");
          noteListEl.removeNoteById(this.id);
          document.getElementById("activeNotesList").addNoteToList(this);
          document.getElementById("activeNotesList").render();
        },
      });
    } else {
      console.error("Failed to unarchive note:", response.statusText);
    }
  } catch (error) {
    console.error("Error unarchiving note:", error);
  }
}
}

customElements.define("note-item", Note);

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.notes = [];
    this.fetchNotes();
  }

  async fetchNotes() {
    if (this.getAttribute("data-type") === "unarchived") {
      try {
        const response = await fetch("https://notes-api.dicoding.dev/v2/notes");
        const data = await response.json();
        if (response.ok) {
          this.setNotes(data.data);
        }
      } catch (error) {
        alert("Error fetching notes:", error);
      }
    } else {
      try {
        const response = await fetch(
          "https://notes-api.dicoding.dev/v2/notes/archived",
        );
        const data = await response.json();
        if (response.ok) {
          this.setNotes(data.data);
        }
      } catch (error) {
        alert("Error fetching notes:", error);
      }
    }
  }

  setNotes(notesData) {
    const isArchived = this.getAttribute("data-type") === "archived";
    this.notes = notesData.filter((note) => note.archived === isArchived);
    this.render();
  }

  addNoteToList(noteElement) {
    this.notes.push(noteElement);
    this.appendChild(noteElement);
  }

  removeNoteById(noteId) {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    this.render();
  }

  render() {
    this.innerHTML = "";
    if (this.notes) {
      this.notes.forEach((noteData) => {
        const noteElement = new Note(
          noteData.id,
          noteData.title,
          noteData.body,
          noteData.createdAt,
          noteData.archived,
        );
        this.appendChild(noteElement);
      });
    }
  }
}

customElements.define("note-list", NoteList);

class NoteInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <section class="input_section">
        <h2>Tulis Notes</h2>
        <form id="inputNote">
          <div class="input">
            <label for="inputNoteTitle">Judul</label>
            <input id="inputNoteTitle" type="text" required>
          </div>
          <div class="input">
            <textarea id="inputNoteBody" name="inputNoteBody" placeholder="Tulis isi notes yang ingin dicatat"></textarea>
          </div>
          <button id="bodySubmit" type="submit">Tambahkan Note</button>
        </form>
      </section>
      `;
    this.shadowRoot
      .querySelector("#inputNote")
      .addEventListener("submit", this.addNote.bind(this));
  }

  async addNote(event) {
    event.preventDefault();
    const title = this.shadowRoot.querySelector("#inputNoteTitle").value;
    const body = this.shadowRoot.querySelector("#inputNoteBody").value;

    const noteObject = {
      title: title,
      body: body,
    };

    try {
      const response = await fetch("https://notes-api.dicoding.dev/v2/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteObject),
      });

      if (response.ok) {
        const noteListEl = document.querySelector("note-list");
        noteListEl.fetchNotes(); // Refresh the notes list
        this.shadowRoot.querySelector("#inputNote").reset();
        console.log("Added new note");
      } else {
        alert("Failed to add note:", await response.json());
      }
    } catch (error) {
      // alert('Error adding note:', error);
      if (confirm("Error adding note:" + error) == true) {
        this.addNote(event);
      }
    }
  }
}

customElements.define("note-input", NoteInput);

document.addEventListener("DOMContentLoaded", function () {
  const activeNotesEl = document.getElementById("activeNotesList");
  const archivedNotesEl = document.getElementById("archivedNotesList");

  activeNotesEl.fetchNotes();
  archivedNotesEl.fetchNotes();
});
