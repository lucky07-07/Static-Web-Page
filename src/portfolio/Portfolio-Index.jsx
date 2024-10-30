import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PortfolioHome from "./Portfolio-Home";
import PortfolioAbout from "./Portfolio-About";
import PortfolioLogin from "./Portfolio-Login";
import PortfolioContact from "./Portfolio-Contact";
import PortfolioRegister from "./Portfolio-Register";
import styles from './Portfolio-Index.module.css';
import PortfolioServices from "./Portfolio-Services";
import Footer from "./Portfolio-Footer";
import VideoDetails from "./VideoDetails";
import VideoAdd from "./VideoAdd";
import VideoDelete from "./VideoDelete";
import VideoEdit from "./VideoEdit";




function PortfolioIndex() {
    return (
        <div className="container-fluid">

            <BrowserRouter>


                <header className={`${styles.header} row`}  >


                    <nav className="d-flex justify-content-between col-4">
                        <div>
                            <span className="bi bi-emoji-smile-fill"> My Portfolio</span>

                        </div>
                        <div>
                            <NavLink to="/home" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>About</NavLink>
                        </div>
                        <div>
                            <NavLink to="/services" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Services</NavLink>
                        </div>
                        <div>
                            <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>Contact</NavLink>
                        </div>

                    </nav>
                    <p className="col-4">
                    </p>
                    <div className="col-2">
                        <div>
                            <span className="bi bi-person-circle"> <Link to="login" className="ms-2">Login</Link></span>
                        </div>
                    </div>
                    <div className="col-2">
                        <a href="https://www.facebook.com/poweranilkumar/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook me-3"></i>
                        </a>

                        <i className="bi bi-instagram me-3 "></i>
                        <a href="https://github.com/lucky07-07/lucky07-07" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github me-3"></i>
                        </a>
                    </div>
                    <div className={styles.bottomline}></div>


                </header>

                <section className="mt-2">

                    <main className={styles.main}>
                        <Routes>
                            <Route path="/" element={<PortfolioHome />} />
                            <Route path="/home" element={<PortfolioHome />} />
                            <Route path="/about" element={<PortfolioAbout />} />
                            <Route path="/login" element={<PortfolioLogin />} />
                            <Route path="/register" element={<PortfolioRegister />} />
                            <Route path="/contact" element={<PortfolioContact />} />
                            <Route path="/services" element={<PortfolioServices />} />
                            <Route path="/details/:id" element={<VideoDetails />} />
                            <Route path="/addvideo" element={<VideoAdd />} />
                            <Route path="/delete/:id" element={<VideoDelete />} />
                            <Route path="/edit/:id" element={<VideoEdit />} />
                        </Routes>
                    </main>

                </section>


            </BrowserRouter>
        </div >

    )
}
export default PortfolioIndex;