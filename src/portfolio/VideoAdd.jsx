import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function VideoAdd() {
    var navigator = useNavigate();
    const formik = useFormik({
        initialValues: {
            id: 0,
            title: "",
            movie: "",
            url: "",
            subscribed: false
        },
        onSubmit: (values) => {
            axios({
                method: "post",
                url: "http://127.0.0.1:5566/addpicture",
                data: values
            })
            alert(`picture added succesfully`);
            navigator("/services");
        }
    });

    return (
        <div>
            <h2>Video Add</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Picture ID</dt>
                    <dd><input type="number" name="id" onChange={formik.handleChange} /></dd>

                    <dt>Picture Title</dt>
                    <dd><input type="text" name="title" onChange={formik.handleChange} /></dd>

                    <dt>Picture Movie</dt>
                    <dd><input type="text" name="movie" onChange={formik.handleChange} /></dd>
                    <dt>URL</dt>
                    <dd><input type="text" name="url" onChange={formik.handleChange} /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.subscribed} name="subscribed" onChange={formik.handleChange} /></dd>
                </dl>
                <button type="submit" className="btn btn-primary">Add Video</button>
            </form>
        </div>
    )
}
export default VideoAdd;