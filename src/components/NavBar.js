import { NavLink } from "react-router-dom";




function NavBar ({colorT}) {
return (
    <div className="nav">
        <h3 className="project-title" style={{color:colorT}}>NavBar</h3>

        <NavLink exact to="/audienceinfo"
        style={boxButtonStyle} 
        activeStyle={{ background: "darkred", }}
        >
            <h3> Add Audience Member info</h3>
        </NavLink>

    </div>

)

}


export default NavBar; 

const boxButtonStyle = {
    display: "inline-block",
    width: "150px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
   };