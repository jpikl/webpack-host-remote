import React from "react";
import {getNextId} from "./utils";

const RemoteComponent = React.lazy(() => import("remote/Component"));

const App = () => (
  <div>
    <h1>Host</h1>
    <p>Next ID: {getNextId()}</p>
    <p>Next ID: {getNextId()}</p>
    <React.Suspense fallback="Loading...">
      <RemoteComponent/>
    </React.Suspense>
  </div>
);

export default App;
