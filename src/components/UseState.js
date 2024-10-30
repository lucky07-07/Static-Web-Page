import { useState, useEffect } from "react";

function UseState() {
    const [Mars, setMars] = useState();
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY")
            .then(Response => Response.json())
            .then(data => {
                setMars(data);
            })
    }, [])
    return (
        <div className="container">
            <h2>Mars Data</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Mars.photos.map(photo =>
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <img src={photo.img_src} width="100" height="100" />
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>


        </div>
    )
}
export default UseState;