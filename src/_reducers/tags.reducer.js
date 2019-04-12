import { SET } from "../_actions/tags.actions";

const initialState = {};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        ...action.tags
      };

    default:
      return state;
  }
};

export default tagsReducer;
