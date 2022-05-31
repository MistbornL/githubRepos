import { GET_RESPONSE } from "./type.ts";

export const saveResponse = (response) => ({
  type: GET_RESPONSE,
  payload: {
    response,
  },
});
