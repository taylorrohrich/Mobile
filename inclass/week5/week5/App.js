import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           style={{ height: 250, width: 250 }}
//           source={{
//             uri:
//               "https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg"
//           }}
//         />
//       </View>
//     );
//   }
// }

export default class App extends React.Component {
  renderMyArray = array => {
    return array.map(arrString => {
      return <Text>{arrString}</Text>;
    });
  };
  render() {
    const myArray = ["hello", "my", "name", "is", "taylor"];
    return <View style={styles.container}>{this.renderMyArray(myArray)}</View>;
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
