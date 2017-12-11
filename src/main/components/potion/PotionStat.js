import React, {Component} from "react";
import {
  Badge,
  Card, CardBody, CardText, CardTitle, Col, Container, Progress, Row
} from "reactstrap";
import PropTypes from "prop-types";
import "./PotionStat.css"

class PotionStat extends Component {
  static propTypes = {
    potion: PropTypes.string.isRequired,
    brewed: PropTypes.number
  };

  static getPotionColor(name) {
    switch (name) {
      case "magic":
        return "danger";
      case "fizz":
        return "warning";
      case "pop":
        return "success";
      case "tonic":
        return "info";
      default:
        return "";
    }
  }

  render() {
    const MAX_PERCENTAGE = 100;
    let potionColor = PotionStat.getPotionColor(this.props.potion);
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
                <div>
                  <p>
                    {batchesBrewed}
                    <br/>
                    batches brewed
                  </p>
                </div>
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