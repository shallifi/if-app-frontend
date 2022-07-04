// import { useState } from "react";

function AudienceMember(){

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
    const handlechange = (e) => {
        const {name,value} = e.target;
        setFormData((formData) => ({..formData, [name]: value})
        )
    }

return (
    <div>
        <p>testing the add audience info page</p>
    </div>
)





}




export default AudienceMember