import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getMoviesByQuery } from '../../MoviesServise/MoviesService';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Tile from '../../components/Tile';
import NavigationBar from '../../components/NavigationBar';
import NavigationBarLink from '../../components/NavigationBarLink';
import ROUTE from '../../constant/routes.const';
import Background from '../../../assets/images/backgroundMoviesPage.jpg';
import namesButtonConstant from './namesButtonConstant';
import './MoviesPage.scss';


class MoviesPage extends PureComponent {
  state = {
    moviesData: [],
    queryParam: '',
  };

  movieSearch = (formData) => {
    getMoviesByQuery({
      [this.state.queryParam]: formData.searchQuery,
    }).then(({ result }) => { this.setState({ moviesData: result }); });
  };

  onSubmit = (formData) => {
    this.movieSearch(formData);
  };

  onClick = (event) => {
    this.setState({ queryParam: `${event.target.name}` });
    console.log(event.target.name);
  };

  renderMovies() {
    return this.state.moviesData.map(movieData => (
      // todo add response if nothing was found
      <Tile
        // eslint-disable-next-line no-underscore-dangle
        key={movieData._id}
        // eslint-disable-next-line no-underscore-dangle
        id={movieData._id}
        imageURI={movieData.image_URI}
        movieName={movieData.name}
        movieGenres={movieData.genres}
        movieReleaseYear={movieData.release_year}
      />
    ));
  }

  render() {
    if (!localStorage.getItem('token')) {
      this.props.history.push(`${ROUTE.loginPage}`);
    }

    return (
      <div className="movies-page">
        <div className="movies-page__wrapper">
          <NavigationBar>
            <NavigationBarLink route={`${ROUTE.moviesPage}`} name="Movies" />
          </NavigationBar>
          <div className="movies-page__content">
            <div className="movies-page__content-wrapper">
              <Form
                className="movies-page__title"
                onSubmit={this.onSubmit}
              >
                <div
                  className="title__input-wrapper"
                  style={{ backgroundImage: `url(${Background})` }}
                >
                  <span className="title__text">
                  FIND YOUR MOVIE
                  </span>
                  <Input
                    className="title__input"
                    name="searchQuery"
                    placeholder=" Enter search option "
                  />
                  <div className="title-settings">
                    <div className="title-settings__wrapper">
                      <span className="title-settings-text">
                      SEARCH BY
                      </span>
                      <button
                        type="button"
                        className={classNames(
                          'title-settings__search-option', {
                            'title-settings__search-option-active':
                              namesButtonConstant.name === this.state.queryParam,
                          },
                        )}
                        name={`${namesButtonConstant.name}`}
                        onClick={this.onClick}
                      >
                        TITLE
                      </button>
                      <button
                        type="button"
                        className={classNames(
                          'title-settings__search-option', {
                            'title-settings__search-option-active':
                            namesButtonConstant.producer === this.state.queryParam,
                          },
                        )}
                        name={`${namesButtonConstant.producer}`}
                        onClick={this.onClick}
                      >
                        DIRECTOR
                      </button>
                    </div>
                    <div className="title-submit__wrapper">
                      <Button type="submit" className="title-settings__submit">
                        SEARCH
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
              <div className="movies-page__second-title">
                <div className="results__wrapper">
                  <span className="second-title__results">
                    {this.state.moviesData.length}
                    {' '}
                    MOVIES FOUND
                  </span>
                </div>
                <div className="second-title__sort-wrapper">
                  <span className="second-title__sort-type">SORT BY</span>
                  <button className="second-title__sort-button" type="button">
                    release date
                  </button>
                  <button className="second-title__sort-button" type="button">
                    rating
                  </button>
                </div>
              </div>
              <div className="movies-page__movies">
                {this.renderMovies()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MoviesPage);
