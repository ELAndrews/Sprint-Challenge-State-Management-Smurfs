import React from "react";

export default function SmurfCard(props) {
  const handleClick = () => {
    props.deleteSmurf(props.curr.id);
    props.getSmurfs();
  };
  return (
    <div>
      <h4>{props.curr.name}</h4>
      <p>{props.curr.age}</p>
      <p>{props.curr.height}</p>
      <button onClick={handleClick}>{`\u2296`}</button>
    </div>
  );
}
