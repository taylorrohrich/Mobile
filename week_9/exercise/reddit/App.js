import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


class App extends Component {
  state = {
    images: [],
    subreddit: "",
  }
  submit = () => {
    fetch(`https://www.reddit.com/r/${this.state.subreddit}/.json`).then(res => res.json()).then(res => {
      const image = res.data.children[1].data.url;
      console.log(image)
      //need to add firebase here as well
      this.setState({
        images: this.state.images.concat(image),
        subreddit: ""
      })
    }).catch(err => {
      alert("subreddit does not exist")
    })
  }
  componentDidMount() {
    //Add firebase here
  }
  mapImages = () => {
    const images = this.state.images;
    return images.map(url => {
      return <Image style={{ height: 200, width: 200, margin: 25 }} source={{ uri: url }} />
    })
  }
  render() {
    return (
      <View style={{ padding: 50 }}>
        <TextInput value={this.state.subreddit} onChangeText={text => { this.setState({ subreddit: text }) }} />
        <Button onPress={this.submit} title={"Submit!"} />
        < View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {this.mapImages()}
        </View>
      </View >
    );
  }
}

export default App;
