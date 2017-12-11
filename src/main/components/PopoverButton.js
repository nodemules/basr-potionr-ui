import React, {Component} from 'react';
import {Button, Popover, PopoverBody} from "reactstrap";
import "./PopoverButton.css"
import PropTypes from "prop-types";

class PopoverButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  static propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string
  };

  render() {
    let {active, block, color, disabled, tag, size} = this.props;
    let buttonProps = {
      active,
      block,
      color,
      disabled,
      tag,
      size
    };

    return (
        <div className="PopoverButton">
          <Button {...buttonProps}
                  id={'PopoverButton-' + this.props.id}
                  onClick={() => {
                    this.toggle();
                    if (this.props.onClick
                        && typeof this.props.onClick === 'function') {
                      this.props.onClick();
                    }
                  }}
          >
            {this.props.children}
          </Button>
          <Popover className="PopoverButton-popover" isOpen={this.state.open} placement="bottom"
                   target={'PopoverButton-' + this.props.id}
                   toggle={this.toggle}>
            <PopoverBody>
              {this.props.popover}
            </PopoverBody>
          </Popover>
        </div>
    );
  }
}

export default PopoverButton;
