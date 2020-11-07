import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import WelcomeComp from "../../Welcome";

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
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
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
                    <CustomInput 
                    placeholder={"First Name"}
                    >
                    </CustomInput>
                    <CustomInput 
                    placeholder={"Last Name"}
                    >
                    </CustomInput>
                </FormWrapper>
              </TitleBody>

                <NextButton></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignupTwo.defaultProps = {};

export default CaregiverSignupTwo;
