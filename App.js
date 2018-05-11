/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          latlng: { latitude: 6.3, longitude: 3.0 },
          title: "Initial marker",
          description: "Dunno what to put here"
        },
        {
          latlng: { latitude: 6.2, longitude: 3.0 },
          title: "Second marker",
          description: "Dunno what to put here"
        },
        {
          latlng: { latitude: 6.1, longitude: 3.0 },
          title: "Third marker",
          description: "Dunno what to put here"
        }
      ],
      currentLocation: { latitude: 6.5244, longitude: 3.3792 }
    };
  }
  render() {
    console.log("In render method");
    return (
      <MapView
        style={styles.container}
        region={{
          latitude: 6.5244,
          longitude: 3.3792,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        loadingEnabled={true}
      >
        <Marker
          draggable
          coordinate={this.state.currentLocation}
          onDragEnd={e =>
            this.setState({ currentLocation: e.nativeEvent.coordinate })
          }
          title="Drag me to change coordinates"
          description="Make alive"
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
