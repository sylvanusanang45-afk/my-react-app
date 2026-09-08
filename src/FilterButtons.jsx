/*function FilterButtons({

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


export default FilterButtons;*/



/*function FilterButtons({filter,setFilter}){

return(

<div>
<button onClick={()=>{setFilter('all')}}>All</button>
<button onClick={()=>{setFilter("completed")}}>Completed</button>


</div>





)


}
export default FilterButtons;*/



function FilterButtons({

filter,
setFilter,
totalNotes,
todayNotes,
weekNotes,
monthNotes

}){

return(

<div className="filter-buttons">

<button

className={filter==="all"?"selected":""}

onClick={()=>setFilter("all")}

>

<span>

▸

All

</span>

<b>{totalNotes}</b>

</button>

<button

className={filter==="today"?"selected":""}

onClick={()=>setFilter("today")}

>

<span>

☷

Today

</span>

<b>{todayNotes}</b>

</button>

<button

className={filter==="week"?"selected":""}

onClick={()=>setFilter("week")}

>

<span>

◷

This Week

</span>

<b>{weekNotes}</b>

</button>

<button

className={filter==="month"?"selected":""}

onClick={()=>setFilter("month")}

>

<span>

◫

This Month

</span>

<b>{monthNotes}</b>

</button>

<button

className={filter==="calendar"?"selected":""}

onClick={()=>setFilter("calendar")}

>

<span>

▣

Calendar

</span>

</button>

<button className="sticky-wall-button">

<span>

▦

Sticky Wall

</span>

</button>

</div>

)

}

export default FilterButtons;
