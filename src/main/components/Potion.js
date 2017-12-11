import React, {Component} from "react";
import "./Potion.css";
import {Button, FormGroup, Input, Jumbotron, Label} from "reactstrap";
import PopoverButton from "./PopoverButton";
import BrewedPotion from "./BrewedPotion";
import PotionHistory from "./PotionHistory";

class Potion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      potions: ["fizz", "pop", "tonic"],
      brewedPotions: [],
      name: ''
    };

    this.brewRandomPotion = this.brewRandomPotion.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  brewRandomPotion() {
    let pot = this.state.potions[Math.floor(Math.random()
        * this.state.potions.length)];
    this.state.brewedPotions.push({
      name: pot,
      time: new Date()
    });
    this.props.history.push("/potion/" + pot);
  }

  handleChange(event) {
    console.log(event.target.id, event.target.value);
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
              <PopoverButton id="buyPotion" color="primary" popover={(
                  <div>
                    <p>Buying potions is not yet implemented!</p>
                  </div>
              )}>
                Buy
              </PopoverButton>
              <PopoverButton id="sellPotion" color="success" popover={(
                  <div>
                    <p>Selling potions is not yet implemented!</p>
                  </div>
              )}>
                Sell
              </PopoverButton>
              <Button color="warning" disabled={!this.state.name.length}
                      onClick={this.brewRandomPotion}>Brew</Button>
            </div>
          </Jumbotron>
          <BrewedPotion/>
          <PotionHistory potions={this.state.brewedPotions}
                         name={this.state.name}
          />
        </div>
    )
  }
}

export default Potion;