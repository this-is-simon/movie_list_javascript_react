import React, { Component } from 'react';
import MovieList from '../components/MovieList.js'

class MovieBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [
        {id: 1, title:'American Psycho', year: 2000},
        {id: 2, title:'American Beauty', year: 1999},
        {id: 3, title:'An American Werewolf in Paris', year: 1997}
      ]
    }
  }

  render(){
    return <div className="movie-box">
      <MovieList />
    </div>

  }



}

export default MovieBox;
