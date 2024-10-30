// src/components/NetflixHeader.js
import React from 'react';

const NetflixHeader = () => {
    return (
        <>
            <div className="d-flex justify-content-between p-3 m-3">
                <div>
                    <h2 className="text-danger">NETFLIX</h2>
                </div>

                <div className="input-group w-25">
                    <select className='form-select'>
                        <option>Language</option>
                        <option>English</option>
                        <option>Telugu</option>
                    </select>
                    <button className="btn btn-danger ms-2">
                        Sign In
                    </button>
                </div>
            </div>
        </>
    );
};

export default NetflixHeader;
