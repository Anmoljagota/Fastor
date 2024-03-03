import React, { useRef, useState } from "react";

import { Flex } from "@chakra-ui/react";
import CustomComponent from "../Components/CustomComponent";

const Home = () => {
  const registerRef = useRef();
  const [currentdata] = useState(new Array(1).fill("-"));
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
    >
      <CustomComponent
        length={1}
        // maxlength={1}
        heading={"Enter Your Mobile Number"}
        subheading={"We will send you the 4 digit verification conde"}
        btnText={"Send Code"}
        registerRef={registerRef}
        currentdata={currentdata}
      />
    </Flex>
  );
};

export default Home;
