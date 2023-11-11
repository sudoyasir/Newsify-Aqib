import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Icon from "./Icon";
import { Linking } from "react-native";
const About = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/me.jpeg")} />
      <Text style={styles.text}>Aqib Malik</Text>
      <Text style={styles.info}>
        Newsify, my seventh-semester React Native project, is a dynamic news
        application designed to keep you informed in real-time. As part of my
        academic journey, this semester project combines the latest technology
        with a passion for staying updated. Dive into a world of instant news
        updates, curated for swift and engaging consumption.
      </Text>
      <View style={styles.icons}>
        <Icon
          backgroundColor="#ff4d4d"
          onPress={() => Linking.openURL("mailto:aqibali2156@gmail.com")}
          name={"email"}
          size={50}
        />
        <Icon
          onPress={() => Linking.openURL("https://github.com/AqibMalik435")}
          backgroundColor="#ff4d4d"
          name={"github"}
          size={50}
        />
        <Icon
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/muhammad-aqib-655718286/")
          }
          backgroundColor="#ff4d4d"
          name={"linkedin"}
          size={50}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: "#ffcccc",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: "bold",
  },
  icons: {
    marginTop: 50,
    width: "100%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 15,
    color: "#262626",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: "cover",
    borderColor: "#ff9999",
    borderWidth: 5,
  },
});
export default About;
