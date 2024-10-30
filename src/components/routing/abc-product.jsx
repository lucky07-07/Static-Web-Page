import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function AbcProduct() {
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/category/${params.catName}`

        })
            .then(response => {
                setProducts(response.data);
            })
    }, []);
    return (
        <div className="container">
            <h2>{params.catName.toUpperCase()} PRODUCTS</h2>
            <div className="d-flex flex-wrap">
                {products.map(product => (
                    <div key={product.id} className="card m-2" style={{ width: '200px' }}>
                        <Link to={`/details/${product.id}`}><img src={product.image} alt={product.title} className="card-img-top" height="150" /></Link>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AbcProduct;
