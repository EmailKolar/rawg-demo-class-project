import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return ( // Ensure return statement is here!
    <HStack>
      <Switch 
        isChecked={colorMode === "dark"} 
        colorScheme="green" 
        onChange={toggleColorMode} 
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
