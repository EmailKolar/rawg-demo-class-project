import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";

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
  const getIcon = (slug: string) => {
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

    return icons[slug] || FaWindows; // Ensuring a valid icon is always returned
  };

  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={getIcon(platform.slug)} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
