import {types} from '../types/types'

export const addNewRequest = (business) => {
    return async (dispatch) => {
      try {
        const resp = await fetchSinToken("api/NewBusiness", business, "POST");
        const body = await resp.json();
        if (body.success) {
          console.log(body);
          const newRequest = addNewDataToRequest(body.data, lastCount);
          dispatch(requestNewRequest(newRequest));
          dispatch(uiCloseModal());
          message.success("Solicitud agregada correctamente");
        } else {
          message.error(body.message);
        }
        dispatch(uiEndModalLoader());
      } catch (error) {
        console.log(error);
      }
    };
  };

  const businessNew = (request) => ({
    type: types.requestNewRequest,
    payload: request,
  });