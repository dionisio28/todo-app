import React from "react";
import { Input, Text } from "native-base";

interface InputTextProps {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  usable?: boolean;
}

const InputText = ({ value = "", onChangeText, label, usable = true }: InputTextProps) => {
  return (
    <>
      <Text pt={8} color={"gray1"} fontSize={"sm"} alignSelf={"flex-start"}>
        {label}
      </Text>
      <Input
        mx={"3"}
        value={value}
        onChangeText={onChangeText}
        multiline={true}
        backgroundColor={"#FFF"}
        fontWeight={"bold"}
        isDisabled={!usable}
        borderBottomColor={"gray1"}
        placeholderTextColor={"light_gray"}
        placeholder={"describe your task"}
        size="xl"
        variant={"underlined"}
        w={{
          base: "100%",
        }}
      />
    </>
  );
};

export default InputText;
