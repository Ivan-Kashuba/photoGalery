import { View, Text, Image } from "react-native";
import styles from "./stylesPost";
import Ionicons from "react-native-vector-icons/Ionicons";

const Post = ({ item, changeLikeStatus }) => {
  return (
    <View style={styles.post}>
      <Image
        style={styles.image}
        source={{
          uri: item.url
            ? item.url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAm6dU5JsOoX02Rm2pRIq0hW6uIQ8VC8h42w&usqp=CAU",
        }}
      />
      <View style={styles.description} id={item.id}>
        <Text style={styles.text} numberOfLines={1}>
          {item.title}
        </Text>
        <Ionicons
          name={item.likeStatus ? "heart" : "heart-outline"}
          size={30}
          color={"red"}
          id={item.id}
          onPress={() => {
            changeLikeStatus(item.id);
          }}
        />
      </View>
    </View>
  );
};

export default Post;
