import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: null,
  }
  getMovies = async () => {
    try {
      const {data: {data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');      
      // console.log(movies);
      // return movies;
      this.setState({ movies });
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidMount() {
    await this.getMovies();
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default Home;