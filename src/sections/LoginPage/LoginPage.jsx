import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './LoginPage.scss';
import ROUTE from '../../constant/routes.const';
import { login } from '../../AuthService/AuthService';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../../assets/images/backgroundSingInSignUp.jpg';

class LoginPage extends PureComponent {
  onLogIn = (formData) => {
    login(formData)
      .then((response) => {
        localStorage.setItem('token', response.token);
        if (response.token) {
          this.props.history.push(`${ROUTE.moviesPage}`);
        }
      });
  };

  onSubmit = ((formData) => {
    this.onLogIn(formData);
  });

  render() {
    return (
      <div className="login-page">
        <div
          className="login-page__wrapper"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="login-page__title">
            <Link
              className="login-page__navigation-link login-page-navigation-link__sign-in"
              to={ROUTE.loginPage}
            >
              SIGN IN
            </Link>
            <Link
              className="login-page__navigation-link login-page-navigation-link__sign-up"
              to={ROUTE.registrationPage}
            >
              SIGN UP
            </Link>
          </div>

          <Form
            className="login-page__body"
            onSubmit={this.onSubmit}
          >
            <div className="login-page__input-group">
              <span className="login-page__input-label">Email</span>
              <Input className="login-page__input" type="email" name="email" placeholder=" example@gmail.com " />
            </div>
            <div className="login-page__input-group">
              <span className="login-page__input-label">Password</span>
              <Input
                className="login-page__input"
                type="password"
                name="password"
                placeholder="********"
                maxLength="30"
                minLength="8"
              />
            </div>
            <Button
              className="login-page__button"
              type="submit"
            >
              LogIn
            </Button>
            <hr className="login-page__divider" />
            <div className="login-page__forgot-wrapper">
              <Link className="forgot-wrapper__link" to={ROUTE.forgotPasswordPage}> Forgot Password? </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LoginPage);
