import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { getSmurfs } from "../state/actionCreators";

export function Smurfs({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  console.log(smurfs);
  return (
    <div>
      <h3>Lots of Smurfs!</h3>
      {smurfs.map((curr, index) => {
        return (
          <div key={index}>
            <SmurfCard curr={curr} />
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
