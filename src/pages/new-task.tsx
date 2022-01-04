import { Box } from 'native-base';
import React from 'react';
import { IScreen } from '../@types/screen-props';
import { Header } from '../components';


function NewTask({ navigation }: IScreen) {
  return (
    <Box flex={1} px={"6"} bg={"bg"} py={8}>
      <Header title={"New Task"}/>
    </Box>
  );
}

export default NewTask;