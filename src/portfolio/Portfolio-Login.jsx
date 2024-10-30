import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from './Portfolio-Index.module.css';
import { useState } from "react";
import { useCookies } from "react-cookie";



function PortfolioLogin() {
    const [users, setusers] = useState([]);
    const [cookies, setCookie] = useCookies();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            userid: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.get("http://127.0.0.1:5050/customers");
                const user = response.data.find(user =>
                    user.userid === values.userid && user.password === values.password
                );

                if (user) {
                    setCookie("userid", values.userid);
                    navigate("/services");
                } else {
                    alert("Invalid User ID or Password");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                alert("An error occurred. Please try again later.");
            }
        }
    });
    return (
        <div className={`${styles.loginbg} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.formmain}`}  >
                <h2 className="text-center">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Id</dt>
                        <dd className={`${styles.usertext}`}>
                            <input className={`${styles.input}`}
                                type="text"
                                name="userid"
                                placeholder="userid"
                                onChange={formik.handleChange}
                                value={formik.values.userid}
                            />
                            <i className={`bi bi-person-fill ${styles.i} `} ></i>
                        </dd>
                        <dt>Password</dt>
                        <dd className={`${styles.usertext} `}>
                            <input className={`${styles.input} `}
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <i className={`bi bi-lock-fill ${styles.l} `} ></i>
                        </dd>
                    </dl>
                    <div className="d-flex justify-content-center align-items-center">
                        <button type="submit" className={`${styles.button} `}>Login</button>

                    </div>

                </form>


                <p className="text-center mt-2">Don't have an account?</p>


                <div className="text-center"> <Link className={`${styles.a} `} to="/register">Register</Link></div>

            </div>

        </div>

    );

}

export default PortfolioLogin;