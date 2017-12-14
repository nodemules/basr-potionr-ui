import React, {Component} from "react";
import "./PotionBrewingLayout.css";
import {Button, Jumbotron} from "reactstrap";
import PopoverButton from "../../PopoverButton";
import PotionBrewed from "../PotionBrewed";
import PotionHistory from "../PotionHistory";
import PotionCounter from "../PotionCounter";
import PotionService from "../Potion";
import {isLoggedIn, whoami} from "../../auth/AuthService";
import {Redirect} from "react-router-dom";

class PotionBrewingLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brewedPotion: null,
      brewedPotions: [],
      brewedPotionBatch: [],
      user: whoami()
    };

    this.brewRandomPotion = this.brewRandomPotion.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  brewRandomPotions(num) {
    let pots = [];
    for (let i = 0; i < num; i++) {
      pots.push(PotionService.brewRandomPotion());
    }
    this.setState({
      brewedPotion: null,
      brewedPotions: [...this.state.brewedPotions, ...pots],
      brewedPotionBatch: pots
    });
  }

  brewRandomPotion() {
    let pot = PotionService.brewRandomPotion();
    this.setState({
      brewedPotion: pot,
      brewedPotions: [...this.state.brewedPotions, pot],
      brewedPotionBatch: []
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    if (!isLoggedIn()) {
      return <Redirect to="/login"/>;
    }
    return (
        <div className="Potion">
          <Jumbotron className="Potion-tron">
            <div className="Potion-tron-brewr">
              <h2>
                {this.state.user.username}
              </h2>
              <p>
                Get started <code>basr</code> 'ing your finest potions!
              </p>
            </div>
            <div className="Potion-tron-buttons">
              <PopoverButton id="buyPotion"
                             color="primary"
                             popover={(
                                 <div>
                                   <p>Buying potions is not yet
                                     implemented!</p>
                                 </div>
                             )}
              >
                Buy
              </PopoverButton>
              <PopoverButton id="sellPotion"
                             color="success"
                             popover={(
                                 <div>
                                   <p>Selling potions is not yet
                                     implemented!</p>
                                 </div>
                             )}
              >
                Sell
              </PopoverButton>
              <Button color="warning" onClick={this.brewRandomPotion}>
                Brew
              </Button>
              <Button color="warning-dark"
                      onClick={() => this.brewRandomPotions(10)}>
                Brew x10
              </Button>
              <Button color="danger"
                      onClick={() => this.brewRandomPotions(100)}>
                Brew x100
              </Button>
            </div>
          </Jumbotron>
          <PotionCounter potions={this.state.brewedPotions}/>
          <PotionBrewed potion={this.state.brewedPotion}
                        batch={this.state.brewedPotionBatch}/>
          <PotionHistory potions={this.state.brewedPotions}
                         name={this.state.user.username}
          />
        </div>
    )
  }
}

export default PotionBrewingLayout;