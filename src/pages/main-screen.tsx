import React, { useCallback } from "react";
import { Box, FlatList } from "native-base";
import { BottomButton, CardItem, Header } from "../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, addTask } from "../store/task-slice";

interface MainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Main">;
}

export default function Main({ navigation }: MainProps) {
  const taskList = useSelector(selectTasks);

  const renderItem = useCallback(({ index, item }) => {
    return <CardItem item={item} />;
  }, []);

  function handleAddTask() {
    navigation.navigate("NewTask");
  }
  return (
    <Box flex={1} px={"6"} bg={"bg"} py={8}>
      <FlatList
        data={taskList}
        ListHeaderComponent={<Header />}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <BottomButton
        onPress={handleAddTask}
        title="Add Task"
        nameIcon="squared-plus"
        w={"50%"}
        borderRadius={30}
      />
    </Box>
  );
}
