import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const myApp = name => {
//   return <div>Hello {name}</div>;
// };

// class MyApp extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         Hello, {this.props.name}, welcome to {this.props.course}!
//       </div>
//     );
//   }
// }

// myApp() == <MyApp/> || myApp(taylor)
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
