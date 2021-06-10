import { types } from "../types/types";
import {fetchSinToken} from '../helpers/fetch'
import {tratarResponseUser} from '../helpers/tratarUser'


export const getDataUser = () =>{
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken("api/users/getusers");
      const body = await resp.json();
      const data = tratarResponseUser(body.user);
      dispatch(setReduxUser(data));
    } catch (error) {
      console.log(error);
    }
  };
}

const setReduxUser = (users) => ({
  type: types.userGetData,
  payload: users,
});

export const userSetDataModal = (user) => ({
  type: types.userSetDataModal,
  payload: user,
});

export const userClearDataModal = () => ({
  type: types.userClearDataModal,
});
