import React, { Fragment } from "react";
import Title from "./components/Title";
import Create from "./components/Create";
import Todos from "./components/Todos";
import State from "./components/State";
import { useSelector } from "react-redux";

export default function App6() {
  const data = useSelector((state) => state);
  // console.log('App_useSelector',useSelector);
  return (
    <div id="todoApp">
      <Title />
      <div className="content">
        <Create />
        {data.length > 0 ? (
          <Fragment>
            <Todos />
            <State />
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
