import { types } from "../types/types";

const initialState = {
  users: [{}],
  dataModal: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userGetData:
      return {
        ...state,
        users: [...action.payload]
      }
    case types.userSetDataModal:
      return {
        ...state,
        dataModal: action.payload,
      };
    case types.userClearDataModal:
      return {
        ...state,
        dataModal: {},
      };
    default:
      return {
        ...state,
      };
  }
};
