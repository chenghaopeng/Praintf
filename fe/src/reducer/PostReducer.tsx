import { PostActionType } from "../action/PostAction";

const initialState = {
  postlist: {},
}

const PostReducer = (state = initialState, action : Action) => {
  switch(action.type) {
    case PostActionType.POSTLIST:
      return {postlist: action.payload};
    default:
      return state;
  }
}

export default PostReducer;