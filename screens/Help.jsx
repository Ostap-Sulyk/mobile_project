import React from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const image = require("../assets/help.webp");

const DATA = [
  { id: 1, header: "Bookings" },
  { id: 2, header: "Business" },
  { id: 3, header: "Insurance" },
  { id: 4, header: "Account and Payments" },
];

const Card = ({ header }) => (
  <SafeAreaView>
    <TouchableOpacity
      style={styles.text_container}
      onPress={() => {
        alert("BACKEND MUST BE IMPLEMENTED FOR THIS FEATURE");
      }}
    >
      <Text style={styles.text}>{header}</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
const renderCard = ({ item }) => <Card header={item.header} />;

export default function Help() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          Welcome to ParkVRO Support How can we help?
        </Text>
        <FlatList
          data={DATA}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffc0",
    padding: 20,
    textAlign: "center",
    width: "90%",
    fontSize: 30,
    color: "#2f2f2f",
    fontWeight: "bold",
  },
  image: {
    height: "110%",
    justifyContent: "center",
    paddingBottom: 100,
  },
  text_container: {
    padding: 32,
    margin: 20,
    backgroundColor: "#ffffffc0",
    borderRadius: 8,
  },
  text: {
    color: "#2f2f2f",
    fontSize: 28,
    lineHeight: 64,
    fontWeight: "bold",
    textAlign: "center",
  },
});
