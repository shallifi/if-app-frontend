import { useState } from "react";
import { useHistory } from "react-router-dom";


function AudienceMember({onAddAudienceMember}){

    
    // controlled form
    const [formData, setFormData]  = useState({
        name:"",
        age:"",
        household_income:"",
        city:"",
        first_time :""
    }
    )
    
    // handlechange function
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((formData) => ({...formData, [name]: value})
        )
    };
    
    const history = useHistory();

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
        fetch(`http://localhost:9292/audience_members`, configObj)
        .then((resp) => resp.json())
        .then((newAudienceMember) => {
                onAddAudienceMember(newAudienceMember);
                setFormData({
                    name:"",
                    age:"",
                    household_income:"",
                    city:"",
                    first_time :""
                });
            });
            history.push(`/show_pieces`)
        }
        
        
    return (
            // needed section to make this work
    <section>
        <form style={formStyle} onSubmit={handleSubmit}>
            <div>
                <p>The information that you provide will help the company obtain grants for more performances in the future.</p>

                
            <h2>Name</h2>
            <input type="text" 
                style={formStyle} 
                name="name" 
                placeholder="First and Last Name"
                onChange={handleChange}
                value={formData.name}
            />
            
            <h2 style={formStyle}>Age Range</h2>
                <select className='drop-menu' >
                    <option selected value="age">Select your decade</option>
                    <option value="age">below 20 years of age</option>
                    <option value="age">in your 20's</option>
                    <option value="age">in your 30's</option>
                    <option value="age">in your 40's</option>
                    <option value="age">in your 50's</option>
                    <option value="age">in your 60's</option>
                    <option value="age">in your 70's</option>
                    <option value="age">above 80 years old</option>
                </select>


            <h2>Household Income</h2>
                <input type="number" 
                style={formStyle} 
                name="household_income" 
                placeholder="Yearly Income Estimate"
                onChange={handleChange}
                value={formData.household_income}/> 
            
            <h2>City of Residence</h2>
                <input type="text" 
                style={formStyle} 
                name="city" 
                placeholder="What city do you call home?"
                onChange={handleChange}
                value={formData.city}/>
            
            <h2>Seeing This Company For The First Time?</h2>
            <select className='drop-menu' >
                <option selected value="first_time">Select Yes or  No</option>
                    <option value="true"> Yes</option>
                    <option value="false"> No</option>
            </select> 

            <button type="submit"  style={submitButton}>Submit Your Information and Proceed to Feedback Section</button>
            </div>
        </form>
    </section>
    )
    
}


export default AudienceMember;


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

//   const textArea = {
//     margintop: "0.25rem",
//     marginbottom: "1rem",
//     padding: "0.5rem",
//     border: "none",
//     fontsize: "1.25rem",
//     fontweight: "bold",
//     transition: "all 0.3s",
//     border: "2px solid var(--color)",
  
//   }