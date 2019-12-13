import React from "react";
import { connect } from "react-redux";
import {
  inputChange,
  submit,
  updateSmurfs,
  getSmurfs
} from "../state/actionCreators";

export function Form({ form, inputChange, submit, updateSmurfs, getSmurfs }) {
  const handleChange = e => {
    inputChange(e.target.name, e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    submit();
    const form = {
      name: e.target.name.value,
      age: e.target.age.value,
      height: e.target.height.value
    };
    updateSmurfs(form);
    getSmurfs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Add a new Smurf</p>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="What shall we call your new smurf?"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={form.age}
        placeholder="How old is your smurf?"
        onChange={handleChange}
      />
      <input
        type="text"
        name="height"
        value={form.height}
        placeholder="How tall is your smurf?"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    form: {
      name: state.name,
      age: state.age,
      height: state.height
    }
  };
}

export default connect(mapStateToProps, {
  inputChange,
  submit,
  updateSmurfs,
  getSmurfs
})(Form);
