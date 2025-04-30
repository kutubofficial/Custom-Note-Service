import React, { useEffect, useState } from "react";
import { getNotes } from "../storage/storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  //why useEffect to sync storage
  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-9 px-5 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Notes</h2>

      {notes.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4"></div>
          <p className="text-gray-400 text-lg">
            No notes yet. Create your first note!
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notes?.map((note, index) => (
            <div
              key={index}
              className="border border-gray-100 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg "
            >
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-800 line-clamp-1">
                  {note?.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{note?.content}</p>
                <div className="mt-5 flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
