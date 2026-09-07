import "./App.css";

import {useEffect,useState} from "react";
import DashboardHeader from "./components/DashboardHeader";

import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

function App(){
const [students,setStudents]=useState<any[]>([]);
const [loading,setLoading]=useState(true);
const [search,setSearch]=useState("");
const [sort,setSort]=useState("default");
const [favorites,setFavorites]=useState<string[]>([]);


useEffect(()=>{
 setTimeout(()=>{
setStudents([
{
name:"Rahim Ahmed",
id:"101",
avatar:"https://i.pravatar.cc/150?img=1",
gpa:"3.8",
major:"Computer Science",
courses:[]
},



{
name:"Karim Hasan",
id:"102",
avatar:"https://i.pravatar.cc/150?img=2",
gpa:"3.5",
major:"Software Engineering",
courses:[]
},



{
name:"Sadia Islam",
id:"103",
avatar:"https://i.pravatar.cc/150?img=3",
gpa:"3.9",
major:"Information System",
courses:[]
},



{
name:"Nabil Khan",
id:"104",
avatar:"https://i.pravatar.cc/150?img=4",
gpa:"3.6",
major:"Computer Engineering",
courses:[]
}


]);
setLoading(false);
},1500);

},[]);

let displayStudents=students.filter((student)=>{

return(

student.name
.toLowerCase()
.includes(search.toLowerCase())
||
student.major
.toLowerCase()
.includes(search.toLowerCase())
)
});



if(sort==="name"){


displayStudents.sort((a,b)=>
a.name.localeCompare(b.name)
)
}



if(sort==="gpa"){
displayStudents.sort((a,b)=>
Number(b.gpa)-Number(a.gpa)
)
}



useEffect(()=>{
document.title=
`Dashboard - ${displayStudents.length} Students`
},[displayStudents.length]);
function favoriteChange(id:string,status:boolean){
if(status){


setFavorites([...favorites,id])
}
else{
setFavorites(
favorites.filter((item)=>
item!==id
)
)
}
}


return(

<div>
<DashboardHeader
title="Student Dashboard"
favoriteCount={favorites.length}
/>
<div className="controls">


<SearchBar
search={search}
setSearch={setSearch}
/>



<SortControls
setSort={setSort}
/>
</div>
{
loading ?

<h2>
Loading Students...
</h2>
:
<div className="students">
{
displayStudents.map((student)=>{
return(



<StudentCard
key={student.id}
{...student}
favoriteChange={favoriteChange}



/>
)
})
}
</div>
}

</div>
)
}
export default App;