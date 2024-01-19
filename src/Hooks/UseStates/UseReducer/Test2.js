import React from "react";

const Test2 = ({ start, end }) => {
  console.log(start);

  if (start < end) {
    return (
      <div>
        {Test2({ start: start + 1, end })}
        ram{start}
      </div>
    );
  }

  return null;
};

export default () => Test2({ start: 1, end: 100 });
