import React, { useState } from "react";
import { saveNote } from "../storage/storage";
import toast from "react-hot-toast";

const AddNotes = ({ onNoteAdded }) => {
  const [myNote, setMyNote] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyNote({ ...myNote, [name]: value });
  };
  //why i choose useState and this submit handler
  const handleSubmit = (e) => {
    try {
      saveNote(myNote);
      onNoteAdded(); // Refresh list after submit
      setMyNote({ title: "", content: "" }); //cleaning my input boxes
      toast.success("Note is created successfully!");
    } catch (err) {
      setError(err.message);
      toast.error("something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 border border-gray-400 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Note</h2>

      <div className="mb-6">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter note title"
          value={myNote.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition duration-200"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="content"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Write your note here..."
          value={myNote.content}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition duration-200"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
      >
        {loading ? "Saving..." : "Save Note"}
      </button>
    </form>
  );
};

export default AddNotes;
