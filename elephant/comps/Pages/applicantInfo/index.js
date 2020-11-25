import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"

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
  margin-bottom: 20px;
`;

const FormWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
`;

const ApplicantInfo = ({history, location}) => {
  const [about, setAbout] = useState("")
  useEffect(()=> {
    console.log(location.state)
  })
  return (

        <Frame>
            <FullWrapper>
              <TitleBody>
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
                    onChangeText={(e)=> {
                        setAbout(e)
                    }}
                    >

                    </CustomTextInput>
                </FormWrapper>
              </TitleBody>

                <NextButton onPress={()=> {
                  history.push("/applicantinfo", {
                      firstname: location.state.firstname,
                      lastname: location.state.lastname,
                      disorders: location.state.disorder,
                      severity: location.state.severity,
                      interests: location.state.interest,
                      about: about,
                      iseducator: location.state.iseducator,
                  })
                }}></NextButton>
            </FullWrapper>
        </Frame>


  );
};

ApplicantInfo.defaultProps = {};

export default ApplicantInfo;
