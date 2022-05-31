import { GET_RESPONSE } from "./type";

const initialState: { responseData: any[] } = {
  responseData: [],
};

initialState.responseData = [];

const reducer = (state = initialState, action: any) => {
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
