import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
const Icon = ({
  size = 40,
  backgroundColor = "black",
  color = "white",
  name,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: backgroundColor,
          borderRadius: size * 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default Icon;
