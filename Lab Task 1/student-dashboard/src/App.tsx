import "./App.css";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";


function App(){
const students=[
{

name:"Rahim Ahmed",
id:"101",
 avatar:"https://i.pravatar.cc/150?img=59",
gpa:"3.8",
major:"Computer Science",
courses:[
{
courseName:"React",
color:"#61dafb"
},
{
courseName:"TypeScript",
color:"#3178c6"
}
]
},


{
name:"Karim Hasan",
id:"102",
avatar:"https://i.pravatar.cc/150?img=2",
gpa:"3.5",
major:"Software Engineering",
courses:[
{
courseName:"Node",
color:"#68a063"
}
]
},


{
name:"Sadia Islam",
id:"103",
avatar:"https://i.pravatar.cc/150?img=3",
gpa:"3.9",
major:"Information System",
courses:[
{
courseName:"Database",
color:"#ff9900"
}
]
},
{

name:"Nabil Khan",
id:"104",
avatar:"https://i.pravatar.cc/150?img=4",
gpa:"3.6",
major:"Computer Engineering",
courses:[
{
courseName:"AI",
color:"#e91e63"
}
]
}
]
return(
<div>
<DashboardHeader

title="Student Dashboard"
/>

<div className="stats">
<StatBadge
label="Total Students"
value="120"
/>

<StatBadge
label="Total Credits"
value="90"
/>
</div>
<div className="students">   
{
students.map((student)=>{

return(
<StudentCard
key={student.id}
{...student}

/>
)
})
}
</div>
</div>
)
}
export default App;
