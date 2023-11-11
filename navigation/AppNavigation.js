import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import NewsFeed from "../component/NewsFeed";
import SearchNews from "../component/SearchNews";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { myTheme } from "./navigationColor";
import MyStack from "./NewsInfoNavigator";
import NewsSearchNavigation from "./NewsSearchNavigation";
import About from "../component/About";
const Tab = createBottomTabNavigator();

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
        <Tab.Screen
          options={{
            title: "News Feed",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome color={color} size={size} name="newspaper-o" />
            ),
          }}
          name="feed"
          component={MyStack}
        />
        <Tab.Screen
          options={{
            title: "Search News",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons color={color} size={30} name="magnify" />
            ),
          }}
          name="search"
          component={NewsSearchNavigation}
        />
        <Tab.Screen
          options={{
            title: "About Developer",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons color={color} size={30} name="face-man" />
            ),
          }}
          name="about"
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
