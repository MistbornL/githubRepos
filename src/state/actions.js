import { CHANGE_LIKED } from "./types";

export const changeLiked = (id, liked, numberOfLikes) => ({
  type: CHANGE_LIKED,
  payload: {
    id,
    liked,
    numberOfLikes,
  },
});
