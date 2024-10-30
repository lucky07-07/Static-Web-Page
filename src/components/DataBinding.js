import React from 'react';

function DataBinding() {
    var products = [
        { name: 'Samsung', price: 513442 },
        { name: 'Nike', price: 98742 }
    ];
    return (
        <div className='container'>
            <h2>Products Table</h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default DataBinding;

