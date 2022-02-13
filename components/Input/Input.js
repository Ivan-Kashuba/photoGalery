import { View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import styles from "./styleInput";

export default function Input({ onInputChange, inputText }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={inputText}
        onChangeText={(event) => onInputChange(event)}
        style={styles.input}
      />
    </View>
  );
}
