import { Avatar, Text, IconButton, HStack, Icon } from "native-base";
import React, { useCallback } from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps { 
  title: string;
  onBackPress?: () => void;
  notifications?: string[];
}

export default function Header({
  title,
  onBackPress,
  notifications = []
} : HeaderProps) {

  const navigator = useNavigation()

  const handleNavigator = useCallback(
    () => {
      if(onBackPress) {
        onBackPress()
        return;
      }
      navigator.goBack();
    },
    [],
  )
  return (
    <>
      <HStack
        space={4}
        w={'100%'}
        pt={Platform.OS === "ios" ? 15 : 4}
        pb={8}
        
        alignItems="center"
        justifyContent={"space-between"}
      >
        <IconButton
          color={"black"}
          onPress={handleNavigator}
          icon={
            <Icon
              as={Ionicons}
              name={Platform.OS === "ios" ? "chevron-back" : "arrow-back"}
            />
          }
          borderRadius="full"
          _icon={{
            size: "sm",
          }}
        />
        <Text color={"black"} fontSize={"xl"} bold>
          {title}
        </Text>
        
          <IconButton
          color={"black"}
          opacity={notifications.length}
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
    </>
  );
}
