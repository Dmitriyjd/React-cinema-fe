import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './ForgotPasswordPage.scss';

class ForgotPasswordPage extends PureComponent {
  render() {
    return (
      <div className="forgot-password-page">
        <h1>
          Sorry, this page is in development.
        </h1>
        <h1>
          It will be available to use after performing next tasks.
        </h1>
      </div>
    );
  }
}

export default withRouter(ForgotPasswordPage);
