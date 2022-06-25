import React from "react";

type Props = {
  text: string;
};

const Text: React.FC<Props> = (props) => {
  return (
    <>
      <ul>
        <li>{props.text}</li>
      </ul>
    </>
  );
};
export default Text;
