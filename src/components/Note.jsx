import React from "react";
import notes from "../notes";

function Note() {
  return (
    <div>
      {notes.map(function(note) {
        return(
          <div class="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Note;