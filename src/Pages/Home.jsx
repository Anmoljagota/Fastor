import React, { useRef, useState } from "react";

import { Flex } from "@chakra-ui/react";
import CustomComponent from "../Components/CustomComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [collect, setCollect] = useState("");
  const [error, setError] = useState("");
  const registerRef = useRef();
  const [currentdata] = useState(new Array(1).fill("-"));
  function handlecheck(e) {
    setCollect(e.target.value);
    setError("");
  }
  const Checklogin = async () => {
    const data = await axios.post(
      "https://staging.fastor.in/v1/pwa/user/register"
    );
    if (collect.length == 10) {
      navigate("/login");
    } else {
      setError("Number should be atleast 10 digit");
    }
  };
  function handlebackspace(e, index) {}
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
        handlecheck={handlecheck}
        Checklogin={Checklogin}
        handlebackspace={handlebackspace}
        error={error}
      />
    </Flex>
  );
};

export default Home;
