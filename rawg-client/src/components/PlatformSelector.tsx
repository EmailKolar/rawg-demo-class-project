import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {BsChevronDown} from "react-icons/bs"
import usePlatforms, { Platform } from "../hooks/usePlatforms"

interface Props{
    selectedplatform: Platform | null;
    onSelectPlatform: (platform: Platform |null) => void;
}


const PlatformSelector = ({selectedplatform, onSelectPlatform}:Props) => {

    const {data: parent_platforms, error} = usePlatforms();

    if(error) return null;


  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {selectedplatform ? selectedplatform.name : "Select Platform"}
  </MenuButton>
  <MenuList>
    <MenuItem 
    hidden={!selectedplatform}
    color={selectedplatform ? "red.500" : "gray.500"}
    onClick={()=>onSelectPlatform(null)}>Clear</MenuItem>
    {parent_platforms.map((platform) => (
        <MenuItem key={platform.id}
        onClick={() => onSelectPlatform(platform)}
        >{platform.name}
    </MenuItem>
    ))}
  </MenuList>
</Menu>
  )
}

export default PlatformSelector