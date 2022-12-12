import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import About from "./screens/About";
import Help from "./screens/Help";
import Home from "./screens/Home";
import FindParking from "./screens/FindParking";
import Account from "./screens/Account";
import Safety from "./screens/Safety";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          headerMode="none"
          style={{
            backgroundColor: "#0F0F0F",
            paddingTop: 25,
            paddingBottom: 10,
            paddingHorizontal: 0,
            margin: 0,
          }}
          tabBarPosition="top"
          barStyle={{ backgroundColor: "#0F0F0F" }}
          tabBarOptions={{
            showIcon: true,
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "gray",
            labelStyle: { fontSize: 12, fontWeight: "bold" },
            tabStyle: { backgroundColor: "#0F0F0F" },
            indicatorStyle: {
              backgroundColor: "#0F0F0F",
            },
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Find Parking" component={FindParking} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Help" component={Help} />
          <Tab.Screen name="Safety" component={Safety} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
