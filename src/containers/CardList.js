import React, { useEffect, useState } from 'react';
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../helpers/moviesHelper";
import Styles from "../styles/cardList.module.css";
import MoreResults from "../components/MoreResults";

const CardList = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const getMovies = async () => {
            let newMovies = movies
            const moviesData = await getPopularMovies(page)
            if(moviesData.results.length && movies.length){
                moviesData.results.map(item => newMovies.push(item))
                setMovies(newMovies)
            }
            else{
                setMovies(moviesData.results)
            }
        }
        getMovies()
    }, [page, movies])

    const moreResults = () => {
        setPage(page + 1)
    }

    return (
        <div className={Styles.container}>
            {movies.map(item => <MovieCard movie={item}/>)}
            <MoreResults action={moreResults}/>
        </div>
    );
}

export default CardList;