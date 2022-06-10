import React from "react";
import {getNextId} from "host";

const Component = () => (
  <p>
    Remote component Next ID: {getNextId()}
  </p>
);

export default Component;
