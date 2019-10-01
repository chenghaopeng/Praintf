export const PostActionType = {
  POSTLIST: "POSTLIST",
}

export const getPostListAction = (payload : any) => (dispatch : Function) => {
  dispatch({
    type: PostActionType.POSTLIST,
    payload: payload
  });
} 