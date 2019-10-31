import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "native-base";
import Home from "./Home";
import Profile from "./Profile";

const tabs = createBottomTabNavigator(
  {
    Home: Home,
    Profile: Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = routeName === "Home" ? "wine" : "pizza";
        return <Icon name={iconName} style={{ color: "#780824" }} />;
      }
    })
  }
);

export default createAppContainer(tabs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
