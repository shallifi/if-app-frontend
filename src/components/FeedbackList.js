import React, { useEffect, useState } from 'react'



function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState ([]);


    useEffect(() => {
        fetch("http://localhost:9292/feedbacks")
        .then((res) => res.json())
        .then((data) => setFeedbacks(data));
    }, []);
// handleDelete function
       function handleDelete(id){
        console.log(id)
        fetch(`http://localhost:9292/feedbacks/${id}`, {
            method: "DELETE", 
           
        })
        .then((response) => response.json())
        .then((deletedFeedback)=>{console.log(deletedFeedback)
        setFeedbacks(deletedFeedback)})
        .catch((error)=>alert(error))     
    }
    const displayFeedback = feedbacks.map((feedbackShown) =>(
    <li key={feedbackShown.id}>
          {feedbackShown.id},
          {feedbackShown.score},
          {feedbackShown.what_did_you_enjoy},
          {feedbackShown.what_needs_improvement},
          {feedbackShown.would_you_watch_again},
          {feedbackShown.comment},
          {feedbackShown.how_did_you_hear_about_the_show}
            <button onClick={()=>handleDelete(feedbackShown.id)}>Delete</button>
            </li>)
            )
          

    
  return (
      <div>FeedbackList
        <ul className='squarewords'>
            {displayFeedback}
        </ul>
        

    </div>

  )
}

export default FeedbackList