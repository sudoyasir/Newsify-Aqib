import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsInfo from "../component/NewsInfo";
import SearchNews from "./../component/SearchNews";
const Stack = createStackNavigator();

function NewsSearchNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="search" component={SearchNews} />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="Info"
        component={NewsInfo}
      />
    </Stack.Navigator>
  );
}
export default NewsSearchNavigation;
