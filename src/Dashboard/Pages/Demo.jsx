import React, { useState } from 'react';


const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        numberOfEmployees: '',
        emailAddress: '',
        country: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <div className='demo-main'>
            <div className='democard'>
                <h1>Book A Demo</h1>
                <p>See what Pepper can do for you in a short 20 mins call and discover the new way of doing content marketing.</p>
                <img src="book-a-demo.webp" alt="" />
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberOfEmployees">Number of Employees:</label>
                        <input type="text" id="numberOfEmployees" name="numberOfEmployees" value={formData.numberOfEmployees} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailAddress">Email Address:</label>
                        <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="disclaimer">
                    By signing up, you agree to our <u>terms of service</u> and <u>privacy policy</u>.
                </div>
            </div>
            </div>
        </>
    );
};

export default FormComponent;
