import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from "../helpers/moviesHelper";
import Styles from '../styles/movieDetail.module.css'

const MovieDetail = () => {
    const[movieDetail, setMovieDetail] = useState([])
    let { id } = useParams()

    useEffect(() => {
        const getMovie = async () => {
            const movieData = await getMovieById(id)
            if(movieData.id == id){
                setMovieDetail(movieData)
            }
        }
        getMovie()
    },[])

    return (
        <div className={Styles.MovieDetail}>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} alt={movieDetail.title} className={Styles.BackgroundImg}/>
            <h2>{movieDetail.title}</h2>
            <small>{movieDetail.tagline}</small>
            <div>{movieDetail.status}</div>
            <div>{movieDetail.overview}</div>
        </div>
    );
}

export default MovieDetail;