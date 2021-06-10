import { types } from "../types/types";

export const uiOpenModal = () => ({ type: types.uiOpenModalForm });
export const uiCloseModal = () => ({ type: types.uiCloseModalForm });
export const uiStartModalLoader = () => ({ type: types.uiStartModalLoader });
export const uiEndModalLoader = () => ({ type: types.uiEndModalLoader });
export const uiOpenModalUser = () => ({ type: types.uiOpenModalUser });
export const uiCloseModalUser = () => ({ type: types.uiCloseModalUser });
