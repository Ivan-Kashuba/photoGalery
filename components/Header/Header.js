import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderStyles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Gallery</Text>
    </View>
  );
};

export default Header;
