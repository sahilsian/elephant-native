import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import WelcomeComp from "../../Welcome";
import RadioButtons from "../../radioButtons";

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: space-between;

`;

const TitleBody = styled.View`
  align-items: center;
  width: 100%;
`;

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const FormWrapper = styled.View`
  width: 80%;
  flex-direction: column;
  margin-bottom: 10px;
  height: 70%;
  justify-content: space-between;
`;

const TextTitle = styled.View`
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;
const CaregiverSignupTwo = ({}) => {
  return (

        <Frame>
            <FullWrapper>
              <TitleBody>
                <TextWrapper>
                    <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information."}></TextComp>
                </TextWrapper>
                <FormWrapper>
                <TextComp weight={"bold"} fontSize={"20px"} text={"Type of Disorder"}></TextComp>
                    {/* map start */}
                    <RadioButtons text={"Autism"}></RadioButtons>
                    <RadioButtons text={"Down Syndrome"}></RadioButtons>
                    <RadioButtons text={"ADD/ADHD"}></RadioButtons>
                    <RadioButtons text={"Fragile X Syndrome"}></RadioButtons>
                    <RadioButtons text={"Apert Syndrome"}></RadioButtons>
                    <RadioButtons text={"Williams Syndrome"}></RadioButtons>
                    <RadioButtons text={"Developmental Delays"}></RadioButtons>
                    {/* map end */}
                </FormWrapper>
              </TitleBody>

                <NextButton></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignupTwo.defaultProps = {};

export default CaregiverSignupTwo;
