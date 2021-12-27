import React from "react";
import {
  Box,
  FlatList,
  HStack,
  Icon,
  Text,
  Spacer,
  Pressable,
} from "native-base";
import { Header, Search, WelcomeMessage, BottomButton } from "../components";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
interface taskItem {
  id: string;
  description: string;
  creationDate: Date;
  estimatedDate: Date;
  isDone: boolean;
  color: string;
  tags?: string[];
}
const testeJSON: taskItem[] = [
  {
    id: "123",
    description: "Taking My Sister to School",
    creationDate: new Date(),
    estimatedDate: new Date(),
    isDone: false,
    color: "yellow",
  },
  {
    id: "321",
    description: "Create a Banner in Canva",
    creationDate: new Date(),
    estimatedDate: new Date(),
    isDone: false,
    color: "green",
  },
  {
    id: "213",
    description: "Buying home Utensils",
    creationDate: new Date(),
    estimatedDate: new Date(),
    isDone: false,
    color: "blue",
  },
];

export default function Main() {
  return (
    <Box flex={1} px={"6"} bg={"bg"} py={8}>
      <Header />
      <HStack py={"10"} alignItems={"center"} justifyContent={"space-between"}>
        <WelcomeMessage />
        <Search />
      </HStack>
      <FlatList
        data={testeJSON}
        renderItem={({ item }) => (
          <Box
            borderWidth="1"
            borderColor={item.color}
            bg={item.color}
            borderRadius={8}
            pl="4"
            pr="5"
            py="2"
            marginY={1.5}
          >
            <Text color={"black"} fontSize={"xl"} fontWeight={"700"}>
              {item.description}
            </Text>
            <Spacer />
            <HStack pt={2} alignItems={"center"}>
              <Icon
                as={AntDesign}
                name={"calendar"}
                color={"black"}
                size={"xs"}
              />
              <Text marginLeft={2} fontSize={"sm"} fontWeight={"300"}>
                12 October 2021
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <HStack py={1.5} alignItems={"center"}>
                <Icon
                  as={AntDesign}
                  name={"clockcircleo"}
                  color={"black"}
                  size={"xs"}
                />
                <Text marginLeft={2} fontSize={"sm"} fontWeight={"300"}>
                  10:00
                </Text>
              </HStack>
              <Pressable onPress={() => null}>
                <Icon
                  as={MaterialIcons}
                  name="radio-button-unchecked"
                  size={"md"}
                />
              </Pressable>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
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
