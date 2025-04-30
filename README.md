# Setup and Run

# Clone the repository
git clone https://github.com/your-username/custom-note-service.git

** Navigate into the project directory**
cd custom-note-service

 **Install dependencies**
npm install

 **Start the development server**
npm run dev

 # **Why? — Design Decisions**
 
 🗂️ **Storage Strategy**
 
 # Why localStorage + key naming:
Chose localStorage to persist notes on the client-side without requiring a backend. The key "key_notes" avoids conflicts with other localStorage data and keeps it scoped to this app.

# 🧩 Component Structure
App.jsx: Acts as the main navigation controller using useState to switch views between AddNotes and NotesList.

// Why this nav approach for simplicity: Avoids routing complexity by toggling views with simple buttons and state.

// Why I chose useState + this submit handler: useState ensures controlled components and real-time input tracking. On submit, the note is saved and the form resets, while the app view changes to show the updated list.

NotesList.jsx: Renders notes stored in localStorage and displays them in a card layout.
// Why useEffect to sync storage → state: useEffect loads notes from localStorage only once on component mount, ensuring a fresh UI without re-fetching unnecessarily.

storage.js: Encapsulates logic for saving and retrieving notes from localStorage. This separation of concerns keeps components clean.
