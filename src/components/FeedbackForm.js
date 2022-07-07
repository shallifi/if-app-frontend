import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';



function FeedbackForm({onAddForm}) {
        // controlled form
        const [formData, setFormData]  = useState({
            id:"", 
            score:"",
             what_did_you_enjoy:"",
             what_needs_improvement:"",
             would_you_watch_again:"",
             comment:"",
             how_did_you_hear_about_the_show:""
        }
        )
         // history.push() to navigate to UserList after POST request
 const history = useHistory();

//  /handleChange 
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((formData) => ({ ...formData, [name]: value }));
 };

 const handleSubmit = (e) => {
    e.preventDefault();
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData }),
    };
      fetch(`http://localhost:9292/feedbacks`, configObj)
        .then((resp) => resp.json())
        .then((newFeedback) => {
          onAddForm(newFeedback);
          setFormData({
            id:"",
            score:"",
            what_did_you_enjoy:"",
            what_needs_improvement:"",
            would_you_watch_again:"",
            comment:"",
            how_did_you_hear_about_the_show:""
        });
      });
      history.push(`feedbacks`)
    }



  return (
    <section>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div>FeedbackForm
                    <p>The information that you provide will help the company obtain grants for more performances in the future.</p>

                    <h2 style={formStyle}>Name of the piece</h2>


                    <h2 style={formStyle}>Score 1-10</h2>
                        <select className='drop-menu' >
                            <option>Overall Score for the piece</option>
                            <option value="age">1</option>
                            <option value="age">2</option>
                            <option value="age">3</option>
                            <option value="age">4</option>
                            <option value="age">5</option>
                            <option value="age">6</option>
                            <option value="age">7</option>
                            <option value="age">8</option>
                            <option value="age">9</option>
                            <option value="age">10</option>
                        </select>

                        <h2>What did you enjoy?</h2>
                            <input type="text" 
                            // style={formStyle} 
                            name="what_did_you_enjoy" 
                            placeholder="Most memorable things about the piece"
                            onChange={handleChange}
                            value={formData.what_did_you_enjoy}/>
                        
                        <h2>What needs improvement?</h2>
                            <input type="text" 
                            // style={formStyle} 
                            name="what_needs_improvement" 
                            placeholder="Something you felt needed more..."
                            onChange={handleChange}
                            value={formData.what_needs_improvement}/>

                        <h2>Would you watch again?</h2>
                            <select className='drop-menu' >
                                <option selected value="would_you_watch_again">Select Yes or No</option>
                                    <option value="true"> Yes</option>
                                    <option value="false"> No</option>
                            </select>      
                        
                        <h2>Thoughtful Comment</h2>
                            <input type="text" 
                            // style={formStyle} 
                            name="comment" 
                            placeholder="Additional feedback for choreographer"
                            onChange={handleChange}
                            value={formData.comment}/>
                        
                        <h2>How did you hear about us?</h2>
                            <input type="text" 
                            // style={formStyle} 
                            name="how_did_you_hear_about_the_show" 
                            placeholder="An answer here will help us determine what works for Marketing"
                            onChange={handleChange}
                            value={formData.how_did_you_hear_about_the_show}/>


                    <button type="submit"  style={submitButton}>Submit Your Feedback and return back to Program Section</button>
            </div>
            </form>
    </section>

        
  )
}

export default FeedbackForm

const formStyle = {
    display: "flex",
    flex : "column",
    width: "500px",
    margin: "0 auto",
    // border: "2px solid var(--dark-turquoise)",
    padding: "1.75rem",
    margintop: "0.25rem",
    marginbottom: "1rem",
    // padding: "0.5rem",
    // border: "none",
    fontsize: "1.25rem",
    fontweight: "bold",
    transition: "all 0.3s",
    border: "2px solid var(--color)",
  
  }

const submitButton = {
    display: "flex",
    flexdirection: "column",
    alignitems: "center",
  }

  