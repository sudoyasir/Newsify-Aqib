import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsFeed from "../component/NewsFeed";
import NewsInfo from "../component/NewsInfo";

// Create a Stack Navigator using @react-navigation/stack
const Stack = createStackNavigator();

/**
 * MyStack component represents a stack-based navigation for the News Feed section.
 * It includes screens for the News Feed and detailed News Information.
 */
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      {/* Home Screen (News Feed) */}
      <Stack.Screen name="Home" component={NewsFeed} />

      {/* News Information Screen */}
      <Stack.Screen
        name="Info"
        component={NewsInfo}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
