import React from "react";
import styled from "styled-components/native";

const InputWrapper = styled.View`
  width: 100%;
  height: auto;
  background-color: #F5F5F5;
  padding: 5px;
  padding-left: 0px;
  border-radius: 15px;
  margin-bottom: 12px;
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
  margin-bottom: ${(props) => (props.subdisplay ? "8px" : "20px")};
  display: ${(props) => (props.display ? "flex" : "none")};
  font-weight: 600;
  margin-top:  ${(props) => (props.seperation ? "20px" : "0px")};
`;

const InputMiniTitle = styled.Text`
  color: #000000;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: ${(props) => (props.titledisplay ? "8px" : "0px")};
  display: ${(props) => (props.titledisplay ? "flex" : "none")};
  margin-top:  ${(props) => (props.miniseperation ? "15px" : "0px")};
`;

const InputSubTitle = styled.Text`
  color: #b1b1b1;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: ${(props) => (props.subdisplay ? "8px" : "0px")};
  display: ${(props) => (props.subdisplay ? "flex" : "none")};
`;

const CustomInput = ({
  DisplayIt,
  subtext,
  SubDisplay,
  ColorHighlight,
  Title,
  placeholder,
  TitleDisplay,
  MiniTitle,
  Seperation,
  MiniSeperation
}) => {
  return (
    <FullWrapper>
      

      <InputTitle
        colorhighlight={ColorHighlight}
        subdisplay={SubDisplay}
        display={DisplayIt}
        seperation={Seperation}
      >
        {Title}
      </InputTitle>
      <InputMiniTitle
      titledisplay={TitleDisplay}
      miniseperation={MiniSeperation}
      >{MiniTitle}</InputMiniTitle>
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
  DisplayIt: false,
  subtext: "This is a subtitle",
  SubDisplay: false,
  ColorHighlight: false,
  Title: "Big Title",
  placeholder: "Placeholder",
  TitleDisplay: false,
  MiniTitle: "Mini Title",
  Seperation: false,
  MiniSeperation: false
};

export default CustomInput;
