import PropTypes from "prop-types";


function DashboardHeader(props:{title:string,tagline:string}){
    return(

<header className="dashboard-header">
            <h1>
            {props.title}
            </h1>
               <p>
                {props.tagline}
              </p>
            <nav>
                <a>Home</a>
                <a>Courses</a>
                <a>Profile</a>
            </nav>
        </header>

    )

}



DashboardHeader.propTypes={

    title:PropTypes.string.isRequired,
    tagline:PropTypes.string.isRequired

}



export default DashboardHeader;
