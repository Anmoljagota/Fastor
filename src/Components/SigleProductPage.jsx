import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const SingleProductPage = () => {
  const { id } = useParams();
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
  console.log("singledata", data);
  useEffect(() => {
    JSON.parse(localStorage.getItem("token")) && Getdata();
  }, []);
  return (
    <div>
      {data.length > 0 &&
        data.map((ele) => {
          return (
            ele.restaurant_id == id && (
              <Box p={5}>
                <Image height={"350px"} w={"100%"} src={ele.images[0].url} />
                <Box p={15}>
                  <Flex justifyContent={"space-between"}>
                    <VStack spacing={0} align={"start"}>
                      <Box
                        fontWeight={"700"}
                        fontSize={"18px"}
                        lineHeight={"21.6px"}
                        color={"#1E232C"}
                      >
                        {ele.restaurant_name}
                      </Box>
                      <Box
                        fontSize={"1.6rem"}
                        fontWeight={"500"}
                        lineHeight={"19.2px"}
                        color={"#505259"}
                      >
                        {ele.location.location_locality}{" "}
                        {ele.location.city_name}
                      </Box>
                    </VStack>
                    <Flex
                      justifyContent={"center"}
                      gap={"0.5rem"}
                      alignItems={"center"}
                      fontSize={"1.5rem"}
                    >
                      <CiStar />
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#595959",
                          lineHeight: "14.4px",
                        }}
                      >
                        {ele.rating.restaurant_avg_rating}
                      </span>
                    </Flex>
                  </Flex>
                  <Text
                    fontWeight={"600"}
                    fontSize={"12px"}
                    lineHeight={"14.4px"}
                    color={"#D39171"}
                  >
                    4 Offers Trending
                  </Text>
                </Box>
              </Box>
            )
          );
        })}
    </div>
  );
};

export default SingleProductPage;
