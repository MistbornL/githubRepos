import { GET_RESPONSE } from "./type.ts";

const initialState = {
  responseData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESPONSE: {
      return {
        ...state,
        responseData: action.payload.response,
      };
    }
    default:
      return state;
  }
};

export default reducer;
