import {SET_VINO_LIST ,FILTRO_VINO_LIST,DELETE_VINO_LIST,UPDATE_VINO_LIST} from "./const";

export const setVinoListAction = vino => {
    return dispatch => dispatch({type: SET_VINO_LIST, payload: vino});
};

export const filtroVinosAction = text => {
    return dispatch => dispatch({type: FILTRO_VINO_LIST, payload: text});
};

export const deleteVinosAction = id => {
    return dispatch => dispatch({type: DELETE_VINO_LIST, payload: id});
};

export const updateVinosAction = id => {
    return dispatch => dispatch({type: UPDATE_VINO_LIST, payload: id});
};