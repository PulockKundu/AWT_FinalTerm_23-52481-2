import {useState} from "react";
import CourseTag from "./CourseTag";
  import StatBadge from "./StatBadge";
function StudentCard(props:any){
const [favorite,setFavorite]=useState(false);





function changeFavorite(){
const newValue=!favorite;
setFavorite(newValue);
props.favoriteChange(
props.id,
newValue
);
}



return(
<div className="student-card">
<img src={props.avatar}/>

<h2>
{props.name}
</h2>
  <p>
  ID: {props.id}
    </p>

<p>
Major: {props.major}
</p>


<StatBadge
label="GPA"
value={props.gpa}
/>

<button

onClick={changeFavorite}
style={{
  backgroundColor:
favorite?"gold":"gray"
}}
>

{
favorite?
"★ Favorite":

"☆ Add Favorite"
}
</button>
<div>
{
props.courses.map((course:any)=>{

return(
<CourseTag
  key={course.courseName}
courseName={course.courseName}
   color={course.color}
/>
)
})
}
</div>
</div>

)
}
export default StudentCard;
