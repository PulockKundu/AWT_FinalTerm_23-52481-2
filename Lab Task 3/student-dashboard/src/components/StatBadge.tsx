import PropTypes from "prop-types";
function StatBadge(props: { label: string, value: string }) {
    return (
        <div className="stat-badge">
         <p>{props.label}</p>
        <strong>{props.value}</strong>
        </div>
    );
}
StatBadge.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};
export default StatBadge;
