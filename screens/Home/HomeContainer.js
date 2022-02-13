import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import { setPosts, changeLikeStatus } from "./../../redux/mainReducer";
import { connect } from "react-redux";

const HomeContainer = ({ posts, setPosts, changeLikeStatus }) => {
  const [inputText, setInputText] = useState("");
  const onInputChange = (text) => {
    setInputText(text);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => {
        let newData = response.data.map((post) => {
          return { ...post, likeStatus: false };
        });
        setPosts(newData);
      });
  }, [inputText]);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(inputText.toLowerCase());
  });
  return (
    <Home
      onInputChange={onInputChange}
      filteredPosts={filteredPosts}
      changeLikeStatus={changeLikeStatus}
      inputText={inputText}
    />
  );
};

let mapStateToProps = (state) => ({
  posts: state.main.posts,
});

export default connect(mapStateToProps, { setPosts, changeLikeStatus })(
  HomeContainer
);
