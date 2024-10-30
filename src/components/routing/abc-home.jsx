import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function AbcHome() {

    const [categories, setcategories] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/categories",
        })
            .then((response) => {
                setcategories(response.data);

            })
    }, []);
    return (
        <div className="container">
            <div>
                <h2>categories</h2>
                <ol>
                    {
                        categories.map(category =>
                            <li key={category}>
                                <Link to={`/products/${category}`}>{category.toUpperCase()}

                                </Link>
                            </li>


                        )
                    }
                </ol>
            </div>

        </div>
    )
}
export default AbcHome;