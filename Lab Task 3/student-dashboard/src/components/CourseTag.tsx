import PropTypes from "prop-types";


function CourseTag(props: { courseName: string, color: string }) {

    return (
        <span
        className="course-tag"
        style={{ backgroundColor: props.color }}
        >
        {props.courseName}
        </span>
    );
}


CourseTag.propTypes = {
courseName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default CourseTag;
