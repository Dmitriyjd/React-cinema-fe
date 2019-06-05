import React, { PureComponent } from 'react';

class Form extends PureComponent {
  state = {};

  onChange = ((event) => {
    this.setState({ [event.target.name]: event.target.value });
  });

  onSubmit = ((event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  });

  render() {
    return (
      <form
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
