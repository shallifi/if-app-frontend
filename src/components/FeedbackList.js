import React, { useEffect, useState } from 'react'


function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:9292/feedbacks")
        .then((res) => res.json())
        .then((data) => setFeedbacks(data));
    }, []);

       function handleDelete(id){
        console.log(id)
        fetch(`http://localhost:9292/feedbacks/${id}`, {
            method: "DELETE", 
            // headers: {
            // "Content-Type": "application/json",
            // "Accept": "application/json",
            // },
           
        })
        .then((response) => response.json())
        .then((deletedFeedback)=>{console.log(deletedFeedback)
        setFeedbacks(deletedFeedback)})
        .catch((error)=>alert(error))

        // onDelete(id)
    }

    const displayFeedback = feedbacks.map((feedbackShown) =>{
      
      return <li key={feedbackShown.id}>
          {feedbackShown.id},
          {feedbackShown.score},
          {feedbackShown.what_did_you_enjoy},
          {feedbackShown.what_needs_improvement},
          {feedbackShown.would_you_watch_again},
          {feedbackShown.comment},
          {feedbackShown.how_did_you_hear_about_the_show}
          <button onClick={()=>handleDelete(feedbackShown.id)}>Delete</button>

      </li>

  }
  )


    
    // const renderItems = filteredProjects.map((project) => (
    //     <ProjectListItem key={project.id} {...project} editMode={editMode} onDelete={onDelete}/>
    //   ));



    // function addFeedback(newFeedback) {
    //     setOpinions((opinions) => [...opinions, newFeedback])
    // }


    // need to pass a callback function. have the id of the project that we are editing and we need to signal to our app component that its going to render an edit form

    // const fetchData = async () => {
    //     const resp = await fetch("http://localhost:9292/feedbacks/");
    //     if (resp.ok) {
    //         const data = await resp.json();
    //         setFeedbacks(data);
    //     }
    // };
    


 
  
  
    return (
    <div>FeedbackList
        <ul>
            {displayFeedback}
        </ul>

    </div>

  )
}

export default FeedbackList