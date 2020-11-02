import React from "react";
import styled from "styled-components/native";

const InputWrapper = styled.View`
  width: 100%;
  height: auto;
  background-color: #ededed;
  padding: 15px;
  border-radius: 17px;
  margin-bottom: 18px;
`;

const CInput = styled.TextInput`
  width: 100%;
  border: none;
  padding: 0px 20px;
  color: #292c42;
  font-weight: 400;
  font-size: 18px;
  &::placeholder {
    font-weight: 500;
    color: #dce0fb;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const FullWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputTitle = styled.Text`
  color: ${(props) => (props.colorhighlight ? "#5c80bc " : "#000000")};
  font-size: 26px;
  margin-bottom: ${(props) => (props.subdisplay ? "8px" : "16px")};
  display: ${(props) => (props.display ? "block" : "none")};
`;

const InputMiniTitle = styled.Text`
  color: #000000;
  font-size: 18px;
  margin-left: 15px;
  margin-bottom: ${(props) => (props.titledisplay ? "8px" : "0px")};
  display: ${(props) => (props.titledisplay ? "block" : "none")};
`;

const InputSubTitle = styled.Text`
  color: #b1b1b1;
  font-size: 18px;
  margin-left: 15px;
  margin-bottom: ${(props) => (props.subdisplay ? "8px" : "0px")};
  display: ${(props) => (props.subdisplay ? "block" : "none")};
`;

const CustomInput = ({
  Display,
  subtext,
  SubDisplay,
  ColorHighlight,
  Title,
  placeholder,
  TitleDisplay,
  MiniTitle
}) => {
  return (
    <FullWrapper>
      <InputTitle
        colorhighlight={ColorHighlight}
        subdisplay={SubDisplay}
        display={Display}
      >
        {Title}
      </InputTitle>
      <InputMiniTitle titledisplay={TitleDisplay}>{MiniTitle}</InputMiniTitle>
      <InputSubTitle subdisplay={SubDisplay}>{subtext}</InputSubTitle>
      <InputWrapper>
        <CInput
          id="searchinput"
          type="text"
          placeholder={placeholder}
          onFocus={() => {}}
          onBlur={() => {}}
          onKeyUp={() => {}}
        ></CInput>
      </InputWrapper>
    </FullWrapper>
  );
};

CustomInput.defaultProps = {
  Display: false,
  subtext: "This is a subtitle",
  SubDisplay: false,
  ColorHighlight: false,
  Title: "Big Title",
  placeholder: "Placeholder",
  TitleDisplay: false,
  MiniTitle: "Mini Title"
};

export default CustomInput;
