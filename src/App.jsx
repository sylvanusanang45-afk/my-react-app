import { useEffect, useState } from "react";

import NoteForm from "./NoteForm";
import SearchBar from "./searchbar";
import FilterButtons from "./FilterButtons";
import NoteItem from "./NoteItem";

function App() {

const [notes, setNotes] = useState(() => {
return JSON.parse(localStorage.getItem("notes")) || [];
});

const [task, setTask] = useState("");
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("all");

const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState("");


useEffect(() => {

localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);


function addNote() {
if (!task.trim()) return;

const colors = ["yellow", "blue", "pink", "orange"]
const newNote = {
id: Date.now(),
text: task,
completed: false,
color: colors[notes.length % colors.length]
};

setNotes([...notes, newNote]);
setTask("");

}


function deleteNote(id) {
setNotes(notes.filter((note) => note.id !== id));
}


function toggleNote(id) {
setNotes(notes.map((note) =>note.id === id

? { ...note, completed: !note.completed }
: note

));

}


function startEdit(note) {
setEditingId(note.id);
setEditText(note.text);
}


function saveEdit(id) {
if (!editText.trim()) return;

setNotes(notes.map((note) =>note.id === id

? { ...note, text: editText }
: note

));

setEditingId(null);

setEditText("");

}


const filteredNotes = notes.filter((note) => {

const matchesSearch = note.text
.toLowerCase()
.includes(search.toLowerCase());


if (filter === "active") {
return matchesSearch && !note.completed;
}


if (filter === "completed") {
return matchesSearch && note.completed;
}

return matchesSearch;

});


const totalNotes = notes.length;

const completedNotes = notes.filter(
(note) => note.completed
).length;


const activeNotes = notes.filter(
(note) => !note.completed
).length;


return (

<div className="app">




<aside className="sidebar">

<div className="sidebar-top">
<div className="menu-header">

<h2>Menu</h2>

<span className="menu-icon">☰</span>

</div>


<div className="search-box">

<SearchBar
search={search}
setSearch={setSearch}
/>

</div>


<div className="sidebar-group">
<p className="sidebar-label">TASKS</p>

<FilterButtons
filter={filter}
setFilter={setFilter}
totalNotes={totalNotes}
activeNotes={activeNotes}
completedNotes={completedNotes}
/>

</div>


<div className="sidebar-group">
<p className="sidebar-label">LISTS</p>


<div className="list-item">

<span className="list-color personal"></span>

<span>Personal</span>
<b>{totalNotes}</b>
</div>


<div className="list-item">

<span className="list-color work"></span>

<span>Work</span>
<b>{activeNotes}</b>
</div>


<div className="list-item">
<span className="list-color list-one"></span>

<span>List 1</span>
<b>{completedNotes}</b>
</div>


<div className="add-list">

<span>＋</span>
Add New List
</div>

</div>


<div className="sidebar-group">
<p className="sidebar-label">TAGS</p>


<div className="tags">

<span className="tag tag-one">
Tag 1
</span>

<span className="tag tag-two">
Tag 2
</span>

<button>
+ Add Tag
</button>

</div>
</div>
</div>



<div className="sidebar-bottom">
<div>
<span>☷</span>
Settings

</div>


<div>

<span>↪</span>

Sign out

</div>
</div>
</aside>





<main className="main-content">

<h1 className="page-title">
Sticky Wall
</h1>


<div className="wall">

{filteredNotes.map((note) => (

<NoteItem
key={note.id}
note={note}
toggleNote={toggleNote}
deleteNote={deleteNote}
startEdit={startEdit}
editingId={editingId}
editText={editText}
setEditText={setEditText}
saveEdit={saveEdit}

/>

))}


<NoteForm
task={task}
setTask={setTask}
addNote={addNote}

/>


</div>
</main>
</div>

);

}


export default App;




/*import { useState,useEffect } from "react";

import SearchBar from "./searchbar";


function App(){
const [habits,setHabits]=useState(()=>{
  return JSON.parse(localStorage.getItem("habits"))||[]
})

const [task,setTask]=useState("")
const [search,setSearch]=useState("")

useEffect(()=>{
localStorage.setItem("habits",JSON.stringify(habits))},[habits])
  
function addHabit(){
if (!task.trim()) return

const newHabit={
id:Date.now(),
text:task,
completed:false
}

setHabits([...habits,newHabit]),
setTask("")
}

function delHabit(id){
setHabits(habits.filter((habit)=>habit.id !== id))
}

function toggHabit(id){
setHabits(habits.map((habit)=>habit.id === id

?{...habit,completed:!habit.completed}
:habit
))
}


const filteredNotes = notes.filter((note) => {

const matchesSearch = note.text
.toLowerCase()
.includes(search.toLowerCase());


return matchesSearch;
});


const totalHabit=habits.length

const completedHabit=(habits.filter((habit)=>habit.completed === true)).length

return(
<div>



<searchBar
search={search}
setSearch={setSearch}
/>







</div>

)

}*/