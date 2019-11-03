import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCtCU1JDYTBVBH5atkmGf1vN96DSaDVlEc",
  authDomain: "mobileex-b11a4.firebaseapp.com",
  databaseURL: "https://mobileex-b11a4.firebaseio.com",
  projectId: "mobileex-b11a4",
  storageBucket: "mobileex-b11a4.appspot.com",
  messagingSenderId: "89797583674",
  appId: "1:89797583674:web:b475e0a0d2763015bea603"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  state = {
    input: "",
    data: ""
  };
  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .on("value", snapshot => {
        if (snapshot && snapshot.val()) {
          const data = snapshot.val();
          this.setState({ data });
        }
      });
  }
  submit = () => {
    firebase
      .database()
      .ref("/")
      .set(this.state.input);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Type below to send to firebase!</Text>
        <TextInput
          style={{ height: 50, width: 400, backgroundColor: "grey" }}
          onChangeText={e => this.setState({ input: e })}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text>send it up!</Text>
        </TouchableOpacity>
        <Text>{this.state.data}</Text>
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
