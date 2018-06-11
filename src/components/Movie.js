import React from 'react';

const Movie = (props) => {
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.year}</p>
    </div>
  )
}

export default Movie;
