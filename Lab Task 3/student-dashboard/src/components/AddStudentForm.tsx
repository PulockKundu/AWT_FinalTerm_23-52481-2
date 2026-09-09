import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";


function AddStudentForm() {
    const { students, addStudent } = useContext(StudentContext);
    const [name, setName] = useState("");
const [id, setId] = useState("");
 const [major, setMajor] = useState("");
const [gpa, setGpa] = useState("");
    const [courses, setCourses] = useState("");
    const [nameError, setNameError] = useState("");
    const [idError, setIdError] = useState("");
    const [majorError, setMajorError] = useState("");
    const [gpaError, setGpaError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

        if (success !== "") {
         const timer = setTimeout(() => {
             setSuccess("");
            }, 3000);

          return () => {
              clearTimeout(timer);
         };
        }
    }, [success]);

    function submitForm(e: React.FormEvent) {
        e.preventDefault();

        setNameError("");
     setIdError("");
    setMajorError("");
        setGpaError("");
        let hasError = false;

        if (name.trim() === "") {
        setNameError("Name is required");
        hasError = true;
        }

        if (id.trim() === "") {
         setIdError("Student ID is required");
            hasError = true;
        }
        else if (isNaN(Number(id))) {
            setIdError("Student ID must be numeric");
               hasError = true;
        }
        else if (students.some((student: any) => student.id === id.trim())) {
         setIdError("Student ID must be unique");
              hasError = true;
        }

        if (major.trim() === "") {
        setMajorError("Major is required");
        hasError = true;
        }

        if (
            gpa.trim() === "" ||
         isNaN(Number(gpa)) ||
            Number(gpa) < 0 ||
            Number(gpa) > 4
        ) {
            setGpaError("GPA must be between 0 and 4");
         hasError = true;
        }

        if (hasError === true) {
        return;
        }
        let courseList: any[] = [];
        if (courses.trim() !== "") {
            courseList = courses.split(",").map((course) => {
 return {
                    courseName: course.trim(),
                color: "#2563eb"
                };

            });

        }

        const newStudent = {
            name: name.trim(),
            id: id.trim(),
            avatar: `https://i.pravatar.cc/150?u=${id}`,
            gpa: gpa.trim(),
            major: major.trim(),
            courses: courseList
        };

        addStudent(newStudent);
        setName("");
        setId("");
        setMajor("");
        setGpa("");
        setCourses("");
        setSuccess("Student added successfully");
    }

    return (
        <div className="form-area">
            <h2>Add Student</h2>
            <form onSubmit={submitForm}>
                <label>Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                />
                {
                    nameError &&
                    <p className="error-message">{nameError}</p>
                }

        <label>Student ID</label>
        <input
         type="text"
         value={id}
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                {
                    idError &&
                    <p className="error-message">{idError}</p>
                }
                <label>Major</label>
                <input
                    type="text"
                    value={major}
                    onChange={(e) => {
                        setMajor(e.target.value);
                    }}
                />
                {
                    majorError &&
                    <p className="error-message">{majorError}</p>
                }

                <label>GPA</label>
                <input
                    type="text"
                    value={gpa}
                    onChange={(e) => {
                        setGpa(e.target.value);
                    }}
                />
                {
                 gpaError &&
                <p className="error-message">{gpaError}</p>
                }

                <label>Courses</label>
                <input
                    type="text"
                    placeholder="React, TypeScript, Database"
                    value={courses}
                    onChange={(e) => {
                        setCourses(e.target.value);
                    }}
                />

                <button type="submit">
                 Add New Student
                </button>

            </form>

            {
             success &&
            <p className="success-message">{success}</p>
            }

        </div>
    );
}

export default AddStudentForm;
