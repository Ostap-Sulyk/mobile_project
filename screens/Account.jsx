import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, SafeAreaView } from "react-native";

export default function Account() {
  const [user, setUser] = useState({});

  const random_id = Math.floor((Math.random() * 10) + 1);
  const user_url = `https://jsonplaceholder.typicode.com/users/${random_id}`;

  useEffect(() => {
    fetch(user_url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((user) => setUser(user));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.image_container}>
        <Image
          source={{
            uri: `https://i.pravatar.cc/300?img=${random_id}`,
          }}
          style={styles.image_style}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.key}>Full Name:</Text>
        <Text style={styles.row}>{user.name}</Text>
        <Text style={styles.key}>UserName:</Text>
        <Text style={styles.row}>{user.username}</Text>
        <Text style={styles.key}>Email:</Text>
        <Text style={styles.row}>{user.email}</Text>
        <Text style={styles.key}>Phone:</Text>
        <Text style={styles.row}>{user.phone}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image_container: {
    alignItems: "center",
    marginTop: 40,
  },
  image_style: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text_container: {
    marginVertical: 30,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ECEFF4",
    padding: 30,
    margin: 30,
    borderRadius: 30,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  row: {
    fontSize: 20,
    marginBottom: 10,
  },

  key: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 5,
  },
});
