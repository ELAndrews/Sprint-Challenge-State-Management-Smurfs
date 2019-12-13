import React from "react";

export default function SmurfCard(props) {
  return (
    <div>
      <h4>{props.curr.name}</h4>
      <p>{props.curr.age}</p>
      <p>{props.curr.height}</p>
    </div>
  );
}
