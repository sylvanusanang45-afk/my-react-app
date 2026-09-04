import { useState } from "react";

function NoteForm({ task, setTask, addNote }) {

const [showForm, setShowForm] = useState(false);


function handleAdd() {

addNote();
setShowForm(false);
}


return (
<div

className={`add-note-card ${showForm ? "open" : ""}`}
onClick={() => !showForm && setShowForm(true)}
>

{!showForm ? (
<div className="big-plus">
+
</div>

) : (

<div className="add-note-form">


<input

type="text"
value={task}
placeholder="Write a note..."
autoFocus
onClick={(e) => e.stopPropagation()}
onChange={(e) => setTask(e.target.value)}
onKeyDown={(e) => {

if (e.key === "Enter") {

handleAdd();
}

}}

/>


<div className="form-buttons">


<button

onClick={(e) => {
e.stopPropagation();
handleAdd();

}}

>
Add
</button>


<button
className="cancel"
onClick={(e) => {
e.stopPropagation();
setShowForm(false);

}}
>
Cancel
</button>


</div>
</div>

)}
</div>

);


}


export default NoteForm;