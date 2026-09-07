import PropTypes from "prop-types";
function SearchBar(props:{search:string,setSearch:any}){


return(
<input
type="text"
placeholder="Search Student"
value={props.search}
onChange={(e)=>props.setSearch(e.target.value)}
/>
)
}


SearchBar.propTypes={
search:PropTypes.string.isRequired,
setSearch:PropTypes.func.isRequired
}


export default SearchBar;
