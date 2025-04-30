const MY_SECRET_KEY = "my-notes"; //this is my storage key

export function getNotes() {
  try {
    const notes = JSON.parse(localStorage.getItem(MY_SECRET_KEY)) || [];
    return notes;
  } catch (error) {
    throw new Error("Failed to load notes from localStorage.");
  }
}

export function saveNote(note) {
  try {
    const existingNotes = getNotes();
    const updatedNotes = [...existingNotes, note]; //adding new notes
    localStorage.setItem(MY_SECRET_KEY, JSON.stringify(updatedNotes));
  } catch (error) {
    throw new Error("Failed to save note to localStorage.");
  }
}
