import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "./usePlatforms";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const getIcon = (slug: string): React.ElementType | undefined => {
    const icons: Record<string, React.ElementType> = {
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      mac: FaApple,
      linux: FaLinux,
      android: FaAndroid,
      ios: MdPhoneIphone,
      nintendo: SiNintendo,
    };
  
    return icons[slug]; // deploy test
  };
  

  return (
    <HStack margin={1}>
      {platforms.map((platform) => {
  const IconComponent = getIcon(platform.slug);
  return IconComponent ? <Icon key={platform.id} as={IconComponent} /> : null;
})}
    </HStack>
  );
};

export default PlatformIconsList;
