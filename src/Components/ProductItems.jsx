import React from "react";
import { Flex, HStack, Image, VStack, Box } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import Offers from "./Offers";
const ProductItems = ({ items }) => {
    console.log("chachaaaa");
  return (
    <Flex justifyContent={"space-between"} border={"1px  solid red"}>
      <Image w={"122px"} src={items.images[0].url} />
      <Box w={"57%"}>
        <Box fontSize={"20px"}>Lazy Bear</Box>
        <Box fontSize={"14px"}>
          Cakes, pastres, Pastas, Connouant Place, New Delhi
        </Box>
        <Offers ele={items.rating.restaurant_avg_rating} />
        <Flex mt={"0.5rem"} justifyContent={"space-between"}>
          <VStack spacing={"0"}>
            <HStack mt={"0"}>
              <FaStar style={{ fontSize: "15px" }} />{" "}
              <span style={{ fontSize: "18px" }}>
                {items.rating.restaurant_avg_rating}
              </span>
            </HStack>
            <Box>PoPularity</Box>
          </VStack>
          <VStack spacing={"0"}>
            <HStack mt={"0"}>
              <FaStar style={{ fontSize: "15px" }} />{" "}
              <span style={{ fontSize: "18px" }}>4.5</span>
            </HStack>
            <Box>PoPularity</Box>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductItems;
