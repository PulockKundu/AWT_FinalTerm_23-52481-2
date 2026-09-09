import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";


function SearchBar() {
    const { search, setSearch } = useContext(StudentContext);
    return (
        <div className="search-area">
    <input
             type="text"
               placeholder="Search Student"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
        </div>
    );
}
export default SearchBar;
