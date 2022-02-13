const CHANGE__LIKE__STATUS = "CHANGE__LIKE__STATUS";
const SET__POSTS = "SET__POSTS";

let initialState = {
  posts: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE__LIKE__STATUS: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            return { ...post, likeStatus: !post.likeStatus };
          }
          return post;
        }),
      };
    }
    case SET__POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }

    default: {
      return state;
    }
  }
};

export const changeLikeStatus = (id) => ({
  type: CHANGE__LIKE__STATUS,
  id,
});

export const setPosts = (posts) => ({
  type: SET__POSTS,
  posts,
});

export default mainReducer;
