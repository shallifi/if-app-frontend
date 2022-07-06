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
        <NavLink exact to="/show_pieces"
            style={boxButtonStyle} 
            activeStyle={{ background: "darkred", }}
            >
                <h3> Go to the Program for Tonight</h3>
        </NavLink>
        <NavLink exact to="/feedbacks"
            style={boxButtonStyle} 
            activeStyle={{ background: "darkred", }}
            >
                <h3> Feedback list of the show</h3>
        </NavLink>
        <NavLink exact to="/feedbacks/forms"
            style={boxButtonStyle} 
            activeStyle={{ background: "darkred", }}
            >
                <h3> Leave your Feedback</h3>
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
    background: "black",
    textDecoration: "none",
    color: "white",
   };