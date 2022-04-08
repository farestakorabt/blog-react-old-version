import React, { Component } from "react";
import "./Compteur.css";
import Resultat from "../ComposantsRedux/Resultat/Resultat.js";
import IncrBtn from "../ComposantsRedux/IncrBtn/IncrBtn.js";
import { connect } from "react-redux";

class Compteur extends Component {
  state = {
    compteur: 0,
  };

  calcul = (action) => {
    if (action === "plus1") {
      this.setState((prevState) => {
        return { compteur: prevState.compteur + 1 };
      });
    }
    if (action === "moins1") {
      this.setState((prevState) => {
        return { compteur: prevState.compteur - 1 };
      });
    }
  };

  render() {
    return (
      <div className="cont">
        <div className="blocConmpt">
          <Resultat valeur={this.props.ctr} />
        </div>
        <div className="contBtn">
          <IncrBtn txt="Increment" clicked={this.props.increment} />
          <IncrBtn txt="Decrement" clicked={this.props.decrement} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.compteur,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
