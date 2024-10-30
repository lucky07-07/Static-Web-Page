import { useFormik } from "formik";
import React from "react";

function Formik() {
    function verifyuserdetails(userdetails) {
        const errors = {};
        if (userdetails.username == "") {
            errors.username = "user name required";
        } else if (userdetails.username.length < 4) {
            errors.username = "name too short";
        }
        if (userdetails.age == "") {
            errors.age = "age required";
        } else if (isNaN(userdetails.age)) {
            errors.age = "age is a number";
        }
        if (userdetails.email == "") {
            errors.email = "email required";

        } else if (userdetails.email.indexof("@") <= 2) {
            errors.email = "invalid email";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            age: 0,
            email: ''
        },
        validate: verifyuserdetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd> <input name="username" onChange={Formik.handlechange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.username}</dd>
                    <dt>Age</dt>
                    <dd> <input name="age" onChange={Formik.handlechange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.age}</dd>
                    <dt>Email</dt>
                    <dd><input name="email" onChange={Formik.handlechange} type="email" /></dd>
                    <dd className="text-danger">{formik.errors.email}</dd>
                </dl>
                <button type="submit">Register</button>


            </form>

        </div>
    )
}
export default Formik;