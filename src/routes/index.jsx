import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/homepage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route component={Home} exact path="/"></Route>
      </Switch>
    </>
  );
};

export default Routes;
