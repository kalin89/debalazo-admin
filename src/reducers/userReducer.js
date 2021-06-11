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
      case types.userUpdateBusiness:
        return {
          ...state,
          users: state.users.map((e) =>{
            if(e.key === action.payload.idUser){
              e.idBusiness = action.payload.idBusiness
            }
            return e;
          }
        ),
        }
    default:
      return {
        ...state,
      };
  }
};
