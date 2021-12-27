import { Box, Text } from "native-base";
import React from "react";

export default function WelcomeMessage() {
  return (
    <Box>
      <Text color={"black"} fontSize={"xl"}>
        Welcome Back!
      </Text>
      <Text color={"black"} py="2" fontSize={"2xl"} bold>
        Here's Update Today.
      </Text>
    </Box>
  );
}
