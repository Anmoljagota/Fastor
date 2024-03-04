import React, { useRef, useState } from "react";
import CustomComponent from "../Components/CustomComponent";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  // const [checklog, setChecklog] = useState();
  const [token, setToken] = useState("");
  const inputref = useRef([]);

  const Checklogin = async () => {
    if (
      inputref.current[0].value == "1" &&
      inputref.current[1].value == "2" &&
      inputref.current[2].value == "3" &&
      inputref.current[3].value == "4" &&
      inputref.current[4].value == "5" &&
      inputref.current[5].value == "6"
    ) {
      try {
        const data = await axios.post(
          "https://staging.fastor.in/v1/pwa/user/login",
          {
            phone: "1234567899",
            otp: "123456",
            dial_code: "+91",
          }
        );

        if (data.data.data.token) {
          localStorage.setItem("token", JSON.stringify(data.data.data.token));
        }
        navigate("/restaurants");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("wrong pin");
    }
  };

  const targetlength = 0;
  const length = 6;
  const [currentdata] = useState(new Array(length).fill("-"));
  const [apply, setApply] = useState("");
  const [storedata] = useState(new Array(length).fill(""));

  const handlecheck = (e, index) => {
    console.log("i am index", index);
    console.log(e, index);
    currentdata[index] = e.target.value;
    if (e.target.value.length > targetlength && index < length - 1) {
      console.log(inputref.current, "checking");
      inputref.current[index + 1].focus();
    }
  };
  function handlebackspace(e, index) {
    storedata[index] = e.target.value;

    if (index > 0 && e.target.value.length < 1) {
      inputref.current[index - 1].focus();
    }

    setApply(storedata.join(""));
  }

  function handlePaste(e) {
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((ele, index) => index < length);
    data.forEach((ele, index) => {
      storedata[index] = ele;
      inputref.current[index].value = ele;
    });
    // console.log("back", data);
  }
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
    >
      <CustomComponent
        length={length}
        maxlength={1}
        heading={"OTP Verification"}
        subheading={
          "Enter the verification code we just sent on your Mobile Number."
        }
        btnText={"Verify"}
        targetlength={targetlength}
        currentdata={currentdata}
        handlecheck={handlecheck}
        handlebackspace={handlebackspace}
        inputref={inputref}
        handlePaste={handlePaste}
        Checklogin={Checklogin}
      />
    </Flex>
  );
};

export default Login;
