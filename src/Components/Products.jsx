import React, { useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Crousel } from "./Crousel";
import { FaStar } from "react-icons/fa";
import { CgDollar } from "react-icons/cg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const Getdata = async () => {
    try {
      const res = await axios.get(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
        {
          headers: {
            Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    JSON.parse(localStorage.getItem("token")) && Getdata();
  }, []);
  return (
    <Container fontWeight={"500"}>
      <Box
        p={15}
        // Optional margin bottom to create space between elements
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Add your box shadow here
        }}
        letterSpacing={"0.2rem"}
        fontSize={"15px"}
        color={"var(--primary-color)"}
      >
        <Box> Pre Order From</Box>
        <Box color={"#1E232C"} fontSize={17}>
          Connaught Palace
        </Box>
      </Box>
      <Box width={"90%"} m={"auto"}>
        <Crousel />
      </Box>
      <Box w={"90%"} m={"auto"}>
        <Text fontSize={"2rem"}>Popular Ones</Text>
        {data.length > 0 &&
          data.map((items, index) => (
            <Link to={`/single/${items.restaurant_id}`}>
              <Flex justifyContent={"space-between"} key={index} mt={40}>
                <Image
                  w={"122px"}
                  src={items.images[0].url}
                  borderRadius={"1.5rem"}
                />
                <Box w={"57%"}>
                  <Box fontSize={"20px"}>Lazy Bear</Box>
                  <Box fontSize={"14px"}>
                    Cakes, pastres, Pastas, Connouant Place, New Delhi
                  </Box>
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
                      <HStack mt={"0"} p={"0"}>
                        <CgDollar style={{ fontSize: "18px" }} />
                        <span style={{ fontSize: "18px" }}>4.5</span>
                      </HStack>
                      <Box>PoPularity</Box>
                    </VStack>
                  </Flex>
                </Box>
              </Flex>
            </Link>
          ))}
      </Box>
    </Container>
  );
};

export default Products;
