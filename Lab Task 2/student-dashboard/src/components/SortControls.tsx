import PropTypes from "prop-types";
function SortControls(props:{setSort:any}){


return(
<div>
<button
onClick={()=>props.setSort("default")}
>

Default
</button>
<button

onClick={()=>props.setSort("name")}
>
Name A-Z
</button>
<button
onClick={()=>props.setSort("gpa")}
>
GPA High-Low
</button>

</div>
)
}
SortControls.propTypes={
setSort:PropTypes.func.isRequired
}
export default SortControls;
