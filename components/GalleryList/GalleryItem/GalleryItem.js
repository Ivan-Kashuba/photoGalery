import { View, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./stylesGalleryItem";

const GalleryItem = ({ item, dimension }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: dimension, height: dimension }}
        resizeMode="cover"
        source={{ uri: item.thumbnailUrl }}
      >
        <View style={styles.heart}>
          <Ionicons
            name={item.likeStatus ? "heart" : "heart-outline"}
            size={30}
            color={"red"}
            id={item.id}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default GalleryItem;
