import React from "react";

type Props = {
  text: string;
};

const Topic: React.FC<Props> = (props) => {
  return (
    <>
      <h3>{props.text}</h3>
    </>
  );
};
export default Topic;
