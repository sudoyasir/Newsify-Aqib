import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const AppButton = ({ title, onPress, color = "#fc5c65" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  button: {
    width: "90%",
    borderRadius: 20,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: "white",
  },
});
export default AppButton;
