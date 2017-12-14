import React, {Component} from "react";
import {Alert} from "reactstrap";
import PropTypes from "prop-types";
import {PotionTypes} from "./Potion";

class PotionBrewed extends Component {
  static propTypes = {
    batch: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.instanceOf(Date)
    }))
  };

  render() {
    let isBatch = this.props.batch.length > 0;
    if (isBatch) {
      return (
          <Alert color="dark">
            You brewed {this.props.batch.length} potions!
          </Alert>
      )
    }
    let potion = this.props.potion;
    if (!potion) {
      return null;
    }
    let type = PotionTypes.findByName(potion.name);
    return (
        <Alert color={type.getColor()}>
          Made a {potion.name} potion!
        </Alert>
    );
  }
}

export default PotionBrewed;