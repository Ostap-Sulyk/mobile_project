import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

const image = require("../assets/safety.jpeg");

export default function Safety() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.disclosure}>
          We want you to move freely, make the most of your time, and be
          connected to the people and places that matter most to you. That’s why
          we’re committed to safety—from the creation of new standards to the
          development of technology with the aim of reducing incidents.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#f2f2f2",
    width: "80%",
    padding: 22,
    borderRadius: 20,
  },
  disclosure: {
    fontSize: 23,
    textAlign: "center",
    lineHeight: 35,
    color: "#2f2f2f",
  },
});
