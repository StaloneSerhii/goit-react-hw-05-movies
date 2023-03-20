import axios from 'axios';

const URL_BASA = 'https://api.themoviedb.org/3/trending/movie/week';
const key = 'e74f8e13c620ae3b84b14599ba3d0b44';

async function fetchData(q) {
  try {
    const resp = await axios.get(`${URL_BASA}?api_key=${key}`);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

export { fetchData };
