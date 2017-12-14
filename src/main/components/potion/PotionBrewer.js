import React, {Component} from "react";
import {Alert} from "reactstrap";

class PotionBrewer extends Component {
  render() {
    let type = this.props.type;
    return (
        <div>
          <Alert color={type.color}>{type.name}</Alert>
        </div>
    )
  }
}

export default PotionBrewer;