import axios from "axios";

const URL_BASA = 'https://api.themoviedb.org/3/movie/550'
const key = 'e74f8e13c620ae3b84b14599ba3d0b44'

async function fetchData(q, page) {
    try {
    const resp = await axios.get(
        `${URL_BASA}?api_key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
      );
      return resp.data;
    } catch (error) {
        console.error(error);
    }
}

export { fetchData };