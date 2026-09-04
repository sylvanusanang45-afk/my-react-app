function FilterButtons({

filter,

setFilter,

totalNotes,

activeNotes,

completedNotes

}) {

return (

<div className="filter-buttons">


<button

className={filter === "all" ? "selected" : ""}

onClick={() => setFilter("all")}

>

<span>

▸

All

</span>

<b>{totalNotes}</b>

</button>


<button

className={filter === "active" ? "selected" : ""}

onClick={() => setFilter("active")}

>

<span>

☷

Today

</span>

<b>{activeNotes}</b>

</button>


<button

className={filter === "completed" ? "selected" : ""}

onClick={() => setFilter("completed")}

>

<span>

▣

Calendar

</span>

<b>{completedNotes}</b>

</button>


<button className="selected sticky-wall-button">

<span>

▦

Sticky Wall

</span>

</button>


</div>

);

}


export default FilterButtons;