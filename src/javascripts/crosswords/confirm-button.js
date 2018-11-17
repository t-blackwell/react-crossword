import React, { Component } from 'react';
import { classNames } from 'crosswords/classNames';

const timeout = 2000;

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirming: false,
    };
  }

  confirm() {
    if (this.state.confirming) {
      this.setState({
        confirming: false,
      });
      this.props.onClick();
    } else {
      this.setState({
        confirming: true,
      });
      setTimeout(() => {
        this.setState({
          confirming: false,
        });
      }, timeout);
    }
  }

  render() {
    const inner = this.state.confirming
      ? `Confirm ${this.props.text.toLowerCase()}`
      : this.props.text;

    const classes = {};
    const className = classNames(
      ((classes[
        'crossword__controls__button--confirm'
      ] = this.state.confirming),
      (classes[this.props.className] = true),
      classes),
    );
    const props = {
      'data-link-name': this.props['data-link-name'],
      onClick: this.confirm.bind(this),
      className,
    };

    return <button {...props}>{inner}</button>;
  }
}

export { ConfirmButton };
