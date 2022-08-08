import React from "react";
import { AppContext } from "./context/AppContext";
import Navigation from "./routes/Navigation";

export const App = () => {
  return (
    <AppContext>
      <Navigation />
    </AppContext>
  );
};

export default App;
