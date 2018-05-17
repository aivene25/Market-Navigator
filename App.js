
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Map from './src/Map';
import Settings from './src/Settings'
import Profile from './src/Profile'

export default createBottomTabNavigator(
  {
    Home: Map,
    Settings: Settings,
    Profile: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon:  () => {
        return <Icon name="ios-home-outline" size={25}  />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "gray"
    }
  }
);
