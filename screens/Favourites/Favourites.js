import { View } from "react-native";
import React from "react";
import GalleryList from "../../components/GalleryList/GalleryList";

const Favourites = ({ posts }) => {
  return (
    <View>
      <GalleryList posts={posts} />
    </View>
  );
};

export default Favourites;
