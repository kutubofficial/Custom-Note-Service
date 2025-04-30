import React, { useState } from "react";
import AddNotes from "./components/notes/AddNotes";
import NotesList from "./components/notes/NotesList";
import { Toaster } from "react-hot-toast";

function App() {
  const [view, setView] = useState("add");
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => {
    setRefresh(!refresh);
    setView("view");
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      {/* Why this nav approach for simplicity. */}
      <div className="flex justify-center space-x-9 mb-8">
        <button
          onClick={() => setView("add")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 cursor-pointer"
        >
          Add Note
        </button>
        <button
          onClick={() => setView("view")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 cursor-pointer"
        >
          View Notes
        </button>
      </div>
      {view === "add" ? (
        <AddNotes onNoteAdded={handleNoteAdded} />
      ) : (
        <NotesList key={refresh} />
      )}
      <Toaster />
    </div>
  );
}

export default App;
