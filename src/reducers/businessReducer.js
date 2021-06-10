import { types } from "../types/types";

const initialState = {
  business: [{}],

};

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userGetData:
      return {
        ...state,
        business: [...action.payload]
      }
      case types.businessNew: 
      return {
          ...state,
          business: [...state.business, action.payload],
      }
    default:
      return {
        ...state,
      };
  }
};
