import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/actionTypes";

const initialState = null;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return  payload ;

    case CLEAR_MESSAGE:
      return  null ;

    default:
      return state;
  }
}