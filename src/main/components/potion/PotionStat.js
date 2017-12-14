import React, {Component} from "react";
import {
  Badge, Card, CardBody, CardText, CardTitle, Col, Progress
} from "reactstrap";
import PropTypes from "prop-types";
import "./PotionStat.css"
import {PotionTypes} from "./Potion";

class PotionStat extends Component {
  static propTypes = {
    potion: PropTypes.string.isRequired,
    brewed: PropTypes.number
  };

  render() {
    const MAX_PERCENTAGE = 100;
    let potionType = PotionTypes.findByName(this.props.potion);
    let potionColor = potionType.getColor();
    let batchesBrewed = Math.floor(this.props.brewed / MAX_PERCENTAGE);
    let currentBatchPercentage = this.props.brewed % MAX_PERCENTAGE;

    return (
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <Badge color={potionColor}>{this.props.potion}</Badge>
              </CardTitle>
              <CardText>
                <span>
                  {batchesBrewed}
                  <br/>
                  batches brewed
                </span>
              </CardText>
              <Progress className="PotionStat-progress"
                        striped
                        color={potionColor}
                        value={currentBatchPercentage}
              >
                <span className="PotionStat-percentageText">
                  {currentBatchPercentage} / {MAX_PERCENTAGE}
                </span>
              </Progress>
            </CardBody>
          </Card>
        </Col>
    )
  }
}

export default PotionStat;