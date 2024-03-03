import { Input } from "@chakra-ui/react";
import React, { forwardRef } from "react";

const InputChild = forwardRef(
  ({ maxlength, length, handlecheck, handlebackspace, handlePaste }, ref) => {
    console.log("hlo...");
    console.log("i am maxlength", maxlength);
    const handleKeyup = (e) => {
      if (e.keyCode === 8) {
        handlebackspace(e);
      } else {
        handlecheck(e);
      }
    };
    return (
      <Input
        placeholder={length <= 1 && "Enter your email"}
        border={"1px solid #DADADA"}
        background={"#F7F8F9"}
        fontWeight={"500"}
        size={"1.5rem"}
        borderRadius={"0.8rem"}
        // p={15}
        w={length > 1 ? "15%" : "100%"}
        _placeholder={{ fontWeight: "500", color: "#8391A1" }}
        p={"1.8rem 1rem"}
        maxlength={maxlength}
        ref={ref}
        //   onChange={handlecheck}
        onKeyUp={handleKeyup}
        onPaste={handlePaste}
        //   onPaste={handlePaste}
      />
    );
  }
);

export default InputChild;
