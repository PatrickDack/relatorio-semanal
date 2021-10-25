export const ADD_BILL = 'ADD_BILL';
export const ADD_INPUT = 'ADD_INPUT';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const addBillAction = (bill) => ({
  type: ADD_BILL,
  bill: bill,
});

export const addInputAction = (input) => {
  return {
    type: ADD_INPUT,
    input: input,
  };
};

export const updateTotalAction = (total, id) => {
  return {
    type: UPDATE_TOTAL,
    total: total,
    id: id,
  };
};
