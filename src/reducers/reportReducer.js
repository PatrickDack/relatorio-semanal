import { ADD_BILL, ADD_INPUT, UPDATE_TOTAL } from "../actions/actionCreators";


const INITIAL_STATE = {
  total: [
    0,
    0,
    0,
    0,
    0,
    0
  ],
};


const reportReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_BILL:
      return {
        ...state,
        resume: [...state.resume, action.bill]
      };
      case ADD_INPUT:
        return {
          ...state,
          inputValue: action.input,
        };
      case UPDATE_TOTAL:
        const newTotal = [...state.total];
        newTotal[action.id] = action.total;
        newTotal[5] = -newTotal[5];
        return {
          ...state,
          total: newTotal,
        }
      default:
        return state;
  };
};

export default reportReducer;
