import { GET_RESPONSE } from "./type";

export const saveResponse = (response: any) => ({
  type: GET_RESPONSE,
  payload: {
    response,
  },
});
