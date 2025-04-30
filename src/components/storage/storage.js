const MY_SECRET_KEY = "my-notes"; //this is my storage key

export function saveNote(note) {
  const notes = getNotes();
  const newNotes = [...notes, note]; //adding new notes
  localStorage.setItem(MY_SECRET_KEY, JSON.stringify(newNotes));
}

export function getNotes() {
  const notes = localStorage.getItem(MY_SECRET_KEY);
  return notes ? JSON.parse(notes) : [];
}
