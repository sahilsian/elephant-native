import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView } from 'react-native';
import NextButton from "../../NextButton"
import CustomTextInput from "../../CustomTextInput"
import WelcomeComp from "../../Welcome";
import RadioButtons from "../../radioButtons";
import Slider from "../../slider";
import style from "../../../storybook/stories/CenterView/style";
import BackButton from "../../BackButton"

const Frame = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`;

const FullWrapper = styled.View`
  width: 90%;
  flex-direction: column;
  height: 90%;
  align-items: center;

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
  width: 90%;
  flex-direction: column;
`;

const BackWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;


const InterestWrapper = styled.View`
    
`;


const CaregiverSignupThree = ({location, history}) => {
  const [severity, setSeverity] = useState(0)
  const [disorder, setDisorder] = useState([])
  const [pressed, setPressed] = useState(false)
  // const handlePress = e => {

  // }

  const DisorderArray = [
    "Autism", 
    "Down Syndrome", "ADD/ADHD", 
    "Fragile X Syndrome", 
    "Apert Syndrome", 
    "Williams Syndrome", 
    "Developmental Delays"
]


  return (

        <Frame>
            <FullWrapper>
              <BackWrapper>
                <BackButton onPress={() => history.push("/signup")}></BackButton>
              </BackWrapper>
              <TitleBody>
                <TextWrapper>
                    <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information.  THREE"}></TextComp>
                </TextWrapper>
                <FormWrapper>
                <TextComp  weight={"bold"} fontSize={"20px"} text={"What are their Interests?"}></TextComp>
                <TextComp fontSize={"20px"} color={"#B1B1B1"} text={"Select from popular categories below or write your own in the space provided"}></TextComp>   
                </FormWrapper>
              </TitleBody>
              
                <NextButton></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignupThree.defaultProps = {};

export default CaregiverSignupThree;
