import React from "react";
import { AppContext } from "./context/contextApi";
import { Router } from "./routes/router";

export const App: React.FC = () => {
  return (
    <AppContext>
      <Router />
    </AppContext>
  );
};
