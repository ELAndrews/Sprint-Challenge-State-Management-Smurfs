import React from "react";

export default function SmurfCard(props) {
  const handleClick = () => {
    props.deleteSmurf(props.curr.id);
    props.getSmurfs();
  };
  return (
    <div className="smurfCard">
      <h4 className="smurfName">{props.curr.name}</h4>
      <div className="smurfInfo">
        <p>{props.curr.age}</p>
        <p>{props.curr.height}</p>
        <button onClick={handleClick} className="deleteBtn">{`\u2296`}</button>
      </div>
    </div>
  );
}
