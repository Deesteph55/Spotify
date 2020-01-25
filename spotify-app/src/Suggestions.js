import React from "react";

export const Suggestions = ({ results, getPop }) => {
  const options = results.map(unit => (
    <li onClick={() => getPop(unit.popularity)} key={unit.id}>
      {unit.name}
    </li>
  ));
  return <ul>{options}</ul>;
};
