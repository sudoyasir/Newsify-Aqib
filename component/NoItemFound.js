import React from "react";
import LottieView from "lottie-react-native";
import { Text, View, StyleSheet } from "react-native";
const NoItemFound = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../animations/106964-shake-a-empty-box.json")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default NoItemFound;
