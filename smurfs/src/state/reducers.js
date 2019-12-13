import * as types from "./actionTypes";

const smurfsList = [];

export function smurfsReducer(smurfs = smurfsList, action) {
  switch (action.type) {
    case types.SET_SMURFS:
      return action.payload;
    default:
      return smurfs;
  }
}
