import React from "react";
import { FlatList, Image, SafeAreaView, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import PostComponent from "../components/PostComponent";

const parkings = [
  {
    uri: "1",
    address: "Park Lawn",
  },
  {
    uri: "2",
    address: "Mulgrove Dr",
  },
  {
    uri: "3",
    address: "West Mall",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={parkings}
        renderItem={PostComponent}
        keyExtractor={(parking) => parking.uri}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  menu: {
    backgroundColor: "#0D0D0D",
  },
  post_container: {
    marginVertical: 20,
    backgroundColor: "#D9D9D9",
    marginBottom: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  post_header: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 9,
  },
  post_image: {
    width: 300,
    height: 280,
    borderRadius: 8,
  },
});

