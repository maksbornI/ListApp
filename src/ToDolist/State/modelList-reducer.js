import { v1 } from 'uuid';

const SETMODELLIST = 'SET_MODEL_LIST';

const initialState = [];
export const setModelListTitleAC = (state) => {
  return { type: SETMODELLIST, state };
};

export const modelListReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {

    case SETMODELLIST : {
      let stateCopy = action.state.map(el=> el? {...el, id:v1()}:el)
      return state = stateCopy;
    }
    default:
      return state;
  }
};