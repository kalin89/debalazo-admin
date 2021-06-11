import {types} from '../types/types'
import {message} from 'antd'
import {uiCloseModal, uiEndModalLoader} from './ui'

import {fetchSinToken} from '../helpers/fetch'

export const addNewBusiness = (business) => {
    return async (dispatch) => {
      try {
        console.log("rico", business);
        const resp = await fetchSinToken("api/NewBusiness", business, "POST");
        const body = await resp.json();
        if (body.success) {
          console.log(body);
          const newRequest = {idUser: body.data.idUser, idBusiness:body.data._id }
          dispatch(updateIdBusinessInUser(newRequest));
          dispatch(uiCloseModal());
          message.success("Solicitud agregada correctamente");
        } else {
          message.error(body.message);
        }
        dispatch(uiEndModalLoader());
      } catch (error) {
        console.log(error);
        message.error(error.message);
      }
    };
  };

  const updateIdBusinessInUser = (request) => ({
    type: types.userUpdateBusiness,
    payload: request,
  });