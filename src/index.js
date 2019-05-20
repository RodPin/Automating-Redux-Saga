import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAction } from "./reducers";
import _merge from "lodash/merge";
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Counter: {this.props.counter}</Text>
        <Button
          title="+"
          onPress={() => {
            this.props.addSaga();
          }}
          color="#00802b"
          width={100}
        />
        <Button
          title="-"
          onPress={() => {
            this.props.removeSaga();
          }}
          color="#ff3333"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
const mapStateToProps = ({ counter }) => {
  return {
    counter: counter.counter
  };
};

// here you call and merge all saga , and each saga will call each reducer you choose to
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    _merge(getAction("ADD_SAGA"), getAction("REMOVE_SAGA")),
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
