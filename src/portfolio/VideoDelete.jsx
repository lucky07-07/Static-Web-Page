import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function VideoDelete() {
    const [pictures, setpictures] = useState([{ id: 0, title: '', movie: '', url: '', subscribed: false }]);
    const [error, setError] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:5566/pictures/${params.id}`
        }).then(response => {
            setpictures(response.data);
        })
    }, []);

    function handleDelete() {
        axios.delete(`http://127.0.0.1:5566/deletepicture/${params.id}`)
            .then(() => {
                navigate("/services");
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    setError("Error deleting the picture: Picture not found.");
                } else {
                    setError("An error occurred while deleting the picture.");
                }
                console.error("Error deleting the picture", error);
            });
    }

    return (
        <div>
            <h2>Delete? Are you sure?
                <button className="btn btn-danger" onClick={handleDelete}>Yes</button>
                <Link className="btn btn-secondary" to="/services">No</Link>
            </h2>
            <div className="card w-50">
                <div className="card-header">
                    <h3>{pictures[0].title}</h3>
                </div>
                <div className="card-body">
                    <iframe src={pictures[0].url} width="100%" height="300" title={pictures[0].title}></iframe>
                </div>
                <div className="card-footer">
                    <h3>{pictures[0].movie}</h3>
                </div>
            </div>
        </div>
    );
}

export default VideoDelete;
