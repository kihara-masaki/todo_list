import React from "react";

type Props = {
  text: string;
};

const Button: React.FC<Props> = (props) => {
  return (
    <>
      <button>{props.text}</button>
    </>
  );
};
export default Button;
