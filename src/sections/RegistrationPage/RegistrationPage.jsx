import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './RegistrationPage.scss';
import ROUTE from '../../constant/routes.const';
import { register } from '../../AuthService/AuthService';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../../assets/images/backgroundSingInSignUp.jpg';

class RegistrationPage extends PureComponent {
  onRegister = (formData) => {
    register(formData)
      .then((response) => {
        localStorage.setItem('token', response.token);
        if (response.token) {
          this.props.history.push(`${ROUTE.moviesPage}`);
        }
      });
  };

  onSubmit = ((formData) => {
    this.onRegister(formData);
  });

  render() {
    return (
      <div className="registration-page">
        <div
          className="registration-page__wrapper"
          style={{ backgroundImage: `url(${Background})`, opacity: 0.9 }}
        >
          <div className="registration-page__title">
            <Link
              className="registration-page__navigation-link registration-page-navigation-link__sign-in"
              to={ROUTE.loginPage}
            >
              SIGN IN
            </Link>
            <Link
              className="registration-page__navigation-link registration-page-navigation-link__sign-up"
              to={ROUTE.registrationPage}
            >
              SIGN UP
            </Link>
          </div>

          <Form
            className="registration-page__body"
            onSubmit={this.onSubmit}
          >
            <div className="registration-page__input-group">
              <span className="registration-page__input-label">Email</span>
              <Input
                className="registration-page__input"
                type="email"
                name="email"
              />
            </div>
            <div className="registration-page__input-group">
              <span className="registration-page__input-label">Password</span>
              <Input
                className="registration-page__input"
                type="password"
                name="password"
              />
            </div>
            <Button
              className="registration-page__button"
              type="submit"
            >
              Create Account
            </Button>
            <hr className="registration-page__divider" />
          </Form>
        </div>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(RegistrationPage);
