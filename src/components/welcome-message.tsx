import { Box, Text } from "native-base";
import React from "react";

export default function WelcomeMessage() {
  return (
    <Box>
      <Text fontSize={"xl"}>Welcome Back!</Text>
      <Text py="2" fontSize={"2xl"} bold>
        Here's Update Today.
      </Text>
    </Box>
  );
}
