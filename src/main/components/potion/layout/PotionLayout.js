import React, {Component} from "react";
import "./PotionLayout.css";
import {Button, Jumbotron} from "reactstrap";
import PopoverButton from "../../PopoverButton";
import {isLoggedIn, whoami} from "../../auth/AuthService";
import {Redirect, Route, Switch} from "react-router-dom";
import PotionBrewing from "../PotionBrewing";

class PotionLayout extends Component {

  render() {
    if (!isLoggedIn()) {
      return <Redirect to="/login"/>;
    }
    let user = whoami();
    let isHome = "/potion" === this.props.location.pathname;
    return (
        <div className="Potion">
          <Jumbotron className={`${ isHome ? '' : 'jumbotron-sm' }`}>
            {
              isHome ? //
                  <div className="Potion-tron-brewr">
                    <h2>
                      {user.username}
                    </h2>
                    <p>
                      Get started <code>basr</code> 'ing your finest potions!
                    </p>
                  </div>
                  : null
            }
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
                      onClick={() => this.props.history.push('/potion/brew')}>
                Brew
              </Button>
            </div>
          </Jumbotron>
          <Switch>
            <Route path="/potion/brew" component={PotionBrewing}/>
          </Switch>
        </div>
    )
  }
}

export default PotionLayout;