import React, {Component} from 'react';
import {Popover, PopoverBody} from "reactstrap";
import "./PopoverImageLink.css"

class PopoverImageLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
        <div className="PopoverImageLink">
          <a id={'Popover-' + this.props.id}
             onClick={this.toggle}>{this.props.children}</a>
          <Popover isOpen={this.state.open} placement="bottom"
                   target={'Popover-' + this.props.id}
                   toggle={this.toggle}>
            <PopoverBody>
              <img src={this.props.imgSrc} alt="" />
            </PopoverBody>
          </Popover>
        </div>
    );
  }
}

export default PopoverImageLink;
