import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf } from "../state/actionCreators";

export function Smurfs({ smurfs, getSmurfs, deleteSmurf }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  return (
    <div className="smurfContainer">
      {smurfs.map((curr, index) => {
        return (
          <div key={index}>
            <SmurfCard
              curr={curr}
              deleteSmurf={deleteSmurf}
              getSmurfs={getSmurfs}
            />
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

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs);
