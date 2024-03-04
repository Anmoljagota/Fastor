import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import InputChild from "./InputChild";
import { Link } from "react-router-dom";

const CustomComponent = ({
  length,
  maxlength,
  heading,
  subheading,
  btnText,
  handlePaste,
  currentdata,
  handlecheck,
  inputref,
  handlebackspace,
  Checklogin,
  error,
}) => {
  return (
    <Flex flexDirection={"column"} gap={"2rem"} m={"auto"} p={15}>
      {/* <VStack border={"1px solid red"} textAlign={"left"} spacing={0}> */}
      <VStack alignItems="flex-start" p={0}>
        <Box
          fontWeight={"700"}
          fontSize={"2.6rem"}
          color={"#1E232C"}
          lineHeight={"33.8px"}
          letterSpacing={-1}
        >
          {heading}
        </Box>
        <Box
          fontWeight={"500"}
          fontSize={"1.6rem"}
          color={"var(--primary-color)"}
        >
          {subheading}
        </Box>
      </VStack>
      {/* </VStack> */}
      <Flex gap={"1rem"} flex={1}>
        {currentdata.map((_, index) => (
          <InputChild
            key={index}
            maxlength={maxlength}
            length={length}
            handlecheck={(e) => handlecheck(e, index)}
            handlebackspace={(e) => handlebackspace(e, index)}
            handlePaste={handlePaste}
            ref={
              length > 1
                ? (data) => {
                    inputref.current[index] = data;
                  }
                : null
            }
          />
        ))}
      </Flex>
      {error == "Number should be atleast 10 digit" && (
        <span style={{ color: "red", fontSize: "12px" }}>
          Number should be atleast 10 digit
        </span>
      )}
      {/* <Link to={length > 1 ? null : "login"}> */}
      <Button
        bg={"#FF6D6A"}
        height={"56px"}
        w={"100%"}
        color={"#FFFFFF"}
        fontWeight={"500"}
        borderStyle={"none"}
        fontSize={"1.5rem"}
        borderRadius={"0.8rem"}
        onClick={Checklogin}
        cursor={"pointer"}
      >
        {btnText}
      </Button>
      {/* </Link> */}
      {length > 1 && (
        <Text
          textAlign={"center"}
          mt={0}
          color={"#1E232C"}
          fontWeight={"700"}
          fontSize={"15px"}
          letterSpacing={"1%"}
        >
          Didn’t received code?{" "}
          <span style={{ color: "#3e56b3", cursor: "pointer" }}>Resend</span>
        </Text>
      )}
    </Flex>
  );
};

export default CustomComponent;
