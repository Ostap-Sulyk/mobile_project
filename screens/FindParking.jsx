import { useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

export default function FindParking() {
  const [my_location, set_my_location] = useState({
    latitude: 43.620495,
    longitude: -79.513199,
  });
  const [destination_location, set_destination] = useState({
    latitude: 43.620495,
    longitude: -79.513199,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      set_my_location({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          set_destination({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          });
        }}
        query={{
          key: "AIzaSyBhv-H2KCHl1GH_rf3o22-p5UybSwJfzSU", // for production i will not use this method but for simplicity of education this will be sufficient
          language: "en",
          components: "country:ca",
          type: "address",
          radius: 5000,
          location: `${destination_location.latitude},${destination_location.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: {
            backgroundColor: "#E5E9F0",
          },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: my_location.latitude,
          longitude: my_location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: destination_location.latitude,
            longitude: destination_location.longitude,
          }}
        >
          <Callout>
            <Text>Destination</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={my_location}
          onDragEnd={(event) => {
            set_my_location({
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I am here</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
