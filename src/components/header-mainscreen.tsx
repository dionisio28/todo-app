import { Avatar, Text, IconButton, HStack, Icon } from "native-base";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Search, WelcomeMessage } from ".";

const iconUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkD3Me1wrPG8Op4o2nik6IKexoTnEhSYPsyw&usqp=CAU";
export default function Header() {
  return (
    <>
      <HStack
        space={4}
        pt={Platform.OS === "ios" ? 10 : 0}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Avatar
          size="sm"
          bg="transparent"
          source={{
            uri: iconUrl,
          }}
        />
        <Text color={"black"} fontSize={"xl"} bold>
          Task Manager
        </Text>
        <IconButton
          color={"black"}
          icon={<Icon as={Ionicons} name="notifications-outline" />}
          borderRadius="full"
          _icon={{
            size: "sm",
          }}
          _pressed={{
            _icon: {
              name: "notifications",
            },
          }}
        />
      </HStack>
      <HStack py={"10"} alignItems={"center"} justifyContent={"space-between"}>
        <WelcomeMessage />
        <Search />
      </HStack>
    </>
  );
}
