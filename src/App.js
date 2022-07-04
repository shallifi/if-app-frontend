// import { useState } from "react";
import { Route } from "react-router-dom";
import  AddAudienceInfo from "./components/AddAudienceInfo";

import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";




function App() {
  // const [colorT, setColorT] = useState('black')


  // function handleColorChange(newColor) {
  //   setColorT(newColor)
  //   console.log("click")
  // }

  return (
    <div>
        <Link to="/" style={{border:"orange"}}>
          <h1>Instant Feedback App</h1>
        </Link>
      <h1> Welcome to Tonight's Performance</h1>
     <NavBar />
      
      <Route path="/audienceinfo">
        <AddAudienceInfo />
      </Route>
        <p>
          About the company and about the Show
        </p>
        
      
    </div>
  );
}

export default App;
