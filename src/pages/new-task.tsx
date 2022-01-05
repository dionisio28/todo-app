import { Box } from 'native-base';
import React, { useState } from 'react';
import { IScreen } from '../@types/screen-props';
import { Header, InputText } from '../components';


function NewTask({ navigation }: IScreen) {

  const [ task , setTask ] = useState('')

  return (
    <Box flex={1} px={"6"} bg={"bg"} py={8} alignItems={"center"}>
      <Header title={"New Task"}/>
      <InputText value={task} label='My New Task' onChangeText={setTask}/>

      
    </Box>
  );
}

export default NewTask;