
import React from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import Formik from "./Formik";

function YupValidation() {
    const formik = useFormik({
        initialValues: {
            username: "",
            age: 0,
            email: ""

        },
        validationSchema: yup.object({
            username: yup.string().min(4, 'too short').max(10, 'too long').required('user name required'),
            age: yup.number().required('age required'),
            email: yup.string().email('invailid email').required('required email')
        }),
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
                    <dd> <input{...formik.getFieldProps("username")} type="text" /></dd>
                    <dd>{formik.errors.username}</dd>

                    <dt>Age</dt>
                    <dd> <input{...formik.getFieldProps("age")} type="text" /></dd>
                    <dd>{formik.errors.age}</dd>

                    <dt>Email</dt>
                    <dd><input{...formik.getFieldProps("email")} type="email" /></dd>
                    <dd>{formik.errors.email}</dd>

                </dl>
                <button type="submit">Register</button>


            </form>

        </div>
    )
}
export default YupValidation;