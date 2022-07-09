// import { useState } from "react";
import { Route } from "react-router-dom";
import  AddAudienceInfo from "./components/AddAudienceInfo";

import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ShowPieceList from "./components/ShowPieceList";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";




function App() {


  return (
    <div>
        <Link to="/" style={{border:"orange"}}>
          <header>Instant Feedback App</header>
        </Link>
      <h1> Welcome to Tonight's Performance</h1>
        <h2>
          About the company
          <p>information about how the company was started, it's purpose, and it's goals.</p>
        </h2>
     <NavBar />
      
      <Route path="/audienceinfo">
        <AddAudienceInfo />
      </Route>

      <Route path="/show_pieces">
        <p>About the Show</p>
        <ShowPieceList />
      </Route>

      <Route path="/feedbacks"forceRefresh={true}>
        <p>List of all the feedbacks of the pieces</p>
        <FeedbackList />
      </Route>

      <Route path="/feedbacks/forms">
        <p>Feedbackform</p>
        <FeedbackForm />
      </Route>
        
      
    </div>
  );
}

export default App;
