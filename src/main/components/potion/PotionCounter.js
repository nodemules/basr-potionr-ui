import React, {Component} from "react";
import {Container, Row} from "reactstrap";
import PropTypes from "prop-types";
import "./PotionCounter.css"
import PotionStat from "./PotionStat";

class PotionCounter extends Component {
  static propTypes = {
    potions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.instanceOf(Date)
    }))
  };

  static getPotionStats(potions) {
    let map = potions
    .map(({name}) => name)
    .reduce((names, name) => {
      const count = names[name] || 0;
      names[name] = count + 1;
      return names;
    }, {});

    return Object.entries(map).sort(([a], [b]) => {
      return a > b ? 1 : -1;
    });
  }

  render() {
    let potionStats = PotionCounter.getPotionStats(this.props.potions);
    return (
        <Container className="PotionCounter">
          <Row>
            {
              potionStats.map(([k, v], i) => {
                return (
                    <PotionStat key={i} potion={k} brewed={v} />
                )
              })
            }
          </Row>
        </Container>
    );
  }
}

export default PotionCounter;