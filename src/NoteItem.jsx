function NoteItem({
note,
toggleNote,
deleteNote,
startEdit,
editingId,
editText,
setEditText,
saveEdit
}) {

return (
<div className={`sticky-note ${note.color || "yellow"} ${note.completed ? "completed" : ""}`}>


{editingId === note.id ? (

<div className="edit-note">


<textarea

value={editText}

onChange={(e) => setEditText(e.target.value)}

/>


<button
className="save-note"
onClick={() => saveEdit(note.id)}
>
Save</button>

</div>
) : (

<>


<p
className="sticky-text"
onClick={() => toggleNote(note.id)}
>

{note.text}

</p>


<div className="note-footer">

<button
className="check-button"
onClick={() => toggleNote(note.id)}
>
{note.completed ? "✓" : "○"}
</button>


<div className="note-buttons">

<button
onClick={() => startEdit(note)}
>
✎
</button>


<button
onClick={() => deleteNote(note.id)}
>
×
</button>

</div>

</div>


</>

)}


</div>

);


}


export default NoteItem;