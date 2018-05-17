import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import SearchBar from "react-native-searchbar";

const items = [
  '1', '2', '3', '4'
];

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: {
        latitude: 6.5244,
        longitude: 3.3792
      }
    };
  }

  render() {
    return (
      <View>
        { items.length > 0 ? <Text style={styles.black} >Im here</Text> : <Text>Im not here</Text>  }
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
            coordinate={this.state.coordinate}
            title="Drag me to change coordinates"
            description="I am Alive"
          />
        </MapView>
        <SearchBar ref={ (ref)=> this.searchBar=ref} placeholder="Search here for products and i'll lead you to them" hideBack={true} fontSize={10} data={items} showOnLoad/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 600,
    height: 600,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  black:{
    color: 'black'
  }
});

