import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, useNavigate } from "react-router-dom";
import styles from './Portfolio-Index.module.css';
import extraImage from '../images/extra3.jpg';
import axios from "axios";
import { Link } from "react-router-dom";
import extraImage2 from '../images/extra2.jpg';
import extraImage3 from '../images/loginbg.jpg';



function PortfolioServices() {
    const servicesData = [
        {
            title: "Karina",
            imageUrl: extraImage,
            description: "Aespa K-pop Idol"
        },
        {
            title: "Karina",
            imageUrl: extraImage2,
            description: "Aespa K-pop Idol"
        },
        {
            title: "Karina",
            imageUrl: extraImage3,
            description: "Aespa K-pop Idol"
        },

    ];
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.userid == undefined) {
            navigate("/login");
        }
    }, [cookies, navigate]);
    function HandlesignOut() {
        removeCookie("userid");
        navigate("/login");
    }
    const [pictures, setpictures] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:5566/pictures'
        }).then((response) => {
            setpictures(response.data);
        })

    }, [])
    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px' }}>
                <h2 className="text-center me-5">Services: {cookies.userid}</h2>
                <button onClick={HandlesignOut} className=" w-15">
                    Sign Out
                </button>
            </div>
            <div className={styles.servicesList}>
                {servicesData.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <img src={service.imageUrl} alt={service.title} className={styles.image} />
                        <div className={styles.bottomcard}>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ paddingTop: '50px', textAlign: 'center' }}>
                <span className="mb-2" ><Link to="/addvideo" className="btn btn-secondary">Add New Video</Link ></span>
                <h2 style={{ paddingBottom: '50px' }}>
                    My Videos
                </h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pictures.map(picture =>
                                <tr key={picture.id} style={{ height: '100px', verticalAlign: 'middle' }}>
                                    <td>
                                        {picture.title}
                                    </td>
                                    <td>
                                        <iframe src={picture.url} style={{ width: '250', height: '250', aspectRatio: '1' }}></iframe>
                                    </td>
                                    <td>
                                        <div>
                                            <Link to={`/details/${picture.id}`} className="btn btn-primary">
                                                <span className="bi bi-eye"></span>details</Link>
                                            <Link to={`/edit/${picture.id}`} className="btn btn-warning ms-2">
                                                <span className="bi bi-pen"></span>Edit</Link>
                                            <Link to={`/delete/${picture.id}`} className="btn btn-danger ms-2">
                                                <span className="bi bi-trash"></span>delete</Link>
                                        </div>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>

            </div >

        </>
    );
};

export default PortfolioServices;