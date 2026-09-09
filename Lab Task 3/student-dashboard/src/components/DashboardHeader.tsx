import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { StudentContext } from "../context/StudentContext";

function DashboardHeader(props: { title: string, tagline: string }) {
    const { theme, changeTheme } = useContext(ThemeContext);
const { favorites } = useContext(StudentContext);

return (
        <header className="dashboard-header">
      <h1>{props.title}</h1>
            <p>{props.tagline}</p>
            <p>Total Favorites: {favorites.length}</p>
            <nav>
            <a>Home</a>
            <a>Courses</a>
             <a>Profile</a>
            </nav>

            <button onClick={changeTheme}>
                {
                    theme === "light" ?
                        "Dark Mode" :
                        "Light Mode"
              }
        </button>
     </header>
);
}
DashboardHeader.propTypes = {
title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired
};

export default DashboardHeader;
