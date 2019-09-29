import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Header</Text>
      </View>
    );
  }
}
