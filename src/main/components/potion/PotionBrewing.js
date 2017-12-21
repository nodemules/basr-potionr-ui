import React, {Component} from "react";
import PotionCounter from "./PotionCounter";
import PotionBrewed from "./PotionBrewed";
import PotionHistory from "./PotionHistory";
import {PotionService, PotionTypes} from "./Potion";
import {whoami} from "../auth/AuthService";
import {Button, Jumbotron} from "reactstrap";
import "./PotionBrewing.css";
import PotionBrewer from "./PotionBrewer";
import {Route, Switch} from "react-router-dom";
import SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import {configuration} from "../../../config/properties";

const {host, port} = configuration.rest;

let sock, stompClient;

class PotionBrewing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brewedPotion: null,
      brewedPotions: [],
      brewedPotionBatch: [],
      user: whoami()
    };

    this.brewPotion = this.brewPotion.bind(this);
    this.brewRandomPotion = this.brewRandomPotion.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    sock = new SockJS(`https://${host}:${port}/sock/potion`);
    stompClient = Stomp.over(sock);
    stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      stompClient.subscribe('/topic/potion', function (potion) {
        console.log(potion);
      });
      stompClient.send("/sock/potion/name", {}, "foo");
      stompClient.send("/sock/potion/type", {}, "bar");
    });
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

  brewPotion(name) {
    this.setState({
      brewing: name
    });
    this.props.history.push(`/potion/brew/${name}`);
  }

  render() {
    let isHome = "/potion/brew" === this.props.location.pathname;
    return (
        <div className="PotionBrewing">
          <Jumbotron className={`${isHome ? 'jumbotron-md' : 'jumbotron-sm'}`}>
            <h3>Brew 'dem potions</h3>
            <div className="PotionBrewing-potion-actions">
              <Button color="primary"
                      onClick={() => this.brewRandomPotion}>
                Random
              </Button>
            </div>
            <div>
              {
                Object.entries(PotionTypes).map(([k, v], i) => {
                  let type = PotionTypes.findByName(v.name);
                  return (
                      <Button key={i} color={type.getColor()}
                              onClick={() => this.brewPotion(v.name)}
                      >
                        {v.name}
                      </Button>
                  )
                })
              }
            </div>
          </Jumbotron>
          <Switch>
            {
              Object.entries(PotionTypes).map(([k, v], i) => {
                let type = PotionTypes.findByName(v.name);
                return (
                    <Route key={i} path={`/potion/brew/${type.name}`}>
                      <PotionBrewer type={type}/>
                    </Route>
                )
              })
            }
          </Switch>
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

export default PotionBrewing
