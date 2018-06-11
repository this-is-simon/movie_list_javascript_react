import React from 'react';
import Movie from './Movie.js'

const MovieList = (props) => {

  const movieNodes = props.movies.map(movie => {
    return <Movie title={movie.title} year={movie.year} key={movie.id}></Movie>
  })

  return(
  <div>
    {movieNodes}
  </div>)
}

export default MovieList;
