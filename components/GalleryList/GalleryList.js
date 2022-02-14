import { FlatGrid } from "react-native-super-grid";
import { View } from "react-native";
import React from "react";
import GalleryItem from "./GalleryItem/GalleryItem";

const GalleryList = ({ posts }) => {
  const dimension = 150;
  return (
    <View>
      <FlatGrid
        itemDimension={dimension}
        data={posts}
        renderItem={({ item }) => (
          <GalleryItem item={item} dimension={dimension} />
        )}
      />
    </View>
  );
};

export default GalleryList;
