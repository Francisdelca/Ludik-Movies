import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const[movieDetail, setMovieDetail] = useState([])
    let { id } = useParams()

    useEffect(() => {

    },[])
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
}

export default MovieDetail;