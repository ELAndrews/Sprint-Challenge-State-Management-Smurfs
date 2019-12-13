import * as types from "./actionTypes";
import axios from "axios";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      const smurfs = response.data;
      console.log(smurfs);
      dispatch({ type: types.SET_SMURFS, payload: smurfs });
    })
    .catch(error => {
      debugger;
    });
};

export const submit = () => {
  return { type: types.SUBMIT };
};

export const inputChange = (name, value) => {
  return { type: types.INPUT_CHANGE, payload: { name, value } };
};

export const updateSmurfs = form => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", form)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
