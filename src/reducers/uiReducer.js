import { types } from "../types/types";

const initialState = {
  modalFormOpen: false,
  modalUserOpen: false,
  modalLoading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModalForm:
      return {
        ...state,
        modalFormOpen: true,
      };
    case types.uiCloseModalForm:
      return {
        ...state,
        modalFormOpen: false,
      };
    case types.uiStartModalLoader:
      return {
        ...state,
        modalLoading: true,
      };
    case types.uiEndModalLoader:
      return {
        ...state,
        modalLoading: false,
      };
    case types.uiOpenModalUser:
      return {
        ...state,
        modalUserOpen: true,
      };
    case types.uiCloseModalUser:
      return {
        ...state,
        modalUserOpen: false,
      };
    default:
      return state;
  }
};
