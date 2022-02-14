import Favourites from "./Favourites";
import { connect } from "react-redux";

const FavouritesContainer = ({ posts }) => {
  const likedPosts = posts.filter((post) => {
    return post.likeStatus;
  });
  return <Favourites posts={likedPosts} />;
};

const mapStateToProps = (state) => ({
  posts: state.main.posts,
});

export default connect(mapStateToProps)(FavouritesContainer);
