import PropTypes from "prop-types";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard(props: any) {
    const {
        favorites,
        changeFavorite,
        removeStudent
    } = useContext(StudentContext);
    const isFavorite = favorites.includes(props.id);
    return (
        <div className="student-card">
            <img src={props.avatar} />
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Major: {props.major}</p>
            <StatBadge
                label="GPA"
                value={props.gpa}
            />

            <div>
                {
                    props.courses.map((course: any) => {

                  return (
                     <CourseTag
                       key={course.courseName}
                           courseName={course.courseName}
                   color={course.color}
                            />
                     );

                    })
                }
            </div>
            <button onClick={() => {
                changeFavorite(props.id);
            }}>
                {
                    isFavorite ?
                    " Favorite" :
                 " Add Favorite"
                }
            </button>
            <button
                className="remove-button"
                onClick={() => {
                    removeStudent(props.id);
             }}
            >
      Remove Student
        </button>
     </div>
    );
}

StudentCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    courses: PropTypes.array.isRequired
};


export default StudentCard;
