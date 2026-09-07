import PropTypes from "prop-types";
function DashboardHeader(props:any){
return(
<header className="dashboard-header">


<h1>
{props.title}
</h1>


<p>
   {props.tagline}
</p>


   
     <p>
      Total Favorites: {props.favoriteCount}
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
tagline:PropTypes.string.isRequired,
favoriteCount:PropTypes.number.isRequired

}



export default DashboardHeader;
