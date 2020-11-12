import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"

const Frame = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const FormWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
const ContactForm = ({}) => {
  return (
      <ScrollView style={{width: "100%", height: "100%"}}>

      <Frame>
      <FullWrapper>
      <TextWrapper>
        <TextComp fontSize={"20px"} text={"Please fill out the following with the Your information"}></TextComp>
      </TextWrapper>
        <FormWrapper>
          <CustomInput
            DisplayIt={true}
            Title={"Name"}
            placeholder={"First Name"}
          ></CustomInput>
          <CustomInput placeholder={"Last Name"}></CustomInput>
          <CustomInput
            Seperation={true}
            DisplayIt={true}
            Title={"Contact Information"}
            placeholder={"Phone Number"}
            MiniSeperation={true}
            TitleDisplay={true}
            SubDisplay={true}
            MiniTitle={"Phone Number"}
            subtext={"(Atleast one number is mandatory)"}
          ></CustomInput>
          <CustomInput placeholder={"Home Number (optional)"}></CustomInput>
          <CustomInput
            MiniSeperation={true}
            Seperation={true}
            TitleDisplay={true}
            MiniTitle={"Email Address"}
            placeholder={"Email Address"}
          ></CustomInput>
          <CustomInput
            Seperation={true}
            DisplayIt={true}
            TitleDisplay={true}
            Title={"Location"}
            MiniTitle={"What city are you based in"}
            placeholder={"City"}
          ></CustomInput>
        </FormWrapper>
        <NextButton></NextButton>
      </FullWrapper>
      </Frame>
      </ScrollView>


  );
};

ContactForm.defaultProps = {};

export default ContactForm;
