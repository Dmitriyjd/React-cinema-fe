import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import ROUTE from '../../constant/routes.const';
import './NavigationBar.scss';

class NavigationBar extends PureComponent {
  onClick = () => {
    localStorage.removeItem('token');
    this.props.history.push(`${ROUTE.loginPage}`);
  };

  render() {
    if (!localStorage.getItem('token')) {
      this.props.history.push(`${ROUTE.loginPage}`);
      return null;
    }
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    return (
      <div className="navigation-bar__wrapper">
        <div className="navigation-bar">
          {this.props.children}
          <div className="navigation-bar__info">
            <div
              className="info__wrapper"
            >
              <div className="info-data">
                <span className="info-data__text">You logged in as </span>
                <span className="info-data__text">
                  {' '}
                  {decodedToken.data.email}
                </span>
                <button
                  className="info-data__button"
                  type="button"
                  onClick={this.onClick}
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NavigationBar);
