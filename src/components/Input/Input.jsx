import React, { PureComponent } from 'react';

import './Input.scss';

class Input extends PureComponent {
  render() {
    return (
      <input
        {...this.props}
        className={`input-component  + ${this.props.className}`}
      />
    );
  }
}

export default Input;
