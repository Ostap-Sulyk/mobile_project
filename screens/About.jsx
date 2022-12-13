import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function About() {
  return (
    <SafeAreaView>
      <View style={styles.about_container}>
        <Text style={styles.header}>About ParkVRO</Text>
        <Text style={styles.details}>
          Our project is designed to bring Together people who have available
          parking spots And people who cant find a place to park their cars
          Using our app type you will be able to lease your parking spot for a
          fee to other people to generate additional passive income income
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  about_container: {
    marginVertical: 30,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: "100%",
  },
  header: {
    marginTop: 25,
    fontSize: 35,
    fontWeight: "bold",
  },
  details: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    lineHeight: 30,
    width: "80%",
  },
});
