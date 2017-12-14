import React, {Component} from "react";
import "./PotionBrewingLayout.css";
import {Button, FormGroup, Input, Jumbotron, Label} from "reactstrap";
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
      potions: ["fizz", "pop", "tonic", "magic"],
      brewedPotions: [],
      brewedPotionBatch: [],
      user: whoami()
    };

    this.brewPotion = this.brewPotion.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  brewRandomPotions(num) {
    let pots = [];
    for (let i = 0; i < num; i++) {
      pots.push(PotionService.brewRandomPotion());
    }
    this.setState({
      brewedPotions: [...this.state.brewedPotions, ...pots],
      brewedPotionBatch: pots
    });
    this.props.history.push("/potion");
  }

  brewPotion() {
    let pot = PotionService.brewRandomPotion();
    this.setState({
      brewedPotions: [...this.state.brewedPotions, pot],
      brewedPotionBatch: []
    });
    this.props.history.push("/potion/" + pot.name);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
        <div>
          {
            !isLoggedIn() ? <Redirect to="/login"/> : //

                <div className="Potion">
                  <Jumbotron className="Potion-tron">
                    <div className="Potion-tron-brewr">
                      <p>Get started <code>basr</code> 'ing your finest potions!
                      </p>
                      <h2>
                        {this.state.user.username}
                      </h2>
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
                      <Button color="warning"
                              disabled={!this.state.user.username.length}
                              onClick={this.brewPotion}
                      >
                        Brew
                      </Button>
                      <Button color="warning-dark"
                              disabled={!this.state.user.username.length}
                              onClick={() => this.brewRandomPotions(10)}
                      >
                        Brew x10
                      </Button>
                      <Button color="danger"
                              disabled={!this.state.user.username.length}
                              onClick={() => this.brewRandomPotions(100)}
                      >
                        Brew x100
                      </Button>
                    </div>
                  </Jumbotron>
                  <PotionCounter potions={this.state.brewedPotions}/>
                  <PotionBrewed batch={this.state.brewedPotionBatch}/>
                  <PotionHistory potions={this.state.brewedPotions}
                                 name={this.state.user.username}
                  />
                </div>
          }
        </div>
    )
  }
}

export default PotionBrewingLayout;