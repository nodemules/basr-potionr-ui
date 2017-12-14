import React, {Component} from "react";
import {Alert, Button, Progress} from "reactstrap";
import "./PotionBrewer.css";

class PotionBrewer extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.brewPotion = this.brewPotion.bind(this);
  }

  brewPotion() {
    this.setState({
      progress: 0
    });
    let id;
    let brew = () => {
      this.setState({
        progress: Math.ceil(this.state.progress + Math.random() * 4)
      });
      if (this.state.progress >= 100) {
        clearInterval(id);
      }
    };
    id = setInterval(brew, 1000);
  }

  render() {
    let type = this.props.type;
    let brewing = this.state.progress > 0 && this.state.progress < 100;
    let completed = this.state.progress >= 100;
    return (
        <div className="PotionBrewer">
          <h2>Brewing {type.name} potions!</h2>
          <Button id={type.name} color={type.color}
                  onClick={this.brewPotion}
                  disabled={brewing}>
            {
              brewing ? 'Brewing...' : 'Brew'
            }
          </Button>
          {
            completed ? //
                <Alert color={type.color}>
                  {type.name} potion completed brewing!
                </Alert>
                : null
          }
          {
            this.state.progress <= 100 ? //
                <Progress className="PotionBrewer-progress"
                          animated
                          striped
                          value={this.state.progress}
                          color={type.color}>
                  <span className="PotionBrewer-progress-text">
                  {this.state.progress} %
                  </span>
                </Progress>
                : null
          }

        </div>
    )
  }
}

export default PotionBrewer;