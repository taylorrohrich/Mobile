// import React from "react";
// import { StyleSheet, Text, View, TextInput } from "react-native";

// export default class App extends React.Component {
//   state = {
//     punchline: "",
//     setup: ""
//   };
//   componentDidMount() {
//     const response = fetch(
//       "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//     )
//       .then(res => res.json())
//       .then(data => {
//         const punchline = data.punchline;
//         const setup = data.setup;
//         this.setState({ setup: setup, punchline: punchline });
//       });
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>{this.state.setup}</Text>
//         <Text>{this.state.punchline}</Text>
//       </View>
//     );
//   }
// }
// import React from "react";
// import { StyleSheet, Text, View, TextInput } from "react-native";

// export default class App extends React.Component {
//   state = {};
//   componentDidMount() {
//     const response = fetch("https://api.devhub.virginia.edu/v1/courses")
//       .then(res => res.json())
//       .then(data => {
//         const classes = data.class_schedules.records;
//         const newClasses = classes.filter(course => {
//           return course[course.length - 1] === "2018 Summer";
//         });
//         console.log(newClasses);
//       });
//     this.setState({
//       classes: newClasses
//     });
//     // myArray=[1,2,3,4,5,6,7,8]
//     // smallArray = myArray.filter(num=>{
//     //   return num < 5;
//     // })
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hi</Text>
//       </View>
//     );
//   }
// }
