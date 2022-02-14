import { View } from "react-native";
import React from "react";
import PostList from "./../../components/PostList/PostList";
import Input from "./../../components/Input/Input";

const Home = ({
  filteredPosts,
  changeLikeStatus,
  onInputChange,
  inputText,
}) => {
  return (
    <View>
      <Input onInputChange={onInputChange} inputText={inputText} />
      <PostList posts={filteredPosts} changeLikeStatus={changeLikeStatus} />
    </View>
  );
};

export default Home;
