import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { myTheme } from "./navigationColor";
import MyStack from "./NewsInfoNavigator";
import NewsSearchNavigation from "./NewsSearchNavigation";
import About from "../component/About";

// Create a Bottom Tab Navigator using @react-navigation/bottom-tabs
const Tab = createBottomTabNavigator();

/**
 * AppNavigator component represents the main navigation structure of the app.
 * It includes a Bottom Tab Navigator with three tabs: News Feed, Search News, and About Developer.
 */
const AppNavigator = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#fc5c65",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#262626",
        }}
      >
        {/* News Feed Tab */}
        <Tab.Screen
          name="feed"
          component={MyStack}
          options={{
            title: "News Feed",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome color={color} size={size} name="newspaper-o" />
            ),
          }}
        />

        {/* Search News Tab */}
        <Tab.Screen
          name="search"
          component={NewsSearchNavigation}
          options={{
            title: "Search News",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons color={color} size={30} name="magnify" />
            ),
          }}
        />

        {/* About Developer Tab */}
        <Tab.Screen
          name="about"
          component={About}
          options={{
            title: "About Developer",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons color={color} size={30} name="face-man" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
