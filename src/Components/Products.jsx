import React, { useEffect } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiSolidOffer } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
import { Crousel } from "./Crousel";
import { FaStar } from "react-icons/fa";
import { CgDollar } from "react-icons/cg";

import { useState } from "react";
import { Link } from "react-router-dom";
import Offers from "./Offers";

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
        <Flex
          gap={"2rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box w={"45%"} bg={"#e0dfdc"} p={"1.5rem"} borderRadius={"0.8rem"}>
            <Box fontSize={"2rem"} color={"var(--primary-color)"}>
              Karan
            </Box>
            <Box fontSize={"1.5rem"}>Let's explore this evening</Box>
          </Box>
          <Flex w={"45%"} gap={"1.5rem"}>
            <Box className="">
              <Center bg={"#ff00008f"} p={"0.8rem"} borderRadius={"0.8rem"}>
                <BiSolidOffer color="white" fontSize={"20px"} />
              </Center>
              <Box color="#838BA1" fontSize={"1.2rem"} mt={"1rem"}>
                Offers
              </Box>
            </Box>
            <Box>
              <Center bg="#476dc5" p={"0.8rem"} borderRadius={"0.8rem"}>
                <LuWallet color="white" fontSize={"2rem"} />
              </Center>
              <Box color="#838BA1" fontSize={"1.2rem"} mt={"1rem"}>
                Wallet
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Box mt={20}>
          <Crousel />
        </Box>
        <Box>
          <Text fontSize={"2rem"}>Popular Ones</Text>
          <Box className="container">
            {data.length > 0 &&
              data.map((items, index) => (
                <Link
                  to={`/single/${items.restaurant_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Flex justifyContent={"space-between"} key={index} mt={40}>
                    <Image
                      w={"35%"}
                      src={items.images[0].url}
                      borderRadius={"1.5rem"}
                    />
                    <Box w={"58%"}>
                      <Box fontSize={"20px"} color={"#505259"}>
                        Lazy Bear
                      </Box>
                      <Box fontSize={"14px"} color={"#838BA1"}>
                        Cakes, pastres, Pastas, Connouant Place, New Delhi
                      </Box>
                      <Box mt={5}>
                        <Offers mt={0} />
                      </Box>
                      <Flex justifyContent={"space-between"} mt={8}>
                        <VStack spacing={"0"}>
                          <HStack mt={"0"} color={"#505259"}>
                            <FaStar style={{ fontSize: "15px" }} />{" "}
                            <span
                              style={{ fontSize: "18px", color: "#505259" }}
                            >
                              {items.rating.restaurant_avg_rating}
                            </span>
                          </HStack>
                          <Box color={"#838BA1"}>PoPularity</Box>
                        </VStack>
                        <VStack spacing={"0"}>
                          <HStack mt={"0"} p={"0"} color={"#505259"}>
                            <CgDollar
                              style={{ fontSize: "18px", color: "#838BA1" }}
                            />
                            <span style={{ fontSize: "18px" }}>4.5</span>
                          </HStack>
                          <Box color={"#838BA1"}>PoPularity</Box>
                        </VStack>
                      </Flex>
                    </Box>
                  </Flex>
                </Link>
              ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
