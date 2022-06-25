import React from "react";
import ReactDOM from "react-dom";
import Input from "./components/input";
import Button from "./components/button";
import Topic from "./components/topic";
import Text from "./components/text";

const Index = () => {
  return (
    <>
      <div>
        <Input />
        <Button text="追加" />
      </div>
      <div>
        <Topic text="未完了のTODO" />
        <Text text="あれをする" />
        <Text text="これをする" />
      </div>
      <div>
        <Topic text="完了したTODO" />
        <Text text="これはやった" />
      </div>
    </>
  );
};
export default Index;
ReactDOM.render(<Index />, document.getElementById("root"));
