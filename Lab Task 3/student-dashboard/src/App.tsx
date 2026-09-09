import "./App.css";
import { useContext, useEffect } from "react";
import { StudentContext } from "./context/StudentContext";
import { ThemeContext } from "./context/ThemeContext";
import DashboardHeader from "./components/DashboardHeader";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import StatBadge from "./components/StatBadge";


function App() {

    const {
        students,
        search,
        sort,
        loading
    } = useContext(StudentContext);

    const { theme } = useContext(ThemeContext);


    let displayStudents = students.filter((student: any) => {

        return (
            student.name.toLowerCase().includes(search.toLowerCase())
            ||
            student.major.toLowerCase().includes(search.toLowerCase())
        );

    });


    if (sort === "name") {

        displayStudents.sort((a: any, b: any) =>
            a.name.localeCompare(b.name)
        );

    }


    if (sort === "gpa") {

        displayStudents.sort((a: any, b: any) =>
            Number(b.gpa) - Number(a.gpa)
        );

    }


    useEffect(() => {

        document.title = `Dashboard - ${displayStudents.length} Students`;

    }, [displayStudents.length]);


    return (
        <div className={`app ${theme}`}>

            <DashboardHeader
                title="Student Dashboard"
                tagline="Context API Student Dashboard"
            />


            <div className="stats">

                <StatBadge
                    label="Total Students"
                    value={students.length.toString()}
                />

                <StatBadge
                    label="Displayed Students"
                    value={displayStudents.length.toString()}
                />

            </div>


            {
                loading ?
                    <div className="loading-area">
                        <div className="spinner"></div>
                        <p>Loading Students...</p>
                    </div>
                    :
                    <>
                        <SearchBar />

                        <SortControls />

                        <AddStudentForm />

                        <div className="students">

                            {
                                displayStudents.map((student: any) => {

                                    return (
                                        <StudentCard
                                            key={student.id}
                                            {...student}
                                        />
                                    );

                                })
                            }

                        </div>
                    </>
            }

        </div>
    );
}


export default App;
