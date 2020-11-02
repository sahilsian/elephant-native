import React from "react";
import styled from "styled-components/native";

const TextyInput = styled.TextInput`
  width: 100%;
  background-color: #ededed;
  border: none;
  padding-bottom: 50px;
  color: #000;
  font-size: 12pt;
  resize: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

const Wrapper = styled.View`
  background-color: #ededed;
  padding: 15px;
  border-radius: 15px;
  margin: 15px;
  width: 90%;
  height: 100px;
`;

const CustomTextInput = ({ bgColor, placeholder }) => {
  return (
    <Wrapper>
      <TextyInput
        wrap="hard"
        maxlength={250}
        bgColor={bgColor}
        placeholder={placeholder}
        rows={"3"}
      ></TextyInput>
    </Wrapper>
  );
};

CustomTextInput.defaultProps = {
  placeholder: "Input your text here...."
};

export default CustomTextInput;
