import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import RouteList from "./config";

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        { RouteList }
      </Switch>
    </BrowserRouter>
  );
}