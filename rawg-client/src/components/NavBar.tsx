import { HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="Logo" boxSize="50px" />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
