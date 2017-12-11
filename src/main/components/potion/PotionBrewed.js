import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Alert} from "reactstrap";
import PropTypes from "prop-types";

class PotionBrewed extends Component {
  static propTypes = {
    batch: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.instanceOf(Date)
    }))
  };

  render() {
    let isBatch = this.props.batch.length > 0;
    return (
        <div>
          {
            isBatch ? //
                <div>
                  <Alert color="dark">
                    You brewed {this.props.batch.length} potions!
                  </Alert>
                </div>
                : null
          }
          <Route path="/potion/fizz" render={() => (
              <div>
                <Alert color="warning">Made a fizzy potion!</Alert>
              </div>
          )}/>
          <Route path="/potion/pop" render={() => (
              <div>
                <Alert color="success">Made a poppy potion!</Alert>
              </div>
          )}/>
          <Route path="/potion/tonic" render={() => (
              <div>
                <Alert color="info">Made a tonic potion!</Alert>
              </div>
          )}/>
          <Route path="/potion/magic" render={() => (
              <div>
                <Alert color="danger">Made a magic potion!</Alert>
              </div>
          )}/>
        </div>
    );
  }
}

export default PotionBrewed;