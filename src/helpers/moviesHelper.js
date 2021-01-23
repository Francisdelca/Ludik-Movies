import { baseUrl, apiKey } from "../constants/constants";

export const getPopularMovies = async (page = 1) => {
    const res = await fetch(`${baseUrl}/popular?api_key=${apiKey}&page=${page}`)
    const resJson = await res.json()
    return resJson
}