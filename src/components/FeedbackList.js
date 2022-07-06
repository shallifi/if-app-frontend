import React, { useEffect, useState } from 'react'


function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState ([]);

    useEffect(() => {
        fetch(`http://localhost:9292/feedbacks`)
        .then((res) => res.json())
        .then((data) => setFeedbacks(data));
    }, []);


    

    
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
    


    // function handleDelete(){
    //     fetch(`http://localhost:9292/feedbacks/${id}`, {
    //         method: "DELETE"
    //     })
    //     onDelete(id)
    // }
  
  
    return (
    <div>FeedbackList</div>
  )
}

export default FeedbackList