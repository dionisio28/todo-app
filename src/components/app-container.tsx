import React from "react";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from '../store'

type Props = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: Props) {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
