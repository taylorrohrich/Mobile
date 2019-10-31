import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Icon name="wine" style={{ color: "#780824" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
