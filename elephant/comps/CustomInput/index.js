import React from "react";
import styled, {css} from "styled-components/native";

const InputWrapper = styled.View`
  width: ${props=>props.MaxWidth ? props.MaxWidth : "100%"};
  height: auto;
  background-color: #F5F5F5;
  padding: 5px;
  padding-left: 0px;
  margin-bottom: 3px;
  border-radius: 15px;
  borderWidth: ${props=>props.border ? "2px" : "0px"};
  borderColor:  ${props=>props.border ? "#5C80BC" : "transparent"} ;
`;

const CInput = styled.TextInput`
  width: 100%;
  border: none;
  padding: 0px 20px;
  color: #292c42;
  font-weight: 400;
  font-size: 18px;
  
  height: 30px;
  &::placeholder {
    font-weight: 500;
    color: #dce0fb;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const Small = styled.Text`
  color: #AFAFAF;
  margin-left: 15px;
  display: ${props=>props.smalldisplay ? "flex" : "none"}
`;

const FullWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;

`;

const InputTitle = styled.Text`
  color: ${(props) => (props.colorhighlight ? "#5c80bc " : "#000000")};
  font-size: 24px;
  margin-bottom: ${(props) => (props.subdisplay ? "8px" : "15px")};
  display: ${(props) => (props.display ? "flex" : "none")};
  font-weight: 600;
  margin-top:  ${(props) => (props.seperation ? "15px" : "0px")};
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
  MiniSeperation,
  onChange,
  border,
  onFocus,
  value,
  password,
  small,
  smalldisplay,
  MaxWidth
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
          
      <InputWrapper border={border} MaxWidth={MaxWidth}>
        <CInput
          MaxWidth={MaxWidth}
          secureTextEntry={password}
          id="searchinput"
          type="text"
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={() => {}}
          onKeyUp={() => {}}
          value={value}
        ></CInput>
      </InputWrapper>
      <Small smalldisplay={smalldisplay}>
        
        {small}
      </Small>
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
  MiniSeperation: false,
  smalldisplay: false
};

export default CustomInput;
