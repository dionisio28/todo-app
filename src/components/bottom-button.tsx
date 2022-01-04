import { Box, Button, Icon } from "native-base";
import React from "react";

import { Entypo } from "@expo/vector-icons";

interface ButtonProps {
  w?: string | number;
  borderRadius?: number;
  onPress: () => void;
  bg?: string;
  title: string;
  nameIcon?: string;
  colorIcon?: string;
  sizeIcon?: number;
}

export default function BottomButton(props: ButtonProps) {
  return (
    <Box>
      <Button
        alignSelf={"center"}
        onPress={props.onPress}
        padding={4}
        bg={props.bg ?? "black"}
        borderRadius={props.borderRadius ?? 8}
        w={props.w}
        leftIcon={
          <Icon
            as={Entypo}
            name={props.nameIcon}
            color={props.colorIcon ?? "white"}
            size={props.sizeIcon ?? 25}
          />
        }
        colorScheme="dark"
      >
        {props.title}
      </Button>
    </Box>
  );
}
