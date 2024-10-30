import React from "react";
function DataBindingComponent() {
    var menu = [
        {
            category: "electronics", produts: ["TV", "mobile"]

        },
        { category: "shoes", produts: ["nike", "adidas"] }
    ]
    return (
        <div className="container">
            <h2>categories</h2>
            <ol>
                {
                    menu.map(item =>
                        <li>{item.category}
                            <ul>
                                {
                                    item.produts.map(data =>
                                        <li>{data}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select Product</h2>
            <select>
                {
                    menu.map(item =>
                        <optgroup label={item.category}>
                            {
                                item.produts.map(data =>
                                    <option>{data}</option>
                                )
                            }</optgroup>
                    )
                }
            </select>


        </div>
    )
}
export default DataBindingComponent;