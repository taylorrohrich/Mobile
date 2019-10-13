import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  state = {
    punchline: "",
    setup: ""
  };
  componentDidMount() {
    const response = fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(res => res.json())
      .then(data => {
        const punchline = data.punchline;
        const setup = data.setup;
        this.setState({ setup: setup, punchline: punchline });
      });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.state.setup}</Text>
        <Text>{this.state.punchline}</Text>
      </View>
    );
  }
}
