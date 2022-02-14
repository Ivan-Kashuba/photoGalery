import { FlatList, View } from "react-native";
import Post from "./Post/Post";
import React from "react";
import styles from "./stylePostList";

const PostList = ({ posts, changeLikeStatus }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return <Post item={item} changeLikeStatus={changeLikeStatus} />;
        }}
        keyExtractor={(item) => item.id}
        extraData={[...posts]}
      />
    </View>
  );
};
export default PostList;
