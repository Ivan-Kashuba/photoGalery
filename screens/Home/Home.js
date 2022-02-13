import { View, FlatList } from "react-native";
import React from "react";
import Post from "./Post";
import Input from "../../components/Input/Input";

const Home = ({
  filteredPosts,
  likeStatus,
  changeLikeStatus,
  onInputChange,
  inputText,
}) => {
  return (
    <View>
      <Input onInputChange={onInputChange} inputText={inputText} />
      <FlatList
        data={filteredPosts}
        renderItem={({ item }) => {
          return (
            <Post
              item={item}
              likeStatus={likeStatus}
              changeLikeStatus={changeLikeStatus}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        extraData={[...filteredPosts]}
      />
    </View>
  );
};

export default Home;
