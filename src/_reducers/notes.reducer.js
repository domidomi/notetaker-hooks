import { SET } from "../_actions/notes.actions";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        ...action.notes
      };

    default:
      return state;
  }
};

export default userReducer;
