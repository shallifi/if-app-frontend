// import { useState } from "react";
import { Route } from "react-router-dom";
import  AddAudienceInfo from "./components/AddAudienceInfo";

import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ShowPieceList from "./components/ShowPieceList";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";




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
      <Route path="/show_pieces">
        <ShowPieceList />
        <p>About the Show</p>
      </Route>
      <Route path="/feedbacks">
        <FeedbackList />
        <p>List of all the feedbacks of the pieces</p>
      </Route>
      <Route path="/feedbacks/forms">
        <FeedbackForm />
        <p>Feedbackform</p>
      </Route>
        
        <h2>
          About the company
        </h2>
      
    </div>
  );
}

export default App;
