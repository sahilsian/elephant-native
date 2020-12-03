import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, Alert } from 'react-native';
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
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`;

const TextTitle = styled.View`
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

const SliderWrapper = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

const SliderContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const SliderOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const BackWrapper = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;


const CaregiverSignupTwo = ({location, history}) => {
  const [severity, setSeverity] = useState(0)
  const [disorder, setDisorder] = useState("")
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

  useEffect(()=> {
    console.log(location.state)

    if(location.state.disorders !== undefined) {
      setDisorder(location.state.disorders)

    }
    if(location.state.severity !== 0) {
      setSeverity(location.state.severity)
    }
  }, [])

  return (

        <Frame>
            <FullWrapper>
              <BackWrapper>
                <BackButton onPress={() => history.push("/caregiversignup", {
                  firstname: location.state.firstname,
                  lastname: location.state.lastname,
                  iseducator: location.state.iseducator,
                  disorders: disorder,
                  severity: severity,
                  about: location.state.about,
                  email: location.state.email,
                  password: location.state.password,
                  username: location.state.username,
                  userGender: location.state.userGender, 
                  age: location.state.age,
                  phonenumber: location.state.phonenumber,
                  interests: location.state.interests,
                  caregiverName: location.state.caregiverName,
                  caregiverLastName: location.state.caregiverLastName,
                  city: location.state.city
                })}></BackButton>
              </BackWrapper>
              <TitleBody>
                <TextWrapper>
                    <TextComp fontSize={"20px"} text={"Please fill out the following with the applicants information."}></TextComp>
                </TextWrapper>
                <FormWrapper>
                <TextComp  weight={"bold"} fontSize={"20px"} text={"Type of Disorder"}></TextComp>
                    {DisorderArray.map((e, i)=> {
                      return <RadioButtons
                        text={e}
                        bgcolor={disorder.includes(e) ? "#5C80BC" : "#DDDDDD"}
                        onPress={() => {
                          setDisorder(e)
                        }}
                      />

                    })}
                </FormWrapper>
              </TitleBody>
              <SliderWrapper>
                <TextComp weight={"bold"} fontSize={"20px"} text={"Level of Severity"}></TextComp>
                <SliderContainer>
                  <Slider
                    onValueChange={value => {
                      setSeverity(value)
                      console.log(severity)
                    }}
                    value={location.state.severity ? location.state.severity : 0}
                  >
                  </Slider>
                  <SliderOptions>
                    <TextComp 
                      text="Mild"
                      
                    />
                    <TextComp 
                      text="Moderate"
                      
                    />
                    <TextComp 
                      text="Severe"
                      
                    />
                  </SliderOptions>
                </SliderContainer>
              </SliderWrapper>
                <NextButton onPress={()=> {
                  if(disorder === "") {
                    Alert.alert(
                      'Elephant',
                      'Please select a disability.',
                      [
                        {
                          text: 'Ok',
                          onPress: () => console.log("ok")
                        }
                      ],
                      { cancelable: true }
                    
                    )
                  } else {

                  history.push("/caregiversignupthree", {
                    firstname: location.state.firstname,
                    lastname: location.state.lastname,
                    iseducator: location.state.iseducator,
                    disorders: disorder,
                    severity: severity,
                    about: location.state.about,
                    email: location.state.email,
                    password: location.state.password,
                    username: location.state.username,
                    userGender: location.state.userGender, 
                    age: location.state.age,
                    phonenumber: location.state.phonenumber,
                    interests: location.state.interests,
                    caregiverName: location.state.caregiverName,
                    caregiverLastName: location.state.caregiverLastName,
                  })
                  }

                }}></NextButton>
            </FullWrapper>
        </Frame>


  );
};

CaregiverSignupTwo.defaultProps = {};

export default CaregiverSignupTwo;
