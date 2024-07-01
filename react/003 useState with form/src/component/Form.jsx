import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });


    const handleFormData = (e)=>{
        e.preventDefault();

        console.log(formData);
    };

    const handleInputData = (e)=>{

        const newData = {...formData};

        newData[e.target.name] = e.target.value;

        setFormData(newData)
    };
    
  return (
    <div className='form-container'>
        <form onSubmit={handleFormData}>
            <input type="text" name='name' onChange={handleInputData} value={formData.name} placeholder="Name" />
            <input type="text" name='email' onChange={handleInputData} value={formData.email}  placeholder="Email" />
            <input type="text" name='phone' onChange={handleInputData} value={formData.phone} placeholder="Phone" />
            <input type="text" name='message' onChange={handleInputData} value={formData.message} placeholder="Message" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form;