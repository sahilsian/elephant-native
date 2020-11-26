import React from "react";
import styled from "styled-components/native";

const TextyInput = styled.TextInput`
  width: 100%;
  background-color: #ededed;
  border: none;
  padding-bottom: 50px;
  color: #000;
  font-size: 16px;
  &:focus {
    outline: none;
    border: none;
  }
`;
const InputMiniTitle = styled.Text`
  color: #000000;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 0px;
  display: ${(props) => (props.titledisplay ? "flex" : "none")};
  margin-top:  ${(props) => (props.miniseperation ? "15px" : "0px")};
`;

const InputSubTitle = styled.Text`
  color: #b1b1b1;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 0px;
  display: ${(props) => (props.subdisplay ? "flex" : "none")};
`;

const Wrapper = styled.View`
  background-color: #ededed;
  padding: 15px;
  border-radius: 15px;
  margin: 15px;
  width: 100%;
  height: 200px;
`;

const FullWrapper = styled.View`
  width: 100%;
 
`;

const CenterAlign = styled.View`
  align-items: center;
  width: 100%;
`

const CustomTextInput = ({ 
  bgColor, 
  placeholder,
  subtext,
  SubDisplay,
  TitleDisplay,
  MiniTitle,
  onChangeText,
  MiniSeperation,
  value
 }) => {
  return (

    <FullWrapper>
      
      <InputMiniTitle
      titledisplay={TitleDisplay}
      miniseperation={MiniSeperation}
      >{MiniTitle}</InputMiniTitle>
      <InputSubTitle 
      subdisplay={SubDisplay}>
        {subtext}
      </InputSubTitle>
      <CenterAlign>
        <Wrapper>
        
        <TextyInput
          wrap="hard"
          multiline={true}
          maxlength={250}
          bgColor={bgColor}
          placeholder={placeholder}
          rows={"3"}
          onChangeText={onChangeText}
          value={value}
        ></TextyInput>
        </Wrapper>
      </CenterAlign>
      

      
    </FullWrapper>
    
  );
};

CustomTextInput.defaultProps = {
  placeholder: "Input your text here....",
  DisplayIt: false,
  subtext: "This is a subtitle",
  SubDisplay: false,
  TitleDisplay: false,
  MiniTitle: "Mini Title",
  Seperation: false,
  MiniSeperation: false
};

export default CustomTextInput;
