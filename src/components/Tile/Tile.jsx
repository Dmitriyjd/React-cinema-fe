import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTE from '../../constant/routes.const';
import './Tile.scss';

class Tile extends PureComponent {
  // todo remake it in  func components wrapped in react.memo
  render() {
    return (
      <Link
        className="tile"
        to={`${ROUTE.movieDetailsPage}/${this.props.id}`}
      >
        <div
          className="tile__image"
          style={{ backgroundImage: `url(${this.props.imageURI}` }}
        />
        <div className="tile__details">
          <div className="tile__name-and-genres">
            <div className="tile__name">
              { this.props.movieName }
            </div>
            <div className="tile__genres">
              { this.props.movieGenres.join(' & ') }
            </div>
          </div>
          <div className="tile__release-year-wrapper">
            <div className="tile__release-year">
              { this.props.movieReleaseYear }
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

Tile.defaultProps = {
  imageURI: '',
};

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  imageURI: PropTypes.string,
  movieName: PropTypes.string.isRequired,
  movieGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieReleaseYear: PropTypes.number.isRequired,
};

export default Tile;
