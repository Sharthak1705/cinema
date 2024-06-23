import axios from "axios";

const BASE_URL ='https://api.themoviedb.org/3';

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2Q3NGMyMTBmNGJjYzNiODczNzBmNmVhNjFiYTU5OCIsInN1YiI6IjY2NDIxN2RiMDhjZDUwOGFjZmMxYTNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uitA7slS-odkaBYFqJwZb6QEk-WR7g19rtb2p-cXxis";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};