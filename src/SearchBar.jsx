function SearchBar({ search, setSearch }) {

return (
<div className="search-input">

<span>⌕</span>

<input
type="text"
placeholder="Search"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

</div>

);
}


export default SearchBar;



/*function SearchBar({ search, setSearch }) {

return (

<div>
<input
type="text"
placeholder="Search"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

</div>

);
}


export default SearchBar;
*/
