import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './Portfolio-Index.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";



function PortfolioRegister() {
    const [usererror, setusererror] = useState('');
    const [users, setusers] = useState([]);
    const [colorclass, setcolorclass] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
    };
    const formik = useFormik({
        initialValues: {
            "userid": "",
            "username": "",
            "password": "",
            "age": 0,
            "email": "",
            "mobile": ""

        },
        onSubmit: (values) => {
            if (!validatePassword(values.password)) {
                alert("Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.");
                return;
            }
            axios({
                method: "post",
                url: "http://127.0.0.1:5050/registercustomer",
                data: values
            })
            alert(`registered succesfully...`);
            navigate("/login");
        }
    })

    function VerifyUserid(e) {
        axios({
            method: "get",
            url: "http://127.0.0.1:5050/customers",


        })
            .then(response => {
                setusers(response.data);
                for (var user of users) {
                    if (user.userid == e.target.value) {
                        setusererror('user Id Taken-try Another');
                        setcolorclass("text-danger");
                        break;
                    } else {
                        setusererror('user id available');
                        setcolorclass("text-success");
                    }
                }
            })

    }
    function handlePasswordChange(e) {
        const password = e.target.value;
        formik.handleChange(e);
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.');
        } else {
            setPasswordError('');
        }
    };

    return (
        <div className={`${styles.loginbg} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.formmain}`} >
                <h2 className="text-center">
                    Register
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User ID</dt>
                        <dd><input type="text" name="userid" onKeyUp={VerifyUserid} className={`${styles.input}`} onChange={formik.handleChange} /></dd>
                        <dd className={colorclass}>{usererror}</dd>
                        <dt>User Name</dt>
                        <dd><input type="text" name="username" className={`${styles.input}`} onChange={formik.handleChange} /></dd>
                        <dt>Password</dt>

                        <dd><input type="password" name="password" className={`${styles.input}`} onChange={handlePasswordChange} /></dd>
                        <dd className="text-danger">{passwordError}</dd>
                        <dt>Age</dt>
                        <dd><input type="number" name="age" className={`${styles.input}`} onChange={formik.handleChange} /></dd>
                        <dt>Email</dt>
                        <dd><input type="email" name="email" className={`${styles.input}`} onChange={formik.handleChange} /></dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" name="mobile" className={`${styles.input}`} onChange={formik.handleChange} /></dd>
                    </dl>
                    <div className="text-center">
                        <button type="submit" className={`${styles.button} `}>Register</button>

                    </div>
                </form>
                <div>Existing user already</div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>

        </div>

    )

}
export default PortfolioRegister;