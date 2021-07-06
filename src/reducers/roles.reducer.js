import {
  GET_ROLES,
  ADD_NEW_ROLE,
  DELETE_ROLE,
  EDIT_ROLE,
} from "../actions/actionTypes";

const initialState = {
  rolesList: [],
};

const rolesReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case GET_ROLES:
      return { ...state, rolesList: action.payload };
    case ADD_NEW_ROLE:
      return { ...state, rolesList: [...state.rolesList, action.payload] };
    case DELETE_ROLE:
      return { ...state, message: action.payload };
    case EDIT_ROLE:
      return { ...state, rolesList: [...state.rolesList, action.payload] };
    default:
      return state;
  }
};
export default rolesReducer