import React from "react";
import { Box, HStack } from "native-base";
import { Header, Search, WelcomeMessage, BottomButton } from "../components";

export default function Main() {
  return (
    <Box flex={1} px={"6"} py={8}>
      <Header />
      <HStack py={"10"} alignItems={"center"} justifyContent={"space-between"}>
        <WelcomeMessage />
        <Search />
      </HStack>

      <BottomButton
        onPress={() => null}
        title="Add Task"
        nameIcon="squared-plus"
        w={"50%"}
        borderRadius={30}
      />
    </Box>
  );
}
