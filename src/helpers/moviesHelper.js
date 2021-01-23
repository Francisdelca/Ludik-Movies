import { baseUrl, apiKey } from "../constants/constants";

export const getPopularMovies = async (page = 1) => {
    const res = await fetch(`${baseUrl}/popular?api_key=${apiKey}&page=${page}`)
    const resJson = await res.json()
    return resJson
}

export const getMovieById = async (id) => {
    const res = await fetch(`${baseUrl}/${id}?api_key=${apiKey}&language=en-US`)
    const resJson = await res.json()
    return resJson
}