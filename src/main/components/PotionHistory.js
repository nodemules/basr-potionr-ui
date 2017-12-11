import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./PotionHistory.css"
import {Button} from "reactstrap";

class PotionHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFullHistory: false
    }

    this.toggleShowFullHistory = this.toggleShowFullHistory.bind(this);
  }

  static propTypes = {
    potions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.instanceOf(Date)
    })),
    name: PropTypes.string.isRequired
  };

  toggleShowFullHistory() {
    this.setState({
      showFullHistory: !this.state.showFullHistory
    })
  }

  render() {
    let potions = this.props.potions.sort((a, b) => b.time > a.time ? 1 : -1);

    if (!this.state.showFullHistory) {
      potions = potions.slice(0, 10)
    }

    return (
        <div className="PotionHistory">
          {
            this.state.showFullHistory ?
                <Button onClick={this.toggleShowFullHistory}>
                  Close
                </Button>
                : null
          }
          {
            potions.map((pot, i) => (
                <p key={i}
                   className="PotionHistory-potion">[{pot.time.toLocaleTimeString()}]
                  {this.props.name} brewed a {pot.name} potion.</p>
            ))
          }
          {
            this.props.potions.length > 10  && !this.state.showFullHistory ?
                <Button onClick={this.toggleShowFullHistory}>
                  And {this.props.potions.length - 10} more...
                </Button>
                : null
          }
        </div>
    )
  }
}

export default PotionHistory;