// Create user item
export function createNoteItemElement(user) {
  const { id, title, body, createdAt, archived } = user;

  return `
      <article tabindex="0" class="note-item">
          <h3 class="note-title">${this.title}</h3>
          <div class="note-body">${this.body}</div>
          <small class="note-created">${this.createdAt}</small>
          <button class="unarchive-note">Unarchive</button>
          <button class="delete-button">Delete</button>
      </article>
    `;
}

export function showLoading(element) {
  element.style.display = "block";
}

export function hideLoading(element) {
  element.style.display = "none";
}
// Hanya simulasi saja!
// Ini hanya digunakan untuk menambah waktu penyelesaian dari proses asynchronous.
export function sleep(response = null) {
  // Proses async ini seharusnya tidak memiliki kemungkinan gagal.
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(response);
    }, 3000),
  );
}
