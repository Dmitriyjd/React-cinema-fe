import React, { PureComponent } from 'react';

import './Button.scss';

class Button extends PureComponent {
  render() {
    return (
      <button
        {...this.props}
        className={`button-component  + ${this.props.className}`}
      />
    );
  }
}

export default Button;
