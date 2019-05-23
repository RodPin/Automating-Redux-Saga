import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAction } from "./reducers/index";
import _merge from "lodash/merge";
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Clicks Counter: {this.props.counter}</Text>
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
        <View style={styles.container}>
          <Text>Shirt: {this.props.selectedShirt} </Text>
          <Text>Player: {this.props.selectedPlayer} </Text>
          <Button
            title="Lionel Messi"
            onPress={() => {
              this.props.setPlayerSaga("Messi");
            }}
            color="#42dcf4"
            width={100}
          />
          <Button
            title="Cristiano Ronaldo"
            onPress={() => {
              this.props.setPlayerSaga("Ronaldo");
            }}
            color="#ff3333"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
const mapStateToProps = ({ counter, player, shirt }) => {
  return {
    counter: counter.counter,
    selectedPlayer: player.selectedPlayer,
    selectedShirt: shirt.selectedShirt
  };
};

// here you call and merge all saga , and each saga will call each reducer you choose to
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    _merge(
      getAction("ADD_SAGA"),
      getAction("REMOVE_SAGA"),
      getAction("SET_PLAYER_SAGA")
    ),
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
