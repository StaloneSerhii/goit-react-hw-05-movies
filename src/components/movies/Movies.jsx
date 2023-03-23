import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {searchMovieId} from '../serverApi'

export const Movies = () => {
  const [serch, setSerch] = useSearchParams()
  const [serchMovie, setSerchMovie] = useState('')
  const [getMovies, setGetMovies] = useState([])

  // useEffect(() => {
  //   searchMovieId(serch).then(resp => setGetMovies(resp));
  // }, [serch]);

  const inputFind =(e)=> {
    setSerch(e.target.value)
  }
  console.log(serch);

  return (
<div>
<input type='text' onInput={inputFind}></input>
<button onClick={()=>setSerch({movies: 'hello'})}>send</button>
</div>
  );
};
