import { GET_RESPONSE } from "./type";

export const saveResponse = (response) => ({
  type: GET_RESPONSE,
  payload: {
    response,
  },
});
