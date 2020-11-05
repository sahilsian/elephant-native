import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"

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

const TextWrapper = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const FormWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
`;

const ApplicantInfo = ({}) => {
  return (
      <ScrollView style={{width: "100%", height: "100%"}}>

        <Frame>
            <FullWrapper>
                <TextWrapper>
                    <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information."}></TextComp>
                </TextWrapper>
                <FormWrapper>
                    <CustomTextInput 
                    MiniTitle={"Tell us about them! "}
                    MiniSeperation={true}
                    Seperation={true}
                    TitleDisplay={true}
                    SubDisplay={true}
                    placeholder={"Who are they? what are they like?"}
                    subtext={"(The more you can tell us the better!)"}
                    >

                    </CustomTextInput>
                </FormWrapper>
                <NextButton></NextButton>
            </FullWrapper>
        </Frame>
      </ScrollView>


  );
};

ApplicantInfo.defaultProps = {};

export default ApplicantInfo;
