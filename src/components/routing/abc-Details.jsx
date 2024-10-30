import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function AbcDetails() {
    const params = useParams();
    const [product, setproduct] = useState({});
    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/${params.prodid},`
        })
            .then(response => {
                setproduct(response.data);
            })

    }, []);
    return (
        <div className="container">
            <h2>Product Details</h2>

        </div>


    )
}
export default AbcDetails;