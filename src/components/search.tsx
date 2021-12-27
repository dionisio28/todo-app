import { Icon, IconButton } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
export default function Search() {
  return (
    <IconButton
      icon={<Icon as={Feather} name="search" color={'white'}/>}
      borderRadius="full"
      alignItems={'center'}
      alignSelf={'center'}
      justifyContent={'center'}
      bg={'black'}
      _icon={{
        size: 25,
      }}
      size={55}
    />
  );
}
