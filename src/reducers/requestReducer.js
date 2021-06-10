import { types } from "../types/types";

const initialState = {
  requests: [],
  status: [],
  pendingCount: 0,
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.requestGetData:
      return {
        ...state,
        requests: [...action.payload],
      };
    case types.requestPending:
      return {
        ...state,
        pendingCount: action.payload,
      };
    case types.requestLoadCatalogRequesStatus:
      return {
        ...state,
        status: [...action.payload],
      };
    case types.requestNewRequest:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    case types.requestUpdateRequest:
      return {
        ...state,
        requests: state.requests.map((e) =>
          e.key === action.payload.key ? action.payload : e
        ),
      };
    case types.requestGetRequestByEmail:
      return {
        ...state,
        requests: [...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
