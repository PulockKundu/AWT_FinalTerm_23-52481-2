import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext<any>(null);


const defaultStudents = [
    {
        name: "Rahim Ahmed",
        id: "101",
        avatar: "https://i.pravatar.cc/150?img=1",
        gpa: "3.8",
        major: "Computer Science",
        courses: [
            {
             courseName: "React",
                color: "#61dafb"
            },
            {
                courseName: "TypeScript",
                  color: "#3178c6"
            }
        ]
    },
    {
        name: "Karim Hasan",
        id: "102",
        avatar: "https://i.pravatar.cc/150?img=2",
        gpa: "3.5",
        major: "Software Engineering",
        courses: [
            {
                   courseName: "Node",
                color: "#68a063"
            }
        ]
    },
    {
        name: "Sadia Islam",
        id: "103",
         avatar: "https://i.pravatar.cc/150?img=3",
          gpa: "3.9",
        major: "Information System",
        courses: [
            {
                 courseName: "Database",
                color: "#ff9900"
            }
        ]
    },
    {
        name: "Nabil Khan",
        id: "104",
        avatar: "https://i.pravatar.cc/150?img=4",
         gpa: "3.6",
        major: "Computer Engineering",
        courses: [
            {
             courseName: "AI",
                color: "#e91e63"
            }
        ]
    }
];


function StudentProvider(props: any) {

    const [students, setStudents] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");
    const [favorites, setFavorites] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            const data = localStorage.getItem("students");
            if (data) {
             setStudents(JSON.parse(data));
            }
            else {
            setStudents(defaultStudents);
            }

 setLoading(false);

        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {

        if (loading === false) {
        localStorage.setItem("students", JSON.stringify(students));
        }

    }, [students, loading]);

    function addStudent(student: any) {
    setStudents([...students, student]);
    }

    function removeStudent(id: string) {
     setStudents(
        students.filter((student) => student.id !== id)
        );

        setFavorites(
         favorites.filter((item) => item !== id)
        );

    }

    function changeFavorite(id: string) {

        if (favorites.includes(id)) {
            setFavorites(
            favorites.filter((item) => item !== id)
            );
        }
        else {
            setFavorites([...favorites, id]);
        }

    }

    return (
        <StudentContext.Provider
        value={{
             students,
                search,
              setSearch,
             sort,
              setSort,
                favorites,
                loading,
                addStudent,
                removeStudent,
                changeFavorite
            }}
        >
            {props.children}
        </StudentContext.Provider>
    );
}
export default StudentProvider;
