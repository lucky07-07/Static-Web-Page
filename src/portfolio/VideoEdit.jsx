import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, useFormik } from "formik";
import { Navigate } from "react-router-dom";


function VideoEdit() {
    const [pictures, setpictures] = useState([{ id: 0, title: '', movie: '', url: '', subscribed: false }]);
    const params = useParams()
    const navigator = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:5566/pictures/${params.id}`
        }).then(response => {
            setpictures(response.data);
        })
    }, []);
    const formik = useFormik({
        initialValues: {
            id: pictures[0].id,
            title: pictures[0].title,
            movie: pictures[0].movie,
            url: pictures[0].url,
            subscribed: pictures[0].subscribed
        },
        onSubmit: (values) => {
            axios({
                method: "put",
                url: `http://127.0.0.1:5566/updatepicture/${params.id}`,
                data: values
            })
            alert(`picture edited succesfully`);
            navigator("/services");

        }
    });

    return (
        <div>
            <h2>Edit Video Details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Picture ID</dt>
                    <dd><input type="number" name="id" value={pictures[0].id} onChange={formik.handleChange} /></dd>

                    <dt>Picture Title</dt>
                    <dd><input type="text" name="title" value={pictures[0].title} onChange={formik.handleChange} /></dd>

                    <dt>Picture Movie</dt>
                    <dd><input type="text" name="movie" value={pictures[0].movie} onChange={formik.handleChange} /></dd>
                    <dt>URL</dt>
                    <dd><input type="text" name="url" value={pictures[0].url} onChange={formik.handleChange} /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={pictures[0].subscribed} name="subscribed" onChange={formik.handleChange} /></dd>
                </dl>
            </form>
            <button className="btn btn-success me-2">save</button>
            <Link className="btn btn-warning" to="/services">Cancel</Link>
        </div>
    )
}
export default VideoEdit;