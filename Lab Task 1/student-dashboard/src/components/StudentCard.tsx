import PropTypes from "prop-types";

import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";


function StudentCard(props:any){

    return(

        <div className="student-card">


            <img
            src={props.avatar}
            />
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



StudentCard.propTypes={

    name:PropTypes.string.isRequired,

    id:PropTypes.string.isRequired,

    avatar:PropTypes.string.isRequired,

    gpa:PropTypes.string.isRequired,

    major:PropTypes.string.isRequired,

    courses:PropTypes.array.isRequired

}



export default StudentCard;
