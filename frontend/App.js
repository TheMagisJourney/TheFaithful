import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1E40AF",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#1F2937",
    textAlign: "center",
  },
});

const HomeScreen = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to The Faithful</Text>
      <Text style={styles.text}>Your Catholic community companion</Text>
    </View>
  </View>
);

const ExploreScreen = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Find Parishes & Events</Text>
      <Text style={styles.text}>Discover your local Catholic community</Text>
    </View>
  </View>
);

const CalendarScreen = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Your Catholic Calendar</Text>
      <Text style={styles.text}>Track your spiritual journey</Text>
    </View>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Your Faith Journey</Text>
      <Text style={styles.text}>Grow in faith together</Text>
    </View>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#E5E7EB",
          },
          headerTitleStyle: {
            color: "#1E40AF",
            fontWeight: "600",
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
            paddingBottom: 5,
            borderTopColor: "#E5E7EB",
          },
          tabBarActiveTintColor: "#1E40AF",
          tabBarInactiveTintColor: "#6B7280",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "The Faithful",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "map" : "map-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
