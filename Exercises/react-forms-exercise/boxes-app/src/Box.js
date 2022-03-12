import React from "react";

const Box = (
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "purple"
) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };
  const remove = () => handleRemove(id);

  return (
    <div style={style}>
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
};

export default Box;
