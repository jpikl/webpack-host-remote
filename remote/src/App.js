import * as  React from "react";
import {getNextId} from "host";
import Component from "./Component";

const App = () => (
  <div>
    <h1>Remote</h1>
    <p>Next ID: {getNextId()}</p>
    <p>Next ID: {getNextId()}</p>
    <Component/>
  </div>
);

export default App;
