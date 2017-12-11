import React, {Component} from "react";
import "./PotionBrewing.css";
import {Button, FormGroup, Input, Jumbotron, Label} from "reactstrap";
import PopoverButton from "../PopoverButton";
import BrewedPotion from "./PotionBrewed";
import PotionHistory from "./PotionHistory";
import PotionCounter from "./PotionCounter";

class PotionBrewing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      potions: ["fizz", "pop", "tonic", "magic"],
      brewedPotions: [],
      brewedPotionBatch: [],
      name: ''
    };

    this.brewPotion = this.brewPotion.bind(this);
    this.brewRandomPotion = this.brewRandomPotion.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  brewRandomPotions(num) {
    let pots = [];
    for (let i = 0; i < num; i++) {
      pots.push(this.brewRandomPotion());
    }
    this.setState({
      brewedPotions: [...this.state.brewedPotions, ...pots],
      brewedPotionBatch: pots
    });
    this.props.history.push("/potion");
  }

  brewPotion() {
    let pot = this.brewRandomPotion();
    this.setState({
      brewedPotions: [...this.state.brewedPotions, pot],
      brewedPotionBatch: []
    });
    this.props.history.push("/potion/" + pot.name);
  }

  brewRandomPotion() {
    let pot = this.state.potions[Math.floor(Math.random()
        * this.state.potions.length)];
    return {
      name: pot,
      time: new Date()
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
        <div className="Potion">
          <Jumbotron className="Potion-tron">
            <div className="Potion-tron-brewr">
              <p>Get started <code>basr</code> 'ing your finest potions!</p>
              <FormGroup>
                <Label>Name</Label>
                <Input value={this.state.name}
                       id="name"
                       onChange={this.handleChange}
                       placeholder="Enter a name to brew potions"
                />
              </FormGroup>
            </div>
            <div className="Potion-tron-buttons">
              <PopoverButton id="buyPotion"
                             color="primary"
                             popover={(
                                 <div>
                                   <p>Buying potions is not yet implemented!</p>
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
                      disabled={!this.state.name.length}
                      onClick={this.brewPotion}
              >
                Brew
              </Button>
              <Button color="warning-dark"
                      disabled={!this.state.name.length}
                      onClick={() => this.brewRandomPotions(10)}
              >
                Brew x10
              </Button>
              <Button color="danger"
                      disabled={!this.state.name.length}
                      onClick={() => this.brewRandomPotions(100)}
              >
                Brew x100
              </Button>
            </div>
          </Jumbotron>
          <PotionCounter potions={this.state.brewedPotions}/>
          <BrewedPotion batch={this.state.brewedPotionBatch}/>
          <PotionHistory potions={this.state.brewedPotions}
                         name={this.state.name}
          />
        </div>
    )
  }
}

export default PotionBrewing;