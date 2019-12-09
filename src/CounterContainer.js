import React, { Component } from "react";
import { connect } from "react-redux";

const addAction = {
  type: "ADD"
};

const removeAction = {
  type: "REMOVE"
};

const addtenAction = {
  type: "ADDTEN"
};

const removetenAction = {
  type: "REMOVETEN"
};

const resetAction = {
  type: "RESET"
};

class CounterContainer extends Component {
  render() {
    const { adding, dispatch } = this.props;
    return (
      <div>
        <p>{adding}</p>
        <button onClick={() => dispatch(addAction)}>add 1</button>
        <button onClick={() => dispatch(removeAction)}>remove 1</button>
        <button onClick={() => dispatch(addtenAction)}>+10</button>
        <button onClick={() => dispatch(removetenAction)}>-10</button>
        <button onClick={() => dispatch(resetAction)}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding: state
});

const CounterComponent = connect(mapStateToProps)(CounterContainer);
export default CounterComponent;
