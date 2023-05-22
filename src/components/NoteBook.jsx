import { useState } from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

function NoteBook() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} setNotes={setNotes} />
      <NoteForm notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default NoteBook;
