import React from "react";
import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PostComponent({ item }) {
  // i know this is ugly, but require(`../assets/parking${item.id}.png`)
  // didn't want to work no matter what
  // TODO: re declare uri
  if (item !== null) {
    let icon;
    if (item.uri === "1") icon = require("../assets/parking1.png");
    else if (item.uri === "2") icon = require("../assets/parking2.png");
    else if (item.uri === "3") icon = require("../assets/parking3.png");

    return (
      <TouchableOpacity
        style={styles.post_container}
        onPress={() => {
          alert("FEATURE NOT AVAILABLE DUE TO ABSENCE OF BACKEND");
        }}
      >
        <Image style={styles.post_image} source={icon} />
        <Text style={styles.post_header}>{item.address}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  post_container: {
    marginVertical: 20,
    backgroundColor: "#D9D9D9",
    marginBottom: 30,
    borderRadius: 15,
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
    borderRadius: 15,
  },
});
