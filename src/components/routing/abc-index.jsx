import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AbcHome from "./abc-home";
import AbcProduct from "./abc-product";
import AbcDetails from "./abc-Details";

function AbcIndex() {
    return (
        <div className="container">
            <BrowserRouter>
                <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                    <div><h2>ABC Shopping</h2></div>
                    <div>
                        <span className="me-4"><Link to="home" className="text-white text-decoration-none">Home</Link></span>
                        <span className="me-4"><Link to="products/electronics" className="text-white text-decoration-none">Electronics</Link></span>
                        <span className="me-4"><Link to="products/jewelery" className="text-white text-decoration-none">Jewelry</Link></span>
                        <span className="me-4"><Link to="products/men's clothing" className="text-white text-decoration-none">Men</Link></span>
                    </div>
                    <div>
                        <span className="bi bi-search me-4"></span>
                        <span className="bi bi-heart me-4"></span>
                        <span className="bi bi-person me-4"></span>
                        <button className="btn btn-light position-relative">
                            <span className="bi bi-cart me-4"></span>
                            <span className="badge bg-danger rounded-circle position-absolute">0</span>
                        </button>
                    </div>
                </header>
                <section className="mt-3">
                    <Routes>
                        <Route path="/" element={<AbcHome />} />
                        <Route path="home" element={<AbcHome />} />
                        <Route path="products/:catName" element={<AbcProduct />} />
                        <Route path="details/:prodid" element={<AbcDetails />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
}

export default AbcIndex;
