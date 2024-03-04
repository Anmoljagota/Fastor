import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CiStar } from "react-icons/ci";

const Offers = ({ mt }) => {
  return (
    <HStack spacing={10} alignItems={"center"}>
      <Image
        src={
          "https://github.com/Anmoljagota/Fastor/blob/main/public/Vector.png?raw=true"
        }
      />
      <Text
        fontWeight={"600"}
        fontSize={"12px"}
        lineHeight={"14.4px"}
        color={"#D39171"}
        p={mt == 0 && 0}
        m={mt == 0 && 0}
      >
        4 Offers Trending
      </Text>
    </HStack>
  );
};

export default Offers;
