import { useState } from 'react';
import {useFormik} from 'formik';

export default function Form() {

    let [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        password: ''
    });

    // let handleNameChange = (e) => {
    //     setFormData({ ...formData, fullName: e.target.value });
    // }
    // let handleUserNameChange = (e) => {
    //     setFormData({ ...formData, userName: e.target.value });
    // }
    let handleInputChange = (e) => {
        let fieldName = e.target.name;
        let newValue = e.target.value;
        setFormData((currData) => (
            { ...currData, [fieldName]: newValue }));
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
            />
            <br /> <br /> <br />
            <label htmlFor="userName">Username:</label>
            <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <br />

            <button type="submit">Submit</button>

        </form>
    )
}
