import { types } from "../types/types";
import { message } from "antd";
import { uiCloseModal, uiEndModalLoader } from "./ui";
import { fetchSinToken } from "../helpers/fetch";
import { tratarResponseRequest, addNewDataToRequest } from "../helpers/tratarRequest";

export const GetDataRequest = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken("api/RequestBusiness");
      const body = await resp.json();
      // console.log(body);
      const data = tratarResponseRequest(body.reqBusiness);
      dispatch(requesteGetData(data));
      dispatch(requesPendingRequest(body.pendingCount));
      dispatch(requestLoadCatalogStatus(body.reqStatus));
    } catch (error) {
      console.log(error);
    }
  };
};

const requesPendingRequest = (totalPening) => ({
  type: types.requestPending,
  payload: totalPening,
});

const requesteGetData = (request) => ({
  type: types.requestGetData,
  payload: request,
});

const requestLoadCatalogStatus = (catalog) => ({
  type: types.requestLoadCatalogRequesStatus,
  payload: catalog,
});

export const addNewRequest = (request, lastCount) => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken("api/RequestBusiness", request, "POST");
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

const requestNewRequest = (request) => ({
  type: types.requestNewRequest,
  payload: request,
});

export const updateRequest = (request) => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(
        `api/RequestBusiness/editRequest/${request.key}`,
        request,
        "PUT"
      );
      const body = await resp.json();
      if (body.success) {
        dispatch(requestUdateRequest(request));
        dispatch(uiCloseModal());
        message.success("Solicitud actualizada correctamente");
      } else {
        message.error(body.message);
      }
      dispatch(uiEndModalLoader());
    } catch (error) {
      console.log(error);
    }
  };
};

const requestUdateRequest = (request) => ({
  type: types.requestUpdateRequest,
  payload: request,
});

export const getRequestByEmail = (email) => {
  return async (dipatch) => {
    try {
      const resp = await fetchSinToken(`api/RequestBusiness/Find/${email}`);
      const body = await resp.json();
      //TODO: tratar respuesta
      const requests = tratarResponseRequest(body.reqBusiness);
      dipatch(requestSearch(requests));
    } catch (error) {
      message.error(`Error al consultar, ${error.message}`);
    }
  };
};

export const getAllRequestPending = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(`api/RequestBusiness/FindPending`);
      const body = await resp.json();
      const data = tratarResponseRequest(body.ReqBusiness);
      dispatch(requestSearch(data));
    } catch (error) {}
  };
};

const requestSearch = (request) => ({
  type: types.requestGetRequestByEmail,
  payload: request,
});
