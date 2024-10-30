
import React from "react";
import { useState, useEffect } from "react";
import "./FakeStore.css";
import { data } from "jquery";

function FakeStore() {
    const [categories, setcategories] = useState([]);
    const [products, setproducts] = useState([{}]);
    const [cartcount, setcartcount] = useState(0);
    const [cartitems, setcartitems] = useState([]);

    function getcartcount() {
        setcartcount(cartitems.length);

    }

    function addcart(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartitems.push(data);
                getcartcount();
                alert(`${data.title}\n added succesfully`);
            })


    }

    function loadcategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                data.unshift("all");
                setcategories(data);
            })

    }
    function loadproducts(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setproducts(data);
            });
    }

    useEffect(() => {
        loadcategories();
        loadproducts("https://fakestoreapi.com/products");
        getcartcount();

    }, [])
    function handlechange(event) {
        if (event.target.value == "all") {
            loadproducts("https://fakestoreapi.com/products");
        } else {
            loadproducts(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }



    }
    return (
        <div className="container">
            <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                <div><h2>ABC Shopping</h2></div>
                <div>
                    <span className="me-4" onClick={handlechange}>Home</span>
                    <span className="me-4" onClick={handlechange}>Electronics</span>
                    <span className="me-4" onClick={handlechange}>Jewelery</span>
                    <span className="me-4" onClick={handlechange}>Men</span>
                </div>
                <div>
                    <span className="bi bi-search me-4"></span>
                    <span className="bi bi-heart me-4"></span>
                    <span className="bi bi-person me-4"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-light position-relative">
                        <span className="bi bi-cart me-4"> </span>
                        <span className="badge bg-danger rounded-circle position-absolute">{cartcount}</span></button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                    <button data-bs-dismiss="modal" className="btn btn-close"></button>

                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Title
                                                </th>
                                                <th>
                                                    Preview
                                                </th>  <th>
                                                    Price
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartitems.map(item =>
                                                    <tr >
                                                        <td>{item.title}</td>
                                                        <td><img src={item.image} width="50" height="50" /></td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <button className="btn btn-danger"><span className="bi bi-trash-fill"></span></button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <div>
                            <select className="form-select" onChange={handlechange}>
                                {
                                    categories.map(category =>
                                        <option key={category} value={category}>{category.toUpperCase()}</option>
                                    )
                                }

                            </select>
                        </div>
                    </div>

                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2">
                                <img src={product.image} height="150" className="card-img-top" />
                                <div className="card-header">
                                    <p className="card-title">{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>rating</dt>
                                        <dd>
                                            {product.rating ? (
                                                <>
                                                    <span className="bi bi-star-fill text-success"></span>
                                                    {product.rating.rate} [{product.rating.count}]
                                                </>
                                            ) : (
                                                "No rating available"
                                            )}
                                        </dd>
                                    </dl>

                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={addcart} className="btn btn-danger w-100"><span className="bi bi-cart4"></span>Add to cart</button>

                                </div>
                            </div>
                        )
                    }

                </main>

            </section>

        </div>
    )
}
export default FakeStore;