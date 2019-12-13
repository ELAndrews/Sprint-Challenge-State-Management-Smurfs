import * as types from "./actionTypes";

const initialState = {
  smurfs: [],
  form: {
    name: "",
    age: "",
    height: ""
  }
};

export function smurfsReducer(smurfs = initialState.smurfs, action) {
  switch (action.type) {
    case types.SET_SMURFS:
      return action.payload;
    default:
      return smurfs;
  }
}

export function formReducer(form = initialState.form, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return { ...form, [action.payload.name]: action.payload.value };
    case types.SUBMIT:
      return initialState.form;
    default:
      return form;
  }
}
