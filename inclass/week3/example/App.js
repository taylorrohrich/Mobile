// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         <View style={{ width: 50, height: 50,flex: 1, backgroundColor: "red" }}>
//           <Text> Red box</Text>
//         </View>
//         <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
//         <View
//           style={{ width: 50, height: 50, backgroundColor: "green" }}
//         ></View>
//       </View>
//     );
//   }
// }
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    let newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  };

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
        <Text>{this.state.counter}</Text>
        <TouchableOpacity onPress={this.incrementCounter}>
          <Text>Click me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends React.Component {
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
        <Header />
        <Body message={"hello from App.js!"} />
        <Footer />
      </View>
    );
  }
}
