import React from 'react';

import { useEffect, useState } from 'react';




const index = () => {
    const initialValue = { name: "", email: "" };
    const [formValue, setFormValue] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValue);
        }
    }, [formErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true)
        
    };

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = "name is required";
        }
        if (!values.email) {
            errors.email = "email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "this not a valid email format";
        }
        return errors;
    }

    return (
        <>
            <div>
                {Object.keys(setFormErrors).length === 0 && isSubmit
                    ? (<div className='text-center text-green-300 m-2'>Thanks to share your details .we will contact you shortly.</div>) :
                    (<pre>{JSON.stringify(undefined, 2)}</pre>)}

                
                <div className='border border-gray-200 w-auto md:w-96  m-auto p-5 px-10 text-base my-2'>

                    <form onSubmit={handleSubmit}>
                        <h2 className='text-lg font-bold m-2.5'>Contact Us</h2>
                        <label htmlFor="name"> Name</label>
                        <br />
                        <input type="text" name='name'
                            placeholder='first and last name'
                            className='border border-gray-400 rounded-lg p-2 my-2'
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <br />
                        <p className='text-red-500'>{formErrors.name}</p>

                        <label htmlFor="email"> Email or Mobile No.</label>
                        <br />
                        <input type="text" name='email'
                            placeholder='Email/mobile'
                            value={formValue.email}
                            onChange={handleChange}
                            className='border border-gray-400  rounded-lg p-2 my-2' />
                        <p className='text-red-500'>{formErrors.email}</p>
                        
                        <br />
                        <button className='bg-slate-100  border rounded-2xl  px-6 m-4 text-red-400' type="submit"
                            onSubmit={handleSubmit}> Submit</button>

                    </form>

                </div>




            </div>
        </>
    )
}

export default index;
