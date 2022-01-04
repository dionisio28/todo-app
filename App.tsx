import React from "react";
import AppContainer from "./src/components/app-container";
import Routes from "./src/routes";
import { connectToDevTools } from "react-devtools-core";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}
export default function App() {
  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  );
}
