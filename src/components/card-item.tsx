import React, { useMemo } from "react";
import { Box, HStack, Icon, Text, Spacer, IconButton } from "native-base";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TaskItemProps } from "../@types";

interface CardItemProps {
  item: TaskItemProps;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface dateType {
  date: string;
  clock: string;
}

export default function CardItem({ item }: CardItemProps) {
  const date: dateType = useMemo(() => {
    let year = item.creationDate.getFullYear();
    let month = item.creationDate.getMonth();
    let day = item.creationDate.getDay().toString();
    var hour = item.creationDate.getHours().toString();
    var min = item.creationDate.getMinutes().toString();

    if (day.length < 2) {
      day = "0" + day;
    }
    if (hour.length < 2) {
      hour = "0" + hour;
    }
    if (min.length < 2) {
      min = "0" + min;
    }

    return {
      date: `${day} ${monthNames[month]} ${year}`,
      clock: `${hour}:${min}`,
    };
  }, [item.creationDate]);

  return (
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
        <Icon as={AntDesign} name={"calendar"} color={"black"} size={"xs"} />
        <Text marginLeft={2} fontSize={"sm"} fontWeight={"300"}>
          {date.date}
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
            {date.clock}
          </Text>
        </HStack>
        <IconButton
          color={"black"}
          icon={
            <Icon
              as={MaterialIcons}
              name="radio-button-unchecked"
              size={"md"}
            />
          }
          borderRadius="full"
          _icon={{
            size: "md",
          }}
          _pressed={{
            _icon: {
              name: "radio-button-unchecked",
            },
          }}
        />
      </HStack>
    </Box>
  );
}
