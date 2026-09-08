/*function NoteItem({
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

*/


/*function NoteItem({ habit, delHabit, toggHabit }) {

  return (

    <div>

      <p
        onClick={() => toggHabit(habit.id)}
      >
        {habit.completed ? "✓" : "○"}

        {habit.text}
      </p>


      <button
        onClick={() => delHabit(habit.id)}
      >
        Delete
      </button>

    </div>

  );

}

export default NoteItem;*/

function NoteItem({

note,
toggleNote,
deleteNote,
startEdit,
editingId,
editText,
setEditText,
saveEdit,
updateNote,
lists,
tags

}){

function toggleTag(tag){

const currentTags=note.tags||[]

if(currentTags.includes(tag)){

updateNote(note.id,{

tags:currentTags.filter((noteTag)=>

noteTag!==tag

)

})

}else{

updateNote(note.id,{

tags:[

...currentTags,

tag

]

})

}

}

return(

<div
className={`sticky-note ${note.color||"yellow"} ${note.completed?"completed":""}`}
>
{editingId===note.id?(

<div className="edit-note">

<textarea
value={editText}
onChange={(e)=>setEditText(e.target.value)}
/>


<button
className="save-note"
onClick={()=>saveEdit(note.id)}
>
Save
</button>


</div>

):(

<>

{note.title&&(

<h3 className="sticky-title">
{note.title}

</h3>

)}

<p
className="sticky-text"
onClick={()=>toggleNote(note.id)}
>

{note.text}

</p>



<div className="note-dates">


{note.startDate&&(

<small>

Start: {note.startDate}

</small>

)}



{note.endDate&&(

<small>

Due: {note.endDate}

</small>

)}


</div>


<select

className="note-list-select"
value={note.list||"Personal"}
onChange={(e)=>updateNote(note.id,{
list:e.target.value

})}

>
{lists.map((list)=>(

<option
key={list}
value={list}
>
{list}
</option>

))}


</select>



<div className="note-tags">


{tags.map((tag)=>(

<button
key={tag}
className={(note.tags||[]).includes(tag)
?"note-tag active-tag"
:"note-tag"
}

onClick={()=>toggleTag(tag)}

>

{tag}

</button>

))}


</div>



<div className="note-footer">


<button
className="check-button"
onClick={()=>toggleNote(note.id)}
>
{note.completed?"✓":"○"}

</button>


<div className="note-buttons">

<button
onClick={()=>startEdit(note)}
>
✎
</button>


<button
onClick={()=>deleteNote(note.id)}
>
×

</button>


</div>

</div>

</>

)}

</div>

)
}


export default NoteItem;
