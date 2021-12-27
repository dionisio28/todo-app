import React from 'react'
import { NativeBaseProvider } from 'native-base'
import theme from '../theme'
import { NavigationContainer } from '@react-navigation/native';

type Props = {
  children: React.ReactNode
}

export default function AppContainer({ children }: Props) {
  return (
      <NativeBaseProvider theme={theme}>
         <NavigationContainer>{children}</NavigationContainer>
        </NativeBaseProvider>
  )
}
