import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { getMoviesByQuery } from '../../MoviesServise/MoviesService';
import './MovieDetailPage.scss';

class MovieDetailPage extends PureComponent {
  state = {
    genres: [],
    name: '',
    releaseYear: 0,
    currentRate: 0,
    duration: 0,
    description: '',
    producer: '',
    imageURI: '',
  };

  componentDidMount() {
    this.movieSearch();
  }

  movieSearch = () => {
    const location = this.props.location.pathname;
    const movieId = location.slice(location.lastIndexOf('/')+1);
    getMoviesByQuery({ _id: movieId })
      .then(({ result: [result] }) => {
        this.setState({
          genres: result.genres,
          name: result.name,
          releaseYear: result.release_year,
          currentRate: result.current_rate,
          duration: result.duration,
          description: result.description,
          producer: result.producer,
          imageURI: result.image_URI,
        });
      });
  };

  render() {
    return (
      <div className="movie-detail-page">
        <div
          className="movie-detail-page__image"
          style={{ backgroundImage: `url(${this.state.imageURI}` }}
        />
        <div className="movie-detail-page__content">
          <div className="movie-detail-page__header">
            <div className="movie-detail-page__left-header">
              <div className="movie-detail-page__name">
                {this.state.name}
              </div>
              <div className="movie-detail-page__genres">
                {this.state.genres.join(' & ')}
              </div>
              <div className="movie-detail-page__release-year-and-duration">
                <div className="movie-detail-page__release-year">
                  {this.state.releaseYear}
                </div>
                <div className="movie-detail-page__duration">
                  {`${this.state.duration} min`}
                </div>
              </div>
            </div>
            <div className="movie-detail-page__rate">
              {this.state.currentRate}
            </div>
          </div>
          <div className="movie-detail-page__description">
            {this.state.description}
          </div>
          <div className="movie-detail-page__director">
            {`Director: ${this.state.producer}`}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetailPage);
