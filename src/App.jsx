/*import { useEffect, useState } from "react";

import NoteForm from "./NoteForm";
import SearchBar from "./SearchBar";
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

import NoteForm from "./NoteForm"
import NoteItem from "./NoteItem"
import SearchBar from "./SearchBar"
import FilterButtons from "./FilterButtons";


function App(){
const [habits,setHabits]=useState(()=>{
  return JSON.parse(localStorage.getItem("habits"))||[]
})

const [task,setTask]=useState("")
const [search,setSearch]=useState("")
const [filter,setFilter]=useState("all")

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


const filteredHabits = habits.filter((habit) => {

const matchesSearch = habit.text
.toLowerCase()
.includes(search.toLowerCase());


return matchesSearch;
});


const totalHabit=habits.length

const completedHabit=(habits.filter((habit)=>habit.completed === true)).length

return(
<div>



<SearchBar
search={search}
setSearch={setSearch}
/>

<NoteForm
task={task}
setTask={setTask}
addHabit={addHabit}
/>


<FilterButtons
filter={filter}
setFilter={setFilter}
/>



filteredHabits.map((habit) => (
  <NoteItem
    key={habit.id}
    habit={habit}
    toggHabit={toggHabit}
    delHabit={delHabit}
  />
))



<div>

<p>Total:{totalHabit}</p>
<p>Completed:{completedHabit}</p>

</div>


</div>

)

}

export default App;







/*import { useState, useEffect } from "react";

import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";

function App() {

  const [habits, setHabits] = useState(() => {
    return JSON.parse(localStorage.getItem("habits")) || [];
  });

  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");


  useEffect(() => {

    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );

  }, [habits]);


  function addHabit() {

    if (!task.trim()) return;

    const newHabit = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setHabits([
      ...habits,
      newHabit
    ]);

    setTask("");

  }


  function delHabit(id) {

    setHabits(
      habits.filter((habit) => habit.id !== id)
    );

  }


  function toggHabit(id) {

    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed
            }
          : habit
      )
    );

  }


  // SEARCH HABITS

  const searchedHabits = habits.filter((habit) => {

    return habit.text
      .toLowerCase()
      .includes(search.toLowerCase());

  });


  // FILTER HABITS

  const filteredHabits = searchedHabits.filter((habit) => {

    if (filter === "active") {
      return habit.completed === false;
    }

    if (filter === "completed") {
      return habit.completed === true;
    }

    return true;

  });


  // PROGRESS

  const totalHabit = habits.length;

  const completedHabit = habits.filter(
    (habit) => habit.completed
  ).length;


  return (

    <div>

      <h1>Habit Tracker</h1>


      <SearchBar
        search={search}
        setSearch={setSearch}
      />


      <NoteForm
        task={task}
        setTask={setTask}
        addHabit={addHabit}
      />


      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />


      {/* DISPLAY HABITS *

      {filteredHabits.map((habit) => (

        <NoteItem
          key={habit.id}
          habit={habit}
          toggHabit={toggHabit}
          delHabit={delHabit}
        />

      ))}


      {/* PROGRESS *

      <div>

        <p>
          Total: {totalHabit}
        </p>

        <p>
          Completed: {completedHabit}
        </p>

      </div>

    </div>

  );

}

export default App;*/


import { useEffect,useState } from "react";

import NoteForm from "./NoteForm"
import NoteItem from "./NoteItem"
import SearchBar from "./SearchBar"
import FilterButtons from "./FilterButtons";

function App(){

const [notes,setNotes]=useState(()=>{

return JSON.parse(localStorage.getItem("notes"))||[]

})

const [task,setTask]=useState("")
const [title,setTitle]=useState("")

const [startDate,setStartDate]=useState("")
const [endDate,setEndDate]=useState("")

const [selectedList,setSelectedList]=useState("Personal")
const [selectedTags,setSelectedTags]=useState([])

const [search,setSearch]=useState("")
const [filter,setFilter]=useState("all")
const [taskView,setTaskView]=useState("active")

const [editingId,setEditingId]=useState(null)
const [editText,setEditText]=useState("")

const [lists,setLists]=useState(()=>{

return JSON.parse(localStorage.getItem("lists"))||[
"Personal",
"Work",
"List 1"
]

})

const [tags,setTags]=useState(()=>{

return JSON.parse(localStorage.getItem("tags"))||[
"Tag 1",
"Tag 2"
]

})

useEffect(()=>{

localStorage.setItem("notes",JSON.stringify(notes))

},[notes])

useEffect(()=>{

localStorage.setItem("lists",JSON.stringify(lists))

},[lists])

useEffect(()=>{

localStorage.setItem("tags",JSON.stringify(tags))

},[tags])

function addNote(){
if(!task.trim()) return

const colors=["yellow","blue","pink","orange"]
const randomColor=colors[Math.floor(Math.random()*colors.length)]

const newNote={
id:Date.now(),
title:title,
text:task,
startDate:startDate,
endDate:endDate,
list:selectedList,
tags:selectedTags,
completed:false,
color:randomColor
}

setNotes([...notes,newNote])
setTask("")
setTitle("")
setStartDate("")
setEndDate("")
setSelectedList("Personal")
setSelectedTags([])

}

function deleteNote(id){
setNotes(notes.filter((note)=>note.id!==id))
}

function toggleNote(id){
setNotes(notes.map((note)=>note.id===id
? {...note,completed:!note.completed}
:note

))
}

function startEdit(note){
setEditingId(note.id)
setEditText(note.text)

}

function saveEdit(id){
if(!editText.trim()) return
setNotes(notes.map((note)=>note.id===id
? {...note,text:editText}
:note

))

setEditingId(null)

setEditText("")

}

function updateNote(id,changes){

setNotes(notes.map((note)=>note.id===id
? {...note,...changes}

:note

))

}

function isToday(date){
if(!date) return false
const today=new Date()
const checkDate=new Date(date)

return(

today.getFullYear()===checkDate.getFullYear()&&
today.getMonth()===checkDate.getMonth()&&
today.getDate()===checkDate.getDate()

)

}

function isThisWeek(date){

if(!date) return false
const today=new Date()
const checkDate=new Date(date)
const startOfWeek=new Date(today)
const day=today.getDay()
startOfWeek.setDate(today.getDate()-day)
startOfWeek.setHours(0,0,0,0)
const endOfWeek=new Date(startOfWeek)
endOfWeek.setDate(startOfWeek.getDate()+6)
endOfWeek.setHours(23,59,59,999)

return checkDate>=startOfWeek&&checkDate<=endOfWeek

}

function isThisMonth(date){

if(!date) return false

const today=new Date()

const checkDate=new Date(date)

return(

today.getFullYear()===checkDate.getFullYear()&&
today.getMonth()===checkDate.getMonth()

)

}

const filteredNotes=notes.filter((note)=>{
const matchesSearch=

note.text.toLowerCase().includes(search.toLowerCase())||

(note.title||"").toLowerCase().includes(search.toLowerCase())

if(filter==="today"){
return matchesSearch&&(
isToday(note.startDate)||
isToday(note.endDate)

)

}

if(filter==="week"){
return matchesSearch&&(
isThisWeek(note.startDate)||
isThisWeek(note.endDate)
)

}

if(filter==="month"){
return matchesSearch&&(
isThisMonth(note.startDate)||
isThisMonth(note.endDate)
)

}

return matchesSearch

})

const displayedNotes=filteredNotes.filter((note)=>{
if(taskView==="active"){
return !note.completed

}

if(taskView==="completed"){
return note.completed

}

return true

})

const activeNotes=notes.filter((note)=>!note.completed)
const totalNotes=activeNotes.length
const todayNotes=activeNotes.filter((note)=>

isToday(note.startDate)||
isToday(note.endDate)

).length

const weekNotes=activeNotes.filter((note)=>
isThisWeek(note.startDate)||
isThisWeek(note.endDate)
).length

const monthNotes=activeNotes.filter((note)=>
isThisMonth(note.startDate)||
isThisMonth(note.endDate)

).length

function addList(){

const newList=prompt("Enter list name:")
if(!newList) return
if(!newList.trim()) return
if(lists.includes(newList.trim())) return
setLists([...lists,newList.trim()])

}

function addTag(){

const newTag=prompt("Enter tag name:")

if(!newTag) return
if(!newTag.trim()) return
if(tags.includes(newTag.trim())) return
setTags([...tags,newTag.trim()])

}

return(

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
todayNotes={todayNotes}
weekNotes={weekNotes}
monthNotes={monthNotes}
/>

</div>

<div className="sidebar-group">

<p className="sidebar-label">LISTS</p>

{lists.map((list,index)=>{
const listCount=notes.filter((note)=>
note.list===list&&
!note.completed
).length

return(

<div className="list-item" key={list}>

<span

className={`list-color list-${index}`}

> </span>

<span>{list}</span>
<b>{listCount}</b>

</div>

)

})}

<button
className="add-list"
onClick={addList}
>

<span>＋</span>

Add New List
</button>

</div>

<div className="sidebar-group">

<p className="sidebar-label">TAGS</p>

<div className="tags">
{tags.map((tag)=>(
<span

className="tag"
key={tag}
>

{tag}

</span>

))}

<button onClick={addTag}>

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

<div className="task-view-toggle">

<button
className={taskView==="active"?"selected":""}
onClick={()=>setTaskView("active")}
>
Active Tasks
</button>

<button
className={taskView==="completed"?"selected":""}
onClick={()=>setTaskView("completed")}
>
Completed Tasks
</button>

<button

className={taskView==="all"?"selected":""}
onClick={()=>setTaskView("all")}
>
All Tasks

</button>

</div>

<div className="wall">
{displayedNotes.map((note)=>(

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
updateNote={updateNote}
lists={lists}
tags={tags}
/>

))}

<NoteForm
task={task}
setTask={setTask}
title={title}
setTitle={setTitle}
startDate={startDate}
setStartDate={setStartDate}
endDate={endDate}
setEndDate={setEndDate}
selectedList={selectedList}
setSelectedList={setSelectedList}
selectedTags={selectedTags}
setSelectedTags={setSelectedTags}
lists={lists}
tags={tags}
addNote={addNote}

/>

</div>

</main>

</div>

)
}

export default App;
