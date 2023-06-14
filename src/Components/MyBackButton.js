import { useNavigation } from "@react-navigation/native";
import { ArrowBackIcon, Box } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

function MyBackButton({ top, left, bg, color, size, shadow, onPress }) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ position: "absolute", top: top, left: left, borderWidth: 0 }}
      onPress={onPress}
    >
      <Box
        style={{
          backgroundColor: {bg},
          padding: 10,
        }}
        rounded="full"
        shadow={shadow}
      >
        <ArrowBackIcon size={size} color={color} />
      </Box>
    </TouchableOpacity>
  );
}

export default MyBackButton;
