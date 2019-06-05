import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './NavigationBarLink.scss';

class NavigationBarLink extends PureComponent {
  render() {
    const location = this.props.location.pathname;
    const buttonClassName = classNames({
      'navigation-bar-link': location !== this.props.route,
      'navigation-bar-link__active': location === this.props.route,
    });
    return (
      <Link
        to={`${this.props.route}`}
        className={buttonClassName}
      >
        {this.props.name}
      </Link>
    );
  }
}

NavigationBarLink.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withRouter(NavigationBarLink);
