import axios from "axios";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import extra1 from '../images/extra5.jpg';
import { Link } from "react-router-dom";


function VideoDetails() {
    const theme = useTheme();
    const [pictures, setpictures] = useState([{ id: 0, title: '', movie: '', url: '', subscribed: false }]);
    const params = useParams()
    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:5566/pictures/${params.id}`
        }).then(response => {
            setpictures(response.data);
        })
    }, []);
    return (
        <>
            <div className="card w-50">
                <div className="card-header">
                    <h3>{pictures[0].title}</h3>
                </div>
                <div className="card-body">

                    <iframe src={pictures[0].url} width="100%" height="300"></iframe>
                </div>
                <div className="card-footer">
                    <h3>{pictures[0].movie}</h3>
                </div>
            </div>
            <div className="text-center mt-4 p-2"><Link to="/services">Back to details</Link></div>
        </>


    )
}
export default VideoDetails;